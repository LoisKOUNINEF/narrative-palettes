const fonts: IThemeFonts = {
  primary: {
    name: 'Spectral',
    pitch: 'A text face with enough optical variation to suggest hand-press printing without going archaic.',
  },
  secondary: {
    name: 'Cormorant Garamond',
    pitch: 'The most refined free serif available, with hairline strokes that recall the thinness of pulled glass; it exists in the same luxury register as Venini\'s showroom.',
  },
}

export const muranoLight: ITheme = {
  cssName: 'murano-light',
  title: 'Murano',
  subtitle: 'VENINI GLASSWORKS · MURANO · 1950–1965',
  pitch: 'Sourced from three specific Venini techniques. Background and surface are lattimo — milk glass, made with tin oxide, which gives a white that is slightly warm and totally opaque, never sterile. Primary is sommerso teal, the deep cased glass where colour is trapped beneath clear crystal — saturated but not electric. Secondary is murrine amber, the colour of cross-sectioned glass canes fused into mosaic. Accent is acquamarina, the particular blue-green of Murano incalmo joins. Every hue is a specific glass formula, not a generic colour.',
  fonts: fonts,
  variables: {
    background: '#F6F4F0',
    surface: '#EBE7E0',
    text: '#0E0C0A',
    textMuted: '#4E4840',
    primary: '#1A5C58',
    primaryHover: '#0E403C',
    secondary: '#A05C10',
    secondaryHover: '#784008',
    accent: '#2A7C8C',
    bgDisabled: '#DDD9D2',
    textDisabled: '#9E9A92',
    success: '#488868',
    error: '#B03830',
    warning: '#B08020',
    info: '#3890A0',
    border: '#DCD8D0',
    borderStrong: '#ACA69C',
    overlay: '#0e0c0a80',
  }
};

export const muranoDark: ITheme = {
  cssName: 'murano-dark',
  title: 'Murano fornace',
  subtitle: 'GLASSBLOWING FURNACE INTERIOR · MURANO ISLAND · NIGHT',
  pitch: 'The Venini showroom is the reference for the light palette — lattimo glass in afternoon sun, pieces arranged on white shelves. The dark twin shifts to the fornace at night, where the furnaces burn at 1400°C continuously and the room is lit by nothing else. Background is fornace black: the soot-darkened interior of the workshop, a warm dark with brownish undertone from decades of carbon deposit on the stone walls — nothing like a cold digital black. Surface is the basalt banco, the volcanic stone workbench on which hot pieces are rolled and shaped, its surface darkened by radiant heat but slightly lighter than the wall behind it. Text is lattimo seen in furnace light: the tin-oxide white of milk glass picks up the warm orange of the heat source, never achieving the cool white of daylight. The muted tone is the same lattimo seen from across the room, further from the glow, grayer and quieter. Primary is sommerso teal backlit by the furnace — the copper-oxide cased glass when a gather is held up to the mouth for inspection, the deep teal now lit from within and pushed toward a brighter, more saturated state. It is not neon; it is the specific glow of a material at working temperature. Secondary is murrine amber at full heat: the color of a molten glass cane cross-section before it cools, more orange than the finished amber piece in daylight. Accent is acquamarina at the incalmo join — the blue-green seam where two glass bodies are fused, seen against the furnace light. Disabled states use cooled cullet grey: the pile of broken and rejected glass kept beside the furnace for remelting, all warmth spent.',
  fonts: fonts,
  variables: {
    background: '#0C0906',
    surface: '#181210',
    text: '#F0E8D8',
    textMuted: '#A09078',
    primary: '#38B8A0',
    primaryHover: '#50D8C0',
    secondary: '#D4882A',
    secondaryHover: '#E8A448',
    accent: '#48B8CC',
    bgDisabled: '#201A18',
    textDisabled: '#504844',
    success: '#309070',
    error: '#B04028',
    warning: '#C89038',
    info: '#38A0B8',
    border: '#1C1612',
    borderStrong: '#382C24',
    overlay: '#0c0906d9',
  }
};
