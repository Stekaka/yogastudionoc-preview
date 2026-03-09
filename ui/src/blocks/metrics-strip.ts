import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Metric {
  value: string;
  label: string;
  icon?: string;
}

/**
 * Compact metrics strip for social proof
 * Perfect for displaying key stats between sections
 */
@customElement("metrics-strip")
export class MetricsStrip extends LitElement {
  @property({ type: Array }) metrics: Metric[] = [
    { value: "120+", label: "Lanseringar", icon: "🚀" },
    { value: "4.9/5", label: "Snittbetyg", icon: "⭐" },
    { value: "< 24h", label: "Svarstid", icon: "⚡" },
  ];

  @property({ type: String }) variant = "default"; // default, minimal, bordered

  static styles = css`
    :host {
      display: block;
      padding: 2rem 0;
    }

    :host([variant="bordered"]) {
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      background: var(--color-background-alt);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2rem;
      align-items: center;
    }

    .metric {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    :host([variant="minimal"]) .metric {
      flex-direction: row;
      justify-content: center;
      gap: 0.75rem;
    }

    .icon {
      font-size: 1.5rem;
      line-height: 1;
    }

    :host([variant="minimal"]) .icon {
      font-size: 1.25rem;
    }

    .metric-value {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      color: var(--color-primary);
      letter-spacing: -0.02em;
    }

    :host([variant="minimal"]) .metric-value {
      font-size: 1.5rem;
    }

    .metric-label {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    :host([variant="minimal"]) .metric-label {
      font-size: 0.8125rem;
    }

    /* Divider between metrics on desktop */
    @media (min-width: 769px) {
      .metric:not(:last-child)::after {
        content: "";
        position: absolute;
        right: -1rem;
        top: 50%;
        transform: translateY(-50%);
        height: 60%;
        width: 1px;
        background: var(--color-border);
      }

      .metric {
        position: relative;
      }

      :host([variant="minimal"]) .metric:not(:last-child)::after {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .metrics {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1.5rem;
      }

      .metric-value {
        font-size: 1.5rem;
      }

      .metric-label {
        font-size: 0.75rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="metrics">
          ${this.metrics.map(
            (metric) => html`
              <div class="metric">
                ${metric.icon ? html`<div class="icon">${metric.icon}</div>` : ""}
                <div class="metric-value">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
