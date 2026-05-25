const fonts: IThemeFonts = {
  primary: {
    name: 'Spectral',
    pitch: '',
  },
  secondary: {
    name: 'Cormorant Garamond',
    pitch: '',
  },
}

export const muranoLight: ITheme = {
  cssName: 'murano-light',
  title: 'Murano',
  subtitle: 'VENINI GLASSWORKS · MURANO · 1950–1965',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F6F4F0',
    surface: '#EBE7E0',
    text: '#0E0C0A',
    textMuted: '#4E4840',
    primary: '#1A5C58',
    primaryHover: '#0E403C',
    secondary: '#A05C10',
    secondaryHover: '#784008',
    accent: '#2A7C8C',
    bgDisabled: '#DDD9D2',
    textDisabled: '#9E9A92',
    success: '#488868',
    error: '#B03830',
    warning: '#B08020',
    info: '#3890A0',
    border: '#DCD8D0',
    borderStrong: '#ACA69C',
    overlay: '#0e0c0a80',
  }
};

export const muranoDark: ITheme = {
  cssName: 'murano-dark',
  title: 'Murano fornace',
  subtitle: 'GLASSBLOWING FURNACE INTERIOR · MURANO ISLAND · NIGHT',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0C0906',
    surface: '#181210',
    text: '#F0E8D8',
    textMuted: '#A09078',
    primary: '#38B8A0',
    primaryHover: '#50D8C0',
    secondary: '#D4882A',
    secondaryHover: '#E8A448',
    accent: '#48B8CC',
    bgDisabled: '#201A18',
    textDisabled: '#504844',
    success: '#309070',
    error: '#B04028',
    warning: '#C89038',
    info: '#38A0B8',
    border: '#1C1612',
    borderStrong: '#382C24',
    overlay: '#0c0906d9',
  }
};
