import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./service-block";

const meta: Meta = {
  title: "Blocks/ServiceBlock",
  component: "service-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "dark-gold", "dark-blue"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Våra tjänster",
    variant: "default",
    services: [
      {
        icon: "💼",
        title: "Affärsutveckling",
        description: "Strategisk rådgivning för att ta ditt företag till nästa nivå",
      },
      {
        icon: "📊",
        title: "Digital marknadsföring",
        description: "Nå rätt kunder med moderna digitala strategier",
      },
      {
        icon: "⚙️",
        title: "Teknisk konsultation",
        description: "Expertis inom systemutveckling och IT-lösningar",
      },
    ],
  },
  render: (args) => html`
    <service-block
      .heading=${args.heading}
      .variant=${args.variant}
      .services=${args.services}
    ></service-block>
  `,
};

export const DarkGold: Story = {
  args: {
    heading: "Våra tjänster",
    variant: "dark-gold",
    services: [
      {
        icon: "💼",
        title: "Affärsutveckling",
        description: "Strategisk rådgivning för att ta ditt företag till nästa nivå",
      },
      {
        icon: "📊",
        title: "Digital marknadsföring",
        description: "Nå rätt kunder med moderna digitala strategier",
      },
      {
        icon: "⚙️",
        title: "Teknisk konsultation",
        description: "Expertis inom systemutveckling och IT-lösningar",
      },
    ],
  },
  render: (args) => html`
    <service-block
      .heading=${args.heading}
      .variant=${args.variant}
      .services=${args.services}
    ></service-block>
  `,
};

export const DarkBlue: Story = {
  args: {
    heading: "Våra tjänster",
    variant: "dark-blue",
    services: [
      {
        icon: "💼",
        title: "Affärsutveckling",
        description: "Strategisk rådgivning för att ta ditt företag till nästa nivå",
      },
      {
        icon: "📊",
        title: "Digital marknadsföring",
        description: "Nå rätt kunder med moderna digitala strategier",
      },
      {
        icon: "⚙️",
        title: "Teknisk konsultation",
        description: "Expertis inom systemutveckling och IT-lösningar",
      },
    ],
  },
  render: (args) => html`
    <service-block
      .heading=${args.heading}
      .variant=${args.variant}
      .services=${args.services}
    ></service-block>
  `,
};

export const SixServices: Story = {
  args: {
    heading: "Våra tjänster",
    services: [
      {
        icon: "🎨",
        title: "Webbutveckling",
        description: "Moderna och responsiva webbplatser.",
      },
      {
        icon: "📱",
        title: "Mobilappar",
        description: "Native och hybrid appar för alla plattformar.",
      },
      {
        icon: "🚀",
        title: "Digital marknadsföring",
        description: "SEO, SEM och social media marketing.",
      },
      {
        icon: "💼",
        title: "Konsultation",
        description: "Strategisk rådgivning för digital transformation.",
      },
      {
        icon: "🎯",
        title: "UX/UI Design",
        description: "Användarvänliga gränssnitt som skapar värde.",
      },
      {
        icon: "📊",
        title: "Analytics",
        description: "Datadrivna insikter för bättre beslut.",
      },
    ],
  },
  render: (args) => html`
    <service-block
      .heading=${args.heading}
      .services=${args.services}
    ></service-block>
  `,
};
