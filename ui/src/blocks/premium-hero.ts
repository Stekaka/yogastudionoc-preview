import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type HeroLayout = "center" | "split";
type HeroStyle = "default" | "enterprise" | "saas";
type HeroMedia = "none" | "slot" | "image" | "video";

@customElement("premium-hero")
export class PremiumHero extends LitElement {
    @property({ type: String, reflect: true }) badge = "";
    @property({ type: String, reflect: true }) heading = "Premium headline here";
    @property({ type: String, reflect: true }) subheading = "";

    @property({ type: String, attribute: "primary-cta" }) primaryCta = "";
    @property({ type: String, attribute: "primary-href" }) primaryHref = "#";
    @property({ type: String, attribute: "secondary-cta" }) secondaryCta = "";
    @property({ type: String, attribute: "secondary-href" }) secondaryHref = "#";

    @property({ type: String, attribute: "background-image", reflect: true }) backgroundImage = "";

    @property({ type: String, reflect: true })
    layout: HeroLayout = "center";

    @property({ type: String, attribute: "style-variant", reflect: true })
    styleVariant: HeroStyle = "default";

    @property({ type: String, reflect: true })
    media: HeroMedia = "none";

    @property({ type: String, attribute: "media-src" }) mediaSrc = "";
    @property({ type: String, attribute: "media-alt" }) mediaAlt = "";
    @property({ type: String, attribute: "video-poster" }) videoPoster = "";

    @property({ type: Boolean, attribute: "show-glow", reflect: true }) showGlow = true;
    @property({ type: Number, attribute: "glow-strength" }) glowStrength = 1;

