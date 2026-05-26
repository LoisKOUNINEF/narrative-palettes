import { Routes } from '../core/index.js';
import { HomeView, NotFoundView, SecretView } from './views/index.js';

export const appRoutes: Routes = {
  '/': () => new HomeView(),
  '/secret': () => new SecretView(),
  '/404': () => new NotFoundView(),
}
