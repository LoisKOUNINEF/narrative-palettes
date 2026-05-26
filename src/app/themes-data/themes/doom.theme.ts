const fonts: IThemeFonts = {
  primary: {
    name: 'Overpass Mono',
    pitch: 'Slightly more refined than Share Tech, readable at body size while keeping the terminal feeling intact. (Alternative: Inter)',
  },
  secondary: {
    name: 'Share Tech Mono',
    pitch: 'Monospaced, utilitarian, the exact register of the Doom status bar and MUTHR readout.(Alternative: IBM Plex Sans Condensed)',
  },
}

export const doomLight: ITheme = {
  cssName: 'doom-light',
  title: 'E1M1',
  subtitle: 'ID SOFTWARE DOOM (1993) · ADRIAN CARMACK · DOOM.WAD FIXED 256-COLOR PALETTE · EPISODE 1 · CORRECTED',
  pitch: 'The Doom color palette is a fixed 256-entry lookup table designed by Adrian Carmack. Background is UAC corridor texture grey: the brownish mid-grey forming the visual ground for roughly 60% of the game\'s visible surface. Text is the near-black of door frames and shadow geometry — the darkest usable entries in the palette retain faint warmth from non-zero red and green channels. Primary is blood red: the orange-red of Doom\'s damage tint and demon splatter. Secondary is toxic green: the desaturated olive-sickly green of the waste barrels, the Cacodemon, and the radiation suit pickup — one of the most persistent hues in the episode 1 environment. Accent is plasma blue: the specific electric blue of the plasma rifle bolt, one of the most saturated entries in the entire 256-color table. The BFG9000 fires a large slow green projectile matching the toxic green of the secondary — not orange as previously stated. The plasma bolt blue and the waste-barrel green together form the authentic weapon-effects chromatic signature of the game.',
  fonts: fonts,
  variables: {
    background: '#EAE6DE',
    surface: '#DEDAD0',
    text: '#141008',
    textMuted: '#585248',
    primary: '#A02818',
    primaryHover: '#70180C',
    secondary: '#5A6830',
    secondaryHover: '#404C1C',
    accent: '#1858A0',
    bgDisabled: '#CEC8C0',
    textDisabled: '#909088',
    success: '#486828',
    error: '#C02010',
    warning: '#987020',
    info: '#3060A0',
    border: '#D0CCC4',
    borderStrong: '// #A09A90',
    overlay: '#14100880',
  }
};

export const doomDark: ITheme = {
  cssName: 'doom-dark',
  title: 'Phobos anomaly',
  subtitle: 'ID SOFTWARE DOOM (1993) · E1M8 · PHOBOS ANOMALY · PRE-HELL LIGHTING · DARKEST EPISODE 1 LEVEL · CORRECTED',
  pitch: 'E1M8, the Phobos Anomaly, is the darkest UAC environment in the game. Sector lighting drops to near-minimum; the player faces the Baron of Hell for the first time in a room lit only by the red exit teleporter. Background is minimum-lighting UAC wall texture: grey-brown at sector light level 0–32, resolving in Doom\'s palette to a very dark warm grey — never true black, the palette\'s darkest entries retaining faint warmth. Text is the wall texture at mid-distance light level, the grey-brown you can just read across the room. Primary is exit portal red: the orange-red of the teleporter glow, the dominant light source in the final room. Secondary is BFG green at minimum light: the olive-sickly green of the waste and the BFG projectile, now darker and more muted under minimal sector lighting but still the most persistent cool hue in the room. Accent is plasma blue in darkness: the electric blue of the plasma bolt unchanged — it is one of the few maximally bright entries in the 256-color table and retains full saturation regardless of sector light level, making it the most luminous element in E1M8.',
  fonts: fonts,
  variables: {
    background: '#0E0C08',
    surface: '#181410',
    text: '#C8C0A8',
    textMuted: '#787060',
    primary: '#C83818',
    primaryHover: '#E05830',
    secondary: '#607838',
    secondaryHover: '#789848',
    accent: '#2878C8',
    bgDisabled: '#201C14',
    textDisabled: '#484038',
    success: '#609038',
    error: '#982010',
    warning: '#A87828',
    info: '#2878C8',
    border: '#201C14',
    borderStrong: '#383028',
    overlay: '#0e0c08d9',
  }
};
