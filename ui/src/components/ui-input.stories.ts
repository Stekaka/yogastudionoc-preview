import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-input";

const meta: Meta = {
  title: "Components/Input",
  component: "ui-input",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    placeholder: { control: "text" },
    label: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: "text",
    size: "medium",
    placeholder: "Enter text...",
    label: "Label",
    disabled: false,
    required: false,
  },
  render: (args) => html`
    <ui-input
      type=${args.type}
      size=${args.size}
      placeholder=${args.placeholder}
      label=${args.label}
      ?disabled=${args.disabled}
      ?required=${args.required}
    ></ui-input>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ui-input size="small" placeholder="Small input" label="Small"></ui-input>
      <ui-input size="medium" placeholder="Medium input" label="Medium"></ui-input>
      <ui-input size="large" placeholder="Large input" label="Large"></ui-input>
    </div>
  `,
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ui-input type="text" placeholder="Enter your name" label="Name"></ui-input>
      <ui-input type="email" placeholder="you@example.com" label="Email"></ui-input>
      <ui-input type="password" placeholder="••••••••" label="Password"></ui-input>
      <ui-input type="number" placeholder="123" label="Number"></ui-input>
      <ui-input type="tel" placeholder="+46 70 123 45 67" label="Phone"></ui-input>
      <ui-input type="url" placeholder="https://example.com" label="Website"></ui-input>
    </div>
  `,
};

export const WithError: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ui-input
        type="email"
        placeholder="you@example.com"
        label="Email"
        error="Please enter a valid email address"
        value="invalid-email"
      ></ui-input>
      <ui-input
        type="password"
        placeholder="••••••••"
        label="Password"
        error="Password must be at least 8 characters"
      ></ui-input>
    </div>
  `,
};

export const Required: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ui-input type="text" placeholder="John Doe" label="Name" required></ui-input>
      <ui-input type="email" placeholder="you@example.com" label="Email" required></ui-input>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ui-input
        type="text"
        placeholder="Cannot edit"
        label="Disabled"
        value="Disabled value"
        disabled
      ></ui-input>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Contact Form</h3>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <ui-input type="text" placeholder="John Doe" label="Full Name" required></ui-input>
        <ui-input type="email" placeholder="you@example.com" label="Email" required></ui-input>
        <ui-input type="tel" placeholder="+46 70 123 45 67" label="Phone"></ui-input>
        <ui-input type="text" placeholder="Company AB" label="Company"></ui-input>
      </div>
    </div>
  `,
};
