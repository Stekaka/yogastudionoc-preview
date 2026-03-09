import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface ProductFeature {
  text: string;
  included: boolean;
}

interface Product {
  name: string;
  tagline?: string;
  price: string;
  description: string;
  imageUrl: string;
  features: ProductFeature[];
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  badge?: string;
  discount?: string;
}

@customElement("product-block")
export class ProductBlock extends LitElement {
  @property({ type: String }) heading = "Våra produkter";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) products: Product[] = [
    {
      name: "Starter Pack",
      tagline: "Perfekt för att komma igång",
      price: "299 kr",
      description: "Allt du behöver för att börja använda vår plattform.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
      features: [
        { text: "Grundläggande funktioner", included: true },
        { text: "Email support", included: true },
        { text: "1 GB lagring", included: true }
      ],
      primaryAction: {
        text: "Köp nu",
        href: "#"
      },
      secondaryAction: {
        text: "Läs mer",
        href: "#"
      }
    }
  ];

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
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
    }

    .subheading {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
    }

    .product-card {
      background: var(--color-surface, white);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px color-mix(in srgb, black 7%, transparent);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px color-mix(in srgb, black 12%, transparent);
    }

    .product-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #ef4444;
      color: var(--color-surface, white);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 600;
      z-index: 10;
    }

    .product-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .product-content {
      padding: 2rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .product-tagline {
      font-size: 0.875rem;
      color: var(--color-primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 0.5rem 0;
    }

    .product-name {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.5rem 0;
    }

    .product-price {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 1rem 0;
    }

    .product-price .discount {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      text-decoration: line-through;
      margin-left: 0.5rem;
    }

    .product-description {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }

    .product-features {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }

    .product-features li {
      padding: 0.75rem 0;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.938rem;
      color: var(--color-text-primary);
      border-bottom: 1px solid var(--color-border);
    }

    .product-features li:last-child {
      border-bottom: none;
    }

    .feature-icon {
      font-size: 1.125rem;
      flex-shrink: 0;
    }

    .feature-icon.included {
      color: #10b981;
    }

    .feature-icon.excluded {
      color: var(--color-border);
    }

    .product-actions {
      margin-top: auto;
      display: flex;
      gap: 1rem;
    }

    .btn {
      flex: 1;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
      display: block;
    }

    .btn-primary {
      background: var(--color-primary);
      color: var(--color-surface, white);
    }

    .btn-primary:hover {
      background: var(--color-primary-600, var(--color-primary));
      transform: translateY(-2px);
      box-shadow: 0 8px 16px color-mix(in srgb, var(--color-primary) 30%, transparent);
    }

    .btn-secondary {
      background: var(--color-background-alt);
      color: var(--color-text-primary);
    }

    .btn-secondary:hover {
      background: var(--color-border);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .product-actions {
        flex-direction: column;
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
        <div class="products-grid">
          ${this.products.map(
            (product) => html`
              <div class="product-card">
                ${product.badge
                  ? html`<div class="product-badge">${product.badge}</div>`
                  : ""}
                <img
                  src="${product.imageUrl}"
                  alt="${product.name}"
                  class="product-image"
                />
                <div class="product-content">
                  ${product.tagline
                    ? html`<p class="product-tagline">${product.tagline}</p>`
                    : ""}
                  <h3 class="product-name">${product.name}</h3>
                  <div class="product-price">
                    ${product.price}
                    ${product.discount
                      ? html`<span class="discount">${product.discount}</span>`
                      : ""}
                  </div>
                  <p class="product-description">${product.description}</p>
                  <ul class="product-features">
                    ${product.features.map(
                      (feature) => html`
                        <li>
                          <span
                            class="feature-icon ${feature.included
                              ? "included"
                              : "excluded"}"
                          >
                            ${feature.included ? "✓" : "✕"}
                          </span>
                          <span>${feature.text}</span>
                        </li>
                      `
                    )}
                  </ul>
                  <div class="product-actions">
                    <a
                      href="${product.primaryAction.href}"
                      class="btn btn-primary"
                    >
                      ${product.primaryAction.text}
                    </a>
                    ${product.secondaryAction
                      ? html`
                          <a
                            href="${product.secondaryAction.href}"
                            class="btn btn-secondary"
                          >
                            ${product.secondaryAction.text}
                          </a>
                        `
                      : ""}
                  </div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
