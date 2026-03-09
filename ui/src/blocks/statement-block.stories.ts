import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./statement-block";
import "../themes/theme.css";
import "../themes/presets.css";
import "../components/ui-theme-switcher";

const meta: Meta = {
  title: "Blocks/Statement Block",
  component: "statement-block",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const LightTheme: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <statement-block
        theme="light"
        statement="Byggd för skogen."
        substatement="Inte för sociala medier."
      ></statement-block>
    </div>
  `,
};

export const DarkTheme: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <statement-block
        theme="dark"
        statement="Byggd för skogen."
        substatement="Inte för sociala medier."
      ></statement-block>
    </div>
  `,
};

export const SingleStatement: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <statement-block
        theme="light"
        statement="Precision matters."
      ></statement-block>
    </div>
  `,
};

export const DarkSingleStatement: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <statement-block
        theme="dark"
        statement="Designed for professionals."
      ></statement-block>
    </div>
  `,
};

export const ProductFocus: Story = {
  render: () => html`
    <div style="min-height: 100vh;">
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <statement-block
        theme="dark"
        statement="Ett verktyg."
        substatement="Oändliga möjligheter."
      ></statement-block>
    </div>
  `,
};

export const AlternatingStatements: Story = {
  render: () => html`
    <div>
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <!-- Light statement -->
      <statement-block
        theme="light"
        statement="Precision matters."
        substatement="Every detail counts."
      ></statement-block>

      <!-- Dark statement -->
      <statement-block
        theme="dark"
        statement="Built for the wild."
        substatement="Refined for the real world."
      ></statement-block>

      <!-- Light statement -->
      <statement-block
        theme="light"
        statement="One tool."
        substatement="Endless possibilities."
      ></statement-block>
    </div>
  `,
};

export const JaktappenContext: Story = {
  render: () => html`
    <div>
      <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
        <ui-theme-switcher></ui-theme-switcher>
      </div>

      <!-- Used in context with other content -->
      <div style="background: #f5f5f7; padding: 4rem 2rem; text-align: center;">
        <h3 style="font-size: 1.5rem; color: #1d1d1f; margin-bottom: 1rem;">
          Varför Jaktappen?
        </h3>
        <p style="font-size: 1.125rem; color: #6e6e73; max-width: 600px; margin: 0 auto;">
          Andra appar är byggda för att dela bilder och samla likes.
          Jaktappen är byggd för jakten.
        </p>
      </div>

      <statement-block
        theme="dark"
        statement="Byggd för skogen."
        substatement="Inte för sociala medier."
      ></statement-block>

      <div style="background: #f5f5f7; padding: 4rem 2rem; text-align: center;">
        <p style="font-size: 1.125rem; color: #6e6e73; max-width: 600px; margin: 0 auto;">
          Varje funktion, varje pixel – optimerad för ett enda syfte:
          att göra dig till en bättre jägare.
        </p>
      </div>
    </div>
  `,
};
