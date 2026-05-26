const fonts: IThemeFonts = {
  primary: {
    name: 'Courier Prime',
    pitch: 'The refined Courier variant, the typeface of every IBM printer in this period.'
  },
  secondary: {
    name: 'Nimbus Sans',
    pitch: 'The specific proportions of IBM\'s own corporate sans, condensed and serious without being cold.'
  },
};

export const eightiesLight: ITheme = {
  cssName: '80s-light',
  title: 'IBM 1983',
  subtitle: 'US CORPORATE GRAPHIC DESIGN · COMMUNICATION ARTS ANNUAL · 1981–1985 · EARLY PC ERA',
  pitch: 'The actual visual culture of the early 1980s bears almost no resemblance to the retrowave fantasy. The dominant aesthetic of 1981–1985 in American professional design was derived from the IBM corporate identity, the newly introduced Macintosh warm grey, and the interior design language of corporate office lobbies — all of which shared a palette of warm greys, slate blues, and a specific muted mauve-rose. Background is Apple IIe chassis white: the specific off-white of early personal computer hardware, a warm grey-white that was never pure. Apple\'s hardware team called it \'warm grey 1\' internally. Surface is the IBM PC beige: fractionally warmer, the specific colour of the IBM 5150 chassis that defined \'computer colour\' for a decade. Text is CRT bezel dark: the near-black of monitor and terminal housings, a warm dark grey rather than pure black. Primary is IBM slate blue: the specific blue of IBM\'s print identity in this period, darker and more muted than the later \'Big Blue\' — a blue with enough grey in it to read as serious rather than corporate-bright. Secondary is the mauve-rose of early 80s interior design: the colour of office lobby carpets, hotel conference rooms, and magazine advertising backgrounds from 1982–1986 — a muted rose-brown, categorically different from the neon pink of the later decade. Accent is warm amber: the colour of the early Compaq portable\'s amber phosphor screen, used as a secondary display standard before colour monitors became affordable.',
  fonts: fonts,
  variables: {
    background: '#EEEAE2',
    surface: '#E4E0D8',
    text: '#141210',
    textMuted: '#585450',
    primary: '#2E4870',
    primaryHover: '#1E3050',
    secondary: '#7A4858',
    secondaryHover: '#5E3040',
    accent: '#907020',
    bgDisabled: '#D4D0C8',
    textDisabled: '#989490',
    success: '#486448',
    error: '#8C3C2C',
    warning: '#785A10',
    info: '#4A6890',
    border: '#D0CCC4',
    borderStrong: '#A8A4A0',
    overlay: '#14121080',
  }
};

export const eightiesDark: ITheme = {
  cssName: '80s-dark',
  title: 'Terminal night',
  subtitle: 'CORPORATE OFFICE · IBM TERMINAL · WORKING LATE · 1982–1984',
  pitch: 'The office at night in 1982 meant one thing visually: a green or amber phosphor terminal glowing in a dark room, its light the only illumination. The IBM 3279 colour terminal and the Compaq Portable defined this aesthetic — not through intentional art direction but through the practical reality of working after hours. Background is the darkened office: warm grey walls and carpet gone to near-black, the specific dark of a room with fluorescent overhead lights switched off but a desk lamp on — a very dark warm grey. Surface is the desk surface itself: darker, the matte plastic of the terminal surround. Text is the primary phosphor: on the IBM 3279 the default text colour was a specific green — not the acid green of later gaming monitors, but the original P31 phosphor green with slightly more warmth, slightly less saturation. Muted text is the same phosphor at lower intensity, the colour of background fields and inactive labels. Primary is the IBM slate blue at display brightness: the blue used for highlighted text and borders on colour terminals, slightly more electric than the print blue but still muted by phosphor warmth. Secondary is the Compaq amber — the P1 phosphor used for warning states and secondary information, a warm amber that is unmistakably analogue.',
  fonts: fonts,
  variables: {
    background: '#0E0C0A',
    surface: '#181614',
    text: '#90C878',
    textMuted: '#507848',
    primary: '#4870B0',
    primaryHover: '#6090D0',
    secondary: '#C09030',
    secondaryHover: '#D8A840',
    accent: '#C08828',
    bgDisabled: '#201E1C',
    textDisabled: '#384830',
    success: '#A0D888',
    error: '#B04840',
    warning: '#C8A048',
    info: '#4888A8',
    border: '#282420',
    borderStrong: '#405838',
    overlay: '#0e0c0ad9',
  }
};
