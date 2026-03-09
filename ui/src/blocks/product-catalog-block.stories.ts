import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./product-catalog-block";

const meta: Meta = {
  title: "Blocks/ProductCatalogBlock",
  component: "product-catalog-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Produkter",
    subheading: "Skonsam hudvard med tydliga resultat.",
    products: [
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
    ]
  },
  render: (args) => html`
    <product-catalog-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .products=${args.products}
    ></product-catalog-block>
  `
};

