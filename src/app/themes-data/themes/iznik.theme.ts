const fonts: IThemeFonts = {
  primary: {
    name: 'Gentium Plus',
    pitch: '',
  },
  secondary: {
    name: 'Scheherazade New',
    pitch: '',
  },
}

export const iznikLight: ITheme = {
  cssName: 'iznik-light',
  title: 'Iznik',
  subtitle: 'IZNIK CERAMIC WORKSHOPS · OTTOMAN EMPIRE · 1550–1600',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5F2EA',
    surface: '#EAE5D8',
    text: '#0D0B08',
    textMuted: '#524838',
    primary: '#1C3A78',
    primaryHover: '#102458',
    secondary: '#A82820',
    secondaryHover: '#781810',
    accent: '#1A7B6E',
    bgDisabled: '#DDD8CC',
    textDisabled: '#9C9488',
    success: '#306848',
    error: '#C02018',
    warning: '#A87820',
    info: '#208890',
    border: '#DCD6C8',
    borderStrong: '#ACA494',
    overlay: '#0d0b0880',
  }
};

export const iznikDark: ITheme = {
  cssName: 'iznik-dark',
  title: 'Lacivert',
  subtitle: 'BLUE MOSQUE INTERIOR AT NIGHT · LACIVERT GROUND TILES · ISTANBUL · 1616',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0A1020',
    surface: '#121A30',
    text: '#F0EDE4',
    textMuted: '#8898B8',
    primary: '#E06858',
    primaryHover: '#F08878',
    secondary: '#4ABCAC',
    secondaryHover: '#68D8C8',
    accent: '#E8C860',
    bgDisabled: '#1A2238',
    textDisabled: '#3C4A62',
    success: '#48A880',
    error: '#B03038',
    warning: '#D0A038',
    info: '#7088C0',
    border: '#121A34',
    borderStrong: '#283858',
    overlay: '#0a1020d9',
  }
};
