import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./newsletter-signup";

const meta: Meta = {
  title: "Blocks/NewsletterSignup",
  component: "newsletter-signup",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    text: { control: "text" },
    placeholder: { control: "text" },
    buttonText: { control: "text" },
    variant: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    background: {
      control: "select",
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
  args: {
    heading: "Få vårt nyhetsbrev",
    text: "Få de senaste nyheterna och uppdateringarna direkt i din inkorg.",
    placeholder: "Din e-postadress",
    buttonText: "Prenumerera",
    variant: "horizontal",
    background: "light",
    formAction: "",
  },
  render: (args) => html`
    <newsletter-signup
      .heading=${args.heading}
      .text=${args.text}
      .placeholder=${args.placeholder}
      .buttonText=${args.buttonText}
      variant=${args.variant}
      background=${args.background}
      .formAction=${args.formAction}
    ></newsletter-signup>
  `,
};

export const Dark: Story = {
  args: {
    heading: "Missa inga uppdateringar",
    text: "Bli först med att få våra senaste tips, guider och nyheter.",
    placeholder: "din@email.se",
    buttonText: "Registrera dig",
    variant: "horizontal",
    background: "dark",
    formAction: "",
  },
  render: (args) => html`
    <newsletter-signup
      .heading=${args.heading}
      .text=${args.text}
      .placeholder=${args.placeholder}
      .buttonText=${args.buttonText}
      variant=${args.variant}
      background=${args.background}
      .formAction=${args.formAction}
    ></newsletter-signup>
  `,
};

export const Vertical: Story = {
  args: {
    heading: "Gå med i vårt community",
    text: "Över 10,000 prenumeranter får våra veckovisa uppdateringar.",
    placeholder: "E-postadress",
    buttonText: "Gå med",
    variant: "vertical",
    background: "light",
    formAction: "",
  },
  render: (args) => html`
    <newsletter-signup
      .heading=${args.heading}
      .text=${args.text}
      .placeholder=${args.placeholder}
      .buttonText=${args.buttonText}
      variant=${args.variant}
      background=${args.background}
      .formAction=${args.formAction}
    ></newsletter-signup>
  `,
};

export const Minimal: Story = {
  args: {
    heading: "Nyhetsbrev",
    text: "En gång i veckan, inga spam.",
    placeholder: "Email",
    buttonText: "→",
    variant: "horizontal",
    background: "light",
    formAction: "",
  },
  render: (args) => html`
    <newsletter-signup
      .heading=${args.heading}
      .text=${args.text}
      .placeholder=${args.placeholder}
      .buttonText=${args.buttonText}
      variant=${args.variant}
      background=${args.background}
      .formAction=${args.formAction}
    ></newsletter-signup>
  `,
};
