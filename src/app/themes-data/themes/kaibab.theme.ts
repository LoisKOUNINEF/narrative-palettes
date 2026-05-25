const fonts: IThemeFonts = {
  primary: {
    name: 'Bitter',
    pitch: '',
  },
  secondary: {
    name: 'Teko',
    pitch: '',
  },
}

export const kaibabLight: ITheme = {
  cssName: 'kaibab-light',
  title: 'Kaibab stratigraphy',
  subtitle: 'GRAND CANYON GEOLOGICAL SECTION · SOUTH RIM · MATHER POINT · LATE OCTOBER LIGHT',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F2EEE0',
    surface: '#EAE4D4',
    text: '#160E08',
    textMuted: '#6A5A48',
    primary: '#7A3848',
    primaryHover: '#582030',
    secondary: '#4A6858',
    secondaryHover: '#30483C',
    accent: '#B85C20',
    bgDisabled: '#D8D2C0',
    textDisabled: '#9A9080',
    success: '#507048',
    error: '#983020',
    warning: '#C06820',
    info: '#5078A0',
    border: '#DED8C8',
    borderStrong: '#B0A490',
    overlay: '#160e0880',
  }
};

export const kaibabDark: ITheme = {
  cssName: 'kaibab-dark',
  title: 'Inner gorge',
  subtitle: 'GRAND CANYON · VISHNU SCHIST · INNER GORGE · MOONLIGHT',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#0C0906',
    surface: '#181210',
    text: '#EAE2D0',
    textMuted: '#9A8E78',
    primary: '#A85868',
    primaryHover: '#C87084',
    secondary: '#608878',
    secondaryHover: '#78A894',
    accent: '#C87030',
    bgDisabled: '#201A14',
    textDisabled: '#504438',
    success: '#486858',
    error: '#903028',
    warning: '#D88838',
    info: '#406088',
    border: '#1C1410',
    borderStrong: '#382C24',
    overlay: '#0c0906d9',
  }
};
