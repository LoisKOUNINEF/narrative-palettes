const fonts: IThemeFonts = {
  primary: {
    name: 'IBM Plex Mono',
    pitch: '',
  },
  secondary: {
    name: 'Bebas Neue',
    pitch: '',
  },
}

export const constructionLight: ITheme = {
  cssName: 'constructivism-light',
  title: 'Constructivism',
  subtitle: 'SOVIET AVANT-GARDE · RODCHENKO · 1920–1932',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F8F8F5',
    surface: '#EEEEED',
    text: '#0A0A09',
    textMuted: '#4A4A48',
    primary: '#CC2200',
    primaryHover: '#A01400',
    secondary: '#1A1A18',
    secondaryHover: '#383834',
    accent: '#A89060',
    bgDisabled: '#E0E0DE',
    textDisabled: '#909090',
    success: '#205830',
    error: '#881008',
    warning: '#987020',
    info: '#204078',
    border: '#E0E0DE',
    borderStrong: '#A8A8A6',
    overlay: '#0a0a0980',
  }
};

export const constructionDark: ITheme = {
  cssName: 'constructivism-dark',
  title: 'Agitprop train',
  subtitle: 'SOVIET AGITPROP RAILWAY CARRIAGE · 1919–1924',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0C0B09',
    surface: '#181614',
    text: '#F0EDE6',
    textMuted: '#908880',
    primary: '#D83018',
    primaryHover: '#F04830',
    secondary: '#B89040',
    secondaryHover: '#D0A858',
    accent: '#D4C8A8',
    bgDisabled: '#222018',
    textDisabled: '#504840',
    success: '#407848',
    error: '#A02818',
    warning: '#C8A848',
    info: '#386098',
    border: '#24221C',
    borderStrong: '#403C34',
    overlay: '#0c0b09d9',
  }
};
