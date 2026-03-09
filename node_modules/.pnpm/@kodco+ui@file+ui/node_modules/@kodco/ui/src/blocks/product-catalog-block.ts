import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../components/product-catalog-card";
import type { ProductCatalogItem } from "../components/product-catalog-card";

@customElement("product-catalog-block")
export class ProductCatalogBlock extends LitElement {
  @property({ type: String }) heading = "Produkter";
  @property({ type: String }) subheading = "Skonsam hudvard med tydliga resultat.";
  @property({ type: Array }) products: ProductCatalogItem[] = [
    {
      id: "1",
      name: "Hydra Miracle Serum",
      category: "Ansikte",
      imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
      price: "799 kr",
      oldPrice: "899 kr",
      highlights: ["Minskar fina linjer", "Lyster och fukt", "Passar normal och torr hud"],
      sizeLabel: "30 ml",
      stockLabel: "I lager",
      addToCartText: "Lägg i varukorg",
      quickViewText: "Quick View",
      productHref: "#",
      quickViewHref: "#",
      badge: "Nyhet"
    },
    {
      id: "2",
      name: "Skin Perfect Moisturiser",
      category: "Ansikte",
      imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4ee6e54?w=800&q=80",
      price: "649 kr",
      highlights: ["Lugnande formula", "Skyddar hudbarriaren", "For dag och kvall"],
      sizeLabel: "50 ml",
      stockLabel: "I lager",
      addToCartText: "Lägg i varukorg",
      quickViewText: "Quick View",
      productHref: "#",
      quickViewHref: "#"
    },
    {
      id: "3",
      name: "Cleansing Nectar",
      category: "Rengoring",
      imageUrl: "https://images.unsplash.com/photo-1629198735660-e39ea93f5d8d?w=800&q=80",
      price: "429 kr",
      highlights: ["Tar bort makeup", "Mild mot kanslig hud", "Vegansk"],
      sizeLabel: "100 ml",
      stockLabel: "I lager",
      addToCartText: "Lägg i varukorg",
      quickViewText: "Quick View",
      productHref: "#",
      quickViewHref: "#"
    },
    {
      id: "4",
      name: "Nimue Night Cream",
      category: "Nattkram",
      imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      price: "719 kr",
      oldPrice: "799 kr",
      highlights: ["Aktiv nattreparation", "Jamnare hudton", "Fornyad lyster"],
      sizeLabel: "50 ml",
      stockLabel: "Fa kvar",
      addToCartText: "Lägg i varukorg",
      quickViewText: "Quick View",
      productHref: "#",
      quickViewHref: "#",
      badge: "Sale"
    }
  ];

  static styles = css`
    :host {
      display: block;
      padding: clamp(3rem, 6vw, 6rem) 1.25rem;
      background: var(--color-background, #f7f3ef);
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .header {
      margin-bottom: 1.75rem;
    }

    h2 {
      margin: 0;
      color: #241f1d;
      font-size: clamp(1.7rem, 3.2vw, 2.45rem);
      line-height: 1.15;
      letter-spacing: 0.01em;
    }

    .subheading {
      margin: 0.5rem 0 0;
      color: #6f6562;
      font-size: 1rem;
      max-width: 62ch;
    }

    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      align-items: stretch;
    }

    @media (max-width: 1120px) {
      .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (max-width: 860px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 560px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <section class="container" aria-label="Produktkatalog">
        <header class="header">
          <h2>${this.heading}</h2>
          ${this.subheading ? html`<p class="subheading">${this.subheading}</p>` : ""}
        </header>

        <div class="grid">
          ${this.products.map(
            (product) => html`<product-catalog-card .product=${product}></product-catalog-card>`
          )}
        </div>
      </section>
    `;
  }
}
