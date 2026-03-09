import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Article {
  title: string;
  excerpt: string;
  imageUrl?: string;
  category?: string;
  date?: string;
  author?: string;
  href: string;
}

@customElement("content-block")
export class ContentBlock extends LitElement {
  @property({ type: String }) heading = "Senaste artiklarna";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) articles: Article[] = [
    {
      title: "5 strategier för att växa ditt företag 2024",
      excerpt: "Upptäck de viktigaste trenderna och strategierna som driver framgångsrika företag framåt.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Strategi",
      date: "2024-01-15",
      author: "Anna Karlsson",
      href: "#"
    },
    {
      title: "Guide: Så bygger du ett starkt varumärke",
      excerpt: "Lär dig grunderna i varumärkesbyggande och hur du skapar en stark identitet.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      category: "Branding",
      date: "2024-01-10",
      author: "Erik Svensson",
      href: "#"
    },
    {
      title: "Digital transformation: Var ska du börja?",
      excerpt: "En praktisk guide för företag som vill påbörja sin digitala resa.",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      category: "Teknologi",
      date: "2024-01-05",
      author: "Lisa Andersson",
      href: "#"
    },
    {
      title: "Kundresan: Från lead till lojal kund",
      excerpt: "Förstå och optimera varje steg i kundresan för bättre resultat.",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      category: "Marknadsföring",
      date: "2023-12-28",
      author: "Johan Berg",
      href: "#"
    }
  ];
  @property({ type: String }) layout = "grid"; // 'grid', 'list', 'featured'

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

    /* Grid Layout */
    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    /* List Layout */
    .articles-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .article-card {
      background: var(--color-surface, white);
      border-radius: var(--radius-base, 8px);
      overflow: hidden;
      box-shadow: 0 1px 3px color-mix(in srgb, black 10%, transparent);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .article-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px color-mix(in srgb, black 10%, transparent);
    }

    .articles-list .article-card {
      flex-direction: row;
      align-items: center;
    }

    .article-link {
      text-decoration: none;
      color: inherit;
      display: block;
      height: 100%;
    }

    .article-image {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }

    .articles-list .article-image {
      width: 300px;
      aspect-ratio: 4 / 3;
    }

    .article-content {
      padding: 1.5rem;
      flex: 1;
    }

    .article-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 0.75rem;
      font-size: 0.875rem;
      color: var(--color-text-secondary);
    }

    .article-category {
      color: var(--color-primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .article-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.75rem 0;
      line-height: 1.3;
    }

    .article-excerpt {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .articles-grid {
        grid-template-columns: 1fr;
      }

      .articles-list .article-card {
        flex-direction: column;
      }

      .articles-list .article-image {
        width: 100%;
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
        <div class="${this.layout === "list" ? "articles-list" : "articles-grid"}">
          ${this.articles.map(
            (article) => html`
              <a href="${article.href}" class="article-link">
                <article class="article-card">
                  ${article.imageUrl
                    ? html`<img
                        src="${article.imageUrl}"
                        alt="${article.title}"
                        class="article-image"
                      />`
                    : ""}
                  <div class="article-content">
                    <div class="article-meta">
                      ${article.category
                        ? html`<span class="article-category">${article.category}</span>`
                        : ""}
                      ${article.date ? html`<span>${article.date}</span>` : ""}
                      ${article.author ? html`<span>· ${article.author}</span>` : ""}
                    </div>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                  </div>
                </article>
              </a>
            `
          )}
        </div>
      </div>
    `;
  }
}
