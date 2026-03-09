import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

@customElement("process-block")
export class ProcessBlock extends LitElement {
  @property({ type: String }) heading = "Så funkar det";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) steps: ProcessStep[] = [
    {
      number: "01",
      title: "Upptäck",
      description: "Vi börjar med att förstå dina behov, mål och utmaningar genom djupgående samtal och analys.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Planera",
      description: "Vi utvecklar en skräddarsydd strategi och färdplan som är anpassad efter dina specifika förutsättningar.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Skapa",
      description: "Vårt team implementerar lösningen med fokus på kvalitet, prestanda och användarupplevelse.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Lansera",
      description: "Vi lanserar din lösning och säkerställer en smidig övergång med kontinuerlig support.",
      icon: "🚀"
    }
  ];
  @property({ type: String }) layout = "horizontal"; // 'horizontal' eller 'vertical'

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
      margin-bottom: 4rem;
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

    /* Horizontal Layout */
    .steps-horizontal {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      position: relative;
    }

    .step-horizontal {
      text-align: center;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .step-horizontal::after {
      content: "→";
      position: absolute;
      right: -2rem;
      top: 35px;
      transform: translateY(-50%);
      font-size: 2rem;
      color: var(--color-text-secondary);
    }

    .step-horizontal:last-child::after {
      display: none;
    }

    /* Vertical Layout */
    .steps-vertical {
      max-width: 800px;
      margin: 0 auto;
    }

    .step-vertical {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      position: relative;
      padding-bottom: 3rem;
    }

    .step-vertical::after {
      content: "";
      position: absolute;
      left: 35px;
      top: 70px;
      bottom: 0;
      width: 2px;
      background: var(--color-border);
    }

    .step-vertical:last-child::after {
      display: none;
    }

    /* Step Number */
    .step-number {
      width: 70px;
      height: 70px;
      background: var(--color-background-alt);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }

    .step-icon {
      font-size: 2rem;
    }

    /* Step Content */
    .step-content {
      flex: 1;
    }

    .step-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.75rem 0;
    }

    .step-horizontal .step-title {
      margin-top: 1.5rem;
    }

    .step-description {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .steps-horizontal {
        grid-template-columns: 1fr;
      }

      .step-horizontal::after {
        content: "↓";
        right: auto;
        left: 50%;
        top: auto;
        bottom: -2rem;
        transform: translateX(-50%);
      }

      .step-vertical {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .step-vertical::after {
        display: none;
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

        <div class="${this.layout === "vertical" ? "steps-vertical" : "steps-horizontal"}">
          ${this.steps.map(
            (step) => html`
              <div class="${this.layout === "vertical" ? "step-vertical" : "step-horizontal"}">
                <div class="step-number">
                  ${step.icon ? html`<span class="step-icon">${step.icon}</span>` : step.number}
                </div>
                <div class="step-content">
                  <h3 class="step-title">${step.title}</h3>
                  <p class="step-description">${step.description}</p>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
