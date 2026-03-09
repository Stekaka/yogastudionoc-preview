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
  const { name, email, message, instructorId, classTitle, day, time } = body;
  if (!name?.trim() || !email?.trim()) {
    return new Response(
      JSON.stringify({ ok: false, error: "Namn och e-post krävs" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  {
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
