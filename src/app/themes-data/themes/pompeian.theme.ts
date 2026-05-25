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

export const pompeianLight: ITheme = {
  cssName: 'pompeian-light',
  title: 'Pompeian',
  subtitle: 'VILLA OF THE MYSTERIES · POMPEII · C. 60 BCE · STYLE II FRESCO',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F0EAD8',
    surface: '#E5DCCA',
    text: '#120D06',
    textMuted: '#5A4830',
    primary: '#8C2818',
    primaryHover: '#68160A',
    secondary: '#1E4870',
    secondaryHover: '#103058',
    accent: '#8C6400',
    bgDisabled: '#D8D0BC',
    textDisabled: '#9A9080',
    success: '#386040',
    error: '#A82814',
    warning: '#A07808',
    info: '#3870A8',
    border: '#DCD4C0',
    borderStrong: '#ACA088',
    overlay: '#120d0680',
  }
};

export const pompeianDark: ITheme = {
  cssName: 'pompeian-dark',
  title: 'Fondo nero',
  subtitle: 'BLACK-GROUND FRESCO · VILLA OF BOSCOREALE · C. 40 BCE',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#100C08',
    surface: '#1C1610',
    text: '#EDE5D4',
    textMuted: '#A09070',
    primary: '#D87050',
    primaryHover: '#E89070',
    secondary: '#5898CC',
    secondaryHover: '#78B8E0',
    accent: '#C8A830',
    bgDisabled: '#261E16',
    textDisabled: '#524438',
    success: '#487040',
    error: '#A03820',
    warning: '#D8B840',
    info: '#4878A8',
    border: '#201A12',
    borderStrong: '#403428',
    overlay: '#100c08d9',
  }
};
