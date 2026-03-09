import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-alert";

const meta: Meta = {
  title: "Components/Alert",
  component: "ui-alert",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    title: { control: "text" },
    dismissible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: "info",
    title: "",
    dismissible: false,
  },
  render: (args) => html`
    <ui-alert variant=${args.variant} title=${args.title} ?dismissible=${args.dismissible}>
      This is an alert message.
    </ui-alert>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ui-alert variant="info">This is an informational message.</ui-alert>
      <ui-alert variant="success">Your changes have been saved successfully!</ui-alert>
      <ui-alert variant="warning">Please review your information before proceeding.</ui-alert>
      <ui-alert variant="error">An error occurred while processing your request.</ui-alert>
    </div>
  `,
};

export const WithTitles: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ui-alert variant="info" title="Information">
        Here's some important information you should know about.
      </ui-alert>
      <ui-alert variant="success" title="Success!">
        Your profile has been updated successfully.
      </ui-alert>
      <ui-alert variant="warning" title="Warning">
        This action cannot be undone. Please proceed with caution.
      </ui-alert>
      <ui-alert variant="error" title="Error">
        Failed to connect to the server. Please try again later.
      </ui-alert>
    </div>
  `,
};

export const Dismissible: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ui-alert variant="info" title="Did you know?" dismissible>
        You can dismiss this alert by clicking the × button.
      </ui-alert>
      <ui-alert variant="success" title="Welcome!" dismissible>
        Your account has been created successfully. Start exploring now!
      </ui-alert>
      <ui-alert variant="warning" title="Session expiring" dismissible>
        Your session will expire in 5 minutes. Save your work to avoid losing changes.
      </ui-alert>
    </div>
  `,
};

export const LongContent: Story = {
  render: () => html`
    <ui-alert variant="info" title="Terms of Service Update" dismissible>
      We've updated our Terms of Service to provide better clarity on data usage and privacy
      practices. The changes will take effect on January 1, 2024. Please review the updated terms
      at your earliest convenience. If you have any questions or concerns, feel free to contact our
      support team.
    </ui-alert>
  `,
};

export const InContext: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h2 style="margin: 0 0 1rem 0;">Payment Information</h2>

      <ui-alert variant="warning" title="Security Notice" style="margin-bottom: 1.5rem;">
        Never share your credit card details with anyone. We will never ask for your password or
        security code via email or phone.
      </ui-alert>

      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;"
            >Card Number</label
          >
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px;"
          />
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Expiry</label>
            <input
              type="text"
              placeholder="MM/YY"
              style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px;"
            />
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">CVV</label>
            <input
              type="text"
              placeholder="123"
              style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px;"
            />
          </div>
        </div>
      </form>
    </div>
  `,
};

export const SystemMessages: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
      <ui-alert variant="success" title="File uploaded" dismissible>
        "document.pdf" has been uploaded successfully.
      </ui-alert>

      <ui-alert variant="error" title="Upload failed" dismissible>
        Failed to upload "image.jpg". File size exceeds 5MB limit.
      </ui-alert>

      <ui-alert variant="info" title="Maintenance scheduled">
        System maintenance is scheduled for tonight at 2:00 AM. Expected downtime: 30 minutes.
      </ui-alert>
    </div>
  `,
};
