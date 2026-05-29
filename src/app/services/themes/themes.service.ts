import { themes } from '../../themes-data/themes.js';
import { neutralLight } from '../../themes-data/themes/neutral.theme.js';
import { secretThemes } from '../../themes-data/secret-themes.js';
import { nutinLight } from '../../themes-data/secret-themes/nutin.theme.js';
import { AppEventBus, Service } from '../../../core/index.js';

export class Themes extends Service<Themes> {
  private _themes: ITheme[] = [];
  private _defaultTheme: ITheme;
  private _currentTheme: ITheme;
  private _secretThemes: ITheme[] = [];
  private _defaultSecretTheme: ITheme;

  constructor() {
    super();
    this.registerCleanup(this.clear);
    this._themes = themes;
    this._defaultTheme = this._themes[0] || neutralLight;
    this._currentTheme = this._defaultTheme;
    this._secretThemes = secretThemes;
    this._defaultSecretTheme = this._secretThemes[0] || nutinLight;
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

  public changeCurrentTheme(theme: ITheme) {
    this._currentTheme = theme;
    AppEventBus.emit('current-theme-changed', { theme });
  }

  private clear() {
    this._themes = [];
  }
}

export const ThemesService = Themes.getInstance();
