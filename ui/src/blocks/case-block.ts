import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface CaseItem {
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  href?: string;
}

@customElement("case-block")
export class CaseBlock extends LitElement {
  @property({ type: String }) heading = "Våra projekt";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) cases: CaseItem[] = [
    {
      title: "E-handelsplattform för Nordic Fashion",
      description: "Modern e-handel med headless CMS och integration till lager och ekonomisystem. Resultat: +250% i försäljning första kvartalet.",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      category: "E-handel",
      href: "#"
    },
    {
      title: "SaaS Dashboard för Tech Analytics",
      description: "Komplett redesign av analyticsplattform med fokus på datavisualisering och användarupplevelse.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      category: "SaaS",
      href: "#"
    },
    {
      title: "Varumärkesidentitet för Sustainable Living",
      description: "Komplett varumärkesstrategi och visuell identitet för hållbart livsstilsföretag.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
      category: "Branding",
      href: "#"
    },
    {
      title: "Mobilapp för Fitness Coach",
      description: "Native iOS och Android app med träningsprogram, nutritionsguider och community-funktioner.",
      imageUrl: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800&h=500&fit=crop",
      category: "Mobilapp",
      href: "#"
    },
    {
      title: "B2B Portal för Logistics Group",
      description: "Enterprise-portal för leverantörshantering och orderprocessing med realtidsuppdateringar.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      category: "B2B",
      href: "#"
    },
    {
      title: "Content Platform för Media House",
      description: "Headless CMS-lösning med AI-driven innehållsrekommendationer och personalisering.",
      imageUrl: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=500&fit=crop",
      category: "Media",
      href: "#"
    }
  ];
  @property({ type: String }) layout = "grid"; // 'grid' eller 'masonry'

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-surface, white);
    }

    .container {
      max-width: 1400px;
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

    .cases-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .case-card {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-base, 8px);
      cursor: pointer;
      transition: transform 0.3s ease;
      background: var(--color-background-alt);
    }

    .case-card:hover {
      transform: translateY(-8px);
    }

    .case-image {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .case-card:hover .case-image {
      transform: scale(1.05);
    }

    .case-content {
      padding: 1.5rem;
    }

    .case-category {
      display: inline-block;
      font-size: 0.875rem;
      color: var(--color-primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .case-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.75rem 0;
    }

    .case-description {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    .case-link {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .cases-grid {
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
        <div class="cases-grid">
          ${this.cases.map(
            (caseItem) => html`
              ${caseItem.href
                ? html`
                    <a href="${caseItem.href}" class="case-link">
                      ${this.renderCaseCard(caseItem)}
                    </a>
                  `
                : this.renderCaseCard(caseItem)}
            `
          )}
        </div>
      </div>
    `;
  }

  private renderCaseCard(caseItem: CaseItem) {
    return html`
      <div class="case-card">
        <img
          src="${caseItem.imageUrl}"
          alt="${caseItem.title}"
          class="case-image"
        />
        <div class="case-content">
          ${caseItem.category
            ? html`<span class="case-category">${caseItem.category}</span>`
            : ""}
          <h3 class="case-title">${caseItem.title}</h3>
          <p class="case-description">${caseItem.description}</p>
        </div>
      </div>
    `;
  }
}
