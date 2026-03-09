import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Item {
  title: string;
  description: string;
  icon?: string;
}

/**
 * Problem-Solution split block for lead generation pages
 * Shows pain points and how you solve them side-by-side
 */
@customElement("problem-solution-block")
export class ProblemSolutionBlock extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) problems: Item[] = [];
  @property({ type: Array }) solutions: Item[] = [];
  @property({ type: String }) layout = "split"; // split, stacked

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
      margin-bottom: 4rem;
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
      max-width: 60ch;
      margin-left: auto;
      margin-right: auto;
    }

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    :host([layout="stacked"]) .content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .column-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--color-border);
      margin-bottom: 0.5rem;
    }

    .column-icon {
      font-size: 1.5rem;
      line-height: 1;
    }

    .column-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0;
    }

    .problems .column-header {
      border-bottom-color: color-mix(in srgb, #ef4444 50%, transparent);
    }

    .solutions .column-header {
      border-bottom-color: color-mix(in srgb, #10b981 50%, transparent);
    }

    .item {
      display: flex;
      gap: 1rem;
      padding: 1.25rem;
      background: var(--color-surface, white);
      border-radius: var(--radius-base, 12px);
      border: 1px solid var(--color-border);
      transition: all 0.2s ease;
    }

    .item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px color-mix(in srgb, black 8%, transparent);
    }

    .problems .item {
      border-left: 3px solid #ef4444;
    }

    .solutions .item {
      border-left: 3px solid #10b981;
    }

    .item-icon {
      font-size: 1.5rem;
      line-height: 1;
      flex-shrink: 0;
    }

    .item-content {
      flex: 1;
    }

    .item-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 0.5rem 0;
    }

    .item-description {
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
      margin: 0;
    }

    @media (max-width: 968px) {
      .content {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .header h2 {
        font-size: 2rem;
      }
    }

    @media (max-width: 768px) {
      :host {
        padding: 4rem 1.5rem;
      }

      .header {
        margin-bottom: 3rem;
      }

      .item {
        flex-direction: column;
        text-align: center;
      }

      .item-icon {
        align-self: center;
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
                ${this.subheading ? html`<p>${this.subheading}</p>` : ""}
              </div>
            `
          : ""}

        <div class="content">
          <div class="column problems">
            <div class="column-header">
              <span class="column-icon">⚠️</span>
              <h3 class="column-title">Problem vi löser</h3>
            </div>
            ${this.problems.map(
              (item) => html`
                <div class="item">
                  ${item.icon ? html`<div class="item-icon">${item.icon}</div>` : ""}
                  <div class="item-content">
                    <h4 class="item-title">${item.title}</h4>
                    <p class="item-description">${item.description}</p>
                  </div>
                </div>
              `
            )}
          </div>

          <div class="column solutions">
            <div class="column-header">
              <span class="column-icon">✅</span>
              <h3 class="column-title">Hur vi löser det</h3>
            </div>
            ${this.solutions.map(
              (item) => html`
                <div class="item">
                  ${item.icon ? html`<div class="item-icon">${item.icon}</div>` : ""}
                  <div class="item-content">
                    <h4 class="item-title">${item.title}</h4>
                    <p class="item-description">${item.description}</p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}
