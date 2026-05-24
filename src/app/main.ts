import { AppRouter, Service, I18nService } from '../core/index.js';
import { registerPipes } from '../libs/index.js';
import { appRoutes } from './routes.js';

class App {
  // private header: NavbarComponent;

  constructor() {
    registerPipes();
    AppRouter(appRoutes);

    // Init global components
    // this.header = new NavbarComponent('body' as unknown as HTMLElement);
    // this.footer = new FooterComponent('body' as unknown as HTMLElement);

    // Init app
    this.initialize();
  }

  public async initialize() {
    this.renderBaseLayout();
  }

  private renderBaseLayout() {
    // e
    // document.body.prepend(this.header.render());
    // document.body.append(this.footer.render());
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await I18nService.initTranslations();
  await I18nService.loadTranslations(I18nService.currentLanguage);
  const app = new App();
});

window.addEventListener('beforeunload', async () => {
  await Service.destroyAll();
});
