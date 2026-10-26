import { HomeView } from './views/home/home.view.js';
import { NotFoundView } from './views/not-found/not-found.view.js';
import { SecretView } from './views/secret/secret.view.js';

export const appRoutes: Nutin.Routes = {
  '/': () => new HomeView(),
  '/secret': () => new SecretView(),
  '/404': () => new NotFoundView(),
}
