import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

@customElement("team-block")
export class TeamBlock extends LitElement {
  @property({ type: String }) heading = "Vårt team";
  @property({ type: String }) subheading = "";
  @property({ type: Array }) members: TeamMember[] = [
    {
      name: "Anna Karlsson",
      role: "VD & Grundare",
      bio: "20 års erfarenhet inom digital transformation och strategisk rådgivning",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      email: "anna@company.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Erik Svensson",
      role: "Technical Director",
      bio: "Expert inom systemarkitektur och modern webbutveckling",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      email: "erik@company.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Lisa Andersson",
      role: "Creative Director",
      bio: "Prisbelönt designer med passion för användarvänlighet",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      email: "lisa@company.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Johan Berg",
      role: "Strategy Lead",
      bio: "Hjälper företag att växa genom datadriven strategi",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      email: "johan@company.com",
      linkedin: "https://linkedin.com"
    }
  ];

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
      background: var(--color-surface, white);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
    }

    .subheading {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
    }

    .team-member {
      text-align: center;
    }

    .member-image-wrapper {
      width: 200px;
      height: 200px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      overflow: hidden;
      background: var(--color-border);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .member-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .member-placeholder {
      font-size: 4rem;
      color: var(--color-text-secondary);
    }

    .member-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0 0 0.5rem 0;
    }

    .member-role {
      font-size: 1rem;
      color: var(--color-primary);
      font-weight: 600;
      margin: 0 0 1rem 0;
    }

    .member-bio {
      font-size: 0.938rem;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin: 0 0 1rem 0;
    }

    .member-social {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .member-social a {
      width: 36px;
      height: 36px;
      background: var(--color-background-alt);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--color-text-secondary);
      transition: all 0.3s ease;
    }

    .member-social a:hover {
      background: var(--color-primary);
      color: var(--color-surface, white);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      .team-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          ${this.subheading
            ? html`<p class="subheading">${this.subheading}</p>`
            : ""}
        </div>
        <div class="team-grid">
          ${this.members.map(
            (member) => html`
              <div class="team-member">
                <div class="member-image-wrapper">
                  ${member.imageUrl
                    ? html`<img
                        src="${member.imageUrl}"
                        alt="${member.name}"
                        class="member-image"
                      />`
                    : html`<span class="member-placeholder">👤</span>`}
                </div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                ${member.bio ? html`<p class="member-bio">${member.bio}</p>` : ""}
                ${this.renderSocial(member)}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  private renderSocial(member: TeamMember) {
    if (!member.email && !member.linkedin && !member.twitter) {
      return "";
    }

    return html`
      <div class="member-social">
        ${member.email
          ? html`<a href="mailto:${member.email}" aria-label="Email">📧</a>`
          : ""}
        ${member.linkedin
          ? html`<a
              href="${member.linkedin}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              >💼</a
            >`
          : ""}
        ${member.twitter
          ? html`<a
              href="${member.twitter}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              >🐦</a
            >`
          : ""}
      </div>
    `;
  }
}
