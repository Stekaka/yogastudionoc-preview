import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../themes/theme.css";
import "../themes/presets.css";
import "./premium-hero.js";
import "../components/ui-theme-switcher.js";

const meta: Meta = {
    title: "Blocks/Premium Hero",
    render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <premium-hero
        badge="Premium"
        heading="Skalbara företagshemsidor som konverterar"
        subheading="Astro + Lit + låsta block. Snabbt att leverera, enkelt att underhålla, konsekvent för alla mallar."
        primaryCta="Boka möte"
        primaryHref="#"
        secondaryCta="Se case"
        secondaryHref="#"
        layout="split"
        styleVariant="saas"
        media="video"
        mediaSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
        mediaAlt="Produktvideo"
        .showGlow=${true}
        .glowStrength=${1.1}
      ></premium-hero>
    </div>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Enterprise: Story = {
    render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <premium-hero
        badge="Trygg leverans"
        heading="En sober, modulär hemsida för seriösa bolag"
        subheading="Enterprise-variant med nedtonad energi, hög läsbarhet och tydligare struktur för beslutstagare."
        primaryCta="Kontakta oss"
        primaryHref="#"
        secondaryCta="Läs mer"
        secondaryHref="#"
        layout="center"
        styleVariant="enterprise"
        .showGlow=${false}
      ></premium-hero>
    </div>
  `,
};

export const WithImage: Story = {
    render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <premium-hero
        badge="Ny release"
        heading="Samma mall, snabbare leverans"
        subheading="Visa bild i split-läge. Perfekt för portfolio- och product-sidor."
        primaryCta="Starta"
        primaryHref="#"
        secondaryCta="Dokumentation"
        secondaryHref="#"
        layout="split"
        styleVariant="default"
        media="image"
        mediaSrc="/placeholder-hero.jpg"
        mediaAlt="Exempelbild"
        .showGlow=${true}
        .glowStrength=${1}
      ></premium-hero>
    </div>
  `,
};