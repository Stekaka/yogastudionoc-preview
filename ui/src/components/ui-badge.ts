import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-badge")
export class UIBadge extends LitElement {
  @property({ type: String }) variant = "default"; // 'default', 'primary', 'success', 'warning', 'danger'
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large'

  static styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-weight: 600;
      white-space: nowrap;
    }

    /* Sizes */
    :host([size="small"]) .badge {
      padding: 0.5rem 1.25rem;
      font-size: 0.75rem;
    }

    :host([size="medium"]) .badge {
      padding: 0.625rem 1.5rem;
      font-size: 0.875rem;
    }

    :host([size="large"]) .badge {
      padding: 0.75rem 1.75rem;
      font-size: 1rem;
    }

    /* Variants */
    :host([variant="default"]) .badge {
      background: #e2e8f0;
      color: #475569;
    }

    :host([variant="primary"]) .badge {
      background: #dbeafe;
      color: #1e40af;
    }

    :host([variant="success"]) .badge {
      background: #d1fae5;
      color: #065f46;
    }

    :host([variant="warning"]) .badge {
      background: #fef3c7;
      color: #92400e;
    }

    :host([variant="danger"]) .badge {
      background: #fee2e2;
      color: #991b1b;
    }
  `;

  render() {
    return html`<span class="badge"><slot></slot></span>`;
  }
}
