import { f as createComponent, h as addAttribute, j as renderComponent, k as renderHead, l as renderSlot, r as renderTemplate, i as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CUVSL_N1.mjs';
import 'kleur/colors';
import { $ as $$SEO } from '../chunks/SEO_DKnWSAnY.mjs';
/* empty css                                */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useState, useMemo } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BokaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BokaLayout;
  const {
    title = "Boka | Yogastudion",
    description = "Boka ditt yogapass p\xE5 Yogastudion i G\xF6teborg."
  } = Astro2.props;
  return renderTemplate`<html lang="sv" class="scroll-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="sv_SE">${renderComponent($$result, "SEO", $$SEO, { "businessName": "Yogastudion", "city": "G\xF6teborg", "streetAddress": "Nordostpassagen 19, G\xF6teborg", "postalCode": "413 09", "telephone": "0734444244", "url": "https://yogastudion.com" })}${renderHead()}</head> <body class="bg-[#FAF9F6] text-[#1A1A1A] antialiased min-h-screen" style="font-family: 'Inter', sans-serif;"> <div class="min-h-screen flex flex-col"> <header class="w-full sticky top-0 z-40 border-b border-[#8F9779]/20 bg-[#FAF9F6]/90 backdrop-blur-lg"> <div class="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between"> <a href="/" class="flex items-center gap-2 group" aria-label="Till startsidan"> <div class="h-11 w-11 rounded-full overflow-hidden bg-transparent flex items-center justify-center"> <img src="/videos/YogastudionLogo1.png" alt="Yogastudion" class="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105" loading="lazy"> </div> <span class="text-lg tracking-wide text-[#1A1A1A] group-hover:text-[#8F9779] transition-colors" style="font-family: 'Cormorant Garamond', serif;">
Yogastudion
</span> </a> <nav class="hidden md:flex items-center gap-8 text-sm text-[#1A1A1A]/80"> <a href="/#klasser" class="hover:text-[#8F9779] transition-colors">Klasser</a> <a href="/kurser" class="hover:text-[#8F9779] transition-colors">Kurser</a> <a href="/#studio" class="hover:text-[#8F9779] transition-colors">Studion</a> <a href="/boka" class="text-[#8F9779] font-medium">Boka</a> </nav> </div> </header> <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-[#8F9779]/15 bg-[#FAF9F6]"> <div class="mx-auto max-w-6xl px-4 py-8 text-sm text-[#1A1A1A]/70 flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <p class="text-[#1A1A1A]" style="font-family: 'Cormorant Garamond', serif;">Yogastudion</p> <p>Nordostpassagen 19, Linné · Göteborg</p> </div> <p>Boka yoga i Göteborg</p> </div> </footer> </div> </body></html>`;
}, "/Users/ocmac/Yogastudion/src/layouts/BokaLayout.astro", void 0);

const selectedClass$ = atom(null);
const drawerOpen$ = atom(false);
const bookingStep$ = atom("name");
const bookingName$ = atom("");
const bookingEmail$ = atom("");
const bookingMessage$ = atom("");
const bookingStatus$ = atom("idle");
function openDrawer(cls) {
  selectedClass$.set(cls);
  drawerOpen$.set(true);
  bookingStep$.set("name");
  bookingName$.set("");
  bookingEmail$.set("");
  bookingMessage$.set("");
  bookingStatus$.set("idle");
}
function closeDrawer() {
  drawerOpen$.set(false);
  selectedClass$.set(null);
  bookingStep$.set("name");
}

