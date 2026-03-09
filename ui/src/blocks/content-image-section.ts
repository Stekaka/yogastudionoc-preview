import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("content-image-section")
export class ContentImageSection extends LitElement {
  @property({ type: String }) eyebrow = "";
  @property({ type: String }) heading = "";
  @property({ type: Array }) paragraphs: string[] = [];
  @property({ type: String }) imageSrc = "";
  @property({ type: String }) imageAlt = "";
  @property({ type: Boolean }) reverse = false;

  static styles = css`
    :host {
      display: block;
      padding: 0 1rem;
    }

    .container {
      max-width: 72rem;
      margin: 0 auto;
      display: grid;
      gap: 2.5rem;
      align-items: center;
    }

    @media (min-width: 768px) {
      .container {
        gap: 3.5rem;
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      }

      .container[data-reverse="true"] {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
      }

      .content[data-reverse="true"] {
        order: 2;
      }

      .figure[data-reverse="true"] {
        order: 1;
      }
    }

    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: var(--color-text-secondary, #475569);
      margin: 0 0 0.75rem 0;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text-primary, #0f172a);
      margin: 0 0 1rem 0;
      line-height: 1.3;
    }

    @media (min-width: 640px) {
      h2 {
        font-size: 1.875rem;
      }
    }

    .paragraphs {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .paragraphs p {
      font-size: 0.875rem;
      line-height: 1.65;
      color: var(--color-text-secondary, #475569);
      margin: 0;
    }

    @media (min-width: 640px) {
      .paragraphs p {
        font-size: 1rem;
      }
    }

    .figure {
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
      border: 1px solid color-mix(in srgb, var(--color-neutral-700, #334155) 18%, transparent);
      background: color-mix(in srgb, var(--color-neutral-100, #f1f5f9) 60%, white);
      box-shadow: 0 24px 90px color-mix(in srgb, black 10%, transparent);
    }

    .figure img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }

    .figure::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(
        to top,
        color-mix(in srgb, black 12%, transparent),
        transparent,
        color-mix(in srgb, white 10%, transparent)
      );
    }
  `;

  render() {
    return html`
      <section class="container" data-reverse="${this.reverse}">
        <div class="content" data-reverse="${this.reverse}">
          ${this.eyebrow ? html`<p class="eyebrow">${this.eyebrow}</p>` : ""}
          <h2>${this.heading}</h2>
          <div class="paragraphs">
            ${this.paragraphs.map(
              (p) => html`<p>${p}</p>`
            )}
          </div>
        </div>
        <figure class="figure" data-reverse="${this.reverse}">
          ${this.imageSrc
            ? html`<img src="${this.imageSrc}" alt="${this.imageAlt}" loading="lazy" />`
            : ""}
        </figure>
      </section>
    `;
  }
}
