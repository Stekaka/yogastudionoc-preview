import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const TEACHER_OPTIONS = [
  "Anki Bladh",
  "Linda Dankert",
  "Mathias Bengtsson",
  "Malin Wättring",
  "Jill Johansson",
  "Pernille Björkli",
  "Eva-Lotta Sandberg",
  "Samson Telemichael",
  "Lisbet Wikman",
] as const;

type TeacherOption = (typeof TEACHER_OPTIONS)[number];

interface StatusMessage {
  type: "success" | "error";
  text: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const BookingForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teacher, setTeacher] = useState<string>("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusMessage | null>(null);

  const options = useMemo(() => {
    const trimmed = teacher.trim();
    if (!trimmed) return TEACHER_OPTIONS as readonly string[];
    if ((TEACHER_OPTIONS as readonly string[]).includes(trimmed)) return TEACHER_OPTIONS;
    return [trimmed, ...TEACHER_OPTIONS];
  }, [teacher]);

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<{ teacher?: string }>;
      const incoming = custom.detail?.teacher;
      if (incoming && typeof incoming === "string") {
        setTeacher(incoming);
        setStatus(null);
      }
    };

    window.addEventListener("booking:select", handler as EventListener);
    return () => {
      window.removeEventListener("booking:select", handler as EventListener);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          teacher,
          date,
          note,
        }),
      });

      if (!res.ok) {
        throw new Error("Något gick fel vid bokningen.");
      }

      setStatus({
        type: "success",
        text: "Tack för din bokningsförfrågan! Vi återkommer med bekräftelse.",
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
        text: "Vi kunde inte skicka din bokning just nu. Försök igen om en stund.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.06 }}
      className="space-y-4"
      aria-label="Bokningsformulär för Yogastudion"
    >
      <motion.div variants={fadeInUp} className="space-y-1.5">
        <label htmlFor="name" className="text-xs font-medium text-[#2D2D2D]/80">
          Namn
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent"
          placeholder="Ditt namn"
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-medium text-[#2D2D2D]/80">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent"
          placeholder="din@mail.se"
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-1.5">
        <label htmlFor="teacher" className="text-xs font-medium text-[#2D2D2D]/80">
          Välj klass/lärare
        </label>
        <select
          id="teacher"
          name="teacher"
          required
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          className="w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent"
        >
          <option value="">Välj lärare</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-1.5">
        <label htmlFor="date" className="text-xs font-medium text-[#2D2D2D]/80">
          Önskat datum
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent"
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-1.5">
        <label htmlFor="note" className="text-xs font-medium text-[#2D2D2D]/80">
          Meddelande (valfritt)
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-xl border border-[#4A5D4E]/20 bg-white/70 px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/40 focus:outline-none focus:ring-2 focus:ring-[#4A5D4E]/60 focus:border-transparent resize-none"
          placeholder="Berätta kort om din erfarenhet eller önskemål."
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="pt-1 flex flex-col gap-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex justify-center items-center rounded-full bg-[#F5F2ED] px-4 py-2.5 text-sm font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 hover:bg-[#E8E0D4] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? "Skickar..." : "Skicka bokningsförfrågan"}
        </button>
        {status && (
          <p
            className={`text-xs ${
              status.type === "success" ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {status.text}
          </p>
        )}
      </motion.div>
    </motion.form>
  );
};

export default BookingForm;

