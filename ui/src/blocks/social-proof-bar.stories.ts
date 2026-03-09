import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./social-proof-bar";

const meta: Meta = {
  title: "Blocks/SocialProofBar",
  component: "social-proof-bar",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
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
    text: "Betrodda av ledande företag",
    variant: "light",
    logos: [
      {
        name: "Microsoft",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Microsoft",
      },
      {
        name: "Google",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Google",
      },
      {
        name: "Amazon",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Amazon",
      },
      {
        name: "Apple",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Apple",
      },
      {
        name: "Netflix",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Netflix",
      },
    ],
  },
  render: (args) => html`
    <social-proof-bar
      .text=${args.text}
      variant=${args.variant}
      .logos=${args.logos}
    ></social-proof-bar>
  `,
};

export const Dark: Story = {
  args: {
    text: "Över 10,000 företag litar på oss",
    variant: "dark",
    logos: [
      {
        name: "Spotify",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Spotify",
      },
      {
        name: "Airbnb",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Airbnb",
      },
      {
        name: "Uber",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Uber",
      },
      {
        name: "Slack",
        imageUrl: "https://via.placeholder.com/200x60/5E5E5E/ffffff?text=Slack",
      },
    ],
  },
  render: (args) => html`
    <social-proof-bar
      .text=${args.text}
      variant=${args.variant}
      .logos=${args.logos}
    ></social-proof-bar>
  `,
};

export const NoText: Story = {
  args: {
    text: "",
    variant: "light",
    logos: [
      {
        name: "Company 1",
        imageUrl: "https://via.placeholder.com/180x50/666666/ffffff?text=Company+1",
      },
      {
        name: "Company 2",
        imageUrl: "https://via.placeholder.com/180x50/666666/ffffff?text=Company+2",
      },
      {
        name: "Company 3",
        imageUrl: "https://via.placeholder.com/180x50/666666/ffffff?text=Company+3",
      },
      {
        name: "Company 4",
        imageUrl: "https://via.placeholder.com/180x50/666666/ffffff?text=Company+4",
      },
      {
        name: "Company 5",
        imageUrl: "https://via.placeholder.com/180x50/666666/ffffff?text=Company+5",
      },
      {
        name: "Company 6",
        imageUrl: "https://via.placeholder.com/180x50/666666/ffffff?text=Company+6",
      },
    ],
  },
  render: (args) => html`
    <social-proof-bar
      .text=${args.text}
      variant=${args.variant}
      .logos=${args.logos}
    ></social-proof-bar>
  `,
};

export const CustomText: Story = {
  args: {
    text: "Som används av 50,000+ användare världen över",
    variant: "light",
    logos: [
      {
        name: "Brand A",
        imageUrl: "https://via.placeholder.com/160x50/3B82F6/ffffff?text=Brand+A",
      },
      {
        name: "Brand B",
        imageUrl: "https://via.placeholder.com/160x50/10B981/ffffff?text=Brand+B",
      },
      {
        name: "Brand C",
        imageUrl: "https://via.placeholder.com/160x50/F59E0B/ffffff?text=Brand+C",
      },
    ],
  },
  render: (args) => html`
    <social-proof-bar
      .text=${args.text}
      variant=${args.variant}
      .logos=${args.logos}
    ></social-proof-bar>
  `,
};
