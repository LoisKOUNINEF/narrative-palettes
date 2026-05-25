const fonts: IThemeFonts = {
  primary: {
    name: 'Source Sans 3',
    pitch: '',
  },
  secondary: {
    name: 'Barlow Condensed',
    pitch: '',
  },
}

export const sheffieldSteelLight: ITheme = {
  cssName: 'sheffield-steel-light',
  title: 'Sheffield steel',
  subtitle: 'BESSEMER CONVERTER · SHEFFIELD · 1880–1910',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F2F0EC',
    surface: '#E4E0DA',
    text: '#100E0C',
    textMuted: '#5A5650',
    primary: '#2E4A6A',
    primaryHover: '#1C3454',
    secondary: '#B85C18',
    secondaryHover: '#94400C',
    accent: '#C4960C',
    bgDisabled: '#D8D4CE',
    textDisabled: '#9A9690',
    success: '#486850',
    error: '#98301C',
    warning: '#B88810',
    info: '#487098',
    border: '#DEDAD4',
    borderStrong: '#ACA8A0',
    overlay: '#100e0c80',
  }
};

export const sheffieldSteelDark: ITheme = {
  cssName: 'sheffield-steel-dark',
  title: 'Bessemer blow',
  subtitle: 'BESSEMER CONVERTER INTERIOR · SHEFFIELD · 1880–1910',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#100C08',
    surface: '#1C1610',
    text: '#EEE8DC',
    textMuted: '#908880',
    primary: '#5888C0',
    primaryHover: '#78A8D8',
    secondary: '#E07828',
    secondaryHover: '#F09848',
    accent: '#D4A818',
    bgDisabled: '#221C16',
    textDisabled: '#504840',
    success: '#407060',
    error: '#A03820',
    warning: '#E0B828',
    info: '#7898B8',
    border: '#201A12',
    borderStrong: '#3C3024',
    overlay: '#100c08d9',
  }
};
