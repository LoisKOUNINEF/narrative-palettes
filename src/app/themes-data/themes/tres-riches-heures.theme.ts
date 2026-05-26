const fonts: IThemeFonts = {
  primary: {
    name: 'EB Garamond',
    pitch: 'The standard humanist manuscript serif, the letterform that emerged directly from the scribal tradition these illuminations accompanied.',
  },
  secondary: {
    name: 'MedievalSharp',
    pitch: 'A clean blackletter that works at display sizes without the illegibility of full Textura; appropriate to a manuscript tradition without pastiche.',
  },
}

export const tresRichesHeuresLight: ITheme = {
  cssName: 'tres-riches-heures-light',
  title: 'Très Riches Heures',
  subtitle: 'INTERNATIONAL GOTHIC MANUSCRIPT · LIMBOURG BROTHERS · PARIS · 1411–1416',
  pitch: 'The Très Riches Heures du Duc de Berry is the most technically documented manuscript of the medieval period — pigments identified through X-ray fluorescence, Raman spectroscopy, and synchrotron analysis. Background is vellum: the stretched and scraped calfskin on which the illuminations were applied. It is not white — it is a warm ivory with a slight translucency and occasional pore structure visible under raking light. Surface is the slightly darker vellum of the flesh side, used for less important pages. Text is iron gall ink: not carbon black, but the specific warm-dark brown produced by ferrous sulfate reacting with gallic acid — it is actually brown, not black, and darkens over decades. Primary is ultramarine: lapis lazuli ground from Afghan stone, levigated to remove impurities. The specific violet-blue of the Limbourg brothers\' ultramarine — a blue that leans toward purple, never toward green — is one of the most recognizable colours in Western art history. Secondary is vermilion: mercury sulfide, a pure and saturated orange-red with no brownish undertone. Accent is verdigris glaze: copper acetate applied as a transparent green over a lead white ground, producing a specific blue-green that exists in no other medium.',
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
  pitch: 'At Compline — the last canonical hour, after nightfall — the monks extinguished most lights. A single tallow candle remained for the final reader, emitting approximately 1800K. In that light the manuscript changes entirely. Ultramarine, which contains lapis lazuli absorbing red and green, loses almost all its saturation — it retreats to a deep shadow-blue, barely distinguishable from the darkest darks. Vermilion advances violently — it is the most luminous colour by candlelight, reading almost orange. Gold leaf, which in daylight competes with other colours, becomes the dominant element by candlelight — every photon the candle emits is reflected directly back. Background is the scriptorium wall at night — dressed limestone painted with whitewash, now reading as a warm dark grey-brown by single-candle light. Surface is the oak writing desk, dark with beeswax and decades of use.',
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
