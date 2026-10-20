const fonts: IThemeFonts = {
  primary: {
    name: 'Inter',
    pitch: '',
  },
  secondary: {
    name: 'Sora',
    pitch: '',
  },
}

export const portfolioLight: ITheme = {
  cssName: 'portfolio-light',
  title: 'Portfolio Light',
  subtitle: 'My personal portfolio, light version.',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5F0E9',
    surface: '#EBE4DA',
    text: '#281E14',
    textMuted: '#77634F',
    primary: '#8C5D00',
    primaryHover: '#774D00',
    secondary: '#A34E2B',
    secondaryHover: '#914426',
    accent: '#287075',
    bgDisabled: '#E1D8CC',
    textDisabled: '#AA9C8C',
    success: '#488C58',
    error: '#B94137',
    warning: '#B07800',
    info: '#4678AF',
    border: '#D2C6B8',
    borderStrong: '#93806A',
    overlay: '#140F0A99',
  }
};

export const portfolioDark: ITheme = {
  cssName: 'portfolio-dark',
  title: 'Portfolio Dark',
  subtitle: 'My personal portfolio, dark version.',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#080503',
    surface: '#1C1610',
    text: '#E4D6A7',
    textMuted: '#A08C6E',
    primary: '#E9B44C',
    primaryHover: '#F5C468',
    secondary: '#C6653D',
    secondaryHover: '#D6764C',
    accent: '#50A2A7',
    bgDisabled: '#302820',
    textDisabled: '#786C5A',
    success: '#5CAA6E',
    error: '#DC5A4E',
    warning: '#EBB448',
    info: '#5F9BDC',
    border: '#3A3026',
    borderStrong: '#706151',
    overlay: '#000000B8',
  }
};
