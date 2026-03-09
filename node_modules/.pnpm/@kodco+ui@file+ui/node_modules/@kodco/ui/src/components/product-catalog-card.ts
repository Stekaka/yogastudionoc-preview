import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface ProductCatalogItem {
  id?: string;
  name: string;
  category: string;
  imageUrl: string;
  imageAlt?: string;
  price: string;
  oldPrice?: string;
  highlights?: string[];
  sizeLabel?: string;
  stockLabel?: string;
  addToCartText?: string;
  quickViewText?: string;
  productHref?: string;
  quickViewHref?: string;
  badge?: string;
}

@customElement("product-catalog-card")
export class ProductCatalogCard extends LitElement {
  @property({ attribute: false }) product: ProductCatalogItem = {
    name: "Hydra Miracle Serum",
    category: "Ansikte",
    imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    price: "799 kr",
    oldPrice: "899 kr",
    highlights: ["Minskar fina linjer", "Lyster och fukt", "Passar normal och torr hud"],
    sizeLabel: "30 ml",
    stockLabel: "I lager",
    addToCartText: "Lagg i varukorg",
    quickViewText: "Quick View",
    productHref: "#",
    quickViewHref: "#",
    badge: "Nyhet"
  };

  static styles = css`
    :host {
      display: block;
    }

    .card {
      border: 1px solid var(--color-border, #e6e2dc);
      border-radius: 10px;
      overflow: hidden;
      background: var(--color-surface, #fff);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      height: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 32px color-mix(in srgb, #000 10%, transparent);
    }

    .media {
      position: relative;
      aspect-ratio: 4 / 5;
      background: #f7f4ef;
      overflow: hidden;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }

    .card:hover .image {
      transform: scale(1.04);
    }

    .badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      background: #1f2937;
      color: #fff;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 0.32rem 0.5rem;
      border-radius: 999px;
      z-index: 2;
    }

    .overlay-actions {
      position: absolute;
      left: 0.75rem;
      right: 0.75rem;
      bottom: 0.75rem;
      display: grid;
      gap: 0.5rem;
    }

    .btn {
      border: 0;
      text-decoration: none;
      text-align: center;
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 0.66rem 0.75rem;
      border-radius: 6px;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .btn-primary {
      background: #f5d5d8;
      color: #2f2928;
    }

    .btn-primary:hover {
      background: #eec2c7;
    }

    .btn-secondary {
      background: color-mix(in srgb, #ffffff 92%, transparent);
      color: #3b302e;
      border: 1px solid #dfd6ce;
    }

    .btn-secondary:hover {
      background: #fff;
    }

    .content {
      padding: 1rem 1rem 1.15rem;
      display: grid;
      gap: 0.6rem;
    }

    .category {
      margin: 0;
      font-size: 0.72rem;
      color: #726763;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
    }

    .title {
      margin: 0;
      font-size: 1rem;
      line-height: 1.3;
      color: #211d1c;
      font-weight: 700;
    }

    .title-link {
      text-decoration: none;
      color: inherit;
    }

    .price {
      margin: 0;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .price-current {
      color: #201a18;
      font-size: 1rem;
      font-weight: 700;
    }

    .price-old {
      color: #8b807b;
      text-decoration: line-through;
      font-size: 0.88rem;
    }

    .divider {
      border: 0;
      border-top: 1px solid var(--color-border, #ece7e2);
      margin: 0.2rem 0 0;
    }

    .highlights {
      margin: 0;
      padding-left: 1rem;
      color: #5b514d;
      display: grid;
      gap: 0.2rem;
      font-size: 0.86rem;
      line-height: 1.45;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      font-size: 0.8rem;
      color: #776d69;
      border-top: 1px dashed #efe9e3;
      padding-top: 0.6rem;
    }
  `;

  render() {
    const item = this.product;
    const highlights = item.highlights ?? [];

    return html`
      <article class="card">
        <div class="media">
          ${item.badge ? html`<span class="badge">${item.badge}</span>` : ""}
          <img class="image" src="${item.imageUrl}" alt="${item.imageAlt ?? item.name}" loading="lazy" />
          <div class="overlay-actions">
            <a class="btn btn-primary" href="${item.productHref ?? "#"}">${item.addToCartText ?? "Lagg i varukorg"}</a>
            <a class="btn btn-secondary" href="${item.quickViewHref ?? item.productHref ?? "#"}">${item.quickViewText ?? "Quick View"}</a>
          </div>
        </div>

        <div class="content">
          <p class="category">${item.category}</p>
          <h3 class="title">
            <a class="title-link" href="${item.productHref ?? "#"}">${item.name}</a>
          </h3>
          <p class="price">
            <span class="price-current">${item.price}</span>
            ${item.oldPrice ? html`<span class="price-old">${item.oldPrice}</span>` : ""}
          </p>
          <hr class="divider" />
          ${highlights.length
            ? html`<ul class="highlights">
                ${highlights.map((point) => html`<li>${point}</li>`)}
              </ul>`
            : ""}
          ${(item.sizeLabel ?? item.stockLabel)
            ? html`
                <div class="meta">
                  <span>${item.sizeLabel ?? ""}</span>
                  <span>${item.stockLabel ?? ""}</span>
                </div>
              `
            : ""}
        </div>
      </article>
    `;
  }
}
