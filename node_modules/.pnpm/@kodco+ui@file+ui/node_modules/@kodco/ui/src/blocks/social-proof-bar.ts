import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Logo {
  name: string;
  imageUrl: string;
}

@customElement("social-proof-bar")
export class SocialProofBar extends LitElement {
  @property({ type: String }) text = "Betrodda av ledande företag";
  @property({ type: Array }) logos: Logo[] = [];
  @property({ type: String }) variant = "light"; // 'light' eller 'dark'

  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }

    :host([variant="light"]) {
      background: var(--color-background-alt);
    }

    :host([variant="dark"]) {
      background: var(--color-text-primary);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .text {
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 2rem 0;
    }

    :host([variant="light"]) .text {
      color: var(--color-text-secondary);
    }

    :host([variant="dark"]) .text {
      color: var(--color-text-secondary);
    }

    .logos {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .logo-item {
      opacity: 0.6;
      transition: opacity 0.3s ease;
      max-height: 40px;
    }

    .logo-item:hover {
      opacity: 1;
    }

    .logo-item img {
      height: 40px;
      width: auto;
      max-width: 150px;
      object-fit: contain;
    }

    :host([variant="dark"]) .logo-item img {
      filter: brightness(0) invert(1);
    }

    @media (max-width: 768px) {
      .logos {
        gap: 2rem;
      }

      .logo-item img {
        height: 30px;
        max-width: 120px;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        ${this.text ? html`<p class="text">${this.text}</p>` : ""}

        <div class="logos">
          ${this.logos.map(
            (logo) => html`
              <div class="logo-item">
                <img src="${logo.imageUrl}" alt="${logo.name}" />
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
