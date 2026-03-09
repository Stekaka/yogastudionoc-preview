import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("ui-image-upload")
export class UIImageUpload extends LitElement {
  @property({ type: String }) label = "Upload Image";
  @property({ type: String }) accept = "image/*";
  @property({ type: Number }) maxSize = 5; // MB
  @property({ type: String }) preview = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) aspectRatio = ""; // e.g., "16/9", "1/1", "4/3"
  @state() private dragOver = false;
  @state() private error = "";

  static styles = css`
    :host {
      display: block;
    }

    .upload-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .label {
      font-size: var(--font-size-sm, 0.875rem);
      font-weight: var(--font-weight-semibold, 600);
      color: var(--color-text-primary, #0f172a);
    }

    .upload-area {
      border: 2px dashed var(--color-border, #cbd5e1);
      border-radius: var(--radius-base, 8px);
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      transition: all var(--transition-base, 200ms ease);
      background: var(--color-background-alt, #f8fafc);
    }

    .upload-area:hover:not(.disabled) {
      border-color: var(--color-primary, #3b82f6);
      background: var(--color-primary-light, #dbeafe);
    }

    .upload-area.drag-over {
      border-color: var(--color-primary, #3b82f6);
      background: var(--color-primary-light, #dbeafe);
    }

    .upload-area.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .upload-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-light, #dbeafe);
      color: var(--color-primary, #3b82f6);
      border-radius: 50%;
      transition: all var(--transition-base, 200ms ease);
    }

    .upload-area:hover:not(.disabled) .upload-icon {
      background: var(--color-primary, #3b82f6);
      color: white;
      transform: scale(1.1);
    }

    .upload-icon svg {
      width: 32px;
      height: 32px;
    }

    .upload-text {
      color: var(--color-text-secondary, #64748b);
      font-size: var(--font-size-sm, 0.875rem);
      margin-bottom: 0.5rem;
    }

    .upload-hint {
      color: var(--color-text-tertiary, #94a3b8);
      font-size: var(--font-size-xs, 0.75rem);
    }

    input[type="file"] {
      display: none;
    }

    .preview-container {
      position: relative;
      border-radius: var(--radius-base, 8px);
      overflow: hidden;
      background: var(--color-neutral-100, #f1f5f9);
    }

    .preview-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .preview-actions {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      display: flex;
      gap: 0.5rem;
    }

    .action-button {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(8px);
      color: white;
      border: none;
      border-radius: var(--radius-sm, 4px);
      padding: 0.5rem;
      cursor: pointer;
      transition: all var(--transition-fast, 150ms ease);
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action-button:hover {
      background: rgba(15, 23, 42, 0.95);
      transform: scale(1.1);
    }

    .action-button svg {
      width: 18px;
      height: 18px;
    }

    .error-message {
      color: var(--color-error, #ef4444);
      font-size: var(--font-size-sm, 0.875rem);
      margin: 0;
    }
  `;

  private handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.processFile(input.files[0]);
    }
  }

  private handleDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;

    if (this.disabled) return;

    const files = event.dataTransfer?.files;
    if (files && files[0]) {
      this.processFile(files[0]);
    }
  }

  private handleDragOver(event: DragEvent) {
    event.preventDefault();
    if (!this.disabled) {
      this.dragOver = true;
    }
  }

  private handleDragLeave() {
    this.dragOver = false;
  }

  private processFile(file: File) {
    this.error = "";

    // Validate file type
    if (!file.type.startsWith("image/")) {
      this.error = "Please upload an image file";
      return;
    }

    // Validate file size
    const sizeMB = file.size / 1024 / 1024;
    if (sizeMB > this.maxSize) {
      this.error = `File size must be less than ${this.maxSize}MB`;
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.preview = e.target?.result as string;
      this.dispatchEvent(
        new CustomEvent("image-upload", {
          detail: { file, preview: this.preview },
          bubbles: true,
          composed: true,
        })
      );
    };
    reader.readAsDataURL(file);
  }

  private removeImage() {
    this.preview = "";
    this.error = "";
    this.dispatchEvent(
      new CustomEvent("image-remove", {
        bubbles: true,
        composed: true,
      })
    );
  }

  private triggerFileInput() {
    if (this.disabled) return;
    const input = this.shadowRoot?.querySelector('input[type="file"]') as HTMLInputElement;
    input?.click();
  }

  render() {
    return html`
      <div class="upload-wrapper">
        ${this.label ? html`<div class="label">${this.label}</div>` : ""}

        ${this.preview
          ? html`
              <div class="preview-container" style="${this.aspectRatio ? `aspect-ratio: ${this.aspectRatio}` : ''}">
                <img src="${this.preview}" alt="Preview" class="preview-image" />
                <div class="preview-actions">
                  <button
                    class="action-button"
                    @click="${this.triggerFileInput}"
                    title="Change image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button
                    class="action-button"
                    @click="${this.removeImage}"
                    title="Remove image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            `
          : html`
              <div
                class="upload-area ${this.dragOver ? "drag-over" : ""} ${this.disabled ? "disabled" : ""}"
                @click="${this.triggerFileInput}"
                @drop="${this.handleDrop}"
                @dragover="${this.handleDragOver}"
                @dragleave="${this.handleDragLeave}"
              >
                <div class="upload-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div class="upload-text">
                  Click to upload or drag and drop
                </div>
                <div class="upload-hint">
                  ${this.accept} (Max ${this.maxSize}MB)
                </div>
              </div>
            `}

        <input
          type="file"
          accept="${this.accept}"
          ?disabled="${this.disabled}"
          @change="${this.handleFileSelect}"
        />

        ${this.error ? html`<p class="error-message">${this.error}</p>` : ""}
      </div>
    `;
  }
}
