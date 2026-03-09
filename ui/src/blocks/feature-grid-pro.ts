import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface FeaturePro {
  icon?: string;
  imageUrl?: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

@customElement("feature-grid-pro")
export class FeatureGridPro extends LitElement {
  @property({ type: String }) heading = "Våra funktioner";
  @property({ type: String }) subheading = "";
  @property({ type: String }) variant = "cards"; // 'cards', 'image-left', 'image-right'
  @property({ type: Array }) features: FeaturePro[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
      title: "Professionell kvalitet",
      description: "Vi levererar lösningar i världsklass med fokus på detaljer och användarupplevelse.",
      link: {
        text: "Läs mer →",
        href: "#"
      }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      title: "Teamsamarbete",
      description: "Samarbeta sömlöst med ditt team i realtid, oavsett var ni befinner er.",
      link: {
        text: "Läs mer →",
        href: "#"
      }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      title: "Kraftfull analys",
      description: "Få djupgående insikter med våra avancerade analysverktyg och rapporter.",
      link: {
        text: "Läs mer →",
        href: "#"
      }
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
      title: "Säkerhet först",
      description: "Enterprise-grade säkerhet med kryptering, 2FA och fullständig GDPR-compliance.",
      link: {
        text: "Läs mer →",
        href: "#"
      }
    }
  ];

  static styles = css`
    :host {
      display: block;
      padding: 14rem 4rem;
      background: var(--color-background-alt);
    }

    :host([variant="image-left"]),
    :host([variant="image-right"]) {
      background: var(--color-background-alt);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 6rem;
      padding-top: 2rem;
    }

    h2 {
      font-size: 2.75rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
      line-height: 1.2;
    }

    .subheading {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      margin: 0;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Cards Variant */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: var(--color-surface, white);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px color-mix(in srgb, black 5%, transparent);
      border: 1px solid var(--color-border);
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px color-mix(in srgb, black 10%, transparent);
      border-color: var(--color-primary);
    }

    .feature-image {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }

    .feature-content {
      padding: 2.5rem;
    }

    .icon-wrapper {
      width: 56px;
      height: 56px;
      margin-bottom: 1.5rem;
      background: var(--color-primary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      box-shadow: 0 8px 16px color-mix(in srgb, var(--color-primary) 20%, transparent);
    }

    .feature-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
    }

    .feature-description {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
      margin: 0 0 1.5rem 0;
    }

    .feature-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-primary);
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .feature-link:hover {
      color: var(--color-primary-600, var(--color-primary));
      gap: 0.75rem;
    }

    /* Alternating Layout Variants */
    .features-alternating {
      display: flex;
      flex-direction: column;
      gap: 6rem;
    }

    .feature-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .feature-row:nth-child(even) .feature-image-container {
      order: 2;
    }

    .feature-image-container {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 40px color-mix(in srgb, black 10%, transparent);
    }

    .feature-image-alt {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .feature-text-content {
      padding: 2rem;
    }

    .feature-number {
      display: inline-block;
      width: 48px;
      height: 48px;
      background: var(--color-primary);
      color: var(--color-surface, white);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 968px) {
      h2 {
        font-size: 2rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .feature-row {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .feature-row:nth-child(even) .feature-image-container {
        order: 0;
      }

      .features-alternating {
        gap: 4rem;
      }

      .feature-image-alt {
        height: 300px;
      }
    }
  `;

  render() {
    if (this.variant === "image-left" || this.variant === "image-right") {
      return this.renderAlternating();
    }
    return this.renderCards();
  }

  renderCards() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          ${this.subheading
            ? html`<p class="subheading">${this.subheading}</p>`
            : ""}
        </div>
        <div class="features-grid">
          ${this.features.map(
            (feature) => html`
              <div class="feature-card">
                ${feature.imageUrl
                  ? html`
                      <img
                        src="${feature.imageUrl}"
                        alt="${feature.title}"
                        class="feature-image"
                      />
                    `
                  : ""}
                <div class="feature-content">
                  ${feature.icon
                    ? html`
                        <div class="icon-wrapper">
                          <span>${feature.icon}</span>
                        </div>
                      `
                    : ""}
                  <h3 class="feature-title">${feature.title}</h3>
                  <p class="feature-description">${feature.description}</p>
                  ${feature.link
                    ? html`
                        <a href="${feature.link.href}" class="feature-link">
                          ${feature.link.text}
                        </a>
                      `
                    : ""}
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  renderAlternating() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          ${this.subheading
            ? html`<p class="subheading">${this.subheading}</p>`
            : ""}
        </div>
        <div class="features-alternating">
          ${this.features.map(
            (feature, index) => html`
              <div class="feature-row">
                <div class="feature-image-container">
                  ${feature.imageUrl
                    ? html`
                        <img
                          src="${feature.imageUrl}"
                          alt="${feature.title}"
                          class="feature-image-alt"
                        />
                      `
                    : ""}
                </div>
                <div class="feature-text-content">
                  <div class="feature-number">${index + 1}</div>
                  <h3 class="feature-title">${feature.title}</h3>
                  <p class="feature-description">${feature.description}</p>
                  ${feature.link
                    ? html`
                        <a href="${feature.link.href}" class="feature-link">
                          ${feature.link.text}
                        </a>
                      `
                    : ""}
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
