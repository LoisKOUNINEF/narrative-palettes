const fonts: IThemeFonts = {
  primary: {
    name: 'Nunito',
    pitch: '',
  },
  secondary: {
    name: 'Orbitron',
    pitch: '',
  },
}

export const starWarsLight: ITheme = {
  cssName: 'star-wars-light',
  title: 'McQuarrie',
  subtitle: 'RALPH MCQUARRIE PRE-PRODUCTION PAINTINGS · STAR WARS ORIGINAL TRILOGY · 1975–1983',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F0E8D4',
    surface: '#E4DACC',
    text: '#100C08',
    textMuted: '#5C5448',
    primary: '#2A5888',
    primaryHover: '#184070',
    secondary: '#4A6858',
    secondaryHover: '#304C3C',
    accent: '#B05820',
    bgDisabled: '#D4CCC0',
    textDisabled: '#9A9288',
    success: '#507840',
    error: '#90301C',
    warning: '#C07018',
    info: '#4880B8',
    border: '#DCD4C4',
    borderStrong: '#ACA090',
    overlay: '#100c0880',
  }
};

export const starWarsDark: ITheme = {
  cssName: 'star-wars-dark',
  title: 'Throne room',
  subtitle: 'EMPEROR\'S THRONE ROOM · RETURN OF THE JEDI · 1983',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#080A10',
    surface: '#10141C',
    text: '#D8E4F0',
    textMuted: '#7888A8',
    primary: '#5890D0',
    primaryHover: '#80B8E8',
    secondary: '#A02838',
    secondaryHover: '#C04050',
    accent: '#58A840',
    bgDisabled: '#141820',
    textDisabled: '#384050',
    success: '#388078',
    error: '#781828',
    warning: '#70C850',
    info: '#5070A0',
    border: '#101420',
    borderStrong: '#283040',
    overlay: '#080a10d9',
  }
};
