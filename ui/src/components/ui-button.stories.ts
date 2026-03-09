import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-button";
import "./ui-spinner";

const meta: Meta = {
  title: "Components/Button",
  component: "ui-button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    href: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  render: (args) => html`
    <ui-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?fullWidth=${args.fullWidth}
    >
      Click me
    </ui-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ui-button variant="primary" size="medium">Primary</ui-button>
      <ui-button variant="secondary" size="medium">Secondary</ui-button>
      <ui-button variant="danger" size="medium">Danger</ui-button>
      <ui-button variant="ghost" size="medium">Ghost</ui-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <ui-button size="small">Small</ui-button>
      <ui-button size="medium">Medium</ui-button>
      <ui-button size="large">Large</ui-button>
    </div>
  `,
};

export const Loading: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ui-button variant="primary" size="medium" loading>Loading...</ui-button>
      <ui-button variant="secondary" size="medium" loading>Processing</ui-button>
      <ui-button variant="danger" size="medium" loading>Deleting</ui-button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ui-button variant="primary" size="medium" disabled>Disabled Primary</ui-button>
      <ui-button variant="secondary" size="medium" disabled>Disabled Secondary</ui-button>
      <ui-button variant="danger" size="medium" disabled>Disabled Danger</ui-button>
    </div>
  `,
};

export const FullWidth: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-button variant="primary" size="medium" fullWidth>Full Width Button</ui-button>
    </div>
  `,
};

export const AsLink: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ui-button variant="primary" size="medium" href="#link">Link Button</ui-button>
      <ui-button variant="secondary" size="medium" href="https://example.com">External Link</ui-button>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ui-button variant="primary" size="medium">
        <span>📧</span>
        Send Email
      </ui-button>
      <ui-button variant="secondary" size="medium">
        Download
        <span>⬇️</span>
      </ui-button>
      <ui-button variant="danger" size="medium">
        <span>🗑️</span>
        Delete
      </ui-button>
    </div>
  `,
};
