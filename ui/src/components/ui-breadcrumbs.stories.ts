import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-breadcrumbs";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  component: "ui-breadcrumbs",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ui-breadcrumbs
      .items=${[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Electronics", href: "/products/electronics" },
        { label: "Laptop" },
      ]}
    ></ui-breadcrumbs>
  `,
};

export const Separators: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #64748b;">
          Default separator (/)
        </p>
        <ui-breadcrumbs
          .items=${[
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
          ]}
        ></ui-breadcrumbs>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #64748b;">Arrow separator (→)</p>
        <ui-breadcrumbs
          separator="→"
          .items=${[
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
          ]}
        ></ui-breadcrumbs>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #64748b;">
          Greater than separator (>)
        </p>
        <ui-breadcrumbs
          separator=">"
          .items=${[
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
          ]}
        ></ui-breadcrumbs>
      </div>

      <div>
        <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; color: #64748b;">Chevron separator (›)</p>
        <ui-breadcrumbs
          separator="›"
          .items=${[
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
          ]}
        ></ui-breadcrumbs>
      </div>
    </div>
  `,
};

export const SimpleNavigation: Story = {
  render: () => html`
    <ui-breadcrumbs
      .items=${[{ label: "Home", href: "/" }, { label: "About Us" }]}
    ></ui-breadcrumbs>
  `,
};

export const DeepNavigation: Story = {
  render: () => html`
    <ui-breadcrumbs
      .items=${[
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: "Electronics", href: "/shop/electronics" },
        { label: "Computers", href: "/shop/electronics/computers" },
        { label: "Laptops", href: "/shop/electronics/computers/laptops" },
        { label: "Gaming Laptops" },
      ]}
    ></ui-breadcrumbs>
  `,
};

export const BlogPost: Story = {
  render: () => html`
    <ui-breadcrumbs
      separator="›"
      .items=${[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Technology", href: "/blog/technology" },
        { label: "Web Development Tips" },
      ]}
    ></ui-breadcrumbs>
  `,
};

export const ProductPage: Story = {
  render: () => html`
    <div style="max-width: 1200px;">
      <ui-breadcrumbs
        .items=${[
          { label: "Home", href: "/" },
          { label: "Men", href: "/men" },
          { label: "Clothing", href: "/men/clothing" },
          { label: "T-Shirts", href: "/men/clothing/t-shirts" },
          { label: "Classic White T-Shirt" },
        ]}
      ></ui-breadcrumbs>
    </div>
  `,
};
