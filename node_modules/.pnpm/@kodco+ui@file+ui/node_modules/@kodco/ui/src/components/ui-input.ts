import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-input")
export class UIInput extends LitElement {
  @property({ type: String }) type = "text";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: String }) label = "";
  @property({ type: String }) error = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: block;
    }

    .input-wrapper {
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

    input {
      width: 100%;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-family: inherit;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    input:disabled {
      background: #f1f5f9;
      cursor: not-allowed;
      opacity: 0.6;
    }

    input.error {
      border-color: #ef4444;
    }

    input.error:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    /* Sizes */
    input.small {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }

    input.medium {
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }

    input.large {
      padding: 1rem 1.25rem;
      font-size: 1.125rem;
    }

    .error-message {
      font-size: 0.875rem;
      color: #ef4444;
      margin: 0;
    }
  `;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("input-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="input-wrapper">
        ${this.label
          ? html`<label>
              ${this.label}${this.required ? html`<span class="required">*</span>` : ""}
            </label>`
          : ""}
        <input
          type="${this.type}"
          class="${this.size} ${this.error ? "error" : ""}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.handleInput}"
        />
        ${this.error ? html`<p class="error-message">${this.error}</p>` : ""}
      </div>
    `;
  }
}
