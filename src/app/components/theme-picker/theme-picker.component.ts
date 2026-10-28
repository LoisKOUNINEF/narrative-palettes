import { removeOverlaysWithin } from 'a11y-elements/core';
import { ThemesService } from '../../services/themes/themes.service.js';
import { Component, html, raw } from '../../../core/index.js';
import { shuffle } from '../../utils/random.js';

export interface ThemePickerConfig {
  pairs: IThemePair[];
  label: string;
  // Keeps the drawer, floating and radio group names unique per view
  id: string;
  // Runs after a pick has changed the current theme
  onPick: (theme: ITheme) => void;
}

// Matches the `medium` breakpoint (respond-to(medium) is max-width: 768px)
const DESKTOP_QUERY = '(min-width: 769px)';

// tabindex="0" on native controls: Safari's default Tab order skips them without an explicit tabindex
// (a radio group with it on every radio is still a single Tab stop)
function renderOption(theme: ITheme, text: string, name: string, current: string) {
  return html`<label class="theme-picker__option theme-${theme.cssName}">
    <input type="radio" class="theme-picker__input" tabindex="0" name="${name}" value="${theme.cssName}" ${theme.cssName === current ? raw('checked') : ''}>
    <span class="theme-picker__name">${text}</span>
  </label>`;
}

// One card per pair, all in a single radio group: one Tab stop, arrow keys go through every theme
function renderGroup(config: ThemePickerConfig, location: 'sidebar' | 'drawer') {
  const current = ThemesService.currentTheme.cssName;
  const name = `theme-${config.id}-${location}`;
  return html`<a11y-radio-group aria-label="${config.label}">
    ${config.pairs.map((pair) => html`<div class="theme-picker__card" role="group" aria-labelledby="${name}-${pair.light.cssName}">
      <h3 class="theme-picker__card-title" id="${name}-${pair.light.cssName}">${pair.name}</h3>
      <div class="theme-picker__card-options">
        ${renderOption(pair.light, 'Light', name, current)}
        ${renderOption(pair.dark, 'Dark', name, current)}
      </div>
    </div>`)}
  </a11y-radio-group>`;
}

function renderRandomButton() {
  return html`<button type="button" class="theme-picker__random" tabindex="0">Random theme</button>`;
}

// The list is rendered twice: inline for desktop, and in a drawer opened by a
// floating button for mobile. CSS shows one or the other (see the .scss).
// The drawer and floating move themselves to <body> during render, before
// data-event hydration: their events are delegated in onAfterRender.
const templateFn = (config: ThemePickerConfig) => html`
  <div class="theme-picker theme-picker--sidebar">${renderRandomButton()}${renderGroup(config, 'sidebar')}</div>
  <a11y-drawer id="theme-drawer-${config.id}" edge="left">
    <h2 class="theme-picker__drawer-title">${config.label}</h2>
    <div class="theme-picker theme-picker--drawer">${renderRandomButton()}${renderGroup(config, 'drawer')}</div>
  </a11y-drawer>
  <a11y-floating id="theme-floating-${config.id}" class="theme-picker__floating" position="bottom-left" controls="theme-drawer-${config.id}">
    <button type="button" class="theme-picker__toggle" tabindex="0">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity=".7"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor" opacity=".7"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor" opacity=".4"/>
      </svg>
      <span>${config.label}</span>
    </button>
  </a11y-floating>
`;

export class ThemePickerComponent extends Component<HTMLElement, ThemePickerConfig> {
  private _drawer: HTMLElement | null = null;
  private readonly _desktopQuery = window.matchMedia(DESKTOP_QUERY);
  // An open drawer has no place on desktop, where the sidebar is shown
  private readonly _onDesktopChange = (event: MediaQueryListEvent) => {
    if (event.matches) this.closeDrawer();
  };

  constructor(mountTarget: HTMLElement, config: ThemePickerConfig) {
    super({ templateFn, mountTarget, config });
    this.listen('current-theme-changed', ({ theme }) => this.syncChecked(theme.cssName));
    this._desktopQuery.addEventListener('change', this._onDesktopChange);
  }

  // The previous render's drawer and floating live in <body> now
  protected override onBeforeRender(): void {
    removeOverlaysWithin(this.element);
    super.onBeforeRender();
  }

  protected override onAfterRender(): void {
    this._drawer = document.getElementById(`theme-drawer-${this.config.id}`);

    this.addListener(this.element, 'change', (event) => this.onThemeChange(event));
    this.addListener(this.element, 'click', (event) => this.onRandomClick(event));
    if (this._drawer) {
      this.addListener(this._drawer, 'change', (event) => this.onThemeChange(event));
      this.addListener(this._drawer, 'click', (event) => this.onRandomClick(event));
      this.addListener(this._drawer, 'click', (event) => this.onDrawerClick(event as MouseEvent));
    }
    super.onAfterRender();
  }

  protected override onBeforeDestroy(): void {
    this._desktopQuery.removeEventListener('change', this._onDesktopChange);
    removeOverlaysWithin(this.element);
    this._drawer = null;
    super.onBeforeDestroy();
  }

  // Removed with the component's own listeners on the next render or destroy
  private addListener(target: EventTarget, type: string, listener: EventListener): void {
    target.addEventListener(type, listener);
    this.eventListeners.push([target, type, listener]);
  }

  private onThemeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.matches('.theme-picker__input') || !input.checked) return;
    const theme = ThemesService.findTheme(this.config.pairs, input.value);
    if (theme) this.pickTheme(theme);
  }

  // Any theme of the list but the current one
  private onRandomClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.theme-picker__random')) return;
    const current = ThemesService.currentTheme;
    const [theme] = shuffle(this.config.pairs.flatMap((pair) => [pair.light, pair.dark]).filter((t) => t !== current));
    if (theme) this.pickTheme(theme);
  }

  private pickTheme(theme: ITheme): void {
    ThemesService.changeCurrentTheme(theme);
    this.config.onPick(theme);
  }

  // Close on pick, for pointer picks only: arrow keys also check radios (and fire
  // a click with detail 0), and keyboard users browse themes with them.
  // The random button closes it either way, to show the theme it picked.
  private onDrawerClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.theme-picker__random')) return this.closeDrawer();
    if (event.detail === 0) return;
    if (target.closest('.theme-picker__option')) this.closeDrawer();
  }

  private closeDrawer(): void {
    this._drawer?.removeAttribute('open');
  }

  // Keeps the sidebar and drawer groups on the same theme, without re-rendering
  private syncChecked(cssName: string): void {
    const groups = [this.element, this._drawer].filter((el): el is HTMLElement => el !== null);
    for (const group of groups) {
      group.querySelectorAll<HTMLInputElement>('.theme-picker__input').forEach((input) => {
        input.checked = input.value === cssName;
      });
    }
  }
}
