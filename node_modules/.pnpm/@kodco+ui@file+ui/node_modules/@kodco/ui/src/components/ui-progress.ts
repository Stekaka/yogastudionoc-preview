import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-progress")
export class UIProgress extends LitElement {
  @property({ type: Number }) value = 0; // 0-100
  @property({ type: String }) variant = "primary"; // 'primary', 'success', 'warning', 'error'
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'
  @property({ type: Boolean }) showLabel = false;
  @property({ type: String }) label = "";

  static styles = css`
    :host {
      display: block;
    }

    .progress-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
    }

    .progress-label {
      font-weight: 600;
      color: #334155;
    }

    .progress-value {
      color: #64748b;
    }

    .progress-bar {
      width: 100%;
      background: #e2e8f0;
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }

    .progress-fill {
      height: 100%;
      border-radius: 999px;
      transition: width 0.3s ease, background 0.3s ease;
      position: relative;
    }

    /* Sizes */
    .progress-bar.small {
      height: 4px;
    }

    .progress-bar.medium {
      height: 8px;
    }

    .progress-bar.large {
      height: 12px;
    }

    /* Variants */
    .progress-fill.primary {
      background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
    }

    .progress-fill.success {
      background: linear-gradient(90deg, #10b981 0%, #059669 100%);
    }

    .progress-fill.warning {
      background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
    }

    .progress-fill.error {
      background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
    }

    /* Animation for indeterminate state */
    @keyframes indeterminate {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(400%);
      }
    }

    .progress-fill.indeterminate {
      width: 25% !important;
      animation: indeterminate 1.5s infinite ease-in-out;
    }
  `;

  render() {
    const clampedValue = Math.max(0, Math.min(100, this.value));
    const showHeader = this.showLabel || this.label;

    return html`
      <div class="progress-wrapper">
        ${showHeader
          ? html`
              <div class="progress-header">
                ${this.label ? html`<span class="progress-label">${this.label}</span>` : ""}
                ${this.showLabel
                  ? html`<span class="progress-value">${clampedValue}%</span>`
                  : ""}
              </div>
            `
          : ""}
        <div class="progress-bar ${this.size}">
          <div
            class="progress-fill ${this.variant}"
            style="width: ${clampedValue}%"
            role="progressbar"
            aria-valuenow="${clampedValue}"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    `;
  }
}
