import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./product-catalog-card";

const meta: Meta = {
  title: "Components/ProductCatalogCard",
  component: "product-catalog-card",
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    product: {
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
    }
  },
  render: (args) => html`<product-catalog-card .product=${args.product}></product-catalog-card>`
};

