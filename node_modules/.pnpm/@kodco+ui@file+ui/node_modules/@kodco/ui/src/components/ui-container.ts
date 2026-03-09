import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-container")
export class UIContainer extends LitElement {
  @property({ type: String }) size = "default"; // 'small', 'default', 'large', 'full'
  @property({ type: Boolean }) centered = true;

  static styles = css`
    :host {
      display: block;
    }

    .container {
      width: 100%;
      padding: 0 1.5rem;
      box-sizing: border-box;
    }

    .container.centered {
      margin-left: auto;
      margin-right: auto;
    }

    /* Sizes */
    .container.small {
      max-width: 640px;
    }

    .container.default {
      max-width: 1200px;
    }

    .container.large {
      max-width: 1400px;
    }

    .container.full {
      max-width: 100%;
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container ${this.size} ${this.centered ? "centered" : ""}">
        <slot></slot>
      </div>
    `;
  }
}
