import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./icon-grid";

const meta: Meta = {
  title: "Blocks/IconGrid",
  component: "icon-grid",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    columns: {
      control: "select",
      options: [2, 3, 4, 6],
    },
    variant: {
      control: "select",
      options: ["default", "bordered", "filled"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Våra tjänster",
    columns: 4,
    variant: "default",
    items: [
      {
        icon: "🎨",
        title: "Design",
        description: "Modern och användarvänlig design",
      },
      {
        icon: "💻",
        title: "Utveckling",
        description: "Robust och skalbar kod",
      },
      {
        icon: "🚀",
        title: "Lansering",
        description: "Smidig och säker driftsättning",
      },
      {
        icon: "📈",
        title: "Tillväxt",
        description: "Kontinuerlig optimering",
      },
    ],
  },
  render: (args) => html`
    <icon-grid
      .heading=${args.heading}
      columns=${args.columns}
      variant=${args.variant}
      .items=${args.items}
    ></icon-grid>
  `,
};

export const Bordered: Story = {
  args: {
    heading: "Så här fungerar det",
    columns: 3,
    variant: "bordered",
    items: [
      {
        icon: "1️⃣",
        title: "Kontakta oss",
        description: "Berätta om ditt projekt och dina behov",
      },
      {
        icon: "2️⃣",
        title: "Vi analyserar",
        description: "Vi går igenom kraven och tar fram en lösning",
      },
      {
        icon: "3️⃣",
        title: "Vi levererar",
        description: "Du får en färdig produkt som överträffar förväntningarna",
      },
    ],
  },
  render: (args) => html`
    <icon-grid
      .heading=${args.heading}
      columns=${args.columns}
      variant=${args.variant}
      .items=${args.items}
    ></icon-grid>
  `,
};

export const Filled: Story = {
  args: {
    heading: "Teknologier vi använder",
    columns: 6,
    variant: "filled",
    items: [
      { icon: "⚛️", title: "React" },
      { icon: "🅰️", title: "Angular" },
      { icon: "💚", title: "Vue" },
      { icon: "🔷", title: "TypeScript" },
      { icon: "🎨", title: "Tailwind" },
      { icon: "📦", title: "Node.js" },
    ],
  },
  render: (args) => html`
    <icon-grid
      .heading=${args.heading}
      columns=${args.columns}
      variant=${args.variant}
      .items=${args.items}
    ></icon-grid>
  `,
};

export const TwoColumns: Story = {
  args: {
    heading: "Våra värderingar",
    columns: 2,
    variant: "default",
    items: [
      {
        icon: "💎",
        title: "Kvalitet",
        description: "Vi levererar alltid högsta kvalitet i varje projekt. Inga kompromisser.",
      },
      {
        icon: "🤝",
        title: "Partnerskap",
        description: "Vi ser våra kunder som partners och arbetar tillsammans mot gemensamma mål.",
      },
    ],
  },
  render: (args) => html`
    <icon-grid
      .heading=${args.heading}
      columns=${args.columns}
      variant=${args.variant}
      .items=${args.items}
    ></icon-grid>
  `,
};

export const NoHeading: Story = {
  args: {
    heading: "",
    columns: 4,
    variant: "filled",
    items: [
      { icon: "✅", title: "Snabb leverans" },
      { icon: "🔒", title: "Säker hantering" },
      { icon: "💰", title: "Fast pris" },
      { icon: "🎯", title: "Måluppfyllelse" },
    ],
  },
  render: (args) => html`
    <icon-grid
      .heading=${args.heading}
      columns=${args.columns}
      variant=${args.variant}
      .items=${args.items}
    ></icon-grid>
  `,
};
