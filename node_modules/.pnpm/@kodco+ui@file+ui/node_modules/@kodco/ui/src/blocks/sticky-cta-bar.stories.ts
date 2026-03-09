import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./sticky-cta-bar";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Sticky CTA Bar",
  component: "sticky-cta-bar",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="min-height: 150vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1001;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <div style="flex: 1; padding: 2rem;">
        <h1>Scroll down to see the sticky CTA bar at the bottom</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <sticky-cta-bar
        message="Redo att komma igång?"
        ctaText="Boka möte"
        ctaHref="#contact"
        phone="+46 70 123 45 67"
      ></sticky-cta-bar>
    </div>
  `,
};

export const Compact: Story = {
  render: () => html`
    <div style="min-height: 150vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1001;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <div style="flex: 1; padding: 2rem;">
        <h1>Compact variant with less padding</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <sticky-cta-bar
        message="Questions?"
        ctaText="Contact Us"
        ctaHref="#"
        variant="compact"
      ></sticky-cta-bar>
    </div>
  `,
};

export const NoPhone: Story = {
  render: () => html`
    <div style="min-height: 150vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1001;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <div style="flex: 1; padding: 2rem;">
        <h1>Without phone number</h1>
        <p>Sometimes you just need a single CTA</p>
      </div>

      <sticky-cta-bar
        message="Ready to get started?"
        ctaText="Start Free Trial"
        ctaHref="#signup"
      ></sticky-cta-bar>
    </div>
  `,
};

export const LongMessage: Story = {
  render: () => html`
    <div style="min-height: 150vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1001;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <div style="flex: 1; padding: 2rem;">
        <h1>With longer message text</h1>
        <p>Testing responsive behavior</p>
      </div>

      <sticky-cta-bar
        message="Limited time offer: 50% off all packages this month!"
        ctaText="Claim Discount"
        ctaHref="#offer"
        phone="+46 70 123 45 67"
      ></sticky-cta-bar>
    </div>
  `,
};
