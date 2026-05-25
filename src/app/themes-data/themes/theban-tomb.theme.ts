const fonts: IThemeFonts = {
  primary: {
    name: 'Cardo',
    pitch: '',
  },
  secondary: {
    name: 'Cinzel',
    pitch: '',
  },
}

export const thebanTombLight: ITheme = {
  cssName: 'theban-tomb-light',
  title: 'Theban tomb',
  subtitle: 'NEW KINGDOM TOMB PAINTING · THEBAN NECROPOLIS · TT96 & QV66 · 1550–1070 BCE',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F2EDD8',
    surface: '#E8E0C4',
    text: '#100C06',
    textMuted: '#5C5038',
    primary: '#1A5080',
    primaryHover: '#0E3868',
    secondary: '#A03820',
    secondaryHover: '#78200E',
    accent: '#2A7048',
    bgDisabled: '#D8D0B8',
    textDisabled: '#9A9278',
    success: '#488040',
    error: '#B83018',
    warning: '#A88018',
    info: '#3878B0',
    border: '#E0D8C0',
    borderStrong: '#B0A488',
    overlay: '#100c0680',
  }
};

export const thebanTombDark: ITheme = {
  cssName: 'theban-tomb-dark',
  title: 'Sarcophagus chamber',
  subtitle: 'NEW KINGDOM TOMB · SARCOPHAGUS CHAMBER · BASALT AND FIRELIGHT',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0E0A06',
    surface: '#1A1410',
    text: '#EEE6D0',
    textMuted: '#A09068',
    primary: '#2888A0',
    primaryHover: '#38A888',
    secondary: '#C85030',
    secondaryHover: '#E07048',
    accent: '#40A060',
    bgDisabled: '#221A12',
    textDisabled: '#524438',
    success: '#389050',
    error: '#983018',
    warning: '#C09828',
    info: '#307088',
    border: '#1C140E',
    borderStrong: '#382C20',
    overlay: '#0e0a06d9',
  }
};
