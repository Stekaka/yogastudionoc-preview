import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-avatar")
export class UIAvatar extends LitElement {
  @property({ type: String }) src = "";
  @property({ type: String }) alt = "";
  @property({ type: String }) initials = "";
  @property({ type: String }) size = "medium"; // 'small', 'medium', 'large', 'xlarge'
  @property({ type: String }) shape = "circle"; // 'circle', 'square'

  static styles = css`
    :host {
      display: inline-block;
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #e2e8f0;
      color: #64748b;
      font-weight: 600;
      position: relative;
    }

    :host([shape="circle"]) .avatar {
      border-radius: 50%;
    }

    :host([shape="square"]) .avatar {
      border-radius: 8px;
    }

    /* Sizes */
    :host([size="small"]) .avatar {
      width: 32px;
      height: 32px;
      font-size: 0.75rem;
    }

    :host([size="medium"]) .avatar {
      width: 48px;
      height: 48px;
      font-size: 1rem;
    }

    :host([size="large"]) .avatar {
      width: 64px;
      height: 64px;
      font-size: 1.25rem;
    }

    :host([size="xlarge"]) .avatar {
      width: 96px;
      height: 96px;
      font-size: 1.875rem;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-initials {
      text-transform: uppercase;
    }
  `;

  private getInitials(): string {
    if (this.initials) {
      return this.initials.slice(0, 2);
    }

    if (this.alt) {
      const parts = this.alt.trim().split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return parts[0].slice(0, 2).toUpperCase();
    }

    return "?";
  }

  render() {
    return html`
      <div class="avatar">
        ${this.src
          ? html`<img src="${this.src}" alt="${this.alt}" />`
          : html`<span class="avatar-initials">${this.getInitials()}</span>`}
      </div>
    `;
  }
}
