import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { CalendarDays, Clock3, User2 } from "lucide-react";
import type { ClassItem, DayId } from "../data/classes";
import { CLASSES, DAY_LABELS } from "../data/classes";
import { openDrawer } from "../stores/booking";
import BookingDrawer from "./BookingDrawer";

const DAY_ORDER: DayId[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function formatTimeRange(time: string, durationMin: number): string {
  const [hh, mm] = time.split(":").map(Number);
  const startMin = (hh || 0) * 60 + (mm || 0);
  const endMin = startMin + durationMin;
  const endH = Math.floor(endMin / 60) % 24;
  const endM = endMin % 60;
  return `${time}–${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}`;
}

type FilterKey = "alla" | "kundalini" | "yin" | "medicinsk" | "other";

function getCourseType(cls: ClassItem): FilterKey {
  const t = cls.title.toLowerCase();
  if (t.includes("kundalini")) return "kundalini";
  if (t.includes("yin") || t.includes("gongvila") || t.includes("nidra")) return "yin";
  if (t.includes("medicinsk")) return "medicinsk";
  return "other";
}

interface DaySchedule {
  id: DayId;
  labelShort: string;
  labelLong: string;
  classes: ClassItem[];
}

function buildScheduleFromClasses(): DaySchedule[] {
  return DAY_ORDER
    .map((day) => ({
      id: day,
      labelShort: DAY_LABELS[day].slice(0, 3).toUpperCase(),
      labelLong: DAY_LABELS[day],
      classes: CLASSES.filter((c) => c.day === day),
    }))
    .filter((d) => d.classes.length > 0);
}

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "alla", label: "Alla" },
  { key: "kundalini", label: "Kundaliniyoga" },
  { key: "yin", label: "Yinyoga" },
  { key: "medicinsk", label: "Medicinsk Yoga" },
  { key: "other", label: "Övrigt" },
];

const COURSE_TYPE_LABEL: Record<FilterKey, string> = {
  alla: "Alla",
  kundalini: "Kundaliniyoga",
  yin: "Yinyoga / Mjuk yoga",
  medicinsk: "Medicinsk Yoga",
  other: "Övrigt",
};

const containerVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const expandVariants = {
  collapsed: { opacity: 0, height: 0, y: -4 },
  expanded: { opacity: 1, height: "auto", y: 0 },
};

const WEEK_OFFSET_LABEL = (offset: number): string => {
  if (offset === 0) return "Denna vecka";
  if (offset === 1) return "Nästa vecka";
  if (offset === -1) return "Förra veckan";
  return offset > 1 ? `Vecka +${offset}` : `Vecka ${offset}`;
};

const formatWeekRange = (offset: number): string => {
  const today = new Date();
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
    month: "short",
  });

  // ISO-ish week number (good enough for UI label)
  const onejan = new Date(monday.getFullYear(), 0, 1);
  const millisBetween = monday.getTime() - onejan.getTime();
  const daysBetween = Math.floor(millisBetween / 86400000);
  const weekLabel = Math.ceil((daysBetween + onejan.getDay() + 1) / 7);

  return `Vecka ${weekLabel}: ${formatter.format(monday)} – ${formatter.format(
    sunday
  )}`;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const tokensForCourseType = (courseType?: string) => {
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

/** Beräkna datumetiketter (t.ex. 03.05) för aktuell vecka. */
const getWeekDateLabels = (offset: number): Record<string, string> => {
  const today = new Date();
  const target = new Date(today);
  target.setDate(today.getDate() + offset * 7);

  const day = target.getDay();
  const diffToMonday = (day === 0 ? -6 : 1) - day;
  const monday = new Date(target);
  monday.setDate(target.getDate() + diffToMonday);

  const formatter = new Intl.DateTimeFormat("sv-SE", {
    day: "2-digit",
    month: "2-digit",
  });

  const ids: DaySchedule["id"][] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const labels: Record<string, string> = {};

  ids.forEach((id, index) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + index);
    labels[id] = formatter.format(d);
  });

  return labels;
};

/** Link to course section on /kurser */
const getCourseInfoLink = (cls: ClassItem): string => {
  const base = "/kurser";
  const type = getCourseType(cls);
  if (type === "kundalini") return `${base}#section-kundaliniyoga`;
  if (type === "yin") return `${base}#section-yinyoga`;
  if (type === "medicinsk") return `${base}#section-medicinsk-yoga`;
  return `${base}#section-specialklasser`;
};

