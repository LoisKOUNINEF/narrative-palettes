const fonts: IThemeFonts = {
  primary: {
    name: 'Merriweather',
    pitch: '',
  },
  secondary: {
    name: 'Fjalla One',
    pitch: '',
  },
}

export const yosemiteLight: ITheme = {
  cssName: 'yosemite-light',
  title: 'Valley View',
  subtitle: 'YOSEMITE VALLEY FLOOR · VALLEY VIEW · APRIL SNOWMELT · EL CAPITAN GRANITE',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F0EAE0',
    surface: '#E4DCD0',
    text: '#120E0A',
    textMuted: '#605650',
    primary: '#2A5080',
    primaryHover: '#183868',
    secondary: '#904E20',
    secondaryHover: '#70340C',
    accent: '#4A7060',
    bgDisabled: '#D4CEC4',
    textDisabled: '#9A9490',
    success: '#507038',
    error: '#984028',
    warning: '#A87820',
    info: '#4078A0',
    border: '#DCD4C8',
    borderStrong: '#A8A094',
    overlay: '#120e0a80',
  }
};

export const yosemiteDark: ITheme = {
  cssName: 'yosemite-dark',
  title: 'Yosemite 2am',
  subtitle: 'YOSEMITE VALLEY FLOOR · 2AM · APRIL · STARFIELD',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#080C14',
    surface: '#101820',
    text: '#EAE4D8',
    textMuted: '#8A9098',
    primary: '#3868A8',
    primaryHover: '#4888C8',
    secondary: '#B06828',
    secondaryHover: '#D08840',
    accent: '#508878',
    bgDisabled: '#141C28',
    textDisabled: '#384048',
    success: '#406848',
    error: '#883828',
    warning: '#C08030',
    info: '#4880A0',
    border: '#101824',
    borderStrong: '#283440',
    overlay: '#080c14d9',
  }
};
