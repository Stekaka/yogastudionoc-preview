import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-toggle";

const meta: Meta = {
  title: "Components/Toggle",
  component: "ui-toggle",
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
    label: "Toggle label",
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <ui-toggle
      size=${args.size}
      label=${args.label}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
    ></ui-toggle>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-toggle size="small" label="Small toggle"></ui-toggle>
      <ui-toggle size="medium" label="Medium toggle"></ui-toggle>
      <ui-toggle size="large" label="Large toggle"></ui-toggle>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-toggle label="Off"></ui-toggle>
      <ui-toggle label="On" checked></ui-toggle>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-toggle label="Disabled off" disabled></ui-toggle>
      <ui-toggle label="Disabled on" checked disabled></ui-toggle>
    </div>
  `,
};

export const WithoutLabel: Story = {
  render: () => html`
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <ui-toggle></ui-toggle>
      <ui-toggle checked></ui-toggle>
      <ui-toggle disabled></ui-toggle>
    </div>
  `,
};

export const SettingsPanel: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Notification Settings</h3>
      <div
        style="display: flex; flex-direction: column; gap: 1.5rem; border: 2px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;"
      >
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Email Notifications</div>
            <div style="font-size: 0.875rem; color: #64748b;">
              Receive updates via email
            </div>
          </div>
          <ui-toggle checked></ui-toggle>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">Push Notifications</div>
            <div style="font-size: 0.875rem; color: #64748b;">
              Get push notifications on your device
            </div>
          </div>
          <ui-toggle></ui-toggle>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600; margin-bottom: 0.25rem;">SMS Notifications</div>
            <div style="font-size: 0.875rem; color: #64748b;">
              Receive important alerts via SMS
            </div>
          </div>
          <ui-toggle checked></ui-toggle>
        </div>
      </div>
    </div>
  `,
};

export const PrivacySettings: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Privacy Settings</h3>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <ui-toggle label="Make my profile public" checked></ui-toggle>
        <ui-toggle label="Show my email address"></ui-toggle>
        <ui-toggle label="Allow search engines to index my profile"></ui-toggle>
        <ui-toggle label="Enable two-factor authentication" checked></ui-toggle>
      </div>
    </div>
  `,
};
