import { removeOverlaysWithin } from 'a11y-elements/core';
import { ThemesService } from '../../services/themes/themes.service.js';
import { Component, html, raw } from '../../../core/index.js';

export interface ThemePickerConfig {
  themes: ITheme[];
  label: string;
  // Keeps the drawer, floating and radio group names unique per view
  id: string;
}

// Matches the `medium` breakpoint (respond-to(medium) is max-width: 768px)
const DESKTOP_QUERY = '(min-width: 769px)';

// tabindex="0" on native controls: Safari's default Tab order skips them without an explicit tabindex
// (a radio group with it on every radio is still a single Tab stop)
function renderGroup(config: ThemePickerConfig, location: 'sidebar' | 'drawer') {
  const current = ThemesService.currentTheme.cssName;
  return html`<a11y-radio-group aria-label="${config.label}">
    ${config.themes.map((theme) => html`<label class="theme-picker__option theme-${theme.cssName}">
      <input type="radio" class="theme-picker__input" tabindex="0" name="theme-${config.id}-${location}" value="${theme.cssName}" ${theme.cssName === current ? raw('checked') : ''}>
      <span class="theme-picker__name">${theme.title}</span>
    </label>`)}
  </a11y-radio-group>`;
}

// The list is rendered twice: inline for desktop, and in a drawer opened by a
// floating button for mobile. CSS shows one or the other (see the .scss).
// The drawer and floating move themselves to <body> during render, before
// data-event hydration: their events are delegated in onAfterRender.
const templateFn = (config: ThemePickerConfig) => html`
  <div class="theme-picker theme-picker--sidebar">${renderGroup(config, 'sidebar')}</div>
  <a11y-drawer id="theme-drawer-${config.id}" edge="left">
    <h2 class="theme-picker__drawer-title">${config.label}</h2>
    <div class="theme-picker theme-picker--drawer">${renderGroup(config, 'drawer')}</div>
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
    if (this._drawer) {
      this.addListener(this._drawer, 'change', (event) => this.onThemeChange(event));
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
    const theme = this.config.themes.find((t) => t.cssName === input.value);
    if (theme) ThemesService.changeCurrentTheme(theme);
  }

  // Close on pick, for pointer picks only: arrow keys also check radios (and fire
  // a click with detail 0), and keyboard users browse themes with them.
  private onDrawerClick(event: MouseEvent): void {
    if (event.detail === 0) return;
    if ((event.target as HTMLElement).closest('.theme-picker__option')) this.closeDrawer();
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
