import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cta-section")
export class CTASection extends LitElement {
  @property({ type: String }) heading = "Redo att komma igång?";
  @property({ type: String }) text = "Kontakta oss idag för en kostnadsfri konsultation";
  @property({ type: String }) primaryButtonText = "Kontakta oss";
  @property({ type: String }) primaryButtonHref = "#contact";
  @property({ type: String }) secondaryButtonText = "";
  @property({ type: String }) secondaryButtonHref = "";
  @property({ type: String }) variant = "dark"; // 'dark' eller 'light'

  static styles = css`
    :host {
      display: block;
      padding: 0;
      margin-bottom: 0;
    }

    :host([variant="dark"]) {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: white;
    }

    :host([variant="light"]) {
      background: var(--color-background-alt);
      color: var(--color-text-primary);
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
      padding: 4rem 2rem 6rem 2rem;
    }

    h2 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
    }

    p {
      font-size: 1.25rem;
      margin: 0 0 2.5rem 0;
      opacity: 0.9;
    }

    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    button,
    a {
      padding: 1rem 2.5rem;
      font-size: 1.125rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .primary-button {
      background: var(--color-accent, #3b82f6);
      color: white;
    }

    .primary-button:hover {
      background: var(--color-primary-600, var(--color-primary));
      transform: translateY(-2px);
      box-shadow: 0 8px 16px color-mix(in srgb, black 20%, transparent);
    }

    .secondary-button {
      background: transparent;
      border: 2px solid currentColor;
    }

    :host([variant="dark"]) .secondary-button {
      color: var(--color-surface, white);
    }

    :host([variant="light"]) .secondary-button {
      color: var(--color-text-primary);
    }

    .secondary-button:hover {
      background: color-mix(in srgb, white 10%, transparent);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.125rem;
      }

      .buttons {
        flex-direction: column;
      }

      button,
      a {
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2>${this.heading}</h2>
        <p>${this.text}</p>
        <div class="buttons">
          <a href="${this.primaryButtonHref}" class="primary-button">
            ${this.primaryButtonText}
          </a>
          ${this.secondaryButtonText
            ? html`
                <a
                  href="${this.secondaryButtonHref}"
                  class="secondary-button"
                >
                  ${this.secondaryButtonText}
                </a>
              `
            : ""}
        </div>
      </div>
    `;
  }
}
