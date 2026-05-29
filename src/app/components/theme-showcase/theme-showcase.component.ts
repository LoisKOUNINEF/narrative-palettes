import { ThemesService } from '../../services/index.js';
import { Component, ComponentConfig } from '../../../core/index.js';
import { notify } from '../../../libs/index.js';
import { ButtonComponent } from '../index.js';

const templateFn = (config: ITheme) => `__TEMPLATE_PLACEHOLDER__`;

export class ThemeShowcaseComponent extends Component<HTMLElement, ITheme> {
  constructor(mountTarget: HTMLElement) {
    super({
      templateFn,
      mountTarget,
      tagName: 'article',
    });
    this.config = ThemesService.defaultTheme;
    this.listenToRenderEvents(['current-theme-changed']);
  }

  beforeRender(): void {
    this.config = ThemesService.currentTheme;
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
    const themeContent = JSON.stringify(this.config.variables, null, 2);
    navigator.clipboard.writeText(themeContent);
    notify(`${this.config.title} theme copied to clipboard.`, {
      type: 'success',
      position: 'top',
    })
  }
}
