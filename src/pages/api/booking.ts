import type { APIRoute } from "astro";
import { Resend } from "resend";

const apiKey = import.meta.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

const INSTRUCTOR_ID_TO_EMAIL: Record<string, string> = {
  "anki-bladh": "bladhanki@hotmail.com",
  "linda-dankert": "hej@yogastudion.com",
  "mathias-bengtsson": "hej@yogastudion.com",
  "malin-wattrring": "hej@yogastudion.com",
  "jill-johansson": "hej@yogastudion.com",
  "eva-lotta-sandberg": "hej@yogastudion.com",
  "samson-telemichael": "samtec22n@gmail.com",
  "lisbet-wikman": "hej@yogastudion.com",
};

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("content-type") !== "application/json") {
    return new Response(
      JSON.stringify({ ok: false, error: "Content-Type must be application/json" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: {
    name?: string;
    email?: string;
    message?: string;
    classId?: string;
    instructorId?: string;
    classTitle?: string;
    day?: string;
    time?: string;
    duration?: number;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid JSON" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { name, email, message, instructorId, classTitle, day, time } = body;

  if (!name?.trim() || !email?.trim()) {
    return new Response(
      JSON.stringify({ ok: false, error: "Namn och e-post krävs" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const instructorEmail =
    instructorId && INSTRUCTOR_ID_TO_EMAIL[instructorId]
      ? INSTRUCTOR_ID_TO_EMAIL[instructorId]
      : import.meta.env.BOOKING_FALLBACK_EMAIL || "hej@yogastudion.com";

  if (!resend) {
    console.log("[Booking mock – koppla Resend senare]", { name, email, message, classTitle, day, time, duration: body.duration, instructorEmail });
    return new Response(
      JSON.stringify({ ok: true, id: "mock" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  const durationMin = typeof body.duration === "number" ? body.duration : 75;
  const dayMap: Record<string, number> = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0 };
  let addToCalUrl = "";
  if (day && time) {
    const d = new Date();
    const targetDay = dayMap[day] ?? 1;
    let diff = targetDay - d.getDay();
    if (diff <= 0) diff += 7;
    d.setDate(d.getDate() + diff);
    const [hh, mm] = String(time).split(":").map(Number);
    d.setHours(hh || 18, mm || 0, 0, 0);
    const end = new Date(d.getTime() + durationMin * 60 * 1000);
    const fmt = (x: Date) => x.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
    addToCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(classTitle || "Yogaklass")}&dates=${fmt(d)}/${fmt(end)}`;
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; line-height: 1.65; color: #1A1A1A; max-width: 520px; margin: 0 auto; padding: 32px; }
    h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; color: #1A1A1A; margin-bottom: 8px; }
    .meta { color: #666; font-size: 0.875rem; margin-bottom: 24px; }
    .block { margin-bottom: 20px; }
    .label { font-weight: 500; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: #888; }
    .value { margin-top: 4px; font-size: 1rem; }
    .message { background: #FAF9F6; border-left: 3px solid #8F9779; padding: 14px 18px; margin-top: 16px; white-space: pre-wrap; font-size: 0.95rem; }
    hr { border: none; border-top: 1px solid #eee; margin: 28px 0; }
    a.cal { display: inline-block; margin-top: 12px; color: #8F9779; font-weight: 600; text-decoration: none; font-size: 0.9rem; }
  </style>
</head>
<body>
  <h1>Ny bokningsförfrågan</h1>
  <p class="meta">Yogastudion · Bokningssidan</p>

  <div class="block">
    <div class="label">Klass</div>
    <div class="value">${escapeHtml(classTitle || "—")} · ${escapeHtml(day || "—")} ${escapeHtml(time || "")}</div>
  </div>

  <div class="block">
    <div class="label">Namn</div>
    <div class="value">${escapeHtml(name)}</div>
  </div>

  <div class="block">
    <div class="label">E-post</div>
    <div class="value">${escapeHtml(email)}</div>
  </div>

  ${message?.trim() ? `
  <div class="block">
    <div class="label">Meddelande</div>
    <div class="message">${escapeHtml(message)}</div>
  </div>
  ` : ""}

  <hr>
  <p style="font-size: 0.85rem; color: #888;">Svara till ${escapeHtml(email)} för att bekräfta.</p>
  ${addToCalUrl ? `<a href="${addToCalUrl.replace(/&/g, "&amp;")}" class="cal">Lägg till i kalender</a>` : ""}
</body>
</html>
`;

  try {
    const { data, error } = await resend.emails.send({
      from: import.meta.env.RESEND_FROM || "Yogastudion <bokning@yogastudion.com>",
      to: [instructorEmail],
      replyTo: email,
      subject: `Bokning: ${classTitle || "Yogaklass"} – ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ ok: false, error: "Kunde inte skicka e-post. Försök igen." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, id: data?.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Booking API error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Ett fel uppstod. Försök igen." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
