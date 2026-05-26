const fonts: IThemeFonts = {
  primary: {
    name: 'IBM Plex Sans',
    pitch: 'The typeface of the era\'s corporate technology; its slightly condensed proportions and engineering-adjacent character fit the used-future aesthetic precisely.',
  },
  secondary: {
    name: 'Share Tech',
    pitch: 'The proportional companion to Share Tech Mono; used for display it reads as stencilled maintenance signage, exactly Ron Cobb\'s register.',
  },
}

export const nostromoLight: ITheme = {
  cssName: 'nostromo-light',
  title: 'Nostromo',
  subtitle: 'USCSS NOSTROMO · ALIEN (1979) · PRODUCTION DESIGN: RON COBB · H.R. GIGER',
  pitch: 'Alien (1979) is one of the most precisely documented production designs in film history. Ron Cobb\'s interior design for the Nostromo was built on what he called the \'used future\' principle — a working spacecraft with no clean surfaces, no primary colours, nothing new. The colour decisions are documented in Cobb\'s production paintings and the surviving set photographs. Background is Nostromo corridor paint: an off-white with a very slight warm-grey cast, the colour of a wall that has been repainted several times and is beginning to show age. Surface is the bulkhead panel — slightly darker, the grey of the load-bearing structural ribs. Text is the near-black of stenciled maintenance markings and cable conduit. Primary is P31 phosphor green: the specific green emitted by the Nostromo\'s MUTHR computer screens and corridor status displays — not bright green, a slightly desaturated, slightly warm green-yellow. Secondary is P1 phosphor amber: used for warning displays and the medical bay monitors — a warm amber with slightly more orange than a generic yellow. Accent is the specific blue-white of the Nostromo\'s exterior running lights, seen in the opening tracking shot — cold, high-intensity, HID-adjacent.',
  fonts: fonts,
  variables: {
    background: '#EEECEA',
    surface: '#E2E0DC',
    text: '#100E0C',
    textMuted: '#585450',
    primary: '#3A7A40',
    primaryHover: '#245C2A',
    secondary: '#A07820',
    secondaryHover: '#805810',
    accent: '#2A5888',
    bgDisabled: '#D4D2CE',
    textDisabled: '#989490',
    success: '#408048',
    error: '#903020',
    warning: '#B08018',
    info: '#3868A0',
    border: '#D6D4D0',
    borderStrong: '#A8A49E',
    overlay: '#100e0c80',
  }
};

export const nostromoDark: ITheme = {
  cssName: 'nostromo-dark',
  title: 'Night watch',
  subtitle: 'USCSS NOSTROMO BRIDGE · NIGHT-WATCH CYCLE · SCREENS ONLY · ALIEN (1979)',
  pitch: 'Ridley Scott lit the Nostromo bridge night-watch sequences with almost no overhead light — only the phosphor screens and a few amber indicator strips. This is the environment in which Dallas, Lambert, and Kane first receive the transmission. It is one of the most precisely art-directed dark environments in cinema. The phosphor screens (P31 green and P1 amber) become the primary light sources — their glow illuminates the operators\' faces from below and from the side. Background is the bridge at night: the grey-black of the flight deck panels with overhead lighting off, a slightly warm near-black from the heat of the electronics beneath. Surface is the console panel face — slightly lighter, the grey of the plastic keycap surrounds catching the edge of a screen. Text is the P31 green at high brightness — the brightest characters on the MUTHR readout. Muted text is the same phosphor at low brightness. The P1 amber secondary glows against the dark as a warning system would — urgent without being red.',
  fonts: fonts,
  variables: {
    background: '#0C0C0A',
    surface: '#161614',
    text: '#88C870',
    textMuted: '#508048',
    primary: '#70C060',
    primaryHover: '#90D880',
    secondary: '#C89830',
    secondaryHover: '#E0B048',
    accent: '#4888C0',
    bgDisabled: '#1E1E1C',
    textDisabled: '#384838',
    success: '#60A850',
    error: '#A83828',
    warning: '#D0A038',
    info: '#5090C8',
    border: '#1C1C1A',
    borderStrong: '#343430',
    overlay: '#0c0c0ad9',
  }
};
