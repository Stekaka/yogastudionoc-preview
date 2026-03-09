import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./content-image-section";

const meta: Meta = {
  title: "Blocks/ContentImageSection",
  component: "content-image-section",
  tags: ["autodocs"],
  argTypes: {
    eyebrow: { control: "text" },
    heading: { control: "text" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    reverse: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

const defaultParagraphs = [
  "Vi tror på det avskalade. På utrymme mellan mattorna. På mjuka naturtoner och ett tempo där kroppen hinner ikapp.",
  "Oavsett om du kommer för stillhet, styrka eller nervsystemets återhämtning så möter vi dig med värme, tydlighet och en praktik som kan anpassas efter dig.",
  "Här får du landa utan prestation – och gå härifrån lite mer hemma i dig själv.",
];

export const Default: Story = {
  args: {
    eyebrow: "Vår filosofi",
    heading: "Soft Minimalism – när det enkla får bära det viktiga",
    paragraphs: defaultParagraphs,
    imageSrc:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    imageAlt: "Interiör från studion – varm miljö med mjukt ljus",
    reverse: false,
  },
  render: (args) => html`
    <content-image-section
      .eyebrow=${args.eyebrow}
      .heading=${args.heading}
      .paragraphs=${args.paragraphs}
      .imageSrc=${args.imageSrc}
      .imageAlt=${args.imageAlt}
      .reverse=${args.reverse}
    ></content-image-section>
  `,
};

export const ImageLeft: Story = {
  args: {
    eyebrow: "Rummet",
    heading: "En yogaoas i Linné – med allt du behöver på plats",
    paragraphs: [
      "Studion är inredd för yoga och återhämtning. Mattor, bolster, filtar och klossar finns här – du tar bara med dig kläder du trivs i.",
      "Vi gillar det personliga: mindre grupper, mer närvaro och en trygghet som gör det lättare att slappna av.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80",
    imageAlt: "Studion från köket – lugn atmosfär",
    reverse: true,
  },
  render: (args) => html`
    <content-image-section
      .eyebrow=${args.eyebrow}
      .heading=${args.heading}
      .paragraphs=${args.paragraphs}
      .imageSrc=${args.imageSrc}
      .imageAlt=${args.imageAlt}
      .reverse=${args.reverse}
    ></content-image-section>
  `,
};

export const NoEyebrow: Story = {
  args: {
    eyebrow: "",
    heading: "Vår vision",
    paragraphs: [
      "Vi tror på enkla lösningar som gör skillnad i vardagen.",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    imageAlt: "Inspirerande bild",
    reverse: false,
  },
  render: (args) => html`
    <content-image-section
      .eyebrow=${args.eyebrow}
      .heading=${args.heading}
      .paragraphs=${args.paragraphs}
      .imageSrc=${args.imageSrc}
      .imageAlt=${args.imageAlt}
      .reverse=${args.reverse}
    ></content-image-section>
  `,
};
