import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface IconItem {
  icon: string;
  title: string;
  description?: string;
  href?: string;
}

@customElement("icon-grid")
export class IconGrid extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: Array }) items: IconItem[] = [];
  @property({ type: Number }) columns = 4; // 2, 3, 4, eller 6
  @property({ type: String }) variant = "default"; // 'default', 'bordered', 'filled'

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

    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin: 0 0 3rem 0;
      color: var(--color-text-primary);
    }

    .icon-grid {
      display: grid;
      gap: 2rem;
    }

    :host([columns="2"]) .icon-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    :host([columns="3"]) .icon-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    :host([columns="4"]) .icon-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    :host([columns="6"]) .icon-grid {
      grid-template-columns: repeat(6, 1fr);
    }

    .icon-item {
      text-align: center;
      padding: 1.5rem;
      transition: transform 0.3s ease;
    }

    .icon-item:hover {
      transform: translateY(-4px);
    }

    :host([variant="bordered"]) .icon-item {
      border: 2px solid var(--color-border);
      border-radius: var(--radius-base, 8px);
    }

    :host([variant="filled"]) .icon-item {
      background: var(--color-background-alt);
      border-radius: var(--radius-base, 8px);
    }

    .icon-wrapper {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: block;
    }

    .icon-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 0.5rem 0;
    }

    .icon-description {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0;
      line-height: 1.5;
    }

    .icon-link {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    @media (max-width: 1024px) {
      :host([columns="6"]) .icon-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      :host([columns="4"]) .icon-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      :host([columns="6"]) .icon-grid,
      :host([columns="4"]) .icon-grid,
      :host([columns="3"]) .icon-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      :host([columns="2"]) .icon-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        ${this.heading ? html`<h2>${this.heading}</h2>` : ""}
        <div class="icon-grid">
          ${this.items.map(
            (item) => html`
              ${item.href
                ? html`
                    <a href="${item.href}" class="icon-link">
                      ${this.renderIconItem(item)}
                    </a>
                  `
                : this.renderIconItem(item)}
            `
          )}
        </div>
      </div>
    `;
  }

  private renderIconItem(item: IconItem) {
    return html`
      <div class="icon-item">
        <span class="icon-wrapper">${item.icon}</span>
        <h3 class="icon-title">${item.title}</h3>
        ${item.description
          ? html`<p class="icon-description">${item.description}</p>`
          : ""}
      </div>
    `;
  }
}
