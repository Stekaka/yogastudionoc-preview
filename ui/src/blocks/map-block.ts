import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("map-block")
export class MapBlock extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) address = "";
  @property({ type: String }) mapUrl = ""; // Google Maps embed URL
  @property({ type: String }) phone = "";
  @property({ type: String }) email = "";
  @property({ type: String }) hours = "";
  @property({ type: String }) aspectRatio = "16/9"; // '16/9', '4/3', '21/9'

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

    .map-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .map-container {
      position: relative;
      width: 100%;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
      border-radius: var(--radius-base, 12px);
      overflow: hidden;
      box-shadow: 0 4px 12px color-mix(in srgb, black 10%, transparent);
    }

    .map-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    .info-section {
      background: var(--color-background-alt);
      padding: 2rem;
      border-radius: var(--radius-base, 12px);
    }

    .info-section h3 {
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      color: var(--color-text-primary);
    }

    .info-item {
      display: flex;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid var(--color-border);
    }

    .info-item:last-child {
      border-bottom: none;
    }

    .info-icon {
      font-size: 1.25rem;
      flex-shrink: 0;
    }

    .info-content {
      flex: 1;
    }

    .info-label {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0 0 0.25rem 0;
    }

    .info-value {
      font-size: 1rem;
      color: var(--color-text-primary);
      margin: 0;
    }

    .info-value a {
      color: inherit;
      text-decoration: none;
    }

    .info-value a:hover {
      color: var(--color-primary);
    }

    @media (max-width: 1024px) {
      .map-wrapper {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }
    }
  `;

  render() {
    const aspectRatioValue =
      this.aspectRatio === "16/9" ? 16 / 9 : this.aspectRatio === "4/3" ? 4 / 3 : 21 / 9;

    return html`
      <style>
        .map-container {
          --aspect-ratio: ${aspectRatioValue};
        }
      </style>
      <div class="container">
        ${this.heading ? html`<h2>${this.heading}</h2>` : ""}

        <div class="map-wrapper">
          <div class="map-container">
            ${this.mapUrl
              ? html`<iframe
                  src="${this.mapUrl}"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>`
              : html`<div style="background: #e2e8f0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #64748b;">
                  Map placeholder
                </div>`}
          </div>

          <div class="info-section">
            <h3>Kontaktinformation</h3>

            ${this.address
              ? html`
                  <div class="info-item">
                    <span class="info-icon">📍</span>
                    <div class="info-content">
                      <p class="info-label">Adress</p>
                      <p class="info-value">${this.address}</p>
                    </div>
                  </div>
                `
              : ""}

            ${this.phone
              ? html`
                  <div class="info-item">
                    <span class="info-icon">📞</span>
                    <div class="info-content">
                      <p class="info-label">Telefon</p>
                      <p class="info-value">
                        <a href="tel:${this.phone}">${this.phone}</a>
                      </p>
                    </div>
                  </div>
                `
              : ""}

            ${this.email
              ? html`
                  <div class="info-item">
                    <span class="info-icon">📧</span>
                    <div class="info-content">
                      <p class="info-label">Email</p>
                      <p class="info-value">
                        <a href="mailto:${this.email}">${this.email}</a>
                      </p>
                    </div>
                  </div>
                `
              : ""}

            ${this.hours
              ? html`
                  <div class="info-item">
                    <span class="info-icon">🕒</span>
                    <div class="info-content">
                      <p class="info-label">Öppettider</p>
                      <p class="info-value">${this.hours}</p>
                    </div>
                  </div>
                `
              : ""}
          </div>
        </div>
      </div>
    `;
  }
}
