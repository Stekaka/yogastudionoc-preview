import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type MediaType = "image" | "video" | "slot";
type LayoutType = "media-left" | "media-right";
type ThemeVariant = "light" | "dark";

/**
 * Product Showcase Block - Apple-inspired product presentation
 *
 * Features:
 * - Clean, minimal design
 * - Media (image/video) + content split layout
 * - Light/dark theme variants
 * - Responsive and accessible
 *
 * Usage:
 * <product-showcase-block
 *   theme="dark"
 *   layout="media-right"
 *   heading="Följ hunden. Förstå jakten."
 *   description="Exakt spårning i realtid..."
 *   mediaSrc="..."
 *   mediaType="image"
 * ></product-showcase-block>
 */
@customElement("product-showcase-block")
export class ProductShowcaseBlock extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) subheading = "";
  @property({ type: String }) description = "";

  @property({ type: String }) mediaSrc = "";
  @property({ type: String }) mediaAlt = "";
  @property({ type: String }) mediaType: MediaType = "image";

  @property({ type: String }) layout: LayoutType = "media-right";
  @property({ type: String }) theme: ThemeVariant = "light";

  static styles = css`
    :host {
      display: block;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    /* Theme variants */
    :host([theme="light"]) {
      background: var(--color-background, #ffffff);
      color: var(--color-text-primary, #1d1d1f);
    }

    :host([theme="dark"]) {
      background: var(--color-text-primary, #000000);
      color: var(--color-background, #f5f5f7);
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 3rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      min-height: 400px;
    }

    /* Layout variants */
    :host([layout="media-left"]) .content {
      order: 2;
    }

    :host([layout="media-left"]) .media {
      order: 1;
    }

    :host([layout="media-right"]) .content {
      order: 1;
    }

    :host([layout="media-right"]) .media {
      order: 2;
    }

    /* Content section */
    .content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 0 2rem;
    }

    .subheading {
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: 0.011em;
      line-height: 1.381;
      opacity: 0.8;
      margin: 0;
    }

    :host([theme="dark"]) .subheading {
      opacity: 0.7;
    }

    .heading {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 600;
      letter-spacing: -0.015em;
      line-height: 1.05;
      margin: 0;
    }

    .description {
      font-size: 1.375rem;
      font-weight: 400;
      letter-spacing: 0.012em;
      line-height: 1.45;
      opacity: 0.8;
      margin: 0;
      max-width: 36ch;
    }

    :host([theme="dark"]) .description {
      opacity: 0.7;
    }

    /* Features list */
    ::slotted(ul) {
      list-style: none;
      padding: 0;
      margin: 1rem 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    ::slotted(ul li) {
      font-size: 1.125rem;
      font-weight: 400;
      letter-spacing: 0.011em;
      line-height: 1.5;
      opacity: 0.8;
      padding-left: 1.5rem;
      position: relative;
    }

    ::slotted(ul li::before) {
      content: "✓";
      position: absolute;
      left: 0;
      font-weight: 600;
      color: var(--color-accent, #0071e3);
    }

    :host([theme="dark"]) ::slotted(ul li) {
      opacity: 0.7;
    }

    /* Media section */
    .media {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .media-image,
    .media-video {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 1rem;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    :host([theme="dark"]) .media-image,
    :host([theme="dark"]) .media-video {
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }

    .media-video {
      object-fit: cover;
    }

    /* Slot for custom media */
    ::slotted(*) {
      width: 100%;
      height: auto;
    }

    /* Responsive */
    @media (max-width: 1068px) {
      .container {
        padding: 4rem 1.5rem;
        gap: 3rem;
      }

      .content {
        padding: 0 1rem;
      }

      .heading {
        font-size: clamp(2rem, 4.5vw, 3rem);
      }

      .description {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 3rem 1rem;
        min-height: auto;
      }

      :host([layout="media-left"]) .content,
      :host([layout="media-right"]) .content {
        order: 1;
      }

      :host([layout="media-left"]) .media,
      :host([layout="media-right"]) .media {
        order: 2;
      }

      .content {
        padding: 0;
        text-align: center;
        align-items: center;
      }

      .heading {
        font-size: 2rem;
      }

      .description {
        font-size: 1.125rem;
        max-width: 100%;
      }

      .media {
        padding: 1rem;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 2rem 1rem;
      }

      .heading {
        font-size: 1.75rem;
      }

      .subheading {
        font-size: 1rem;
      }

      .description {
        font-size: 1rem;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  private renderMedia() {
    if (this.mediaType === "slot") {
      return html`<slot></slot>`;
    }

    if (this.mediaType === "video") {
      return html`
        <video
          class="media-video"
          src="${this.mediaSrc}"
          autoplay
          muted
          loop
          playsinline
          aria-label="${this.mediaAlt || this.heading}"
        ></video>
      `;
    }

    // Default: image
    return html`
      <img
        class="media-image"
        src="${this.mediaSrc}"
        alt="${this.mediaAlt || this.heading}"
        loading="lazy"
      />
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="content">
          ${this.subheading ? html`<p class="subheading">${this.subheading}</p>` : ""}
          ${this.heading ? html`<h2 class="heading">${this.heading}</h2>` : ""}
          ${this.description ? html`<p class="description">${this.description}</p>` : ""}
          <slot name="features"></slot>
        </div>

        <div class="media">
          ${this.renderMedia()}
        </div>
      </div>
    `;
  }
}
