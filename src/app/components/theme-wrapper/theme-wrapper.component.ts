import { ThemesService } from '../../services/index.js';
import { Component, ComponentConfig } from '../../../core/index.js';
import { ThemeShowcaseComponent } from '../theme-showcase/theme-showcase.component.js';

const templateFn = () => `__TEMPLATE_PLACEHOLDER__`;

export class ThemeWrapperComponent extends Component {
  private _theme: ITheme;
  constructor(mountTarget: HTMLElement) {
    super({
      templateFn,
      mountTarget,
      tagName: 'article',
    });
    this._theme = ThemesService.currentTheme;
    this.listenToRenderEvents(['current-theme-changed'], true);
  }

  public override forceRender(): void {
    this._theme = ThemesService.currentTheme;
    super.forceRender();
  }

  public childConfigs(): ComponentConfig[] {
    return [{
      selector: 'theme-wrapper-current',
      factory: (el) => new ThemeShowcaseComponent(el, this._theme)
    }]
  }
}