const WeeklySchedule: React.FC<{ transparentBackground?: boolean; compactHeading?: boolean }> = ({
  transparentBackground = false,
  compactHeading = false,
}) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterKey>("alla");
  const [weekOffset, setWeekOffset] = useState(0);

  const schedule = useMemo(() => buildScheduleFromClasses(), []);
  const allClasses = useMemo(() => {
    return schedule.flatMap((day) =>
      day.classes.map((cls) => ({
        dayId: day.id,
        dayLabel: day.labelLong,
        cls,
      }))
    );
  }, [schedule]);

  const currentDayId = useMemo(() => {
    if (weekOffset !== 0) return null;
    const day = new Date().getDay();
    const map: number[] = [0, 1, 2, 3, 4, 5, 6];
    const ids: DayId[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return ids[day] ?? null;
  }, [weekOffset]);

  const weekDateLabels = useMemo(
    () => getWeekDateLabels(weekOffset),
    [weekOffset]
  );

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ courseType?: string; title?: string }>;
      const courseType = custom.detail?.courseType;
      const title = custom.detail?.title;

      const tokens = [
        ...(title ? [title] : []),
        ...tokensForCourseType(courseType),
      ]
        .map(normalize)
        .filter(Boolean);

      if (tokens.length === 0) return;

      const match = allClasses.find(({ cls }) => {
        const haystack = normalize(`${cls.title} ${cls.id}`);
        return tokens.some((t) => t && haystack.includes(t));
      });

      if (!match) return;

      setOpenId(match.cls.id);
      setHighlightId(match.cls.id);

      window.setTimeout(() => {
        setHighlightId((current) => (current === match.cls.id ? null : current));
      }, 2600);

      requestAnimationFrame(() => {
        const el = document.querySelector<HTMLElement>(
          `[data-class-id="${match.cls.id}"]`
        );
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    };

    window.addEventListener("booking:course", handler as EventListener);
    return () => {
      window.removeEventListener("booking:course", handler as EventListener);
    };
  }, [allClasses]);

  const handleToggle = (id: string) => {
    setOpenId((current) => {
      if (current === id) {
        setHighlightId(null);
        return null;
      }
      return id;
    });
  };

  const handleBook = (cls: ClassItem) => {
    openDrawer(cls);
  };

  const filteredSchedule = useMemo(() => {
    if (filter === "alla") return schedule;
    return schedule.map((day) => ({
      ...day,
      classes: day.classes.filter((cls) => getCourseType(cls) === filter),
    })).filter((day) => day.classes.length > 0);
  }, [schedule, filter]);

  return (
    <section
      aria-labelledby="weekly-schedule-heading"
      className={`mx-auto w-full max-w-6xl px-4 py-10 sm:py-14 space-y-6 ${transparentBackground ? "bg-transparent" : "bg-[#F5F2ED]"}`}
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          {!compactHeading && (
            <div className="space-y-2">
              <h2
                id="weekly-schedule-heading"
                className="font-serif text-2xl sm:text-3xl text-[#2D2D2D]"
              >
                Veckoschema – Yogastudion Göteborg
              </h2>
              <p className="text-sm sm:text-base text-[#2D2D2D]/80 max-w-2xl">
                Utforska veckans klasser på Yogastudion. Tryck på en klass för att
                läsa mer och göra en lugn bokningsförfrågan.
              </p>
            </div>
          )}
          {compactHeading && <div id="weekly-schedule-heading" className="sr-only" aria-hidden>Veckoschema</div>}
          <div className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[0.78rem] text-[#2D2D2D]/80 shadow-sm border border-[#4A5D4E]/10 ${compactHeading ? "sm:ml-auto" : ""}`}>
            <CalendarDays className="h-4 w-4 text-[#2D2D2D]/70" />
            <span className="font-medium">
              {formatWeekRange(weekOffset)}
            </span>
            <span className="hidden sm:inline text-[#2D2D2D]/50">
              · {WEEK_OFFSET_LABEL(weekOffset)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-1.5 py-1 border border-[#4A5D4E]/10 shadow-sm">
            <button
              type="button"
              onClick={() => setWeekOffset((o) => o - 1)}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.8rem] text-[#2D2D2D]/80 hover:bg-[#F0E7DA]"
            >
              ← Föregående vecka
            </button>
            <button
              type="button"
              onClick={() => setWeekOffset(0)}
              className="inline-flex items-center gap-1 rounded-full bg-[#F5F2ED] px-2.5 py-1 text-[0.8rem] font-medium text-[#2D2D2D] shadow-sm border border-[#4A5D4E]/20 hover:bg-[#E8E0D4]"
            >
              Idag
            </button>
            <button
              type="button"
              onClick={() => setWeekOffset((o) => o + 1)}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.8rem] text-[#2D2D2D]/80 hover:bg-[#F0E7DA]"
            >
              Nästa vecka →
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map(({ key, label }) => {
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.78rem] transition-colors border ${
                    isActive
                      ? "bg-[#F5F2ED] text-[#2D2D2D] border-[#4A5D4E]/30 shadow-sm"
                      : "bg-white/80 text-[#2D2D2D]/80 border-[#4A5D4E]/15 hover:bg-[#F0E7DA]"
                  }`}
                >
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <LayoutGroup>
        <div className="mt-4 grid gap-4 md:gap-6 md:grid-cols-5">
          {filteredSchedule.map((day) => {
            const isToday = currentDayId === day.id;
            return (
              <motion.section
                key={day.id}
                layout
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                transition={{ duration: 0.35 }}
                aria-label={day.labelLong}
                className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white/65 backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.12)] ${
                  isToday
                    ? "border-[#4A5D4E]/30 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_top,#E8E0D4_0%,transparent_55%)]"
                    : "border-[#4A5D4E]/15"
                }`}
              >
                <header className="px-4 pt-4 pb-2 border-b border-[#4A5D4E]/10 flex items-center justify-between gap-2">
                  <div>
                    <p className="font-serif text-base text-[#2D2D2D]">
                      {day.labelLong}
                      {weekDateLabels[day.id] && (
                        <span className="ml-2 text-[0.75rem] font-sans text-[#2D2D2D]/60">
                          {weekDateLabels[day.id]}
                        </span>
                      )}
                    </p>
                  </div>
                  {isToday && (
                    <span className="inline-flex items-center rounded-full bg-[#F5F2ED] px-2.5 py-1 text-[0.7rem] font-medium text-[#2D2D2D] border border-[#4A5D4E]/15">
                      Idag
                    </span>
                  )}
                </header>

                <div className="flex-1 divide-y divide-[#4A5D4E]/10">
                  {day.classes.map((cls) => {
                    const isOpen = openId === cls.id;
                    const isHighlighted = highlightId === cls.id;
                    return (
                      <article
                        key={cls.id}
                        className="group"
                        aria-expanded={isOpen}
                        data-class-id={cls.id}
                      >
                        <button
                          type="button"
                          onClick={() => handleToggle(cls.id)}
                          className={`w-full text-left px-4 py-3 flex items-start justify-between gap-3 transition-colors ${
                            isHighlighted
                              ? "bg-[#F5F2ED] ring-2 ring-inset ring-[#4A5D4E]/35"
                              : "hover:bg-[#F0E7DA]"
                          }`}
                        >
                          <div className="space-y-1 flex-1">
                            <h3 className="text-sm font-medium text-[#2D2D2D]">
                              {cls.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-[0.75rem] text-[#2D2D2D]/75">
                              <span className="inline-flex items-center gap-1">
                                <Clock3 className="h-3.5 w-3.5 text-[#2D2D2D]/70" />
                                <time className="font-medium">{formatTimeRange(cls.time, cls.duration)}</time>
                              </span>
                            </div>
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial="collapsed"
                              animate="expanded"
                              exit="collapsed"
                              variants={expandVariants}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 pt-1 space-y-3 text-[0.85rem] text-[#2D2D2D]/80 bg-white/80">
                                <p>
                                  En mjuk, närvarande klass som balanserar
                                  nervsystemet och bjuder in vila i både kropp
                                  och sinne. Passar både nybörjare och vana
                                  utövare.
                                </p>
                                {(cls.level || cls.instructor) && (
                                  <p className="text-[0.8rem] text-[#2D2D2D]/70 flex flex-wrap items-center gap-1.5">
                                    {cls.level && <span>{cls.level}</span>}
                                    {cls.instructor && (
                                      <>
                                        <span aria-hidden="true">·</span>
                                        <span className="inline-flex items-center gap-1">
                                          <User2 className="h-3.5 w-3.5 text-[#2D2D2D]/70" />
                                          <span>{cls.instructor}</span>
                                        </span>
                                      </>
                                    )}
                                    {(() => {
                                      const typeKey = getCourseType(cls);
                                      if (typeKey === "alla") return null;
                                      return (
                                        <>
                                          <span aria-hidden="true">·</span>
                                          <span>{COURSE_TYPE_LABEL[typeKey]}</span>
                                        </>
                                      );
                                    })()}
                                  </p>
                                )}
                                <div className="flex items-center justify-between gap-3 pt-1">
                                  <a
                                    href={getCourseInfoLink(cls)}
                                    className="text-[0.75rem] text-[#2D2D2D]/80 underline underline-offset-2 hover:text-[#2D2D2D]"
                                  >
                                    Läs mer
                                  </a>
                                  <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); handleBook(cls); }}
                                    className="inline-flex shrink-0 items-center rounded-full bg-[#F5F2ED] px-3.5 py-1.5 text-[0.78rem] font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 hover:bg-[#E8E0D4] transition-colors"
                                  >
                                    Boka plats
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </article>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>
      </LayoutGroup>

      <BookingDrawer />
    </section>
  );
};

export default WeeklySchedule;