const DAY_LABELS = {
  mon: "Måndag",
  tue: "Tisdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lördag",
  sun: "Söndag"
};
const CLASSES = [
  {
    id: "kundalini-mon",
    title: "Kundalini Free Flow",
    instructor: "Layza",
    instructorId: "layza",
    instructorEmail: "layza@yogastudion.com",
    day: "mon",
    time: "18:00",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12
  },
  {
    id: "yin-tue",
    title: "Yinyoga Flow med Gong",
    instructor: "Layza",
    instructorId: "layza",
    instructorEmail: "layza@yogastudion.com",
    day: "tue",
    time: "17:30",
    duration: 75,
    level: "Alla nivåer",
    capacity: 10
  },
  {
    id: "gong-tue",
    title: "Gongavslappning",
    instructor: "Sylwia",
    instructorId: "sylwia",
    instructorEmail: "sylwia@yogastudion.com",
    day: "tue",
    time: "19:15",
    duration: 60,
    level: "Alla nivåer",
    capacity: 14
  },
  {
    id: "kundalini-wed",
    title: "Kundaliniyoga",
    instructor: "Stina",
    instructorId: "stina",
    instructorEmail: "stina@yogastudion.com",
    day: "wed",
    time: "18:30",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12
  },
  {
    id: "medicinsk-thu",
    title: "Medicinsk Yoga",
    instructor: "Stina",
    instructorId: "stina",
    instructorEmail: "stina@yogastudion.com",
    day: "thu",
    time: "17:00",
    duration: 90,
    level: "Nybörjare välkomna",
    capacity: 10
  },
  {
    id: "kundalini-thu",
    title: "Kundaliniyoga",
    instructor: "Stina",
    instructorId: "stina",
    instructorEmail: "stina@yogastudion.com",
    day: "thu",
    time: "19:00",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12
  },
  {
    id: "yin-fri",
    title: "Mjuk Yoga, Nidra & Gongvila",
    instructor: "Camilla",
    instructorId: "camilla",
    instructorEmail: "camilla@yogastudion.com",
    day: "fri",
    time: "11:30",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12
  }
];

