import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./product-block";

const meta: Meta = {
  title: "Blocks/ProductBlock",
  component: "product-block",
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
    heading: "Våra produkter",
    subheading: "Välj den lösning som passar ditt företag bäst",
    products: [
      {
        name: "Starter Pack",
        tagline: "Perfekt för att komma igång",
        price: "299 kr",
        description: "Allt du behöver för att börja använda vår plattform.",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
        features: [
          { text: "Grundläggande funktioner", included: true },
          { text: "Email support", included: true },
          { text: "1 GB lagring", included: true },
          { text: "Avancerad analys", included: false },
          { text: "API-åtkomst", included: false }
        ],
        primaryAction: {
          text: "Köp nu",
          href: "#"
        },
        secondaryAction: {
          text: "Läs mer",
          href: "#"
        }
      },
      {
        name: "Professional",
        tagline: "För växande företag",
        price: "999 kr",
        description: "Fullfjädrad lösning med alla verktyg du behöver.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        features: [
          { text: "Alla grundfunktioner", included: true },
          { text: "Prioriterad support", included: true },
          { text: "100 GB lagring", included: true },
          { text: "Avancerad analys", included: true },
          { text: "API-åtkomst", included: true }
        ],
        primaryAction: {
          text: "Köp nu",
          href: "#"
        },
        secondaryAction: {
          text: "Läs mer",
          href: "#"
        },
        badge: "Populärast"
      },
      {
        name: "Enterprise",
        tagline: "Skräddarsydda lösningar",
        price: "Kontakta oss",
        description: "Anpassad efter dina unika behov och krav.",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
        features: [
          { text: "Obegränsat allt", included: true },
          { text: "Dedikerad support", included: true },
          { text: "Obegränsad lagring", included: true },
          { text: "Custom integrationer", included: true },
          { text: "SLA garanti", included: true }
        ],
        primaryAction: {
          text: "Kontakta oss",
          href: "#"
        }
      }
    ],
  },
  render: (args) => html`
    <product-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .products=${args.products}
    ></product-block>
  `,
};

export const DigitalProducts: Story = {
  args: {
    heading: "Digitala produkter",
    subheading: "Ladda ner direkt och kom igång på några minuter",
    products: [
      {
        name: "Design System Pro",
        tagline: "Komplett UI-kit för Figma",
        price: "1 299 kr",
        discount: "2 499 kr",
        description: "1000+ komponenter, ikoner och mallar för professionella webbprojekt.",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
        features: [
          { text: "1000+ Figma komponenter", included: true },
          { text: "12 färgpaletter", included: true },
          { text: "Responsiva layouts", included: true },
          { text: "Livstidsuppdateringar", included: true },
          { text: "Premium support", included: true }
        ],
        primaryAction: {
          text: "Ladda ner nu",
          href: "#"
        },
        secondaryAction: {
          text: "Se förhandsvisning",
          href: "#"
        },
        badge: "50% Rabatt"
      },
      {
        name: "WordPress Tema Premium",
        tagline: "Professionellt tema för företag",
        price: "899 kr",
        description: "Snabbt, SEO-optimerat tema med Elementor-integration.",
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80",
        features: [
          { text: "30+ färdiga sidor", included: true },
          { text: "WooCommerce ready", included: true },
          { text: "1-klicks demo import", included: true },
          { text: "Premium plugins inkl.", included: true },
          { text: "6 månaders support", included: true }
        ],
        primaryAction: {
          text: "Köp tema",
          href: "#"
        },
        secondaryAction: {
          text: "Live demo",
          href: "#"
        }
      }
    ],
  },
  render: (args) => html`
    <product-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .products=${args.products}
    ></product-block>
  `,
};

export const SaaSProducts: Story = {
  args: {
    heading: "SaaS Lösningar",
    subheading: "Kraftfulla verktyg för moderna företag",
    products: [
      {
        name: "CRM Pro",
        tagline: "Hantera kundrelationer enkelt",
        price: "499 kr/mån",
        description: "Komplett CRM-system med automation och analyser.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        features: [
          { text: "Obegränsat kontakter", included: true },
          { text: "Email automation", included: true },
          { text: "Pipeline management", included: true },
          { text: "Rapporter & analyser", included: true },
          { text: "Integrationer", included: true }
        ],
        primaryAction: {
          text: "Starta free trial",
          href: "#"
        },
        secondaryAction: {
          text: "Boka demo",
          href: "#"
        },
        badge: "14 dagar gratis"
      },
      {
        name: "Project Management",
        tagline: "Samarbeta effektivare",
        price: "299 kr/mån",
        description: "Hantera projekt, tasks och team på ett ställe.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
        features: [
          { text: "Obegränsat projekt", included: true },
          { text: "Kanban boards", included: true },
          { text: "Tidsrapportering", included: true },
          { text: "File sharing", included: true },
          { text: "Team chat", included: true }
        ],
        primaryAction: {
          text: "Kom igång",
          href: "#"
        }
      }
    ],
  },
  render: (args) => html`
    <product-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .products=${args.products}
    ></product-block>
  `,
};

export const SingleProduct: Story = {
  args: {
    heading: "Premium Kurs",
    subheading: "Lär dig bygga moderna webbapplikationer från scratch",
    products: [
      {
        name: "Complete Web Development Bootcamp",
        tagline: "Från nybörjare till professionell på 12 veckor",
        price: "4 995 kr",
        discount: "7 995 kr",
        description: "Omfattande kurs med 50+ timmars videomaterial, praktiska projekt och certifiering.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        features: [
          { text: "50+ timmar videomaterial", included: true },
          { text: "10 fullständiga projekt", included: true },
          { text: "Livstidsåtkomst", included: true },
          { text: "Certifikat vid avslut", included: true },
          { text: "Community access", included: true },
          { text: "1-on-1 mentorskap", included: true },
          { text: "Jobbgaranti", included: false }
        ],
        primaryAction: {
          text: "Köp kursen nu",
          href: "#"
        },
        secondaryAction: {
          text: "Se gratis förhandstitt",
          href: "#"
        },
        badge: "Begränsat erbjudande"
      }
    ],
  },
  render: (args) => html`
    <product-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .products=${args.products}
    ></product-block>
  `,
};
