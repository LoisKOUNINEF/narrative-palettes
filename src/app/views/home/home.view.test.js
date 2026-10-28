import { HomeView } from '#root/dist/src/app/views/home/home.view.js';
import { ThemesService } from '#root/dist/src/app/services/themes/themes.service.js';

describe('HomeView ?theme=', () => {
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
    view = new HomeView();
    view.setQueryParams(query);
    app.appendChild(view.render());
  }

  it('selects the theme named by the query param', () => {
    renderWith({ theme: 'kaamos-dark' });
    expect(ThemesService.currentTheme.cssName).toBe('kaamos-dark');
    expect($('.theme-picker--sidebar .theme-picker__input:checked').value).toBe('kaamos-dark');
  });

  it('falls back to the default theme without a param', () => {
    ThemesService.changeCurrentTheme(ThemesService.secretThemes[0]);
    renderWith({});
    expect(ThemesService.currentTheme).toBe(ThemesService.defaultTheme);
  });

  it('ignores unknown and secret themes', () => {
    renderWith({ theme: 'nope' });
    expect(ThemesService.currentTheme).toBe(ThemesService.defaultTheme);
    view.destroy();
    renderWith({ theme: 'earthy-light' });
    expect(ThemesService.currentTheme).toBe(ThemesService.defaultTheme);
  });

  it('does not touch the URL on render', () => {
    renderWith({});
    expect(replaceSpy).not.toHaveBeenCalled();
  });

  it('replaces the URL with the picked theme', () => {
    renderWith({});
    const input = $('.theme-picker--sidebar .theme-picker__input[value="kaamos-dark"]');
    input.checked = true;
    input.dispatchEvent(new window.Event('change', { bubbles: true }));
    expect(ThemesService.currentTheme.cssName).toBe('kaamos-dark');
    expect(replaceSpy.lastCall[2]).toBe('/?theme=kaamos-dark');
  });

  it('the random button picks another theme of the list', () => {
    renderWith({ theme: 'kaamos-dark' });
    $('.theme-picker--sidebar .theme-picker__random').click();
    const theme = ThemesService.currentTheme;
    expect(theme.cssName).not.toBe('kaamos-dark');
    expect(ThemesService.findTheme(ThemesService.themePairs, theme.cssName)).toBe(theme);
    expect($('.theme-picker--sidebar .theme-picker__input:checked').value).toBe(theme.cssName);
    expect(replaceSpy.lastCall[2]).toBe(`/?theme=${theme.cssName}`);
  });
});
