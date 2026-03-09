import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-select";

const meta: Meta = {
  title: "Components/Select",
  component: "ui-select",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const countries = [
  { value: "se", label: "Sweden" },
  { value: "no", label: "Norway" },
  { value: "dk", label: "Denmark" },
  { value: "fi", label: "Finland" },
];

export const Default: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-select
        label="Country"
        placeholder="Select a country"
        .options=${countries}
      ></ui-select>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <ui-select size="small" label="Small" placeholder="Select..." .options=${countries}></ui-select>
      <ui-select
        size="medium"
        label="Medium"
        placeholder="Select..."
        .options=${countries}
      ></ui-select>
      <ui-select size="large" label="Large" placeholder="Select..." .options=${countries}></ui-select>
    </div>
  `,
};

export const WithValue: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-select
        label="Country"
        placeholder="Select a country"
        value="se"
        .options=${countries}
      ></ui-select>
    </div>
  `,
};

export const WithError: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-select
        label="Country"
        placeholder="Select a country"
        error="Please select a country"
        .options=${countries}
      ></ui-select>
    </div>
  `,
};

export const Required: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-select
        label="Country"
        placeholder="Select a country"
        required
        .options=${countries}
      ></ui-select>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-select
        label="Country"
        placeholder="Select a country"
        value="se"
        disabled
        .options=${countries}
      ></ui-select>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Registration Form</h3>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <ui-select
          label="Country"
          placeholder="Select your country"
          required
          .options=${countries}
        ></ui-select>
        <ui-select
          label="Industry"
          placeholder="Select your industry"
          .options=${[
            { value: "tech", label: "Technology" },
            { value: "finance", label: "Finance" },
            { value: "healthcare", label: "Healthcare" },
            { value: "retail", label: "Retail" },
            { value: "other", label: "Other" },
          ]}
        ></ui-select>
        <ui-select
          label="Company Size"
          placeholder="Select company size"
          .options=${[
            { value: "1-10", label: "1-10 employees" },
            { value: "11-50", label: "11-50 employees" },
            { value: "51-200", label: "51-200 employees" },
            { value: "201+", label: "201+ employees" },
          ]}
        ></ui-select>
      </div>
    </div>
  `,
};
