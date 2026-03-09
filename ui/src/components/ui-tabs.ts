import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface Tab {
  id: string;
  label: string;
  content: string;
  disabled?: boolean;
}

@customElement("ui-tabs")
export class UITabs extends LitElement {
  @property({ type: Array }) tabs: Tab[] = [];
  @property({ type: String }) activeTab = "";
  @property({ type: String }) variant = "line"; // 'line', 'enclosed'

  static styles = css`
    :host {
      display: block;
    }

    .tabs-container {
      width: 100%;
    }

    .tabs-list {
      display: flex;
      gap: 0.5rem;
      border-bottom: 2px solid #e2e8f0;
    }

    .tabs-list.enclosed {
      border-bottom: none;
      gap: 0.25rem;
    }

    .tab {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      font-size: 1rem;
      font-weight: 500;
      color: #64748b;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      font-family: inherit;
    }

    .tab:hover:not(:disabled) {
      color: #3b82f6;
    }

    .tab.active {
      color: #3b82f6;
      border-bottom-color: #3b82f6;
    }

    .tab:disabled {
      color: #cbd5e1;
      cursor: not-allowed;
    }

    /* Enclosed variant */
    .tabs-list.enclosed .tab {
      border: 2px solid transparent;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      background: #f1f5f9;
      margin-bottom: -2px;
    }

    .tabs-list.enclosed .tab:hover:not(:disabled) {
      background: #e2e8f0;
    }

    .tabs-list.enclosed .tab.active {
      background: white;
      border-color: #e2e8f0;
      border-bottom-color: white;
      color: #0f172a;
    }

    .tab-content {
      padding: 1.5rem;
      background: white;
    }

    .tabs-list.enclosed + .tab-content {
      border: 2px solid #e2e8f0;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    if (!this.activeTab && this.tabs.length > 0) {
      this.activeTab = this.tabs[0].id;
    }
  }

  private handleTabClick(tabId: string, disabled?: boolean) {
    if (disabled) return;
    this.activeTab = tabId;
    this.dispatchEvent(
      new CustomEvent("tab-change", {
        detail: { tabId },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const activeTabData = this.tabs.find((tab) => tab.id === this.activeTab);

    return html`
      <div class="tabs-container">
        <div class="tabs-list ${this.variant}" role="tablist">
          ${this.tabs.map(
            (tab) => html`
              <button
                class="tab ${this.activeTab === tab.id ? "active" : ""}"
                role="tab"
                aria-selected="${this.activeTab === tab.id}"
                ?disabled="${tab.disabled}"
                @click="${() => this.handleTabClick(tab.id, tab.disabled)}"
              >
                ${tab.label}
              </button>
            `
          )}
        </div>
        <div class="tab-content" role="tabpanel">
          ${activeTabData ? html`<div>${activeTabData.content}</div>` : ""}
          <slot name="${this.activeTab}"></slot>
        </div>
      </div>
    `;
  }
}
