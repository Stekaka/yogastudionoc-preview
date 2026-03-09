import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@nanostores/react";
import {
  drawerOpen$,
  selectedClass$,
  bookingStep$,
  bookingName$,
  bookingEmail$,
  bookingMessage$,
  bookingStatus$,
  closeDrawer,
} from "../stores/booking";
import { DAY_LABELS } from "../data/classes";

function GiantInput({
  id,
  value,
  onChange,
  onKeyDown,
  placeholder,
  type = "text",
  hasValue,
  inputRef,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  placeholder: string;
  type?: "text" | "email";
  hasValue: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [focused, setFocused] = useState(false);
  const showPlaceholder = !hasValue && !focused;

  return (
    <div className="relative w-full">
      <motion.span
        className="pointer-events-none absolute left-0 top-0 text-[#1A1A1A]/35"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3.75rem)", fontWeight: 300 }}
        animate={{
          opacity: showPlaceholder ? 1 : 0,
          y: showPlaceholder ? 0 : -12,
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {placeholder}
      </motion.span>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border-b-2 border-[#1A1A1A]/15 bg-transparent pt-1 pb-3 text-[#1A1A1A] focus:border-[#8F9779] focus:outline-none"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.5rem, 4vw, 3.75rem)", fontWeight: 400 }}
      />
    </div>
  );
}

export default function BookingDrawer() {
  const isOpen = useStore(drawerOpen$);
  const selectedClass = useStore(selectedClass$);
  const step = useStore(bookingStep$);
  const name = useStore(bookingName$);
  const email = useStore(bookingEmail$);
  const message = useStore(bookingMessage$);
  const status = useStore(bookingStatus$);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
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
          message: message.trim() || undefined,
          classId: selectedClass.id,
          instructorId: selectedClass.instructorId,
          classTitle: selectedClass.title,
          day: selectedClass.day,
          time: selectedClass.time,
          duration: selectedClass.duration,
        }),
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

  const handleNameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") { e.preventDefault(); goToEmail(); }
  };
  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") { e.preventDefault(); goToSubmit(); }
  };

  if (!selectedClass) return null;
  const dayLabel = DAY_LABELS[selectedClass.day];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[90vh] flex-col overflow-hidden rounded-t-[2rem] border-t border-[#8F9779]/10 bg-[#FAF9F6]/90 shadow-2xl backdrop-blur-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
          >
            <div className="flex flex-1 flex-col overflow-hidden">
              <header className="flex shrink-0 items-center justify-between px-6 py-5">
                <h2 id="drawer-title" className="text-xl text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Boka pass
                </h2>
                <motion.button
                  type="button"
                  onClick={closeDrawer}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#1A1A1A]/60 hover:bg-[#8F9779]/10 hover:text-[#1A1A1A]"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Stäng"
                >
                  ✕
                </motion.button>
              </header>

              <div className="shrink-0 border-b border-[#8F9779]/10 px-6 pb-4">
                <p className="text-lg font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {selectedClass.title}
                </p>
                <p className="mt-0.5 text-sm text-[#1A1A1A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {dayLabel} {selectedClass.time} · {selectedClass.instructor}
                </p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-10">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 28, stiffness: 260 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 18, stiffness: 200, delay: 0.1 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#8F9779]/20"
                    >
                      <motion.span
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.4 }}
                        className="text-4xl text-[#8F9779]"
                      >
                        ✓
                      </motion.span>
                    </motion.div>
                    <p className="text-2xl font-semibold text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Tack
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#1A1A1A]/70" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedClass.instructor} återkommer med bekräftelse till din e-post.
                    </p>
                    <motion.button
                      type="button"
                      onClick={closeDrawer}
                      className="mt-8 rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-medium text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Stäng
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="mx-auto max-w-xl space-y-12">
                    <AnimatePresence mode="wait">
                      {step === "name" && (
                        <motion.div
                          key="name"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ type: "spring", damping: 28, stiffness: 260 }}
                          className="space-y-6"
                        >
                          <p className="text-sm text-[#1A1A1A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Vad heter du?
                          </p>
                          <GiantInput
                            id="drawer-name"
                            value={name}
                            onChange={(v) => bookingName$.set(v)}
                            onKeyDown={handleNameKeyDown}
                            placeholder="Ditt namn"
                            hasValue={name.length > 0}
                            inputRef={nameInputRef}
                          />
                          <motion.button
                            type="button"
                            onClick={goToEmail}
                            disabled={!name.trim()}
                            className="rounded-full bg-[#8F9779] px-8 py-3.5 text-base font-medium text-white disabled:opacity-40"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Fortsätt
                          </motion.button>
                        </motion.div>
                      )}

                      {step === "email" && (
                        <motion.div
                          key="email"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ type: "spring", damping: 28, stiffness: 260 }}
                          className="space-y-6"
                        >
                          <p className="text-sm text-[#1A1A1A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Din e-post?
                          </p>
                          <GiantInput
                            id="drawer-email"
                            type="email"
                            value={email}
                            onChange={(v) => bookingEmail$.set(v)}
                            onKeyDown={handleEmailKeyDown}
                            placeholder="din@epost.se"
                            hasValue={email.length > 0}
                            inputRef={emailInputRef}
                          />
                          <motion.button
                            type="button"
                            onClick={goToSubmit}
                            disabled={!email.trim()}
                            className="rounded-full bg-[#8F9779] px-8 py-3.5 text-base font-medium text-white disabled:opacity-40"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Fortsätt
                          </motion.button>
                        </motion.div>
                      )}

                      {step === "message" && (
                        <motion.div
                          key="message"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ type: "spring", damping: 28, stiffness: 260 }}
                          className="space-y-8"
                        >
                          <p className="text-sm text-[#1A1A1A]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Något du vill berätta? (valfritt)
                          </p>
                          <textarea
                            value={message}
                            onChange={(e) => bookingMessage$.set(e.target.value)}
                            placeholder="T.ex. erfarenhet eller önskemål"
                            rows={2}
                            className="w-full border-b-2 border-[#1A1A1A]/15 bg-transparent pb-2 text-lg text-[#1A1A1A] placeholder-[#1A1A1A]/35 focus:border-[#8F9779] focus:outline-none resize-none"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          />
                          {status === "error" && (
                            <p className="text-sm text-red-600">Något gick fel. Försök igen.</p>
                          )}
                          <motion.button
                            type="button"
                            onClick={submitBooking}
                            disabled={status === "loading"}
                            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1A1A1A] py-4 text-base font-medium text-white disabled:opacity-70"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {status === "loading" ? (
                              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            ) : status === "success" ? (
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xl">✓</span>
                            ) : (
                              "Boka min plats"
                            )}
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
