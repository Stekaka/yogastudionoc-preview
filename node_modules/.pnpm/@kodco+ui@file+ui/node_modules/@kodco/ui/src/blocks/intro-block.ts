import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("intro-block")
export class IntroBlock extends LitElement {
  @property({ type: String }) heading = "Om oss";
  @property({ type: String }) text = "Vi är ett företag som...";
  @property({ type: String }) imageUrl = "";
  @property({ type: String }) imagePosition = "right"; // 'left' eller 'right'

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-background);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .content {
      order: 1;
    }

    .image {
      order: 2;
    }

    .container[data-image-position="left"] .content {
      order: 2;
    }

    .container[data-image-position="left"] .image {
      order: 1;
    }

    h2 {
      font-size: 2.5rem;
      margin: 0 0 1.5rem 0;
      color: var(--color-text-primary);
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75;
      color: var(--color-text-secondary);
      margin: 0;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: var(--radius-base, 8px);
      object-fit: cover;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }

      .content,
      .image {
        order: unset !important;
      }

      h2 {
        font-size: 2rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container" data-image-position="${this.imagePosition}">
        <div class="content">
          <h2>${this.heading}</h2>
          <p>${this.text}</p>
        </div>
        ${this.imageUrl
          ? html`<div class="image">
              <img src="${this.imageUrl}" alt="${this.heading}" />
            </div>`
          : ""}
      </div>
    `;
  }
}
