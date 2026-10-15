import 'a11y-elements/components/radio-group';
import 'a11y-elements/overlays/drawer';
import 'a11y-elements/overlays/floating';
import { AppRouter, initI18n, registerPipes } from '../core/index.js';
import { appRoutes } from './routes.js';

class App {
  constructor() {
    registerPipes();
    AppRouter(appRoutes);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  new App();
});
