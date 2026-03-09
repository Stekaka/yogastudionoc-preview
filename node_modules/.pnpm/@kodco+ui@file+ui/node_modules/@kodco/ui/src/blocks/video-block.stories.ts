import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./video-block";

const meta: Meta = {
  title: "Blocks/VideoBlock",
  component: "video-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
    videoUrl: { control: "text" },
    provider: {
      control: "select",
      options: ["youtube", "vimeo", "direct"],
    },
    aspectRatio: {
      control: "select",
      options: ["16/9", "4/3", "1/1"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const YouTube: Story = {
  args: {
    heading: "Se vår produktdemo",
    subheading: "Lär dig hur vår plattform kan hjälpa ditt företag",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    provider: "youtube",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <video-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .videoUrl=${args.videoUrl}
      provider=${args.provider}
      aspectRatio=${args.aspectRatio}
    ></video-block>
  `,
};

export const Vimeo: Story = {
  args: {
    heading: "Kundintervju",
    subheading: "Hör vad våra kunder säger om oss",
    videoUrl: "https://vimeo.com/148751763",
    provider: "vimeo",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <video-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .videoUrl=${args.videoUrl}
      provider=${args.provider}
      aspectRatio=${args.aspectRatio}
    ></video-block>
  `,
};

export const NoHeading: Story = {
  args: {
    heading: "",
    subheading: "",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    provider: "youtube",
    aspectRatio: "16/9",
  },
  render: (args) => html`
    <video-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .videoUrl=${args.videoUrl}
      provider=${args.provider}
      aspectRatio=${args.aspectRatio}
    ></video-block>
  `,
};

export const SquareAspect: Story = {
  args: {
    heading: "Instagram-stil video",
    subheading: "",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    provider: "youtube",
    aspectRatio: "1/1",
  },
  render: (args) => html`
    <video-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .videoUrl=${args.videoUrl}
      provider=${args.provider}
      aspectRatio=${args.aspectRatio}
    ></video-block>
  `,
};
