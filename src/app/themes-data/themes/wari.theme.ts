const fonts: IThemeFonts = {
  primary: {
    name: 'Karma',
    pitch: 'A Devanagari-influenced serif that brings a non-European letter construction to a non-European palette, avoiding the colonial default.',
  },
  secondary: {
    name: 'Encode Sans Condensed',
    pitch: 'Compressed and geometric, evoking the structured geometry of Wari textile pattern without requiring an explicitly pre-Columbian display face.',
  },
}

export const wariLight: ITheme = {
  cssName: 'wari-light',
  title: 'Wari',
  subtitle: 'WARI TEXTILE CULTURE · AYACUCHO HIGHLANDS · PERU · 600–1000 CE',
  pitch: 'The Wari produced the most technically complex textiles in pre-Columbian history — discontinuous warp, interlocked weft, up to 120 threads per centimetre. Every colour here is an Andean dye source on camelid fibre. Background is undyed alpaca in its natural fawn tone — not beige, not tan, but the specific warm grey-brown of raw vicuña-adjacent fibre from the Ayacucho highlands. Surface is the slightly darker natural alpaca used for warp thread. Text is ch\'uqi dark — potato black, used as both mordant and pigment, a warm near-black. Primary is cochineal-on-alpaca: the crimson produced by Dactylopius coccus beetles on camelid fibre differs from the same dye on cotton — the protein fibre base shifts it toward a deeper, more violet-red. Secondary is añil indigo from the lowland Indigofera plant, greener and cooler than Japanese ai. Accent is chilca yellow — Baccharis latifolia, an Andean shrub dye giving a specific warm saffron-gold.',
  fonts: fonts,
  variables: {
    background: '#F0E8D8',
    surface: '#E4D8C4',
    text: '#120C06',
    textMuted: '#5C4C38',
    primary: '#8C2838',
    primaryHover: '#681424',
    secondary: '#2A4870',
    secondaryHover: '#183058',
    accent: '#A87C10',
    bgDisabled: '#D4C8B4',
    textDisabled: '#9A8E7C',
    success: '#486838',
    error: '#A82820',
    warning: '#B88C10',
    info: '#406898',
    border: '#DCD0C0',
    borderStrong: '#A89880',
    overlay: '#120c0680',
  }
};

export const wariDark: ITheme = {
  cssName: 'wari-dark',
  title: 'Wari tomb',
  subtitle: 'WARI BURIAL TEXTILES · HIGHLAND TOMB · CANDLELIGHT',
  pitch: 'Wari elite burials wrapped the deceased in multiple layers of their finest textiles — the same discontinuous-warp tunics, folded and placed in underground stone-lined chambers. The only light that ever entered these chambers was human-carried fire. In that context the cochineal crimson deepens and reddens, losing its violet undertone and becoming a pure blood-red. The añil indigo recedes almost to black — indigo absorbs red light and in firelight there is almost no blue to reflect, so it reads as the darkest tone in the chamber. The chilca yellow brightens to the specific amber of tallow fire itself. Background is the compressed darkness of packed highland earth — a very dark, slightly reddish-brown black, the colour of Andean soil at depth. Surface is the stone lining of the tomb chamber — fractionally cooler, fractionally lighter, volcanic granite.',
  fonts: fonts,
  variables: {
    background: '#0E0906',
    surface: '#1A1210',
    text: '#F0E4D0',
    textMuted: '#A08868',
    primary: '#C44848',
    primaryHover: '#E06058',
    secondary: '#4870A8',
    secondaryHover: '#6090C0',
    accent: '#C89A28',
    bgDisabled: '#221810',
    textDisabled: '#504030',
    success: '#486030',
    error: '#982820',
    warning: '#D8A830',
    info: '#486898',
    border: '#1C120C',
    borderStrong: '#382C24',
    overlay: '#0e0906d9',
  }
};
