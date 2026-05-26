const fonts: IThemeFonts = {
  primary: {
    name: 'Source Sans Pro',
    pitch: '',
  },
  secondary: {
    name: 'Work Sans',
    pitch: '',
  },
}

export const nutinLight: ITheme = {
  cssName: 'nutin-light',
  title: 'nutin Light',
  subtitle: 'nutin website, light version',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F7F9F6',
    surface: '#EDF2EC',
    text: '#161C18',
    textMuted: '#506858',
    primary: '#475569',
    primaryHover: '#384457',
    secondary: '#94A3B8',
    secondaryHover: '#7C8CA3',
    accent: '#5A7A60',
    bgDisabled: '#DCE4DA',
    textDisabled: '#8CA08C',
    success: '#4A8C62',
    error: '#BE4E4E',
    warning: '#D6A23E',
    info: '#4A78BE',
    border: '#CDD8CE',
    borderStrong: '#96A89A',
    overlay: '#0A120E85',
  }
};

export const nutinDark: ITheme = {
  cssName: 'nutin-dark',
  title: 'nutin Dark',
  subtitle: 'nutin website, dark version',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#111714',
    surface: '#1A2420',
    text: '#E8ECEA',
    textMuted: '#B0C4BA',
    primary: '#8BB5A2',
    primaryHover: '#A0C6B5',
    secondary: '#6D957F',
    secondaryHover: '#80AA92',
    accent: '#4A7A60',
    bgDisabled: '#26302C',
    textDisabled: '#64786E',
    success: '#5CAA76',
    error: '#E06666',
    warning: '#EBBA52',
    info: '#6699E0',
    border: '#34423C',
    borderStrong: '#586C62',
    overlay: '#000000AD',
  }
};
