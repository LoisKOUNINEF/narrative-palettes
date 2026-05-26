const fonts: IThemeFonts = {
  primary: {
    name: 'Nunito',
    pitch: 'Rounded, slightly warm, the right register for a universe that is worn and human despite its technology; it avoids the cold precision that would suit a different science fiction.',
  },
  secondary: {
    name: 'Orbitron',
    pitch: 'The geometric sci-fi sans that McQuarrie\'s own lettering referenced; use only at display size.',
  },
}

export const starWarsLight: ITheme = {
  cssName: 'star-wars-light',
  title: 'McQuarrie',
  subtitle: 'RALPH MCQUARRIE PRE-PRODUCTION PAINTINGS · STAR WARS ORIGINAL TRILOGY · 1975–1983',
  pitch: 'Ralph McQuarrie\'s pre-production paintings for Star Wars are among the most consequential works of visual development in cinema history — they preceded every set, costume, and creature design, and George Lucas used them to secure studio financing before a single frame was shot. McQuarrie\'s palette was not the film\'s color grade. It was a practical painter\'s palette applied to science fiction: warm Tatooine amber-ochre (the twin-sunset sand he painted as rich and golden, not bleached), the specific warm grey-green of the Millennium Falcon and rebel base interiors (a colour he shared with Ron Cobb, both working in the \'used future\' register), the blue-white of the lightsaber (which McQuarrie specified — a slight warm white rather than pure cyan), and the deep space near-black with a fractional blue that kept it from reading as a simple dark. Background is McQuarrie\'s Tatooine horizon: the warm amber-ochre of the sand at the painting\'s lower registers, where it is most saturated. Surface is the slightly cooler sand in foreground shadow. Text is the dark of the Death Star interior in his paintings — a near-black with the fractional grey of brushed metal. Primary is lightsaber blue-white at mid-register: the blue-white McQuarrie specified for Luke\'s saber — not cyan, a very slightly warm white-blue. Secondary is Falcon interior grey-green: the muted grey-green of the cockpit and corridors. Accent is Death Star trench glow: the orange-red of the exhaust port scene in McQuarrie\'s famous trench painting.',
  fonts: fonts,
  variables: {
    background: '#F0E8D4',
    surface: '#E4DACC',
    text: '#100C08',
    textMuted: '#5C5448',
    primary: '#2A5888',
    primaryHover: '#184070',
    secondary: '#4A6858',
    secondaryHover: '#304C3C',
    accent: '#B05820',
    bgDisabled: '#D4CCC0',
    textDisabled: '#9A9288',
    success: '#507840',
    error: '#90301C',
    warning: '#C07018',
    info: '#4880B8',
    border: '#DCD4C4',
    borderStrong: '#ACA090',
    overlay: '#100c0880',
  }
};

export const starWarsDark: ITheme = {
  cssName: 'star-wars-dark',
  title: 'Throne room',
  subtitle: 'EMPEROR\'S THRONE ROOM · RETURN OF THE JEDI · 1983',
  pitch: 'The Emperor\'s throne room in Return of the Jedi is one of the most precisely art-directed dark environments in the original trilogy. McQuarrie\'s paintings for this scene used near-absolute black for the walls and floor, with the only light sources being the circular window overlooking the Death Star battle (a cold blue-white) and the Force lightning (an electric blue-white). The Imperial Guard robes provided the only warm colour — a specific dark Venetian red, not orange-red, a red with enough blue to read as crimson in shadow. Background is the throne room floor: near-black with a fractional cool undertone from the reflected window light. Surface is the brushed-metal wall panel — slightly lighter, the dark grey of Imperial construction aesthetic. Text is the window light: the specific cold blue-white of the battle seen from the throne room, the only significant light source. Primary is Force lightning blue: the electric blue-white of Palpatine\'s attack — McQuarrie painted it in his concept work as a cold, high-energy blue, distinct from the warmer lightsaber colour. Secondary is Imperial Guard crimson: the Venetian red of the robes, a dark red with enough blue to read as more crimson than scarlet. Accent is lightsaber green — Luke\'s saber, the only warm light source in the final confrontation.',
  fonts: fonts,
  variables: {
    background: '#080A10',
    surface: '#10141C',
    text: '#D8E4F0',
    textMuted: '#7888A8',
    primary: '#5890D0',
    primaryHover: '#80B8E8',
    secondary: '#A02838',
    secondaryHover: '#C04050',
    accent: '#58A840',
    bgDisabled: '#141820',
    textDisabled: '#384050',
    success: '#388078',
    error: '#781828',
    warning: '#70C850',
    info: '#5070A0',
    border: '#101420',
    borderStrong: '#283040',
    overlay: '#080a10d9',
  }
};
