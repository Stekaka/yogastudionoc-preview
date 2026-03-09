import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-radio";

const meta: Meta = {
  title: "Components/Radio",
  component: "ui-radio",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const paymentMethods = [
  { value: "card", label: "Credit Card" },
  { value: "bank", label: "Bank Transfer" },
  { value: "paypal", label: "PayPal" },
];

export const Default: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-radio name="payment" label="Payment Method" .options=${paymentMethods}></ui-radio>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <ui-radio
        size="small"
        name="size-small"
        label="Small"
        .options=${paymentMethods}
      ></ui-radio>
      <ui-radio
        size="medium"
        name="size-medium"
        label="Medium"
        .options=${paymentMethods}
      ></ui-radio>
      <ui-radio size="large" name="size-large" label="Large" .options=${paymentMethods}></ui-radio>
    </div>
  `,
};

export const Layouts: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <ui-radio
        layout="vertical"
        name="layout-vertical"
        label="Vertical Layout"
        .options=${paymentMethods}
      ></ui-radio>
      <ui-radio
        layout="horizontal"
        name="layout-horizontal"
        label="Horizontal Layout"
        .options=${paymentMethods}
      ></ui-radio>
    </div>
  `,
};

export const WithValue: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-radio
        name="payment-selected"
        label="Payment Method"
        value="paypal"
        .options=${paymentMethods}
      ></ui-radio>
    </div>
  `,
};

export const WithDisabled: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <ui-radio
        name="payment-disabled"
        label="Payment Method"
        .options=${[
          { value: "card", label: "Credit Card" },
          { value: "bank", label: "Bank Transfer", disabled: true },
          { value: "paypal", label: "PayPal" },
        ]}
      ></ui-radio>
    </div>
  `,
};

export const ShippingForm: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">Shipping Options</h3>
      <ui-radio
        name="shipping"
        label="Select shipping method"
        value="standard"
        .options=${[
          { value: "standard", label: "Standard Shipping (5-7 days) - Free" },
          { value: "express", label: "Express Shipping (2-3 days) - 99 SEK" },
          { value: "overnight", label: "Overnight Shipping - 199 SEK" },
        ]}
      ></ui-radio>
    </div>
  `,
};

export const SurveyQuestion: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1.5rem 0;">How satisfied are you with our service?</h3>
      <ui-radio
        name="satisfaction"
        layout="horizontal"
        .options=${[
          { value: "very-satisfied", label: "😊 Very Satisfied" },
          { value: "satisfied", label: "🙂 Satisfied" },
          { value: "neutral", label: "😐 Neutral" },
          { value: "dissatisfied", label: "🙁 Dissatisfied" },
          { value: "very-dissatisfied", label: "😞 Very Dissatisfied" },
        ]}
      ></ui-radio>
    </div>
  `,
};
