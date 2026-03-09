import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./recipe-block.js";

const meta: Meta = {
  title: "Blocks/RecipeBlock",
  component: "recipe-block",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Grön Smoothie Bowl",
    description: "En näringsrik och fräsch smoothie bowl perfekt efter ett morgonpass yoga.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000",
    prepTime: "10 min",
    servings: "1 portion",
    difficulty: "Enkel",
    ingredients: [
      { item: "Fryst mango", amount: "2 dl" },
      { item: "Färsk spenat", amount: "1 näve" },
      { item: "Avokado", amount: "1/2 st" },
      { item: "Vatten eller valfri mjölk", amount: "1 dl" },
      { item: "Topping: Granola, chiafrön, bär", amount: "Valfritt" }
    ],
    instructions: [
      { step: 1, text: "Mixa alla ingredienser utom toppingen i en blender till en slät konsistens." },
      { step: 2, text: "Häll upp i en skål." },
      { step: 3, text: "Toppa med granola, chiafrön och färska bär." },
      { step: 4, text: "Njut direkt!" }
    ]
  },
  render: (args) => html`
    <recipe-block
      .heading=${args.heading}
      .description=${args.description}
      .image=${args.image}
      .prepTime=${args.prepTime}
      .servings=${args.servings}
      .difficulty=${args.difficulty}
      .ingredients=${args.ingredients}
      .instructions=${args.instructions}
    ></recipe-block>
  `,
};
