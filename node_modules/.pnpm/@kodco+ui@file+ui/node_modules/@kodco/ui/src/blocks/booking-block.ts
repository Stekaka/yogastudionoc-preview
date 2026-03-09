import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: string;
  description?: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

@customElement("booking-block")
export class BookingBlock extends LitElement {
  @property({ type: String }) heading = "Boka din tid";
  @property({ type: String }) subheading = "Välj en tjänst och hitta en tid som passar dig";
  @property({ type: String }) location = "Din plats här";
  @property({ type: Array }) services: Service[] = [
    { id: "1", name: "Lorem Ipsum Service", duration: 60, price: "500 kr", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: "2", name: "Dolor Sit Amet", duration: 90, price: "750 kr", description: "Sed do eiusmod tempor incididunt ut labore et dolore." },
    { id: "3", name: "Consectetur Elit", duration: 120, price: "900 kr", description: "Ut enim ad minim veniam, quis nostrud exercitation." }
  ];

  @state() private selectedService: Service | null = null;
  @state() private selectedDate: string = new Date().toISOString().split('T')[0];
  @state() private selectedTime: string | null = null;
  @state() private step: number = 1; // 1: Service, 2: Time, 3: Form, 4: Success
  @state() private bookingStatus: "idle" | "submitting" | "success" = "idle";
  @state() private bookedSlots: Set<string> = new Set(); // Store confirmed bookings as "date-time" strings

  static styles = css`
    :host {
      display: block;
      padding: 4rem 2rem;
      background: transparent;
      font-family: var(--font-family-base, system-ui, sans-serif);
      color: var(--color-text-primary, #1a1a1a);
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding-bottom: 2rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
      
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      padding-top: ;
    }

    .subheading {
      color: var(--color-text-secondary, #666);
      font-size: 1.1rem;
    }

    /* Steps navigation */
    .steps {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
      gap: 2rem;
    }

    .step-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-text-secondary, #999);
      font-weight: 500;
    }

    .step-item.active {
      color: var(--color-primary, #007bff);
    }

    .step-number {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
    }

    .active .step-number {
      background: var(--color-primary, #007bff);
      color: white;
    }

    /* Service Selection */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .service-card {
      padding: 1.5rem;
      border: 2px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .service-card:hover {
      border-color: var(--color-primary, #007bff);
      transform: translateY(-2px);
    }

    .service-card.selected {
      border-color: var(--color-primary, #007bff);
      background: var(--color-primary-50, #f0f7ff);
    }

    .service-name {
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .service-meta {
      display: flex;
      justify-content: space-between;
      color: var(--color-text-secondary, #666);
      font-size: 0.9rem;
      margin-top: auto;
      padding-top: 1rem;
    }

    /* Date & Time Selection */
    .booking-flex {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .datepicker-container input {
      width: 100%;
      padding: 1rem;
      border: 2px solid #eee;
      border-radius: 8px;
      font-size: 1rem;
    }

    .time-slots {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 0.75rem;
    }

    .time-slot {
      padding: 0.75rem;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .time-slot:hover:not(.unavailable) {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    .time-slot.selected {
      background: var(--color-primary, #007bff);
      color: white;
      border-color: var(--color-primary);
    }

    .time-slot.unavailable {
      background: #f5f5f5;
      color: #ccc;
      cursor: not-allowed;
      border-color: #eee;
    }

    /* Form */
    .booking-form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .form-group label {
      font-weight: 600;
      font-size: 0.9rem;
    }

    .form-group input {
      padding: 0.8rem;
      border: 2px solid #eee;
      border-radius: 8px;
    }

    /* Summary & Buttons */
    .summary-bar {
      margin-top: 3rem;
      padding: 1.5rem;
      background: #f9f9f9;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .btn {
      padding: 0.8rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }

    .btn-primary {
      background: var(--color-primary, #007bff);
      color: white;
    }

    .btn-primary:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid #eee;
    }

    /* Success State */
    .success-card {
      text-align: center;
      padding: 3rem;
    }

    .success-icon {
      font-size: 4rem;
      color: #28a745;
      margin-bottom: 1rem;
    }

    .calendar-links {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .calendar-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.2rem;
      background: #eee;
      border-radius: 20px;
      text-decoration: none;
      color: #333;
      font-size: 0.9rem;
      transition: background 0.2s;
    }

    .calendar-link:hover {
      background: #e0e0e0;
    }

    @media (max-width: 768px) {
      .booking-flex {
        grid-template-columns: 1fr;
      }
      .summary-bar {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `;

  private getTimeSlots(): TimeSlot[] {
    // Demo data for time slots
    const slots = [
      "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
    ];

    // Get current time
    const now = new Date();
    const selectedDateObj = new Date(this.selectedDate);
    const isToday = selectedDateObj.toDateString() === now.toDateString();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    return slots.map(time => {
      const [hour, minute] = time.split(':').map(Number);
      const isPast = isToday && (hour < currentHour || (hour === currentHour && minute <= currentMinute));
      const slotKey = `${this.selectedDate}-${time}`;
      const isBooked = this.bookedSlots.has(slotKey);

      return {
        time,
        available: !isPast && !isBooked // Only past times and confirmed bookings are unavailable
      };
    });
  }

  private handleServiceSelect(service: Service) {
    this.selectedService = service;
    this.step = 2;
  }

  private handleDateChange(e: Event) {
    this.selectedDate = (e.target as HTMLInputElement).value;
    this.selectedTime = null;
  }

  private handleTimeSelect(time: string, available: boolean) {
    if (!available) return;
    this.selectedTime = time;
  }

  private handleNext() {
    if (this.step < 3) this.step++;
  }

