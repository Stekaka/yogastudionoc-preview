import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-divider")
export class UIDivider extends LitElement {
  @property({ type: String }) variant = "solid"; // 'solid', 'dashed', 'dotted'
  @property({ type: String }) color = "default"; // 'default', 'light', 'dark'
  @property({ type: String }) spacing = "medium"; // 'small', 'medium', 'large'
  @property({ type: String }) text = "";

  static styles = css`
    :host {
      display: block;
    }

    .divider-container {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .divider-line {
      flex: 1;
      height: 1px;
    }

    .divider-text {
      padding: 0 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
    }

    /* Spacing */
    :host([spacing="small"]) .divider-container {
      margin: 1rem 0;
    }

    :host([spacing="medium"]) .divider-container {
      margin: 2rem 0;
    }

    :host([spacing="large"]) .divider-container {
      margin: 3rem 0;
    }

    /* Variants */
    :host([variant="solid"]) .divider-line {
      border-top: 1px solid;
    }

    :host([variant="dashed"]) .divider-line {
      border-top: 1px dashed;
    }

    :host([variant="dotted"]) .divider-line {
      border-top: 1px dotted;
    }

    /* Colors */
    :host([color="default"]) .divider-line {
      border-color: #e2e8f0;
    }

    :host([color="default"]) .divider-text {
      color: #64748b;
    }

    :host([color="light"]) .divider-line {
      border-color: rgba(255, 255, 255, 0.2);
    }

    :host([color="light"]) .divider-text {
      color: rgba(255, 255, 255, 0.7);
    }

    :host([color="dark"]) .divider-line {
      border-color: #334155;
    }

    :host([color="dark"]) .divider-text {
      color: #0f172a;
    }
  `;

  render() {
    if (this.text) {
      return html`
        <div class="divider-container">
          <div class="divider-line"></div>
          <span class="divider-text">${this.text}</span>
          <div class="divider-line"></div>
        </div>
      `;
    }

    return html`
      <div class="divider-container">
        <div class="divider-line"></div>
      </div>
    `;
  }
}
