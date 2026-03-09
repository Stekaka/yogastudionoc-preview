import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./before-after-slider";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Before After Slider",
  component: "before-after-slider",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <before-after-slider
        heading="Website Redesign"
        description="See the transformation from outdated to modern"
        beforeImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
        afterImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
        beforeLabel="Old Design"
        afterLabel="New Design"
      ></before-after-slider>
    </div>
  `,
};

export const SwedishLabels: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <before-after-slider
        heading="Hemsidesflytt"
        description="Från gammal WordPress till modern Astro-lösning"
        beforeImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"
        afterImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
      ></before-after-slider>
    </div>
  `,
};

export const RoomRenovation: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <before-after-slider
        heading="Kontorsrenovering"
        description="Från tråkigt till inspirerande"
        beforeImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop"
        afterImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop"
        beforeLabel="Före"
        afterLabel="Efter"
      ></before-after-slider>
    </div>
  `,
};

export const NoHeader: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <before-after-slider
        beforeImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
        afterImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop"
      ></before-after-slider>
    </div>
  `,
};

export const MobileApp: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <before-after-slider
        heading="App UI Transformation"
        description="Modern interface with improved user experience"
        beforeImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
        afterImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop"
        beforeLabel="V1.0"
        afterLabel="V2.0"
      ></before-after-slider>
    </div>
  `,
};
