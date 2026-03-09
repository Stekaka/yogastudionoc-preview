import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./stats-block";

const meta: Meta = {
  title: "Blocks/StatsBlock",
  component: "stats-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    variant: {
      control: "select",
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
  args: {
    heading: "Vi levererar resultat",
    subheading: "Siffror som talar för sig själva",
    variant: "light",
    stats: [
      { value: "500", suffix: "+", label: "Nöjda kunder" },
      { value: "15", label: "Års erfarenhet" },
      { value: "98", suffix: "%", label: "Nöjdhetsgrad" },
      { value: "1000", suffix: "+", label: "Projekt levererade" },
    ],
  },
  render: (args) => html`
    <stats-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      variant=${args.variant}
      .stats=${args.stats}
    ></stats-block>
  `,
};

export const Dark: Story = {
  args: {
    heading: "Imponerande siffror",
    subheading: "Vi växer tillsammans med våra kunder",
    variant: "dark",
    stats: [
      { value: "250", suffix: "M", label: "Användare världen över" },
      { value: "99.9", suffix: "%", label: "Uptime" },
      { value: "24", suffix: "/7", label: "Support" },
      { value: "50", suffix: "+", label: "Länder" },
    ],
  },
  render: (args) => html`
    <stats-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      variant=${args.variant}
      .stats=${args.stats}
    ></stats-block>
  `,
};

export const NoHeading: Story = {
  args: {
    heading: "",
    subheading: "",
    variant: "light",
    stats: [
      { value: "10", suffix: "K+", label: "Aktiva användare" },
      { value: "4.9", suffix: "/5", label: "Kundbetyg" },
      { value: "100", suffix: "+", label: "Teammedlemmar" },
    ],
  },
  render: (args) => html`
    <stats-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      variant=${args.variant}
      .stats=${args.stats}
    ></stats-block>
  `,
};

export const Financial: Story = {
  args: {
    heading: "Ekonomiska milstolpar 2025",
    subheading: "",
    variant: "light",
    stats: [
      { value: "150", prefix: "$", suffix: "M", label: "Omsättning" },
      { value: "45", suffix: "%", label: "Tillväxt YoY" },
      { value: "25", prefix: "$", suffix: "M", label: "Vinst" },
      { value: "500", suffix: "+", label: "Anställda" },
    ],
  },
  render: (args) => html`
    <stats-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      variant=${args.variant}
      .stats=${args.stats}
    ></stats-block>
  `,
};

export const TwoStats: Story = {
  args: {
    heading: "Varför välja oss?",
    subheading: "",
    variant: "dark",
    stats: [
      { value: "20", suffix: "+", label: "Års branscherfarenhet" },
      { value: "100", suffix: "%", label: "Nöjdhetsgara nti" },
    ],
  },
  render: (args) => html`
    <stats-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      variant=${args.variant}
      .stats=${args.stats}
    ></stats-block>
  `,
};
