import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-theme-switcher";

const meta: Meta = {
  title: "Components/ThemeSwitcher",
  component: "ui-theme-switcher",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <ui-theme-switcher></ui-theme-switcher>
    </div>
  `,
};

export const InHeader: Story = {
  render: () => html`
    <div
      style="background: var(--color-background, white); border-bottom: 2px solid var(--color-border, #e2e8f0); padding: 1rem 2rem;"
    >
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h1 style="margin: 0; font-size: 1.5rem;">My Website</h1>
        </div>
        <ui-theme-switcher></ui-theme-switcher>
      </div>
    </div>
  `,
};

export const WithContent: Story = {
  render: () => html`
    <div style="min-height: 100vh; background: var(--color-background, white); transition: all 300ms ease;">
      <!-- Header -->
      <div
        style="background: var(--color-surface, white); border-bottom: 2px solid var(--color-border, #e2e8f0); padding: 1rem 2rem;"
      >
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1 style="margin: 0; color: var(--color-text-primary, #0f172a);">Theme Demo</h1>
          <ui-theme-switcher></ui-theme-switcher>
        </div>
      </div>

      <!-- Content -->
      <div style="padding: 2rem;">
        <div style="max-width: 800px; margin: 0 auto;">
          <h2 style="color: var(--color-text-primary, #0f172a); margin: 0 0 1rem 0;">
            Try Different Themes
          </h2>
          <p style="color: var(--color-text-secondary, #64748b); margin: 0 0 2rem 0; line-height: 1.6;">
            Click the theme switcher in the top right to try different color themes and toggle
            between light and dark mode. Notice how all the colors adapt automatically!
          </p>

          <!-- Sample UI Elements -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <!-- Button -->
            <div>
              <button
                style="background: var(--color-primary, #3b82f6); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer; font-size: 1rem;"
              >
                Primary Button
              </button>
            </div>

            <!-- Card -->
            <div
              style="background: var(--color-surface, white); border: 2px solid var(--color-border, #e2e8f0); border-radius: 8px; padding: 1.5rem;"
            >
              <h3 style="margin: 0 0 0.5rem 0; color: var(--color-text-primary, #0f172a);">
                Sample Card
              </h3>
              <p style="margin: 0; color: var(--color-text-secondary, #64748b);">
                This card adapts to the current theme automatically using CSS variables.
              </p>
            </div>

            <!-- Alert -->
            <div
              style="background: var(--color-primary-light, #dbeafe); border-left: 4px solid var(--color-primary, #3b82f6); padding: 1rem; border-radius: 8px;"
            >
              <strong style="color: var(--color-text-primary, #0f172a);">Info:</strong>
              <span style="color: var(--color-text-secondary, #64748b);">
                All colors update automatically when you change the theme.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const MultiplePositions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Top Right (Typical placement)</h3>
        <div style="display: flex; justify-content: flex-end;">
          <ui-theme-switcher></ui-theme-switcher>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Top Left</h3>
        <div style="display: flex; justify-content: flex-start;">
          <ui-theme-switcher></ui-theme-switcher>
        </div>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Center</h3>
        <div style="display: flex; justify-content: center;">
          <ui-theme-switcher></ui-theme-switcher>
        </div>
      </div>
    </div>
  `,
};
