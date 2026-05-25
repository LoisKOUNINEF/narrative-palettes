const fonts: IThemeFonts = {
  primary: {
    name: 'Cardo',
    pitch: '',
  },
  secondary: {
    name: 'GFS Neohellenic',
    pitch: '',
  },
}

export const pentelicLight: ITheme = {
  cssName: 'pentelic-light',
  title: 'Pentelic',
  subtitle: 'POLYCHROME MARBLE SCULPTURE · ATHENS · EARLY CLASSICAL · 480–430 BCE',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5F0E0',
    surface: '#EDE6D0',
    text: '#0E0C08',
    textMuted: '#58503C',
    primary: '#1E4878',
    primaryHover: '#103060',
    secondary: '#9E3020',
    secondaryHover: '#781C10',
    accent: '#A87C00',
    bgDisabled: '#DDD8C4',
    textDisabled: '#9A9480',
    success: '#306040',
    error: '#B82818',
    warning: '#B08008',
    info: '#4078B0',
    border: '#E0DAC8',
    borderStrong: '#B0A890',
    overlay: '#0e0c0880',
  }
};

export const pentelicDark: ITheme = {
  cssName: 'pentelic-dark',
  title: 'Naos lamp',
  subtitle: 'PARTHENON NAOS · ATHENS · OLIVE-OIL LAMP LIGHT',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0C0A06',
    surface: '#181410',
    text: '#EEE4CC',
    textMuted: '#9A9070',
    primary: '#3878A8',
    primaryHover: '#309088',
    secondary: '#C84830',
    secondaryHover: '#E06848',
    accent: '#C09810',
    bgDisabled: '#201C14',
    textDisabled: '#504840',
    success: '#406838',
    error: '#982818',
    warning: '#D0A820',
    info: '#486890',
    border: '#1C1810',
    borderStrong: '#3C3428',
    overlay: '#0c0a06d9',
  }
};
