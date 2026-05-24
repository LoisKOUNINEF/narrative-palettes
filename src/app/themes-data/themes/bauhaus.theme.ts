const fonts: IThemeFonts = {
  primary: {
    name: 'EB Garamond',
    pitch: '',
  },
  secondary: {
    name: 'Josefin Sans',
    pitch: '',
  },
}

export const bauhausLight: ITheme = {
  cssName: 'bauhaus-light',
  title: 'Bauhaus loom',
  subtitle: 'GUNTA STÖLZL · WEAVING WORKSHOP · DESSAU · 1925–1931',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F2EDE0',
    surface: '#E8E0CE',
    text: '#100D08',
    textMuted: '#5C5040',
    primary: '#8C3A30',
    primaryHover: '#68261C',
    secondary: '#7A6410',
    secondaryHover: '#584808',
    accent: '#445870',
    bgDisabled: '#DDD6C4',
    textDisabled: '#A09080',
    success: '#486038',
    error: '#A83024',
    warning: '#A07810',
    info: '#304868',
    border: '#DAD2C0',
    borderStrong: '#A89880',
    overlay: '#100d0880',
  }
};

export const bauhausDark: ITheme = {
  cssName: 'bauhaus-dark',
  title: 'Black warp',
  subtitle: 'STÖLZL SLIT-TAPESTRY · DESSAU · 1927–1929',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0D0B09',
    surface: '#1A1714',
    text: '#EDE8DC',
    textMuted: '#9A9080',
    primary: '#D06050',
    primaryHover: '#E87864',
    secondary: '#C89A20',
    secondaryHover: '#E0B238',
    accent: '#7888A8',
    bgDisabled: '#242018',
    textDisabled: '#504840',
    success: '#588850',
    error: '#D85040',
    warning: '#D0A838',
    info: '#6078B0',
    border: '#28241C',
    borderStrong: '#504838',
    overlay: '#0d0b09d9',
  }
};
