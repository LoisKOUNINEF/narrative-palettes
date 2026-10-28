import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component.js';
import { ThemeShowcaseComponent } from '../../components/theme-showcase/theme-showcase.component.js';
import { NavigationManager, View, html } from '../../../core/index.js';
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

  // ?theme=<cssName> selects one of this view's themes, else the default one
  public override onBeforeRender() {
    const theme = ThemesService.findTheme(this._homeThemePairs, this.getQueryParam('theme'));
    ThemesService.changeCurrentTheme(theme ?? ThemesService.defaultTheme);
  }

  public override registerChildren(): Nutin.ComponentConfig[] {
    return [
      {
        selector: 'home-theme-buttons',
        factory: (el) => new ThemePickerComponent(el, {
          pairs: this._homeThemePairs,
          label: 'Themes',
          id: 'home',
          onPick: (theme) => this._replaceThemeInUrl(theme),
        }),
      },
      {
        selector: 'home-theme-current',
        factory: (el) => new ThemeShowcaseComponent(el),
      }
    ]
  }

  // Shareable URL for the picked theme, without a history entry per pick
  private _replaceThemeInUrl(theme: ITheme): void {
    NavigationManager.replaceState(`/?${new URLSearchParams({ theme: theme.cssName })}`);
  }
}
