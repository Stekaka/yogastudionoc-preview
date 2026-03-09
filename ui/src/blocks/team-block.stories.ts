import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./team-block";

const meta: Meta = {
  title: "Blocks/TeamBlock",
  component: "team-block",
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
    heading: "Vårt team",
    subheading: "Möt personerna bakom företaget",
    members: [
      {
        name: "Anna Svensson",
        role: "VD & Grundare",
        bio: "20 års erfarenhet inom digital transformation och affärsutveckling.",
        imageUrl: "https://i.pravatar.cc/400?img=1",
        email: "anna@example.com",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Erik Johansson",
        role: "CTO",
        bio: "Systemarkitekt med passion för skalbar och modern teknik.",
        imageUrl: "https://i.pravatar.cc/400?img=3",
        email: "erik@example.com",
        linkedin: "https://linkedin.com",
      },
      {
        name: "Maria Andersson",
        role: "Design Lead",
        bio: "UX/UI designer som skapar användarvänliga och visuellt tilltalande upplevelser.",
        imageUrl: "https://i.pravatar.cc/400?img=5",
        email: "maria@example.com",
        twitter: "https://twitter.com",
      },
    ],
  },
  render: (args) => html`
    <team-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .members=${args.members}
    ></team-block>
  `,
};

export const SixMembers: Story = {
  args: {
    heading: "Möt vårt team",
    subheading: "Vi är en grupp passionerade experter",
    members: [
      {
        name: "Anna Svensson",
        role: "VD",
        imageUrl: "https://i.pravatar.cc/400?img=1",
      },
      {
        name: "Erik Johansson",
        role: "CTO",
        imageUrl: "https://i.pravatar.cc/400?img=3",
      },
      {
        name: "Maria Andersson",
        role: "Design Lead",
        imageUrl: "https://i.pravatar.cc/400?img=5",
      },
      {
        name: "Lisa Berg",
        role: "Marketing Manager",
        imageUrl: "https://i.pravatar.cc/400?img=9",
      },
      {
        name: "Peter Lundqvist",
        role: "Senior Developer",
        imageUrl: "https://i.pravatar.cc/400?img=12",
      },
      {
        name: "Johan Karlsson",
        role: "Project Manager",
        imageUrl: "https://i.pravatar.cc/400?img=13",
      },
    ],
  },
  render: (args) => html`
    <team-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .members=${args.members}
    ></team-block>
  `,
};

export const NoImages: Story = {
  args: {
    heading: "Ledningsgruppen",
    subheading: "",
    members: [
      {
        name: "Anna Svensson",
        role: "VD",
        bio: "Ansvarar för strategisk ledning och affärsutveckling.",
        email: "anna@example.com",
      },
      {
        name: "Erik Johansson",
        role: "CTO",
        bio: "Leder teknisk utveckling och innovation.",
        email: "erik@example.com",
      },
      {
        name: "Maria Andersson",
        role: "CFO",
        bio: "Ekonomiansvarig och finansiell planering.",
        email: "maria@example.com",
      },
    ],
  },
  render: (args) => html`
    <team-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .members=${args.members}
    ></team-block>
  `,
};
