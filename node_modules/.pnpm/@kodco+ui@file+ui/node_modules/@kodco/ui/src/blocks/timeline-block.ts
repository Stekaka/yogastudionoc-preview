import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

@customElement("timeline-block")
export class TimelineBlock extends LitElement {
  @property({ type: String }) heading = "Vår historia";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) items: TimelineItem[] = [];

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-background-alt);
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 4rem;
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

    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--color-border);
    }

    .timeline-item {
      position: relative;
      padding-bottom: 3rem;
    }

    .timeline-item:last-child {
      padding-bottom: 0;
    }

    .timeline-dot {
      position: absolute;
      left: -2rem;
      top: 0;
      width: 16px;
      height: 16px;
      background: var(--color-primary);
      border-radius: 50%;
      border: 3px solid var(--color-background-alt);
      z-index: 1;
    }

    .timeline-year {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0 0 0.5rem 0;
    }

    .timeline-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.75rem 0;
    }

    .timeline-description {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          ${this.subheading
            ? html`<p class="subheading">${this.subheading}</p>`
            : ""}
        </div>

        <div class="timeline">
          ${this.items.map(
            (item) => html`
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