    static styles = css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      background: var(--color-background);
      padding: 10rem 2rem 8rem;
    }

    /* Background image layer */
    .bg-image {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      opacity: 0.9;
      z-index: 1;
      transform: scale(1.02);
      background-repeat: no-repeat;
      pointer-events: none;
      min-height: 100%;
      min-width: 100%;
    }

    /* Glow (subtle, theme-aware) */
    .glow {
      position: absolute;
      inset: -20%;
      z-index: 1;
      pointer-events: none;
      opacity: 0;
    }

    :host([show-glow]) .glow {
      opacity: 0.7;
    }

    /* Overlay for readability across themes */
    .overlay {
      position: absolute;
      inset: 0;
      z-index: 0;
      background: linear-gradient(
        to bottom,
        transparent,
        color-mix(in srgb, var(--color-background) 20%, transparent),
        color-mix(in srgb, var(--color-background) 60%, transparent)
      );
      pointer-events: none;
    }

    .glow::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
          circle at 20% 25%,
          color-mix(in srgb, var(--color-primary) 25%, transparent),
          transparent 55%
        ),
        radial-gradient(
          circle at 70% 20%,
          color-mix(in srgb, var(--color-primary) 18%, transparent),
          transparent 60%
        ),
        radial-gradient(
          circle at 60% 80%,
          color-mix(in srgb, var(--color-primary) 14%, transparent),
          transparent 55%
        );
      filter: blur(calc(28px * var(--_glowStrength, 1)));
      transform: translate3d(0, 0, 0);
    }

    .glow::after {
      content: "";
      position: absolute;
      inset: 0;
      background: conic-gradient(
        from 180deg at 50% 50%,
        color-mix(in srgb, var(--color-primary) 18%, transparent),
        transparent,
        color-mix(in srgb, var(--color-primary) 10%, transparent),
        transparent,
        color-mix(in srgb, var(--color-primary) 18%, transparent)
      );
      opacity: 0.18;
      filter: blur(calc(34px * var(--_glowStrength, 1)));
      transform: translate3d(0, 0, 0);
      animation: glowSpin 16s linear infinite;
    }

    @keyframes glowSpin {
      from {
        transform: rotate(0deg) scale(1.02);
      }
      to {
        transform: rotate(360deg) scale(1.02);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .glow::after {
        animation: none;
      }
    }

    .container {
      position: relative;
      z-index: 3;
      max-width: 1200px;
      margin: 0 auto;
        padding-top: 4rem;
    }

    .layout-center {
      text-align: center;
      max-width: 860px;
      margin: 0 auto;
    }

    .layout-split {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 4rem;
      align-items: center;
    }

    /* Card panel for enterprise/split media */
    .panel {
      border-radius: calc(var(--radius-base, 12px) * 1.25);
      background: color-mix(in srgb, var(--color-surface, white) 86%, transparent);
      border: 1px solid var(--color-border);
      box-shadow: 0 18px 60px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    /* Headings */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.9rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      border: 1px solid var(--color-border);
      background: color-mix(in srgb, var(--color-surface, white) 75%, transparent);
      color: var(--color-text-primary);
    }

    :host([data-style="saas"]) .badge {
      border: 1px solid color-mix(in srgb, var(--color-primary) 35%, var(--color-border));
      background: color-mix(in srgb, var(--color-primary) 18%, transparent);
    }

    :host([data-style="enterprise"]) .badge {
      background: color-mix(in srgb, var(--color-surface, white) 92%, transparent);
    }

    h1 {
      margin: 0 0 1.5rem 0;
      line-height: 1.06;
      letter-spacing: -0.02em;
      color: var(--color-text-primary);
      font-size: clamp(2.6rem, 5.2vw, 4.2rem);
    }

    :host([data-style="enterprise"]) h1 {
      letter-spacing: -0.015em;
      font-size: clamp(2.4rem, 4.7vw, 3.8rem);
    }

    :host([data-style="saas"]) h1 {
      letter-spacing: -0.03em;
      font-size: clamp(2.8rem, 5.8vw, 4.6rem);
    }

    .subheading {
      margin: 0 0 2.6rem 0;
      color: var(--color-text-secondary);
      line-height: 1.65;
      font-size: 1.25rem;
      max-width: 60ch;
    }

    .layout-center .subheading {
      margin-left: auto;
      margin-right: auto;
    }

    /* CTA */
    .cta-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    .layout-split .cta-group {
      justify-content: flex-start;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.95rem 1.65rem;
      border-radius: calc(var(--radius-base, 10px) * 1);
      background: var(--color-primary);
      color: white;
      text-decoration: none;
      font-weight: 650;
      border: 1px solid color-mix(in srgb, var(--color-primary) 65%, transparent);
      transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 40px rgba(0, 0, 0, 0.16);
      filter: brightness(1.02);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.95rem 1.65rem;
      border-radius: calc(var(--radius-base, 10px) * 1);
      background: transparent;
      border: 1px solid var(--color-border);
      color: var(--color-text-primary);
      text-decoration: none;
      font-weight: 550;
      transition: transform 0.2s ease, background 0.2s ease;
    }

    .btn-secondary:hover {
      transform: translateY(-1px);
      background: color-mix(in srgb, var(--color-surface, white) 70%, transparent);
    }

    /* Media */
    .media-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .media-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .video-responsive {
      width: 100%;
      aspect-ratio: 16 / 9;
      display: block;
      border: 0;
    }

    video.video-native {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Dark-mode resilience:
       We assume your dark preset sets --color-background / --color-surface / --color-text-* appropriately.
       This just tunes shadow strength a bit for dark backgrounds without hardcoding colors. */
    :host([data-style="enterprise"]) .panel {
      box-shadow: 0 18px 70px rgba(0, 0, 0, 0.14);
    }

    :host([data-style="enterprise"][data-has-bg="true"]) .bg-image {
      opacity: 0.1;
    }

    :host([data-style="enterprise"][data-show-glow="true"]) .glow {
      opacity: 0.35;
    }

    /* SaaS gets a bit more visual energy */
    :host([data-style="saas"][data-show-glow="true"]) .glow {
      opacity: 0.7;
    }

    /* Responsive */
    @media (max-width: 960px) {
      :host {
        padding: 8rem 1.5rem 6rem;
      }

      .layout-split {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .cta-group {
        justify-content: center;
      }

      .layout-split .cta-group {
        justify-content: center;
      }

      .subheading {
        font-size: 1.15rem;
      }
    }
  `;

    override updated(): void {
        this.style.setProperty("--_glowStrength", String(this.getGlowStrength()));
    }

    private getGlowStrength(): number {
        const v = Number.isFinite(this.glowStrength) ? this.glowStrength : 1;
        if (v < 0.6) return 0.6;
        if (v > 1.8) return 1.8;
        return v;
    }

    private renderHeader() {
        if (!this.badge && !this.heading && !this.subheading) return "";
        return html`
      ${this.badge ? html`<div class="badge">${this.badge}</div>` : ""}
      ${this.heading ? html`<h1>${this.heading}</h1>` : ""}
      ${this.subheading ? html`<p class="subheading">${this.subheading}</p>` : ""}
    `;
    }

    private renderCtas() {
        if (!this.primaryCta && !this.secondaryCta) return "";
        return html`
      <div class="cta-group">
        ${this.primaryCta
            ? html`<a class="btn-primary" href="${this.primaryHref}">${this.primaryCta}</a>`
            : ""}
        ${this.secondaryCta
            ? html`<a class="btn-secondary" href="${this.secondaryHref}">${this.secondaryCta}</a>`
            : ""}
      </div>
    `;
    }

    private renderMedia() {
        if (this.layout !== "split") return "";
        if (this.media === "none") return "";
        if (this.media === "slot") {
            return html`<div class="media-wrap"><slot></slot></div>`;
        }

        if (this.media === "image") {
            if (!this.mediaSrc) return "";
            return html`
        <div class="panel media-wrap">
          <img class="media-image" src="${this.mediaSrc}" alt="${this.mediaAlt || ""}" loading="lazy" />
        </div>
      `;
        }

        if (this.media === "video") {
            if (!this.mediaSrc) return "";
            const isIframe =
                this.mediaSrc.includes("youtube.com") ||
                this.mediaSrc.includes("youtu.be") ||
                this.mediaSrc.includes("vimeo.com") ||
                this.mediaSrc.startsWith("https://");

            return html`
        <div class="panel media-wrap">
          ${isIframe
                ? html`
                <iframe
                  class="video-responsive"
                  src="${this.mediaSrc}"
                  title="${this.mediaAlt || "Video"}"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              `
                : html`
                <video
                  class="video-native"
                  controls
                  playsinline
                  preload="metadata"
                  poster="${this.videoPoster}"
                >
                  <source src="${this.mediaSrc}" />
                </video>
              `}
        </div>
      `;
        }

        return "";
    }

    render() {
        return html`
      ${this.backgroundImage
            ? html`<div class="bg-image" style="background-image:url('${this.backgroundImage}') !important; display: block !important;"></div>`
            : ""}
      <div class="glow"></div>
      <div class="overlay"></div>

      <div class="container ${this.layout === "split" ? "layout-split" : "layout-center"}">
        <div>
          ${this.renderHeader()} ${this.renderCtas()}
        </div>

        ${this.layout === "split" ? this.renderMedia() : ""}
      </div>
    `;
    }
}