import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/**
 * Before/After image slider for portfolio pages
 * Shows transformation with draggable slider
 */
@customElement("before-after-slider")
export class BeforeAfterSlider extends LitElement {
  @property({ type: String }) beforeImage = "";
  @property({ type: String }) afterImage = "";
  @property({ type: String }) beforeLabel = "Före";
  @property({ type: String }) afterLabel = "Efter";
  @property({ type: String }) heading = "";
  @property({ type: String }) description = "";
  @state() private sliderPosition = 50;

  static styles = css`
    :host {
      display: block;
      padding: 6rem 2rem;
      background: var(--color-background);
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
      font-weight: 700;
    }

    .header p {
      font-size: 1.125rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .slider-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      border-radius: var(--radius-base, 12px);
      border: 2px solid var(--color-border);
      box-shadow: 0 8px 24px color-mix(in srgb, black 12%, transparent);
      cursor: ew-resize;
      user-select: none;
    }

    .image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .before-container {
      z-index: 1;
    }

    .after-container {
      z-index: 2;
      clip-path: inset(0 0 0 var(--slider-position));
    }

    .label {
      position: absolute;
      top: 1rem;
      padding: 0.5rem 1rem;
      background: color-mix(in srgb, black 75%, transparent);
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      border-radius: 6px;
      backdrop-filter: blur(4px);
      z-index: 10;
    }

    .before-label {
      left: 1rem;
    }

    .after-label {
      right: 1rem;
    }

    .slider-handle {
      position: absolute;
      top: 0;
      bottom: 0;
      left: var(--slider-position);
      width: 4px;
      background: white;
      z-index: 20;
      transform: translateX(-50%);
      pointer-events: none;
    }

    .slider-handle::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 4px 12px color-mix(in srgb, black 25%, transparent);
      pointer-events: auto;
    }

    .slider-handle::after {
      content: "⟷";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--color-text-primary);
      font-size: 1.25rem;
      font-weight: 700;
      pointer-events: none;
    }

    @media (max-width: 768px) {
      :host {
        padding: 4rem 1.5rem;
      }

      .header h2 {
        font-size: 2rem;
      }

      .slider-wrapper {
        aspect-ratio: 4 / 3;
      }

      .label {
        font-size: 0.75rem;
        padding: 0.375rem 0.75rem;
      }

      .slider-handle::before {
        width: 40px;
        height: 40px;
      }

      .slider-handle::after {
        font-size: 1rem;
      }
    }
  `;

  private isDragging = false;

  private handleMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging && event.type !== "click") return;

    const slider = this.shadowRoot?.querySelector(".slider-wrapper") as HTMLElement;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;

    this.sliderPosition = Math.max(0, Math.min(100, position));
    this.style.setProperty("--slider-position", `${this.sliderPosition}%`);
  }

  private handleStart() {
    this.isDragging = true;
  }

  private handleEnd() {
    this.isDragging = false;
  }

  override firstUpdated() {
    this.style.setProperty("--slider-position", `${this.sliderPosition}%`);
  }

  render() {
    return html`
      <div class="container">
        ${this.heading || this.description
          ? html`
              <div class="header">
                ${this.heading ? html`<h2>${this.heading}</h2>` : ""}
                ${this.description ? html`<p>${this.description}</p>` : ""}
              </div>
            `
          : ""}

        <div
          class="slider-wrapper"
          @mousedown="${this.handleStart}"
          @mouseup="${this.handleEnd}"
          @mousemove="${this.handleMove}"
          @mouseleave="${this.handleEnd}"
          @touchstart="${this.handleStart}"
          @touchend="${this.handleEnd}"
          @touchmove="${this.handleMove}"
          @click="${this.handleMove}"
        >
          <div class="image-container before-container">
            <img src="${this.beforeImage}" alt="Before" class="image" />
            <div class="label before-label">${this.beforeLabel}</div>
          </div>

          <div class="image-container after-container">
            <img src="${this.afterImage}" alt="After" class="image" />
            <div class="label after-label">${this.afterLabel}</div>
          </div>

          <div class="slider-handle"></div>
        </div>
      </div>
    `;
  }
}
