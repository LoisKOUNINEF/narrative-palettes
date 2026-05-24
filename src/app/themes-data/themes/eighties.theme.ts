const fonts: IThemeFonts = {
  primary: {
    name: 'Nimbus Sans',
    pitch: 'The specific proportions of IBM\'s own corporate sans, condensed and serious without being cold.'
  },
  secondary: {
    name: 'Courier Prime',
    pitch: 'The refined Courier variant, the typeface of every IBM printer in this period.'
  },
};

export const eightiesLight: ITheme = {
  cssName: '80s-light',
  title: 'IBM 1983',
  subtitle: 'US CORPORATE GRAPHIC DESIGN · COMMUNICATION ARTS ANNUAL · 1981–1985 · EARLY PC ERA',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#EEEAE2',
    surface: '#E4E0D8',
    text: '#141210',
    textMuted: '#585450',
    primary: '#2E4870',
    primaryHover: '#1E3050',
    secondary: '#7A4858',
    secondaryHover: '#5E3040',
    accent: '#907020',
    bgDisabled: '#D4D0C8',
    textDisabled: '#989490',
    success: '#486448',
    error: '#8C3C2C',
    warning: '#785A10',
    info: '#4A6890',
    border: '#D0CCC4',
    borderStrong: '#A8A4A0',
    overlay: '#14121080',
  }
};

export const eightiesDark: ITheme = {
  cssName: '80s-dark',
  title: 'Terminal night',
  subtitle: 'CORPORATE OFFICE · IBM TERMINAL · WORKING LATE · 1982–1984',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0E0C0A',
    surface: '#181614',
    text: '#90C878',
    textMuted: '#507848',
    primary: '#4870B0',
    primaryHover: '#6090D0',
    secondary: '#C09030',
    secondaryHover: '#D8A840',
    accent: '#C08828',
    bgDisabled: '#201E1C',
    textDisabled: '#384830',
    success: '#A0D888',
    error: '#B04840',
    warning: '#C8A048',
    info: '#4888A8',
    border: '#282420',
    borderStrong: '#405838',
    overlay: '#0e0c0ad9',
  }
};
