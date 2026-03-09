import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("ui-modal")
export class UIModal extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = "";
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large', 'fullscreen'
  @property({ type: Boolean }) closeOnBackdrop = true;
  @property({ type: Boolean }) showClose = true;

  static styles = css`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }

    :host([open]) {
      display: flex;
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .modal {
      position: relative;
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-height: 90vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: slideUp 0.3s ease-out;
      margin: 1rem;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    :host([size="small"]) .modal {
      width: 100%;
      max-width: 400px;
    }

    :host([size="medium"]) .modal {
      width: 100%;
      max-width: 600px;
    }

    :host([size="large"]) .modal {
      width: 100%;
      max-width: 900px;
    }

    :host([size="fullscreen"]) .modal {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      max-width: none;
      max-height: none;
    }

    .modal-header {
      padding: 1.5rem;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #64748b;
      padding: 0.5rem;
      border-radius: 6px;
      transition: all 0.2s ease;
      line-height: 1;
    }

    .close-button:hover {
      background: #f1f5f9;
      color: #0f172a;
    }

    .modal-body {
      padding: 1.5rem;
      overflow-y: auto;
      flex: 1;
    }

    .modal-footer {
      padding: 1.5rem;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    ::slotted([slot="footer"]) {
      display: flex;
      gap: 1rem;
    }

    @media (max-width: 640px) {
      .modal {
        width: calc(100% - 1rem);
        max-height: calc(100% - 1rem);
        margin: 0.5rem;
      }

      :host([size="fullscreen"]) .modal {
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: 0;
      }
    }
  `;

  private handleBackdropClick(e: MouseEvent) {
    if (this.closeOnBackdrop && e.target === e.currentTarget) {
      this.close();
    }
  }

  private close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape" && this.open) {
      this.close();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    return html`
      <div class="backdrop" @click="${this.handleBackdropClick}">
        <div class="modal" @click="${(e: Event) => e.stopPropagation()}">
          ${this.title || this.showClose
            ? html`
                <div class="modal-header">
                  <h2 class="modal-title">${this.title}</h2>
                  ${this.showClose
                    ? html`
                        <button
                          class="close-button"
                          @click="${this.close}"
                          aria-label="Close"
                        >
                          ✕
                        </button>
                      `
                    : ""}
                </div>
              `
            : ""}

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
