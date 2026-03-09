import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

@customElement("stats-block")
export class StatsBlock extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) stats: Stat[] = [];
  @property({ type: String }) variant = "light"; // 'light' eller 'dark'

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
    }

    :host([variant="light"]) {
      background: var(--color-surface, white);
      color: var(--color-text-primary);
    }

    :host([variant="dark"]) {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: white;
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
    }

    :host([variant="light"]) h2 {
      color: var(--color-text-primary);
    }

    :host([variant="dark"]) h2 {
      color: var(--color-surface, white);
    }

    .subheading {
      font-size: 1.25rem;
      margin: 0;
    }

    :host([variant="light"]) .subheading {
      color: var(--color-text-secondary);
    }

    :host([variant="dark"]) .subheading {
      color: var(--color-text-secondary);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1;
      margin: 0 0 0.5rem 0;
    }

    :host([variant="light"]) .stat-value {
      color: var(--color-primary);
    }

    :host([variant="dark"]) .stat-value {
      color: var(--color-primary);
    }

    .stat-label {
      font-size: 1.125rem;
      font-weight: 500;
      margin: 0;
    }

    :host([variant="light"]) .stat-label {
      color: var(--color-text-secondary);
    }

    :host([variant="dark"]) .stat-label {
      color: var(--color-text-secondary);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .stat-value {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
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
        <div class="stats-grid">
          ${this.stats.map(
            (stat) => html`
              <div class="stat-item">
                <div class="stat-value">
                  ${stat.prefix || ""}${stat.value}${stat.suffix || ""}
                </div>
                <p class="stat-label">${stat.label}</p>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
