import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-spinner")
export class UISpinner extends LitElement {
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'
  @property({ type: String }) color = "primary"; // 'primary', 'secondary', 'white'

  static styles = css`
    :host {
      display: inline-block;
    }

    .spinner {
      border-radius: 50%;
      border-style: solid;
      border-right-color: transparent !important;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Sizes */
    :host([size="small"]) .spinner {
      width: 16px;
      height: 16px;
      border-width: 2px;
    }

    :host([size="medium"]) .spinner {
      width: 32px;
      height: 32px;
      border-width: 3px;
    }

    :host([size="large"]) .spinner {
      width: 48px;
      height: 48px;
      border-width: 4px;
    }

    /* Colors */
    :host([color="primary"]) .spinner {
      border-color: #3b82f6;
    }

    :host([color="secondary"]) .spinner {
      border-color: #64748b;
    }

    :host([color="white"]) .spinner {
      border-color: white;
    }
  `;

  render() {
    return html`<div class="spinner"></div>`;
  }
}
