import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./content-block";

const meta: Meta = {
  title: "Blocks/ContentBlock",
  component: "content-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    layout: {
      control: "select",
      options: ["grid", "list"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Grid: Story = {
  args: {
    heading: "Senaste artiklarna",
    subheading: "Läs våra senaste insikter och tips",
    layout: "grid",
    articles: [
      {
        title: "Så bygger du en modern webbplats 2026",
        excerpt: "Lär dig de senaste best practices för att skapa snabba, säkra och användarvänliga webbplatser.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        category: "Webbutveckling",
        date: "4 feb 2026",
        author: "Anna Svensson",
        href: "#",
      },
      {
        title: "Guide: SEO-optimering för nybörjare",
        excerpt: "Allt du behöver veta för att ranka högre i Google och nå fler potentiella kunder.",
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
        category: "SEO",
        date: "2 feb 2026",
        author: "Erik Johansson",
        href: "#",
      },
      {
        title: "5 sätt att öka konverteringen på din hemsida",
        excerpt: "Enkla men effektiva metoder för att få fler besökare att bli kunder.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: "Marknadsföring",
        date: "31 jan 2026",
        author: "Maria Andersson",
        href: "#",
      },
    ],
  },
  render: (args) => html`
    <content-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .layout=${args.layout}
      .articles=${args.articles}
    ></content-block>
  `,
};

export const List: Story = {
  args: {
    heading: "Blogg",
    subheading: "Våra senaste artiklar och guider",
    layout: "list",
    articles: [
      {
        title: "Framtidens e-handel: Trender 2026",
        excerpt: "Vi tittar på de viktigaste trenderna som kommer forma e-handeln under året som kommer.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        category: "E-handel",
        date: "3 feb 2026",
        author: "Lisa Berg",
        href: "#",
      },
      {
        title: "Mobil-first design: Varför det är viktigare än någonsin",
        excerpt: "Över 70% av all webbtrafik kommer från mobila enheter. Här är varför din strategi måste börja där.",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        category: "Design",
        date: "1 feb 2026",
        author: "Peter Lundqvist",
        href: "#",
      },
      {
        title: "Säkerhet på webben: Grundläggande bästa praxis",
        excerpt: "Skydda din webbplats och dina användares data med dessa viktiga säkerhetsåtgärder.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        category: "Säkerhet",
        date: "28 jan 2026",
        author: "Johan Karlsson",
        href: "#",
      },
    ],
  },
  render: (args) => html`
    <content-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .layout=${args.layout}
      .articles=${args.articles}
    ></content-block>
  `,
};

export const NoImages: Story = {
  args: {
    heading: "Nyheter",
    subheading: "",
    layout: "grid",
    articles: [
      {
        title: "Ny version av vår plattform släppt",
        excerpt: "Vi är glada att kunna presentera version 2.0 med massor av nya funktioner och förbättringar.",
        category: "Produktnyheter",
        date: "4 feb 2026",
        href: "#",
      },
      {
        title: "Vi växer - söker nya kollegor",
        excerpt: "Just nu rekryterar vi inom flera roller. Kolla in våra lediga tjänster.",
        category: "Företag",
        date: "1 feb 2026",
        href: "#",
      },
      {
        title: "Nya partnerskap annonserade",
        excerpt: "Vi har ingått strategiska partnerskap med flera ledande företag inom branschen.",
        category: "Företag",
        date: "28 jan 2026",
        href: "#",
      },
    ],
  },
  render: (args) => html`
    <content-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .layout=${args.layout}
      .articles=${args.articles}
    ></content-block>
  `,
};
