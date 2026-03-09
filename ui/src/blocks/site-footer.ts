import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

@customElement("site-footer")
export class SiteFooter extends LitElement {
  @property({ type: String }) siteName = "Företagsnamn";
  @property({ type: String }) description = "";
  @property({ type: Array }) sections: FooterSection[] = [];
  @property({ type: Array }) socialLinks: SocialLink[] = [];
  @property({ type: String }) copyright = "";

  static styles = css`
    :host {
      display: block;
      background: var(--color-background, var(--color-primary));
      color: var(--color-text-primary, color-mix(in srgb, var(--color-primary-contrast, white) 75%, transparent));
      margin-top: 0;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 6rem 2rem 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 4rem;
      margin-bottom: 3rem;
    }

    /* When there are fewer sections, adjust columns */
    .footer-content:has(.footer-section:nth-child(3):last-child) {
      grid-template-columns: 2fr 1fr 1fr;
    }

    .footer-content:has(.footer-section:nth-child(2):last-child) {
      grid-template-columns: 2fr 1fr;
    }

    .footer-brand {
      max-width: 350px;
    }

    .footer-brand h3 {
      color: var(--color-text-primary, var(--color-primary-contrast, white));
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
    }

    .footer-brand p {
      color: var(--color-text-secondary, inherit);
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: color-mix(in srgb, var(--color-text-primary, white) 10%, transparent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--color-text-primary, var(--color-primary-contrast, white));
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background: var(--color-accent, var(--color-text-primary, white));
      transform: translateY(-2px);
    }

    .footer-section h4 {
      color: var(--color-text-primary, var(--color-primary-contrast, white));
      font-size: 1.125rem;
      margin: 0 0 1.5rem 0;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section li {
      margin-bottom: 0.75rem;
    }

    .footer-section a {
      color: var(--color-text-secondary, color-mix(in srgb, var(--color-primary-contrast, white) 75%, transparent));
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .footer-section a:hover {
      color: var(--color-text-primary, var(--color-primary-contrast, white));
    }

    .footer-bottom {
      border-top: 1px solid color-mix(in srgb, var(--color-text-primary, white) 10%, transparent);
      padding-top: 2rem;
      text-align: center;
      font-size: 0.875rem;
      color: var(--color-text-secondary, inherit);
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-brand {
        max-width: 100%;
      }
    }
  `;

  render() {
    const currentYear = new Date().getFullYear();
    const copyrightText =
      this.copyright || `© ${currentYear} ${this.siteName}. Alla rättigheter förbehållna.`;

    return html`
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>${this.siteName}</h3>
            ${this.description ? html`<p>${this.description}</p>` : ""}
            ${this.socialLinks.length > 0
              ? html`
                  <div class="social-links">
                    ${this.socialLinks.map(
                      (social) => html`
                        <a
                          href="${social.href}"
                          aria-label="${social.label}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${social.icon}
                        </a>
                      `
                    )}
                  </div>
                `
              : ""}
          </div>

          ${this.sections.map(
            (section) => html`
              <div class="footer-section">
                <h4>${section.title}</h4>
                <ul>
                  ${section.links.map(
                    (link) => html`
                      <li><a href="${link.href}">${link.label}</a></li>
                    `
                  )}
                </ul>
              </div>
            `
          )}
        </div>

        <div class="footer-bottom">
          <p>${copyrightText}</p>
        </div>
      </div>
    `;
  }
}
