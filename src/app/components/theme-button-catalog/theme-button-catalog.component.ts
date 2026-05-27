import { ThemesService } from '../../services/index.js';
import { Component, ComponentConfig } from '../../../core/index.js';
import { ButtonComponent } from '../index.js';

const templateFn = () => `__TEMPLATE_PLACEHOLDER__`;

export class ThemeButtonCatalogComponent extends Component {
  private _activeThemes: ITheme[];
  constructor(mountTarget: HTMLElement, config: ITheme[]) {
    super({templateFn, mountTarget});
    this._activeThemes = config;
  }

  public childConfigs(): ComponentConfig[] {
    const _themeButtonsConfig = this.getButtonsConfig();
    const themeButtons = this.catalogConfig({
      selector: 'home-theme-buttons',
      array: _themeButtonsConfig,
      component: ButtonComponent,
      elementName: 'home-theme-button'
    })
    return themeButtons;
  }

  private getButtonsConfig(): ComponentConfig[] {
    return this._activeThemes.map((theme: ITheme) => {
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
