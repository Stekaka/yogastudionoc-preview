import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-toggle")
export class UIToggle extends LitElement {
  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: inline-block;
    }

    .toggle-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .toggle-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .toggle {
      position: relative;
      border-radius: 999px;
      background: #cbd5e1;
      transition: all 0.3s ease;
      cursor: pointer;
      flex-shrink: 0;
    }

    .toggle:hover:not(.disabled) {
      background: #94a3b8;
    }

    .toggle.checked {
      background: #3b82f6;
    }

    .toggle.checked:hover:not(.disabled) {
      background: #2563eb;
    }

    .toggle.disabled {
      cursor: not-allowed;
      background: #e2e8f0;
    }

    .toggle-thumb {
      position: absolute;
      background: white;
      border-radius: 50%;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    /* Sizes */
    .toggle.small {
      width: 36px;
      height: 20px;
    }

    .toggle.small .toggle-thumb {
      width: 16px;
      height: 16px;
      top: 2px;
      left: 2px;
    }

    .toggle.small.checked .toggle-thumb {
      left: 18px;
    }

    .toggle.medium {
      width: 44px;
      height: 24px;
    }

    .toggle.medium .toggle-thumb {
      width: 20px;
      height: 20px;
      top: 2px;
      left: 2px;
    }

    .toggle.medium.checked .toggle-thumb {
      left: 22px;
    }

    .toggle.large {
      width: 52px;
      height: 28px;
    }

    .toggle.large .toggle-thumb {
      width: 24px;
      height: 24px;
      top: 2px;
      left: 2px;
    }

    .toggle.large.checked .toggle-thumb {
      left: 26px;
    }

    label {
      font-size: 1rem;
      color: #334155;
      cursor: pointer;
      user-select: none;
    }

    label.disabled {
      cursor: not-allowed;
    }

    label.small {
      font-size: 0.875rem;
    }

    label.large {
      font-size: 1.125rem;
    }

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    input[type="checkbox"]:focus-visible + .toggle {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  `;

  private handleChange(e: Event) {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent("toggle-change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div
        class="toggle-wrapper ${this.disabled ? "disabled" : ""}"
        @click="${this.handleChange}"
      >
        <input
          type="checkbox"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || "Toggle"}"
        />
        <div class="toggle ${this.size} ${this.checked ? "checked" : ""} ${this.disabled ? "disabled" : ""}">
          <div class="toggle-thumb"></div>
        </div>
        ${this.label
          ? html`<label class="${this.size} ${this.disabled ? "disabled" : ""}"
              >${this.label}</label
            >`
          : ""}
      </div>
    `;
  }
}
