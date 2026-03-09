import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Logo {
    name: string;
    imageUrl: string;
    href?: string;
}

@customElement("logo-showcase")
export class LogoShowcase extends LitElement {
    @property({ type: String }) heading = "Våra kunder";
    @property({ type: String }) subheading = "";
    @property({ type: Array }) logos: Logo[] = [];

    @property({ type: String, reflect: true })
    variant: "default" | "grayscale" | "marquee" = "default";

    static styles = css`
        :host {
            display: block;
            padding: 8rem 2rem;
            background: var(--color-background-alt);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
        }

        h2 {
            font-size: 2.5rem;
            margin: 0 0 1rem 0;
            color: var(--color-text-primary);
        }

        .subheading {
            font-size: 1.25rem;
            color: var(--color-text-secondary);
            margin: 0;
        }

        /* =========================
           GRID
        ========================== */

        .logos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2rem;
            align-items: center;
            justify-items: center;
        }

        .logo-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            background: var(--color-surface, white);
            border-radius: var(--radius-base, 8px);
            width: 100%;
            height: 120px;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .logo-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }

        .logo-link {
            text-decoration: none;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo-image {
            max-width: 100%;
            max-height: 80px;
            object-fit: contain;
            transition: filter 0.3s ease, opacity 0.3s ease;
        }

        :host([variant="grayscale"]) .logo-image {
            filter: grayscale(100%);
            opacity: 0.6;
        }

        :host([variant="grayscale"]) .logo-item:hover .logo-image {
            filter: grayscale(0%);
            opacity: 1;
        }

        /* =========================
           MARQUEE
        ========================== */

        .marquee-wrapper {
            overflow: hidden;
            position: relative;
        }

        .marquee-track {
            display: flex;
            gap: 4rem;
            width: max-content;
            animation: scroll 35s linear infinite;
        }

        .marquee-item {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 180px;
        }

        :host([variant="marquee"]) .logo-item {
            background: transparent;
            box-shadow: none;
            padding: 0;
            height: auto;
        }

        :host([variant="marquee"]) .logo-item:hover {
            transform: none;
            box-shadow: none;
        }

        :host([variant="marquee"]) .logo-image {
            max-height: 60px;
            opacity: 0.8;
        }

        .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
        }

        @keyframes scroll {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-50%);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .marquee-track {
                animation: none;
            }
        }

        /* =========================
           RESPONSIVE
        ========================== */

        @media (max-width: 768px) {
            h2 {
                font-size: 2rem;
            }

            .logos-grid {
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 1.5rem;
            }

            .logo-item {
                height: 100px;
            }
        }
    `;

    private renderLogo(logo: Logo) {
        return html`
      <div class="logo-item">
        ${logo.href
            ? html`
              <a
                href="${logo.href}"
                class="logo-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${logo.name}"
              >
                <img
                  src="${logo.imageUrl}"
                  alt="${logo.name}"
                  class="logo-image"
                  loading="lazy"
                />
              </a>
            `
            : html`
              <img
                src="${logo.imageUrl}"
                alt="${logo.name}"
                class="logo-image"
                loading="lazy"
              />
            `}
      </div>
    `;
    }

    private renderMarquee() {
        const duplicated = [...this.logos, ...this.logos];

        return html`
      <div class="marquee-wrapper">
        <div class="marquee-track">
          ${duplicated.map(
            (logo) => html`
              <div class="marquee-item">
                ${this.renderLogo(logo)}
              </div>
            `
        )}
        </div>
      </div>
    `;
    }

    render() {
        return html`
      <div class="container">
        ${this.heading || this.subheading
            ? html`
              <div class="header">
                ${this.heading ? html`<h2>${this.heading}</h2>` : ""}
                ${this.subheading
                ? html`<p class="subheading">${this.subheading}</p>`
                : ""}
              </div>
            `
            : ""}

        ${this.variant === "marquee"
            ? this.renderMarquee()
            : html`
              <div class="logos-grid">
                ${this.logos.map((logo) => this.renderLogo(logo))}
              </div>
            `}
      </div>
    `;
    }
}
