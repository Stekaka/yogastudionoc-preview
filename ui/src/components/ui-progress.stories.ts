import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-progress";

const meta: Meta = {
  title: "Components/Progress",
  component: "ui-progress",
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    showLabel: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 60,
    variant: "primary",
    size: "medium",
    showLabel: false,
    label: "",
  },
  render: (args) => html`
    <ui-progress
      value=${args.value}
      variant=${args.variant}
      size=${args.size}
      ?showLabel=${args.showLabel}
      label=${args.label}
    ></ui-progress>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-progress size="small" value="75" label="Small" showLabel></ui-progress>
      <ui-progress size="medium" value="75" label="Medium" showLabel></ui-progress>
      <ui-progress size="large" value="75" label="Large" showLabel></ui-progress>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-progress variant="primary" value="60" label="Primary" showLabel></ui-progress>
      <ui-progress variant="success" value="100" label="Success" showLabel></ui-progress>
      <ui-progress variant="warning" value="45" label="Warning" showLabel></ui-progress>
      <ui-progress variant="error" value="30" label="Error" showLabel></ui-progress>
    </div>
  `,
};

export const WithLabels: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-progress value="25" label="Uploading file..." showLabel></ui-progress>
      <ui-progress value="60" variant="primary" label="Processing..." showLabel></ui-progress>
      <ui-progress value="100" variant="success" label="Complete!" showLabel></ui-progress>
    </div>
  `,
};

export const ProgressStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <ui-progress value="0" label="Not started" showLabel></ui-progress>
      <ui-progress value="25" variant="primary" label="In progress" showLabel></ui-progress>
      <ui-progress value="50" variant="primary" label="Half way" showLabel></ui-progress>
      <ui-progress value="75" variant="warning" label="Almost done" showLabel></ui-progress>
      <ui-progress value="100" variant="success" label="Completed" showLabel></ui-progress>
    </div>
  `,
};

export const FileUpload: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">File Upload Progress</h3>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div
          style="padding: 1rem; border: 2px solid #e2e8f0; border-radius: 8px; display: flex; flex-direction: column; gap: 0.75rem;"
        >
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">document.pdf</span>
            <span style="font-size: 0.875rem; color: #64748b;">2.4 MB</span>
          </div>
          <ui-progress value="100" variant="success" showLabel></ui-progress>
        </div>

        <div
          style="padding: 1rem; border: 2px solid #e2e8f0; border-radius: 8px; display: flex; flex-direction: column; gap: 0.75rem;"
        >
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">image.jpg</span>
            <span style="font-size: 0.875rem; color: #64748b;">1.8 MB</span>
          </div>
          <ui-progress value="67" variant="primary" showLabel></ui-progress>
        </div>

        <div
          style="padding: 1rem; border: 2px solid #e2e8f0; border-radius: 8px; display: flex; flex-direction: column; gap: 0.75rem;"
        >
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 600;">video.mp4</span>
            <span style="font-size: 0.875rem; color: #64748b;">45.2 MB</span>
          </div>
          <ui-progress value="15" variant="primary" showLabel></ui-progress>
        </div>
      </div>
    </div>
  `,
};

export const SkillsProfile: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Skills & Expertise</h3>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <ui-progress value="95" variant="success" label="JavaScript" showLabel></ui-progress>
        <ui-progress value="88" variant="success" label="TypeScript" showLabel></ui-progress>
        <ui-progress value="82" variant="primary" label="React" showLabel></ui-progress>
        <ui-progress value="75" variant="primary" label="Node.js" showLabel></ui-progress>
        <ui-progress value="60" variant="warning" label="Python" showLabel></ui-progress>
      </div>
    </div>
  `,
};

export const GoalTracking: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3 style="margin: 0 0 1.5rem 0;">Monthly Goals</h3>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <p style="margin: 0 0 0.5rem 0; color: #64748b;">Sales Target: $50,000</p>
          <ui-progress value="120" variant="success" label="$60,000 / $50,000" showLabel></ui-progress>
        </div>

        <div>
          <p style="margin: 0 0 0.5rem 0; color: #64748b;">New Customers: 100</p>
          <ui-progress value="85" variant="primary" label="85 / 100" showLabel></ui-progress>
        </div>

        <div>
          <p style="margin: 0 0 0.5rem 0; color: #64748b;">Customer Satisfaction: 90%</p>
          <ui-progress value="78" variant="warning" label="78% / 90%" showLabel></ui-progress>
        </div>
      </div>
    </div>
  `,
};
