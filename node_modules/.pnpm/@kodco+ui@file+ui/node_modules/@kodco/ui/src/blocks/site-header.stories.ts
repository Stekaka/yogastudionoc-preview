import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./site-header";

const meta: Meta = {
  title: "Blocks/SiteHeader",
  component: "site-header",
  tags: ["autodocs"],
  argTypes: {
    siteName: { control: "text" },
    logo: { control: "text" },
    transparent: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    siteName: "Företagsnamn",
    logo: "",
    transparent: false,
    navItems: [
      { label: "Hem", href: "/" },
      { label: "Tjänster", href: "/services" },
      { label: "Om oss", href: "/about" },
      { label: "Kontakt", href: "/contact" },
    ],
  },
  render: (args) => html`
    <site-header
      .siteName=${args.siteName}
      .logo=${args.logo}
      .transparent=${args.transparent}
      .navItems=${args.navItems}
    ></site-header>
  `,
};

export const WithLogo: Story = {
  args: {
    siteName: "Kodco",
    logo: "https://via.placeholder.com/150x40/3b82f6/ffffff?text=LOGO",
    transparent: false,
    navItems: [
      { label: "Hem", href: "/" },
      { label: "Tjänster", href: "/services" },
      { label: "Om oss", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Kontakt", href: "/contact" },
    ],
  },
  render: (args) => html`
    <site-header
      .siteName=${args.siteName}
      .logo=${args.logo}
      .transparent=${args.transparent}
      .navItems=${args.navItems}
    ></site-header>
  `,
};

export const Transparent: Story = {
  args: {
    siteName: "Företagsnamn",
    logo: "",
    transparent: true,
    navItems: [
      { label: "Hem", href: "/" },
      { label: "Tjänster", href: "/services" },
      { label: "Om oss", href: "/about" },
      { label: "Kontakt", href: "/contact" },
    ],
  },
  render: (args) => html`
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem;">
      <site-header
        .siteName=${args.siteName}
        .logo=${args.logo}
        .transparent=${args.transparent}
        .navItems=${args.navItems}
      ></site-header>
      <div style="height: 300px; display: flex; align-items: center; justify-content: center; color: white;">
        <h1>Hero Content Here</h1>
      </div>
    </div>
  `,
};

export const ManyItems: Story = {
  args: {
    siteName: "Kodco",
    logo: "",
    transparent: false,
    navItems: [
      { label: "Hem", href: "/" },
      { label: "Tjänster", href: "/services" },
      { label: "Produkter", href: "/products" },
      { label: "Lösningar", href: "/solutions" },
      { label: "Om oss", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blogg", href: "/blog" },
      { label: "Kontakt", href: "/contact" },
    ],
  },
  render: (args) => html`
    <site-header
      .siteName=${args.siteName}
      .logo=${args.logo}
      .transparent=${args.transparent}
      .navItems=${args.navItems}
    ></site-header>
  `,
};
