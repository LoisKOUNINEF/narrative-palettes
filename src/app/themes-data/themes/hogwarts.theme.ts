const fonts: IThemeFonts = {
  primary: {
    name: 'Lora',
    pitch: 'A contemporary calligraphic serif with enough warmth to sit on parchment without affectation.',
  },
  secondary: {
    name: 'Cinzel Decorative',
    pitch: 'The art nouveau-classical hybrid that sits closest to GrandPré\'s chapter heading lettering, borrowed from the Roman inscription tradition she referenced.',
  },
}

export const hogwartsLight: ITheme = {
  cssName: 'hogwarts-light',
  title: 'GrandPré',
  subtitle: 'MARY GRANDPRÉ CHAPTER ILLUSTRATIONS · HARRY POTTER US EDITIONS · 1997–2007',
  pitch: 'Mary GrandPré\'s chapter heading illustrations for the American editions of the Harry Potter books — published by Scholastic — are the images that defined the visual imagination of an entire generation of readers before the films existed. Her technique was art nouveau-inflected printmaking: raised gesso grounds, metallic foils, and a palette derived from medieval illumination and Alphonse Mucha. The background of her compositions was consistently a warm parchment — not white, the specific warm cream of aged manuscript paper, the ground from which her figures emerged. Surface is the slightly deeper parchment of a shadowed page area. Text is the near-black of her heaviest ink lines — a very dark warm brown, the colour of heavily inked etching plate. Primary is Hogwarts midnight blue: the colour of the night sky in her Hogwarts exterior compositions, a dense blue with enough purple in it to read as midnight rather than royal or navy — the specific blue of British winter night. Secondary is Forbidden Forest deep green: not Slytherin green, the darker and more complex green of old-growth forest in Cockcroft\'s UK cover paintings — a green with enough brown to read as shadow-under-canopy. Accent is GrandPré gold: the warm gold of Dumbledore\'s magical effects, Snitch wings, and decorative borders — not yellow, not mustard, a specific deep warm gold with enough brown to read as burnished rather than bright.',
  fonts: fonts,
  variables: {
    background: '#F5EED8',
    surface: '#ECE4C4',
    text: '#160E0A',
    textMuted: '#5C5040',
    primary: '#203060',
    primaryHover: '#121C40',
    secondary: '#2A5030',
    secondaryHover: '#18341C',
    accent: '#A07808',
    bgDisabled: '#DEDAD8',
    textDisabled: '#9A9488',
    success: '#487040',
    error: '#781820',
    warning: '#B06810',
    info: '#4858A0',
    border: '#E0D8C0',
    borderStrong: '#B8AC90',
    overlay: 'rgba(22 14 10 / 0.50)',
  }
};

export const hogwartsDark: ITheme = {
  cssName: 'hogwarts-dark',
  title: 'Little Hangleton',
  subtitle: 'GRANDPRÉ CHAPTER ILLUSTRATION · GOBLET OF FIRE GRAVEYARD · DARKEST ILLUSTRATION IN THE SERIES',
  pitch: 'GrandPré\'s chapter illustration for the graveyard chapter of Goblet of Fire — \'Flesh, Blood and Bone\' — is the darkest image in her entire run. She shifted to a near-black compositional ground, something she had avoided through the first three books. The palette collapses: parchment warmth is gone, gold is gone, the midnight blue recedes into the background darkness. The only colours that survive at high value are the sickly green of the Avada Kedavra curse — a specific yellow-green, colder than the forest green of the light palette — and the red of the Dark Mark in the sky. Background is GrandPré\'s darkest compositional ground: a near-black with a fractional warm-brown undertone, the colour of ink-saturated paper seen from the right side of a gouache composition. Surface is the graveyard stone: dark, slightly cooler, the blue-grey of old limestone in moonlight. Text is the pale cold light of the graveyard scene: GrandPré used a near-white with a fractional blue for her highlight areas in this illustration, colder than her usual warm parchment highlights. Primary is Avada Kedavra green: the specific yellow-green of the killing curse as GrandPré illustrated it — not the bright lime of the films, a sickly cold yellow-green, the colour of something wrong. Secondary is Dark Mark red: the crimson-red of the skull and serpent in the sky. Accent is wand-light gold: the last trace of warmth in the composition, the colour of Priori Incantatem\'s golden thread.',
  fonts: fonts,
  variables: {
    background: '#0A0806',
    surface: '#161210',
    text: '#DDD8CC',
    textMuted: '#908880',
    primary: '#7AAC28',
    primaryHover: '#98D038',
    secondary: '#A02830',
    secondaryHover: '#C04048',
    accent: '#C09010',
    bgDisabled: '#1C1814',
    textDisabled: '#484038',
    success: '#587830',
    error: '#781820',
    warning: '#A07010',
    info: '#607090',
    border: '#1C1612',
    borderStrong: '#383440',
    overlay: '#0a0806d9',
  }
};
