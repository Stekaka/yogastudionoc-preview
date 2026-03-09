import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./ui-accordion";

const meta: Meta = {
  title: "Components/Accordion",
  component: "ui-accordion",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const basicItems = [
  {
    id: "1",
    title: "What is your return policy?",
    content:
      "You can return any item within 30 days of purchase for a full refund. Items must be in original condition with tags attached.",
  },
  {
    id: "2",
    title: "How long does shipping take?",
    content:
      "Standard shipping takes 5-7 business days. Express shipping is available and takes 2-3 business days.",
  },
  {
    id: "3",
    title: "Do you ship internationally?",
    content:
      "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
  },
];

export const Default: Story = {
  render: () => html` <ui-accordion .items=${basicItems}></ui-accordion> `,
};

export const AllowMultiple: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h3 style="margin: 0 0 1rem 0;">Single item open (default)</h3>
        <ui-accordion .items=${basicItems}></ui-accordion>
      </div>

      <div>
        <h3 style="margin: 0 0 1rem 0;">Multiple items open</h3>
        <ui-accordion allowMultiple .items=${basicItems}></ui-accordion>
      </div>
    </div>
  `,
};

export const FAQ: Story = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2 style="margin: 0 0 1.5rem 0;">Frequently Asked Questions</h2>
      <ui-accordion
        .items=${[
          {
            id: "pricing",
            title: "What are your pricing plans?",
            content:
              "We offer three pricing tiers: Basic ($9/month), Pro ($29/month), and Enterprise (custom pricing). All plans include a 14-day free trial with no credit card required.",
          },
          {
            id: "support",
            title: "What kind of support do you offer?",
            content:
              "We provide 24/7 email support for all plans. Pro and Enterprise plans also include priority support and dedicated account managers.",
          },
          {
            id: "security",
            title: "Is my data secure?",
            content:
              "Yes, we use industry-standard encryption and security practices. All data is encrypted at rest and in transit. We are SOC 2 Type II certified.",
          },
          {
            id: "integrations",
            title: "What integrations do you support?",
            content:
              "We integrate with over 50 popular tools including Slack, Salesforce, HubSpot, Google Workspace, and Microsoft 365. Custom integrations are available for Enterprise plans.",
          },
          {
            id: "cancel",
            title: "Can I cancel anytime?",
            content:
              "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your data will be available for 30 days after cancellation.",
          },
        ]}
      ></ui-accordion>
    </div>
  `,
};

export const ProductFeatures: Story = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2 style="margin: 0 0 1.5rem 0;">Product Features</h2>
      <ui-accordion
        allowMultiple
        .items=${[
          {
            id: "analytics",
            title: "📊 Advanced Analytics",
            content:
              "Get detailed insights into your business with our powerful analytics dashboard. Track key metrics, generate custom reports, and make data-driven decisions.",
          },
          {
            id: "automation",
            title: "🤖 Automation Tools",
            content:
              "Automate repetitive tasks and workflows to save time. Set up triggers, actions, and conditions to streamline your processes.",
          },
          {
            id: "collaboration",
            title: "👥 Team Collaboration",
            content:
              "Work together seamlessly with built-in collaboration tools. Share files, comment on projects, and stay in sync with your team.",
          },
          {
            id: "mobile",
            title: "📱 Mobile Apps",
            content:
              "Access your data on the go with our native iOS and Android apps. Full feature parity with the web version.",
          },
        ]}
      ></ui-accordion>
    </div>
  `,
};

export const HelpCenter: Story = {
  render: () => html`
    <div style="max-width: 800px;">
      <h2 style="margin: 0 0 0.5rem 0;">Help Center</h2>
      <p style="margin: 0 0 1.5rem 0; color: #64748b;">
        Find answers to common questions about our platform
      </p>
      <ui-accordion
        .items=${[
          {
            id: "getting-started",
            title: "Getting Started",
            content:
              "To get started, create an account and complete the onboarding wizard. This will help you set up your workspace and invite team members.",
          },
          {
            id: "account",
            title: "Managing Your Account",
            content:
              "You can manage your account settings from the Settings page. Here you can update your profile, change your password, and manage billing information.",
          },
          {
            id: "billing",
            title: "Billing & Payments",
            content:
              "We accept all major credit cards and PayPal. You can view your invoices and update payment methods in the Billing section of your account.",
          },
          {
            id: "troubleshooting",
            title: "Troubleshooting",
            content:
              "If you're experiencing issues, try clearing your browser cache or using a different browser. For persistent problems, contact our support team.",
          },
        ]}
      ></ui-accordion>
    </div>
  `,
};
