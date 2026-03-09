import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./comparison-table";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Comparison Table",
  component: "comparison-table",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const pricingColumns = [
  { title: "Basic", subtitle: "999 kr/mån" },
  { title: "Pro", subtitle: "1 999 kr/mån", highlighted: true },
  { title: "Enterprise", subtitle: "Kontakta oss" },
];

const pricingRows = [
  { label: "Antal sidor", values: ["5", "15", "Obegränsat"] },
  { label: "Custom design", values: [false, true, true] },
  { label: "SEO-optimering", values: [true, true, true] },
  { label: "Analytics", values: ["Basic", "Advanced", "Enterprise"] },
  { label: "Support", values: ["Email", "Email + Chat", "24/7 Prioritet"] },
  { label: "Uppdateringar/mån", values: ["1", "5", "Obegränsat"] },
  { label: "SSL-certifikat", values: [true, true, true] },
  { label: "Backup", values: ["Veckovis", "Daglig", "Realtid"] },
];

const approachColumns = [
  { title: "DIY", subtitle: "Själv" },
  { title: "Byrå", subtitle: "Traditionell" },
  { title: "Kodco", subtitle: "Modern", highlighted: true },
];

const approachRows = [
  { label: "Kostnad", values: ["Låg", "Mycket hög", "Rimlig"] },
  { label: "Tid till live", values: ["Lång", "Mycket lång", "Snabb"] },
  { label: "Kvalitet", values: ["Varierande", "Hög", "Hög"] },
  { label: "Underhåll", values: ["Du gör allt", "Extra kostnad", "Inkluderat"] },
  { label: "Skalbarhet", values: [false, true, true] },
  { label: "Support", values: [false, "Begränsad", "24/7"] },
  { label: "Prestanda", values: ["OK", "Bra", "Excellent"] },
];

export const PricingPackages: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <comparison-table
        heading="Välj rätt paket för dig"
        subheading="Transparent prissättning utan dolda kostnader"
        .columns=${pricingColumns}
        .rows=${pricingRows}
      ></comparison-table>
    </div>
  `,
};

export const ApproachComparison: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <comparison-table
        heading="Kodco vs Alternativ"
        subheading="Se varför företag väljer oss framför traditionella lösningar"
        .columns=${approachColumns}
        .rows=${approachRows}
      ></comparison-table>
    </div>
  `,
};

export const TwoColumns: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <comparison-table
        heading="Starter vs Professional"
        .columns=${[
          { title: "Starter", subtitle: "799 kr/mån" },
          { title: "Professional", subtitle: "1 499 kr/mån", highlighted: true },
        ]}
        .rows=${[
          { label: "Antal sidor", values: ["3", "10"] },
          { label: "Custom design", values: [false, true] },
          { label: "SEO", values: [true, true] },
          { label: "Support", values: ["Email", "Priority"] },
          { label: "SSL", values: [true, true] },
        ]}
      ></comparison-table>
    </div>
  `,
};

export const FourColumns: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <comparison-table
        heading="Complete Feature Comparison"
        .columns=${[
          { title: "Free" },
          { title: "Starter", subtitle: "$9/mo" },
          { title: "Pro", subtitle: "$29/mo", highlighted: true },
          { title: "Enterprise", subtitle: "Custom" },
        ]}
        .rows=${[
          { label: "Users", values: ["1", "5", "25", "Unlimited"] },
          { label: "Storage", values: ["1GB", "10GB", "100GB", "Unlimited"] },
          { label: "API Access", values: [false, true, true, true] },
          { label: "Custom Domain", values: [false, true, true, true] },
          { label: "Analytics", values: [false, "Basic", "Advanced", "Custom"] },
        ]}
      ></comparison-table>
    </div>
  `,
};

export const NoHeader: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <comparison-table
        .columns=${pricingColumns}
        .rows=${pricingRows}
      ></comparison-table>
    </div>
  `,
};
