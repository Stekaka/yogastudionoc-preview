import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock3, User2 } from 'lucide-react';

const WEEKLY_SCHEDULE = [
  {
    id: "mon",
    labelShort: "MÅN",
    labelLong: "Måndag",
    classes: [
      {
        id: "mon-kundalini-free-flow-layza",
        title: "Kundalini Free Flow",
        time: "18.00–19.15",
        teacher: "Layza",
        type: "kundalini"
      }
    ]
  },
  {
    id: "tue",
    labelShort: "TIS",
    labelLong: "Tisdag",
    classes: [
      {
        id: "tue-yinyoga-flow-gong-layza",
        title: "Yinyoga Flow med Gong",
        time: "17.30–18.45",
        teacher: "Layza",
        type: "yin"
      },
      {
        id: "tue-gongavslappning-sylwia",
        title: "Gongavslappning",
        time: "19.15–20.15",
        teacher: "Sylwia",
        type: "other"
      }
    ]
  },
  {
    id: "wed",
    labelShort: "ONS",
    labelLong: "Onsdag",
    classes: [
      {
        id: "wed-kundaliniyoga-stina",
        title: "Kundaliniyoga",
        time: "18.30–19.45",
        teacher: "Stina",
        type: "kundalini"
      }
    ]
  },
  {
    id: "thu",
    labelShort: "TOR",
    labelLong: "Torsdag",
    classes: [
      {
        id: "thu-medicinsk-yoga-stina",
        title: "Medicinsk Yoga",
        time: "17.00–18.30",
        teacher: "Stina",
        type: "medicinsk"
      },
      {
        id: "thu-kundaliniyoga-stina",
        title: "Kundaliniyoga",
        time: "19.00–20.15",
        teacher: "Stina",
        type: "kundalini"
      },
      {
        id: "thu-breathwork-olivia",
        title: "Breathwork",
        time: "Specifika datum",
        teacher: "Olivia",
        type: "breathwork",
        note: "Genomförs vid utvalda datum – se aktuellt schema."
      }
    ]
  },
  {
    id: "fri",
    labelShort: "FRE",
    labelLong: "Fredag",
    classes: [
      {
        id: "fri-mjuk-yoga-nidra-gong-camilla",
        title: "Mjuk Yoga, Nidra & Gongvila",
        time: "11.30–12.45",
        teacher: "Camilla",
        type: "yin"
      }
    ]
  }
];
const containerVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};
const expandVariants = {
  collapsed: { opacity: 0, height: 0, y: -4 },
  expanded: { opacity: 1, height: "auto", y: 0 }
};
const FILTERS = [
  { key: "alla", label: "Alla" },
  { key: "kundalini", label: "Kundaliniyoga" },
  { key: "yin", label: "Yinyoga" },
  { key: "medicinsk", label: "Medicinsk Yoga" },
  { key: "breathwork", label: "Breathwork" }
];
const COURSE_TYPE_LABEL = {
  kundalini: "Kundaliniyoga",
  yin: "Yinyoga / Mjuk yoga",
  medicinsk: "Medicinsk Yoga",
  breathwork: "Breathwork",
  other: "Specialklass"
};
const WEEK_OFFSET_LABEL = (offset) => {
  if (offset === 0) return "Denna vecka";
  if (offset === 1) return "Nästa vecka";
  if (offset === -1) return "Förra veckan";
  return offset > 1 ? `Vecka +${offset}` : `Vecka ${offset}`;
};
const formatWeekRange = (offset) => {
  const today = /* @__PURE__ */ new Date();
  const target = new Date(today);
  target.setDate(today.getDate() + offset * 7);
  const day = target.getDay();
  const diffToMonday = (day === 0 ? -6 : 1) - day;
  const monday = new Date(target);
  monday.setDate(target.getDate() + diffToMonday);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "short"
  });
  const onejan = new Date(monday.getFullYear(), 0, 1);
  const millisBetween = monday.getTime() - onejan.getTime();
  const daysBetween = Math.floor(millisBetween / 864e5);
  const weekLabel = Math.ceil((daysBetween + onejan.getDay() + 1) / 7);
  return `Vecka ${weekLabel}: ${formatter.format(monday)} – ${formatter.format(
    sunday
  )}`;
};
const normalize = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
const tokensForCourseType = (courseType) => {
  switch (courseType) {
    case "kundaliniyoga":
    case "kundalini-hushall":
      return ["kundalini"];
    case "yinyoga":
    case "yinyoga-flow":
      return ["yin", "yinyoga"];
    case "medicinsk-yoga":
      return ["medicinsk"];
    case "gongbad":
      return ["gong"];
    case "breathwork":
      return ["breathwork"];
    default:
      return [];
  }
};
const getWeekDateLabels = (offset) => {
  const today = /* @__PURE__ */ new Date();
  const target = new Date(today);
  target.setDate(today.getDate() + offset * 7);
  const day = target.getDay();
  const diffToMonday = (day === 0 ? -6 : 1) - day;
  const monday = new Date(target);
  monday.setDate(target.getDate() + diffToMonday);
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    day: "2-digit",
    month: "2-digit"
  });
  const ids = ["mon", "tue", "wed", "thu", "fri"];
  const labels = {};
  ids.forEach((id, index) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + index);
    labels[id] = formatter.format(d);
  });
  return labels;
};
const getCourseInfoLink = (cls) => {
  const base = "/kurser";
  switch (cls.type) {
    case "kundalini":
      return `${base}#kundalini-heading`;
    case "yin":
      return `${base}#yin-heading`;
    case "medicinsk":
      return `${base}#medicinsk-heading`;
    case "breathwork":
    case "other":
    default:
      return `${base}#special-heading`;
  }
};
const WeeklySchedule = () => {
  const [openId, setOpenId] = useState(null);
  const [highlightId, setHighlightId] = useState(null);
  const [filter, setFilter] = useState("alla");
  const [weekOffset, setWeekOffset] = useState(0);
  const allClasses = useMemo(() => {
    return WEEKLY_SCHEDULE.flatMap(
      (day) => day.classes.map((cls) => ({
        dayId: day.id,
        dayLabel: day.labelLong,
        cls
      }))
    );
  }, []);
  const currentDayId = useMemo(() => {
    if (weekOffset !== 0) return null;
    const day = (/* @__PURE__ */ new Date()).getDay();
    switch (day) {
      case 1:
        return "mon";
      case 2:
        return "tue";
      case 3:
        return "wed";
      case 4:
        return "thu";
      case 5:
        return "fri";
      default:
        return null;
    }
  }, [weekOffset]);
  const weekDateLabels = useMemo(
    () => getWeekDateLabels(weekOffset),
    [weekOffset]
  );
  useEffect(() => {
    const handler = (event) => {
      const custom = event;
      const courseType = custom.detail?.courseType;
      const title = custom.detail?.title;
      const tokens = [
        ...title ? [title] : [],
        ...tokensForCourseType(courseType)
      ].map(normalize).filter(Boolean);
      if (tokens.length === 0) return;
      const match = allClasses.find(({ cls }) => {
        const haystack = normalize(`${cls.title} ${cls.id}`);
        return tokens.some((t) => t && haystack.includes(t));
      });
      if (!match) return;
      setOpenId(match.cls.id);
      setHighlightId(match.cls.id);
      window.setTimeout(() => {
        setHighlightId((current) => current === match.cls.id ? null : current);
      }, 2600);
      requestAnimationFrame(() => {
        const el = document.querySelector(
          `[data-class-id="${match.cls.id}"]`
        );
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };
    window.addEventListener("booking:course", handler);
    return () => {
      window.removeEventListener("booking:course", handler);
    };
  }, [allClasses]);
  const handleToggle = (id) => {
    setOpenId((current) => current === id ? null : id);
  };
  const handleBook = (teacher) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("booking:select", {
          detail: { teacher }
        })
      );
      const bookingEl = document.getElementById("boka");
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  const filteredSchedule = useMemo(() => {
    if (filter === "alla") return WEEKLY_SCHEDULE;
    return WEEKLY_SCHEDULE.map((day) => ({
      ...day,
      classes: day.classes.filter((cls) => cls.type === filter)
    })).filter((day) => day.classes.length > 0);
  }, [filter]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "aria-labelledby": "weekly-schedule-heading",
      className: "mx-auto w-full max-w-6xl px-4 py-10 sm:py-14 space-y-6 bg-[#F5F2ED]",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  id: "weekly-schedule-heading",
                  className: "font-serif text-2xl sm:text-3xl text-[#2D2D2D]",
                  children: "Veckoschema – Yogastudion Göteborg"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-[#2D2D2D]/80 max-w-2xl", children: "Utforska veckans klasser på Yogastudion. Tryck på en klass för att läsa mer och göra en lugn bokningsförfrågan." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[0.78rem] text-[#2D2D2D]/80 shadow-sm border border-[#4A5D4E]/10", children: [
              /* @__PURE__ */ jsx(CalendarDays, { className: "h-4 w-4 text-[#2D2D2D]/70" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: formatWeekRange(weekOffset) }),
              /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline text-[#2D2D2D]/50", children: [
                "· ",
                WEEK_OFFSET_LABEL(weekOffset)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/70 px-1.5 py-1 border border-[#4A5D4E]/10 shadow-sm", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setWeekOffset((o) => o - 1),
                  className: "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.8rem] text-[#2D2D2D]/80 hover:bg-[#F0E7DA]",
                  children: "← Föregående vecka"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setWeekOffset(0),
                  className: "inline-flex items-center gap-1 rounded-full bg-[#F5F2ED] px-2.5 py-1 text-[0.8rem] font-medium text-[#2D2D2D] shadow-sm border border-[#4A5D4E]/20 hover:bg-[#E8E0D4]",
                  children: "Idag"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setWeekOffset((o) => o + 1),
                  className: "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.8rem] text-[#2D2D2D]/80 hover:bg-[#F0E7DA]",
                  children: "Nästa vecka →"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: FILTERS.map(({ key, label }) => {
              const isActive = filter === key;
              return /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setFilter(key),
                  className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.78rem] transition-colors border ${isActive ? "bg-[#F5F2ED] text-[#2D2D2D] border-[#4A5D4E]/30 shadow-sm" : "bg-white/80 text-[#2D2D2D]/80 border-[#4A5D4E]/15 hover:bg-[#F0E7DA]"}`,
                  children: /* @__PURE__ */ jsx("span", { children: label })
                },
                key
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(LayoutGroup, { children: /* @__PURE__ */ jsx("div", { className: "mt-4 grid gap-4 md:gap-6 md:grid-cols-5", children: filteredSchedule.map((day) => {
          const isToday = currentDayId === day.id;
          return /* @__PURE__ */ jsxs(
            motion.section,
            {
              layout: true,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, amount: 0.3 },
              variants: containerVariants,
              transition: { duration: 0.35 },
              "aria-label": day.labelLong,
              className: `relative flex flex-col overflow-hidden rounded-3xl border bg-white/65 backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.12)] ${isToday ? "border-[#4A5D4E]/30 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,#E8E0D4_0%,transparent_55%)]" : "border-[#4A5D4E]/15"}`,
              children: [
                /* @__PURE__ */ jsxs("header", { className: "px-4 pt-4 pb-2 border-b border-[#4A5D4E]/10 flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "font-serif text-base text-[#2D2D2D]", children: [
                    day.labelLong,
                    weekDateLabels[day.id] && /* @__PURE__ */ jsx("span", { className: "ml-2 text-[0.75rem] font-sans text-[#2D2D2D]/60", children: weekDateLabels[day.id] })
                  ] }) }),
                  isToday && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-[#F5F2ED] px-2.5 py-1 text-[0.7rem] font-medium text-[#2D2D2D] border border-[#4A5D4E]/15", children: "Idag" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex-1 divide-y divide-[#4A5D4E]/10", children: day.classes.map((cls) => {
                  const isOpen = openId === cls.id;
                  const isHighlighted = highlightId === cls.id;
                  return /* @__PURE__ */ jsxs(
                    "article",
                    {
                      className: "group",
                      "aria-expanded": isOpen,
                      "data-class-id": cls.id,
                      children: [
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleToggle(cls.id),
                            className: `w-full text-left px-4 py-3 flex items-start justify-between gap-3 transition-colors ${isHighlighted ? "bg-[#F5F2ED] ring-2 ring-inset ring-[#4A5D4E]/35" : "hover:bg-[#F0E7DA]"}`,
                            children: /* @__PURE__ */ jsxs("div", { className: "space-y-1 flex-1", children: [
                              /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-[#2D2D2D]", children: cls.title }),
                              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[0.75rem] text-[#2D2D2D]/75", children: [
                                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                                  /* @__PURE__ */ jsx(Clock3, { className: "h-3.5 w-3.5 text-[#2D2D2D]/70" }),
                                  /* @__PURE__ */ jsx("time", { className: "font-medium", children: cls.time })
                                ] }),
                                !isToday && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
                                  /* @__PURE__ */ jsx(User2, { className: "h-3.5 w-3.5 text-[#2D2D2D]/70" }),
                                  /* @__PURE__ */ jsx("span", { children: cls.teacher })
                                ] }),
                                /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-[#F5F2ED] px-2 py-0.5 text-[0.7rem] text-[#2D2D2D] border border-[#4A5D4E]/12", children: COURSE_TYPE_LABEL[cls.type] })
                              ] })
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            initial: "collapsed",
                            animate: "expanded",
                            exit: "collapsed",
                            variants: expandVariants,
                            transition: { duration: 0.22, ease: "easeOut" },
                            className: "overflow-hidden",
                            children: /* @__PURE__ */ jsxs("div", { className: "px-4 pb-4 pt-1 space-y-3 text-[0.85rem] text-[#2D2D2D]/80 bg-white/80", children: [
                              /* @__PURE__ */ jsx("p", { children: "En mjuk, närvarande klass som balanserar nervsystemet och bjuder in vila i både kropp och sinne. Passar både nybörjare och vana utövare." }),
                              cls.note && /* @__PURE__ */ jsx("p", { className: "text-[0.8rem] text-[#2D2D2D]/70", children: cls.note }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 pt-1", children: [
                                /* @__PURE__ */ jsx(
                                  "a",
                                  {
                                    href: getCourseInfoLink(cls),
                                    className: "text-[0.75rem] text-[#2D2D2D]/80 underline underline-offset-2 hover:text-[#2D2D2D]",
                                    children: "Läs mer"
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => handleBook(cls.teacher),
                                    className: "inline-flex shrink-0 items-center rounded-full bg-[#F5F2ED] px-3.5 py-1.5 text-[0.78rem] font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 hover:bg-[#E8E0D4] transition-colors",
                                    children: "Boka plats"
                                  }
                                )
                              ] })
                            ] })
                          },
                          "content"
                        ) })
                      ]
                    },
                    cls.id
                  );
                }) })
              ]
            },
            day.id
          );
        }) }) }),
        /* @__PURE__ */ jsxs("footer", { className: "pt-4 border-t border-[#4A5D4E]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[0.8rem] text-[#2D2D2D]/70", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif text-[0.9rem] text-[#2D2D2D]", children: "Yogastudion" }),
          /* @__PURE__ */ jsx("p", { children: "Vegagatan 16, Göteborg" })
        ] })
      ]
    }
  );
};

export { WeeklySchedule as W };
