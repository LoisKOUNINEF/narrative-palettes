const fonts: IThemeFonts = {
  primary: {
    name: 'Source Serif 4',
    pitch: '',
  },
  secondary: {
    name: 'Playfair Display',
    pitch: '',
  },
}

export const ninetiesLight: ITheme = {
  cssName: '90s-light',
  title: 'Emigre 1994',
  subtitle: 'US PRINT AND BROADCAST DESIGN · EMIGRE MAGAZINE · IKEA CATALOG · CNN · 1993–1997',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F2EEE6',
    surface: '#E8E4DA',
    text: '#141210',
    textMuted: '#585450',
    primary: '#2E6870',
    primaryHover: '#1C4850',
    secondary: '#8C4840',
    secondaryHover: '#683028',
    accent: '#907830',
    bgDisabled: '#D8D4CA',
    textDisabled: '#989490',
    success: '#407048',
    error: '#783024',
    warning: '#886818',
    info: '#386880',
    border: '#D8D4CC',
    borderStrong: '#A8A49C',
    overlay: '#14121080',
  }
};

export const ninetiesDark: ITheme = {
  cssName: '90s-dark',
  title: 'Broadcast dark',
  subtitle: 'CNN BROADCAST CONTROL ROOM · MONITOR GLOW · 11PM · 1995',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0A0C10',
    surface: '#141820',
    text: '#E8E4DC',
    textMuted: '#8890A0',
    primary: '#389098',
    primaryHover: '#48B0B8',
    secondary: '#B06058',
    secondaryHover: '#D0786C',
    accent: '#B09838',
    bgDisabled: '#181C24',
    textDisabled: '#404850',
    success: '#48A078',
    error: '#C84840',
    warning: '#C0A848',
    info: '#4870A8',
    border: '#1C202C',
    borderStrong: '#404858',
    overlay: '#0a0c10d9',
  }
};
