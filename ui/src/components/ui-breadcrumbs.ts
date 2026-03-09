import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Breadcrumb {
  label: string;
  href?: string;
}

@customElement("ui-breadcrumbs")
export class UIBreadcrumbs extends LitElement {
  @property({ type: Array }) items: Breadcrumb[] = [];
  @property({ type: String }) separator = "/";

  static styles = css`
    :host {
      display: block;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-size: 0.875rem;
    }

    a {
      color: #64748b;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #3b82f6;
    }

    .current {
      color: #0f172a;
      font-weight: 600;
    }

    .separator {
      color: #cbd5e1;
      user-select: none;
    }
  `;

  render() {
    return html`
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        ${this.items.map(
          (item, index) => html`
            ${index > 0 ? html`<span class="separator">${this.separator}</span>` : ""}
            ${item.href
              ? html`<a href="${item.href}">${item.label}</a>`
              : html`<span class="current">${item.label}</span>`}
          `
        )}
      </nav>
    `;
  }
}
