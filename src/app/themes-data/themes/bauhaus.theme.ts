const fonts: IThemeFonts = {
  primary: {
    name: 'EB Garamond',
    pitch: 'The contradiction that works: hand-press humanist serif against woven geometry, the workshop\'s book beside the loom',
  },
  secondary: {
    name: 'Josefin Sans',
    pitch: 'Geometric, 1920s-proportioned, the closest free approximation to the VKHUTEMAS lettering sensibility before Constructivism.',
  },
}

export const bauhausLight: ITheme = {
  cssName: 'bauhaus-light',
  title: 'Bauhaus loom',
  subtitle: 'GUNTA STÖLZL · WEAVING WORKSHOP · DESSAU · 1925–1931',
  pitch: 'The Dessau weaving workshop is misread as primary-color Bauhaus — that was Kandinsky\'s painting class. Stölzl\'s weavers worked in wool and silk, where dye behaves completely differently to paint. Background is undyed natural wool: a specific yellow-grey, warmer than linen, cooler than canvas. Primary is madder on wool — the dye-on-fiber version of red, which always oxidises toward a brick-brown pink, never a clean red. Secondary is weld-dyed yarn: the yellow of reseda luteola on white wool, the oldest European dye. Accent is woad on undyed ground: a quiet, recessive blue-grey, the colour of indigo that has been exhausted through repeated vatting. Text is warp-thread black — the tensioned structural thread, always darker than the weft.',
  fonts: fonts,
  variables: {
    background: '#F2EDE0',
    surface: '#E8E0CE',
    text: '#100D08',
    textMuted: '#5C5040',
    primary: '#8C3A30',
    primaryHover: '#68261C',
    secondary: '#7A6410',
    secondaryHover: '#584808',
    accent: '#445870',
    bgDisabled: '#DDD6C4',
    textDisabled: '#A09080',
    success: '#486038',
    error: '#A83024',
    warning: '#A07810',
    info: '#304868',
    border: '#DAD2C0',
    borderStrong: '#A89880',
    overlay: '#100d0880',
  }
};

export const bauhausDark: ITheme = {
  cssName: 'bauhaus-dark',
  title: 'Black warp',
  subtitle: 'STÖLZL SLIT-TAPESTRY · DESSAU · 1927–1929',
  pitch: 'In Stölzl\'s slit-tapestry technique, the warp threads — the structural vertical threads under tension — could be black, creating a ground through which colored weft threads pass as luminous horizontal bands. In dark pieces the black warp dominates and the colors appear as jewel-like interruptions. Background is compressed black warp: densely beaten wool, a black that has warmth from the lanolin still in the fiber. Surface is the slightly looser weave of the ground cloth — not structurally different, just fractionally lighter due to the gap between warp threads. Madder primary shifts to a bright lacquer-red on dark ground — no longer brick-brown but now singing. Weld secondary becomes a high-chroma amber-yellow, the color of the dye vat itself rather than the dried fiber. Woad accent brightens to a dusty periwinkle.',
  fonts: fonts,
  variables: {
    background: '#0D0B09',
    surface: '#1A1714',
    text: '#EDE8DC',
    textMuted: '#9A9080',
    primary: '#D06050',
    primaryHover: '#E87864',
    secondary: '#C89A20',
    secondaryHover: '#E0B238',
    accent: '#7888A8',
    bgDisabled: '#242018',
    textDisabled: '#504840',
    success: '#588850',
    error: '#D85040',
    warning: '#D0A838',
    info: '#6078B0',
    border: '#28241C',
    borderStrong: '#504838',
    overlay: '#0d0b09d9',
  }
};