function GiantInput({
  id,
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = "text",
  hasValue,
  inputRef
}) {
  const [focused, setFocused] = useState(false);
  const showPlaceholder = !hasValue && !focused;
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "pointer-events-none absolute left-0 top-0 text-[#1A1A1A]/35",
        style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3.75rem)", fontWeight: 300 },
        animate: {
          opacity: showPlaceholder ? 1 : 0,
          y: showPlaceholder ? 0 : -12
        },
        transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
        children: placeholder
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        id,
        type,
        value,
        onChange: (e) => onChange(e.target.value),
        onKeyDown,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        className: "w-full border-b-2 border-[#1A1A1A]/15 bg-transparent pt-1 pb-3 text-[#1A1A1A] focus:border-[#8F9779] focus:outline-none",
        style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3.75rem)", fontWeight: 400 }
      }
    )
  ] });
}
function BookingDrawer() {
  const isOpen = useStore(drawerOpen$);
  const selectedClass = useStore(selectedClass$);
  const step = useStore(bookingStep$);
  const name = useStore(bookingName$);
  const email = useStore(bookingEmail$);
  const message = useStore(bookingMessage$);
  const status = useStore(bookingStatus$);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);
  useEffect(() => {
    if (isOpen && step === "name") requestAnimationFrame(() => nameInputRef.current?.focus());
  }, [isOpen, step]);
  const goToEmail = () => {
    if (!name.trim()) return;
    bookingStep$.set("email");
    requestAnimationFrame(() => emailInputRef.current?.focus());
  };
  const goToSubmit = () => {
    if (!email.trim()) return;
    bookingStep$.set("message");
  };
  const submitBooking = async () => {
    if (!selectedClass) return;
    bookingStatus$.set("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim() || void 0,
          classId: selectedClass.id,
          instructorId: selectedClass.instructorId,
          classTitle: selectedClass.title,
          day: selectedClass.day,
          time: selectedClass.time,
          duration: selectedClass.duration
        })
      });
      const data = await res.json();
      if (!res.ok) {
        bookingStatus$.set("error");
        return;
      }
      bookingStatus$.set("success");
      bookingStep$.set("done");
    } catch {
      bookingStatus$.set("error");
    }
  };
  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToEmail();
    }
  };
  const handleEmailKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToSubmit();
    }
  };
  if (!selectedClass) return null;
  const dayLabel = DAY_LABELS[selectedClass.day];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-50 bg-black/20 backdrop-blur-2xl",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        onClick: closeDrawer,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.aside,
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "drawer-title",
        className: "fixed bottom-0 left-0 right-0 z-50 flex max-h-[90vh] flex-col overflow-hidden rounded-t-[2rem] border-t border-[#8F9779]/10 bg-[#FAF9F6]/90 shadow-2xl backdrop-blur-2xl",
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "spring", damping: 28, stiffness: 260 },
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
          /* @__PURE__ */ jsxs("header", { className: "flex shrink-0 items-center justify-between px-6 py-5", children: [
            /* @__PURE__ */ jsx("h2", { id: "drawer-title", className: "text-xl text-[#1A1A1A]", style: { fontFamily: "'Cormorant Garamond', serif" }, children: "Boka pass" }),
            /* @__PURE__ */ jsx(
              motion.button,
              {
                type: "button",
                onClick: closeDrawer,
                className: "flex h-10 w-10 items-center justify-center rounded-full text-[#1A1A1A]/60 hover:bg-[#8F9779]/10 hover:text-[#1A1A1A]",
                whileTap: { scale: 0.95 },
                "aria-label": "Stäng",
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "shrink-0 border-b border-[#8F9779]/10 px-6 pb-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-[#1A1A1A]", style: { fontFamily: "'Cormorant Garamond', serif" }, children: selectedClass.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-0.5 text-sm text-[#1A1A1A]/60", style: { fontFamily: "'Inter', sans-serif" }, children: [
              dayLabel,
              " ",
              selectedClass.time,
              " · ",
              selectedClass.instructor
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "min-h-0 flex-1 overflow-y-auto px-6 py-10", children: status === "success" ? /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.96 },
              animate: { opacity: 1, scale: 1 },
              transition: { type: "spring", damping: 28, stiffness: 260 },
              className: "flex flex-col items-center py-6 text-center",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { type: "spring", damping: 18, stiffness: 200, delay: 0.1 },
                    className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#8F9779]/20",
                    children: /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        initial: { pathLength: 0, opacity: 0 },
                        animate: { pathLength: 1, opacity: 1 },
                        transition: { delay: 0.25, duration: 0.4 },
                        className: "text-4xl text-[#8F9779]",
                        children: "✓"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold text-[#1A1A1A]", style: { fontFamily: "'Cormorant Garamond', serif" }, children: "Tack" }),
                /* @__PURE__ */ jsxs("p", { className: "mt-2 max-w-sm text-sm leading-relaxed text-[#1A1A1A]/70", style: { fontFamily: "'Inter', sans-serif" }, children: [
                  selectedClass.instructor,
                  " återkommer med bekräftelse till din e-post."
                ] }),
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    type: "button",
                    onClick: closeDrawer,
                    className: "mt-8 rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-medium text-white",
                    style: { fontFamily: "'Inter', sans-serif" },
                    whileTap: { scale: 0.95 },
                    children: "Stäng"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-xl space-y-12", children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
            step === "name" && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -8 },
                transition: { type: "spring", damping: 28, stiffness: 260 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#1A1A1A]/60", style: { fontFamily: "'Inter', sans-serif" }, children: "Vad heter du?" }),
                  /* @__PURE__ */ jsx(
                    GiantInput,
                    {
                      id: "drawer-name",
                      value: name,
                      onChange: (v) => bookingName$.set(v),
                      onKeyDown: handleNameKeyDown,
                      placeholder: "Ditt namn",
                      hasValue: name.length > 0,
                      inputRef: nameInputRef
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      type: "button",
                      onClick: goToEmail,
                      disabled: !name.trim(),
                      className: "rounded-full bg-[#8F9779] px-8 py-3.5 text-base font-medium text-white disabled:opacity-40",
                      style: { fontFamily: "'Inter', sans-serif" },
                      whileTap: { scale: 0.95 },
                      children: "Fortsätt"
                    }
                  )
                ]
              },
              "name"
            ),
            step === "email" && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -8 },
                transition: { type: "spring", damping: 28, stiffness: 260 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#1A1A1A]/60", style: { fontFamily: "'Inter', sans-serif" }, children: "Din e-post?" }),
                  /* @__PURE__ */ jsx(
                    GiantInput,
                    {
                      id: "drawer-email",
                      type: "email",
                      value: email,
                      onChange: (v) => bookingEmail$.set(v),
                      onKeyDown: handleEmailKeyDown,
                      placeholder: "din@epost.se",
                      hasValue: email.length > 0,
                      inputRef: emailInputRef
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      type: "button",
                      onClick: goToSubmit,
                      disabled: !email.trim(),
                      className: "rounded-full bg-[#8F9779] px-8 py-3.5 text-base font-medium text-white disabled:opacity-40",
                      style: { fontFamily: "'Inter', sans-serif" },
                      whileTap: { scale: 0.95 },
                      children: "Fortsätt"
                    }
                  )
                ]
              },
              "email"
            ),
            step === "message" && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -8 },
                transition: { type: "spring", damping: 28, stiffness: 260 },
                className: "space-y-8",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#1A1A1A]/60", style: { fontFamily: "'Inter', sans-serif" }, children: "Något du vill berätta? (valfritt)" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      value: message,
                      onChange: (e) => bookingMessage$.set(e.target.value),
                      placeholder: "T.ex. erfarenhet eller önskemål",
                      rows: 2,
                      className: "w-full border-b-2 border-[#1A1A1A]/15 bg-transparent pb-2 text-lg text-[#1A1A1A] placeholder-[#1A1A1A]/35 focus:border-[#8F9779] focus:outline-none resize-none",
                      style: { fontFamily: "'Inter', sans-serif" }
                    }
                  ),
                  status === "error" && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: "Något gick fel. Försök igen." }),
                  /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      type: "button",
                      onClick: submitBooking,
                      disabled: status === "loading",
                      className: "flex w-full items-center justify-center gap-3 rounded-full bg-[#1A1A1A] py-4 text-base font-medium text-white disabled:opacity-70",
                      style: { fontFamily: "'Inter', sans-serif" },
                      whileTap: { scale: 0.95 },
                      children: status === "loading" ? /* @__PURE__ */ jsx("span", { className: "h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" }) : status === "success" ? /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xl", children: "✓" }) : "Boka min plats"
                    }
                  )
                ]
              },
              "message"
            )
          ] }) }) })
        ] })
      }
    )
  ] }) });
}

