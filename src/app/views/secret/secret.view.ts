import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component.js';
import { ThemeShowcaseComponent } from '../../components/theme-showcase/theme-showcase.component.js';
import { View, html } from '../../../core/index.js';
import { ThemesService } from '../../services/themes/themes.service.js';

const template = html`__TEMPLATE_PLACEHOLDER__`;

export class SecretView extends View {
  private _secretThemes: ITheme[];
  constructor() {
    super({ template, viewName: 'secret' });
    this._secretThemes = ThemesService.secretThemes;
  }

  public override documentTitle(): string {
    return 'Secret';
  }

  public override onBeforeRender() {
    if (this._secretThemes[0])
    ThemesService.changeCurrentTheme(this._secretThemes[0]);
  }

  public registerChildren(): Nutin.ComponentConfig[] {
    return [
      {
        selector: 'secret-theme-buttons',
        factory: (el) => new ThemePickerComponent(el, { themes: this._secretThemes, label: 'Secret themes', id: 'secret' }),
      },
      {
        selector: 'secret-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el)
      }
    ]
  }
}
