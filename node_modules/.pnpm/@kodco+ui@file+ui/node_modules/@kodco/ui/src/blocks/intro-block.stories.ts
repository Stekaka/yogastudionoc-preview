import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./intro-block";

const meta: Meta = {
  title: "Blocks/IntroBlock",
  component: "intro-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    text: { control: "text" },
    imageUrl: { control: "text" },
    imagePosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Om oss",
    text: "Vi är ett företag som brinner för att skapa innovativa lösningar. Med över 10 års erfarenhet hjälper vi våra kunder att nå sina mål genom digitala tjänster och strategisk rådgivning.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imagePosition: "right",
  },
  render: (args) => html`
    <intro-block
      .heading=${args.heading}
      .text=${args.text}
      .imageUrl=${args.imageUrl}
      .imagePosition=${args.imagePosition}
    ></intro-block>
  `,
};

export const ImageLeft: Story = {
  args: {
    ...Default.args,
    imagePosition: "left",
  },
  render: (args) => html`
    <intro-block
      .heading=${args.heading}
      .text=${args.text}
      .imageUrl=${args.imageUrl}
      .imagePosition=${args.imagePosition}
    ></intro-block>
  `,
};

export const NoImage: Story = {
  args: {
    heading: "Vår vision",
    text: "Vi tror på en framtid där teknologi och mänsklig kreativitet går hand i hand. Genom att kombinera det bästa av båda världarna skapar vi lösningar som gör skillnad.",
    imageUrl: "",
    imagePosition: "right",
  },
  render: (args) => html`
    <intro-block
      .heading=${args.heading}
      .text=${args.text}
      .imageUrl=${args.imageUrl}
      .imagePosition=${args.imagePosition}
    ></intro-block>
  `,
};
