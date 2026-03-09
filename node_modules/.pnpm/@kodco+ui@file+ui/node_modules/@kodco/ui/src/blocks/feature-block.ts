import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@customElement("feature-block")
export class FeatureBlock extends LitElement {
  @property({ type: String }) heading = "Funktioner";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) features: Feature[] = [
    {
      icon: "⚡",
      title: "Snabb & Enkel",
      description: "Kom igång på bara några minuter"
    },
    {
      icon: "🔒",
      title: "Säker",
      description: "Enterprise-grade säkerhet"
    },
    {
      icon: "📊",
      title: "Kraftfull",
      description: "Alla funktioner du behöver"
    },
    {
      icon: "💰",
      title: "Prisvärd",
      description: "Betala bara för det du använder"
    }
  ];

  private renderIcon(icon: string) {
    // Om ikonen är en emoji (1-2 tecken), rendera som text
    if (icon.length <= 2) {
      return html`${icon}`;
    }
    // Annars, tolka som SVG path eller rendering
    return html`${icon}`;
  }

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-surface, white);
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

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
    }

    .feature-item {
      text-align: center;
    }

    .icon-wrapper {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: var(--color-background-alt);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .feature-item h3 {
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
    }

    .feature-item p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
      margin: 0;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
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
              <div class="feature-item">
                <div class="icon-wrapper">
                  <span>${this.renderIcon(feature.icon)}</span>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
