import { ButtonComponent, ThemeShowcaseComponent } from '../../components/index.js';
import { ComponentConfig, View } from '../../../core/index.js';
import { secretThemes } from '../../themes-data/secret-themes.js';
import { nutinLight } from '../../themes-data/secret-themes/nutin.theme.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class SecretView extends View {
  private _currentTheme: ITheme;

  constructor() {
    super({template});
    this._currentTheme = nutinLight;
  }

  public childConfigs(): ComponentConfig[] {
    const _themeButtonsConfig = secretThemes.map((theme: ITheme) => {
    return {
      className: `theme-${theme.cssName} home__theme-button`,
      textContent: theme.title,
      callback: () => {
        this._currentTheme = theme;
        this.forceRender();
      },
    }
  });
    const themeButtons = this.catalogConfig({
      selector: 'secret-theme-buttons',
      array: _themeButtonsConfig,
      component: ButtonComponent,
      elementName: 'home-theme-button'
    })
    if (!this._currentTheme) {
      return themeButtons;
    }
    return [
      ...themeButtons,
      {
        selector: 'secret-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el, this._currentTheme)
      }
    ]
  }

}
