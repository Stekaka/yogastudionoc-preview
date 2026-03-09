import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./page-hero";

const meta: Meta = {
  title: "Blocks/PageHero",
  component: "page-hero",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: "Välkommen till vårt företag",
  },
  render: (args) => html`
    <page-hero .title=${args.title}></page-hero>
  `,
};

export const LongTitle: Story = {
  args: {
    title: "Vi hjälper företag att växa och nå sina mål med moderna digitala lösningar",
  },
  render: (args) => html`
    <page-hero .title=${args.title}></page-hero>
  `,
};
