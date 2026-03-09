import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-hero")
export class PageHero extends LitElement {
    @property({ type: String }) title = "Page title";
    @property({ type: String }) subtitle = "";
    @property({ type: String }) ctaText = "";
    @property({ type: String }) ctaLink = "";
    @property({ type: String }) theme = "default";
    @property({ type: String, attribute: 'background-image', reflect: true }) backgroundImage = "";

    static styles = css`
        :host {
            display: block;
            position: relative;
            padding: 8rem 2rem;
            background: transparent;
            color: var(--color-primary-contrast, white);
            transition: background 300ms ease, color 300ms ease;
            overflow: hidden;
        }

        :host::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--color-primary);
            z-index: 0;
        }

        :host([theme="gradient"])::before {
            background: linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 85%, black) 100%);
        }

        .background-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
            z-index: 1;
        }

        .container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            padding-top: 4rem;
        }

        h1 {
            font-size: 3.5rem;
            margin: 0 0 1.5rem 0;
            color: var(--color-primary-contrast, white);
            font-weight: 700;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 1.5rem;
            color: color-mix(in srgb, var(--color-primary-contrast, white) 90%, transparent);
            margin: 0 0 2.5rem 0;
            font-weight: 400;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--color-accent, var(--color-primary));
            color: var(--color-accent-contrast, white);
            text-decoration: none;
            border-radius: var(--radius-base, 8px);
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px color-mix(in srgb, black 15%, transparent);
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px color-mix(in srgb, black 25%, transparent);
            filter: brightness(1.05);
        }

        @media (max-width: 768px) {
            :host {
                padding: 5rem 1.5rem;
            }

            h1 {
                font-size: 2.5rem;
            }

            .subtitle {
                font-size: 1.25rem;
            }
        }
    `;


    render() {
        return html`
            ${this.backgroundImage
                ? html`<img src="${this.backgroundImage}" alt="" class="background-image" />`
                : ""}
            <div class="container">
                <h1>${this.title}</h1>
                ${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : ""}
                ${this.ctaText && this.ctaLink
                    ? html`<a href="${this.ctaLink}" class="cta-button">${this.ctaText}</a>`
                    : ""}
            </div>
        `;
    }
}