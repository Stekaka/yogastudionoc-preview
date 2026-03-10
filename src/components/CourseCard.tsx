import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TeacherName =
  | "Anki Bladh"
  | "Linda Dankert"
  | "Mathias Bengtsson"
  | "Malin Wättring"
  | "Jill Johansson"
  | "Eva-Lotta Sandberg"
  | "Samson Telemichael"
  | "Lisbet Wikman";

export interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  badgeLabel: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  level?: string;
  courseType: string;
  suggestedTeacher?: TeacherName;
}

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  category,
  badgeLabel,
  shortDescription,
  longDescription,
  imageUrl,
  level,
  courseType,
  suggestedTeacher,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleBook = () => {
    if (typeof window !== "undefined") {
      setOpen(false);
      if (suggestedTeacher) {
        window.dispatchEvent(
          new CustomEvent("booking:select", {
            detail: { teacher: suggestedTeacher },
          })
        );
      }

      window.dispatchEvent(
        new CustomEvent("booking:course", {
          detail: { courseType, title },
        })
      );

      const bookingEl = document.getElementById("boka");
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <motion.article
        layoutId={id}
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#4A5D4E]/12 bg-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.12)]"
        aria-label={title}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#4A5D4E]/10">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#2D2D2D]">
              {badgeLabel}
            </span>
            <span className="inline-flex items-center rounded-full bg-[#F5F2ED] px-3 py-1 text-[0.7rem] font-medium text-[#4A5D4E] border border-[#4A5D4E]/25">
              {category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
          <div className="space-y-2">
            <h3 className="font-serif text-lg sm:text-xl text-[#2D2D2D]">
              {title}
            </h3>
            {level && (
              <p className="text-[0.75rem] uppercase tracking-[0.22em] text-[#2D2D2D]/55">
                {level}
              </p>
            )}
            <p className="text-sm text-[#2D2D2D]/80 leading-relaxed">
              {shortDescription}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center rounded-full border border-[#4A5D4E]/30 bg-white/80 px-3.5 py-1.5 text-[0.8rem] font-medium text-[#2D2D2D] transition-colors hover:bg-[#F0E7DA]"
            >
              Läs mer
            </button>
            <button
              type="button"
              onClick={handleBook}
              className="inline-flex items-center rounded-full bg-[#F5F2ED] px-4 py-1.5 text-[0.8rem] font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 transition-colors hover:bg-[#E8E0D4]"
            >
              Boka
            </button>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/35 backdrop-blur-md px-3 sm:px-4 overscroll-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${id}-title`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[calc(100vh-1.25rem)] sm:max-h-[calc(100vh-2.5rem)] overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#4A5D4E]/12 bg-[#F5F2ED] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
            >
              <div className="flex flex-col h-full">
                <header className="relative border-b border-[#4A5D4E]/12 bg-[#F5F2ED] px-5 sm:px-6 py-4">
                  <div
                    className="mx-auto h-1.5 w-12 rounded-full bg-[#2D2D2D]/10 sm:hidden"
                    aria-hidden="true"
                  />
                  <div className="mt-3 sm:mt-0 flex items-start justify-between gap-4">
                    <div className="min-w-0 space-y-1.5">
                      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#2D2D2D]/60">
                        {category}
                      </p>
                      <h2
                        id={`${id}-title`}
                        className="font-serif text-xl sm:text-2xl text-[#2D2D2D] leading-tight"
                      >
                        {title}
                      </h2>
                      {level && (
                        <p className="text-[0.82rem] text-[#2D2D2D]/70">
                          {level}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#4A5D4E]/20 bg-white/70 text-xs text-[#2D2D2D] hover:bg-white"
                      aria-label="Stäng"
                    >
                      ✕
                    </button>
                  </div>
                </header>

                <div className="grid flex-1 min-h-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
                  <div className="relative hidden md:block bg-[#4A5D4E]/12">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                  </div>

                  <div className="min-h-0 px-5 sm:px-6 py-5 sm:py-6">
                    <div className="h-full overflow-y-auto overscroll-contain pr-1">
                      <div className="space-y-3 text-[0.95rem] leading-relaxed text-[#2D2D2D]/85">
                        {longDescription.split("\n").map((paragraph, index) => {
                          const text = paragraph.trim();
                          if (!text) return null;
                          return <p key={index}>{text}</p>;
                        })}
                      </div>
                      <div className="h-6" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <footer className="border-t border-[#4A5D4E]/12 bg-[#F5F2ED] px-5 sm:px-6 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-[0.8rem] text-[#2D2D2D]/70">
                      Yogakurser i Göteborg – boka yoga på Yogastudion.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center rounded-full border border-[#4A5D4E]/30 bg-white/85 px-3.5 py-1.5 text-[0.8rem] font-medium text-[#2D2D2D] hover:bg-[#F0E7DA]"
                      >
                        Stäng
                      </button>
                      <button
                        type="button"
                        onClick={handleBook}
                        className="inline-flex items-center rounded-full bg-[#F5F2ED] px-4 py-1.5 text-[0.8rem] font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 hover:bg-[#E8E0D4]"
                      >
                        Boka den här klassen
                      </button>
                    </div>
                  </div>
                </footer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CourseCard;

