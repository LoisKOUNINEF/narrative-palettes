const fonts: IThemeFonts = {
  primary: {
    name: 'Newsreader',
    pitch: '',
  },
  secondary: {
    name: 'Figtree',
    pitch: '',
  },
}

export const kaamosLight: ITheme = {
  cssName: 'kaamos-light',
  title: 'Kaamos',
  subtitle: 'FINNISH BIRCH FOREST · LATE FEBRUARY · 60°N · BEFORE LIGHT RETURNS',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F4F0EA',
    surface: '#EAE4DC',
    text: '#110C08',
    textMuted: '#5C5248',
    primary: '#B06030',
    primaryHover: '#904418',
    secondary: '#4A6878',
    secondaryHover: '#304858',
    accent: '#9A5C28',
    bgDisabled: '#D8D2CA',
    textDisabled: '#9A9490',
    success: '#607058',
    error: '#984030',
    warning: '#A86828',
    info: '#7090A0',
    border: '#DCD6CE',
    borderStrong: '#A89C90',
    overlay: '#110c0880',
  }
};

export const kaamosDark: ITheme = {
  cssName: 'kaamos-dark',
  title: 'Kaamos night',
  subtitle: 'FINNISH BIRCH FOREST · 4PM · FULL DARK · KAAMOS',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0A0E14',
    surface: '#121820',
    text: '#EDE6DA',
    textMuted: '#8A8880',
    primary: '#C87848',
    primaryHover: '#DC9460',
    secondary: '#6898B0',
    secondaryHover: '#88B8D0',
    accent: '#C06830',
    bgDisabled: '#181E28',
    textDisabled: '#404850',
    success: '#587060',
    error: '#A84840',
    warning: '#D08038',
    info: '#5078A0',
    border: '#141C28',
    borderStrong: '#283038',
    overlay: '#0a0e14d9',
  }
};
