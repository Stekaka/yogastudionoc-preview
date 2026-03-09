import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-spinner";

const meta: Meta = {
  title: "Components/Spinner",
  component: "ui-spinner",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "white"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => html`
    <ui-spinner size=${args.size} color=${args.color}></ui-spinner>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div style="text-align: center;">
        <ui-spinner size="small"></ui-spinner>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Small</p>
      </div>
      <div style="text-align: center;">
        <ui-spinner size="medium"></ui-spinner>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Medium</p>
      </div>
      <div style="text-align: center;">
        <ui-spinner size="large"></ui-spinner>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Large</p>
      </div>
    </div>
  `,
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <div style="text-align: center;">
        <ui-spinner color="primary"></ui-spinner>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
      </div>
      <div style="text-align: center;">
        <ui-spinner color="secondary"></ui-spinner>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Secondary</p>
      </div>
      <div style="text-align: center; background: #0f172a; padding: 1rem; border-radius: 8px;">
        <ui-spinner color="white"></ui-spinner>
        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: white;">White</p>
      </div>
    </div>
  `,
};

export const InButton: Story = {
  render: () => html`
    <button
      style="
        padding: 0.75rem 1.5rem;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
      "
    >
      <ui-spinner size="small" color="white"></ui-spinner>
      Loading...
    </button>
  `,
};

export const Centered: Story = {
  render: () => html`
    <div
      style="
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8fafc;
        border-radius: 8px;
      "
    >
      <ui-spinner size="large"></ui-spinner>
    </div>
  `,
};
