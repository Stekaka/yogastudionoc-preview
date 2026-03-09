import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useStore } from "@nanostores/react";
import BookingDrawer from "./BookingDrawer";
import type { ClassItem, DayId } from "../data/classes";
import { DAY_LABELS } from "../data/classes";
import { openDrawer, selectedClass$ } from "../stores/booking";

const DAY_ORDER: DayId[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

interface BokaScheduleProps {
  classes: ClassItem[];
}

export default function BokaSchedule({ classes }: BokaScheduleProps) {
  const [selectedDay, setSelectedDay] = useState<DayId>("mon");

  const classesByDay = useMemo(() => {
    const map: Record<DayId, ClassItem[]> = {
      mon: [], tue: [], wed: [], thu: [], fri: [], sat: [], sun: [],
    };
    classes.forEach((c) => { if (map[c.day]) map[c.day].push(c); });
    return map;
  }, [classes]);

  const visibleDays = DAY_ORDER.filter((d) => (classesByDay[d]?.length ?? 0) > 0);
  const currentClasses = classesByDay[selectedDay] ?? [];

  return (
    <>
      {/* Day pills */}
      <div className="sticky top-[4.25rem] z-20 -mx-4 border-b border-[#8F9779]/10 bg-[#FAF9F6]/90 backdrop-blur-xl md:top-0">
        <div className="flex gap-1 overflow-x-auto scroll-smooth px-4 py-4 scrollbar-hide md:flex-wrap md:pb-5" style={{ scrollSnapType: "x mandatory" }}>
          <LayoutGroup>
            {visibleDays.map((day) => (
              <motion.button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className="relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium"
                style={{ fontFamily: "'Inter', sans-serif", scrollSnapAlign: "start" }}
              >
                {selectedDay === day && (
                  <motion.span
                    layoutId="day-pill"
                    className="absolute inset-0 rounded-full bg-[#8F9779]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${selectedDay === day ? "text-white" : "text-[#1A1A1A]/80"}`}>
                  {DAY_LABELS[day]}
                </span>
              </motion.button>
            ))}
          </LayoutGroup>
        </div>
      </div>

      {/* Visual Class Grid – stort bakgrundsnummer (tid), hover scale + färgskift */}
      <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {currentClasses.map((cls) => (
            <motion.button
              key={cls.id}
              type="button"
              onClick={() => openDrawer(cls)}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl text-left transition-colors duration-500 ease-out"
              style={{
                backgroundColor: "rgba(255,255,255,0.6)",
                boxShadow: "0 2px 20px rgba(143,151,121,0.06)",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Hover: mjuk färgskift */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(160deg, rgba(143,151,121,0.06) 0%, rgba(250,249,246,0.4) 100%)",
                }}
              />
              {/* Stort dämpat bakgrundsnummer (tiden) – lyxigt serif, bakom texten */}
              <span
                className="absolute right-2 top-2 select-none font-light text-[#8F9779]/[0.18]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 12vw, 7rem)", lineHeight: 1 }}
                aria-hidden
              >
                {cls.time}
              </span>
              <div className="relative flex flex-1 flex-col justify-end p-6">
                <h3
                  className="font-semibold text-[#1A1A1A] leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
                >
                  {cls.title}
                </h3>
                <p className="mt-2 text-xs text-[#1A1A1A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {cls.time} · {cls.duration} min · {cls.instructor}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#8F9779] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Boka min plats
                  <span aria-hidden>→</span>
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {currentClasses.length === 0 && (
        <p className="py-20 text-center text-[#1A1A1A]/50" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem" }}>
          Inga klasser denna dag.
        </p>
      )}

      <BookingDrawer />
    </>
  );
}
