import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./tech-stack-block";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Tech Stack Block",
  component: "tech-stack-block",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const technologies = [
  { name: "Astro", logo: "https://astro.build/assets/press/astro-icon-light.svg", category: "Framework" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Library" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Language" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "CSS" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Runtime" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
];

const integrations = [
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  { name: "Google Analytics", logo: "https://www.svgrepo.com/show/303260/google-analytics-logo.svg" },
  { name: "HubSpot", logo: "https://www.svgrepo.com/show/331427/hubspot.svg" },
  { name: "Mailchimp", logo: "https://www.svgrepo.com/show/349408/mailchimp.svg" },
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
];

const minimalTech = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" },
];

export const Badges: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <tech-stack-block
        heading="Vi jobbar med"
        subheading="Modern teknologi för bästa resultat"
        variant="badges"
        .technologies=${technologies}
      ></tech-stack-block>
    </div>
  `,
};

export const Cards: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <tech-stack-block
        heading="Vår tech stack"
        subheading="De verktyg vi använder för att bygga skalbara lösningar"
        variant="cards"
        .technologies=${technologies}
      ></tech-stack-block>
    </div>
  `,
};

export const Minimal: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <tech-stack-block
        heading="Powered by"
        variant="minimal"
        .technologies=${minimalTech}
      ></tech-stack-block>
    </div>
  `,
};

export const Integrations: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <tech-stack-block
        heading="Integrationer vi stödjer"
        subheading="Koppla samman dina favorit-verktyg"
        variant="badges"
        .technologies=${integrations}
      ></tech-stack-block>
    </div>
  `,
};

export const NoHeader: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <tech-stack-block
        variant="minimal"
        .technologies=${technologies}
      ></tech-stack-block>
    </div>
  `,
};

export const ManyTechnologies: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <tech-stack-block
        heading="Full Stack Development"
        variant="cards"
        .technologies=${[
          ...technologies,
          { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
          { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Cache" },
          { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", category: "API" },
          { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Framework" },
        ]}
      ></tech-stack-block>
    </div>
  `,
};
