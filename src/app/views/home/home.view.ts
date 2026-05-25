import { ThemeShowcaseComponent } from '../../components/index.js';
import { ComponentConfig, View } from '../../../core/index.js';
import { themes } from '../../themes-data/themes.js';

const template = `__TEMPLATE_PLACEHOLDER__`;

export class HomeView extends View {
  constructor() {
    super({template});
  }

  public childConfigs(): ComponentConfig[] {
    return this.catalogConfig({
      selector: 'home-theme-showcase',
      array: themes,
      component: ThemeShowcaseComponent,
      elementName: 'home-theme'
    })
    // return [{
    //   selector: 'home-theme-showcase',
    //   factory: (el) => new ThemeShowcaseComponent(el, themes[0]!)
    // }]
  }
}
