import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./feature-grid-pro";

const meta: Meta = {
  title: "Blocks/FeatureGridPro",
  component: "feature-grid-pro",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    variant: {
      control: "select",
      options: ["cards", "image-left", "image-right"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Cards: Story = {
  args: {
    heading: "Våra funktioner",
    subheading: "Kraftfulla verktyg för att växa ditt företag",
    variant: "cards",
    features: [
      {
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
        title: "Professionell kvalitet",
        description: "Vi levererar lösningar i världsklass med fokus på detaljer och användarupplevelse.",
        link: {
          text: "Läs mer →",
          href: "#"
        }
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
        title: "Teamsamarbete",
        description: "Samarbeta sömlöst med ditt team i realtid, oavsett var ni befinner er.",
        link: {
          text: "Läs mer →",
          href: "#"
        }
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        title: "Kraftfull analys",
        description: "Få djupgående insikter med våra avancerade analysverktyg och rapporter.",
        link: {
          text: "Läs mer →",
          href: "#"
        }
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
        title: "Säkerhet först",
        description: "Enterprise-grade säkerhet med kryptering, 2FA och fullständig GDPR-compliance.",
        link: {
          text: "Läs mer →",
          href: "#"
        }
      }
    ],
  },
  render: (args) => html`
    <feature-grid-pro
      .heading=${args.heading}
      .subheading=${args.subheading}
      .variant=${args.variant}
      .features=${args.features}
    ></feature-grid-pro>
  `,
};

export const ImageLeft: Story = {
  args: {
    heading: "Så fungerar det",
    subheading: "Enkel process från start till mål",
    variant: "image-left",
    features: [
      {
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        title: "Analys och strategi",
        description: "Vi börjar med en grundlig analys av dina behov och utmaningar. Tillsammans skapar vi en strategi som passar just ditt företag.",
        link: {
          text: "Läs mer om vår process →",
          href: "#"
        }
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        title: "Design och utveckling",
        description: "Vårt team designar och utvecklar lösningen med fokus på användarvänlighet och prestanda.",
        link: {
          text: "Se våra tidigare projekt →",
          href: "#"
        }
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        title: "Lansering och support",
        description: "Vi lanserar din lösning och ger kontinuerlig support för att säkerställa framgång.",
        link: {
          text: "Kontakta support →",
          href: "#"
        }
      }
    ],
  },
  render: (args) => html`
    <feature-grid-pro
      .heading=${args.heading}
      .subheading=${args.subheading}
      .variant=${args.variant}
      .features=${args.features}
    ></feature-grid-pro>
  `,
};

export const ImageRight: Story = {
  args: {
    heading: "Varför välja oss",
    subheading: "Beprövad expertis och resultat",
    variant: "image-right",
    features: [
      {
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
        title: "10+ års erfarenhet",
        description: "Vi har levererat över 500 framgångsrika projekt till företag i alla storlekar.",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
        title: "Expert team",
        description: "Vårt team består av branschledande experter inom design, utveckling och strategi.",
      }
    ],
  },
  render: (args) => html`
    <feature-grid-pro
      .heading=${args.heading}
      .subheading=${args.subheading}
      .variant=${args.variant}
      .features=${args.features}
    ></feature-grid-pro>
  `,
};

export const WithIcons: Story = {
  args: {
    heading: "Våra styrkor",
    subheading: "Vad gör oss unika",
    variant: "cards",
    features: [
      {
        icon: "⚡",
        title: "Blixtsnabb utveckling",
        description: "Vi levererar projekt 2x snabbare än branschstandarden utan att kompromissa med kvalitet.",
        link: {
          text: "Se våra case studies →",
          href: "#"
        }
      },
      {
        icon: "🔒",
        title: "Maximal säkerhet",
        description: "Enterprise-grade säkerhet med penetrationstester och fullständig compliance.",
        link: {
          text: "Läs om vår säkerhet →",
          href: "#"
        }
      },
      {
        icon: "💎",
        title: "Premium kvalitet",
        description: "Prisbelönt design och kod som håller högsta internationella standard.",
      }
    ],
  },
  render: (args) => html`
    <feature-grid-pro
      .heading=${args.heading}
      .subheading=${args.subheading}
      .variant=${args.variant}
      .features=${args.features}
    ></feature-grid-pro>
  `,
};
