import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./site-footer";

const meta: Meta = {
  title: "Blocks/SiteFooter",
  component: "site-footer",
  tags: ["autodocs"],
  argTypes: {
    siteName: { control: "text" },
    description: { control: "text" },
    copyright: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    siteName: "Företagsnamn",
    description: "Vi hjälper företag att växa genom digitala lösningar och strategisk rådgivning.",
    copyright: "",
    sections: [
      {
        title: "Tjänster",
        links: [
          { label: "Webbutveckling", href: "/services/web" },
          { label: "Mobilappar", href: "/services/mobile" },
          { label: "Konsultation", href: "/services/consulting" },
        ],
      },
      {
        title: "Företag",
        links: [
          { label: "Om oss", href: "/about" },
          { label: "Karriär", href: "/careers" },
          { label: "Kontakt", href: "/contact" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Hjälpcenter", href: "/help" },
          { label: "Dokumentation", href: "/docs" },
          { label: "Status", href: "/status" },
        ],
      },
    ],
    socialLinks: [],
  },
  render: (args) => html`
    <site-footer
      .siteName=${args.siteName}
      .description=${args.description}
      .copyright=${args.copyright}
      .sections=${args.sections}
      .socialLinks=${args.socialLinks}
    ></site-footer>
  `,
};

export const WithSocial: Story = {
  args: {
    siteName: "Kodco",
    description: "Vi skapar moderna webbupplevelser som konverterar.",
    copyright: "",
    sections: [
      {
        title: "Produkter",
        links: [
          { label: "Webbplatser", href: "/products/websites" },
          { label: "E-handel", href: "/products/ecommerce" },
          { label: "Appar", href: "/products/apps" },
        ],
      },
      {
        title: "Företag",
        links: [
          { label: "Om oss", href: "/about" },
          { label: "Team", href: "/team" },
          { label: "Kontakt", href: "/contact" },
        ],
      },
      {
        title: "Juridiskt",
        links: [
          { label: "Integritet", href: "/privacy" },
          { label: "Villkor", href: "/terms" },
          { label: "Cookies", href: "/cookies" },
        ],
      },
    ],
    socialLinks: [
      { icon: "📘", href: "https://facebook.com", label: "Facebook" },
      { icon: "🐦", href: "https://twitter.com", label: "Twitter" },
      { icon: "📸", href: "https://instagram.com", label: "Instagram" },
      { icon: "💼", href: "https://linkedin.com", label: "LinkedIn" },
    ],
  },
  render: (args) => html`
    <site-footer
      .siteName=${args.siteName}
      .description=${args.description}
      .copyright=${args.copyright}
      .sections=${args.sections}
      .socialLinks=${args.socialLinks}
    ></site-footer>
  `,
};

export const Minimal: Story = {
  args: {
    siteName: "Minimalist Co",
    description: "Less is more.",
    copyright: "",
    sections: [
      {
        title: "Länkar",
        links: [
          { label: "Hem", href: "/" },
          { label: "Om", href: "/about" },
          { label: "Kontakt", href: "/contact" },
        ],
      },
    ],
    socialLinks: [],
  },
  render: (args) => html`
    <site-footer
      .siteName=${args.siteName}
      .description=${args.description}
      .copyright=${args.copyright}
      .sections=${args.sections}
      .socialLinks=${args.socialLinks}
    ></site-footer>
  `,
};

export const CustomCopyright: Story = {
  args: {
    siteName: "Kodco",
    description: "Digital innovation sedan 2020.",
    copyright: "© 2020-2026 Kodco AB. Org.nr: 559999-9999. Alla rättigheter förbehållna.",
    sections: [
      {
        title: "Företag",
        links: [
          { label: "Om oss", href: "/about" },
          { label: "Kontakt", href: "/contact" },
        ],
      },
    ],
    socialLinks: [
      { icon: "💼", href: "https://linkedin.com", label: "LinkedIn" },
    ],
  },
  render: (args) => html`
    <site-footer
      .siteName=${args.siteName}
      .description=${args.description}
      .copyright=${args.copyright}
      .sections=${args.sections}
      .socialLinks=${args.socialLinks}
    ></site-footer>
  `,
};
