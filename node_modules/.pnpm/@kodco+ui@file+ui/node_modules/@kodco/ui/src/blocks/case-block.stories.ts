import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./case-block";

const meta: Meta = {
  title: "Blocks/CaseBlock",
  component: "case-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    layout: {
      control: "select",
      options: ["grid", "masonry"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Våra projekt",
    subheading: "Se exempel på vad vi har skapat för våra kunder",
    layout: "grid",
    cases: [
      {
        title: "E-handelslösning för modeföretag",
        description: "Komplett e-handelsplattform med integrerad lagerhållning och CRM.",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        category: "E-handel",
        href: "#",
      },
      {
        title: "Mobilapp för träningskedja",
        description: "Native iOS och Android app med bokning, betalning och träningsdagbok.",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        category: "Mobilapp",
        href: "#",
      },
      {
        title: "Corporate website för techföretag",
        description: "Modern företagshemsida med fokus på leadgenerering och konvertering.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: "Webbplats",
        href: "#",
      },
    ],
  },
  render: (args) => html`
    <case-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .layout=${args.layout}
      .cases=${args.cases}
    ></case-block>
  `,
};

export const SixCases: Story = {
  args: {
    heading: "Portfolio",
    subheading: "Ett urval av våra senaste projekt",
    layout: "grid",
    cases: [
      {
        title: "E-handelslösning",
        description: "Modern e-handel med Shopify Plus.",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        category: "E-handel",
      },
      {
        title: "Träningsapp",
        description: "Native app för iOS och Android.",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        category: "App",
      },
      {
        title: "Corporate website",
        description: "Leadgenererande företagshemsida.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: "Webb",
      },
      {
        title: "SaaS-plattform",
        description: "Komplett projekthanteringsplattform.",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        category: "SaaS",
      },
      {
        title: "Restaurangbokningssystem",
        description: "Online bokningssystem med POS-integration.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        category: "System",
      },
      {
        title: "Fastighetsmäklare",
        description: "Objektdatabas med sök och visning.",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
        category: "Webb",
      },
    ],
  },
  render: (args) => html`
    <case-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .layout=${args.layout}
      .cases=${args.cases}
    ></case-block>
  `,
};
