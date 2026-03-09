import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-tabs";

const meta: Meta = {
  title: "Components/Tabs",
  component: "ui-tabs",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const basicTabs = [
  { id: "tab1", label: "Overview", content: "This is the overview content." },
  { id: "tab2", label: "Features", content: "These are the features." },
  { id: "tab3", label: "Pricing", content: "Check out our pricing plans." },
];

export const Default: Story = {
  render: () => html` <ui-tabs .tabs=${basicTabs}></ui-tabs> `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Line variant (default)</h3>
        <ui-tabs variant="line" .tabs=${basicTabs}></ui-tabs>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Enclosed variant</h3>
        <ui-tabs variant="enclosed" .tabs=${basicTabs}></ui-tabs>
      </div>
    </div>
  `,
};

export const WithDisabled: Story = {
  render: () => html`
    <ui-tabs
      .tabs=${[
        { id: "tab1", label: "Active", content: "This tab is active." },
        { id: "tab2", label: "Disabled", content: "You can't see this.", disabled: true },
        { id: "tab3", label: "Another Active", content: "This tab is also active." },
      ]}
    ></ui-tabs>
  `,
};

export const ProductTabs: Story = {
  render: () => html`
    <ui-tabs
      .tabs=${[
        {
          id: "description",
          label: "Description",
          content: html`
            <h3 style="margin: 0 0 1rem 0;">Product Description</h3>
            <p style="margin: 0; line-height: 1.6; color: #64748b;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
          `,
        },
        {
          id: "specifications",
          label: "Specifications",
          content: html`
            <h3 style="margin: 0 0 1rem 0;">Technical Specifications</h3>
            <ul style="margin: 0; padding-left: 1.5rem; color: #64748b;">
              <li>Processor: Intel Core i7</li>
              <li>RAM: 16GB DDR4</li>
              <li>Storage: 512GB SSD</li>
              <li>Display: 15.6" Full HD</li>
            </ul>
          `,
        },
        {
          id: "reviews",
          label: "Reviews",
          content: html`
            <h3 style="margin: 0 0 1rem 0;">Customer Reviews</h3>
            <p style="margin: 0; color: #64748b;">⭐⭐⭐⭐⭐ 4.8 out of 5 (234 reviews)</p>
          `,
        },
      ]}
    ></ui-tabs>
  `,
};

export const AccountSettings: Story = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2 style="margin: 0 0 1.5rem 0;">Account Settings</h2>
      <ui-tabs
        variant="enclosed"
        .tabs=${[
          {
            id: "profile",
            label: "Profile",
            content: html`
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <h3 style="margin: 0;">Profile Information</h3>
                <p style="margin: 0; color: #64748b;">Update your personal information here.</p>
              </div>
            `,
          },
          {
            id: "security",
            label: "Security",
            content: html`
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <h3 style="margin: 0;">Security Settings</h3>
                <p style="margin: 0; color: #64748b;">
                  Manage your password and security preferences.
                </p>
              </div>
            `,
          },
          {
            id: "notifications",
            label: "Notifications",
            content: html`
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <h3 style="margin: 0;">Notification Preferences</h3>
                <p style="margin: 0; color: #64748b;">Choose how you want to be notified.</p>
              </div>
            `,
          },
          {
            id: "billing",
            label: "Billing",
            content: html`
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <h3 style="margin: 0;">Billing Information</h3>
                <p style="margin: 0; color: #64748b;">Manage your payment methods and invoices.</p>
              </div>
            `,
          },
        ]}
      ></ui-tabs>
    </div>
  `,
};

export const ManyTabs: Story = {
  render: () => html`
    <ui-tabs
      .tabs=${[
        { id: "1", label: "Tab 1", content: "Content 1" },
        { id: "2", label: "Tab 2", content: "Content 2" },
        { id: "3", label: "Tab 3", content: "Content 3" },
        { id: "4", label: "Tab 4", content: "Content 4" },
        { id: "5", label: "Tab 5", content: "Content 5" },
        { id: "6", label: "Tab 6", content: "Content 6" },
        { id: "7", label: "Tab 7", content: "Content 7" },
        { id: "8", label: "Tab 8", content: "Content 8" },
      ]}
    ></ui-tabs>
  `,
};
