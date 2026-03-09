import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./contact-block";

const meta: Meta = {
  title: "Blocks/ContactBlock",
  component: "contact-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    formAction: { control: "text" },
    layout: {
      control: "select",
      options: ["split", "centered", "form-only"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Split: Story = {
  args: {
    heading: "Kontakta oss",
    subheading: "Vi hjälper dig gärna! Fyll i formuläret så återkommer vi inom 24 timmar.",
    layout: "split",
    formAction: "",
    contactInfo: {
      email: "hej@example.com",
      phone: "+46 70 123 45 67",
      address: "Storgatan 1, 111 22 Stockholm",
    },
  },
  render: (args) => html`
    <contact-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .formAction=${args.formAction}
      .contactInfo=${args.contactInfo}
    ></contact-block>
  `,
};

export const Centered: Story = {
  args: {
    heading: "Hör av dig",
    subheading: "Vi svarar inom 24 timmar",
    layout: "centered",
    formAction: "",
    contactInfo: {
      email: "info@example.com",
      phone: "+46 8 123 456 78",
    },
  },
  render: (args) => html`
    <contact-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .formAction=${args.formAction}
      .contactInfo=${args.contactInfo}
    ></contact-block>
  `,
};

export const FormOnly: Story = {
  args: {
    heading: "Skicka ett meddelande",
    subheading: "Fyll i formuläret nedan så återkommer vi så snart som möjligt",
    layout: "form-only",
    formAction: "",
  },
  render: (args) => html`
    <contact-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .formAction=${args.formAction}
    ></contact-block>
  `,
};

export const AllContactInfo: Story = {
  args: {
    heading: "Välkommen att kontakta oss",
    subheading: "",
    layout: "split",
    formAction: "",
    contactInfo: {
      email: "kontakt@example.se",
      phone: "+46 70 987 65 43",
      address: "Kungsgatan 45\n411 15 Göteborg\nSverige",
    },
  },
  render: (args) => html`
    <contact-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .formAction=${args.formAction}
      .contactInfo=${args.contactInfo}
    ></contact-block>
  `,
};
