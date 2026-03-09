import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@customElement("ui-radio")
export class UIRadio extends LitElement {
  @property({ type: String }) name = "";
  @property({ type: String }) value = "";
  @property({ type: Array }) options: RadioOption[] = [];
  @property({ type: String }) label = "";
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'
  @property({ type: String }) layout = "vertical"; // 'vertical', 'horizontal'

  static styles = css`
    :host {
      display: block;
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .group-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: #334155;
      margin-bottom: 0.5rem;
    }

    .options {
      display: flex;
      gap: 1rem;
    }

    .options.vertical {
      flex-direction: column;
    }

    .options.horizontal {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .radio-wrapper.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    input[type="radio"] {
      appearance: none;
      -webkit-appearance: none;
      border: 2px solid #cbd5e1;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    input[type="radio"]:hover:not(:disabled) {
      border-color: #3b82f6;
    }

    input[type="radio"]:checked {
      border-color: #3b82f6;
    }

    input[type="radio"]:checked::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #3b82f6;
      border-radius: 50%;
    }

    input[type="radio"]:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    input[type="radio"]:disabled {
      cursor: not-allowed;
      background: #f1f5f9;
    }

    /* Sizes */
    input[type="radio"].small {
      width: 16px;
      height: 16px;
    }

    input[type="radio"].small:checked::after {
      width: 8px;
      height: 8px;
    }

    input[type="radio"].medium {
      width: 20px;
      height: 20px;
    }

    input[type="radio"].medium:checked::after {
      width: 10px;
      height: 10px;
    }

    input[type="radio"].large {
      width: 24px;
      height: 24px;
    }

    input[type="radio"].large:checked::after {
      width: 12px;
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

  private handleChange(e: Event, optionValue: string) {
    this.value = optionValue;
    this.dispatchEvent(
      new CustomEvent("radio-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="radio-group">
        ${this.label ? html`<div class="group-label">${this.label}</div>` : ""}
        <div class="options ${this.layout}">
          ${this.options.map(
            (option) => html`
              <div class="radio-wrapper ${option.disabled ? "disabled" : ""}">
                <input
                  type="radio"
                  class="${this.size}"
                  name="${this.name}"
                  .value="${option.value}"
                  ?checked="${this.value === option.value}"
                  ?disabled="${option.disabled}"
                  @change="${(e: Event) => this.handleChange(e, option.value)}"
                />
                <label class="${this.size} ${option.disabled ? "disabled" : ""}"
                  >${option.label}</label
                >
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
