import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

@customElement("image-gallery")
export class ImageGallery extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: Array }) images: GalleryImage[] = [];
  @property({ type: String }) layout = "grid"; // 'grid', 'masonry'
  @property({ type: Number }) columns = 3; // 2, 3, eller 4
  @state() private lightboxOpen = false;
  @state() private currentImageIndex = 0;

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-surface, white);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin: 0 0 3rem 0;
      color: var(--color-text-primary);
    }

    .gallery-grid {
      display: grid;
      gap: 1.5rem;
    }

    :host([columns="2"]) .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    :host([columns="3"]) .gallery-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    :host([columns="4"]) .gallery-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-base, 8px);
      cursor: pointer;
      aspect-ratio: 4 / 3;
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .gallery-image {
      transform: scale(1.05);
    }

    .gallery-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: color-mix(in srgb, black 0%, transparent);
      transition: background 0.3s ease;
    }

    .gallery-item:hover::after {
      background: color-mix(in srgb, black 20%, transparent);
    }

    /* Lightbox */
    .lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      background: color-mix(in srgb, black 95%, transparent);
      align-items: center;
      justify-content: center;
    }

    .lightbox.open {
      display: flex;
    }

    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
      border-radius: var(--radius-base, 8px);
    }

    .lightbox-caption {
      color: var(--color-surface, white);
      margin-top: 1rem;
      text-align: center;
      font-size: 1.125rem;
    }

    .lightbox-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: color-mix(in srgb, white 20%, transparent);
      color: var(--color-surface, white);
      border: none;
      font-size: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .lightbox-close:hover {
      background: color-mix(in srgb, white 30%, transparent);
    }

    .lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: color-mix(in srgb, white 20%, transparent);
      color: var(--color-surface, white);
      border: none;
      font-size: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .lightbox-nav:hover {
      background: color-mix(in srgb, white 30%, transparent);
    }

    .lightbox-nav.prev {
      left: 2rem;
    }

    .lightbox-nav.next {
      right: 2rem;
    }

    @media (max-width: 1024px) {
      :host([columns="4"]) .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      :host([columns="3"]) .gallery-grid,
      :host([columns="4"]) .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .lightbox-nav {
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
      }

      .lightbox-nav.prev {
        left: 1rem;
      }

      .lightbox-nav.next {
        right: 1rem;
      }
    }
  `;

  private openLightbox(index: number) {
    this.currentImageIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = "hidden";
  }

  private closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = "";
  }

  private nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  private prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (!this.lightboxOpen) return;

    if (e.key === "Escape") {
      this.closeLightbox();
    } else if (e.key === "ArrowRight") {
      this.nextImage();
    } else if (e.key === "ArrowLeft") {
      this.prevImage();
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
    const currentImage = this.images[this.currentImageIndex];

    return html`
      <div class="container">
        ${this.heading ? html`<h2>${this.heading}</h2>` : ""}

        <div class="gallery-grid">
          ${this.images.map(
            (image, index) => html`
              <div class="gallery-item" @click="${() => this.openLightbox(index)}">
                <img src="${image.src}" alt="${image.alt}" class="gallery-image" />
              </div>
            `
          )}
        </div>
      </div>

      <div class="lightbox ${this.lightboxOpen ? "open" : ""}" @click="${this.closeLightbox}">
        <button class="lightbox-close" @click="${this.closeLightbox}">✕</button>

        ${this.images.length > 1
          ? html`
              <button
                class="lightbox-nav prev"
                @click="${(e: Event) => {
                  e.stopPropagation();
                  this.prevImage();
                }}"
              >
                ‹
              </button>
              <button
                class="lightbox-nav next"
                @click="${(e: Event) => {
                  e.stopPropagation();
                  this.nextImage();
                }}"
              >
                ›
              </button>
            `
          : ""}

        <div class="lightbox-content" @click="${(e: Event) => e.stopPropagation()}">
          <img src="${currentImage?.src}" alt="${currentImage?.alt}" class="lightbox-image" />
          ${currentImage?.caption
            ? html`<p class="lightbox-caption">${currentImage.caption}</p>`
            : ""}
        </div>
      </div>
    `;
  }
}
