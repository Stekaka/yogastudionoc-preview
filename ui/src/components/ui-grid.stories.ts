import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-grid";

const meta: Meta = {
  title: "Components/Grid",
  component: "ui-grid",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const GridBox = (text: string, color = "#3b82f6") => html`
  <div
    style="background: ${color}; color: white; padding: 2rem; border-radius: 8px; text-align: center; font-weight: 600;"
  >
    ${text}
  </div>
`;

export const Default: Story = {
  render: () => html`
    <ui-grid columns="3" gap="1rem">
      ${GridBox("1")} ${GridBox("2")} ${GridBox("3")} ${GridBox("4")} ${GridBox("5")} ${GridBox("6")}
    </ui-grid>
  `,
};

export const DifferentColumns: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">2 Columns</h3>
        <ui-grid columns="2" gap="1rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")} ${GridBox("4")}
        </ui-grid>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">3 Columns</h3>
        <ui-grid columns="3" gap="1rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")} ${GridBox("4")} ${GridBox("5")}
          ${GridBox("6")}
        </ui-grid>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">4 Columns</h3>
        <ui-grid columns="4" gap="1rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")} ${GridBox("4")} ${GridBox("5")}
          ${GridBox("6")} ${GridBox("7")} ${GridBox("8")}
        </ui-grid>
      </div>
    </div>
  `,
};

export const DifferentGaps: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Small Gap (0.5rem)</h3>
        <ui-grid columns="3" gap="0.5rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")}
        </ui-grid>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Medium Gap (1rem)</h3>
        <ui-grid columns="3" gap="1rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")}
        </ui-grid>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Large Gap (2rem)</h3>
        <ui-grid columns="3" gap="2rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")}
        </ui-grid>
      </div>
    </div>
  `,
};

export const WithSpan: Story = {
  render: () => html`
    <ui-grid columns="12" gap="1rem">
      <ui-grid-item span="12">${GridBox("Span 12 (Full Width)", "#10b981")}</ui-grid-item>
      <ui-grid-item span="6">${GridBox("Span 6", "#3b82f6")}</ui-grid-item>
      <ui-grid-item span="6">${GridBox("Span 6", "#3b82f6")}</ui-grid-item>
      <ui-grid-item span="4">${GridBox("Span 4", "#8b5cf6")}</ui-grid-item>
      <ui-grid-item span="4">${GridBox("Span 4", "#8b5cf6")}</ui-grid-item>
      <ui-grid-item span="4">${GridBox("Span 4", "#8b5cf6")}</ui-grid-item>
      <ui-grid-item span="8">${GridBox("Span 8", "#f59e0b")}</ui-grid-item>
      <ui-grid-item span="4">${GridBox("Span 4", "#ef4444")}</ui-grid-item>
    </ui-grid>
  `,
};

export const CustomTemplate: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">2fr 1fr 1fr</h3>
        <ui-grid columnTemplate="2fr 1fr 1fr" gap="1rem">
          ${GridBox("2fr")} ${GridBox("1fr")} ${GridBox("1fr")}
        </ui-grid>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">200px auto 1fr</h3>
        <ui-grid columnTemplate="200px auto 1fr" gap="1rem">
          ${GridBox("200px")} ${GridBox("auto")} ${GridBox("1fr")}
        </ui-grid>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">repeat(auto-fit, minmax(200px, 1fr))</h3>
        <ui-grid columnTemplate="repeat(auto-fit, minmax(200px, 1fr))" gap="1rem">
          ${GridBox("1")} ${GridBox("2")} ${GridBox("3")} ${GridBox("4")} ${GridBox("5")}
        </ui-grid>
      </div>
    </div>
  `,
};

export const DashboardLayout: Story = {
  render: () => html`
    <ui-grid columns="12" gap="1.5rem">
      <ui-grid-item span="12">
        <div style="background: white; padding: 1.5rem; border-radius: 8px; border: 2px solid #e2e8f0;">
          <h2 style="margin: 0;">Dashboard Header</h2>
        </div>
      </ui-grid-item>

      <ui-grid-item span="3">
        <div
          style="background: white; padding: 1.5rem; border-radius: 8px; border: 2px solid #e2e8f0; min-height: 400px;"
        >
          <h3 style="margin: 0 0 1rem 0;">Sidebar</h3>
          <p style="margin: 0; color: #64748b;">Navigation items here</p>
        </div>
      </ui-grid-item>

      <ui-grid-item span="9">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div
            style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;"
          >
            <div style="background: white; padding: 1.5rem; border-radius: 8px; border: 2px solid #e2e8f0;">
              <h4 style="margin: 0 0 0.5rem 0; color: #64748b;">Revenue</h4>
              <p style="margin: 0; font-size: 2rem; font-weight: 700;">$45,231</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; border: 2px solid #e2e8f0;">
              <h4 style="margin: 0 0 0.5rem 0; color: #64748b;">Users</h4>
              <p style="margin: 0; font-size: 2rem; font-weight: 700;">2,345</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; border: 2px solid #e2e8f0;">
              <h4 style="margin: 0 0 0.5rem 0; color: #64748b;">Orders</h4>
              <p style="margin: 0; font-size: 2rem; font-weight: 700;">1,234</p>
            </div>
          </div>

          <div
            style="background: white; padding: 1.5rem; border-radius: 8px; border: 2px solid #e2e8f0; min-height: 300px;"
          >
            <h3 style="margin: 0 0 1rem 0;">Main Content</h3>
            <p style="margin: 0; color: #64748b;">Your main content area</p>
          </div>
        </div>
      </ui-grid-item>
    </ui-grid>
  `,
};

export const ProductGrid: Story = {
  render: () => html`
    <ui-grid columns="4" gap="1.5rem">
      ${[1, 2, 3, 4, 5, 6, 7, 8].map(
        (i) => html`
          <div style="background: white; border: 2px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background: #f1f5f9; height: 200px; display: flex; align-items: center; justify-content: center; color: #64748b;">
              Product Image ${i}
            </div>
            <div style="padding: 1rem;">
              <h4 style="margin: 0 0 0.5rem 0;">Product ${i}</h4>
              <p style="margin: 0 0 0.5rem 0; color: #64748b; font-size: 0.875rem;">
                Short product description
              </p>
              <p style="margin: 0; font-weight: 700; font-size: 1.25rem;">$${i * 10}.99</p>
            </div>
          </div>
        `
      )}
    </ui-grid>
  `,
};
