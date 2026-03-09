import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-divider";

const meta: Meta = {
  title: "Components/Divider",
  component: "ui-divider",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
    },
    color: {
      control: "select",
      options: ["default", "light", "dark"],
    },
    spacing: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "default",
    spacing: "medium",
  },
  render: (args) => html`
    <div>
      <p>Content above divider</p>
      <ui-divider variant=${args.variant} color=${args.color} spacing=${args.spacing}></ui-divider>
      <p>Content below divider</p>
    </div>
  `,
};

export const WithText: Story = {
  args: {
    variant: "solid",
    color: "default",
    spacing: "medium",
    text: "OR",
  },
  render: (args) => html`
    <div>
      <p>Sign in with email</p>
      <ui-divider variant=${args.variant} color=${args.color} spacing=${args.spacing} text=${args.text}></ui-divider>
      <p>Sign in with social</p>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div>
      <p>Solid divider:</p>
      <ui-divider variant="solid"></ui-divider>

      <p>Dashed divider:</p>
      <ui-divider variant="dashed"></ui-divider>

      <p>Dotted divider:</p>
      <ui-divider variant="dotted"></ui-divider>
    </div>
  `,
};

export const Spacing: Story = {
  render: () => html`
    <div>
      <p>Small spacing:</p>
      <ui-divider spacing="small"></ui-divider>
      <p>Next content</p>

      <p>Medium spacing (default):</p>
      <ui-divider spacing="medium"></ui-divider>
      <p>Next content</p>

      <p>Large spacing:</p>
      <ui-divider spacing="large"></ui-divider>
      <p>Next content</p>
    </div>
  `,
};

export const OnDarkBackground: Story = {
  render: () => html`
    <div style="background: #0f172a; padding: 2rem; border-radius: 8px;">
      <p style="color: white;">Content on dark background</p>
      <ui-divider color="light"></ui-divider>
      <p style="color: white;">More content</p>
      <ui-divider color="light" text="Section"></ui-divider>
      <p style="color: white;">Another section</p>
    </div>
  `,
};

export const WithTextVariants: Story = {
  render: () => html`
    <div>
      <p>Login options</p>
      <ui-divider text="OR"></ui-divider>

      <p>Features list</p>
      <ui-divider text="More Features"></ui-divider>

      <p>Pricing plans</p>
      <ui-divider text="⭐ Most Popular"></ui-divider>

      <p>Content</p>
    </div>
  `,
};
