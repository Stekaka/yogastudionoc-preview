import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./metrics-strip";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Metrics Strip",
  component: "metrics-strip",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const defaultMetrics = [
  { value: "120+", label: "Lanseringar", icon: "🚀" },
  { value: "4.9/5", label: "Snittbetyg", icon: "⭐" },
  { value: "< 24h", label: "Svarstid", icon: "⚡" },
];

const businessMetrics = [
  { value: "500+", label: "Kunder", icon: "👥" },
  { value: "98%", label: "Nöjdhet", icon: "😊" },
  { value: "15år", label: "Erfarenhet", icon: "📅" },
  { value: "24/7", label: "Support", icon: "💬" },
];

export const Default: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <metrics-strip
        .metrics=${defaultMetrics}
      ></metrics-strip>
    </div>
  `,
};

export const Minimal: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <metrics-strip
        variant="minimal"
        .metrics=${defaultMetrics}
      ></metrics-strip>
    </div>
  `,
};

export const Bordered: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <metrics-strip
        variant="bordered"
        .metrics=${defaultMetrics}
      ></metrics-strip>
    </div>
  `,
};

export const FourMetrics: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <metrics-strip
        .metrics=${businessMetrics}
      ></metrics-strip>
    </div>
  `,
};

export const NoIcons: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <metrics-strip
        .metrics=${[
          { value: "1M+", label: "Downloads" },
          { value: "99.9%", label: "Uptime" },
          { value: "50+", label: "Countries" },
        ]}
      ></metrics-strip>
    </div>
  `,
};

export const InContext: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <div style="padding: 4rem 2rem; background: var(--color-background);">
        <h2 style="text-align: center; margin-bottom: 1rem; color: var(--color-text-primary);">Why Choose Us</h2>
        <p style="text-align: center; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 3rem;">
          We deliver results that speak for themselves
        </p>
      </div>

      <metrics-strip
        variant="bordered"
        .metrics=${businessMetrics}
      ></metrics-strip>

      <div style="padding: 4rem 2rem; background: var(--color-background);">
        <p style="text-align: center; color: var(--color-text-secondary);">
          Trusted by hundreds of companies worldwide
        </p>
      </div>
    </div>
  `,
};
