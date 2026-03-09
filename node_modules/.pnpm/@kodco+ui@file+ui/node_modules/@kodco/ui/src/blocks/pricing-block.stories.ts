import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./pricing-block";

const meta: Meta = {
  title: "Blocks/PricingBlock",
  component: "pricing-block",
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
    heading: "Våra priser",
    subheading: "Välj det paket som passar ditt företag bäst",
    plans: [
      {
        name: "Starter",
        price: "2 990 kr",
        period: "per månad",
        description: "Perfekt för små företag",
        features: [
          { text: "5 användare", included: true },
          { text: "10 GB lagring", included: true },
          { text: "Email support", included: true },
          { text: "Grundläggande funktioner", included: true },
          { text: "Avancerade rapporter", included: false },
          { text: "Prioriterad support", included: false },
        ],
        buttonText: "Kom igång",
        buttonHref: "#",
      },
      {
        name: "Professional",
        price: "6 990 kr",
        period: "per månad",
        description: "För växande företag",
        features: [
          { text: "25 användare", included: true },
          { text: "100 GB lagring", included: true },
          { text: "Telefon & email support", included: true },
          { text: "Alla funktioner", included: true },
          { text: "Avancerade rapporter", included: true },
          { text: "Prioriterad support", included: false },
        ],
        buttonText: "Välj Professional",
        buttonHref: "#",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Kontakta oss",
        period: "",
        description: "För stora organisationer",
        features: [
          { text: "Obegränsat användare", included: true },
          { text: "Obegränsad lagring", included: true },
          { text: "24/7 support", included: true },
          { text: "Alla funktioner", included: true },
          { text: "Avancerade rapporter", included: true },
          { text: "Prioriterad support", included: true },
        ],
        buttonText: "Kontakta oss",
        buttonHref: "#",
      },
    ],
  },
  render: (args) => html`
    <pricing-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .plans=${args.plans}
    ></pricing-block>
  `,
};

export const TwoPlans: Story = {
  args: {
    heading: "Enkla priser",
    subheading: "Ingen bindningstid, avsluta när du vill",
    plans: [
      {
        name: "Basic",
        price: "99 kr",
        period: "per månad",
        features: [
          { text: "1 användare", included: true },
          { text: "5 GB lagring", included: true },
          { text: "Email support", included: true },
          { text: "Mobilappar", included: false },
        ],
        buttonText: "Starta gratis",
        buttonHref: "#",
      },
      {
        name: "Premium",
        price: "299 kr",
        period: "per månad",
        features: [
          { text: "5 användare", included: true },
          { text: "50 GB lagring", included: true },
          { text: "Prioriterad support", included: true },
          { text: "Mobilappar", included: true },
        ],
        buttonText: "Uppgradera",
        buttonHref: "#",
        highlighted: true,
      },
    ],
  },
  render: (args) => html`
    <pricing-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .plans=${args.plans}
    ></pricing-block>
  `,
};

export const FourPlans: Story = {
  args: {
    heading: "Hitta rätt paket",
    subheading: "",
    plans: [
      {
        name: "Hobby",
        price: "Gratis",
        period: "",
        features: [
          { text: "1 projekt", included: true },
          { text: "Community support", included: true },
        ],
        buttonText: "Börja gratis",
        buttonHref: "#",
      },
      {
        name: "Pro",
        price: "299 kr",
        period: "/mån",
        features: [
          { text: "10 projekt", included: true },
          { text: "Email support", included: true },
        ],
        buttonText: "Välj Pro",
        buttonHref: "#",
      },
      {
        name: "Team",
        price: "999 kr",
        period: "/mån",
        features: [
          { text: "Obegränsat projekt", included: true },
          { text: "Prioriterad support", included: true },
        ],
        buttonText: "Välj Team",
        buttonHref: "#",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Kontakta",
        period: "",
        features: [
          { text: "Anpassad lösning", included: true },
          { text: "Dedikerad support", included: true },
        ],
        buttonText: "Kontakta oss",
        buttonHref: "#",
      },
    ],
  },
  render: (args) => html`
    <pricing-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .plans=${args.plans}
    ></pricing-block>
  `,
};
