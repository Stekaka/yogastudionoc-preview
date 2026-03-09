import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-alert")
export class UIAlert extends LitElement {
  @property({ type: String }) variant = "info"; // 'info', 'success', 'warning', 'error'
  @property({ type: String }) title = "";
  @property({ type: Boolean }) dismissible = false;

  static styles = css`
    :host {
      display: block;
    }

    .alert {
      padding: 1rem 1.25rem;
      border-radius: 8px;
      border-left: 4px solid;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      position: relative;
    }

    .alert-icon {
      font-size: 1.25rem;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      line-height: 1;
    }

    .alert-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .alert-title {
      font-weight: 600;
      font-size: 1rem;
      margin: 0 0 0.25rem 0;
      line-height: 1.4;
    }

    .alert-message {
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0;
    }

    .dismiss-button {
      background: transparent;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      padding: 0;
      opacity: 0.6;
      transition: opacity 0.2s ease;
      flex-shrink: 0;
    }

    .dismiss-button:hover {
      opacity: 1;
    }

    /* Info variant */
    .alert.info {
      background: #dbeafe;
      border-left-color: #3b82f6;
      color: #1e40af;
    }

    .alert.info .alert-icon {
      color: #3b82f6;
    }

    /* Success variant */
    .alert.success {
      background: #d1fae5;
      border-left-color: #10b981;
      color: #065f46;
    }

    .alert.success .alert-icon {
      color: #10b981;
    }

    /* Warning variant */
    .alert.warning {
      background: #fef3c7;
      border-left-color: #f59e0b;
      color: #92400e;
    }

    .alert.warning .alert-icon {
      color: #f59e0b;
    }

    /* Error variant */
    .alert.error {
      background: #fee2e2;
      border-left-color: #ef4444;
      color: #991b1b;
    }

    .alert.error .alert-icon {
      color: #ef4444;
    }
  `;

  private getIcon() {
    const icons = {
      info: "ℹ️",
      success: "✓",
      warning: "⚠️",
      error: "✕",
    };
    return icons[this.variant as keyof typeof icons] || icons.info;
  }

  private handleDismiss() {
    this.dispatchEvent(
      new CustomEvent("alert-dismiss", {
        bubbles: true,
        composed: true,
      })
    );
    this.remove();
  }

  render() {
    return html`
      <div class="alert ${this.variant}" role="alert">
        <div class="alert-icon">${this.getIcon()}</div>
        <div class="alert-content">
          ${this.title ? html`<div class="alert-title">${this.title}</div>` : ""}
          <div class="alert-message">
            <slot></slot>
          </div>
        </div>
        ${this.dismissible
          ? html`<button
              class="dismiss-button"
              @click="${this.handleDismiss}"
              aria-label="Dismiss alert"
            >
              ×
            </button>`
          : ""}
      </div>
    `;
  }
}
