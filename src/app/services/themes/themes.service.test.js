import { ThemesService } from '#root/dist/src/app/services/themes/themes.service.js';

describe('ThemesService.findTheme', () => {
  it('finds the light and dark themes of a pair by cssName', () => {
    const pairs = ThemesService.themePairs;
    expect(ThemesService.findTheme(pairs, 'kaamos-light').cssName).toBe('kaamos-light');
    expect(ThemesService.findTheme(pairs, 'kaamos-dark').cssName).toBe('kaamos-dark');
  });

  it('returns undefined for a missing or unknown cssName', () => {
    expect(ThemesService.findTheme(ThemesService.themePairs, undefined)).toBeUndefined();
    expect(ThemesService.findTheme(ThemesService.themePairs, '')).toBeUndefined();
    expect(ThemesService.findTheme(ThemesService.themePairs, 'nope')).toBeUndefined();
  });

  it('only searches the given pairs', () => {
    expect(ThemesService.findTheme(ThemesService.themePairs, 'earthy-light')).toBeUndefined();
    expect(ThemesService.findTheme(ThemesService.secretThemePairs, 'kaamos-light')).toBeUndefined();
  });
});
