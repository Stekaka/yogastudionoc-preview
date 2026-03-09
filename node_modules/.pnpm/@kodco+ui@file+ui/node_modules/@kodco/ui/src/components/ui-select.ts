import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface SelectOption {
  value: string;
  label: string;
}

@customElement("ui-select")
export class UISelect extends LitElement {
  @property({ type: String }) value = "";
  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "Select an option";
  @property({ type: String }) error = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Array }) options: SelectOption[] = [];
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: block;
    }

    .select-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-size: 0.875rem;
      font-weight: 600;
      color: #334155;
    }

    .required {
      color: #ef4444;
    }

    select {
      width: 100%;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-family: inherit;
      transition: all 0.2s ease;
      box-sizing: border-box;
      background: white;
      cursor: pointer;
    }

    select:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    select:disabled {
      background: #f1f5f9;
      cursor: not-allowed;
      opacity: 0.6;
    }

    select.error {
      border-color: #ef4444;
    }

    select.error:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    /* Sizes */
    select.small {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }

    select.medium {
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }

    select.large {
      padding: 1rem 1.25rem;
      font-size: 1.125rem;
    }

    .error-message {
      font-size: 0.875rem;
      color: #ef4444;
      margin: 0;
    }

    option[disabled] {
      color: #94a3b8;
    }
  `;

  private handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("select-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="select-wrapper">
        ${this.label
          ? html`<label>
              ${this.label}${this.required ? html`<span class="required">*</span>` : ""}
            </label>`
          : ""}
        <select
          class="${this.size} ${this.error ? "error" : ""}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @change="${this.handleChange}"
        >
          <option value="" disabled ?selected="${!this.value}">${this.placeholder}</option>
          ${this.options.map(
            (option) =>
              html`<option value="${option.value}" ?selected="${this.value === option.value}">
                ${option.label}
              </option>`
          )}
        </select>
        ${this.error ? html`<p class="error-message">${this.error}</p>` : ""}
      </div>
    `;
  }
}
