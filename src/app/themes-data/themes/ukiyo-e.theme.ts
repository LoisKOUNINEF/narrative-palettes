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

export const ukiyoELight: ITheme = {
  cssName: 'ukiyo-e-light',
  title: 'Ukiyo-e',
  subtitle: 'EDO WOODBLOCK PRINT · 1780–1870',
  pitch: 'Every token maps to a real pigment used in Japanese woodblock printing. Background is hanshi paper — a specific warm off-white, never pure. Primary is ai, the indigo extracted from Japanese indigo plant, mordanted to this exact blue-violet. Secondary is beni, safflower red used for flesh tones and kimono. Accent is gamboge resin, the yellow used in limited-edition prints. Text is sumi carbon black ground in water. The palette can only exist as this combination — swap one and the historical anchor breaks.',
  fonts: fonts,
  variables: {
    background: '#F5F1E8',
    surface: '#EBE5D8',
    text: '#0C0A07',
    textMuted: '#54483A',
    primary: '#1F3A6E',
    primaryHover: '#102458',
    secondary: '#B83040',
    secondaryHover: '#901828',
    accent: '#C47C00',
    bgDisabled: '#DDD8CE',
    textDisabled: '#9E9488',
    success: '#386040',
    error: '#C82030',
    warning: '#C08808',
    info: '#3870B0',
    border: '#E0DACE',
    borderStrong: '#ACA494',
    overlay: '#0c0a0780',
  }
};

export const ukiyoEDark: ITheme = {
  cssName: 'ukiyo-e-dark',
  title: 'Yozakura',
  subtitle: 'HIROSHIGE NIGHT-SCENE WOODBLOCK · 1830–1858',
  pitch: 'Hiroshige\'s \'One Hundred Famous Views of Edo\' includes a series of yozakura — night cherry blossom scenes — where the sky is printed in dense aigata blue-black, and the blossoms read as white marks against darkness, reversing the usual figure-ground of woodblock. Background is aigata: the concentrated indigo wash used to print night skies, a blue so dense it reads almost black but carries the memory of the dye. Surface is the slightly lighter tone of a second aigata pass. Text is bleached kozo paper white. Primary is beni-red at high value — the color of paper lanterns against night. Secondary is the gold of moonlight on water, a gamboge-brass. Accent is the pale aqua of reflected city light on the Sumida river.',
  fonts: fonts,
  variables: {
    background: '#090C12',
    surface: '#111820',
    text: '#F2EEE4',
    textMuted: '#8A9AAC',
    primary: '#E06060',
    primaryHover: '#F08078',
    secondary: '#C8A030',
    secondaryHover: '#E0B848',
    accent: '#5AAABB',
    bgDisabled: '#1A2230',
    textDisabled: '#404C5C',
    success: '#407850',
    error: '#B02838',
    warning: '#D8B038',
    info: '#50A8C0',
    border: '#101622',
    borderStrong: '#243040',
    overlay: '#090c12d9',
  }
};
