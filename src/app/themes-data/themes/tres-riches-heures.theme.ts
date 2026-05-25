const fonts: IThemeFonts = {
  primary: {
    name: 'EB Garamond',
    pitch: '',
  },
  secondary: {
    name: 'MedievalSharp',
    pitch: '',
  },
}

export const tresRichesHeuresLight: ITheme = {
  cssName: 'tres-riches-heures-light',
  title: 'Très Riches Heures',
  subtitle: 'INTERNATIONAL GOTHIC MANUSCRIPT · LIMBOURG BROTHERS · PARIS · 1411–1416',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F5EED8',
    surface: '#EDE4C4',
    text: '#14100A',
    textMuted: '#5A5040',
    primary: '#2E3888',
    primaryHover: '#1C2470',
    secondary: '#B03020',
    secondaryHover: '#881C10',
    accent: '#2A6858',
    bgDisabled: '#DDD6BC',
    textDisabled: '#9A9280',
    success: '#406840',
    error: '#C82818',
    warning: '#A88010',
    info: '#5078B0',
    border: '#E0D8C0',
    borderStrong: '#B0A690',
    overlay: '#14100a80',
  }
};

export const tresRichesHeuresDark: ITheme = {
  cssName: 'tres-riches-heures-dark',
  title: 'Compline candle',
  subtitle: 'MONASTIC SCRIPTORIUM · COMPLINE HOUR · SINGLE CANDLE · C. 1400',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#100E08',
    surface: '#1C1810',
    text: '#EEE4C8',
    textMuted: '#A09070',
    primary: '#4858B0',
    primaryHover: '#6070C8',
    secondary: '#D04828',
    secondaryHover: '#E86840',
    accent: '#C8A818',
    bgDisabled: '#201C14',
    textDisabled: '#504840',
    success: '#406038',
    error: '#A0301C',
    warning: '#D8B828',
    info: '#506088',
    border: '#201C10',
    borderStrong: '#40382C',
    overlay: '#100e08d9',
  }
};
