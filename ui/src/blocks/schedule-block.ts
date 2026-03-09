import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

export interface ScheduleClassItem {
  id: string;
  title: string;
  day: string;
  time: string;
  duration: number;
  instructor: string;
  instructorId?: string;
  level?: string;
}

const DAY_ORDER = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const DEFAULT_DAY_LABELS: Record<string, string> = {
  mon: "Måndag",
  tue: "Tisdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lördag",
  sun: "Söndag",
};

@customElement("schedule-block")
export class ScheduleBlock extends LitElement {
  @property({ type: String }) heading = "";
  @property({ type: String }) emptyMessage = "Inga klasser denna dag.";
  @property({ type: Array }) classes: ScheduleClassItem[] = [];
  @property({ type: Object }) dayLabels: Record<string, string> = DEFAULT_DAY_LABELS;

  @state() private selectedDay = "mon";

  static styles = css`
    :host {
      display: block;
      padding: 0 1rem 3rem;
      background: var(--color-background, #fafaf9);
    }

    .container {
      max-width: 72rem;
      margin: 0 auto;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-text-primary, #1a1a1a);
      margin: 0 0 1rem 0;
    }

    @media (min-width: 640px) {
      h2 {
        font-size: 1.875rem;
      }
    }

    /* Day pills */
    .pills-wrap {
      position: sticky;
      top: 0;
      z-index: 20;
      margin: 0 -1rem;
      border-bottom: 1px solid color-mix(in srgb, var(--color-primary, #8f9779) 15%, transparent);
      background: color-mix(in srgb, var(--color-surface, #faf9f6) 90%, transparent);
      backdrop-filter: blur(12px);
    }

    .pills {
      display: flex;
      gap: 0.25rem;
      overflow-x: auto;
      padding: 1rem;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }

    .pills::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 768px) {
      .pills {
        flex-wrap: wrap;
        padding-bottom: 1.25rem;
      }
    }

    .pill {
      flex-shrink: 0;
      scroll-snap-align: start;
      padding: 0.5rem 1.25rem;
      border: none;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;
      background: transparent;
      color: var(--color-text-secondary, rgba(26, 26, 26, 0.8));
    }

    .pill:hover {
      color: var(--color-text-primary, #1a1a1a);
    }

    .pill.active {
      background: var(--color-primary, #8f9779);
      color: var(--color-primary-contrast, #fff);
    }

    /* Class grid */
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      padding-top: 2.5rem;
    }

    @media (min-width: 640px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .card {
      position: relative;
      min-height: 200px;
      padding: 1.5rem;
      border: none;
      border-radius: 1rem;
      text-align: left;
      cursor: pointer;
      background: color-mix(in srgb, var(--color-surface, #fff) 60%, transparent);
      box-shadow: 0 2px 20px color-mix(in srgb, var(--color-primary, #8f9779) 6%, transparent);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px color-mix(in srgb, var(--color-primary, #8f9779) 12%, transparent);
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(
        160deg,
        color-mix(in srgb, var(--color-primary, #8f9779) 6%, transparent) 0%,
        color-mix(in srgb, var(--color-surface, #faf9f6) 40%, transparent) 100%
      );
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
    }

    .card:hover::before {
      opacity: 1;
    }

    .time-bg {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      font-size: clamp(3rem, 10vw, 5.5rem);
      font-weight: 300;
      line-height: 1;
      color: color-mix(in srgb, var(--color-primary, #8f9779) 18%, transparent);
      pointer-events: none;
    }

    .card-content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 100%;
    }

    .card-title {
      font-size: clamp(1.15rem, 2vw, 1.5rem);
      font-weight: 600;
      color: var(--color-text-primary, #1a1a1a);
      margin: 0 0 0.5rem 0;
      line-height: 1.25;
    }

    .card-meta {
      font-size: 0.75rem;
      color: var(--color-text-secondary, rgba(26, 26, 26, 0.6));
      margin: 0 0 0.75rem 0;
    }

    .card-cta {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-primary, #8f9779);
      opacity: 0;
      transition: opacity 0.25s;
    }

    .card:hover .card-cta {
      opacity: 1;
    }

    .empty {
      padding: 4rem 1rem;
      text-align: center;
      font-size: 1.125rem;
      color: var(--color-text-secondary, rgba(26, 26, 26, 0.5));
    }
  `;

  private get classesByDay(): Record<string, ScheduleClassItem[]> {
    const map: Record<string, ScheduleClassItem[]> = {};
    DAY_ORDER.forEach((d) => (map[d] = []));
    this.classes.forEach((c) => {
      if (map[c.day]) map[c.day].push(c);
    });
    return map;
  }

  private get visibleDays(): string[] {
    return DAY_ORDER.filter((d) => (this.classesByDay[d]?.length ?? 0) > 0);
  }

  private get currentClasses(): ScheduleClassItem[] {
    return this.classesByDay[this.selectedDay] ?? [];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has("classes")) {
      const firstVisible = this.visibleDays[0];
      if (firstVisible && !this.visibleDays.includes(this.selectedDay)) {
        this.selectedDay = firstVisible;
      }
    }
  }

  private selectDay(day: string) {
    this.selectedDay = day;
  }

  private onClassClick(item: ScheduleClassItem) {
    this.dispatchEvent(
      new CustomEvent("schedule:class-select", {
        detail: { class: item },
        bubbles: true,
        composed: true,
      })
    );
  }

  private dayLabel(dayId: string): string {
    return this.dayLabels[dayId] ?? dayId;
  }

  render() {
    const visibleDays = this.visibleDays;
    const currentClasses = this.currentClasses;

    return html`
      <div class="container">
        ${this.heading ? html`<h2>${this.heading}</h2>` : ""}

        ${visibleDays.length > 0
          ? html`
              <div class="pills-wrap">
                <div class="pills">
                  ${visibleDays.map(
                    (day) => html`
                      <button
                        type="button"
                        class="pill ${this.selectedDay === day ? "active" : ""}"
                        @click=${() => this.selectDay(day)}
                      >
                        ${this.dayLabel(day)}
                      </button>
                    `
                  )}
                </div>
              </div>

              ${currentClasses.length > 0
                ? html`
                    <div class="grid">
                      ${currentClasses.map(
                        (cls) => html`
                          <button
                            type="button"
                            class="card"
                            @click=${() => this.onClassClick(cls)}
                          >
                            <span class="time-bg" aria-hidden="true">${cls.time}</span>
                            <div class="card-content">
                              <h3 class="card-title">${cls.title}</h3>
                              <p class="card-meta">
                                ${cls.time} · ${cls.duration} min · ${cls.instructor}
                              </p>
                              <span class="card-cta">Boka min plats →</span>
                            </div>
                          </button>
                        `
                      )}
                    </div>
                  `
                : html`<p class="empty">${this.emptyMessage}</p>`}
            `
          : html`<p class="empty">${this.emptyMessage}</p>`}
      </div>
    `;
  }
}
