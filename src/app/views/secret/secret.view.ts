import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component.js';
import { ThemeShowcaseComponent } from '../../components/theme-showcase/theme-showcase.component.js';
import { NavigationManager, View, html } from '../../../core/index.js';
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

  // ?theme=<cssName> selects one of this view's themes, else the first one
  public override onBeforeRender() {
    const theme = ThemesService.findTheme(this._secretThemePairs, this.getQueryParam('theme'))
      ?? this._secretThemePairs[0]?.light;
    if (theme) ThemesService.changeCurrentTheme(theme);
  }

  public override registerChildren(): Nutin.ComponentConfig[] {
    return [
      {
        selector: 'secret-theme-buttons',
        factory: (el) => new ThemePickerComponent(el, {
          pairs: this._secretThemePairs,
          label: 'Secret themes',
          id: 'secret',
          onPick: (theme) => this._replaceThemeInUrl(theme),
        }),
      },
      {
        selector: 'secret-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el)
      }
    ]
  }

  // Shareable URL for the picked theme, without a history entry per pick
  private _replaceThemeInUrl(theme: ITheme): void {
    NavigationManager.replaceState(`/secret?${new URLSearchParams({ theme: theme.cssName })}`);
  }
}
