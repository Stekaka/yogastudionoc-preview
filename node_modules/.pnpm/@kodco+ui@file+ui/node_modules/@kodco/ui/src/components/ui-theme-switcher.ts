import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import {
  applyTheme,
  saveTheme,
  getCurrentTheme,
  THEME_PRESETS,
  type ThemeConfig,
  type ThemePreset,
} from "../themes/theme.js";

@customElement("ui-theme-switcher")
export class UIThemeSwitcher extends LitElement {
  @state() private currentTheme: ThemeConfig = getCurrentTheme();
  @state() private isOpen = false;

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .theme-button {
      background: var(--color-surface, white);
      border: 2px solid var(--color-border, #e2e8f0);
      border-radius: var(--radius-base, 8px);
      padding: 0.75rem 1rem;
      font-family: var(--font-sans, sans-serif);
      font-size: var(--font-size-sm, 0.875rem);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all var(--transition-base, 200ms ease);
    }

    .theme-button:hover {
      border-color: var(--color-primary, #3b82f6);
      background: var(--color-background-alt, #f8fafc);
    }

    .color-indicator {
      width: 20px;
      height: 20px;
      border-radius: var(--radius-sm, 4px);
      border: 2px solid var(--color-border, #e2e8f0);
    }

    .dropdown {
      position: fixed;
      top: auto;
      bottom: auto;
      right: 1rem;
      background: var(--color-surface, white);
      border: 2px solid var(--color-border, #e2e8f0);
      border-radius: var(--radius-base, 8px);
      padding: 0.5rem;
      min-width: 250px;
      max-width: min(90vw, 320px);
      max-height: min(80vh, 500px);
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow: var(--shadow-lg);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all var(--transition-base, 200ms ease);
      z-index: var(--z-dropdown, 1000);
    }

    .dropdown.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-section {
      margin-bottom: 1rem;
    }

    .dropdown-section:last-child {
      margin-bottom: 0;
    }

    .dropdown-label {
      font-size: var(--font-size-xs, 0.75rem);
      font-weight: var(--font-weight-semibold, 600);
      color: var(--color-text-secondary, #475569);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
      display: block;
    }

    .theme-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }

    .theme-option {
      background: transparent;
      border: 2px solid var(--color-border, #e2e8f0);
      border-radius: var(--radius-sm, 4px);
      padding: 0.5rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      transition: all var(--transition-fast, 150ms ease);
    }

    .theme-option:hover {
      border-color: var(--color-primary, #3b82f6);
      background: var(--color-background-alt, #f8fafc);
    }

    .theme-option.active {
      border-color: var(--color-primary, #3b82f6);
      background: var(--color-primary-light, #dbeafe);
    }

    .theme-color {
      width: 32px;
      height: 32px;
      border-radius: var(--radius-sm, 4px);
      border: 2px solid rgba(0, 0, 0, 0.1);
    }

    .theme-name {
      font-size: var(--font-size-xs, 0.75rem);
      color: var(--color-text-primary, #0f172a);
    }

    .mode-toggle {
      display: flex;
      gap: 0.25rem;
      background: var(--color-background-alt, #f1f5f9);
      padding: 0.25rem;
      border-radius: var(--radius-sm, 4px);
    }

    .mode-button {
      flex: 1;
      background: transparent;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm, 4px);
      font-size: var(--font-size-sm, 0.875rem);
      font-family: var(--font-sans, sans-serif);
      cursor: pointer;
      transition: all var(--transition-fast, 150ms ease);
      color: var(--color-text-secondary, #64748b);
    }

    .mode-button:hover {
      background: var(--color-surface, white);
    }

    .mode-button.active {
      background: var(--color-surface, white);
      color: var(--color-primary, #3b82f6);
      font-weight: var(--font-weight-semibold, 600);
    }
  `;

  private toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  private closeDropdown() {
    this.isOpen = false;
  }

  private handleThemeChange(preset: ThemePreset) {
    const newTheme: ThemeConfig = {
      preset,
      mode: this.currentTheme.mode,
    };
    this.currentTheme = newTheme;
    applyTheme(newTheme);
    saveTheme(newTheme);

    this.dispatchEvent(
      new CustomEvent("theme-change", {
        detail: newTheme,
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleModeChange(mode: "light" | "dark") {
    const newTheme: ThemeConfig = {
      preset: this.currentTheme.preset,
      mode,
    };
    this.currentTheme = newTheme;
    applyTheme(newTheme);
    saveTheme(newTheme);

    this.dispatchEvent(
      new CustomEvent("theme-change", {
        detail: newTheme,
        bubbles: true,
        composed: true,
      })
    );
  }

  private getCurrentPresetLabel(): string {
    const preset = THEME_PRESETS.find((p) => p.value === this.currentTheme.preset);
    return preset ? preset.label : "Blue";
  }

  private getCurrentPresetColor(): string {
    const preset = THEME_PRESETS.find((p) => p.value === this.currentTheme.preset);
    return preset ? preset.color : "#3b82f6";
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleOutsideClick);
  }

  private handleOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) {
      this.closeDropdown();
    }
  };

  render() {
    return html`
      <div>
        <button class="theme-button" @click="${this.toggleDropdown}">
          <div class="color-indicator" style="background: ${this.getCurrentPresetColor()}"></div>
          <span>${this.getCurrentPresetLabel()} Theme</span>
        </button>

        <div class="dropdown ${this.isOpen ? "open" : ""}">
          <div class="dropdown-section">
            <span class="dropdown-label">Mode</span>
            <div class="mode-toggle">
              <button
                class="mode-button ${this.currentTheme.mode === "light" ? "active" : ""}"
                @click="${() => this.handleModeChange("light")}"
              >
                ☀️ Light
              </button>
              <button
                class="mode-button ${this.currentTheme.mode === "dark" ? "active" : ""}"
                @click="${() => this.handleModeChange("dark")}"
              >
                🌙 Dark
              </button>
            </div>
          </div>

          <div class="dropdown-section">
            <span class="dropdown-label">Color Theme</span>
            <div class="theme-grid">
              ${THEME_PRESETS.map(
                (preset) => html`
                  <button
                    class="theme-option ${this.currentTheme.preset === preset.value
                      ? "active"
                      : ""}"
                    @click="${() => this.handleThemeChange(preset.value)}"
                  >
                    <div class="theme-color" style="background: ${preset.color}"></div>
                    <span class="theme-name">${preset.label}</span>
                  </button>
                `
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
