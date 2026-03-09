import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-textarea";

const meta: Meta = {
  title: "Components/Textarea",
  component: "ui-textarea",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    rows: { control: "number" },
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
    size: "medium",
    rows: 4,
    placeholder: "Enter your message...",
    label: "Message",
    disabled: false,
    required: false,
  },
  render: (args) => html`
    <ui-textarea
      size=${args.size}
      rows=${args.rows}
      placeholder=${args.placeholder}
      label=${args.label}
      ?disabled=${args.disabled}
      ?required=${args.required}
    ></ui-textarea>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
      <ui-textarea size="small" rows="3" placeholder="Small textarea" label="Small"></ui-textarea>
      <ui-textarea
        size="medium"
        rows="4"
        placeholder="Medium textarea"
        label="Medium"
      ></ui-textarea>
      <ui-textarea size="large" rows="5" placeholder="Large textarea" label="Large"></ui-textarea>
    </div>
  `,
};

export const Rows: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
      <ui-textarea rows="2" placeholder="2 rows" label="Compact (2 rows)"></ui-textarea>
      <ui-textarea rows="4" placeholder="4 rows" label="Standard (4 rows)"></ui-textarea>
      <ui-textarea rows="8" placeholder="8 rows" label="Large (8 rows)"></ui-textarea>
    </div>
  `,
};

export const WithError: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <ui-textarea
        placeholder="Write your message here..."
        label="Message"
        error="Message must be at least 10 characters"
        value="Too short"
      ></ui-textarea>
    </div>
  `,
};

export const Required: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <ui-textarea
        placeholder="Tell us about your project..."
        label="Project Description"
        rows="6"
        required
      ></ui-textarea>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <ui-textarea
        placeholder="Cannot edit"
        label="Disabled"
        value="This textarea is disabled and cannot be edited."
        disabled
      ></ui-textarea>
    </div>
  `,
};

export const ContactForm: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h3 style="margin: 0 0 1.5rem 0;">Send us a message</h3>
      <ui-textarea
        placeholder="Tell us what you need help with..."
        label="Your Message"
        rows="6"
        required
      ></ui-textarea>
    </div>
  `,
};
