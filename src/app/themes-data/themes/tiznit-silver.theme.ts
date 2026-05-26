const fonts: IThemeFonts = {
  primary: {
    name: 'Lateef',
    pitch: 'A Nastaliq-influenced serif for body text, appropriate to the North African cultural register.',
  },
  secondary: {
    name: 'Aref Ruqaa Ink',
    pitch: 'A Ruqaa-style Arabic script typeface whose Latin companion has the calligraphic warmth of the Amazigh-Arabic cultural intersection.',
  },
}

export const tiznitSilverLight: ITheme = {
  cssName: 'tiznit-silver-light',
  title: 'Tiznit silver',
  subtitle: 'AMAZIGH TIZERZAI JEWELRY · ANTI-ATLAS MOUNTAINS · IZEGGAGHEN SILVERSMITHS · 18TH–19TH CENTURY',
  pitch: 'The izeggaghen — Jewish Berber silversmiths of the Anti-Atlas — produced the most technically refined jewelry in the Amazigh world. Tizerzai fibula brooches and tasfift headdress pieces combine oxidized sterling silver with inlaid coral, amazonite, amber, and enamel. Every token here maps to a material in those pieces. Background is haik linen — the undyed white-cotton or linen outer garment worn by Amazigh women, against which the silver jewelry is displayed. It is a specific warm off-white, woven with a visible texture. Surface is the slightly more ivory inner layer — the same fabric but not exposed to light. Text is oxidized silver: sterling deliberately patinated to near-black using liver of sulfur, creating a dark ground against which the inlays read clearly. Primary is Mediterranean coral — Corallium rubrum from the Moroccan coast, an orange-red with more warmth than western coral, used as the primary inlay stone in tizerzai work. Secondary is Saharan amazonite: green microcline feldspar from the Hoggar massif, a specific muted blue-green, more grey-green than the gemstone amazonite of other traditions. Accent is copal amber — Saharan subfossil resin, warmer and more orange than Baltic amber, used for large focal beads.',
  fonts: fonts,
  variables: {
    background: '#F5F0E4',
    surface: '#EDE6D4',
    text: '#141010',
    textMuted: '#504844',
    primary: '#B84020',
    primaryHover: '#902810',
    secondary: '#3A6858',
    secondaryHover: '#244C3C',
    accent: '#B07820',
    bgDisabled: '#DDD8C8',
    textDisabled: '#9A9488',
    success: '#487848',
    error: '#982814',
    warning: '#B88818',
    info: '#387080',
    border: '#E0DACC',
    borderStrong: '#ACA290',
    overlay: '#14101080',
  }
};

export const tiznitSilverDark: ITheme = {
  cssName: 'tiznit-silver-dark',
  title: 'Tent lamp',
  subtitle: 'AMAZIGH TENT INTERIOR · ANTI-ATLAS · SINGLE OIL LAMP · NIGHT',
  pitch: 'In the tent interior after dark, the jewelry is laid out or worn against dark-dyed wool — the tent walls are woven dark goat hair, close to black. The single oil lamp (a shallow clay dish of argan oil with a wick of twisted plant fiber) emits a very warm, very low light — perhaps 1700K. In that environment the oxidized silver, already near-black, becomes the darkest element. The coral advances and warms toward orange-red, the most luminous object in the tent. The amazonite retreats — the lamp emits almost no blue-green wavelengths, so it reads as a dark grey-green. The amber becomes incandescent, as close to the lamp flame in colour as a solid material can be. Background is dark goat-hair wool — a very dark, slightly warm brown-black with coarse fibre texture. Surface is the worn kilim on the ground — dark red-brown from natural madder dye, faded by use.',
  fonts: fonts,
  variables: {
    background: '#0C0806',
    surface: '#1A1008',
    text: '#EEE0C8',
    textMuted: '#9A8868',
    primary: '#D06030',
    primaryHover: '#E88048',
    secondary: '#488068',
    secondaryHover: '#609880',
    accent: '#C89428',
    bgDisabled: '#201612',
    textDisabled: '#504038',
    success: '#386048',
    error: '#983018',
    warning: '#D8A030',
    info: '#386070',
    border: '#18100C',
    borderStrong: '#382418',
    overlay: '#0c0806d9',
  }
};
