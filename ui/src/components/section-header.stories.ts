import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./section-header";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Components/Section Header",
  component: "section-header",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column; padding: 2rem;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <section-header
        heading="Our Services"
        subheading="We provide comprehensive solutions tailored to your business needs"
      ></section-header>
    </div>
  `,
};

export const WithBadge: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column; padding: 2rem;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <section-header
        badge="New Feature"
        heading="Introducing Our Latest Product"
        subheading="Revolutionary technology that transforms the way you work"
      ></section-header>
    </div>
  `,
};

export const LeftAlign: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column; padding: 2rem;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <section-header
        heading="Case Studies"
        subheading="See how we've helped businesses like yours achieve their goals"
        align="left"
      ></section-header>
    </div>
  `,
};

export const RightAlign: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column; padding: 2rem;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <section-header
        heading="Get in Touch"
        subheading="Let's discuss how we can help your business grow"
        align="right"
      ></section-header>
    </div>
  `,
};

export const MinimalHeading: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column; padding: 2rem;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <section-header
        heading="Features"
      ></section-header>
    </div>
  `,
};
