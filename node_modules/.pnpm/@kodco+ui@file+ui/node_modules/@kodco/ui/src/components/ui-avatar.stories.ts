import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-avatar";

const meta: Meta = {
  title: "Components/Avatar",
  component: "ui-avatar",
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    initials: { control: "text" },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "John Doe",
    size: "medium",
    shape: "circle",
  },
  render: (args) => html`
    <ui-avatar
      src=${args.src}
      alt=${args.alt}
      size=${args.size}
      shape=${args.shape}
    ></ui-avatar>
  `,
};

export const WithInitials: Story = {
  args: {
    alt: "Anna Svensson",
    size: "medium",
    shape: "circle",
  },
  render: (args) => html`
    <ui-avatar
      alt=${args.alt}
      size=${args.size}
      shape=${args.shape}
    ></ui-avatar>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ui-avatar size="small" src="https://i.pravatar.cc/150?img=2"></ui-avatar>
      <ui-avatar size="medium" src="https://i.pravatar.cc/150?img=3"></ui-avatar>
      <ui-avatar size="large" src="https://i.pravatar.cc/150?img=4"></ui-avatar>
      <ui-avatar size="xlarge" src="https://i.pravatar.cc/150?img=5"></ui-avatar>
    </div>
  `,
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ui-avatar shape="circle" src="https://i.pravatar.cc/150?img=6"></ui-avatar>
      <ui-avatar shape="square" src="https://i.pravatar.cc/150?img=7"></ui-avatar>
    </div>
  `,
};

export const InitialsVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ui-avatar alt="Anna Svensson"></ui-avatar>
      <ui-avatar alt="Erik Johansson"></ui-avatar>
      <ui-avatar alt="Maria"></ui-avatar>
      <ui-avatar initials="AB"></ui-avatar>
    </div>
  `,
};

export const Group: Story = {
  render: () => html`
    <div style="display: flex; align-items: center;">
      <ui-avatar src="https://i.pravatar.cc/150?img=8" style="margin-left: -8px;"></ui-avatar>
      <ui-avatar src="https://i.pravatar.cc/150?img=9" style="margin-left: -8px;"></ui-avatar>
      <ui-avatar src="https://i.pravatar.cc/150?img=10" style="margin-left: -8px;"></ui-avatar>
      <ui-avatar initials="+5" style="margin-left: -8px;"></ui-avatar>
    </div>
  `,
};

export const WithText: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ui-avatar src="https://i.pravatar.cc/150?img=11"></ui-avatar>
      <div>
        <div style="font-weight: 600;">Anna Svensson</div>
        <div style="font-size: 0.875rem; color: #64748b;">anna@example.com</div>
      </div>
    </div>
  `,
};
