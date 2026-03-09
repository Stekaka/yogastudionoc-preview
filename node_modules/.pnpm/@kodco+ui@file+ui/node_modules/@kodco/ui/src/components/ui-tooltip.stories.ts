import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-tooltip";
import "./ui-button";

const meta: Meta = {
  title: "Components/Tooltip",
  component: "ui-tooltip",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    text: "This is a tooltip",
    position: "top",
  },
  render: (args) => html`
    <div style="padding: 4rem; text-align: center;">
      <ui-tooltip text=${args.text} position=${args.position}>
        <span style="text-decoration: underline; cursor: help;">Hover me</span>
      </ui-tooltip>
    </div>
  `,
};

export const Positions: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 4rem; padding: 4rem;">
      <div style="text-align: center;">
        <ui-tooltip text="Tooltip on top" position="top">
          <span style="text-decoration: underline; cursor: help;">Top</span>
        </ui-tooltip>
      </div>

      <div style="text-align: center;">
        <ui-tooltip text="Tooltip on bottom" position="bottom">
          <span style="text-decoration: underline; cursor: help;">Bottom</span>
        </ui-tooltip>
      </div>

      <div style="text-align: center;">
        <ui-tooltip text="Tooltip on left" position="left">
          <span style="text-decoration: underline; cursor: help;">Left</span>
        </ui-tooltip>
      </div>

      <div style="text-align: center;">
        <ui-tooltip text="Tooltip on right" position="right">
          <span style="text-decoration: underline; cursor: help;">Right</span>
        </ui-tooltip>
      </div>
    </div>
  `,
};

export const WithButton: Story = {
  render: () => html`
    <div style="padding: 4rem; text-align: center; display: flex; gap: 2rem; justify-content: center;">
      <ui-tooltip text="Click to save changes" position="top">
        <ui-button variant="primary" size="medium">Save</ui-button>
      </ui-tooltip>

      <ui-tooltip text="This action cannot be undone" position="top">
        <ui-button variant="danger" size="medium">Delete</ui-button>
      </ui-tooltip>

      <ui-tooltip text="Download as PDF" position="bottom">
        <ui-button variant="secondary" size="medium">Export</ui-button>
      </ui-tooltip>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="padding: 4rem; display: flex; gap: 3rem; justify-content: center; align-items: center;">
      <ui-tooltip text="Help information" position="top">
        <span style="font-size: 1.5rem; cursor: help;">ℹ️</span>
      </ui-tooltip>

      <ui-tooltip text="Warning: This is important" position="top">
        <span style="font-size: 1.5rem; cursor: help;">⚠️</span>
      </ui-tooltip>

      <ui-tooltip text="Settings" position="right">
        <span style="font-size: 1.5rem; cursor: help;">⚙️</span>
      </ui-tooltip>

      <ui-tooltip text="More options" position="left">
        <span style="font-size: 1.5rem; cursor: help;">⋮</span>
      </ui-tooltip>
    </div>
  `,
};

export const LongText: Story = {
  render: () => html`
    <div style="padding: 4rem; text-align: center;">
      <ui-tooltip text="This is a much longer tooltip text that demonstrates how the component handles more content" position="top">
        <span style="text-decoration: underline; cursor: help;">Hover for long tooltip</span>
      </ui-tooltip>
    </div>
  `,
};
