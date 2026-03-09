import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./process-block";

const meta: Meta = {
  title: "Blocks/ProcessBlock",
  component: "process-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  args: {
    heading: "Så funkar det",
    subheading: "Kom igång på 3 enkla steg",
    layout: "horizontal",
    steps: [
      {
        number: "1",
        title: "Registrera dig",
        description: "Skapa ett konto på några sekunder. Ingen kreditkort krävs.",
      },
      {
        number: "2",
        title: "Anpassa",
        description: "Välj de funktioner du behöver och konfigurera efter dina behov.",
      },
      {
        number: "3",
        title: "Lansera",
        description: "Gå live direkt och börja dra nytta av alla fördelar.",
      },
    ],
  },
  render: (args) => html`
    <process-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .steps=${args.steps}
    ></process-block>
  `,
};

export const Vertical: Story = {
  args: {
    heading: "Vår arbetsprocess",
    subheading: "Vi följer en beprövad metod för att leverera resultat",
    layout: "vertical",
    steps: [
      {
        number: "1",
        title: "Discovery & Analys",
        description:
          "Vi börjar med att förstå dina behov, målgrupp och affärsmål. Genom workshoppar och intervjuer kartlägger vi kraven för projektet.",
      },
      {
        number: "2",
        title: "Design & Prototyp",
        description:
          "Baserat på analysen skapar vi wireframes och designförslag. Du får kontinuerligt feedback och kan påverka designen.",
      },
      {
        number: "3",
        title: "Utveckling",
        description:
          "Vi bygger din lösning med modern teknik och bästa praxis. Regelbundna demos säkerställer att allt går enligt plan.",
      },
      {
        number: "4",
        title: "Testning & Lansering",
        description:
          "Grundlig testning säkerställer kvalitet. Vi hjälper dig genom lanseringen och ser till att allt fungerar perfekt.",
      },
    ],
  },
  render: (args) => html`
    <process-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .steps=${args.steps}
    ></process-block>
  `,
};

export const WithIcons: Story = {
  args: {
    heading: "Enkel process",
    subheading: "",
    layout: "horizontal",
    steps: [
      {
        number: "1",
        icon: "📝",
        title: "Ansök",
        description: "Fyll i en enkel ansökan online.",
      },
      {
        number: "2",
        icon: "✓",
        title: "Godkänn",
        description: "Få svar inom 24 timmar.",
      },
      {
        number: "3",
        icon: "🚀",
        title: "Starta",
        description: "Kom igång direkt efter godkännande.",
      },
    ],
  },
  render: (args) => html`
    <process-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .steps=${args.steps}
    ></process-block>
  `,
};

export const FourSteps: Story = {
  args: {
    heading: "Vägen till framgång",
    subheading: "Följ dessa steg för bästa resultat",
    layout: "horizontal",
    steps: [
      {
        number: "1",
        title: "Planera",
        description: "Sätt upp tydliga mål och strategier.",
      },
      {
        number: "2",
        title: "Implementera",
        description: "Genomför planerna systematiskt.",
      },
      {
        number: "3",
        title: "Mät",
        description: "Följ upp resultat och analysera data.",
      },
      {
        number: "4",
        title: "Optimera",
        description: "Förbättra kontinuerligt baserat på insikter.",
      },
    ],
  },
  render: (args) => html`
    <process-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      layout=${args.layout}
      .steps=${args.steps}
    ></process-block>
  `,
};
