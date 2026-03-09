import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface NavItem {
  label: string;
  href: string;
}

@customElement("site-header")
export class SiteHeader extends LitElement {
  @property({ type: String }) logo = "";
  @property({ type: String, attribute: 'site-name' }) siteName = "";
  @property({
    attribute: 'nav-items',
    converter: {
      fromAttribute: (value: string | null) => {
        if (!value) return [];
        try {
          return JSON.parse(value);
        } catch (e) {
          console.error('Failed to parse nav-items:', e);
          return [];
        }
      }
    }
  })
  navItems: NavItem[] = [];
  @property({ type: Boolean }) transparent = false;
  @property({ type: Boolean }) mobileMenuOpen = false;
  @property({ type: String }) ctaText = "";
  @property({ type: String }) ctaHref = "";

  connectedCallback() {
    super.connectedCallback();
    // Force read nav-items attribute on connection
    const navItemsAttr = this.getAttribute('nav-items');
    if (navItemsAttr) {
      try {
        this.navItems = JSON.parse(navItemsAttr);
      } catch (e) {
        console.error('Failed to parse nav-items in connectedCallback:', e);
      }
    }
  }

  static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--color-surface, white);
      box-shadow: 0 1px 3px color-mix(in srgb, black 10%, transparent);
    }

    :host([transparent]) {
      background: transparent;
      box-shadow: none;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: var(--color-text-primary);
      font-weight: 700;
      font-size: 1.5rem;
    }

    :host([transparent]) .logo-wrapper {
      color: white;
    }

    .logo-wrapper img {
      height: 120px;
      width: auto;
    }

    .site-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin-left: 0.2rem;
    }

    :host([transparent]) .site-name {
      color: white;
    }

    nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-wrapper {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .cta-button {
      padding: 0.625rem 1.5rem;
      background: var(--color-primary);
      color: var(--color-primary-contrast, white);
      text-decoration: none;
      border-radius: var(--radius-base, 6px);
      font-weight: 600;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .cta-button:hover {
      background: color-mix(in srgb, var(--color-primary) 85%, black);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 30%, transparent);
    }

    :host([transparent]) .cta-button {
      background: white;
      color: var(--color-text-primary);
    }

    :host([transparent]) .cta-button:hover {
      background: color-mix(in srgb, white 90%, transparent);
    }

    nav a {
      text-decoration: none;
      color: var(--color-text-secondary);
      font-weight: 500;
      transition: color 0.2s ease;
      position: relative;
    }

    :host([transparent]) nav a {
      color: color-mix(in srgb, white 90%, transparent);
    }

    nav a:hover {
      color: var(--color-primary);
    }

    :host([transparent]) nav a:hover {
      color: white;
    }

    nav a::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-primary);
      transition: width 0.3s ease;
    }

    nav a:hover::after {
      width: 100%;
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-primary);
      padding: 0.5rem;
    }

    :host([transparent]) .mobile-toggle {
      color: white;
    }

    @media (max-width: 768px) {
      .nav-wrapper {
        display: none;
      }

      .mobile-toggle {
        display: block;
      }

      :host([mobile-menu-open]) .nav-wrapper {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--color-surface, white);
        padding: 2rem;
        box-shadow: 0 4px 6px color-mix(in srgb, black 10%, transparent);
        gap: 1rem;
      }

      :host([mobile-menu-open]) nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      :host([transparent][mobile-menu-open]) .nav-wrapper {
        background: var(--color-text-primary);
      }

      .cta-button {
        width: 100%;
        text-align: center;
      }
    }
  `;

  private toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      this.setAttribute("mobile-menu-open", "");
    } else {
      this.removeAttribute("mobile-menu-open");
    }
  }

  render() {
    return html`
      <div class="container">
        <a href="/" class="logo-wrapper">
          ${this.logo ? html`<img src="${this.logo}" alt="Logo" />` : ""}
          ${this.siteName ? html`<span class="site-name">${this.siteName}</span>` : ""}
        </a>

        <button
          class="mobile-toggle"
          @click="${this.toggleMobileMenu}"
          aria-label="Toggle menu"
        >
          ${this.mobileMenuOpen ? "✕" : "☰"}
        </button>

        <div class="nav-wrapper">
          <nav>
            ${this.navItems.map(
              (item) => html`<a href="${item.href}">${item.label}</a>`
            )}
          </nav>
          <slot name="actions"></slot>
          ${this.ctaText && this.ctaHref
            ? html`<a href="${this.ctaHref}" class="cta-button">${this.ctaText}</a>`
            : ""}
        </div>
      </div>
    `;
  }
}
