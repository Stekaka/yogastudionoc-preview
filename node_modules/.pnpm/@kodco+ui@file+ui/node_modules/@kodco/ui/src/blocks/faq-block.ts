import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface FAQItem {
  question: string;
  answer: string;
}

@customElement("faq-block")
export class FAQBlock extends LitElement {
  @property({ type: String }) heading = "Vanliga frågor";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) faqs: FAQItem[] = [
    {
      question: "Hur kommer jag igång?",
      answer: "Det är enkelt att komma igång! Skapa ett konto, välj ditt paket och du kan börja använda plattformen direkt. Vi erbjuder också en kostnadsfri onboarding-session för att hjälpa dig sätta upp allt."
    },
    {
      question: "Kan jag byta paket senare?",
      answer: "Ja, du kan uppgradera eller nedgradera ditt paket när som helst. Ändringen träder i kraft direkt och du betalar bara för det du använder."
    },
    {
      question: "Finns det någon bindningstid?",
      answer: "Nej, vi har inga bindningstider. Du kan avsluta ditt abonnemang när du vill utan några extra kostnader. Vi tror på att tjäna din lojalitet varje månad."
    },
    {
      question: "Vilken support erbjuder ni?",
      answer: "Vi erbjuder email-support till alla kunder. Premium- och Enterprise-kunder får även prioriterad support och tillgång till vår dedikerade supportchat."
    },
    {
      question: "Hur säker är er plattform?",
      answer: "Vi tar säkerhet på största allvar. All data krypteras både i vila och under överföring. Vi är GDPR-kompatibla och genomför regelbundna säkerhetsrevisioner."
    },
    {
      question: "Kan jag integrera med andra verktyg?",
      answer: "Ja! Vi har färdiga integrationer med över 50 populära verktyg som Slack, Google Workspace, Salesforce och många fler. Du kan också använda vårt API för custom-integrationer."
    },
    {
      question: "Erbjuder ni utbildning?",
      answer: "Ja, vi erbjuder omfattande dokumentation, videotutorials och webinars. Enterprise-kunder får även tillgång till personliga utbildningssessioner."
    },
    {
      question: "Vad händer om jag överskrider min gräns?",
      answer: "Du får en notis när du närmar dig din gräns. Du kan antingen uppgradera ditt paket eller köpa till extra kapacitet för just den månaden."
    }
  ];
  @state() private openIndexes: Set<number> = new Set();

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-surface, white);
    }

    .container {
      max-width: 900px;
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

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      background: var(--color-background-alt);
      border-radius: var(--radius-base, 8px);
      overflow: hidden;
      border: 2px solid transparent;
      transition: border-color 0.3s ease;
    }

    .faq-item.open {
      border-color: var(--color-primary);
    }

    .faq-question {
      width: 100%;
      padding: 1.5rem;
      background: none;
      border: none;
      text-align: left;
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      transition: color 0.3s ease;
    }

    .faq-question:hover {
      color: var(--color-primary);
    }

    .faq-icon {
      flex-shrink: 0;
      font-size: 1.5rem;
      transition: transform 0.3s ease;
      color: var(--color-text-secondary);
    }

    .faq-item.open .faq-icon {
      transform: rotate(180deg);
      color: var(--color-primary);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .faq-item.open .faq-answer {
      max-height: 500px;
      padding: 0 1.5rem 1.5rem;
    }

    .faq-answer p {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
      margin: 0;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .faq-question {
        font-size: 1rem;
        padding: 1.25rem;
      }
    }
  `;

  private toggleFAQ(index: number) {
    if (this.openIndexes.has(index)) {
      this.openIndexes.delete(index);
    } else {
      this.openIndexes.add(index);
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          ${this.subheading
            ? html`<p class="subheading">${this.subheading}</p>`
            : ""}
        </div>
        <div class="faq-list">
          ${this.faqs.map(
            (faq, index) => html`
              <div class="faq-item ${this.openIndexes.has(index) ? "open" : ""}">
                <button
                  class="faq-question"
                  @click="${() => this.toggleFAQ(index)}"
                  aria-expanded="${this.openIndexes.has(index)}"
                >
                  <span>${faq.question}</span>
                  <span class="faq-icon">▼</span>
                </button>
                <div class="faq-answer">
                  <p>${faq.answer}</p>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
