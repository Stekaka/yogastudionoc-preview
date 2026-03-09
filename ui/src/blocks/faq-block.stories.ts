import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./faq-block";

const meta: Meta = {
  title: "Blocks/FAQBlock",
  component: "faq-block",
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    heading: "Vanliga frågor",
    subheading: "Här hittar du svar på de vanligaste frågorna",
    faqs: [
      {
        question: "Hur lång tid tar det att bygga en webbplats?",
        answer: "Det beror på projektets omfattning, men en typisk företagswebbplats tar 4-8 veckor från start till lansering. Detta inkluderar design, utveckling, innehåll och testning.",
      },
      {
        question: "Vad kostar det att bygga en webbplats?",
        answer: "Priset varierar beroende på funktionalitet och omfattning. En enkel webbplats börjar från 25 000 kr, medan mer avancerade lösningar kan kosta 100 000 kr eller mer. Vi erbjuder alltid en kostnadsfri offert.",
      },
      {
        question: "Får jag hjälp med innehåll och text?",
        answer: "Ja, vi kan hjälpa till med både copywriting och innehållsstrategi. Vi har erfarna copywriters som kan skapa engagerande och SEO-optimerat innehåll för din webbplats.",
      },
      {
        question: "Kan jag uppdatera webbplatsen själv efteråt?",
        answer: "Absolut! Vi bygger alla webbplatser med användarvänliga CMS-system som WordPress eller Sanity. Du får en genomgång av hur du enkelt uppdaterar innehåll, bilder och sidor själv.",
      },
      {
        question: "Ingår hosting och underhåll?",
        answer: "Vi erbjuder både hosting och löpande underhåll som tillval. Detta inkluderar säkerhetsuppdateringar, backup, övervakning och teknisk support. Kontakta oss för mer information om våra serviceavtal.",
      },
    ],
  },
  render: (args) => html`
    <faq-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .faqs=${args.faqs}
    ></faq-block>
  `,
};

export const Short: Story = {
  args: {
    heading: "Har du frågor?",
    subheading: "",
    faqs: [
      {
        question: "Hur kommer jag igång?",
        answer: "Kontakta oss via formuläret eller ring oss direkt. Vi bokar ett möte för att diskutera dina behov och ta fram en skräddarsydd lösning.",
      },
      {
        question: "Vilka betalningsalternativ finns?",
        answer: "Vi accepterar faktura, kortbetalning och delbetalning. Kontakta oss för mer information om våra betalningsvillkor.",
      },
      {
        question: "Finns det support efter lansering?",
        answer: "Ja, vi erbjuder kontinuerlig support och underhåll. Du kan alltid kontakta oss om du behöver hjälp eller har frågor.",
      },
    ],
  },
  render: (args) => html`
    <faq-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .faqs=${args.faqs}
    ></faq-block>
  `,
};

export const ProductFAQ: Story = {
  args: {
    heading: "Frågor om produkten",
    subheading: "Allt du behöver veta om vår plattform",
    faqs: [
      {
        question: "Finns det en gratis testperiod?",
        answer: "Ja, vi erbjuder 14 dagars gratis provperiod. Ingen kreditkort krävs och du kan när som helst uppgradera till en betalplan.",
      },
      {
        question: "Kan jag avsluta när jag vill?",
        answer: "Absolut! Det finns ingen bindningstid. Du kan avsluta ditt konto när som helst direkt i inställningarna.",
      },
      {
        question: "Vilka integra tioner stöds?",
        answer: "Vi har integrationer med över 50 populära tjänster inklusive Slack, Google Workspace, Microsoft 365, Salesforce och många fler. Se vår dokumentation för komplett lista.",
      },
      {
        question: "Är mina data säkra?",
        answer: "Ja, vi tar säkerhet på största allvar. All data krypteras både i transit och i vila. Vi är GDPR-kompatibla och har ISO 27001-certifiering.",
      },
      {
        question: "Kan jag migrera från en annan tjänst?",
        answer: "Ja, vi hjälper dig att migrera från de flesta konkurrenters tjänster. Kontakta vårt supportteam så hjälper vi dig genom processen.",
      },
      {
        question: "Vilken support får jag?",
        answer: "Alla planer inkluderar email-support med svar inom 24 timmar. Premium- och Enterprise-kunder får prioriterad support och telefonsupport.",
      },
    ],
  },
  render: (args) => html`
    <faq-block
      .heading=${args.heading}
      .subheading=${args.subheading}
      .faqs=${args.faqs}
    ></faq-block>
  `,
};
