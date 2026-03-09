import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Service {
  icon?: string;
  image?: string;
  title: string;
  description: string;
}

@customElement("service-block")
export class ServiceBlock extends LitElement {
  @property({ type: String }) heading = "Våra tjänster";
  @property({ type: String, reflect: true }) variant = "default"; // 'default', 'dark-gold', 'dark-blue'
  @property({ type: Array }) services: Service[] = [
    {
      icon: "💼",
      title: "Affärsutveckling",
      description: "Strategisk rådgivning för att ta ditt företag till nästa nivå"
    },
    {
      icon: "📊",
      title: "Digital marknadsföring",
      description: "Nå rätt kunder med moderna digitala strategier"
    },
    {
      icon: "⚙️",
      title: "Teknisk konsultation",
      description: "Expertis inom systemutveckling och IT-lösningar"
    }
  ];

  static styles = css`
    :host {
      display: block;
      padding: 72px 0;
      background: var(--color-background, white);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    /* Dark Gold Variant */
    :host([variant="dark-gold"]) {
      background: radial-gradient(900px 360px at 50% 0%, color-mix(in srgb, white 6%, transparent), transparent),
        linear-gradient(180deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 85%, black));
    }

    /* Dark Blue Variant */
    :host([variant="dark-blue"]) {
      background: radial-gradient(1200px 520px at 50% 10%, color-mix(in srgb, white 7%, transparent), transparent),
        radial-gradient(900px 380px at 20% 90%, color-mix(in srgb, var(--color-accent, #3a7bd5) 10%, transparent), transparent),
        linear-gradient(180deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 85%, black));
    }

    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 24px;
      padding-top: 4rem;
      padding-bottom: 3rem;
    }

    h2 {
      margin: 0 0 34px;
      text-align: center;
      font-size: 44px;
      line-height: 1.12;
      letter-spacing: -0.02em;
      color: var(--color-text-primary);
      font-weight: 700;
      padding-top: 1rem;
    }

    :host([variant="dark-gold"]) h2,
    :host([variant="dark-blue"]) h2 {
      color: color-mix(in srgb, white 92%, transparent);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
    }

    .service-card {
      position: relative;
      border-radius: 14px;
      background: var(--color-surface, white);
      border: 1px solid var(--color-border);
      box-shadow: 0 8px 16px color-mix(in srgb, black 10%, transparent);
      padding: 32px 24px 28px;
      overflow: hidden;
      transition: all 0.3s ease;
      min-height: 380px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    /* Line at bottom for default variant */
    .service-card::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 12px;
      height: 4px;
      background: linear-gradient(90deg, transparent, var(--color-text-secondary), transparent);
    }

    :host([variant="dark-gold"]) .service-card {
      background: linear-gradient(180deg, #1b2330 0%, #1b2330 30%, #1f2936 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    }

    :host([variant="dark-blue"]) .service-card {
      background: linear-gradient(180deg, #1b2330, #141a22);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    }

    :host([variant="dark-blue"]) .service-card {
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
      padding: 28px 28px 24px;
    }

    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
    }

    :host([variant="dark-gold"]) .service-card:hover,
    :host([variant="dark-blue"]) .service-card:hover {
      box-shadow: 0 28px 56px rgba(0, 0, 0, 0.35);
    }

    /* Gold line at bottom for dark-gold variant */
    :host([variant="dark-gold"]) .service-card::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--color-accent, rgba(201, 162, 39, 0.95)), transparent);
    }

    /* Blue metallic line at bottom for dark-blue variant */
    :host([variant="dark-blue"]) .service-card::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, var(--color-accent, rgba(58, 123, 213, 0.95)), transparent);
    }

    .icon-wrapper {
      width: 54px;
      height: 54px;
      border-radius: 999px;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      margin: 0 auto 18px auto;
      position: relative;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Horizontal line through icon for default variant */
    .icon-wrapper::before {
      content: "";
      position: absolute;
      left: -9999px;
      right: calc(100% + 12px);
      top: 50%;
      height: 1px;
      background: linear-gradient(90deg, transparent, #475569);
      transform: translateY(-50%);
    }

    .icon-wrapper::after {
      content: "";
      position: absolute;
      left: calc(100% + 12px);
      right: -9999px;
      top: 50%;
      height: 1px;
      background: linear-gradient(90deg, #475569, transparent);
      transform: translateY(-50%);
    }

    :host([variant="dark-gold"]) .icon-wrapper {
      border-radius: 999px;
      width: 58px;
      height: 58px;
      background: rgba(0, 0, 0, 0.20);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35), 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }

    :host([variant="dark-gold"]) .icon-wrapper::before {
      content: "";
      position: absolute;
      left: -9999px;
      right: calc(100% + 12px);
      top: 50%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--color-accent, rgba(201, 162, 39, 0.6)));
      transform: translateY(-50%);
    }

    :host([variant="dark-gold"]) .icon-wrapper::after {
      content: "";
      position: absolute;
      left: calc(100% + 12px);
      right: -9999px;
      top: 50%;
      height: 1px;
      background: linear-gradient(90deg, var(--color-accent, rgba(201, 162, 39, 0.6)), transparent);
      transform: translateY(-50%);
    }

    :host([variant="dark-blue"]) .icon-wrapper {
      width: 62px;
      height: 62px;
      border-radius: 16px;
      background: rgba(0, 0, 0, 0.22);
      border: 1px solid rgba(255, 255, 255, 0.10);
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .icon {
      font-size: 22px;
      line-height: 1;
      display: block;
    }

    .service-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 18px;
    }

    .service-card h3 {
      margin: 18px 0 10px;
      font-size: 22px;
      line-height: 1.2;
      color: var(--color-text-primary);
      font-weight: 700;
    }

    :host([variant="dark-gold"]) .service-card h3,
    :host([variant="dark-blue"]) .service-card h3 {
      color: white;
    }

    .service-card p {
      margin: 0 0 18px;
      font-size: 15.5px;
      line-height: 1.55;
      color: var(--color-text-secondary);
      flex-grow: 1;
    }

    :host([variant="dark-gold"]) .service-card p,
    :host([variant="dark-blue"]) .service-card p {
      color: color-mix(in srgb, white 78%, transparent);
    }

    .cta-link {
      margin-top: auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 10px;
      background: var(--color-primary);
      border: 1px solid color-mix(in srgb, var(--color-primary) 85%, black);
      color: var(--color-primary-contrast, white);
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s ease;
      align-self: center;
    }

    .cta-link:hover {
      background: color-mix(in srgb, var(--color-primary) 85%, black);
      transform: translateY(-2px);
    }

    :host([variant="dark-gold"]) .cta-link,
    :host([variant="dark-blue"]) .cta-link {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.10);
      color: #ffffff;
    }

    :host([variant="dark-gold"]) .cta-link {
      background: rgba(0, 0, 0, 0.22);
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    :host([variant="dark-gold"]) .cta-link:hover,
    :host([variant="dark-blue"]) .cta-link:hover {
      background: rgba(255, 255, 255, 0.09);
    }

    :host([variant="dark-blue"]) .cta-link:focus {
      outline: 2px solid rgba(58, 123, 213, 0.65);
      outline-offset: 2px;
    }

    @media (max-width: 980px) {
      h2 {
        font-size: 36px;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2>${this.heading}</h2>
        <div class="services-grid">
          ${this.services.map(
            (service) => html`
              <article class="service-card">
                ${service.image
                  ? html`<img src="${service.image}" alt="${service.title}" class="service-image" />`
                  : html`
                    <div class="icon-wrapper">
                      <span class="icon">${service.icon}</span>
                    </div>
                  `}
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a class="cta-link" href="#">Läs mer <span aria-hidden="true">→</span></a>
              </article>
            `
          )}
        </div>
      </div>
    `;
  }
}
