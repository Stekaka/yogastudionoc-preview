import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

@customElement("ui-accordion")
export class UIAccordion extends LitElement {
  @property({ type: Array }) items: AccordionItem[] = [];
  @property({ type: Boolean }) allowMultiple = false;
  @state() private openItems: Set<string> = new Set();

  static styles = css`
    :host {
      display: block;
    }

    .accordion {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .accordion-item {
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
      background: white;
    }

    .accordion-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: transparent;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: #0f172a;
      cursor: pointer;
      transition: background 0.2s ease;
      text-align: left;
      font-family: inherit;
    }

    .accordion-header:hover {
      background: #f8fafc;
    }

    .accordion-header.open {
      color: #3b82f6;
    }

    .accordion-icon {
      font-size: 1.25rem;
      transition: transform 0.3s ease;
      color: #64748b;
    }

    .accordion-icon.open {
      transform: rotate(180deg);
      color: #3b82f6;
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .accordion-content.open {
      max-height: 1000px;
    }

    .accordion-content-inner {
      padding: 0 1.5rem 1.5rem 1.5rem;
      color: #64748b;
      line-height: 1.6;
    }
  `;

  private toggleItem(itemId: string) {
    if (this.allowMultiple) {
      const newOpenItems = new Set(this.openItems);
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        newOpenItems.add(itemId);
      }
      this.openItems = newOpenItems;
    } else {
      if (this.openItems.has(itemId)) {
        this.openItems = new Set();
      } else {
        this.openItems = new Set([itemId]);
      }
    }

    this.dispatchEvent(
      new CustomEvent("accordion-change", {
        detail: { openItems: Array.from(this.openItems) },
        bubbles: true,
        composed: true,
      })
    );
  }

  private isOpen(itemId: string): boolean {
    return this.openItems.has(itemId);
  }

  render() {
    return html`
      <div class="accordion">
        ${this.items.map(
          (item) => html`
            <div class="accordion-item">
              <button
                class="accordion-header ${this.isOpen(item.id) ? "open" : ""}"
                @click="${() => this.toggleItem(item.id)}"
                aria-expanded="${this.isOpen(item.id)}"
              >
                <span>${item.title}</span>
                <span class="accordion-icon ${this.isOpen(item.id) ? "open" : ""}">▼</span>
              </button>
              <div class="accordion-content ${this.isOpen(item.id) ? "open" : ""}">
                <div class="accordion-content-inner">${item.content}</div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}
