import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./image-gallery";

const meta: Meta = {
  title: "Blocks/ImageGallery",
  component: "image-gallery",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    columns: {
      control: "select",
      options: [2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Bildgalleri",
    columns: 3,
    images: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        alt: "Workspace",
        caption: "Modern workspace med laptop",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        alt: "Analytics",
        caption: "Data analytics dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        alt: "Team",
        caption: "Teamarbete och samarbete",
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        alt: "Office",
        caption: "Modernt kontor",
      },
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        alt: "Meeting",
        caption: "Produktivt möte",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
        alt: "Teamwork",
        caption: "Kreativt teamarbete",
      },
    ],
  },
  render: (args) => html`
    <image-gallery
      .heading=${args.heading}
      columns=${args.columns}
      .images=${args.images}
    ></image-gallery>
  `,
};

export const TwoColumns: Story = {
  args: {
    heading: "Våra projekt",
    columns: 2,
    images: [
      {
        src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        alt: "Project 1",
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        alt: "Project 2",
      },
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        alt: "Project 3",
      },
      {
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
        alt: "Project 4",
      },
    ],
  },
  render: (args) => html`
    <image-gallery
      .heading=${args.heading}
      columns=${args.columns}
      .images=${args.images}
    ></image-gallery>
  `,
};

export const FourColumns: Story = {
  args: {
    heading: "Portfolio",
    columns: 4,
    images: [
      { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80", alt: "1" },
      { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", alt: "2" },
      { src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80", alt: "3" },
      { src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&q=80", alt: "4" },
      { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80", alt: "5" },
      { src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80", alt: "6" },
      { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80", alt: "7" },
      { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80", alt: "8" },
    ],
  },
  render: (args) => html`
    <image-gallery
      .heading=${args.heading}
      columns=${args.columns}
      .images=${args.images}
    ></image-gallery>
  `,
};

export const NoHeading: Story = {
  args: {
    heading: "",
    columns: 3,
    images: [
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", alt: "Earth" },
      { src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80", alt: "Lights" },
      { src: "https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=800&q=80", alt: "Network" },
    ],
  },
  render: (args) => html`
    <image-gallery
      .heading=${args.heading}
      columns=${args.columns}
      .images=${args.images}
    ></image-gallery>
  `,
};