const DAY_ORDER = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
function BokaSchedule({ classes }) {
  const [selectedDay, setSelectedDay] = useState("mon");
  const classesByDay = useMemo(() => {
    const map = {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: []
    };
    classes.forEach((c) => {
      if (map[c.day]) map[c.day].push(c);
    });
    return map;
  }, [classes]);
  const visibleDays = DAY_ORDER.filter((d) => (classesByDay[d]?.length ?? 0) > 0);
  const currentClasses = classesByDay[selectedDay] ?? [];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "sticky top-[4.25rem] z-20 -mx-4 border-b border-[#8F9779]/10 bg-[#FAF9F6]/90 backdrop-blur-xl md:top-0", children: /* @__PURE__ */ jsx("div", { className: "flex gap-1 overflow-x-auto scroll-smooth px-4 py-4 scrollbar-hide md:flex-wrap md:pb-5", style: { scrollSnapType: "x mandatory" }, children: /* @__PURE__ */ jsx(LayoutGroup, { children: visibleDays.map((day) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        type: "button",
        onClick: () => setSelectedDay(day),
        className: "relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium",
        style: { fontFamily: "'Inter', sans-serif", scrollSnapAlign: "start" },
        children: [
          selectedDay === day && /* @__PURE__ */ jsx(
            motion.span,
            {
              layoutId: "day-pill",
              className: "absolute inset-0 rounded-full bg-[#8F9779]",
              transition: { type: "spring", stiffness: 380, damping: 30 }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: `relative z-10 ${selectedDay === day ? "text-white" : "text-[#1A1A1A]/80"}`, children: DAY_LABELS[day] })
        ]
      },
      day
    )) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: currentClasses.map((cls) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        type: "button",
        onClick: () => openDrawer(cls),
        layout: true,
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { type: "spring", stiffness: 300, damping: 28 },
        className: "group relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl text-left transition-colors duration-500 ease-out",
        style: {
          backgroundColor: "rgba(255,255,255,0.6)",
          boxShadow: "0 2px 20px rgba(143,151,121,0.06)"
        },
        whileHover: {
          scale: 1.02,
          transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
        },
        whileTap: { scale: 0.99 },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              style: {
                background: "linear-gradient(160deg, rgba(143,151,121,0.06) 0%, rgba(250,249,246,0.4) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute right-2 top-2 select-none font-light text-[#8F9779]/[0.18]",
              style: { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 12vw, 7rem)", lineHeight: 1 },
              "aria-hidden": true,
              children: cls.time
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative flex flex-1 flex-col justify-end p-6", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "font-semibold text-[#1A1A1A] leading-tight",
                style: { fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.25rem, 2vw, 1.5rem)" },
                children: cls.title
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs text-[#1A1A1A]/60", style: { fontFamily: "'Inter', sans-serif" }, children: [
              cls.time,
              " · ",
              cls.duration,
              " min · ",
              cls.instructor
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#8F9779] opacity-0 transition-opacity duration-300 group-hover:opacity-100", style: { fontFamily: "'Inter', sans-serif" }, children: [
              "Boka min plats",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ] })
          ] })
        ]
      },
      cls.id
    )) }) }),
    currentClasses.length === 0 && /* @__PURE__ */ jsx("p", { className: "py-20 text-center text-[#1A1A1A]/50", style: { fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem" }, children: "Inga klasser denna dag." }),
    /* @__PURE__ */ jsx(BookingDrawer, {})
  ] });
}

