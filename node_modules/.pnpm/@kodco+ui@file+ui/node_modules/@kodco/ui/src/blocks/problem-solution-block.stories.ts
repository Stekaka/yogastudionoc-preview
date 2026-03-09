import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./problem-solution-block";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Problem Solution Block",
  component: "problem-solution-block",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const webProblems = [
  {
    icon: "🐌",
    title: "Långsam hemsida",
    description: "Din nuvarande webbplats laddar långsamt och skadar din SEO-ranking",
  },
  {
    icon: "📱",
    title: "Inte mobilanpassad",
    description: "Besökare från mobiler får en dålig upplevelse och lämnar direkt",
  },
  {
    icon: "🔒",
    title: "Osäker plattform",
    description: "Gammal teknik med säkerhetsrisker och svår att underhålla",
  },
];

const webSolutions = [
  {
    icon: "⚡",
    title: "Blixtsnabb prestanda",
    description: "Modern teknologi med Astro ger otroligt snabba laddningstider",
  },
  {
    icon: "✨",
    title: "Perfekt på alla enheter",
    description: "Responsiv design som fungerar felfritt på mobil, surfplatta och desktop",
  },
  {
    icon: "🛡️",
    title: "Säker och modern",
    description: "Uppdaterad teknikstack med bästa säkerhetspraxis och enkelt underhåll",
  },
];

const businessProblems = [
  {
    icon: "💸",
    title: "Höga kostnader",
    description: "Traditionella byråer tar ut höga timpris utan tydliga resultat",
  },
  {
    icon: "⏰",
    title: "Långa projekttider",
    description: "Månader av väntan innan din nya hemsida är live",
  },
];

const businessSolutions = [
  {
    icon: "💰",
    title: "Transparent prissättning",
    description: "Fast pris per projekt - inga dolda kostnader eller överraskningar",
  },
  {
    icon: "🚀",
    title: "Snabb leverans",
    description: "Från start till lansering på 2-4 veckor med våra färdiga templates",
  },
];

export const Default: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <problem-solution-block
        heading="Vi förstår dina utmaningar"
        subheading="Och vi har lösningen som passar just ditt företag"
        .problems=${webProblems}
        .solutions=${webSolutions}
      ></problem-solution-block>
    </div>
  `,
};

export const TwoItems: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <problem-solution-block
        heading="Varför välja oss?"
        .problems=${businessProblems}
        .solutions=${businessSolutions}
      ></problem-solution-block>
    </div>
  `,
};

export const NoIcons: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <problem-solution-block
        heading="Digital Transformation"
        .problems=${[
          {
            title: "Legacy Systems",
            description: "Outdated technology holding back innovation and growth",
          },
          {
            title: "Manual Processes",
            description: "Time-consuming workflows reducing team productivity",
          },
        ]}
        .solutions=${[
          {
            title: "Modern Platform",
            description: "Cloud-based solutions that scale with your business",
          },
          {
            title: "Automation",
            description: "Streamlined workflows that save hours every week",
          },
        ]}
      ></problem-solution-block>
    </div>
  `,
};

export const NoHeader: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <problem-solution-block
        .problems=${webProblems}
        .solutions=${webSolutions}
      ></problem-solution-block>
    </div>
  `,
};
