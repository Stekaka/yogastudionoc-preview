import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-grid")
export class UIGrid extends LitElement {
  @property({ type: Number }) columns = 12;
  @property({ type: String }) gap = "1rem";
  @property({ type: String }) columnTemplate = ""; // Custom grid-template-columns

  static styles = css`
    :host {
      display: block;
    }

    .grid {
      display: grid;
      width: 100%;
    }

    @media (max-width: 768px) {
      .grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  render() {
    const gridStyle = this.columnTemplate
      ? `grid-template-columns: ${this.columnTemplate}; gap: ${this.gap};`
      : `grid-template-columns: repeat(${this.columns}, 1fr); gap: ${this.gap};`;

    return html`
      <div class="grid" style="${gridStyle}">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-grid-item")
export class UIGridItem extends LitElement {
  @property({ type: Number }) span = 1;
  @property({ type: Number }) spanMobile = 1;

  static styles = css`
    :host {
      display: block;
    }

    @media (max-width: 768px) {
      :host {
        grid-column: span var(--span-mobile, 1) !important;
      }
    }
  `;

  render() {
    return html`
      <div style="grid-column: span ${this.span}; --span-mobile: ${this.spanMobile};">
        <slot></slot>
      </div>
    `;
  }
}
