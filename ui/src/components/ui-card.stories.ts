import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-card";

const meta: Meta = {
  title: "Components/Card",
  component: "ui-card",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated"],
    },
    padding: {
      control: "select",
      options: ["none", "small", "medium", "large"],
    },
    hoverable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: "default",
    padding: "medium",
    hoverable: false,
  },
  render: (args) => html`
    <ui-card variant=${args.variant} padding=${args.padding} ?hoverable=${args.hoverable}>
      <h3 style="margin: 0 0 0.5rem 0;">Card Title</h3>
      <p style="margin: 0; color: #64748b;">
        This is a card component with some content inside.
      </p>
    </ui-card>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
      <ui-card variant="default" padding="medium">
        <h4 style="margin: 0 0 0.5rem 0;">Default</h4>
        <p style="margin: 0; color: #64748b; font-size: 0.875rem;">Subtle shadow</p>
      </ui-card>

      <ui-card variant="bordered" padding="medium">
        <h4 style="margin: 0 0 0.5rem 0;">Bordered</h4>
        <p style="margin: 0; color: #64748b; font-size: 0.875rem;">With border</p>
      </ui-card>

      <ui-card variant="elevated" padding="medium">
        <h4 style="margin: 0 0 0.5rem 0;">Elevated</h4>
        <p style="margin: 0; color: #64748b; font-size: 0.875rem;">Stronger shadow</p>
      </ui-card>
    </div>
  `,
};

export const Hoverable: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
      <ui-card hoverable padding="medium">
        <h4 style="margin: 0 0 0.5rem 0;">Hover me</h4>
        <p style="margin: 0; color: #64748b; font-size: 0.875rem;">I lift on hover</p>
      </ui-card>

      <ui-card hoverable variant="bordered" padding="medium">
        <h4 style="margin: 0 0 0.5rem 0;">Hover me too</h4>
        <p style="margin: 0; color: #64748b; font-size: 0.875rem;">Border variant</p>
      </ui-card>

      <ui-card hoverable variant="elevated" padding="medium">
        <h4 style="margin: 0 0 0.5rem 0;">And me</h4>
        <p style="margin: 0; color: #64748b; font-size: 0.875rem;">Elevated variant</p>
      </ui-card>
    </div>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <ui-card padding="none" hoverable>
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
        alt="Example"
        style="width: 100%; border-radius: 12px 12px 0 0;"
      />
      <div style="padding: 1.5rem;">
        <h3 style="margin: 0 0 0.5rem 0;">Card with image</h3>
        <p style="margin: 0 0 1rem 0; color: #64748b;">
          Use padding="none" to have full-width images.
        </p>
        <ui-button variant="primary" size="small">Learn More</ui-button>
      </div>
    </ui-card>
  `,
};

export const Paddings: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
      <ui-card padding="none" variant="bordered">
        <div style="padding: 0.5rem; background: #f1f5f9; text-align: center;">padding="none"</div>
      </ui-card>

      <ui-card padding="small" variant="bordered">
        <div style="background: #f1f5f9; text-align: center;">padding="small"</div>
      </ui-card>

      <ui-card padding="medium" variant="bordered">
        <div style="background: #f1f5f9; text-align: center;">padding="medium"</div>
      </ui-card>

      <ui-card padding="large" variant="bordered">
        <div style="background: #f1f5f9; text-align: center;">padding="large"</div>
      </ui-card>
    </div>
  `,
};
