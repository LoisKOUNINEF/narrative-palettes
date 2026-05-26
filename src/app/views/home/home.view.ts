import { ThemeShowcaseComponent, ButtonComponent } from '../../components/index.js';
import { ComponentConfig, View } from '../../../core/index.js';
import { themes } from '../../themes-data/themes.js';
import { neutralLight } from '../../themes-data/themes/neutral.theme.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class HomeView extends View {
  private _currentTheme: ITheme;
  // private _themeButtonsConfig = themes.map((theme: ITheme) => {
  //   return {
  //     className: `theme-${theme.cssName} home__theme-button`,
  //     textContent: theme.title,
  //     callback: () => {
  //       this._currentTheme = theme;
  //       this.forceRender();
  //     },
  //   }
  // });

  constructor() {
    super({template});
    this._currentTheme = neutralLight;
  }

  public childConfigs(): ComponentConfig[] {
    const _themeButtonsConfig = themes.map((theme: ITheme) => {
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
      selector: 'home-theme-buttons',
      array: _themeButtonsConfig,
      component: ButtonComponent,
      elementName: 'home-theme-button'
    })
    return [
      ...themeButtons,
      {
        selector: 'home-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el, this._currentTheme)
      }
    ]
  }
}
