import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./cta-section";

const meta: Meta = {
  title: "Blocks/CTASection",
  component: "cta-section",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    text: { control: "text" },
    primaryButtonText: { control: "text" },
    primaryButtonHref: { control: "text" },
    secondaryButtonText: { control: "text" },
    secondaryButtonHref: { control: "text" },
    variant: {
      control: "select",
      options: ["dark", "light"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Dark: Story = {
  args: {
    heading: "Redo att komma igång?",
    text: "Kontakta oss idag för en kostnadsfri konsultation",
    primaryButtonText: "Kontakta oss",
    primaryButtonHref: "#contact",
    secondaryButtonText: "Läs mer",
    secondaryButtonHref: "#about",
    variant: "dark",
  },
  render: (args) => html`
    <cta-section
      .heading=${args.heading}
      .text=${args.text}
      .primaryButtonText=${args.primaryButtonText}
      .primaryButtonHref=${args.primaryButtonHref}
      .secondaryButtonText=${args.secondaryButtonText}
      .secondaryButtonHref=${args.secondaryButtonHref}
      variant=${args.variant}
    ></cta-section>
  `,
};

export const Light: Story = {
  args: {
    heading: "Ta nästa steg",
    text: "Låt oss hjälpa dig att växa ditt företag",
    primaryButtonText: "Boka demo",
    primaryButtonHref: "#demo",
    secondaryButtonText: "Se priser",
    secondaryButtonHref: "#pricing",
    variant: "light",
  },
  render: (args) => html`
    <cta-section
      .heading=${args.heading}
      .text=${args.text}
      .primaryButtonText=${args.primaryButtonText}
      .primaryButtonHref=${args.primaryButtonHref}
      .secondaryButtonText=${args.secondaryButtonText}
      .secondaryButtonHref=${args.secondaryButtonHref}
      variant=${args.variant}
    ></cta-section>
  `,
};

export const SingleButton: Story = {
  args: {
    heading: "Börja idag",
    text: "Ingen kreditkort krävs. 14 dagars gratis provperiod.",
    primaryButtonText: "Kom igång gratis",
    primaryButtonHref: "#signup",
    secondaryButtonText: "",
    secondaryButtonHref: "",
    variant: "dark",
  },
  render: (args) => html`
    <cta-section
      .heading=${args.heading}
      .text=${args.text}
      .primaryButtonText=${args.primaryButtonText}
      .primaryButtonHref=${args.primaryButtonHref}
      .secondaryButtonText=${args.secondaryButtonText}
      .secondaryButtonHref=${args.secondaryButtonHref}
      variant=${args.variant}
    ></cta-section>
  `,
};
