import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component.js';
import { ThemeShowcaseComponent } from '../../components/theme-showcase/theme-showcase.component.js';
import { View, html } from '../../../core/index.js';
import { ThemesService } from '../../services/themes/themes.service.js';

const template = html`__TEMPLATE_PLACEHOLDER__`;

export class SecretView extends View {
  private _secretThemePairs: IThemePair[];
  constructor() {
    super({ template, viewName: 'secret' });
    this._secretThemePairs = ThemesService.secretThemePairs;
  }

  public override documentTitle(): string {
    return 'Secret';
  }

  public override onBeforeRender() {
    if (this._secretThemePairs[0])
    ThemesService.changeCurrentTheme(this._secretThemePairs[0].light);
  }

  public override registerChildren(): Nutin.ComponentConfig[] {
    return [
      {
        selector: 'secret-theme-buttons',
        factory: (el) => new ThemePickerComponent(el, { pairs: this._secretThemePairs, label: 'Secret themes', id: 'secret' }),
      },
      {
        selector: 'secret-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el)
      }
    ]
  }
}
