import 'resend';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  if (request.headers.get("content-type") !== "application/json") {
    return new Response(
      JSON.stringify({ ok: false, error: "Content-Type must be application/json" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid JSON" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const { name, email, message, instructorEmail, classTitle, day, time } = body;
  if (!name?.trim() || !email?.trim()) {
    return new Response(
      JSON.stringify({ ok: false, error: "Namn och e-post krävs" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  instructorEmail?.trim() || undefined                                       || "hej@yogastudion.com";
  const dayMap = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0 };
  const durationMin = typeof body.duration === "number" ? body.duration : 75;
  if (day && time) {
    const d = /* @__PURE__ */ new Date();
    const targetDay = dayMap[day] ?? 1;
    let diff = targetDay - d.getDay();
    if (diff <= 0) diff += 7;
    d.setDate(d.getDate() + diff);
    const [hh, mm] = String(time).split(":").map(Number);
    d.setHours(hh || 18, mm || 0, 0, 0);
    const end = new Date(d.getTime() + durationMin * 60 * 1e3);
    const fmt = (x) => x.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(classTitle || "Yogaklass")}&dates=${fmt(d)}/${fmt(end)}`;
  }
  {
    console.error("RESEND_API_KEY is not set");
    return new Response(
      JSON.stringify({ ok: false, error: "E-posttjänsten är inte konfigurerad." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
