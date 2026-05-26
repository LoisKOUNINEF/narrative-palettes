import { Component, ComponentConfig } from '../../../core/index.js';
import { notify } from '../../../libs/index.js';
import { ButtonComponent } from '../index.js';

const templateFn = (_config: ITheme) => `__TEMPLATE_PLACEHOLDER__`;

export class ThemeShowcaseComponent extends Component {
  private _theme: ITheme;
  constructor(mountTarget: HTMLElement, config: ITheme) {
    super({
      templateFn,
      mountTarget,
      config: config,
      tagName: 'article',
    });
    this._theme = config;
  }

  public childConfigs(): ComponentConfig[] {
    return [{
      selector: 'copy-theme-button',
      factory: (el) => new ButtonComponent(el, {
        callback: () => this.copyThemeToClipboard(),
        textContent: 'Copy to clipboard',
        className: 'copy-theme-button'
      })
    }]
  }

  private copyThemeToClipboard() {
    const themeContent = JSON.stringify(this._theme.variables);
    navigator.clipboard.writeText(themeContent);
    notify(`${this._theme.title} copied to clipboard.`, {
      type: 'success',
      position: 'top',
    })
  }
}