const $$Boka = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BokaLayout", $$BokaLayout, { "title": "Boka | Yogastudion", "description": "Boka ditt yogapass p\xE5 Yogastudion i G\xF6teborg. V\xE4lj klass, tid och l\xE4rare \u2013 vi ser fram emot att tr\xE4ffa dig p\xE5 mattan." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#FAF9F6] min-h-screen"> <!-- Hero – tydligt annorlunda: stor serif, sage-streck --> <section class="relative mx-auto max-w-5xl px-4 pt-14 pb-10 md:pt-20 md:pb-14"> <div class="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-[#8F9779] md:w-1.5" aria-hidden="true"></div> <div class="pl-6 md:pl-8"> <p class="text-xs uppercase tracking-[0.25em] text-[#8F9779] font-medium" style="font-family: 'Inter', sans-serif;">
Bokningssida
</p> <h1 class="mt-2 text-4xl font-semibold text-[#1A1A1A] md:text-5xl md:leading-tight" style="font-family: 'Cormorant Garamond', serif;">
Boka din yogastund
</h1> <p class="mt-4 max-w-xl text-lg leading-relaxed text-[#1A1A1A]/80" style="font-family: 'Inter', sans-serif;">
Välj dag och klicka på ett pass. Du skickar en förfrågan till läraren – ingen betalning här. Vi återkommer med bekräftelse.
</p> </div> </section> <!-- Schema: dag-pills + glaskort --> <section class="mx-auto max-w-5xl px-4 pb-24" aria-label="Veckoschema"> ${renderComponent($$result2, "BokaSchedule", BokaSchedule, { "client:load": true, "classes": CLASSES, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/BokaSchedule", "client:component-export": "default" })} </section> </div> ` })}`;
}, "/Users/ocmac/Yogastudion/src/pages/boka.astro", void 0);

const $$file = "/Users/ocmac/Yogastudion/src/pages/boka.astro";
const $$url = "/boka";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Boka,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
