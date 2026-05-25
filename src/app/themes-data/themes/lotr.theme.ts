const fonts: IThemeFonts = {
  primary: {
    name: 'GFS Didot',
    pitch: '',
  },
  secondary: {
    name: 'UnifrakturMaguntia',
    pitch: '',
  },
}

export const lotrLight: ITheme = {
  cssName: 'lotr-light',
  title: 'Whatman paper',
  subtitle: 'J.R.R. TOLKIEN WATERCOLORS · BODLEIAN LIBRARY COLLECTION · 1937–1955 · ARTS AND CRAFTS INFLUENCE',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5F0E0',
    surface: '#ECE6D0',
    text: '#160E08',
    textMuted: '#60583C',
    primary: '#385878',
    primaryHover: '#203C60',
    secondary: '#5A7830',
    secondaryHover: '#3C581C',
    accent: '#882838',
    bgDisabled: '#DDD8C0',
    textDisabled: '#9A9478',
    success: '#486838',
    error: '#A02030',
    warning: '#A87820',
    info: '#5880A8',
    border: '#E0DAC4',
    borderStrong: '#B4AC90',
    overlay: '#160e0880',
  }
};

export const lotrDark: ITheme = {
  cssName: 'lotr-dark',
  title: 'Moria',
  subtitle: 'TOLKIEN INK DRAWINGS · MINES OF MORIA · MORDOR · 1937–1955',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0C0A08',
    surface: '#181410',
    text: '#EAE2CC',
    textMuted: '#908070',
    primary: '#6890B0',
    primaryHover: '#88B0D0',
    secondary: '#B03838',
    secondaryHover: '#D05048',
    accent: '#C0980C',
    bgDisabled: '#201C18',
    textDisabled: '#504840',
    success: '#486858',
    error: '#882020',
    warning: '#D0A828',
    info: '#507090',
    border: '#1C1812',
    borderStrong: '#383028',
    overlay: '#0c0a08d9',
  }
};
