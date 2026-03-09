import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-image-upload";

const meta: Meta = {
  title: "Components/ImageUpload",
  component: "ui-image-upload",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <ui-image-upload label="Upload Logo"></ui-image-upload>
    </div>
  `,
};

export const WithAspectRatio: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Square (1:1) - Profile Picture</h3>
        <div style="max-width: 300px;">
          <ui-image-upload label="Profile Picture" aspectRatio="1/1"></ui-image-upload>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Wide (16:9) - Banner</h3>
        <div style="max-width: 600px;">
          <ui-image-upload label="Banner Image" aspectRatio="16/9"></ui-image-upload>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Standard (4:3) - Product</h3>
        <div style="max-width: 400px;">
          <ui-image-upload label="Product Image" aspectRatio="4/3"></ui-image-upload>
        </div>
      </div>
    </div>
  `,
};

export const WithPreview: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <ui-image-upload
        label="Company Logo"
        preview="https://via.placeholder.com/400x200/3b82f6/ffffff?text=Company+Logo"
      ></ui-image-upload>
    </div>
  `,
};

export const DifferentSizes: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
      <ui-image-upload
        label="Small (1MB)"
        maxSize="1"
      ></ui-image-upload>

      <ui-image-upload
        label="Medium (5MB)"
        maxSize="5"
      ></ui-image-upload>

      <ui-image-upload
        label="Large (10MB)"
        maxSize="10"
      ></ui-image-upload>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <h2 style="margin: 0 0 1.5rem 0;">Company Profile</h2>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <ui-image-upload
            label="Company Logo"
            aspectRatio="16/9"
            maxSize="2"
          ></ui-image-upload>
        </div>

        <div>
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Company Name</label>
          <input
            type="text"
            placeholder="Your Company Name"
            style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-family: inherit;"
          />
        </div>

        <div>
          <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Description</label>
          <textarea
            placeholder="Tell us about your company..."
            rows="4"
            style="width: 100%; padding: 0.75rem; border: 2px solid #e2e8f0; border-radius: 8px; font-family: inherit; resize: vertical;"
          ></textarea>
        </div>

        <button
          style="background: #3b82f6; color: white; border: none; padding: 0.875rem 2rem; border-radius: 8px; font-size: 1rem; cursor: pointer;"
        >
          Save Profile
        </button>
      </div>
    </div>
  `,
};

export const MultipleUploads: Story = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2 style="margin: 0 0 1.5rem 0;">Product Gallery</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
        <ui-image-upload label="Main Image" aspectRatio="4/3"></ui-image-upload>
        <ui-image-upload label="Image 2" aspectRatio="4/3"></ui-image-upload>
        <ui-image-upload label="Image 3" aspectRatio="4/3"></ui-image-upload>
        <ui-image-upload label="Image 4" aspectRatio="4/3"></ui-image-upload>
      </div>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <ui-image-upload
        label="Disabled Upload"
        disabled
      ></ui-image-upload>
    </div>
  `,
};
