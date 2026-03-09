import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./schedule-block";
import type { ScheduleClassItem } from "./schedule-block";

const sampleClasses: ScheduleClassItem[] = [
  {
    id: "kundalini-mon",
    title: "Kundalini Free Flow",
    instructor: "Layza",
    instructorId: "layza",
    day: "mon",
    time: "18:00",
    duration: 75,
    level: "Alla nivåer",
  },
  {
    id: "yin-tue",
    title: "Yinyoga Flow med Gong",
    instructor: "Layza",
    instructorId: "layza",
    day: "tue",
    time: "17:30",
    duration: 75,
    level: "Alla nivåer",
  },
  {
    id: "gong-tue",
    title: "Gongavslappning",
    instructor: "Sylwia",
    instructorId: "sylwia",
    day: "tue",
    time: "19:15",
    duration: 60,
    level: "Alla nivåer",
  },
  {
    id: "kundalini-wed",
    title: "Kundaliniyoga",
    instructor: "Stina",
    instructorId: "stina",
    day: "wed",
    time: "18:30",
    duration: 75,
    level: "Alla nivåer",
  },
  {
    id: "medicinsk-thu",
    title: "Medicinsk Yoga",
    instructor: "Stina",
    instructorId: "stina",
    day: "thu",
    time: "17:00",
    duration: 90,
    level: "Nybörjare välkomna",
  },
  {
    id: "kundalini-thu",
    title: "Kundaliniyoga",
    instructor: "Stina",
    instructorId: "stina",
    day: "thu",
    time: "19:00",
    duration: 75,
    level: "Alla nivåer",
  },
  {
    id: "yin-fri",
    title: "Mjuk Yoga, Nidra & Gongvila",
    instructor: "Camilla",
    instructorId: "camilla",
    day: "fri",
    time: "11:30",
    duration: 75,
    level: "Alla nivåer",
  },
];

const meta: Meta = {
  title: "Blocks/ScheduleBlock",
  component: "schedule-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    emptyMessage: { control: "text" },
    dayLabels: { control: "object" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Veckoschema",
    emptyMessage: "Inga klasser denna dag.",
    classes: sampleClasses,
  },
  render: (args) => {
    return html`
      <schedule-block
        .heading=${args.heading}
        .emptyMessage=${args.emptyMessage}
        .classes=${args.classes}
      ></schedule-block>
    `;
  },
};

export const NoHeading: Story = {
  args: {
    heading: "",
    emptyMessage: "Inga klasser denna dag.",
    classes: sampleClasses,
  },
  render: (args) => html`
    <schedule-block
      .heading=${args.heading}
      .emptyMessage=${args.emptyMessage}
      .classes=${args.classes}
    ></schedule-block>
  `,
};

export const SingleDay: Story = {
  args: {
    heading: "Måndagar",
    classes: sampleClasses.filter((c) => c.day === "mon"),
  },
  render: (args) => html`
    <schedule-block
      .heading=${args.heading}
      .classes=${args.classes}
    ></schedule-block>
  `,
};

export const Empty: Story = {
  args: {
    heading: "Schema",
    classes: [],
    emptyMessage: "Inga klasser denna vecka. Kom tillbaka snart!",
  },
  render: (args) => html`
    <schedule-block
      .heading=${args.heading}
      .emptyMessage=${args.emptyMessage}
      .classes=${args.classes}
    ></schedule-block>
  `,
};
