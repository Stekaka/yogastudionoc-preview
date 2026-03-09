import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

@customElement("contact-block")
export class ContactBlock extends LitElement {
  @property({ type: String }) heading = "Kontakta oss";
  @property({ type: String }) subheading = "";
  @property({ type: Object }) contactInfo: ContactInfo = {
    email: "hello@company.com",
    phone: "+46 70 123 45 67",
    address: "Storgatan 1, 111 51 Stockholm"
  };
  @property({ type: String }) formAction = "";
  @property({ type: String }) layout = "split"; // 'split', 'centered', 'form-only'
  @state() private formStatus: "idle" | "submitting" | "success" | "error" = "idle";

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

    .content {
      display: grid;
      gap: 4rem;
    }

    :host([layout="split"]) .content {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }

    :host([layout="centered"]) .content,
    :host([layout="form-only"]) .content {
      grid-template-columns: 1fr;
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-info {
      padding: 2rem;
      background: var(--color-background-alt);
      border-radius: var(--radius-base, 12px);
    }

    .contact-info h3 {
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      color: var(--color-text-primary);
    }

    .info-item {
      display: flex;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid var(--color-border);
    }

    .info-item:last-child {
      border-bottom: none;
    }

    .info-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      color: var(--color-primary);
    }

    .info-icon svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .info-content {
      flex: 1;
    }

    .info-label {
      font-size: 0.875rem;
      color: var(--color-text-secondary);
      margin: 0 0 0.25rem 0;
    }

    .info-value {
      font-size: 1rem;
      color: var(--color-text-primary);
      margin: 0;
    }

    .info-value a {
      color: inherit;
      text-decoration: none;
    }

    .info-value a:hover {
      color: var(--color-primary);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-size: 0.938rem;
      font-weight: 600;
      color: var(--color-text-primary);
    }

    input,
    textarea {
      padding: 0.875rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-base, 8px);
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    input:focus,
    textarea:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }

    button[type="submit"] {
      padding: 1rem 2rem;
      background: var(--color-primary);
      color: var(--color-surface, white);
      border: none;
      border-radius: var(--radius-base, 8px);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    button[type="submit"]:hover {
      background: var(--color-primary-600, var(--color-primary));
      transform: translateY(-2px);
      box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 30%, transparent);
    }

    button[type="submit"]:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .form-message {
      padding: 1rem;
      border-radius: var(--radius-base, 8px);
      font-size: 0.938rem;
      text-align: center;
    }

    .form-message.success {
      background: #d1fae5;
      color: #065f46;
    }

    .form-message.error {
      background: #fee2e2;
      color: #991b1b;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem;
      }

      :host([layout="split"]) .content {
        grid-template-columns: 1fr;
      }
    }
  `;

  private async handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    this.formStatus = "submitting";

    try {
      if (this.formAction) {
        const response = await fetch(this.formAction, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          this.formStatus = "success";
          form.reset();
        } else {
          this.formStatus = "error";
        }
      } else {
        // Demo mode - simulate success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.formStatus = "success";
        form.reset();
      }
    } catch (error) {
      this.formStatus = "error";
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      this.formStatus = "idle";
    }, 5000);
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          ${this.subheading
            ? html`<p class="subheading">${this.subheading}</p>`
            : ""}
        </div>
        <div class="content">
          ${this.layout !== "form-only" && this.contactInfo
            ? html`
                <div class="contact-info">
                  <h3>Kontaktinformation</h3>
                  ${this.contactInfo.email
                    ? html`
                        <div class="info-item">
                          <span class="info-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </span>
                          <div class="info-content">
                            <p class="info-label">Email</p>
                            <p class="info-value">
                              <a href="mailto:${this.contactInfo.email}">
                                ${this.contactInfo.email}
                              </a>
                            </p>
                          </div>
                        </div>
                      `
                    : ""}
                  ${this.contactInfo.phone
                    ? html`
                        <div class="info-item">
                          <span class="info-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                          </span>
                          <div class="info-content">
                            <p class="info-label">Telefon</p>
                            <p class="info-value">
                              <a href="tel:${this.contactInfo.phone}">
                                ${this.contactInfo.phone}
                              </a>
                            </p>
                          </div>
                        </div>
                      `
                    : ""}
                  ${this.contactInfo.address
                    ? html`
                        <div class="info-item">
                          <span class="info-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                          </span>
                          <div class="info-content">
                            <p class="info-label">Adress</p>
                            <p class="info-value">${this.contactInfo.address}</p>
                          </div>
                        </div>
                      `
                    : ""}
                </div>
              `
            : ""}

          <form class="contact-form" @submit="${this.handleSubmit}">
            <div class="form-group">
              <label for="name">Namn *</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
              <label for="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div class="form-group">
              <label for="message">Meddelande *</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            ${this.formStatus === "success"
              ? html`
                  <div class="form-message success">
                    Tack för ditt meddelande! Vi återkommer så snart som möjligt.
                  </div>
                `
              : this.formStatus === "error"
              ? html`
                  <div class="form-message error">
                    Något gick fel. Försök igen eller kontakta oss direkt via email.
                  </div>
                `
              : ""}

            <button
              type="submit"
              ?disabled="${this.formStatus === "submitting"}"
            >
              ${this.formStatus === "submitting" ? "Skickar..." : "Skicka meddelande"}
            </button>
          </form>
        </div>
      </div>
    `;
  }
}
