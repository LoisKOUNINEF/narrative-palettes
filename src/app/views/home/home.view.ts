import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component.js';
import { ThemeShowcaseComponent } from '../../components/theme-showcase/theme-showcase.component.js';
import { View, html } from '../../../core/index.js';
import { ThemesService } from '../../services/themes/themes.service.js';

const template = html`__TEMPLATE_PLACEHOLDER__`;

export class HomeView extends View {
  private _homeThemePairs: IThemePair[];
  constructor() {
    super({ template, viewName: 'home' });
    this._homeThemePairs = ThemesService.themePairs;
  }

  public override documentTitle(): string {
    return 'Narrative Palettes';
  }

  public override registerChildren(): Nutin.ComponentConfig[] {
    return [
      {
        selector: 'home-theme-buttons',
        factory: (el) => new ThemePickerComponent(el, { pairs: this._homeThemePairs, label: 'Themes', id: 'home' }),
      },
      {
        selector: 'home-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el),
      }
    ]
  }
}
