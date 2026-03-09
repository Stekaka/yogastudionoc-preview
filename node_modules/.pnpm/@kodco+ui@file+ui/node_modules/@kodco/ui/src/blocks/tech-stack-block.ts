import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface TechItem {
  name: string;
  logo: string;
  category?: string;
}

/**
 * Tech stack / Integration logos block
 * Shows technologies, frameworks, and tools you work with
 */
@customElement("tech-stack-block")
export class TechStackBlock extends LitElement {
  @property({ type: String }) heading = "Vi jobbar med";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) technologies: TechItem[] = [];
  @property({ type: String }) variant = "badges"; // badges, cards, minimal

  static styles = css`
    :host {
      display: block;
      padding: 5rem 2rem;
      background: var(--color-background-alt);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h2 {
      font-size: 2rem;
      margin: 0 0 0.75rem 0;
      color: var(--color-text-primary);
      font-weight: 700;
    }

    .header p {
      font-size: 1rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    /* Badges Variant */
    .tech-grid-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    .tech-badge {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      padding: 0.625rem 1.25rem;
      background: var(--color-surface, white);
      border: 1px solid var(--color-border);
      border-radius: 999px;
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--color-text-primary);
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px color-mix(in srgb, black 4%, transparent);
    }

    .tech-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px color-mix(in srgb, black 8%, transparent);
      border-color: var(--color-primary);
    }

    .tech-badge img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    /* Cards Variant */
    .tech-grid-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1.5rem;
    }

    .tech-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem 1rem;
      background: var(--color-surface, white);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-base, 12px);
      text-align: center;
      transition: all 0.2s ease;
    }

    .tech-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px color-mix(in srgb, black 10%, transparent);
      border-color: var(--color-primary);
    }

    .tech-card img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    .tech-card .name {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-text-primary);
    }

    .tech-card .category {
      font-size: 0.75rem;
      color: var(--color-text-secondary);
    }

    /* Minimal Variant */
    .tech-grid-minimal {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    .tech-minimal {
      display: flex;
      align-items: center;
      opacity: 0.7;
      transition: opacity 0.2s ease;
      filter: grayscale(100%);
    }

    .tech-minimal:hover {
      opacity: 1;
      filter: grayscale(0%);
    }

    .tech-minimal img {
      width: 80px;
      height: 40px;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      :host {
        padding: 4rem 1.5rem;
      }

      .header h2 {
        font-size: 1.75rem;
      }

      .tech-grid-cards {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
      }

      .tech-grid-minimal {
        gap: 1.5rem;
      }

      .tech-minimal img {
        width: 64px;
        height: 32px;
      }
    }
  `;

  private renderBadges() {
    return html`
      <div class="tech-grid-badges">
        ${this.technologies.map(
          (tech) => html`
            <div class="tech-badge">
              <img src="${tech.logo}" alt="${tech.name}" />
              <span>${tech.name}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  private renderCards() {
    return html`
      <div class="tech-grid-cards">
        ${this.technologies.map(
          (tech) => html`
            <div class="tech-card">
              <img src="${tech.logo}" alt="${tech.name}" />
              <div class="name">${tech.name}</div>
              ${tech.category ? html`<div class="category">${tech.category}</div>` : ""}
            </div>
          `
        )}
      </div>
    `;
  }

  private renderMinimal() {
    return html`
      <div class="tech-grid-minimal">
        ${this.technologies.map(
          (tech) => html`
            <div class="tech-minimal">
              <img src="${tech.logo}" alt="${tech.name}" title="${tech.name}" />
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        ${this.heading || this.subheading
          ? html`
              <div class="header">
                ${this.heading ? html`<h2>${this.heading}</h2>` : ""}
                ${this.subheading ? html`<p>${this.subheading}</p>` : ""}
              </div>
            `
          : ""}

        ${this.variant === "cards"
          ? this.renderCards()
          : this.variant === "minimal"
          ? this.renderMinimal()
          : this.renderBadges()}
      </div>
    `;
  }
}
