const fonts: IThemeFonts = {
  primary: {
    name: 'Merriweather',
    pitch: 'Designed for screen legibility at body size, slightly condensed, the typeface of interpretive panels and trail guides.',
  },
  secondary: {
    name: 'Fjalla One',
    pitch: 'A condensed display sans with the weight of a National Park Service sign; it has exactly the practical, un-precious character this palette demands.',
  },
}

export const yosemiteLight: ITheme = {
  cssName: 'yosemite-light',
  title: 'Valley View',
  subtitle: 'YOSEMITE VALLEY FLOOR · VALLEY VIEW · APRIL SNOWMELT · EL CAPITAN GRANITE',
  pitch: 'The reference is a specific viewpoint at a specific moment: Valley View, looking east toward El Capitan, first week of April when the snowmelt is at peak. The palette is geological and botanical. Background is El Capitan granite: the specific pinkish-buff of Yosemite Valley\'s intrusive granodiorite, composed of quartz, plagioclase feldspar, and biotite mica. It is not grey — it reads warm in morning light, almost salmon at dusk. The warmth comes from the feldspar content and the faint iron staining on exposed faces. Surface is the slightly cooler granite in shadow — the biotite mica gives it a fractional grey-green. Text is the deep shadow at the base of El Capitan where the wall meets the talus: a dark warm grey, the colour of lichen-covered granite in permanent shade. Primary is Yosemite valley-channel sky: the valley walls create a narrow sky channel that reads more saturated than open sky — a deep, clean blue with no grey in it. Secondary is ponderosa pine bark at this elevation: the famous vanilla-scented puzzle-bark, a warm orange-brown closer to cinnamon than rust. Accent is Merced River at snowmelt: the turbid grey-green of glacial flour suspended in cold water — not postcard blue, a specific muted grey-green.',
  fonts: fonts,
  variables: {
    background: '#F0EAE0',
    surface: '#E4DCD0',
    text: '#120E0A',
    textMuted: '#605650',
    primary: '#2A5080',
    primaryHover: '#183868',
    secondary: '#904E20',
    secondaryHover: '#70340C',
    accent: '#4A7060',
    bgDisabled: '#D4CEC4',
    textDisabled: '#9A9490',
    success: '#507038',
    error: '#984028',
    warning: '#A87820',
    info: '#4078A0',
    border: '#DCD4C8',
    borderStrong: '#A8A094',
    overlay: '#120e0a80',
  }
};

export const yosemiteDark: ITheme = {
  cssName: 'yosemite-dark',
  title: 'Yosemite 2am',
  subtitle: 'YOSEMITE VALLEY FLOOR · 2AM · APRIL · STARFIELD',
  pitch: 'The valley floor at 2am in early April is one of the darkest inhabited places in California — the valley walls block artificial light from every direction except directly above. What remains is starlight reflected off snow on the upper walls, and the flat darkness of the meadow. El Capitan\'s face is faintly visible: pale granite catching starlight, reading as a very dark warm grey against a slightly less dark sky. Background is the valley sky between the ridgelines: a deep blue-black, darker than a clear open sky because the walls cut off the lighter horizon. The specific colour has been measured at Yosemite for dark-sky conservation purposes — it sits around a very deep, very slightly blue dark. Surface is the valley meadow: dark, flat, slightly warmer from the dark soil beneath. Text is El Capitan granite by starlight: the pale buff of the rock face reading as the lightest element in the scene, a warm grey-white. Primary is the valley sky at zenith — the deepest blue you can see without a telescope, a dark saturated sky-blue. Secondary is a distant ponderosa fire: the warm orange of the bark colour now as ember, the colour of a ranger\'s fire seen across the meadow. Accent is the grey-green of the Merced\'s surface catching starlight.',
  fonts: fonts,
  variables: {
    background: '#080C14',
    surface: '#101820',
    text: '#EAE4D8',
    textMuted: '#8A9098',
    primary: '#3868A8',
    primaryHover: '#4888C8',
    secondary: '#B06828',
    secondaryHover: '#D08840',
    accent: '#508878',
    bgDisabled: '#141C28',
    textDisabled: '#384048',
    success: '#406848',
    error: '#883828',
    warning: '#C08030',
    info: '#4880A0',
    border: '#101824',
    borderStrong: '#283440',
    overlay: '#080c14d9',
  }
};
