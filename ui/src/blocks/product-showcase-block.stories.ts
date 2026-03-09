import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./product-showcase-block";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Product Showcase Block",
  component: "product-showcase-block",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const LightThemeMediaRight: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <product-showcase-block
        theme="light"
        layout="media-right"
        subheading="Tema: Hund & rörelse"
        heading="Följ hunden. Förstå jakten."
        description="Exakt spårning i realtid med tydlig visualisering av rörelsemönster."
        mediaSrc="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&q=80"
        mediaAlt="Hund i skog"
        mediaType="image"
      ></product-showcase-block>
    </div>
  `,
};

export const DarkThemeMediaLeft: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <product-showcase-block
        theme="dark"
        layout="media-left"
        subheading="Tema: Terräng"
        heading="Se marken som den faktiskt ser ut."
        description="Marktäcke, höjd och vatten – exakt och läsbart."
        mediaSrc="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80"
        mediaAlt="Topografisk karta"
        mediaType="image"
      ></product-showcase-block>
    </div>
  `,
};

export const DarkThemeEvents: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <product-showcase-block
        theme="dark"
        layout="media-right"
        subheading="Tema: Händelser"
        heading="När det händer, ser du det."
        description="Pins, ståndskall, upptag – allt visualiseras direkt i kartan."
        mediaSrc="https://images.unsplash.com/photo-1551817958-11e0f7bbea5d?w=800&q=80"
        mediaAlt="Karta med pins"
        mediaType="image"
      ></product-showcase-block>
    </div>
  `,
};

export const WithVideo: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <product-showcase-block
        theme="light"
        layout="media-right"
        heading="Jakt, på riktigt. Direkt i kartan."
        description="All terräng. Alla händelser. Ett verktyg."
        mediaSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        mediaAlt="Produktdemo"
        mediaType="video"
      ></product-showcase-block>
    </div>
  `,
};

export const MinimalContent: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <product-showcase-block
        theme="light"
        layout="media-left"
        heading="Byggd för skogen."
        description="Inte för sociala medier."
        mediaSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
        mediaAlt="Skog"
        mediaType="image"
      ></product-showcase-block>
    </div>
  `,
};

export const StackedExample: Story = {
  render: () => html`
    <div>
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <!-- Dark section -->
      <product-showcase-block
        theme="dark"
        layout="media-right"
        subheading="Tema: Terräng"
        heading="Se marken som den faktiskt ser ut."
        description="Marktäcke, höjd och vatten – exakt och läsbart."
        mediaSrc="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80"
        mediaAlt="Topografisk karta"
        mediaType="image"
      ></product-showcase-block>

      <!-- Light section -->
      <product-showcase-block
        theme="light"
        layout="media-left"
        subheading="Tema: Hund & rörelse"
        heading="Följ hunden. Förstå jakten."
        description="Exakt spårning i realtid med tydlig visualisering."
        mediaSrc="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&q=80"
        mediaAlt="Hund i skog"
        mediaType="image"
      ></product-showcase-block>

      <!-- Dark section -->
      <product-showcase-block
        theme="dark"
        layout="media-right"
        subheading="Tema: Händelser"
        heading="När det händer, ser du det."
        description="Pins, ståndskall, upptag – allt i realtid."
        mediaSrc="https://images.unsplash.com/photo-1551817958-11e0f7bbea5d?w=800&q=80"
        mediaAlt="Karta med pins"
        mediaType="image"
      ></product-showcase-block>
    </div>
  `,
};

export const CustomSlotContent: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <product-showcase-block
        theme="dark"
        layout="media-left"
        heading="Custom Media Content"
        description="Use the slot for any custom media element."
        mediaType="slot"
      >
        <div style="
          width: 100%;
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: 600;
        ">
          Custom Content
        </div>
      </product-showcase-block>
    </div>
  `,
};
