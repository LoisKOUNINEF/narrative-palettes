import { Component, html } from '../../../../core/index.js';

export interface ButtonConfig {
  callback: () => void;
  textContent?: string;
  className?: string;
}

// tabindex="0": Safari's default Tab order skips native controls without an explicit tabindex
const templateFn = (config: ButtonConfig) => html`<button type="button" class="${config.className}" tabindex="0" data-event="click:_onClick">${config.textContent}</button>`;

/**
 * Note : To ensure 'this' is bound properly
 * ```typescript
 * // Will handle 'this' inside doStuff
 * { callback: () => this.doStuff() }
 * ```
*/
export class ButtonComponent extends Component<HTMLElement, ButtonConfig> {
  constructor(mountTarget: HTMLElement, config: ButtonConfig) {
    super({ templateFn, mountTarget, config });
  }

  protected _onClick(): void {
    this.config.callback();
  }
}
