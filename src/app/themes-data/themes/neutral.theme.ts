const fonts: IThemeFonts = {
  primary: {
    name: 'Inter',
  },
  secondary: {
    name: 'Nimbus Sans',
  },
}

export const neutralLight: ITheme = {
  cssName: 'neutral-light',
  title: 'Neutral light',
  subtitle: 'Always start monochrome',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#FAFAF9',
    surface: '#F1F1EF',
    text: '#121212',
    textMuted: '#73736E',
    primary: '#3C3C3A',
    primaryHover: '#2C2C2A',
    secondary: '#A1A19D',
    secondaryHover: '#8B8B87',
    accent: '#5F9EA0',
    bgDisabled: '#E5E5E2',
    textDisabled: '#A3A39E',
    success: '#548A66',
    error: '#B05252',
    warning: '#BF8C40',
    info: '#5884AA',
    border: '#D6D6D2',
    borderStrong: '#B2B2AD',
    overlay: '#1212127a',
  }
};

export const neutralDark: ITheme = {
  cssName: 'neutral-dark',
  title: 'Neutral Dark',
  subtitle: '...even more in dark mode',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#101010',
    surface: '#1A1A1A',
    text: '#EDEDEB',
    textMuted: '#82827D',
    primary: '#C8C8BE',
    primaryHover: '#DEDED4',
    secondary: '#828278',
    secondaryHover: '#9A9A90',
    accent: '#648080',
    bgDisabled: '#282826',
    textDisabled: '#5A5A55',
    success: '#6CA67E',
    error: '#D66E6E',
    warning: '#D6A85C',
    info: '#6E9CC4',
    border: '#343432',
    borderStrong: '#52524E',
    overlay: '#000000ad',
  }
};
