import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-container";

const meta: Meta = {
  title: "Components/Container",
  component: "ui-container",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "default", "large", "full"],
    },
    centered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: "default",
    centered: true,
  },
  render: (args) => html`
    <div style="background: #f1f5f9; padding: 2rem 0;">
      <ui-container size=${args.size} ?centered=${args.centered}>
        <div style="background: white; padding: 2rem; border-radius: 8px;">
          <h2 style="margin: 0 0 1rem 0;">Container Content</h2>
          <p style="margin: 0; color: #64748b;">
            This content is wrapped in a container component that provides consistent max-width and
            padding across your application.
          </p>
        </div>
      </ui-container>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; background: #f1f5f9; padding: 2rem 0;">
      <ui-container size="small">
        <div style="background: white; padding: 1.5rem; border-radius: 8px;">
          <h3 style="margin: 0 0 0.5rem 0;">Small Container (640px)</h3>
          <p style="margin: 0; color: #64748b;">Perfect for focused content like blog posts.</p>
        </div>
      </ui-container>

      <ui-container size="default">
        <div style="background: white; padding: 1.5rem; border-radius: 8px;">
          <h3 style="margin: 0 0 0.5rem 0;">Default Container (1200px)</h3>
          <p style="margin: 0; color: #64748b;">
            Ideal for most page layouts and content sections.
          </p>
        </div>
      </ui-container>

      <ui-container size="large">
        <div style="background: white; padding: 1.5rem; border-radius: 8px;">
          <h3 style="margin: 0 0 0.5rem 0;">Large Container (1400px)</h3>
          <p style="margin: 0; color: #64748b;">Great for dashboards and data-heavy layouts.</p>
        </div>
      </ui-container>

      <ui-container size="full">
        <div style="background: white; padding: 1.5rem; border-radius: 8px;">
          <h3 style="margin: 0 0 0.5rem 0;">Full Width Container</h3>
          <p style="margin: 0; color: #64748b;">Uses the entire viewport width.</p>
        </div>
      </ui-container>
    </div>
  `,
};

export const BlogPost: Story = {
  render: () => html`
    <div style="background: #f8fafc; padding: 3rem 0;">
      <ui-container size="small">
        <article style="background: white; padding: 3rem; border-radius: 12px;">
          <h1 style="margin: 0 0 0.5rem 0; font-size: 2.5rem;">The Future of Web Development</h1>
          <p style="margin: 0 0 2rem 0; color: #64748b;">Published on January 15, 2024</p>

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
            alt="Web development"
            style="width: 100%; border-radius: 8px; margin-bottom: 2rem;"
          />

          <p style="line-height: 1.8; color: #475569; margin-bottom: 1.5rem;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p style="line-height: 1.8; color: #475569; margin: 0;">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </ui-container>
    </div>
  `,
};

export const DashboardLayout: Story = {
  render: () => html`
    <div style="background: #f1f5f9; min-height: 100vh; padding: 2rem 0;">
      <ui-container size="large">
        <h1 style="margin: 0 0 2rem 0;">Dashboard</h1>

        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;"
        >
          <div style="background: white; padding: 1.5rem; border-radius: 8px;">
            <h3 style="margin: 0 0 0.5rem 0; color: #64748b; font-size: 0.875rem;">Total Sales</h3>
            <p style="margin: 0; font-size: 2rem; font-weight: 700;">$45,231</p>
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 8px;">
            <h3 style="margin: 0 0 0.5rem 0; color: #64748b; font-size: 0.875rem;">New Users</h3>
            <p style="margin: 0; font-size: 2rem; font-weight: 700;">2,345</p>
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 8px;">
            <h3 style="margin: 0 0 0.5rem 0; color: #64748b; font-size: 0.875rem;">
              Conversion Rate
            </h3>
            <p style="margin: 0; font-size: 2rem; font-weight: 700;">3.24%</p>
          </div>
        </div>

        <div style="background: white; padding: 2rem; border-radius: 8px;">
          <h2 style="margin: 0 0 1rem 0;">Recent Activity</h2>
          <p style="margin: 0; color: #64748b;">Your activity data will appear here.</p>
        </div>
      </ui-container>
    </div>
  `,
};

export const NestedContainers: Story = {
  render: () => html`
    <div style="background: #f1f5f9; padding: 2rem 0;">
      <ui-container size="large">
        <div style="background: white; padding: 2rem; border-radius: 8px; margin-bottom: 2rem;">
          <h2 style="margin: 0 0 1rem 0;">Outer Container (Large)</h2>

          <ui-container size="small" centered>
            <div style="background: #dbeafe; padding: 1.5rem; border-radius: 8px;">
              <h3 style="margin: 0 0 0.5rem 0;">Inner Container (Small)</h3>
              <p style="margin: 0; color: #1e40af;">
                Containers can be nested for more complex layouts.
              </p>
            </div>
          </ui-container>
        </div>
      </ui-container>
    </div>
  `,
};
