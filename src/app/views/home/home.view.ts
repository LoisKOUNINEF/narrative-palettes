import { ThemeWrapperComponent, ButtonComponent } from '../../components/index.js';
import { ComponentConfig, View, AppEventBus } from '../../../core/index.js';
import { ThemesService } from '../../services/index.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class HomeView extends View {constructor() {
    super({template});
  }

  public childConfigs(): ComponentConfig[] {
    const _themeButtonsConfig = this.getButtonsConfig();
    const themeButtons = this.catalogConfig({
      selector: 'home-theme-buttons',
      array: _themeButtonsConfig,
      component: ButtonComponent,
      elementName: 'home-theme-button'
    })
    return [
      ...themeButtons,
      {
        selector: 'home-theme-current',
        factory: (el) => new ThemeWrapperComponent(el),
      }
    ]
  }

  private getButtonsConfig(): ComponentConfig[] {
    return ThemesService.themes.map((theme: ITheme) => {
      return {
        className: `theme-${theme.cssName} home__theme-button`,
        textContent: theme.title,
        callback: () => {
          ThemesService.changeCurrentTheme(theme);
        },
      }
    }) as unknown as ComponentConfig[];
  }
}
