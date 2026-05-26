const fonts: IThemeFonts = {
  primary: {
    name: 'IBM Plex Mono',
    pitch: 'Used as body text for its typewriter rigidity; in this palette prose should feel like a printed manifesto.',
  },
  secondary: {
    name: 'Bebas Neue',
    pitch: 'All-caps condensed grotesque, the closest free approximation to Rodchenko\'s hand-lettered poster titles.',
  },
}

export const constructionLight: ITheme = {
  cssName: 'constructivism-light',
  title: 'Constructivism',
  subtitle: 'SOVIET AVANT-GARDE · RODCHENKO · 1920–1932',
  pitch: 'The VKHUTEMAS workshops used an enforced constraint: white paper, carbon black, vermilion, and raw linen. Nothing else. This palette obeys that rule. Background is the optical white of uncoated Soviet printing stock — not warm, not cool, a flat neutral. Primary is the specific vermilion of agitprop posters, PMS 485 territory, high chroma. Secondary is iron-black, used for structural geometry. Accent is unbleached linen — the only warmth allowed in. Disabled states use the grey of half-dried lithography ink.',
  fonts: fonts,
  variables: {
    background: '#F8F8F5',
    surface: '#EEEEED',
    text: '#0A0A09',
    textMuted: '#4A4A48',
    primary: '#CC2200',
    primaryHover: '#A01400',
    secondary: '#1A1A18',
    secondaryHover: '#383834',
    accent: '#A89060',
    bgDisabled: '#E0E0DE',
    textDisabled: '#909090',
    success: '#205830',
    error: '#881008',
    warning: '#987020',
    info: '#204078',
    border: '#E0E0DE',
    borderStrong: '#A8A8A6',
    overlay: '#0a0a0980',
  }
};

export const constructionDark: ITheme = {
  cssName: 'constructivism-dark',
  title: 'Agitprop train',
  subtitle: 'SOVIET AGITPROP RAILWAY CARRIAGE · 1919–1924',
  pitch: 'Lenin\'s agitprop trains carried printing presses, film projectors, and libraries to the front lines. The carriages were painted black with vermilion graphic panels designed by Constructivist artists — the same visual language as the posters, now on steel in motion. Background is locomotive black: the specific near-black of iron oxide paint on steel, with a fractional warm undertone from the metal beneath. Surface is the interior wood paneling — dark but not black, a compressed charcoal. Vermilion primary is unchanged from the light palette: it is one of the very few pigments that reads identically on white or black, neither gaining nor losing chroma. Secondary is natural brass from rivets and fixtures. Accent is the pale cream of newspaper print, which was the most common distribution medium.',
  fonts: fonts,
  variables: {
    background: '#0C0B09',
    surface: '#181614',
    text: '#F0EDE6',
    textMuted: '#908880',
    primary: '#D83018',
    primaryHover: '#F04830',
    secondary: '#B89040',
    secondaryHover: '#D0A858',
    accent: '#D4C8A8',
    bgDisabled: '#222018',
    textDisabled: '#504840',
    success: '#407848',
    error: '#A02818',
    warning: '#C8A848',
    info: '#386098',
    border: '#24221C',
    borderStrong: '#403C34',
    overlay: '#0c0b09d9',
  }
};
