const fonts: IThemeFonts = {
  primary: {
    name: 'Cardo',
    pitch: 'The classical scholarship standard; its slightly archaic capitalis proportions recall the painted letter conventions of the Parthenon inscription tradition.',
  },
  secondary: {
    name: 'GFS Neohellenic',
    pitch: 'Designed by the Greek Font Society from a 1927 type specimen; appropriate here for the same reasons as Cardo.',
  },
}

export const pentelicLight: ITheme = {
  cssName: 'pentelic-light',
  title: 'Pentelic',
  subtitle: 'POLYCHROME MARBLE SCULPTURE · ATHENS · EARLY CLASSICAL · 480–430 BCE',
  pitch: 'Greek marble sculpture was fully painted. UV fluorescence studies and the Gods in Color exhibition have now documented the pigments used on the Parthenon sculptures, Acropolis korai, and the Aegina pediments with specificity. Background is Pentelic marble — not white. The marble quarried from Mount Pentelicus above Athens contains magnesium and traces of iron that give it a specific warm ivory, yellowing further with age and Attic sun. Surface is the dressed stone of the stylobate, slightly more weathered. Text is charcoal black — the pigment used for hair, outlines, and pupils, applied over a white calcite ground. Primary is caeruleum: Egyptian blue, the synthetic copper-calcium silicate used for garments, shields, and architectural decoration. On marble it appears denser and more saturated than on the Pompeian plaster of the later palette. Secondary is red ochre — iron oxide applied to borders, lips, and flesh in the early Classical tradition. Accent is orpiment: arsenic trisulfide, one of the most chromatic yellows available in antiquity, used for drapery highlights and gilded ornament.',
  fonts: fonts,
  variables: {
    background: '#F5F0E0',
    surface: '#EDE6D0',
    text: '#0E0C08',
    textMuted: '#58503C',
    primary: '#1E4878',
    primaryHover: '#103060',
    secondary: '#9E3020',
    secondaryHover: '#781C10',
    accent: '#A87C00',
    bgDisabled: '#DDD8C4',
    textDisabled: '#9A9480',
    success: '#306040',
    error: '#B82818',
    warning: '#B08008',
    info: '#4078B0',
    border: '#E0DAC8',
    borderStrong: '#B0A890',
    overlay: '#0e0c0880',
  }
};

export const pentelicDark: ITheme = {
  cssName: 'pentelic-dark',
  title: 'Naos lamp',
  subtitle: 'PARTHENON NAOS · ATHENS · OLIVE-OIL LAMP LIGHT',
  pitch: 'The interior of the Parthenon naos — the inner chamber housing the twelve-metre chryselephantine cult statue of Athena — had no windows. The only light came from olive-oil lamps and from the open east door. Pausanias records that a pool of water was kept on the floor to humidify the ivory of the statue and to reflect lamplight upward onto it. In that environment the pigments on the marble behaved completely differently from daylight. Background is the compressed darkness of Pentelic marble in lamplight — a near-black with a fractional warm undertone from the stone\'s iron traces, deepened by centuries of lamp soot. Surface is the marble floor seen in the pool reflection — slightly lighter, slightly cooler. Text is the marble highlights — the places where lamplight strikes the carved drapery directly, a warm ivory-white. Primary is caeruleum by lamplight: Egyptian blue under warm orange illumination loses blue and reads as a deeper, slightly greenish teal — the specific colour of bronze seen by fire. Secondary is red ochre at high value — by lamplight red pigment advances strongly, becoming the most visible colour in the chamber. Accent is orpiment by lamplight: the arsenic yellow shifts to a warm gold, closer to the actual gilding on the statue\'s armour.',
  fonts: fonts,
  variables: {
    background: '#0C0A06',
    surface: '#181410',
    text: '#EEE4CC',
    textMuted: '#9A9070',
    primary: '#3878A8',
    primaryHover: '#309088',
    secondary: '#C84830',
    secondaryHover: '#E06848',
    accent: '#C09810',
    bgDisabled: '#201C14',
    textDisabled: '#504840',
    success: '#406838',
    error: '#982818',
    warning: '#D0A820',
    info: '#486890',
    border: '#1C1810',
    borderStrong: '#3C3428',
    overlay: '#0c0a06d9',
  }
};
