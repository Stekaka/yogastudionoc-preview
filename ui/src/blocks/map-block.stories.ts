import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./map-block";

const meta: Meta = {
  title: "Blocks/MapBlock",
  component: "map-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    address: { control: "text" },
    mapUrl: { control: "text" },
    phone: { control: "text" },
    email: { control: "text" },
    hours: { control: "text" },
    aspectRatio: {
      control: "select",
      options: ["16/9", "4/3", "21/9"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Hitta till oss",
    address: "Storgatan 1, 111 22 Stockholm",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8618431620655!2d18.06285!3d59.332794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5c4b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sStockholm!5e0!3m2!1sen!2sse!4v1234567890123!5m2!1sen!2sse",
    phone: "+46 8 123 456 78",
    email: "info@example.se",
    hours: "Mån-Fre: 09:00-17:00",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <map-block
      .heading=${args.heading}
      .address=${args.address}
      .mapUrl=${args.mapUrl}
      .phone=${args.phone}
      .email=${args.email}
      .hours=${args.hours}
      aspectRatio=${args.aspectRatio}
    ></map-block>
  `,
};

export const MinimalInfo: Story = {
  args: {
    heading: "Besök oss",
    address: "Kungsgatan 45, 411 15 Göteborg",
    mapUrl: "",
    phone: "+46 70 123 45 67",
    email: "",
    hours: "",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <map-block
      .heading=${args.heading}
      .address=${args.address}
      .mapUrl=${args.mapUrl}
      .phone=${args.phone}
      .email=${args.email}
      .hours=${args.hours}
      aspectRatio=${args.aspectRatio}
    ></map-block>
  `,
};

export const FullInfo: Story = {
  args: {
    heading: "Vårt kontor",
    address: "Drottninggatan 33, 211 49 Malmö\nSverige",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.1234567890123!2d13.003822!3d55.604981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3f5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sMalm%C3%B6!5e0!3m2!1sen!2sse!4v1234567890123!5m2!1sen!2sse",
    phone: "+46 40 123 456",
    email: "malmo@example.se",
    hours: "Mån-Fre: 08:00-18:00\nLör: 10:00-15:00\nSön: Stängt",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <map-block
      .heading=${args.heading}
      .address=${args.address}
      .mapUrl=${args.mapUrl}
      .phone=${args.phone}
      .email=${args.email}
      .hours=${args.hours}
      aspectRatio=${args.aspectRatio}
    ></map-block>
  `,
};

export const NoHeading: Story = {
  args: {
    heading: "",
    address: "Vasagatan 16, 111 20 Stockholm",
    mapUrl: "",
    phone: "+46 8 987 654 32",
    email: "kontakt@example.se",
    hours: "Vardagar: 09:00-17:00",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <map-block
      .heading=${args.heading}
      .address=${args.address}
      .mapUrl=${args.mapUrl}
      .phone=${args.phone}
      .email=${args.email}
      .hours=${args.hours}
      aspectRatio=${args.aspectRatio}
    ></map-block>
  `,
};
