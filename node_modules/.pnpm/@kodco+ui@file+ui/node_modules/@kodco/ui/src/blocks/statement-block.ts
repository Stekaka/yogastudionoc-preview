import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type ThemeVariant = "light" | "dark";

/**
 * StatementBlock - Bold, centered statement component
 * Apple-inspired design for impactful one-liners
 *
 * @element statement-block
 *
 * @prop {string} statement - Main statement text (primary line)
 * @prop {string} substatement - Secondary statement text (optional)
 * @prop {ThemeVariant} theme - Theme variant: light or dark
 *
 * @example
 * ```html
 * <statement-block
 *   statement="Byggd för skogen."
 *   substatement="Inte för sociala medier."
 *   theme="dark"
 * ></statement-block>
 * ```
 */
@customElement("statement-block")
export class StatementBlock extends LitElement {
  @property({ type: String }) statement = "";
  @property({ type: String }) substatement = "";
  @property({ type: String }) theme: ThemeVariant = "light";
  @property({ type: String }) backgroundImage = "";
  @property({ type: String, attribute: 'background-color' }) backgroundColor = "";
  @property({ type: String, attribute: 'statement-size' }) statementSize = "2.5rem";
  @property({ type: String, attribute: 'substatement-size' }) substatementSize = "2rem";

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      width: 100%;
      min-height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.5rem 2rem;
      transition: background-color 0.3s ease, color 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    /* Background image support */
    .container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 0;
    }

    .container[data-has-bg]::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    /* Light theme */
    .container[data-theme="light"] {
      background-color: var(--color-background, #ffffff);
      color: var(--color-text-primary, #000000);
    }

    /* Dark theme */
    .container[data-theme="dark"] {
      background-color: var(--color-text-primary, #0f172a);
      color: var(--color-background, #ffffff);
    }

    .content {
      max-width: 980px;
      width: 100%;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .statement {
      font-size: clamp(var(--statement-size-min, 2rem), 6vw, var(--statement-size-max, 2.5rem));
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.05;
      margin: 0;
      padding: 0;
    }

    .substatement {
      font-size: clamp(var(--substatement-size-min, 1.5rem), 5vw, var(--substatement-size-max, 2rem));
      font-weight: 400;
      letter-spacing: -0.015em;
      line-height: 1.1;
      margin: 1rem 0 0 0;
      padding: 0;
      opacity: 0.7;
    }

    /* Mobile optimization */
    @media (max-width: 768px) {
      .container {
        min-height: 40vh;
        padding: 3rem 1.5rem;
      }

      .statement {
        font-size: clamp(2rem, 8vw, 2.5rem);
      }

      .substatement {
        font-size: clamp(1.5rem, 7vw, 2rem);
        margin-top: 0.75rem;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .container {
        transition: none;
      }
    }
  `;

  render() {
    let containerStyle = "";
    if (this.backgroundImage) {
      containerStyle += `background-image: url(${this.backgroundImage});`;
    }
    if (this.backgroundColor) {
      containerStyle += `background-color: ${this.backgroundColor};`;
    }

    return html`
      <div
        class="container"
        data-theme="${this.theme}"
        ?data-has-bg="${!!this.backgroundImage}"
        style="${containerStyle}"
      >
        <div class="content">
          ${this.statement
            ? html`<h2 class="statement" style="font-size: ${this.statementSize};">${this.statement}</h2>`
            : null}
          ${this.substatement
            ? html`<p class="substatement" style="font-size: ${this.substatementSize};">${this.substatement}</p>`
            : null}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "statement-block": StatementBlock;
  }
}
