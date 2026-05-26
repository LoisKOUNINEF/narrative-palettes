const fonts: IThemeFonts = {
  primary: {
    name: 'Source Serif 4',
    pitch: 'Optical sizes, warm and slightly wide, matching the coated-stock reading rhythm.',
  },
  secondary: {
    name: 'Playfair Display',
    pitch: 'The high-contrast serif that Emigre\'s art direction flirted with as it moved away from experimental type toward editorial authority.',
  },
}

export const ninetiesLight: ITheme = {
  cssName: '90s-light',
  title: 'Emigre 1994',
  subtitle: 'US PRINT AND BROADCAST DESIGN · EMIGRE MAGAZINE · IKEA CATALOG · CNN · 1993–1997',
  pitch: 'The dominant visual culture of the mid-1990s in American professional design is not the one retroactively celebrated. The neon geometrics belong to 1988–1991. By 1993 the leading edge — Emigre magazine, the IKEA catalog, CNN\'s broadcast graphics — had shifted to something far more restrained and more interesting: warm coated paper stock, muted teals, dusty rose-terracottas, and the specific warm grey of Scandinavian-influenced concrete interiors. Background is IKEA catalog coated stock: the specific warm off-white of the 1994–1996 editions — coated but never glossy, with a faint warmth from the paper\'s optical brighteners aging out. Surface is the same stock in shadow, where it reads as a true warm grey-white. Text is the near-black of offset printing on uncoated paper — not a digital black, a very dark warm brown produced by process-black ink absorbing into uncoated fiber. Primary is CNN lower-third teal: the specific dusty, desaturated teal used in CNN\'s broadcast identity from 1992–1997 — enough grey in it to read as serious, enough blue-green to read as modern. Secondary is IKEA rose-terracotta: the muted brick-rose used in the Solsta sofa era and the residential design pages — not pink, not orange, a specific warm muted rose-brown. Accent is Emigre ochre: the warm yellow-ochre used as the accent colour in Emigre\'s own graphic layouts in this period.',
  fonts: fonts,
  variables: {
    background: '#F2EEE6',
    surface: '#E8E4DA',
    text: '#141210',
    textMuted: '#585450',
    primary: '#2E6870',
    primaryHover: '#1C4850',
    secondary: '#8C4840',
    secondaryHover: '#683028',
    accent: '#907830',
    bgDisabled: '#D8D4CA',
    textDisabled: '#989490',
    success: '#407048',
    error: '#783024',
    warning: '#886818',
    info: '#386880',
    border: '#D8D4CC',
    borderStrong: '#A8A49C',
    overlay: '#14121080',
  }
};

export const ninetiesDark: ITheme = {
  cssName: '90s-dark',
  title: 'Broadcast dark',
  subtitle: 'CNN BROADCAST CONTROL ROOM · MONITOR GLOW · 11PM · 1995',
  pitch: 'The broadcast control room at 11pm in 1995 was a specific visual environment: banks of Sony Trinitron monitors in a dark room, their white points slightly cooler than daylight, the lower-third graphics running continuously. The room itself was near-dark — only the screens lit the operators\' faces. Background is the control room at night: near-black with the fractional cool undertone of a room lit only by monitors — not warm like a lamp-lit room, slightly blue-grey from the collective monitor white-point. Surface is the console fascia: a dark grey, the colour of broadcast equipment panels in this era. Text is the monitor white: the specific white-point of a Sony Trinitron PVM monitor — slightly cooler than print white, slightly warmer than a cold LCD, a warm-cool off-white. Primary is the CNN teal on screen: the dusty lower-third teal seen on a CRT at broadcast luminance — slightly more saturated than in print, slightly more electric. Secondary rises to the terracotta-rose as a warm accent against the cool dark — the colour of a \'breaking news\' chyron background.',
  fonts: fonts,
  variables: {
    background: '#0A0C10',
    surface: '#141820',
    text: '#E8E4DC',
    textMuted: '#8890A0',
    primary: '#389098',
    primaryHover: '#48B0B8',
    secondary: '#B06058',
    secondaryHover: '#D0786C',
    accent: '#B09838',
    bgDisabled: '#181C24',
    textDisabled: '#404850',
    success: '#48A078',
    error: '#C84840',
    warning: '#C0A848',
    info: '#4870A8',
    border: '#1C202C',
    borderStrong: '#404858',
    overlay: '#0a0c10d9',
  }
};
