import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-card")
export class UICard extends LitElement {
  @property({ type: String }) variant = "default"; // 'default', 'bordered', 'elevated'
  @property({ type: Boolean}) hoverable = false;
  @property({ type: String }) padding = "medium"; // 'none', 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: block;
    }

    .card {
      border-radius: 12px;
      background: white;
      transition: all 0.3s ease;
    }

    /* Variants */
    :host([variant="default"]) .card {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    :host([variant="bordered"]) .card {
      border: 2px solid #e2e8f0;
    }

    :host([variant="elevated"]) .card {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    /* Hoverable */
    :host([hoverable]) .card {
      cursor: pointer;
    }

    :host([hoverable]) .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    /* Padding */
    :host([padding="none"]) .card {
      padding: 0;
    }

    :host([padding="small"]) .card {
      padding: 1rem;
    }

    :host([padding="medium"]) .card {
      padding: 1.5rem;
    }

    :host([padding="large"]) .card {
      padding: 2rem;
    }
  `;

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}
