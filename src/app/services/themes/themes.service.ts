import { themePairs, themes } from '../../themes-data/themes.js';
import { kaamosLight } from '../../themes-data/themes/kaamos.theme.js';
import { secretThemePairs, secretThemes } from '../../themes-data/secret-themes.js';
import { AppEventBus, Service } from '../../../core/index.js';

export class Themes extends Service<Themes> {
  private _themes: ITheme[] = [];
  private _defaultTheme: ITheme;
  private _currentTheme: ITheme;
  private _secretThemes: ITheme[] = [];
  private _themePairs: IThemePair[] = [];
  private _secretThemePairs: IThemePair[] = [];

  constructor() {
    super();
    this.registerCleanup(this.clear);
    this._themes = themes;
    this._defaultTheme = this._themes[0] || kaamosLight;
    this._currentTheme = this._defaultTheme;
    this._secretThemes = secretThemes;
    this._themePairs = themePairs;
    this._secretThemePairs = secretThemePairs;
  }

  get currentTheme(): ITheme {
    return this._currentTheme;
  }

  get defaultTheme(): ITheme {
    return this._defaultTheme;
  }

  get themes(): ITheme[] {
    return this._themes;
  }

  get secretThemes(): ITheme[] {
    return this._secretThemes;
  }

  get themePairs(): IThemePair[] {
    return this._themePairs;
  }

  get secretThemePairs(): IThemePair[] {
    return this._secretThemePairs;
  }

  public changeCurrentTheme(theme: ITheme) {
    this._currentTheme = theme;
    AppEventBus.emit('current-theme-changed', { theme });
  }

  private clear() {
    this._themes = [];
    this._themePairs = [];
  }
}

export const ThemesService = Themes.getInstance();
