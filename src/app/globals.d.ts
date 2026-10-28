declare namespace Nutin {
  interface AppEventMap {
    'current-theme-changed': { theme: ITheme };
  }
}

declare interface ITheme {
  cssName: string;
  title: string;
  subtitle?: string;
  pitch?: string;
  variables: IThemeVariables;
  fonts: IThemeFonts;
}

// A light theme and its dark counterpart, shown together in the theme picker
declare interface IThemePair {
  name: string;
  light: ITheme;
  dark: ITheme;
}

declare interface IThemeFonts {
  primary: IThemeFont;
  secondary: IThemeFont;
}

declare interface IThemeFont {
  name: string;
  pitch?: string;
}

declare interface IThemeVariables {
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  accent: string;
  bgDisabled: string;
  textDisabled: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  border: string;
  borderStrong: string;
  overlay: string;
}