  private handleBack() {
    if (this.step > 1) this.step--;
  }

  private async handleBooking(e: Event) {
    e.preventDefault();
    this.bookingStatus = "submitting";
    
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    
    // Add confirmed booking to bookedSlots
    if (this.selectedDate && this.selectedTime) {
      const slotKey = `${this.selectedDate}-${this.selectedTime}`;
      this.bookedSlots.add(slotKey);
      this.requestUpdate(); // Force re-render to update time slots
    }
    
    this.bookingStatus = "success";
    this.step = 4;
  }

  private getGoogleCalendarUrl() {
    if (!this.selectedService || !this.selectedDate || !this.selectedTime) return "#";
    const startDateTime = `${this.selectedDate.replace(/-/g, '')}T${this.selectedTime.replace(':', '')}00Z`;
    const endDateTime = `${this.selectedDate.replace(/-/g, '')}T${(parseInt(this.selectedTime.split(':')[0]) + 1).toString().padStart(2, '0')}${this.selectedTime.split(':')[1]}00Z`;
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Bokning: ${this.selectedService.name}`,
      dates: `${startDateTime}/${endDateTime}`,
      details: `Din bokning för ${this.selectedService.name}.`,
      location: this.location
    });
    return `https://www.google.com/calendar/render?${params.toString()}`;
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <h2>${this.heading}</h2>
          <p class="subheading">${this.subheading}</p>
        </div>

        ${this.step < 4 ? html`
          <div class="steps">
            <div class="step-item ${this.step === 1 ? 'active' : ''}">
              <span class="step-number">1</span> Tjänst
            </div>
            <div class="step-item ${this.step === 2 ? 'active' : ''}">
              <span class="step-number">2</span> Tid
            </div>
            <div class="step-item ${this.step === 3 ? 'active' : ''}">
              <span class="step-number">3</span> Detaljer
            </div>
          </div>
        ` : ""}

        ${this.renderStep()}

        ${this.step < 4 ? html`
          <div class="summary-bar">
            <div>
              ${this.selectedService ? html`<strong>${this.selectedService.name}</strong>` : "Välj en tjänst"}
              ${this.selectedTime ? html` • ${this.selectedDate} kl ${this.selectedTime}` : ""}
            </div>
            <div style="display: flex; gap: 1rem;">
              ${this.step > 1 ? html`
                <button class="btn btn-secondary" @click="${this.handleBack}">Tillbaka</button>
              ` : ""}
              ${this.step === 2 ? html`
                <button class="btn btn-primary" ?disabled="${!this.selectedTime}" @click="${this.handleNext}">Fortsätt</button>
              ` : ""}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  private renderStep() {
    switch (this.step) {
      case 1:
        return html`
          <div class="services-grid">
            ${this.services.map(s => html`
              <div class="service-card ${this.selectedService?.id === s.id ? 'selected' : ''}" 
                   @click="${() => this.handleServiceSelect(s)}">
                <div class="service-name">${s.name}</div>
                <p style="font-size: 0.9rem; color: #555;">${s.description}</p>
                <div class="service-meta">
                  <span>${s.duration} min</span>
                  <strong>${s.price}</strong>
                </div>
              </div>
            `)}
          </div>
        `;
      case 2:
        return html`
          <div class="booking-flex">
            <div class="datepicker-container">
              <h3>Välj Datum</h3>
              <input type="date" .value="${this.selectedDate}" @change="${this.handleDateChange}" min="${new Date().toISOString().split('T')[0]}">
            </div>
            <div>
              <h3>Lediga Tider</h3>
              <div class="time-slots">
                ${this.getTimeSlots().map(slot => html`
                  <div class="time-slot ${!slot.available ? 'unavailable' : ''} ${this.selectedTime === slot.time ? 'selected' : ''}"
                       @click="${() => this.handleTimeSelect(slot.time, slot.available)}">
                    ${slot.time}
                  </div>
                `)}
              </div>
            </div>
          </div>
        `;
      case 3:
        return html`
          <form class="booking-form" @submit="${this.handleBooking}">
            <h3>Dina Uppgifter</h3>
            <div class="form-group">
              <label>Fullständigt Namn</label>
              <input type="text" required placeholder="Förnamn Efternamn">
            </div>
            <div class="form-group">
              <label>E-postadress</label>
              <input type="email" required placeholder="namn@exempel.se">
            </div>
            <div class="form-group">
              <label>Telefonnummer</label>
              <input type="tel" placeholder="070-123 45 67">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 1rem;" ?disabled="${this.bookingStatus === 'submitting'}">
              ${this.bookingStatus === 'submitting' ? 'Bokar...' : 'Bekräfta Bokning'}
            </button>
          </form>
        `;
      case 4:
        return html`
          <div class="success-card">
            <div class="success-icon">✓</div>
            <h2>Bokningen Bekräftad!</h2>
            <p>Tack för din bokning av <strong>${this.selectedService?.name}</strong>.</p>
            <p>Vi har skickat en bekräftelse till din e-postadress.</p>
            <div class="calendar-links">
              <a href="${this.getGoogleCalendarUrl()}" target="_blank" class="calendar-link">
                <span>📅</span> Lägg till i Google Kalender
              </a>
              <a href="#" class="calendar-link" @click="${(e: Event) => {e.preventDefault(); alert('ICS fil genereras...');}}">
                <span>📅</span> Ladda ner .ics
              </a>
            </div>
            <button class="btn btn-secondary" style="margin-top: 2rem;" @click="${() => {this.step = 1; this.selectedService = null; this.selectedTime = null;}}">Boka en till tid</button>
          </div>
        `;
      default:
        return html``;
    }
  }
}
