import { f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUVSL_N1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D_QoQTCr.mjs';
import { W as WeeklySchedule } from '../chunks/WeeklySchedule_DaJKhZbN.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const TEACHER_OPTIONS = [
  "Layza",
  "Sylwia",
  "Stina",
  "Olivia",
  "Camilla",
  "Anki Bladh",
  "Linda Dankert",
  "Mathias Bengtsson",
  "Malin Wättring",
  "Jill Johansson",
  "Pernille Björkli",
  "Eva-Lotta Sandberg",
  "Samson Telemichael",
  "Lisbet Wikman"
];
const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};
const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const options = useMemo(() => {
    const trimmed = teacher.trim();
    if (!trimmed) return TEACHER_OPTIONS;
    if (TEACHER_OPTIONS.includes(trimmed)) return TEACHER_OPTIONS;
    return [trimmed, ...TEACHER_OPTIONS];
  }, [teacher]);
  useEffect(() => {
    const handler = (event) => {
      const custom = event;
      const incoming = custom.detail?.teacher;
      if (incoming && typeof incoming === "string") {
        setTeacher(incoming);
        setStatus(null);
      }
    };
    window.addEventListener("booking:select", handler);
    return () => {
      window.removeEventListener("booking:select", handler);
    };
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    if (!teacher) {
      setStatus({ type: "error", text: "Välj klass och lärare." });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          teacher,
          date,
          note
        })
      });
      if (!res.ok) {
        throw new Error("Något gick fel vid bokningen.");
      }
      setStatus({
        type: "success",
        text: "Tack för din bokningsförfrågan! Vi återkommer med bekräftelse."
      });
      setName("");
      setEmail("");
      setTeacher("");
      setDate("");
      setNote("");
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        text: "Vi kunde inte skicka din bokning just nu. Försök igen om en stund."
      });
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.form,
    {
      onSubmit: handleSubmit,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.4 },
      transition: { staggerChildren: 0.06 },
      className: "space-y-4",
      "aria-label": "Bokningsformulär för Yogastudion",
      children: [
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "text-xs font-medium text-[#2D2D2D]/80", children: "Namn" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              name: "name",
              required: true,
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent",
              placeholder: "Ditt namn"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-xs font-medium text-[#2D2D2D]/80", children: "E-post" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent",
              placeholder: "din@mail.se"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "teacher", className: "text-xs font-medium text-[#2D2D2D]/80", children: "Välj klass/lärare" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "teacher",
              name: "teacher",
              required: true,
              value: teacher,
              onChange: (e) => setTeacher(e.target.value),
              className: "w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Välj lärare" }),
                options.map((opt) => /* @__PURE__ */ jsx("option", { value: opt, children: opt }, opt))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "date", className: "text-xs font-medium text-[#2D2D2D]/80", children: "Önskat datum" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "date",
              name: "date",
              type: "date",
              value: date,
              onChange: (e) => setDate(e.target.value),
              className: "w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "note", className: "text-xs font-medium text-[#2D2D2D]/80", children: "Meddelande (valfritt)" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "note",
              name: "note",
              rows: 3,
              value: note,
              onChange: (e) => setNote(e.target.value),
              className: "w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent resize-none",
              placeholder: "Berätta kort om din erfarenhet eller önskemål."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeInUp, className: "pt-1 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: submitting,
              className: "inline-flex justify-center items-center rounded-full bg-[#F5F2ED] px-4 py-2.5 text-sm font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 hover:bg-[#E8E0D4] disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
              children: submitting ? "Skickar..." : "Skicka bokningsförfrågan"
            }
          ),
          status && /* @__PURE__ */ jsx(
            "p",
            {
              className: `text-xs ${status.type === "success" ? "text-emerald-700" : "text-red-700"}`,
              children: status.text
            }
          )
        ] })
      ]
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Schema = createComponent(($$result, $$props, $$slots) => {
  const title = "Schema & bokning \u2013 Yogastudion G\xF6teborg";
  const description = "Se veckans schema och boka yoga p\xE5 Yogastudion i G\xF6teborg. V\xE4lj klass, l\xE4rare och skicka en bokningsf\xF6rfr\xE5gan.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14 space-y-10"> <section class="space-y-3 max-w-3xl"> <p class="text-[0.7rem] tracking-[0.32em] uppercase text-[#2D2D2D]/60">\nSchema \xB7 Boka yoga\n</p> <h1 class="font-serif text-3xl sm:text-4xl text-[#2D2D2D]">\nSchema & bokning\n</h1> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">\nV\xE4lj en klass i schemat eller kom hit via en l\xE4rare \u2013 d\xE5 f\xF6rifyller vi bokningen s\xE5\n        du kan skicka en lugn f\xF6rfr\xE5gan.\n</p> </section> <section id="boka" class="space-y-6"> ', ' <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-start"> <div class="rounded-3xl border border-[#4A5D4E]/12 bg-white/70 backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.10)] p-6 sm:p-7"> <h2 class="font-serif text-xl sm:text-2xl text-[#2D2D2D]">\nSkicka bokningsf\xF6rfr\xE5gan\n</h2> <p class="mt-2 text-sm text-[#2D2D2D]/75 leading-relaxed">\nV\xE4lj l\xE4rare och \xF6nskat datum. Vi \xE5terkommer med bekr\xE4ftelse och detaljer.\n</p> <div class="mt-5"> ', ' </div> </div> <aside class="rounded-3xl border border-[#4A5D4E]/12 bg-[#F5F2ED] p-6 sm:p-7"> <p class="text-[0.7rem] tracking-[0.32em] uppercase text-[#2D2D2D]/60">\nTips\n</p> <p class="mt-3 text-sm text-[#2D2D2D]/80 leading-relaxed">\nOm du kommer fr\xE5n en l\xE4rarprofil f\xF6rs\xF6ker vi f\xF6rifylla l\xE4raren automatiskt.\n            Du kan alltid \xE4ndra i listan.\n</p> </aside> </div> </section> </main> <script>\n    (() => {\n      const params = new URLSearchParams(window.location.search);\n      const teacher = params.get("teacher");\n      if (!teacher) return;\n\n      const run = () => {\n        window.dispatchEvent(\n          new CustomEvent("booking:select", {\n            detail: { teacher },\n          })\n        );\n        const bookingEl = document.getElementById("boka");\n        bookingEl?.scrollIntoView({ behavior: "smooth", block: "start" });\n      };\n\n      // Give React islands a moment to hydrate\n      window.setTimeout(run, 450);\n    })();\n  <\/script> '])), maybeRenderHead(), renderComponent($$result2, "WeeklySchedule", WeeklySchedule, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/WeeklySchedule", "client:component-export": "default" }), renderComponent($$result2, "BookingForm", BookingForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/BookingForm", "client:component-export": "default" })) })}`;
}, "/Users/ocmac/Yogastudion/src/pages/schema.astro", void 0);

const $$file = "/Users/ocmac/Yogastudion/src/pages/schema.astro";
const $$url = "/schema";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Schema,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
