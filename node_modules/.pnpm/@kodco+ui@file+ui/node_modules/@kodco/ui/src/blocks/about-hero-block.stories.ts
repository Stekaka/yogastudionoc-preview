import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./about-hero-block";

const meta: Meta = {
  title: "Blocks/AboutHeroBlock",
  component: "about-hero-block",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    imageSrc: { control: "text" },
    eyebrow: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    eyebrow: "Yogastudion · Göteborg",
    title: "En stilla studio för närvaro",
    subtitle:
      "Yogastudion är en varm, mjuk plats mitt i Göteborg – skapad för återhämtning, kontakt och kraft. Här får du andas ut, landa i kroppen och låta praktiken möta livet som det är.",
    imageSrc:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80",
  },
  render: (args) => html`
    <about-hero-block
      .eyebrow=${args.eyebrow}
      .title=${args.title}
      .subtitle=${args.subtitle}
      .imageSrc=${args.imageSrc}
    ></about-hero-block>
  `,
};

export const NoSubtitle: Story = {
  args: {
    eyebrow: "Om oss",
    title: "Vår vision",
    subtitle: "",
    imageSrc:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80",
  },
  render: (args) => html`
    <about-hero-block
      .eyebrow=${args.eyebrow}
      .title=${args.title}
      .subtitle=${args.subtitle}
      .imageSrc=${args.imageSrc}
    ></about-hero-block>
  `,
};

export const NoEyebrow: Story = {
  args: {
    eyebrow: "",
    title: "En oas för harmoni",
    subtitle: "Ett stilla rum mitt i staden.",
    imageSrc:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1600&q=80",
  },
  render: (args) => html`
    <about-hero-block
      .eyebrow=${args.eyebrow}
      .title=${args.title}
      .subtitle=${args.subtitle}
      .imageSrc=${args.imageSrc}
    ></about-hero-block>
  `,
};
