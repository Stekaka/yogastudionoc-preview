import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("about-hero-block")
export class AboutHeroBlock extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) subtitle = "";
  @property({ type: String }) imageSrc = "";
  @property({ type: String }) eyebrow = "";

  static styles = css`
    :host {
      display: block;
      padding: 0;
    }

    .section {
      position: relative;
      isolate: isolate;
      overflow: hidden;
      border-radius: 2.25rem;
      border: 1px solid color-mix(in srgb, var(--color-surface, white) 25%, transparent);
      background: color-mix(in srgb, var(--color-neutral-800, #1e293b) 10%, transparent);
      box-shadow: 0 28px 90px color-mix(in srgb, black 18%, transparent);
    }

    .bg {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    .bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        color-mix(in srgb, var(--color-neutral-900, #0f172a) 55%, transparent),
        color-mix(in srgb, var(--color-neutral-900, #0f172a) 25%, transparent),
        transparent
      );
    }

    .content {
      position: relative;
      padding: 4rem 1.5rem;
      text-align: center;
    }

    @media (min-width: 640px) {
      .content {
        padding: 5rem 2.5rem;
      }
    }

    @media (min-width: 1024px) {
      .content {
        padding: 6rem 4rem;
      }
    }

    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: color-mix(in srgb, var(--color-surface, white) 75%, transparent);
      margin: 0 0 1rem 0;
    }

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      letter-spacing: -0.025em;
      color: var(--color-surface, white);
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    @media (min-width: 640px) {
      h1 {
        font-size: 3rem;
      }
    }

    @media (min-width: 1024px) {
      h1 {
        font-size: 3.75rem;
      }
    }

    .subtitle {
      max-width: 42rem;
      margin: 0 auto;
      font-size: 0.875rem;
      line-height: 1.6;
      color: color-mix(in srgb, var(--color-surface, white) 85%, transparent);
    }

    @media (min-width: 640px) {
      .subtitle {
        font-size: 1rem;
      }
    }
  `;

  render() {
    return html`
      <section class="section" aria-labelledby="about-hero-title">
        <div class="bg">
          ${this.imageSrc
            ? html`<img src="${this.imageSrc}" alt="" loading="eager" decoding="async" />`
            : ""}
          <div class="overlay"></div>
        </div>
        <div class="content">
          ${this.eyebrow ? html`<p class="eyebrow">${this.eyebrow}</p>` : ""}
          <h1 id="about-hero-title">${this.title}</h1>
          ${this.subtitle
            ? html`<p class="subtitle">${this.subtitle}</p>`
            : ""}
        </div>
      </section>
    `;
  }
}
