import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface ComparisonColumn {
  title: string;
  subtitle?: string;
  highlighted?: boolean;
}

interface ComparisonRow {
  label: string;
  values: (string | boolean)[];
}

/**
 * Comparison table for products, packages, or approaches
 * Perfect for product pages and professional services
 */
@customElement("comparison-table")
export class ComparisonTable extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) columns: ComparisonColumn[] = [];
  @property({ type: Array }) rows: ComparisonRow[] = [];

  static styles = css`
    :host {
      display: block;
      padding: 6rem 2rem;
      background: var(--color-background);
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

    .table-wrapper {
      overflow-x: auto;
      border-radius: var(--radius-base, 12px);
      border: 1px solid var(--color-border);
      background: var(--color-surface, white);
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background: var(--color-background-alt);
      border-bottom: 2px solid var(--color-border);
    }

    th {
      padding: 1.5rem 1rem;
      text-align: center;
      font-weight: 700;
      color: var(--color-text-primary);
      vertical-align: top;
    }

    th:first-child {
      text-align: left;
      min-width: 200px;
    }

    th.highlighted {
      background: color-mix(in srgb, var(--color-primary) 8%, transparent);
      border-left: 2px solid var(--color-primary);
      border-right: 2px solid var(--color-primary);
      position: relative;
    }

    th.highlighted::before {
      content: "⭐ Rekommenderas";
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-primary);
      color: var(--color-primary-contrast, white);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
    }

    .column-title {
      font-size: 1.25rem;
      margin: 0 0 0.25rem 0;
    }

    .column-subtitle {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--color-text-secondary);
      margin: 0;
    }

    tbody tr {
      border-bottom: 1px solid var(--color-border);
    }

    tbody tr:last-child {
      border-bottom: none;
    }

    tbody tr:hover {
      background: color-mix(in srgb, var(--color-primary) 3%, transparent);
    }

    td {
      padding: 1.25rem 1rem;
      text-align: center;
      color: var(--color-text-secondary);
    }

    td:first-child {
      text-align: left;
      font-weight: 500;
      color: var(--color-text-primary);
    }

    td.highlighted {
      background: color-mix(in srgb, var(--color-primary) 4%, transparent);
      border-left: 2px solid var(--color-primary);
      border-right: 2px solid var(--color-primary);
    }

    .check {
      color: #10b981;
      font-size: 1.25rem;
    }

    .cross {
      color: #ef4444;
      font-size: 1.25rem;
    }

    @media (max-width: 768px) {
      :host {
        padding: 4rem 1rem;
      }

      .header h2 {
        font-size: 2rem;
      }

      th,
      td {
        padding: 1rem 0.75rem;
        font-size: 0.875rem;
      }

      th:first-child,
      td:first-child {
        min-width: 140px;
      }

      .column-title {
        font-size: 1rem;
      }

      th.highlighted::before {
        font-size: 0.625rem;
        padding: 0.2rem 0.5rem;
      }
    }
  `;

  private renderValue(value: string | boolean, highlighted: boolean) {
    if (typeof value === "boolean") {
      return value
        ? html`<span class="check">✓</span>`
        : html`<span class="cross">✕</span>`;
    }
    return value;
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

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                ${this.columns.map(
                  (col) => html`
                    <th class="${col.highlighted ? "highlighted" : ""}">
                      <div class="column-title">${col.title}</div>
                      ${col.subtitle
                        ? html`<div class="column-subtitle">${col.subtitle}</div>`
                        : ""}
                    </th>
                  `
                )}
              </tr>
            </thead>
            <tbody>
              ${this.rows.map(
                (row) => html`
                  <tr>
                    <td>${row.label}</td>
                    ${row.values.map((value, index) => {
                      const highlighted = this.columns[index]?.highlighted || false;
                      return html`
                        <td class="${highlighted ? "highlighted" : ""}">
                          ${this.renderValue(value, highlighted)}
                        </td>
                      `;
                    })}
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
