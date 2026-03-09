import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-badge";

const meta: Meta = {
  title: "Components/Badge",
  component: "ui-badge",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: "default",
    size: "medium",
  },
  render: (args) => html`
    <ui-badge variant=${args.variant} size=${args.size}>Badge</ui-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ui-badge variant="default" size="medium">Default</ui-badge>
      <ui-badge variant="primary" size="medium">Primary</ui-badge>
      <ui-badge variant="success" size="medium">Success</ui-badge>
      <ui-badge variant="warning" size="medium">Warning</ui-badge>
      <ui-badge variant="danger" size="medium">Danger</ui-badge>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <ui-badge size="small">Small</ui-badge>
      <ui-badge size="medium">Medium</ui-badge>
      <ui-badge size="large">Large</ui-badge>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ui-badge variant="success" size="medium">✓ Active</ui-badge>
      <ui-badge variant="warning" size="medium">⚠ Warning</ui-badge>
      <ui-badge variant="danger" size="medium">✕ Error</ui-badge>
      <ui-badge variant="primary" size="medium">🔥 Hot</ui-badge>
    </div>
  `,
};

export const UseCases: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Status badges</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <ui-badge variant="success" size="small">Published</ui-badge>
          <ui-badge variant="warning" size="small">Draft</ui-badge>
          <ui-badge variant="danger" size="small">Archived</ui-badge>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Category badges</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <ui-badge variant="primary" size="medium">Design</ui-badge>
          <ui-badge variant="primary" size="medium">Development</ui-badge>
          <ui-badge variant="primary" size="medium">Marketing</ui-badge>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Product badges</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <ui-badge variant="danger" size="medium">Sale</ui-badge>
          <ui-badge variant="success" size="medium">New</ui-badge>
          <ui-badge variant="warning" size="medium">Limited</ui-badge>
        </div>
      </div>
    </div>
  `,
};
