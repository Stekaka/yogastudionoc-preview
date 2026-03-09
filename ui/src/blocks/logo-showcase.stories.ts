import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./logo-showcase";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/LogoShowcase",
  component: "logo-showcase",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "grayscale", "marquee"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Våra kunder",
    subheading: "Vi har förtroendet hos ledande företag",
    variant: "default",
    logos: [
      {
        name: "Microsoft",
        imageUrl: "https://via.placeholder.com/200x80/0078D4/ffffff?text=Microsoft",
      },
      {
        name: "Google",
        imageUrl: "https://via.placeholder.com/200x80/4285F4/ffffff?text=Google",
      },
      {
        name: "Amazon",
        imageUrl: "https://via.placeholder.com/200x80/FF9900/ffffff?text=Amazon",
      },
      {
        name: "Apple",
        imageUrl: "https://via.placeholder.com/200x80/000000/ffffff?text=Apple",
      },
      {
        name: "Netflix",
        imageUrl: "https://via.placeholder.com/200x80/E50914/ffffff?text=Netflix",
      },
      {
        name: "Spotify",
        imageUrl: "https://via.placeholder.com/200x80/1DB954/ffffff?text=Spotify",
      },
    ],
  },
  render: (args) => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>
      <logo-showcase
        .heading=${args.heading}
        .subheading=${args.subheading}
        variant=${args.variant}
        .logos=${args.logos}
      ></logo-showcase>
    </div>
  `,
};

export const Grayscale: Story = {
  args: {
    heading: "Betrodda av",
    subheading: "",
    variant: "grayscale",
    logos: [
      {
        name: "Company A",
        imageUrl: "https://via.placeholder.com/200x80/333333/ffffff?text=Company+A",
        href: "https://example.com",
      },
      {
        name: "Company B",
        imageUrl: "https://via.placeholder.com/200x80/555555/ffffff?text=Company+B",
        href: "https://example.com",
      },
      {
        name: "Company C",
        imageUrl: "https://via.placeholder.com/200x80/777777/ffffff?text=Company+C",
        href: "https://example.com",
      },
      {
        name: "Company D",
        imageUrl: "https://via.placeholder.com/200x80/999999/ffffff?text=Company+D",
        href: "https://example.com",
      },
    ],
  },
  render: (args) => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>
      <logo-showcase
        .heading=${args.heading}
        .subheading=${args.subheading}
        variant=${args.variant}
        .logos=${args.logos}
      ></logo-showcase>
    </div>
  `,
};

export const ManyLogos: Story = {
  args: {
    heading: "Partners",
    subheading: "Samarbeten som gör skillnad",
    variant: "default",
    logos: [
      { name: "Partner 1", imageUrl: "https://via.placeholder.com/200x80/3B82F6/ffffff?text=1" },
      { name: "Partner 2", imageUrl: "https://via.placeholder.com/200x80/10B981/ffffff?text=2" },
      { name: "Partner 3", imageUrl: "https://via.placeholder.com/200x80/F59E0B/ffffff?text=3" },
      { name: "Partner 4", imageUrl: "https://via.placeholder.com/200x80/EF4444/ffffff?text=4" },
      { name: "Partner 5", imageUrl: "https://via.placeholder.com/200x80/8B5CF6/ffffff?text=5" },
      { name: "Partner 6", imageUrl: "https://via.placeholder.com/200x80/EC4899/ffffff?text=6" },
      { name: "Partner 7", imageUrl: "https://via.placeholder.com/200x80/14B8A6/ffffff?text=7" },
      { name: "Partner 8", imageUrl: "https://via.placeholder.com/200x80/F97316/ffffff?text=8" },
    ],
  },
  render: (args) => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>
      <logo-showcase
        .heading=${args.heading}
        .subheading=${args.subheading}
        variant=${args.variant}
        .logos=${args.logos}
      ></logo-showcase>
    </div>
  `,
};

export const NoHeading: Story = {
  args: {
    heading: "",
    subheading: "",
    variant: "grayscale",
    logos: [
      { name: "Brand 1", imageUrl: "https://via.placeholder.com/200x80/1F2937/ffffff?text=Brand+1" },
      { name: "Brand 2", imageUrl: "https://via.placeholder.com/200x80/374151/ffffff?text=Brand+2" },
      { name: "Brand 3", imageUrl: "https://via.placeholder.com/200x80/4B5563/ffffff?text=Brand+3" },
      { name: "Brand 4", imageUrl: "https://via.placeholder.com/200x80/6B7280/ffffff?text=Brand+4" },
    ],
  },
  render: (args) => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>
      <logo-showcase
        .heading=${args.heading}
        .subheading=${args.subheading}
        variant=${args.variant}
        .logos=${args.logos}
      ></logo-showcase>
    </div>
  `,
};

export const Marquee: Story = {
  args: {
    heading: "Trusted by industry leaders",
    subheading: "",
    variant: "marquee",
    logos: [
      { name: "Tech Co", imageUrl: "https://via.placeholder.com/200x80/667eea/ffffff?text=Tech+Co" },
      { name: "Digital Inc", imageUrl: "https://via.placeholder.com/200x80/764ba2/ffffff?text=Digital" },
      { name: "Cloud Systems", imageUrl: "https://via.placeholder.com/200x80/f093fb/ffffff?text=Cloud" },
      { name: "Data Corp", imageUrl: "https://via.placeholder.com/200x80/4facfe/ffffff?text=Data" },
      { name: "AI Labs", imageUrl: "https://via.placeholder.com/200x80/43e97b/ffffff?text=AI+Labs" },
      { name: "Cyber Security", imageUrl: "https://via.placeholder.com/200x80/fa709a/ffffff?text=Security" },
      { name: "Web Solutions", imageUrl: "https://via.placeholder.com/200x80/fee140/333333?text=Web+Sol" },
      { name: "Mobile Apps", imageUrl: "https://via.placeholder.com/200x80/30cfd0/ffffff?text=Mobile" },
    ],
  },
  render: (args) => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>
      <logo-showcase
        .heading=${args.heading}
        .subheading=${args.subheading}
        variant=${args.variant}
        .logos=${args.logos}
      ></logo-showcase>
    </div>
  `,
};
