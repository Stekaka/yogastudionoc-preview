import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("newsletter-signup")
export class NewsletterSignup extends LitElement {
  @property({ type: String }) heading = "Få vårt nyhetsbrev";
  @property({ type: String }) text = "Få de senaste nyheterna och uppdateringarna direkt i din inkorg.";
  @property({ type: String }) placeholder = "Din e-postadress";
  @property({ type: String }) buttonText = "Prenumerera";
  @property({ type: String }) formAction = "";
  @property({ type: String }) variant = "horizontal"; // 'horizontal' eller 'vertical'
  @property({ type: String }) background = "light"; // 'light' eller 'dark'
  @state() private formStatus: "idle" | "submitting" | "success" | "error" = "idle";

  static styles = css`
    :host {
      display: block;
      padding: 8rem 2rem;
    }

    :host([background="light"]) {
      background: var(--color-background-alt);
    }

    :host([background="dark"]) {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: white;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
    }

    :host([background="light"]) h2 {
      color: var(--color-text-primary);
    }

    :host([background="dark"]) h2 {
      color: white;
    }

    .text {
      font-size: 1.125rem;
      margin: 0 0 2rem 0;
    }

    :host([background="light"]) .text {
      color: var(--color-text-secondary);
    }

    :host([background="dark"]) .text {
      color: var(--color-text-secondary);
    }

    .form {
      display: flex;
      gap: 1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    :host([variant="vertical"]) .form {
      flex-direction: column;
      align-items: stretch;
    }

    input {
      flex: 1;
      padding: 1rem 1.5rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-base, 8px);
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    :host([background="dark"]) input {
      background: color-mix(in srgb, white 10%, transparent);
      border-color: color-mix(in srgb, white 20%, transparent);
      color: var(--color-surface, white);
    }

    :host([background="dark"]) input::placeholder {
      color: color-mix(in srgb, white 60%, transparent);
    }

    input:focus {
      outline: none;
      border-color: var(--color-primary);
    }

    button {
      padding: 1rem 2rem;
      background: var(--color-primary);
      color: var(--color-surface, white);
      border: none;
      border-radius: var(--radius-base, 8px);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    button:hover:not(:disabled) {
      background: var(--color-primary-600, var(--color-primary));
      transform: translateY(-2px);
      box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 30%, transparent);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .message {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: var(--radius-base, 8px);
      font-size: 0.938rem;
    }

    .message.success {
      background: #d1fae5;
      color: #065f46;
    }

    .message.error {
      background: #fee2e2;
      color: #991b1b;
    }

    @media (max-width: 640px) {
      h2 {
        font-size: 2rem;
      }

      .form {
        flex-direction: column;
      }
    }
  `;

  private async handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (!email || !email.includes("@")) {
      this.formStatus = "error";
      return;
    }

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
        // Demo mode
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
        <h2>${this.heading}</h2>
        <p class="text">${this.text}</p>

        <form class="form" @submit="${this.handleSubmit}">
          <input
            type="email"
            name="email"
            placeholder="${this.placeholder}"
            required
            ?disabled="${this.formStatus === "submitting"}"
          />
          <button type="submit" ?disabled="${this.formStatus === "submitting"}">
            ${this.formStatus === "submitting" ? "Skickar..." : this.buttonText}
          </button>
        </form>

        ${this.formStatus === "success"
          ? html`
              <div class="message success">
                Tack för din prenumeration! Bekräfta din e-post för att slutföra.
              </div>
            `
          : this.formStatus === "error"
          ? html`
              <div class="message error">
                Något gick fel. Kontrollera din e-post och försök igen.
              </div>
            `
          : ""}
      </div>
    `;
  }
}
