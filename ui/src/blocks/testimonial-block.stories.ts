import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./testimonial-block";

const meta: Meta = {
  title: "Blocks/TestimonialBlock",
  component: "testimonial-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Vad våra kunder säger",
    testimonials: [
      {
        quote: "Fantastiskt arbete! De levererade precis vad vi behövde och överträffade våra förväntningar.",
        author: "Anna Svensson",
        role: "VD",
        company: "Tech AB",
      },
      {
        quote: "Professionellt team som verkligen förstår kundens behov. Kan varmt rekommendera!",
        author: "Erik Johansson",
        role: "Marketing Manager",
        company: "Digital Solutions",
      },
      {
        quote: "Snabb respons och hög kvalitet. Vi kommer definitivt att arbeta med dem igen.",
        author: "Maria Andersson",
        role: "Projektledare",
        company: "Innovation Group",
      },
    ],
  },
  render: (args) => html`
    <testimonial-block
      .heading=${args.heading}
      .testimonials=${args.testimonials}
    ></testimonial-block>
  `,
};

export const WithAvatars: Story = {
  args: {
    heading: "Kundrecensioner",
    testimonials: [
      {
        quote: "En game-changer för vårt företag. Resultaten talar för sig själva.",
        author: "Lisa Berg",
        role: "CEO",
        company: "Startup Inc",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        quote: "Bästa investeringen vi har gjort. ROI var synlig redan första månaden.",
        author: "Peter Lundqvist",
        role: "COO",
        company: "Growth Co",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    ],
  },
  render: (args) => html`
    <testimonial-block
      .heading=${args.heading}
      .testimonials=${args.testimonials}
    ></testimonial-block>
  `,
};

export const SingleTestimonial: Story = {
  args: {
    heading: "Vad kunden säger",
    testimonials: [
      {
        quote: "Vi har arbetat med många leverantörer genom åren, men ingen har kommit i närheten av den kvalitet och service vi får här. Teamet är otroligt kunnigt och alltid tillgängligt när vi behöver dem. Varje projekt har levererats i tid och med resultat som överträffat våra förväntningar.",
        author: "Johan Karlsson",
        role: "Head of Digital",
        company: "Enterprise Solutions AB",
      },
    ],
  },
  render: (args) => html`
    <testimonial-block
      .heading=${args.heading}
      .testimonials=${args.testimonials}
    ></testimonial-block>
  `,
};
