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
  fonts: fonts,
  variables: {
    background: '#FAFAF9',
    surface: '#F1F1EF',
    text: '#121212',
    textMuted: '#6E6E69',
    primary: '#3C3C3A',
    primaryHover: '#2C2C2A',
    secondary: '#6E6E6A',
    secondaryHover: '#595956',
    accent: '#387779',
    bgDisabled: '#E5E5E2',
    textDisabled: '#A3A39E',
    success: '#548A66',
    error: '#B05252',
    warning: '#B48235',
    info: '#5884AA',
    border: '#D6D6D2',
    borderStrong: '#8B8B86',
    overlay: '#1212127a',
  }
};

export const neutralDark: ITheme = {
  cssName: 'neutral-dark',
  title: 'Neutral Dark',
  fonts: fonts,
  variables: {
    background: '#101010',
    surface: '#1A1A1A',
    text: '#EDEDEB',
    textMuted: '#82827D',
    primary: '#C8C8BE',
    primaryHover: '#DEDED4',
    secondary: '#838379',
    secondaryHover: '#9A9A90',
    accent: '#6B8787',
    bgDisabled: '#282826',
    textDisabled: '#5A5A55',
    success: '#6CA67E',
    error: '#D66E6E',
    warning: '#D6A85C',
    info: '#6E9CC4',
    border: '#343432',
    borderStrong: '#666661',
    overlay: '#000000ad',
  }
};
