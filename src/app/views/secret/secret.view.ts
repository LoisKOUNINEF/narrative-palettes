import { ButtonComponent, ThemeWrapperComponent } from '../../components/index.js';
import { ComponentConfig, View } from '../../../core/index.js';
import { ThemesService } from '../../services/index.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class SecretView extends View {
  constructor() {
    super({template});
  }

  onEnter(): void {
    ThemesService.setDefaultToSecret();
  }

  public childConfigs(): ComponentConfig[] {
    const _themeButtonsConfig = this.getButtonsConfig();
    const themeButtons = this.catalogConfig({
      selector: 'secret-theme-buttons',
      array: _themeButtonsConfig,
      component: ButtonComponent,
      elementName: 'home-theme-button'
    })
    return [
      ...themeButtons,
      {
        selector: 'secret-theme-current',
        factory: (el) => new ThemeWrapperComponent(el)
      }
    ]
  }

  private getButtonsConfig(): ComponentConfig[] {
    return ThemesService.secretThemes.map((theme: ITheme) => {
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
