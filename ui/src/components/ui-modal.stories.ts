import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-modal";
import "./ui-button";

const meta: Meta = {
  title: "Components/Modal",
  component: "ui-modal",
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    size: {
      control: "select",
      options: ["small", "medium", "large", "fullscreen"],
    },
    closeOnBackdrop: { control: "boolean" },
    showClose: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
    title: "Modal Title",
    size: "medium",
    closeOnBackdrop: true,
    showClose: true,
  },
  render: (args) => html`
    <ui-modal
      ?open=${args.open}
      .title=${args.title}
      size=${args.size}
      ?closeOnBackdrop=${args.closeOnBackdrop}
      ?showClose=${args.showClose}
    >
      <p>This is the modal content. You can put any content here.</p>
      <p>Click outside or press Escape to close.</p>

      <div slot="footer">
        <ui-button variant="secondary">Cancel</ui-button>
        <ui-button variant="primary">Confirm</ui-button>
      </div>
    </ui-modal>

    <div style="padding: 2rem;">
      <p>Background content behind the modal</p>
    </div>
  `,
};

export const Small: Story = {
  args: {
    open: true,
    title: "Confirm Action",
    size: "small",
    closeOnBackdrop: true,
    showClose: true,
  },
  render: (args) => html`
    <ui-modal
      ?open=${args.open}
      .title=${args.title}
      size=${args.size}
      ?closeOnBackdrop=${args.closeOnBackdrop}
      ?showClose=${args.showClose}
    >
      <p>Are you sure you want to delete this item?</p>

      <div slot="footer">
        <ui-button variant="secondary" size="small">Cancel</ui-button>
        <ui-button variant="danger" size="small">Delete</ui-button>
      </div>
    </ui-modal>
  `,
};

export const Large: Story = {
  args: {
    open: true,
    title: "Image Gallery",
    size: "large",
    closeOnBackdrop: true,
    showClose: true,
  },
  render: (args) => html`
    <ui-modal
      ?open=${args.open}
      .title=${args.title}
      size=${args.size}
      ?closeOnBackdrop=${args.closeOnBackdrop}
      ?showClose=${args.showClose}
    >
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
        ${[1, 2, 3, 4, 5, 6].map(
          (i) => html`
            <img
              src="https://picsum.photos/300/200?random=${i}"
              alt="Image ${i}"
              style="width: 100%; border-radius: 8px;"
            />
          `
        )}
      </div>
    </ui-modal>
  `,
};

export const NoHeader: Story = {
  args: {
    open: true,
    title: "",
    size: "medium",
    closeOnBackdrop: true,
    showClose: false,
  },
  render: (args) => html`
    <ui-modal
      ?open=${args.open}
      .title=${args.title}
      size=${args.size}
      ?closeOnBackdrop=${args.closeOnBackdrop}
      ?showClose=${args.showClose}
    >
      <div style="text-align: center; padding: 2rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h3 style="margin: 0 0 0.5rem 0;">Success!</h3>
        <p style="margin: 0; color: #64748b;">Your changes have been saved.</p>
      </div>

      <div slot="footer">
        <ui-button variant="primary">Close</ui-button>
      </div>
    </ui-modal>
  `,
};

export const WithForm: Story = {
  args: {
    open: true,
    title: "Edit Profile",
    size: "medium",
    closeOnBackdrop: false,
    showClose: true,
  },
  render: (args) => html`
    <ui-modal
      ?open=${args.open}
      .title=${args.title}
      size=${args.size}
      ?closeOnBackdrop=${args.closeOnBackdrop}
      ?showClose=${args.showClose}
    >
      <form style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Name</label>
          <input type="text" value="John Doe" style="width: 100%; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email</label>
          <input type="email" value="john@example.com" style="width: 100%; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Bio</label>
          <textarea rows="4" style="width: 100%; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px;">Software developer...</textarea>
        </div>
      </form>

      <div slot="footer">
        <ui-button variant="secondary">Cancel</ui-button>
        <ui-button variant="primary">Save Changes</ui-button>
      </div>
    </ui-modal>
  `,
};
