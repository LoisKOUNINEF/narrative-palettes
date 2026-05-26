const fonts: IThemeFonts = {
  primary: {
    name: 'Shippori Antique',
    pitch: 'An antiqued Japanese serif with ink-spread warmth, matching the hanshi paper texture of this palette.',
  },
  secondary: {
    name: 'Dela Gothic One',
    pitch: 'A bold Japanese gothic with woodblock weight; its Latin character set has the same structural density as the Japanese.',
  },
}

export const washiLight: ITheme = {
  cssName: 'washi-light',
  title: 'Washi ',
  subtitle: 'From Japanese craft: the background is kozo paper ivory, the primary is iron-mordanted indigo (the deep blue of katazome fabric), the secondary is kakishibu persimmon lacquer.',
  pitch: '',
  fonts: fonts,
  variables: {
    background: '#F7F4EE',
    surface: '#EDE8DE',
    text: '#0E0C09',
    textMuted: '#5C5347',
    primary: '#1B3A5C',
    primaryHover: '#0E2444',
    secondary: '#C45228',
    secondaryHover: '#983814',
    accent: '#7A6E4A',
    bgDisabled: '#E3DDD3',
    textDisabled: '#A89F92',
    success: '#486848',
    error: '#A0301C',
    warning: '#A88020',
    info: '#4068A0',
    border: '#E0DCD2',
    borderStrong: '#B0A898',
    overlay: '#0e0c0980',
  }
};

export const washiDark: ITheme = {
  cssName: 'washi-dark',
  title: 'Negoro lacquer',
  subtitle: 'KURO-URUSHI LACQUERWARE · KAMAKURA PERIOD',
  pitch: 'Negoro-nuri lacquer is built in layers: black urushi base coated with vermilion, polished over decades until the red wears through in patterns of use. The background here is the deep black of fresh kuro-urushi — not a flat digital black but a black with warm undertone from the urushi resin. Surface is the slightly raised, slightly warmer black of aged lacquer where it has yellowed. Text is washi paper white — the same paper from the light palette, now inverted to become the light source. Primary is ai-indigo seen through lantern light — shifted to its brighter register, more periwinkle than navy. Secondary is beni-red, now luminous against the dark ground rather than absorbing into it. Accent is the pale gold of polished brass fittings on a lacquer box.',
  fonts: fonts,
  variables: {
    background: '#0E0B08',
    surface: '#1A1510',
    text: '#F5F1E8',
    textMuted: '#A89880',
    primary: '#7A9CD8',
    primaryHover: '#98B8E8',
    secondary: '#D85858',
    secondaryHover: '#F07870',
    accent: '#C8A040',
    bgDisabled: '#252018',
    textDisabled: '#5A5248',
    success: '#488060',
    error: '#A83030',
    warning: '#D8B048',
    info: '#6080B8',
    border: '#1C1610',
    borderStrong: '#383024',
    overlay: '#0e0b08d9',
  }
};
