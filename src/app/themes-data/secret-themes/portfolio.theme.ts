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
    background: '#F5F5F2',
    surface: '#E9EAE7',
    text: '#242628',
    textMuted: '#6F7478',
    primary: '#343A40',
    primaryHover: '#202428',
    secondary: '#626A70',
    secondaryHover: '#464D52',
    accent: '#52768B',
    bgDisabled: '#E1E2DF',
    textDisabled: '#9A9D9E',
    success: '#39764E',
    error: '#B53E3E',
    warning: '#956A22',
    info: '#3F6E9B',
    border: '#D5D7D4',
    borderStrong: '#B8BCBB',
    overlay: '#17191A99',
  }
};

export const portfolioDark: ITheme = {
  cssName: 'portfolio-dark',
  title: 'Portfolio Dark',
  subtitle: 'My personal portfolio, dark version.',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#111314',
    surface: '#1C2022',
    text: '#E8E9E6',
    textMuted: '#A2A7A8',
    primary: '#D9DEDF',
    primaryHover: '#FFFFFF',
    secondary: '#A6ADB0',
    secondaryHover: '#C4C9CA',
    accent: '#83A9BE',
    bgDisabled: '#292D2F',
    textDisabled: '#73797B',
    success: '#72B787',
    error: '#E47770',
    warning: '#D8B16A',
    info: '#82B1DF',
    border: '#343A3D',
    borderStrong: '#50585B',
    overlay: '#000000B8',
  }
};
