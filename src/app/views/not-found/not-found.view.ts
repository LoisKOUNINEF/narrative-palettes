import { Navigation, View, html } from '../../../core/index.js';
import { ButtonComponent } from '../../components/common/button/button.component.js';

const template = html`__TEMPLATE_PLACEHOLDER__`;

export class NotFoundView extends View {
  constructor() {
    super({ template, viewName: 'not-found' });
  }

  public override documentTitle(): string {
    return 'Page Not Found';
  }

  public registerChildren(): Nutin.ComponentConfig[] {
    const btnClass = 'u-bg-inherit u-font-large u-padd-y-medium u-color-prim u-italic';
    return [
      {
        selector: 'home',
        factory: (el) => new ButtonComponent(el, { textContent: 'Back to home', callback: () => this.handleHome(), className: btnClass })
      },
    ]
  }

  private handleHome() {
    Navigation.navigateTo('/');
  }

  protected goToSecret() {
    Navigation.navigateTo('/secret');
  }
}
