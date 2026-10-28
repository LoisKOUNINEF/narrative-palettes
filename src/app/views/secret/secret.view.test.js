import { SecretView } from '#root/dist/src/app/views/secret/secret.view.js';
import { ThemesService } from '#root/dist/src/app/services/themes/themes.service.js';

describe('SecretView ?theme=', () => {
  let app;
  let view;
  let replaceSpy;

  beforeEach(() => {
    app = document.getElementById('app');
    replaceSpy = spyOn(window.history, 'replaceState').andCallFake(() => {});
  });

  afterEach(() => {
    replaceSpy.restore();
    view.destroy();
    app.innerHTML = '';
  });

  function renderWith(query) {
    view = new SecretView();
    view.setQueryParams(query);
    app.appendChild(view.render());
  }

  it('selects the secret theme named by the query param', () => {
    renderWith({ theme: 'nutin-dark' });
    expect(ThemesService.currentTheme.cssName).toBe('nutin-dark');
  });

  it('falls back to the first secret theme for a missing, unknown or main theme', () => {
    const first = ThemesService.secretThemePairs[0].light;
    renderWith({});
    expect(ThemesService.currentTheme).toBe(first);
    view.destroy();
    renderWith({ theme: 'kaamos-light' });
    expect(ThemesService.currentTheme).toBe(first);
  });

  it('replaces the URL with the picked theme', () => {
    renderWith({});
    const input = $('.theme-picker--sidebar .theme-picker__input[value="nutin-dark"]');
    input.checked = true;
    input.dispatchEvent(new window.Event('change', { bubbles: true }));
    expect(replaceSpy.lastCall[2]).toBe('/secret?theme=nutin-dark');
  });
});
