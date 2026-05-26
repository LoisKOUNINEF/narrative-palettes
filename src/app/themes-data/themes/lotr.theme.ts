const fonts: IThemeFonts = {
  primary: {
    name: 'GFS Didot',
    pitch: 'Tolkien used a calligraphic hand for his manuscripts; GFS Didot\'s Greek-influenced letterforms carry the right humanist weight.',
  },
  secondary: {
    name: 'UnifrakturMaguntia',
    pitch: 'Tolkien\'s own lettering moved between Fraktur and insular script; this is the closest free approximation for display use at large sizes only.',
  },
}

export const lotrLight: ITheme = {
  cssName: 'lotr-light',
  title: 'Whatman paper',
  subtitle: 'J.R.R. TOLKIEN WATERCOLORS · BODLEIAN LIBRARY COLLECTION · 1937–1955 · ARTS AND CRAFTS INFLUENCE',
  pitch: 'Tolkien painted Middle-earth himself, consistently and over decades. The Bodleian Library holds the definitive collection. His technique derived from the English Arts and Crafts watercolor tradition — Whatman hot-press paper (a specific warm cream, the standard fine-art paper of the period), iron-gall ink for outlines, and a palette of transparent washes. His Middle-earth was not Jackson\'s desaturated digital grade. It was Morris-era England seen through medieval illustration — specific warm greens, specific grey-blues, specific crimsons. Background is Whatman paper: the hot-press surface has a specific warm cream, slightly more yellow than cold-press, very smooth, with a faint sizing that gives it a slight sheen. Surface is the same paper in shadow — fractionally darker, the colour where a wash has pooled at the edge. Text is iron-gall ink: Tolkien\'s outlines and annotations were in iron-gall, which is not black — it is a very dark warm brown, slightly reddish in raking light. Primary is Misty Mountain grey-blue: the colour Tolkien returned to repeatedly in his mountain paintings — a specific muted blue-grey with enough blue to read as sky-adjacent but enough grey to read as stone. Secondary is Shire meadow green: the yellow-green of English summer meadow grass in June watercolor wash — not the saturated green of film, a softer, more golden green. Accent is the crimson of Tolkien\'s Mordor and Eye drawings — a dark, specific red, not orange, with enough blue in it to read as true crimson rather than vermilion.',
  fonts: fonts,
  variables: {
    background: '#F5F0E0',
    surface: '#ECE6D0',
    text: '#160E08',
    textMuted: '#60583C',
    primary: '#385878',
    primaryHover: '#203C60',
    secondary: '#5A7830',
    secondaryHover: '#3C581C',
    accent: '#882838',
    bgDisabled: '#DDD8C0',
    textDisabled: '#9A9478',
    success: '#486838',
    error: '#A02030',
    warning: '#A87820',
    info: '#5880A8',
    border: '#E0DAC4',
    borderStrong: '#B4AC90',
    overlay: '#160e0880',
  }
};

export const lotrDark: ITheme = {
  cssName: 'lotr-dark',
  title: 'Moria',
  subtitle: 'TOLKIEN INK DRAWINGS · MINES OF MORIA · MORDOR · 1937–1955',
  pitch: 'Tolkien\'s drawings of Moria and Mordor are among his darkest work — ink-heavy, with washes of grey and deep crimson, very little of the warmth of the Shire paintings. The Mines of Moria drawings use dense cross-hatching in iron-gall ink over a grey wash ground. The Mordor paintings use the same ink but with a specific crimson wash for the volcanic light — the only colour in an otherwise monochrome scene. Background is the Moria stone: the dark grey-black of Tolkien\'s cross-hatched ink over grey wash, a warm dark that retains the brownish undertone of iron-gall ink even at deep value. Surface is the slightly lighter stone of a corridor wall catching diffuse light from an unknown source. Text is the highlight white of Tolkien\'s gouache corrections: he used Chinese white gouache to add highlights and correct edges in his darkest drawings, producing a specific warm off-white. Primary is the grey-blue of the Misty Mountains seen from inside Moria — the same hue as the light palette but now pushed lighter to remain legible on dark stone, reading as a cold blue-grey. Secondary is Mordor crimson: the volcanic light that appears in his Mordor paintings, a specific dark red — not orange, not scarlet. Accent is the pale gold of the Dwarven inscription on the Gate, the only warm light in an otherwise cold scene.',
  fonts: fonts,
  variables: {
    background: '#0C0A08',
    surface: '#181410',
    text: '#EAE2CC',
    textMuted: '#908070',
    primary: '#6890B0',
    primaryHover: '#88B0D0',
    secondary: '#B03838',
    secondaryHover: '#D05048',
    accent: '#C0980C',
    bgDisabled: '#201C18',
    textDisabled: '#504840',
    success: '#486858',
    error: '#882020',
    warning: '#D0A828',
    info: '#507090',
    border: '#1C1812',
    borderStrong: '#383028',
    overlay: '#0c0a08d9',
  }
};
