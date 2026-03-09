import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-button")
export class UIButton extends LitElement {
  @property({ type: String }) variant = "primary"; // 'primary', 'secondary', 'danger', 'ghost'
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) fullWidth = false;
  @property({ type: String }) href = "";

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([fullWidth]) {
      display: block;
    }

    button,
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      font-family: inherit;
      white-space: nowrap;
    }

    :host([fullWidth]) button,
    :host([fullWidth]) a {
      width: 100%;
    }

    button:disabled,
    a[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button:not(:disabled):hover,
    a:not([disabled]):hover {
      transform: translateY(-2px);
    }

    button:not(:disabled):active,
    a:not([disabled]):active {
      transform: translateY(0);
    }

    /* Sizes */
    :host([size="small"]) button,
    :host([size="small"]) a {
      padding: 0.625rem 1.5rem;
      font-size: 0.875rem;
    }

    :host([size="medium"]) button,
    :host([size="medium"]) a {
      padding: 0.875rem 2rem;
      font-size: 1rem;
    }

    :host([size="large"]) button,
    :host([size="large"]) a {
      padding: 1.125rem 2.5rem;
      font-size: 1.125rem;
    }

    /* Variants */
    :host([variant="primary"]) button,
    :host([variant="primary"]) a {
      background: #3b82f6;
      color: white;
    }

    :host([variant="primary"]) button:not(:disabled):hover,
    :host([variant="primary"]) a:not([disabled]):hover {
      background: #2563eb;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    :host([variant="secondary"]) button,
    :host([variant="secondary"]) a {
      background: #e2e8f0;
      color: #334155;
    }

    :host([variant="secondary"]) button:not(:disabled):hover,
    :host([variant="secondary"]) a:not([disabled]):hover {
      background: #cbd5e1;
    }

    :host([variant="danger"]) button,
    :host([variant="danger"]) a {
      background: #ef4444;
      color: white;
    }

    :host([variant="danger"]) button:not(:disabled):hover,
    :host([variant="danger"]) a:not([disabled]):hover {
      background: #dc2626;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    :host([variant="ghost"]) button,
    :host([variant="ghost"]) a {
      background: transparent;
      color: #64748b;
    }

    :host([variant="ghost"]) button:not(:disabled):hover,
    :host([variant="ghost"]) a:not([disabled]):hover {
      background: #f1f5f9;
      color: #334155;
    }
  `;

  private handleClick(e: Event) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render() {
    const content = html`
      ${this.loading
        ? html`<ui-spinner
            size="small"
            color="${this.variant === "primary" || this.variant === "danger" ? "white" : "primary"}"
          ></ui-spinner>`
        : ""}
      <slot></slot>
    `;

    if (this.href && !this.disabled && !this.loading) {
      return html`<a href="${this.href}" @click="${this.handleClick}">${content}</a>`;
    }

    return html`
      <button ?disabled="${this.disabled || this.loading}" @click="${this.handleClick}">
        ${content}
      </button>
    `;
  }
}
