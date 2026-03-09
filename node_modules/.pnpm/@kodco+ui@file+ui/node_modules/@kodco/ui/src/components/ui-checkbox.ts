import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-checkbox")
export class UICheckbox extends LitElement {
  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: inline-block;
    }

    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .checkbox-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      border: 2px solid #cbd5e1;
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    input[type="checkbox"]:hover:not(:disabled) {
      border-color: #3b82f6;
    }

    input[type="checkbox"]:checked {
      background: #3b82f6;
      border-color: #3b82f6;
    }

    input[type="checkbox"]:checked::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%) rotate(45deg);
      border: solid white;
      border-width: 0 2px 2px 0;
    }

    input[type="checkbox"]:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    input[type="checkbox"]:disabled {
      cursor: not-allowed;
      background: #f1f5f9;
    }

    /* Sizes */
    input[type="checkbox"].small {
      width: 16px;
      height: 16px;
    }

    input[type="checkbox"].small:checked::after {
      width: 4px;
      height: 8px;
    }

    input[type="checkbox"].medium {
      width: 20px;
      height: 20px;
    }

    input[type="checkbox"].medium:checked::after {
      width: 5px;
      height: 10px;
    }

    input[type="checkbox"].large {
      width: 24px;
      height: 24px;
    }

    input[type="checkbox"].large:checked::after {
      width: 6px;
      height: 12px;
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
  `;

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new CustomEvent("checkbox-change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="checkbox-wrapper ${this.disabled ? "disabled" : ""}">
        <input
          type="checkbox"
          class="${this.size}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this.handleChange}"
        />
        ${this.label
          ? html`<label class="${this.size} ${this.disabled ? "disabled" : ""}"
              >${this.label}</label
            >`
          : ""}
      </div>
    `;
  }
}
