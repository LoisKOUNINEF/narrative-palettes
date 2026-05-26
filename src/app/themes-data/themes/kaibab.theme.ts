const fonts: IThemeFonts = {
  primary: {
    name: 'Bitter',
    pitch: 'A slab serif designed for screens, slightly squared, with the weight of a field guide or interpretive panel.',
  },
  secondary: {
    name: 'Teko',
    pitch: 'Condensed, geological in its vertical pressure, the kind of face that appears on USGS survey maps and park signage.',
  },
}

export const kaibabLight: ITheme = {
  cssName: 'kaibab-light',
  title: 'Kaibab stratigraphy',
  subtitle: 'GRAND CANYON GEOLOGICAL SECTION · SOUTH RIM · MATHER POINT · LATE OCTOBER LIGHT',
  pitch: 'The Grand Canyon\'s colour is not scenic — it is mineralogical stratigraphy made visible. Each token maps to a named geological formation in the canyon wall, read from rim to inner gorge. Background is Kaibab limestone: the pale grey-cream of the South Rim surface rock, magnesium-rich marine limestone deposited 270 million years ago, bleached by Sonoran sun. Surface is Toroweap sandstone directly beneath — fractionally warmer, the cream of wind-deposited dune sand lithified. Text is Vishnu Schist: the Precambrian metamorphic basement at the canyon floor, nearly two billion years old, the darkest and hardest rock in the section, a very dark warm grey-brown. Primary is Hermit shale: iron-rich mudstone deposited in a tropical flood plain 280 million years ago, its specific red-purple colour produced by ferric oxide in an oxidizing environment — the most distinctive layer in the canyon, the one that reads as purple rather than red. Secondary is Bright Angel shale: the grey-green band of the inner gorge, produced when iron is reduced rather than oxidized in a marine environment — this is the only green in the canyon and it is a very specific grey-green. Accent is Redwall orange: limestone stained by iron washing down from the Supai Group above, the colour the canyon is most famous for at long distance.',
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
  pitch: 'The inner gorge of the Grand Canyon — the last 300 metres of depth — is cut through Vishnu Schist, the dark Precambrian basement rock. By moonlight the stratigraphy above is partially visible: the Redwall cliffs read as a dark rust above, the Bright Angel shale as an even darker grey-green band. The Colorado River is invisible — a sound in the dark. Background is Vishnu Schist by moonlight: the darkest material in the canyon, a near-black with fractional warm-brown undertone from the biotite and garnet in the metamorphic matrix. Surface is the slightly lighter schist where moonlight catches a flat face. Text is Kaibab limestone by moonlight: the rim rock above reads as the palest element in the scene, a warm grey-white. Primary is Hermit shale under cool moonlight: the iron-red purple shifts toward a deeper, cooler burgundy — the ferric oxide absorbs blue moonlight differently from warm sunlight, making the layer appear more violet. Secondary is Bright Angel shale advancing: in low light the reduced-iron green-grey is one of the more legible mid-tones. Accent is the orange glow of a distant fire on the North Rim — the only warm light source in the scene.',
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
