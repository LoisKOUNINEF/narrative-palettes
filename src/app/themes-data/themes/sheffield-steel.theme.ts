const fonts: IThemeFonts = {
  primary: {
    name: 'Source Sans 3',
    pitch: 'Clean, functional, designed for technical documentation; the typeface of an engineering specification rather than a poem.',
  },
  secondary: {
    name: 'Barlow Condensed',
    pitch: 'A condensed grotesque with industrial heritage; its proportions derive from California highway signage but sit equally well against Sheffield factory stencils.',
  },
}

export const sheffieldSteelLight: ITheme = {
  cssName: 'sheffield-steel-light',
  title: 'Sheffield steel',
  subtitle: 'BESSEMER CONVERTER · SHEFFIELD · 1880–1910',
  pitch: 'Every token is a colour produced by the Bessemer steelmaking process or its environment. Background is limestone dust — the grinding workshops of Sheffield produced it constantly, coating every surface in a specific cool-warm pale grey. Surface is the slightly darker grey of dressed limestone block, the building material of every Sheffield factory. Text is forge-black: iron before it enters the converter, cold and absolute. Primary is tempered-steel blue — the specific gunmetal blue that appears on steel cooled to exactly 300°C, produced by a thin iron oxide layer of precise thickness. Secondary is converter-fire orange: the colour of the spark shower when the Bessemer blow reaches its peak. Accent is ignition yellow — the core of a spark at the moment of combustion, a brief saturated yellow before it cools to orange. Disabled states use the grey of slag — the calcium silicate waste skimmed off the converter mouth.',
  fonts: fonts,
  variables: {
    background: '#F2F0EC',
    surface: '#E4E0DA',
    text: '#100E0C',
    textMuted: '#5A5650',
    primary: '#2E4A6A',
    primaryHover: '#1C3454',
    secondary: '#B85C18',
    secondaryHover: '#94400C',
    accent: '#C4960C',
    bgDisabled: '#D8D4CE',
    textDisabled: '#9A9690',
    success: '#486850',
    error: '#98301C',
    warning: '#B88810',
    info: '#487098',
    border: '#DEDAD4',
    borderStrong: '#ACA8A0',
    overlay: '#100e0c80',
  }
};

export const sheffieldSteelDark: ITheme = {
  cssName: 'sheffield-steel-dark',
  title: 'Bessemer blow',
  subtitle: 'BESSEMER CONVERTER INTERIOR · SHEFFIELD · 1880–1910',
  pitch: 'The inside of the converter during the blow: a pear-shaped iron vessel rotating on its axis, interior walls glowing orange-white, the air blast turning molten iron to incandescent plasma for eighteen minutes. Workers watched from behind iron screens. Background is the cold exterior of the converter shell — fire-scaled iron, a dark warm-black with the brownish tinge of iron oxide. Surface is the refractory lining brick, seen in shadow — slightly lighter, brick-dark. Text is the pale blue-white of the hottest part of the spark shower, the colour that appears at the very tip of the burn before orange takes over. Muted text is the cooler grey-white of spent sparks drifting down. Primary is tempered blue on dark: the same oxide-layer blue as the light palette, now luminous against iron-black. Secondary rises to a full converter-fire orange. Accent is the yellow of the ignition core at maximum intensity.',
  fonts: fonts,
  variables: {
    background: '#100C08',
    surface: '#1C1610',
    text: '#EEE8DC',
    textMuted: '#908880',
    primary: '#5888C0',
    primaryHover: '#78A8D8',
    secondary: '#E07828',
    secondaryHover: '#F09848',
    accent: '#D4A818',
    bgDisabled: '#221C16',
    textDisabled: '#504840',
    success: '#407060',
    error: '#A03820',
    warning: '#E0B828',
    info: '#7898B8',
    border: '#201A12',
    borderStrong: '#3C3024',
    overlay: '#100c08d9',
  }
};
