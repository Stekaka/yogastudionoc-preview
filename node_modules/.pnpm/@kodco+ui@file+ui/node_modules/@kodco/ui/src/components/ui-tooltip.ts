import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("ui-tooltip")
export class UITooltip extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: String }) position = "top"; // 'top', 'bottom', 'left', 'right'
  @state() private visible = false;

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .trigger {
      display: inline-block;
      cursor: help;
    }

    .tooltip {
      position: absolute;
      background: #1e293b;
      color: white;
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      font-size: 0.875rem;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 1000;
    }

    .tooltip.visible {
      opacity: 1;
    }

    .tooltip::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
    }

    /* Top position */
    .tooltip.top {
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    .tooltip.top::before {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px 6px 0 6px;
      border-color: #1e293b transparent transparent transparent;
    }

    /* Bottom position */
    .tooltip.bottom {
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    }

    .tooltip.bottom::before {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent #1e293b transparent;
    }

    /* Left position */
    .tooltip.left {
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }

    .tooltip.left::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 0 6px 6px;
      border-color: transparent transparent transparent #1e293b;
    }

    /* Right position */
    .tooltip.right {
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    }

    .tooltip.right::before {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 6px 6px 0;
      border-color: transparent #1e293b transparent transparent;
    }
  `;

  private handleMouseEnter() {
    this.visible = true;
  }

  private handleMouseLeave() {
    this.visible = false;
  }

  render() {
    return html`
      <div
        class="trigger"
        @mouseenter="${this.handleMouseEnter}"
        @mouseleave="${this.handleMouseLeave}"
      >
        <slot></slot>
      </div>
      <div class="tooltip ${this.position} ${this.visible ? "visible" : ""}">
        ${this.text}
      </div>
    `;
  }
}
