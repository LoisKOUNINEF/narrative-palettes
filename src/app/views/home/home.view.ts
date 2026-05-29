import { ThemeShowcaseComponent, ButtonComponent, ThemeButtonCatalogComponent } from '../../components/index.js';
import { ComponentConfig, View, AppEventBus } from '../../../core/index.js';
import { ThemesService } from '../../services/index.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class HomeView extends View {
  private _homeThemes: ITheme[]; 
  constructor() {
    super({template});
    this._homeThemes = ThemesService.themes;
  }

  public childConfigs(): ComponentConfig[] {
    return [
      {
        selector: 'home-theme-buttons',
        factory: (el) => new ThemeButtonCatalogComponent(el, this._homeThemes),
      },
      {
        selector: 'home-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el),
      }
    ]
  }
}
