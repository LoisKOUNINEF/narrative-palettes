const fonts: IThemeFonts = {
  primary: {
    name: 'IBM Plex Sans',
    pitch: '',
  },
  secondary: {
    name: 'Share Tech',
    pitch: '',
  },
}

export const nostromoLight: ITheme = {
  cssName: 'nostromo-light',
  title: 'Nostromo',
  subtitle: 'USCSS NOSTROMO · ALIEN (1979) · PRODUCTION DESIGN: RON COBB · H.R. GIGER',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#EEECEA',
    surface: '#E2E0DC',
    text: '#100E0C',
    textMuted: '#585450',
    primary: '#3A7A40',
    primaryHover: '#245C2A',
    secondary: '#A07820',
    secondaryHover: '#805810',
    accent: '#2A5888',
    bgDisabled: '#D4D2CE',
    textDisabled: '#989490',
    success: '#408048',
    error: '#903020',
    warning: '#B08018',
    info: '#3868A0',
    border: '#D6D4D0',
    borderStrong: '#A8A49E',
    overlay: '#100e0c80',
  }
};

export const nostromoDark: ITheme = {
  cssName: 'nostromo-dark',
  title: 'Night watch',
  subtitle: 'USCSS NOSTROMO BRIDGE · NIGHT-WATCH CYCLE · SCREENS ONLY · ALIEN (1979)',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0C0C0A',
    surface: '#161614',
    text: '#88C870',
    textMuted: '#508048',
    primary: '#70C060',
    primaryHover: '#90D880',
    secondary: '#C89830',
    secondaryHover: '#E0B048',
    accent: '#4888C0',
    bgDisabled: '#1E1E1C',
    textDisabled: '#384838',
    success: '#60A850',
    error: '#A83828',
    warning: '#D0A038',
    info: '#5090C8',
    border: '#1C1C1A',
    borderStrong: '#343430',
    overlay: '#0c0c0ad9',
  }
};
