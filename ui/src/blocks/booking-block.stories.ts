import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./booking-block";

const meta: Meta = {
  title: "Blocks/BookingBlock",
  component: "booking-block",
  tags: ["autodocs"],
  render: (args) => html`
    <booking-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .services=${args.services}
    ></booking-block>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Boka din tid",
    subheading: "Välj en tjänst och hitta en tid som passar dig",
    services: [
      { id: "1", name: "Grundkurs Jakt", duration: 60, price: "500 kr", description: "En introduktion till jaktens grunder." },
      { id: "2", name: "Avancerad Skytteträning", duration: 90, price: "850 kr", description: "Förfina din teknik med expertinstruktörer." },
      { id: "3", name: "Viltvårdssafari", duration: 120, price: "1200 kr", description: "Lär dig om skogens ekosystem i praktiken." }
    ],
  },
};

export const CustomServices: Story = {
  args: {
    heading: "Våra Kurser",
    subheading: "Boka en plats på våra populära utbildningar",
    services: [
      { id: "c1", name: "Jägarexamen Intensiv", duration: 180, price: "4500 kr", description: "Allt du behöver för att klara provet." },
      { id: "c2", name: "Hundträning för jakt", duration: 45, price: "600 kr", description: "Få din fyrbenta vän redo för säsongen." }
    ],
  },
};
