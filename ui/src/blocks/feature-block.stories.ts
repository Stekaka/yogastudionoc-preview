import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./feature-block";

const meta: Meta = {
  title: "Blocks/FeatureBlock",
  component: "feature-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Varför välja oss?",
    subheading: "Vi erbjuder det bästa för ditt företag",
    features: [
      {
        icon: "⚡",
        title: "Snabb leverans",
        description: "Vi levererar projekt i tid och håller våra löften.",
      },
      {
        icon: "💎",
        title: "Högsta kvalitet",
        description: "Kvalitet är vårt fokus i varje projekt vi tar oss an.",
      },
      {
        icon: "🤝",
        title: "Personlig service",
        description: "Du får alltid en dedikerad kontaktperson.",
      },
    ],
  },
  render: (args) => html`
    <feature-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .features=${args.features}
    ></feature-block>
  `,
};

export const NoSubheading: Story = {
  args: {
    heading: "Våra fördelar",
    subheading: "",
    features: [
      {
        icon: "🔒",
        title: "Säkerhet först",
        description: "All data hanteras enligt GDPR och med högsta säkerhet.",
      },
      {
        icon: "📈",
        title: "Mätbara resultat",
        description: "Vi levererar lösningar som ger konkreta resultat.",
      },
      {
        icon: "🌍",
        title: "Globalt nätverk",
        description: "Tillgång till experter över hela världen.",
      },
    ],
  },
  render: (args) => html`
    <feature-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .features=${args.features}
    ></feature-block>
  `,
};

export const SixFeatures: Story = {
  args: {
    heading: "Kompletta lösningar",
    subheading: "Allt du behöver på ett ställe",
    features: [
      {
        icon: "⚡",
        title: "Snabb leverans",
        description: "Projekt i tid enligt överenskommelse.",
      },
      {
        icon: "💎",
        title: "Högsta kvalitet",
        description: "Kvalitet i varje projekt.",
      },
      {
        icon: "🤝",
        title: "Personlig service",
        description: "Dedikerad kontaktperson.",
      },
      {
        icon: "🔒",
        title: "Säkerhet",
        description: "GDPR-kompatibel hantering.",
      },
      {
        icon: "📈",
        title: "Resultat",
        description: "Mätbara och konkreta resultat.",
      },
      {
        icon: "🌍",
        title: "Globalt",
        description: "Experter världen över.",
      },
    ],
  },
  render: (args) => html`
    <feature-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .features=${args.features}
    ></feature-block>
  `,
};
