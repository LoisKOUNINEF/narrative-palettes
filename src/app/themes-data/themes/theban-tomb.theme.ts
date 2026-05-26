const fonts: IThemeFonts = {
  primary: {
    name: 'Cardo',
    pitch: 'Designed specifically for classical and biblical scholarship, with characters for ancient languages; appropriate to the archaeological register.',
  },
  secondary: {
    name: 'Cinzel',
    pitch: 'Roman capitalis monumentalis, the letterform that descends from the same incising tradition as Egyptian hieroglyphic cartouches; use in uppercase only.',
  },
}

export const thebanTombLight: ITheme = {
  cssName: 'theban-tomb-light',
  title: 'Theban tomb',
  subtitle: 'NEW KINGDOM TOMB PAINTING · THEBAN NECROPOLIS · TT96 & QV66 · 1550–1070 BCE',
  pitch: 'Every token is a pigment identified by spectroscopic analysis in the tomb of Sennefer (TT96) and Nefertari (QV66) — the two best-preserved and most studied New Kingdom tomb programs. Background is huntite-plastered limestone: the finish coat applied to the tomb walls before painting, made from magnesium calcium carbonate ground in water. It is distinctly warmer and chalkier than calcite white, with an almost powdery matte quality. Surface is the raw limestone beneath — the same stone but slightly more yellow where the huntite layer is thin. Text is carbon black, ground from charred organic matter and bound in gum arabic. Primary is Egyptian blue — cuprorivaite, the first synthetic pigment in history (predating the Pompeian use by over a millennium), produced by fusing copper ore, limestone, and silica at 900°C. On huntite ground it is denser and more saturated than on Roman plaster. Secondary is red ochre: iron oxide, used by Egyptian convention to paint male skin, garments, and architectural borders. Accent is malachite: copper carbonate green, ground from Sinai ore and used for foliage, the Nile, and faience-colored objects. Disabled states use the pale dust of the quarry floor.',
  fonts: fonts,
  variables: {
    background: '#F2EDD8',
    surface: '#E8E0C4',
    text: '#100C06',
    textMuted: '#5C5038',
    primary: '#1A5080',
    primaryHover: '#0E3868',
    secondary: '#A03820',
    secondaryHover: '#78200E',
    accent: '#2A7048',
    bgDisabled: '#D8D0B8',
    textDisabled: '#9A9278',
    success: '#488040',
    error: '#B83018',
    warning: '#A88018',
    info: '#3878B0',
    border: '#E0D8C0',
    borderStrong: '#B0A488',
    overlay: '#100c0680',
  }
};

export const thebanTombDark: ITheme = {
  cssName: 'theban-tomb-dark',
  title: 'Sarcophagus chamber',
  subtitle: 'NEW KINGDOM TOMB · SARCOPHAGUS CHAMBER · BASALT AND FIRELIGHT',
  pitch: 'The innermost chamber of a New Kingdom tomb was cut from black basalt or painted over black gesso before the artist\'s work began. The painters worked by the light of oil lamps with polished metal reflectors — the same lamps depicted in the tomb paintings themselves. In that light the Egyptian blue shifts: warm lamp oil light (approximately 1900K) strips the blue component and the pigment reads as a deep teal-green, the colour of the Nile at depth. The malachite green brightens dramatically — copper carbonate is one of the few pigments that advances in firelight rather than retreating. The red ochre becomes the dominant warm tone. Background is the basalt or black-gessoed wall — a warm near-black, slightly brownish from the carbon-and-gum gesso mixture. Surface is slightly lighter: the limestone softer rock between basalt beds, darkened by lamp soot. Text is huntite white, the plastered highlights catching the lamp.',
  fonts: fonts,
  variables: {
    background: '#0E0A06',
    surface: '#1A1410',
    text: '#EEE6D0',
    textMuted: '#A09068',
    primary: '#2888A0',
    primaryHover: '#38A888',
    secondary: '#C85030',
    secondaryHover: '#E07048',
    accent: '#40A060',
    bgDisabled: '#221A12',
    textDisabled: '#524438',
    success: '#389050',
    error: '#983018',
    warning: '#C09828',
    info: '#307088',
    border: '#1C140E',
    borderStrong: '#382C20',
    overlay: '#0e0a06d9',
  }
};
