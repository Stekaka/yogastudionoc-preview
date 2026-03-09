import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-textarea")
export class UITextarea extends LitElement {
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: String }) label = "";
  @property({ type: String }) error = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Number }) rows = 4;
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: block;
    }

    .textarea-wrapper {
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

    textarea {
      width: 100%;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-family: inherit;
      transition: all 0.2s ease;
      box-sizing: border-box;
      resize: vertical;
    }

    textarea:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    textarea:disabled {
      background: #f1f5f9;
      cursor: not-allowed;
      opacity: 0.6;
    }

    textarea.error {
      border-color: #ef4444;
    }

    textarea.error:focus {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    /* Sizes */
    textarea.small {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }

    textarea.medium {
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }

    textarea.large {
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
    const target = e.target as HTMLTextAreaElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("textarea-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="textarea-wrapper">
        ${this.label
          ? html`<label>
              ${this.label}${this.required ? html`<span class="required">*</span>` : ""}
            </label>`
          : ""}
        <textarea
          class="${this.size} ${this.error ? "error" : ""}"
          placeholder="${this.placeholder}"
          rows="${this.rows}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.handleInput}"
        ></textarea>
        ${this.error ? html`<p class="error-message">${this.error}</p>` : ""}
      </div>
    `;
  }
}
