import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Ingredient {
  item: string;
  amount: string;
}

interface Instruction {
  step: number;
  text: string;
}

@customElement("recipe-block")
export class RecipeBlock extends LitElement {
  @property({ type: String }) heading = "Nyttigt recept";
  @property({ type: String }) description = "";
  @property({ type: String }) image = "";
  @property({ type: Array }) ingredients: Ingredient[] = [];
  @property({ type: Array }) instructions: Instruction[] = [];
  @property({ type: String }) prepTime = "";
  @property({ type: String }) servings = "";
  @property({ type: String }) difficulty = "Enkel"; // Enkel, Medel, Svår

  static styles = css`
    :host {
      display: block;
      padding: 4rem 2rem;
      background: var(--color-surface, white);
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: var(--color-background-alt, #f9f9f9);
      border-radius: var(--radius-lg, 24px);
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      padding-top: 4rem; 
      padding-bottom: 4rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .recipe-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .recipe-header {
        grid-template-columns: 1fr;
      }
    }

    .image-container {
      width: 100%;
      height: 400px;
      overflow: hidden;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: crop;
    }

    .header-content {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      font-size: 2.5rem;
      margin: 0 0 1rem 0;
      color: var(--color-text-primary);
      font-family: var(--font-heading);
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
      margin-bottom: 2rem;
    }

    .meta-info {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .meta-item {
      display: flex;
      flex-direction: column;
    }

    .meta-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-text-tertiary, #999);
      margin-bottom: 0.25rem;
    }

    .meta-value {
      font-weight: 600;
      color: var(--color-text-primary);
    }

    .recipe-body {
      padding: 2.5rem;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      border-top: 1px solid var(--color-border, #eee);
    }

    @media (max-width: 768px) {
      .recipe-body {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin: 0 0 1.5rem 0;
      color: var(--color-text-primary);
    }

    .ingredients-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .ingredients-list li {
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--color-border, #eee);
      display: flex;
      justify-content: space-between;
    }

    .ingredients-list li:last-child {
      border-bottom: none;
    }

    .amount {
      font-weight: 600;
      color: var(--color-primary);
    }

    .instructions-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .instruction-step {
      display: flex;
      gap: 1.5rem;
    }

    .step-number {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      background: var(--color-primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.9rem;
    }

    .step-text {
      line-height: 1.6;
      color: var(--color-text-secondary);
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="recipe-header">
          <div class="image-container">
            <img src="${this.image}" alt="${this.heading}" />
          </div>
          <div class="header-content">
            <h2>${this.heading}</h2>
            <p class="description">${this.description}</p>
            
            <div class="meta-info">
              ${this.prepTime ? html`
                <div class="meta-item">
                  <span class="meta-label">Tid</span>
                  <span class="meta-value">${this.prepTime}</span>
                </div>
              ` : ""}
              ${this.servings ? html`
                <div class="meta-item">
                  <span class="meta-label">Portioner</span>
                  <span class="meta-value">${this.servings}</span>
                </div>
              ` : ""}
              <div class="meta-item">
                <span class="meta-label">Svårighetsgrad</span>
                <span class="meta-value">${this.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="recipe-body">
          <div class="ingredients">
            <h3>Ingredienser</h3>
            <ul class="ingredients-list">
              ${this.ingredients.map(ing => html`
                <li>
                  <span>${ing.item}</span>
                  <span class="amount">${ing.amount}</span>
                </li>
              `)}
            </ul>
          </div>

          <div class="instructions">
            <h3>Gör så här</h3>
            <div class="instructions-list">
              ${this.instructions.map(inst => html`
                <div class="instruction-step">
                  <div class="step-number">${inst.step}</div>
                  <div class="step-text">${inst.text}</div>
                </div>
              `)}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
