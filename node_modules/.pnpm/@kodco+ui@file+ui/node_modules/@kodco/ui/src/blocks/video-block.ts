import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("video-block")
export class VideoBlock extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) subheading = "";
  @property({ type: String }) videoUrl = "";
  @property({ type: String }) provider = "youtube"; // 'youtube', 'vimeo', 'direct'
  @property({ type: String }) thumbnailUrl = "";
  @property({ type: String }) aspectRatio = "16/9"; // '16/9', '4/3', '1/1'

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-surface, white);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
    }

    .subheading {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .video-wrapper {
      position: relative;
      width: 100%;
      border-radius: var(--radius-base, 12px);
      overflow: hidden;
      box-shadow: 0 8px 24px color-mix(in srgb, black 12%, transparent);
    }

    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
      background: #000;
    }

    iframe,
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }
    }
  `;

  private getEmbedUrl(): string {
    if (!this.videoUrl) return "";

    if (this.provider === "youtube") {
      // Extract video ID from various YouTube URL formats
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = this.videoUrl.match(youtubeRegex);
      const videoId = match ? match[1] : this.videoUrl;
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (this.provider === "vimeo") {
      // Extract video ID from Vimeo URL
      const vimeoRegex = /vimeo\.com\/(\d+)/;
      const match = this.videoUrl.match(vimeoRegex);
      const videoId = match ? match[1] : this.videoUrl;
      return `https://player.vimeo.com/video/${videoId}`;
    }

    return this.videoUrl;
  }

  render() {
    const embedUrl = this.getEmbedUrl();
    const aspectRatioValue = this.aspectRatio === "16/9" ? 16 / 9 : this.aspectRatio === "4/3" ? 4 / 3 : 1;

    return html`
      <style>
        .video-container {
          --aspect-ratio: ${aspectRatioValue};
        }
      </style>
      <div class="container">
        ${this.heading || this.subheading
          ? html`
              <div class="header">
                ${this.heading ? html`<h2>${this.heading}</h2>` : ""}
                ${this.subheading
                  ? html`<p class="subheading">${this.subheading}</p>`
                  : ""}
              </div>
            `
          : ""}

        <div class="video-wrapper">
          <div class="video-container">
            ${this.provider === "direct"
              ? html`
                  <video
                    controls
                    ${this.thumbnailUrl ? `poster="${this.thumbnailUrl}"` : ""}
                  >
                    <source src="${embedUrl}" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                `
              : html`
                  <iframe
                    src="${embedUrl}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                `}
          </div>
        </div>
      </div>
    `;
  }
}
