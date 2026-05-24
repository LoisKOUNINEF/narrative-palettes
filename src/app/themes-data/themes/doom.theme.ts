const fonts: IThemeFonts = {
  primary: {
    name: 'Overpass Mono',
    pitch: '',
  },
  secondary: {
    name: 'Share Tech Mono',
    pitch: '',
  },
}

export const doomLight: ITheme = {
  cssName: 'doom-light',
  title: 'E1M1',
  subtitle: 'ID SOFTWARE DOOM (1993) · ADRIAN CARMACK · DOOM.WAD FIXED 256-COLOR PALETTE · EPISODE 1 · CORRECTED',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#EAE6DE',
    surface: '#DEDAD0',
    text: '#141008',
    textMuted: '#585248',
    primary: '#A02818',
    primaryHover: '#70180C',
    secondary: '#5A6830',
    secondaryHover: '#404C1C',
    accent: '#1858A0',
    bgDisabled: '#CEC8C0',
    textDisabled: '#909088',
    success: '#486828',
    error: '#C02010',
    warning: '#987020',
    info: '#3060A0',
    border: '#D0CCC4',
    borderStrong: '// #A09A90',
    overlay: '#14100880',
  }
};

export const doomDark: ITheme = {
  cssName: 'doom-dark',
  title: 'Phobos anomaly',
  subtitle: 'ID SOFTWARE DOOM (1993) · E1M8 · PHOBOS ANOMALY · PRE-HELL LIGHTING · DARKEST EPISODE 1 LEVEL · CORRECTED',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0E0C08',
    surface: '#181410',
    text: '#C8C0A8',
    textMuted: '#787060',
    primary: '#C83818',
    primaryHover: '#E05830',
    secondary: '#607838',
    secondaryHover: '#789848',
    accent: '#2878C8',
    bgDisabled: '#201C14',
    textDisabled: '#484038',
    success: '#609038',
    error: '#982010',
    warning: '#A87828',
    info: '#2878C8',
    border: '#201C14',
    borderStrong: '#383028',
    overlay: '#0e0c08d9',
  }
};
