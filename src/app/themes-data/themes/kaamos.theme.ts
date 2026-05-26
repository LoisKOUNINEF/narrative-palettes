const fonts: IThemeFonts = {
  primary: {
    name: 'Newsreader',
    pitch: 'A text serif designed for long reading, slightly condensed, comfortable in grey-white conditions.',
  },
  secondary: {
    name: 'Figtree',
    pitch: 'A contemporary geometric sans with just enough warmth to avoid the cold minimalism that would be too easy a choice for this palette; Scandinavian without being clichéd.',
  },
}

export const kaamosLight: ITheme = {
  cssName: 'kaamos-light',
  title: 'Kaamos',
  subtitle: 'FINNISH BIRCH FOREST · LATE FEBRUARY · 60°N · BEFORE LIGHT RETURNS',
  pitch: 'Kaamos is the Finnish word for the polar night period — but late February is its end, the days when light begins to return but the landscape is still deep in winter. The source is entirely botanical and geological. Background is birch bark white — Betula pendula has a specific pinkish-warm white, never optically pure, broken by horizontal dark lenticels. It reads warmer than paper, cooler than ivory. Surface is the inner bark layer, fractionally more cream. Text is lenticel dark — the near-black of the horizontal markings on birch bark, a very dark warm brown. Primary is kaamos horizon: the brief amber-pink that appears at the treeline for approximately forty minutes at 3pm in February at this latitude, the only colour in an otherwise grey-white sky. Secondary is frozen lake — the specific desaturated blue-grey of ice over black water, a colour with very little chroma, neither blue nor grey but both. Accent is dead bracken through snow: Pteridium aquilinum fronds that have persisted above the snowline, a muted burnt orange reading against white.',
  fonts: fonts,
  variables: {
    background: '#F4F0EA',
    surface: '#EAE4DC',
    text: '#110C08',
    textMuted: '#5C5248',
    primary: '#B06030',
    primaryHover: '#904418',
    secondary: '#4A6878',
    secondaryHover: '#304858',
    accent: '#9A5C28',
    bgDisabled: '#D8D2CA',
    textDisabled: '#9A9490',
    success: '#607058',
    error: '#984030',
    warning: '#A86828',
    info: '#7090A0',
    border: '#DCD6CE',
    borderStrong: '#A89C90',
    overlay: '#110c0880',
  }
};

export const kaamosDark: ITheme = {
  cssName: 'kaamos-dark',
  title: 'Kaamos night',
  subtitle: 'FINNISH BIRCH FOREST · 4PM · FULL DARK · KAAMOS',
  pitch: 'At 4pm in February at 60°N, the light is completely gone. The birch forest at night in kaamos is one of the most specific visual environments in the world: pale vertical trunks as near-white marks in absolute darkness, the frozen lake a flat black mirror, the sky a very dark blue-grey — not black, because snow reflects even starlight upward and the sky retains a fractional luminosity. Background is that sky: the particular dark blue-grey of a Finnish winter night above a snow-covered landscape, a colour warmer than navy, colder than charcoal. Surface is compressed forest shadow — dark but with a faint warmth from the dark humus beneath the snow. Text is birch-trunk white seen at night — the bark still pale, still warm, still faintly pink, now the lightest object in the scene. Primary is the kaamos horizon seen from darkness: the amber-pink becomes a deeper rose-amber, more saturated because it is the only warm colour visible for hundreds of metres. Secondary is moonlight on frozen lake — the specific blue-silver of ice under a half-moon. Accent is the ember-orange of a single light in a distant window, the only artificial light in the forest.',
  fonts: fonts,
  variables: {
    background: '#0A0E14',
    surface: '#121820',
    text: '#EDE6DA',
    textMuted: '#8A8880',
    primary: '#C87848',
    primaryHover: '#DC9460',
    secondary: '#6898B0',
    secondaryHover: '#88B8D0',
    accent: '#C06830',
    bgDisabled: '#181E28',
    textDisabled: '#404850',
    success: '#587060',
    error: '#A84840',
    warning: '#D08038',
    info: '#5078A0',
    border: '#141C28',
    borderStrong: '#283038',
    overlay: '#0a0e14d9',
  }
};
