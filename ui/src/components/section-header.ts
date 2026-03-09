import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Reusable section header component for consistent styling across all blocks
 * Usage: <section-header heading="Title" subheading="Description" align="center"></section-header>
 */
@customElement("section-header")
export class SectionHeader extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) subheading = "";
  @property({ type: String }) badge = "";
  @property({ type: String }) align = "center"; // center, left, right

  static styles = css`
    :host {
      display: block;
      margin-bottom: 3rem;
    }

    .header-wrapper {
      text-align: center;
    }

    :host([align="left"]) .header-wrapper {
      text-align: left;
    }

    :host([align="right"]) .header-wrapper {
      text-align: right;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.375rem 0.875rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 1rem;
      border: 1px solid var(--color-border);
      background: color-mix(in srgb, var(--color-primary) 8%, transparent);
      color: var(--color-primary);
    }

    h2 {
      margin: 0 0 1rem 0;
      font-size: clamp(2rem, 4vw, 2.75rem);
      line-height: 1.2;
      letter-spacing: -0.02em;
      color: var(--color-text-primary);
      font-weight: 700;
    }

    .subheading {
      margin: 0;
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
      max-width: 65ch;
    }

    :host([align="center"]) .subheading {
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 768px) {
      :host {
        margin-bottom: 2rem;
      }

      h2 {
        font-size: 1.75rem;
      }

      .subheading {
        font-size: 1rem;
      }
    }
  `;

  render() {
    return html`
      <div class="header-wrapper">
        ${this.badge ? html`<div class="badge">${this.badge}</div>` : ""}
        ${this.heading ? html`<h2>${this.heading}</h2>` : ""}
        ${this.subheading ? html`<p class="subheading">${this.subheading}</p>` : ""}
      </div>
    `;
  }
}
