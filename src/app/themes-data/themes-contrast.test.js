import { themes } from '#root/dist/src/app/themes-data/themes.js';
import { secretThemes } from '#root/dist/src/app/themes-data/secret-themes.js';

// WCAG 2.2 AA, each token checked against both background and surface:
// text-role tokens 4.5:1, status fills/icons and control borders 3:1.
// Disabled tokens, `border` (decorative) and `overlay` are exempt.
const TEXT_TOKENS = ['text', 'textMuted', 'primary', 'primaryHover', 'secondary', 'secondaryHover', 'accent'];
const UI_TOKENS = ['success', 'error', 'warning', 'info', 'borderStrong'];
// Used as button fills: background or text on top of them must reach 4.5:1
const FILL_TOKENS = ['primary', 'primaryHover', 'secondary', 'secondaryHover', 'accent'];
const SURFACES = ['background', 'surface'];

const toLinear = (v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);

function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => toLinear(parseInt(hex.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Readable failure list, so a failing test names every offending pair
function contrastFailures(vars) {
  const failures = [];
  const check = (token, against, min) => {
    const ratio = contrast(vars[token], vars[against]);
    if (ratio < min) failures.push(`${token} on ${against}: ${ratio.toFixed(2)} < ${min}`);
  };
  for (const surface of SURFACES) {
    TEXT_TOKENS.forEach((token) => check(token, surface, 4.5));
    UI_TOKENS.forEach((token) => check(token, surface, 3));
  }
  for (const token of FILL_TOKENS) {
    const ratio = Math.max(contrast(vars.background, vars[token]), contrast(vars.text, vars[token]));
    if (ratio < 4.5) failures.push(`text or background on ${token}: ${ratio.toFixed(2)} < 4.5`);
  }
  return failures;
}

describe('Themes contrast (WCAG 2.2 AA)', () => {
  for (const theme of [...themes, ...secretThemes]) {
    describe(theme.cssName, () => {
      it('has valid hex values for every checked token', () => {
        const tokens = [...SURFACES, ...TEXT_TOKENS, ...UI_TOKENS];
        const invalid = tokens.filter((token) => !/^#[0-9a-fA-F]{6}$/.test(theme.variables[token]));
        expect(invalid).toEqual([]);
      });

      it('meets the contrast thresholds', () => {
        expect(contrastFailures(theme.variables)).toEqual([]);
      });
    });
  }

  describe('contrast()', () => {
    it('matches the WCAG reference values', () => {
      expect(contrast('#000000', '#FFFFFF').toFixed(2)).toBe('21.00');
      expect(contrast('#777777', '#FFFFFF').toFixed(2)).toBe('4.48');
      expect(contrast('#123456', '#123456')).toBe(1);
    });
  });
});
