declare type CoreEventMap = {
    'navigate': string;
    'reload': string;
    'view-mount': string;
    'view-render': string;
    'view-unmount': string;
    'track-pageview': { page: string };
    'popover-opened': string;
    'popover-close': string;
    'language-changed': string;
    'current-theme-changed': { theme : ITheme };
    // Add other events and their payload types here
};

declare type StoreEventMap = {[ K in `store:${string}` ]: any; };

// Merged event map
declare type EventMap = CoreEventMap & StoreEventMap;
declare type EventKey = keyof EventMap;

declare interface ITheme {
  cssName: string;
  title: string;
  subtitle: string;
  pitch?: string;
  variables: IThemeVariables;
  fonts: IThemeFonts;
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
