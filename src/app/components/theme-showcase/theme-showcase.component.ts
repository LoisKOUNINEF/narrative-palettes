import { ThemesService } from '../../services/themes/themes.service.js';
import { notify } from 'a11y-elements/overlays/snackbar';
import { Component, html } from '../../../core/index.js';
import { ButtonComponent } from '../common/button/button.component.js';

// The palette's colours in labelled groups; swatch classes are generated in the .scss
const COLOR_GROUPS: { label: string; keys: (keyof IThemeVariables)[] }[] = [
  { label: 'Base', keys: ['background', 'surface', 'text', 'textMuted'] },
  { label: 'Interactive', keys: ['primary', 'primaryHover', 'secondary', 'secondaryHover', 'accent'] },
  { label: 'Status', keys: ['success', 'error', 'warning', 'info'] },
  { label: 'Utility', keys: ['bgDisabled', 'textDisabled', 'border', 'borderStrong', 'overlay'] },
];

// textMuted -> text-muted: the CSS variable and swatch class name
const toKebab = (key: string) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

function renderColorGroups(theme: ITheme) {
  return COLOR_GROUPS.map((group) => html`<div class="theme-showcase__color-group">
    <h4 class="theme-showcase__group-label">${group.label}</h4>
    <ul class="theme-showcase__swatches">
      ${group.keys.map((key) => html`<li class="theme-showcase__swatch">
        <span class="theme-showcase__chip theme-showcase__chip--${toKebab(key)}"></span>
        <span class="theme-showcase__swatch-name">${toKebab(key)}</span>
        <code class="theme-showcase__swatch-hex">${theme.variables[key]}</code>
      </li>`)}
    </ul>
  </div>`);
}

const templateFn = (config: ITheme) => html`__TEMPLATE_PLACEHOLDER__`;

export class ThemeShowcaseComponent extends Component<HTMLElement, ITheme> {
  constructor(mountTarget: HTMLElement) {
    super({
      templateFn,
      mountTarget,
      tagName: 'article',
    });
    this.config = ThemesService.defaultTheme;
    this.listenToRenderEvents(['current-theme-changed']);
    // Subscribed after the render listener: runs once the new theme is rendered
    this.listen('current-theme-changed', () => this.scrollToTop());
  }

  protected override onBeforeRender(): void {
    super.onBeforeRender();
    this.config = ThemesService.currentTheme;
  }

  public registerChildren(): Nutin.ComponentConfig[] {
    return [{
      selector: 'copy-theme-button',
      factory: (el) => new ButtonComponent(el, {
        callback: () => this.copyThemeToClipboard(),
        textContent: 'Copy to clipboard',
        className: 'copy-theme-button'
      })
    }]
  }

  // Picking a theme shows the new palette from its top: the scrolled container on
  // desktop, the page on mobile (only when the showcase's top is out of view)
  private scrollToTop(): void {
    for (let el = this.element.parentElement; el && el !== document.body; el = el.parentElement) {
      if (el.scrollTop > 0) el.scrollTop = 0;
    }
    if (this.element.getBoundingClientRect().top < 0) this.element.scrollIntoView({ block: 'start' });
  }

  private copyThemeToClipboard() {
    const themeContent = JSON.stringify(this.config.variables, null, 2);
    navigator.clipboard.writeText(themeContent);
    notify(`${this.config.title} theme copied to clipboard.`, {
      type: 'success',
      position: 'top',
    })
  }
}
