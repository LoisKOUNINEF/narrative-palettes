const fonts: IThemeFonts = {
  primary: {
    name: 'Cardo',
    pitch: 'The classical scholarship standard; its slightly archaic capitalis proportions recall the painted letter conventions of the Parthenon inscription tradition.',
  },
  secondary: {
    name: 'Cinzel',
    pitch: 'Roman lapidary capitals, the letterform cut into marble in the same tradition as the Trajan column; the non-decorative version for this more austere palette.',
  },
}

export const pompeianLight: ITheme = {
  cssName: 'pompeian-light',
  title: 'Pompeian',
  subtitle: 'VILLA OF THE MYSTERIES · POMPEII · C. 60 BCE · STYLE II FRESCO',
  pitch: 'A strictly mineralogical palette — every token is a pigment that existed in the ancient world and was documented in Pompeian wall painting. Background is arriccio: the rough sand-lime underplaster, warm and slightly gritty, never white. Surface is the intonaco finish coat, smoother and fractionally lighter. Primary is sinopia — iron oxide red, the dominant pigment of the Style II wall fields, the most expensive colour in Roman decorative painting. Secondary is caeruleum, Egyptian blue: the first synthetic pigment in history, made by fusing copper ore with sand and natron at 950°C. Accent is ocra, yellow ochre — iron hydroxide, used for borders and architectural trompe-l\'œil. Text is atramentum, bone black. Disabled states use the grey of aged lime wash.',
  fonts: fonts,
  variables: {
    background: '#F0EAD8',
    surface: '#E5DCCA',
    text: '#120D06',
    textMuted: '#5A4830',
    primary: '#8C2818',
    primaryHover: '#68160A',
    secondary: '#1E4870',
    secondaryHover: '#103058',
    accent: '#8C6400',
    bgDisabled: '#D8D0BC',
    textDisabled: '#9A9080',
    success: '#386040',
    error: '#A82814',
    warning: '#A07808',
    info: '#3870A8',
    border: '#DCD4C0',
    borderStrong: '#ACA088',
    overlay: '#120d0680',
  }
};

export const pompeianDark: ITheme = {
  cssName: 'pompeian-dark',
  title: 'Fondo nero',
  subtitle: 'BLACK-GROUND FRESCO · VILLA OF BOSCOREALE · C. 40 BCE',
  pitch: 'Several Pompeian rooms used fondo nero — the plaster was carbonized with burnt organic matter before pigments were applied, producing a black ground into which colors were worked while still wet. The Boscoreale villa (now in the Met and Naples) shows the technique at its finest: architectural illusions in sinopia and caeruleum float against absolute black, more hallucinatory than the red-ground tradition. Background is carbonized arriccio: bone-black mixed with lime, a warm dark that reads differently from a cold black. Surface is the intonaco finish over the black ground — fractionally warmer, fractionally lighter, the black still reading through. Sinopia red becomes a high-value terracotta, almost salmon, glowing against soot. Caeruleum blue rises to a clear sky blue, the color of daytime sky glimpsed through a painted oculus. Ocra accent brightens to pale gold.',
  fonts: fonts,
  variables: {
    background: '#100C08',
    surface: '#1C1610',
    text: '#EDE5D4',
    textMuted: '#A09070',
    primary: '#D87050',
    primaryHover: '#E89070',
    secondary: '#5898CC',
    secondaryHover: '#78B8E0',
    accent: '#C8A830',
    bgDisabled: '#261E16',
    textDisabled: '#524438',
    success: '#487040',
    error: '#A03820',
    warning: '#D8B840',
    info: '#4878A8',
    border: '#201A12',
    borderStrong: '#403428',
    overlay: '#100c08d9',
  }
};
