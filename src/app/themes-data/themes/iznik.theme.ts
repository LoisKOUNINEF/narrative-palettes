const fonts: IThemeFonts = {
  primary: {
    name: 'Gentium Plus',
    pitch: 'Wide, warm, slightly Byzantine in its letter construction, appropriate to the Ottoman-Mediterranean cultural register.',
  },
  secondary: {
    name: 'Scheherazade New',
    pitch: 'Designed specifically for Arabic script alongside Latin, keeping the geometric-organic tension of Iznik\'s own decorative vocabulary.',
  },
}

export const iznikLight: ITheme = {
  cssName: 'iznik-light',
  title: 'Iznik',
  subtitle: 'IZNIK CERAMIC WORKSHOPS · OTTOMAN EMPIRE · 1550–1600',
  pitch: 'The pigment palette of the Süleymaniye and Rüstem Pasha mosques, locked to the documented chemistry of peak Iznik production. Background is çini white — tin-glazed earthenware ground, never optically pure, always slightly warm from the clay body beneath. Primary is kobalt: cobalt oxide fired at 900°C, a blue that sits between navy and ultramarine, denser than either. Secondary is kırmızı — Armenian bole red, the most technically demanding pigment in the Iznik vocabulary, achieved by no other ceramic tradition of the period. Accent is turkuaz, the copper-oxide turquoise used for border fillets. Disabled states use the dusty grey of unfired clay powder on the workshop floor.',
  fonts: fonts,
  variables: {
    background: '#F5F2EA',
    surface: '#EAE5D8',
    text: '#0D0B08',
    textMuted: '#524838',
    primary: '#1C3A78',
    primaryHover: '#102458',
    secondary: '#A82820',
    secondaryHover: '#781810',
    accent: '#1A7B6E',
    bgDisabled: '#DDD8CC',
    textDisabled: '#9C9488',
    success: '#306848',
    error: '#C02018',
    warning: '#A87820',
    info: '#208890',
    border: '#DCD6C8',
    borderStrong: '#ACA494',
    overlay: '#0d0b0880',
  }
};

export const iznikDark: ITheme = {
  cssName: 'iznik-dark',
  title: 'Lacivert',
  subtitle: 'BLUE MOSQUE INTERIOR AT NIGHT · LACIVERT GROUND TILES · ISTANBUL · 1616',
  pitch: 'A subset of Iznik production used lacivert — deep cobalt blue — as the tile ground rather than tin white. These pieces are rarer and later; they appear in the Blue Mosque interior (Sultan Ahmed I, 1616) and in the Topkapı collections. The ground is the specific deep cobalt of high-iron cobalt ore: not navy, not indigo, a blue that sits between them and reads almost black in shadow. Surface is a fractionally lighter cobalt — the same glaze but thinner, letting more of the clay body influence the color. Text is tin-white glaze, the same white used in the light palette but now as text on blue rather than ground under blue. Kırmızı red becomes a bright coral against the cold cobalt ground. Turkuaz accent brightens to near-mint.',
  fonts: fonts,
  variables: {
    background: '#0A1020',
    surface: '#121A30',
    text: '#F0EDE4',
    textMuted: '#8898B8',
    primary: '#E06858',
    primaryHover: '#F08878',
    secondary: '#4ABCAC',
    secondaryHover: '#68D8C8',
    accent: '#E8C860',
    bgDisabled: '#1A2238',
    textDisabled: '#3C4A62',
    success: '#48A880',
    error: '#B03038',
    warning: '#D0A038',
    info: '#7088C0',
    border: '#121A34',
    borderStrong: '#283858',
    overlay: '#0a1020d9',
  }
};
