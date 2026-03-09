import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
}

@customElement("testimonial-block")
export class TestimonialBlock extends LitElement {
  @property({ type: String }) heading = "Vad våra kunder säger";
  @property({ type: Array }) testimonials: Testimonial[] = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      author: "Anna Andersson",
      role: "Kund",
      company: "Företag AB"
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      author: "Johan Karlsson",
      role: "Användare",
      company: "Business Group"
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Maria Svensson",
      role: "Medlem",
      company: "Solutions Inc"
    }
  ];

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-background-alt);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin: 0 0 3rem 0;
      color: var(--color-text-primary);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: var(--color-surface, white);
      padding: 2rem;
      border-radius: var(--radius-base, 8px);
      box-shadow: 0 1px 3px color-mix(in srgb, black 10%, transparent);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .quote {
      font-size: 1.125rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
      font-style: italic;
      flex-grow: 1;
    }

    .quote::before {
      content: '"';
      font-size: 2rem;
      color: var(--color-border);
      line-height: 0;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--color-background-alt);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: var(--color-text-secondary);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .author-details {
      flex: 1;
    }

    .author-name {
      font-weight: 600;
      color: var(--color-text-primary);
      margin: 0 0 0.25rem 0;
    }

    .author-role {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .social-links {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }

    .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--color-background-alt);
      color: var(--color-text-secondary);
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 0.875rem;
    }

    .social-links a:hover {
      background: var(--color-primary);
      color: var(--color-primary-contrast, white);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private renderSocialLinks(testimonial: Testimonial) {
    const links = [];

    if (testimonial.linkedin) {
      links.push(html`<a href="${testimonial.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
        </svg>
      </a>`);
    }
    if (testimonial.twitter) {
      links.push(html`<a href="${testimonial.twitter}" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>`);
    }
    if (testimonial.instagram) {
      links.push(html`<a href="${testimonial.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>`);
    }
    if (testimonial.facebook) {
      links.push(html`<a href="${testimonial.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>`);
    }

    return links.length > 0
      ? html`<div class="social-links">${links}</div>`
      : '';
  }

  render() {
    return html`
      <div class="container">
        <h2>${this.heading}</h2>
        <div class="testimonials-grid">
          ${this.testimonials.map(
            (testimonial) => html`
              <div class="testimonial-card">
                <div class="quote">${testimonial.quote}</div>
                <div class="author-info">
                  <div class="avatar">
                    ${testimonial.avatar
                      ? html`<img
                          src="${testimonial.avatar}"
                          alt="${testimonial.author}"
                        />`
                      : testimonial.author.charAt(0)}
                  </div>
                  <div class="author-details">
                    <p class="author-name">${testimonial.author}</p>
                    <p class="author-role">
                      ${testimonial.role}${testimonial.company
                        ? `, ${testimonial.company}`
                        : ""}
                    </p>
                    ${this.renderSocialLinks(testimonial)}
                  </div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
