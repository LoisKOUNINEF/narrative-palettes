const fonts: IThemeFonts = {
  primary: {
    name: 'Shippori Antique',
    pitch: '',
  },
  secondary: {
    name: 'Dela Gothic One',
    pitch: '',
  },
}

export const ukiyoELight: ITheme = {
  cssName: 'ukiyo-e-light',
  title: 'Ukiyo-e',
  subtitle: 'EDO WOODBLOCK PRINT · 1780–1870',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5F1E8',
    surface: '#EBE5D8',
    text: '#0C0A07',
    textMuted: '#54483A',
    primary: '#1F3A6E',
    primaryHover: '#102458',
    secondary: '#B83040',
    secondaryHover: '#901828',
    accent: '#C47C00',
    bgDisabled: '#DDD8CE',
    textDisabled: '#9E9488',
    success: '#386040',
    error: '#C82030',
    warning: '#C08808',
    info: '#3870B0',
    border: '#E0DACE',
    borderStrong: '#ACA494',
    overlay: '#0c0a0780',
  }
};

export const ukiyoEDark: ITheme = {
  cssName: 'ukiyo-e-dark',
  title: 'Yozakura',
  subtitle: 'HIROSHIGE NIGHT-SCENE WOODBLOCK · 1830–1858',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#090C12',
    surface: '#111820',
    text: '#F2EEE4',
    textMuted: '#8A9AAC',
    primary: '#E06060',
    primaryHover: '#F08078',
    secondary: '#C8A030',
    secondaryHover: '#E0B848',
    accent: '#5AAABB',
    bgDisabled: '#1A2230',
    textDisabled: '#404C5C',
    success: '#407850',
    error: '#B02838',
    warning: '#D8B038',
    info: '#50A8C0',
    border: '#101622',
    borderStrong: '#243040',
    overlay: '#090c12d9',
  }
};
