const fonts: IThemeFonts = {
  primary: {
    name: 'Karma',
    pitch: '',
  },
  secondary: {
    name: 'Encode Sans Condensed',
    pitch: '',
  },
}

export const wariLight: ITheme = {
  cssName: 'wari-light',
  title: 'Wari',
  subtitle: 'WARI TEXTILE CULTURE · AYACUCHO HIGHLANDS · PERU · 600–1000 CE',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F0E8D8',
    surface: '#E4D8C4',
    text: '#120C06',
    textMuted: '#5C4C38',
    primary: '#8C2838',
    primaryHover: '#681424',
    secondary: '#2A4870',
    secondaryHover: '#183058',
    accent: '#A87C10',
    bgDisabled: '#D4C8B4',
    textDisabled: '#9A8E7C',
    success: '#486838',
    error: '#A82820',
    warning: '#B88C10',
    info: '#406898',
    border: '#DCD0C0',
    borderStrong: '#A89880',
    overlay: '#120c0680',
  }
};

export const wariDark: ITheme = {
  cssName: 'wari-dark',
  title: 'Wari tomb',
  subtitle: 'WARI BURIAL TEXTILES · HIGHLAND TOMB · CANDLELIGHT',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0E0906',
    surface: '#1A1210',
    text: '#F0E4D0',
    textMuted: '#A08868',
    primary: '#C44848',
    primaryHover: '#E06058',
    secondary: '#4870A8',
    secondaryHover: '#6090C0',
    accent: '#C89A28',
    bgDisabled: '#221810',
    textDisabled: '#504030',
    success: '#486030',
    error: '#982820',
    warning: '#D8A830',
    info: '#486898',
    border: '#1C120C',
    borderStrong: '#382C24',
    overlay: '#0e0906d9',
  }
};
