const fonts: IThemeFonts = {
  primary: {
    name: 'Lora',
    pitch: '',
  },
  secondary: {
    name: 'Cinzel Decorative',
    pitch: '',
  },
}

export const hogwartsLight: ITheme = {
  cssName: 'hogwarts-light',
  title: 'GrandPré',
  subtitle: 'MARY GRANDPRÉ CHAPTER ILLUSTRATIONS · HARRY POTTER US EDITIONS · 1997–2007',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5EED8',
    surface: '#ECE4C4',
    text: '#160E0A',
    textMuted: '#5C5040',
    primary: '#203060',
    primaryHover: '#121C40',
    secondary: '#2A5030',
    secondaryHover: '#18341C',
    accent: '#A07808',
    bgDisabled: '#DEDAD8',
    textDisabled: '#9A9488',
    success: '#487040',
    error: '#781820',
    warning: '#B06810',
    info: '#4858A0',
    border: '#E0D8C0',
    borderStrong: '#B8AC90',
    overlay: 'rgba(22 14 10 / 0.50)',
  }
};

export const hogwartsDark: ITheme = {
  cssName: 'hogwarts-dark',
  title: 'Little Hangleton',
  subtitle: 'GRANDPRÉ CHAPTER ILLUSTRATION · GOBLET OF FIRE GRAVEYARD · DARKEST ILLUSTRATION IN THE SERIES',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0A0806',
    surface: '#161210',
    text: '#DDD8CC',
    textMuted: '#908880',
    primary: '#7AAC28',
    primaryHover: '#98D038',
    secondary: '#A02830',
    secondaryHover: '#C04048',
    accent: '#C09010',
    bgDisabled: '#1C1814',
    textDisabled: '#484038',
    success: '#587830',
    error: '#781820',
    warning: '#A07010',
    info: '#607090',
    border: '#1C1612',
    borderStrong: '#383440',
    overlay: '#0a0806d9',
  }
};
