import { ButtonComponent, ThemeButtonCatalogComponent, ThemeWrapperComponent } from '../../components/index.js';
import { ComponentConfig, View } from '../../../core/index.js';
import { ThemesService } from '../../services/index.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class SecretView extends View {
  private _secretThemes: ITheme[];
  constructor() {
    super({template});
    this._secretThemes = ThemesService.secretThemes;
  }

  onEnter(): void {
    ThemesService.setDefaultToSecret();
  }

  public childConfigs(): ComponentConfig[] {
    return [
      {
        selector: 'secret-theme-buttons',
        factory: (el) => new ThemeButtonCatalogComponent(el, this._secretThemes),
      },
      {
        selector: 'secret-theme-current',
        factory: (el) => new ThemeWrapperComponent(el)
      }
    ]
  }
}
