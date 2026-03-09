import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./timeline-block";

const meta: Meta = {
  title: "Blocks/TimelineBlock",
  component: "timeline-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Vår historia",
    subheading: "Från start till idag",
    items: [
      {
        year: "2015",
        title: "Företaget grundas",
        description:
          "Med en vision om att förändra branschen startade vi vår resa i ett litet kontor i Stockholm.",
      },
      {
        year: "2017",
        title: "Första stora kunden",
        description:
          "Vi fick förtroendet från ett av Sveriges ledande företag och levererade vår första stora plattform.",
      },
      {
        year: "2019",
        title: "Internationell expansion",
        description:
          "Öppnade vårt första internationella kontor i Berlin och började arbeta med kunder över hela Europa.",
      },
      {
        year: "2021",
        title: "100 anställda",
        description:
          "Nådde milstolpen 100 medarbetare och flyttade till vårt nya huvudkontor.",
      },
      {
        year: "2024",
        title: "AI-revolution",
        description:
          "Lanserade vår AI-drivna plattform som transformerar hur företag arbetar med data.",
      },
    ],
  },
  render: (args) => html`
    <timeline-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .items=${args.items}
    ></timeline-block>
  `,
};

export const ProductRoadmap: Story = {
  args: {
    heading: "Product Roadmap",
    subheading: "Vad som komma skall",
    items: [
      {
        year: "Q1 2026",
        title: "Mobil app lansering",
        description: "Native iOS och Android appar med full funktionalitet.",
      },
      {
        year: "Q2 2026",
        title: "API v2.0",
        description: "Komplett omarbetning av API:et med GraphQL-stöd.",
      },
      {
        year: "Q3 2026",
        title: "Enterprise features",
        description: "SSO, advanced permissions och audit logs.",
      },
      {
        year: "Q4 2026",
        title: "Global expansion",
        description: "Stöd för 20+ språk och lokala betalmetoder.",
      },
    ],
  },
  render: (args) => html`
    <timeline-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .items=${args.items}
    ></timeline-block>
  `,
};

export const ShortTimeline: Story = {
  args: {
    heading: "Milstolpar",
    subheading: "",
    items: [
      {
        year: "2023",
        title: "Beta lansering",
        description: "Första versionen släppt till utvalda användare.",
      },
      {
        year: "2024",
        title: "Officiell lansering",
        description: "Full lansering till allmänheten.",
      },
      {
        year: "2025",
        title: "10K användare",
        description: "Nådde 10,000 aktiva användare.",
      },
    ],
  },
  render: (args) => html`
    <timeline-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .items=${args.items}
    ></timeline-block>
  `,
};
