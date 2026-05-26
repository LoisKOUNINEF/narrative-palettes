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
    textMuted: '#826E5A',
    primary: '#C88C28',
    primaryHover: '#B47A1E',
    secondary: '#AA5532',
    secondaryHover: '#914426',
    accent: '#3C8287',
    bgDisabled: '#E1D8CC',
    textDisabled: '#AA9C8C',
    success: '#488C58',
    error: '#B94137',
    warning: '#D79B37',
    info: '#4678AF',
    border: '#D2C6B8',
    borderStrong: '#AA9680',
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
    secondary: '#BF5F37',
    secondaryHover: '#D6764C',
    accent: '#50A2A7',
    bgDisabled: '#302820',
    textDisabled: '#786C5A',
    success: '#5CAA6E',
    error: '#DC5A4E',
    warning: '#EBB448',
    info: '#5F9BDC',
    border: '#3A3026',
    borderStrong: '#5C4E3E',
    overlay: '#000000B8',
  }
};
