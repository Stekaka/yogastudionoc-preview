import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Sticky CTA bar that appears at the bottom of the viewport
 * Perfect for conversion-focused pages with clear call-to-action
 */
@customElement("sticky-cta-bar")
export class StickyCTABar extends LitElement {
  @property({ type: String }) message = "Redo att komma igång?";
  @property({ type: String }) ctaText = "Boka möte";
  @property({ type: String }) ctaHref = "#";
  @property({ type: String }) phone = "";
  @property({ type: Boolean }) visible = true;
  @property({ type: String }) variant = "default"; // default, compact

  static styles = css`
    :host {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      transform: translateY(0);
      transition: transform 0.3s ease;
    }

    :host([visible="false"]) {
      transform: translateY(100%);
    }

    .bar {
      background: var(--color-surface, white);
      border-top: 1px solid var(--color-border);
      box-shadow: 0 -4px 12px color-mix(in srgb, black 8%, transparent);
      padding: 1rem 2rem;
      backdrop-filter: blur(8px);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .message {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text-primary);
      flex-shrink: 0;
    }

    :host([variant="compact"]) .message {
      font-size: 0.875rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-shrink: 0;
    }

    .phone-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9375rem;
      transition: color 0.2s ease;
    }

    .phone-link:hover {
      color: var(--color-primary);
    }

    .phone-icon {
      font-size: 1.125rem;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--color-primary);
      color: var(--color-primary-contrast, white);
      text-decoration: none;
      border-radius: var(--radius-base, 8px);
      font-weight: 600;
      font-size: 0.9375rem;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px color-mix(in srgb, var(--color-primary) 25%, transparent);
    }

    .cta-button:hover {
      background: color-mix(in srgb, var(--color-primary) 90%, black);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 35%, transparent);
    }

    :host([variant="compact"]) .cta-button {
      padding: 0.625rem 1.25rem;
      font-size: 0.875rem;
    }

    .close-button {
      background: none;
      border: none;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.5rem;
      font-size: 1.25rem;
      line-height: 1;
      transition: color 0.2s ease;
      margin-left: 0.5rem;
    }

    .close-button:hover {
      color: var(--color-text-primary);
    }

    @media (max-width: 768px) {
      .bar {
        padding: 0.875rem 1rem;
      }

      .container {
        flex-direction: column;
        gap: 0.75rem;
        align-items: stretch;
      }

      .message {
        text-align: center;
        font-size: 0.9375rem;
      }

      .actions {
        justify-content: center;
        flex-wrap: wrap;
      }

      .phone-link {
        font-size: 0.875rem;
      }

      .cta-button {
        flex: 1;
        justify-content: center;
        min-width: 140px;
      }

      .close-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
      }
    }
  `;

  private handleClose() {
    this.visible = false;
  }

  render() {
    return html`
      <div class="bar">
        <div class="container">
          <div class="message">${this.message}</div>
          <div class="actions">
            ${this.phone
              ? html`
                  <a href="tel:${this.phone}" class="phone-link">
                    <span class="phone-icon">📞</span>
                    <span>${this.phone}</span>
                  </a>
                `
              : ""}
            <a href="${this.ctaHref}" class="cta-button">
              ${this.ctaText}
            </a>
          </div>
          <button
            class="close-button"
            @click="${this.handleClose}"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>
      </div>
    `;
  }
}
