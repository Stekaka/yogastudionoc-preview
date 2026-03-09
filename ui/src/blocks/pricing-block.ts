import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonHref: string;
  highlighted?: boolean;
}

@customElement("pricing-block")
export class PricingBlock extends LitElement {
  @property({ type: String }) heading = "Våra priser";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) plans: PricingPlan[] = [
    {
      name: "Start",
      price: "2 995 kr",
      period: "/månad",
      description: "Perfekt för små företag",
      features: [
        { text: "5 användare", included: true },
        { text: "10 GB lagring", included: true },
        { text: "Email support", included: true },
        { text: "Avancerad analys", included: false },
        { text: "API-åtkomst", included: false }
      ],
      buttonText: "Kom igång",
      buttonHref: "#",
      highlighted: false
    },
    {
      name: "Pro",
      price: "7 995 kr",
      period: "/månad",
      description: "För växande företag",
      features: [
        { text: "Obegränsat användare", included: true },
        { text: "100 GB lagring", included: true },
        { text: "Prioriterad support", included: true },
        { text: "Avancerad analys", included: true },
        { text: "API-åtkomst", included: false }
      ],
      buttonText: "Välj Pro",
      buttonHref: "#",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Kontakta oss",
      description: "Skräddarsydda lösningar",
      features: [
        { text: "Obegränsat användare", included: true },
        { text: "Obegränsad lagring", included: true },
        { text: "Dedikerad support", included: true },
        { text: "Avancerad analys", included: true },
        { text: "API-åtkomst", included: true }
      ],
      buttonText: "Kontakta oss",
      buttonHref: "#",
      highlighted: false
    }
  ];

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-background-alt);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 4rem;
      padding-bottom: 4rem;
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

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      align-items: stretch;
    }

    .pricing-card {
      background: var(--color-surface, white);
      border-radius: var(--radius-base, 12px);
      padding: 2.5rem;
      box-shadow: 0 1px 3px color-mix(in srgb, black 10%, transparent);
      display: flex;
      flex-direction: column;
      position: relative;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .pricing-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px color-mix(in srgb, black 12%, transparent);
    }

    .pricing-card.highlighted {
      border: 3px solid var(--color-primary);
      transform: scale(1.05);
    }

    .pricing-card.highlighted::before {
      content: "Populärast";
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-primary);
      color: var(--color-surface, white);
      padding: 0.375rem 1.25rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .plan-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.5rem 0;
    }

    .plan-description {
      font-size: 0.938rem;
      color: var(--color-text-secondary);
      margin: 0 0 1.5rem 0;
    }

    .plan-price {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0;
      line-height: 1;
    }

    .plan-period {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0.5rem 0 2rem 0;
    }

    .plan-features {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
      flex-grow: 1;
    }

    .plan-features li {
      padding: 0.75rem 0;
      display: flex;
      align-items: start;
      gap: 0.75rem;
      border-bottom: 1px solid var(--color-border);
    }

    .plan-features li:last-child {
      border-bottom: none;
    }

    .feature-icon {
      flex-shrink: 0;
      font-size: 1.25rem;
    }

    .feature-icon.included {
      color: #10b981;
    }

    .feature-icon.excluded {
      color: var(--color-border);
    }

    .feature-text {
      color: var(--color-text-primary);
      font-size: 0.938rem;
    }

    .feature-text.excluded {
      color: var(--color-text-secondary);
      text-decoration: line-through;
    }

    .plan-button {
      width: 100%;
      padding: 1rem 1rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: var(--radius-base, 8px);
      cursor: pointer;
      text-decoration: none;
      display: block;
      text-align: center;
      box-sizing: border-box;
      transition: all 0.3s ease;
      background: var(--color-border);
      color: var(--color-text-primary);
    }

    .pricing-card.highlighted .plan-button {
      background: var(--color-primary);
      color: var(--color-surface, white);
    }

    .plan-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px color-mix(in srgb, black 15%, transparent);
    }

    .pricing-card.highlighted .plan-button:hover {
      background: var(--color-primary-600, var(--color-primary));
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .pricing-grid {
        grid-template-columns: 1fr;
      }

      .pricing-card.highlighted {
        transform: scale(1);
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
        <div class="pricing-grid">
          ${this.plans.map(
            (plan) => html`
              <div class="pricing-card ${plan.highlighted ? "highlighted" : ""}">
                <h3 class="plan-name">${plan.name}</h3>
                ${plan.description
                  ? html`<p class="plan-description">${plan.description}</p>`
                  : ""}
                <div class="plan-price">${plan.price}</div>
                ${plan.period
                  ? html`<p class="plan-period">${plan.period}</p>`
                  : ""}
                <ul class="plan-features">
                  ${plan.features.map(
                    (feature) => html`
                      <li>
                        <span
                          class="feature-icon ${feature.included
                            ? "included"
                            : "excluded"}"
                        >
                          ${feature.included ? "✓" : "✕"}
                        </span>
                        <span
                          class="feature-text ${feature.included ? "" : "excluded"}"
                        >
                          ${feature.text}
                        </span>
                      </li>
                    `
                  )}
                </ul>
                <a href="${plan.buttonHref}" class="plan-button">
                  ${plan.buttonText}
                </a>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
