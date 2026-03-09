import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-checkbox";

const meta: Meta = {
  title: "Components/Checkbox",
  component: "ui-checkbox",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: "medium",
    label: "Checkbox label",
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <ui-checkbox
      size=${args.size}
      label=${args.label}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ui-checkbox>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ui-checkbox size="small" label="Small checkbox"></ui-checkbox>
      <ui-checkbox size="medium" label="Medium checkbox"></ui-checkbox>
      <ui-checkbox size="large" label="Large checkbox"></ui-checkbox>
    </div>
  `,
};

export const Checked: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ui-checkbox label="Unchecked"></ui-checkbox>
      <ui-checkbox label="Checked" checked></ui-checkbox>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ui-checkbox label="Disabled unchecked" disabled></ui-checkbox>
      <ui-checkbox label="Disabled checked" checked disabled></ui-checkbox>
    </div>
  `,
};

export const WithoutLabel: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ui-checkbox></ui-checkbox>
      <ui-checkbox checked></ui-checkbox>
      <ui-checkbox disabled></ui-checkbox>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Preferences</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <ui-checkbox label="I agree to the terms and conditions" checked></ui-checkbox>
        <ui-checkbox label="Subscribe to newsletter"></ui-checkbox>
        <ui-checkbox label="Send me product updates"></ui-checkbox>
        <ui-checkbox label="Enable two-factor authentication"></ui-checkbox>
      </div>
    </div>
  `,
};

export const CheckboxGroup: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1rem 0;">Select your interests</h3>
      <div
        style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; border: 2px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;"
      >
        <ui-checkbox label="Web Development"></ui-checkbox>
        <ui-checkbox label="Mobile Development"></ui-checkbox>
        <ui-checkbox label="UI/UX Design"></ui-checkbox>
        <ui-checkbox label="Marketing"></ui-checkbox>
        <ui-checkbox label="SEO"></ui-checkbox>
        <ui-checkbox label="Content Writing"></ui-checkbox>
      </div>
    </div>
  `,
};
