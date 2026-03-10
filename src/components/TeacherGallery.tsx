import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GOLD = "#c8a96e";

type Teacher = {
  id: string;
  name: string;
  hook: string;
  bio: string;
  image?: string;
};

/** Exact image filenames in public/images/teachers (all .webp) */
const TEACHER_IMAGE_FILE: Record<string, string> = {
  "anki-bladh": "AnkiBladh.webp",
  "linda-dankert": "Linda Dankert.webp",
  "mathias-bengtsson": "MathiasBengtsson.webp",
  "malin-wattrning": "MalinWattring.webp",
  "jill-johansson": "JillJohansson.webp",
  "eva-lotta-sandberg": "EvaLottaSandberg.webp",
  "samson-telemichael": "SamsonTelemichael.webp",
  "lisbet-wikman": "LisbetWikman.webp",
};

function teacherImagePath(id: string): string {
  const file = TEACHER_IMAGE_FILE[id];
  return file ? `/images/teachers/${file}` : "";
}

/** object-position per lärare så att personen syns (horisontellt % vertikalt %) */
const TEACHER_OBJECT_POSITION: Record<string, string> = {
  "anki-bladh": "100% 50%",
  "linda-dankert": "100% 50%",
  "mathias-bengtsson": "100% 50%",
  "malin-wattrning": "40% 50%",
  "jill-johansson": "25% 50%",
  "eva-lotta-sandberg": "25% 50%",
  "samson-telemichael": "40% 50%",
  "lisbet-wikman": "25% 50%",
};

const TEACHERS: Teacher[] = [
  {
    id: "anki-bladh",
    name: "Anki Bladh",
    hook: "Kundalini & Yinyoga Flow – närvaro, kraft och mjuk rytm.",
    image: teacherImagePath("anki-bladh"),
    bio: `Anki är internationellt certifierad kundaliniyogalärare och meditationslärare, samt utbildad yinyoga flow-lärare.

På Yogastudion undervisar hon i Kundaliniyoga och Yinyoga Flow. Hon har en bakgrund som elitidrottare inom kanotsport och är också utbildad idrottsmassör.

Till vardags arbetar hon som gymnasielärare och specialpedagog. Utanför yogavärlden rör hon sig gärna i natur, resor och ett nyfiket utforskande av shamanism – alltid med människan, hälsan och den inre resan i fokus.`,
  },
  {
    id: "linda-dankert",
    name: "Linda Dankert",
    hook: "Kundalini, gravidyoga & mediyoga – tryggt, lugnt och inkännande.",
    image: teacherImagePath("linda-dankert"),
    bio: `Linda är internationellt certifierad kundaliniyogalärare och meditationslärare, instruktör i Mediyoga och utbildad gravidyogalärare. Hon är också utbildad i paryoga, mamma-bebisyoga och taktil massage.

Med en bakgrund som legitimerad sjuksköterska (med vidareutbildning inom intensivvård) kombinerar hon yogans verktyg med en varm, jordad förståelse för kropp och nervsystem.

Linda inspireras av hur vi kan styra vårt sinne för att må bra – och delar gärna praktiker som stöttar återhämtning, fokus och välmående.`,
  },
  {
    id: "mathias-bengtsson",
    name: "Mathias Bengtsson",
    hook: "Iyengar & Yoga för män – tydliga instruktioner, linjering och utveckling.",
    image: teacherImagePath("mathias-bengtsson"),
    bio: `Mathias började med Iyengaryoga 2014 och fastnade direkt för de tydliga instruktionerna och fokus på linjering – och att ställningarna går att anpassa efter var du befinner dig just nu.

På Yogastudion håller han klasser i Yoga för män och Iyengaryoga. Efter en fördjupningskurs påbörjade han yogalärarutbildning 2018 och är sedan 2022 internationellt certifierad Iyengaryogalärare.

För Mathias är yoga ett verktyg som följer med ut i livet: närvaro, personlig utveckling och en fin balans mellan fysisk träning, mental klarhet och vila.`,
  },
  {
    id: "malin-wattrning",
    name: "Malin Wättring",
    hook: "Kundalini, gong & mjuk kraft – en trygg plats utan krav.",
    image: teacherImagePath("malin-wattrning"),
    bio: `Malin är internationellt certifierad kundaliniyogalärare och gongspelare. På Yogastudion håller hon klasser i Yoga för musiker samt grundkurs i Kundaliniyoga. Hon är även utbildad i Sensing Yin och Reiki.

Utöver yogan arbetar Malin som frilansande jazzmusiker och kompositör. Hennes yogaresa började 2013, ur en längtan efter en läkande plats med mer stillhet, kontakt och närvaro.

Malins klasser är ofta mjuka och lugna, med ett varsamt utmanande inslag där du själv sätter nivån. Hon vill skapa en trygg miljö där du kan landa, fylla på och möta dig själv med vänlighet.`,
  },
  {
    id: "jill-johansson",
    name: "Jill Johansson",
    hook: "Yin, gravidyoga & shamanic yinflow – stillhet, livskraft och hjärta.",
    image: teacherImagePath("jill-johansson"),
    bio: `Jill ("Meher Tiaga Kaur") leder sina klasser med glädje och mjuk energi – inget ska lasta, bara lusta. Hon håller klasser i Yinyoga, Gravidyoga YinFlow och Shamanic YinFlow.

Hon har mediterat sedan 80-talet och yogan har varit en del av hennes vardag sedan tidigt 00-tal. Jill är utbildad kundaliniyogalärare (220h) och yinyogalärare (200h) samt har fördjupat sig inom shamanic yinflow och intuitivt gongspel.

För Jill är yogan en väg till stillhet, kraft och kontakt med det inre – och hon vill att alla ska få uppleva hur det känns när kroppen mjuknar och sinnet klarnar.`,
  },
  {
    id: "eva-lotta-sandberg",
    name: "Eva-Lotta Sandberg",
    hook: "Dansmeditation – frigörande rörelse och stillhet, i din egen rytm.",
    image: teacherImagePath("eva-lotta-sandberg"),
    bio: `Eva-Lotta håller klasser i Dansmeditation på Yogastudion. Hon är konstnärlig ledare och lärare i frigörande dans och certifierad Movement Medicine Apprentice.

Hon har praktiserat och lett grupper i frigörande dans och meditation i många år – med fokus på förutsättningslösa möten där kroppen får tala och sinnet får vila.

Med en trygg guidning bjuder hon in till mer närvaro, kreativitet och kontakt, genom rörelse som känns sann i stunden.`,
  },
  {
    id: "samson-telemichael",
    name: "Samson Telemichael",
    hook: "Healing & budskap – mjuk energi, återhämtning och klarhet.",
    image: teacherImagePath("samson-telemichael"),
    bio: `Samson brinner för att hjälpa människor och håller klasser i Healing och budskap på Yogastudion.

Hans resa började 2013 med Reiki, följt av vidare studier som medium och certifiering som Angelic Reiki Healer. Under sina sessioner håller han healing i grupp och kan även erbjuda privata behandlingar där bilder, symboler och budskap kan dyka upp.

Samson skapar ett tryggt rum där du får släppa taget, ta emot och hitta tillbaka till din inre stillhet.`,
  },
  {
    id: "lisbet-wikman",
    name: "Lisbet Wikman",
    hook: "Iyengar-metoden sedan 90-talet – erfarenhet, precision och omtanke.",
    image: teacherImagePath("lisbet-wikman"),
    bio: `Lisbet är internationellt certifierad inom Iyengar yoga och har undervisat sedan 90-talet. Hon har drivit yogastudio i många år och hållit retreats i Spanien, Portugal och Grekland. Sedan 2017 undervisar hon även online och som konsult.

För Lisbet är yoga en livsväg – och hon delar generöst sina erfarenheter från många av världens mest kunniga lärare.

Hennes klasser präglas av noggrannhet, värme och en trygg struktur som gör att du kan utvecklas steg för steg.`,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 1, y: 10 },
  visible: { opacity: 1, y: 0 },
};

/** Placeholder icon when no image - beige/gold style */
function PlaceholderAvatar() {
  return (
    <div className="flex flex-col items-center justify-center text-[#c8a96e]">
      <div className="h-6 w-6 rounded-full border border-current" />
      <div className="mt-1 h-7 w-[2px] bg-current" />
      <div className="mt-0.5 flex gap-2">
        <div className="h-4 w-[2px] bg-current -rotate-12" />
        <div className="h-4 w-[2px] bg-current rotate-12" />
      </div>
      <div className="mt-0.5 flex gap-3">
        <div className="h-4 w-[2px] bg-current" />
        <div className="h-4 w-[2px] bg-current" />
      </div>
    </div>
  );
}

export default function TeacherGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const teacher = useMemo(
    () => TEACHERS.find((t) => t.id === openId) ?? null,
    [openId]
  );

  useEffect(() => {
    if (!openId) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [openId]);

  useEffect(() => {
    if (!openId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openId]);

  return (
    <section aria-labelledby="teachers-heading" className="space-y-6">
      <div className="space-y-2 max-w-3xl">
        <p className="text-[0.7rem] tracking-[0.32em] uppercase text-[#2D2D2D]/60">
          Yogalärare
        </p>
        <h2
          id="teachers-heading"
          className="font-serif text-2xl sm:text-3xl text-[#2D2D2D]"
        >
          Möt våra lärare
        </h2>
        <p className="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
          Varje lärare bär sin egen röst – men alla delar samma intention: ett
          mjukt, tryggt rum där du kan landa, andas och växa i din takt.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TEACHERS.map((t) => (
          <motion.button
            key={t.id}
            variants={item}
            type="button"
            onClick={() => setOpenId(t.id)}
            className="group text-left rounded-[1.75rem] overflow-hidden border border-[#c8a96e]/20 bg-white/80 backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_28px_96px_rgba(0,0,0,0.12)] transition-shadow"
          >
            <div className="relative aspect-[4/3] bg-[#c8a96e]/10 overflow-hidden">
              {t.image ? (
                <img
                  src={t.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: TEACHER_OBJECT_POSITION[t.id] ?? "100% 50%" }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-[#c8a96e]/50 bg-[#F5F2ED]/95 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                    <PlaceholderAvatar />
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-serif text-lg text-white drop-shadow-md">
                  {t.name}
                </p>
              </div>
            </div>

            <div className="px-5 py-5 space-y-3">
              <p className="text-[0.75rem] uppercase tracking-[0.22em] text-[#2D2D2D]/55">
                Läs mer
              </p>
              <p className="text-sm text-[#2D2D2D]/80 leading-relaxed">
                {t.hook}
              </p>
              <span className="inline-flex items-center rounded-full bg-[#c8a96e]/15 px-3 py-1 text-[0.75rem] font-medium text-[#c8a96e]">
                Visa bio
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {teacher && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/35 backdrop-blur-md px-3 sm:px-4 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpenId(null);
            }}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="w-full max-w-3xl max-h-[calc(100vh-1.25rem)] sm:max-h-[calc(100vh-2.5rem)] overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#c8a96e]/20 bg-[#F5F2ED] shadow-[0_30px_90px_rgba(0,0,0,0.25)] relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby="teacher-dialog-title"
            >
              {/* Teacher image in right corner – part of background, fade-in */}
              {teacher.image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute right-0 top-0 bottom-0 w-[45%] max-w-[320px] z-0 hidden sm:block"
                  aria-hidden="true"
                >
                  <img
                    src={teacher.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-r-3xl"
                    style={{
                      objectPosition:
                        TEACHER_OBJECT_POSITION[teacher.id] ?? "100% 50%",
                    }}
                  />
                  {/* Fade from content into image */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F2ED] to-transparent"
                    aria-hidden="true"
                  />
                </motion.div>
              )}

              <div className="relative z-10 flex flex-col h-full min-h-0">
                {/* Content area: solid left, gradient fade so image shows in corner */}
                <div
                  className="flex-1 flex flex-col min-h-0 sm:max-w-[58%]"
                  style={{
                    background: "linear-gradient(to right, #F5F2ED 0%, #F5F2ED 92%, transparent 100%)",
                  }}
                >
                  <header className="border-b border-[#c8a96e]/15 px-5 sm:px-6 py-4 bg-[#F5F2ED]/95 shrink-0">
                    <div
                      className="mx-auto h-1.5 w-12 rounded-full bg-[#2D2D2D]/10 sm:hidden"
                      aria-hidden="true"
                    />
                    <div className="mt-3 sm:mt-0 flex items-start justify-between gap-4">
                      <div className="min-w-0 space-y-1.5">
                        <p className="text-[0.7rem] tracking-[0.32em] uppercase text-[#2D2D2D]/60">
                          Yogalärare
                        </p>
                        <h3
                          id="teacher-dialog-title"
                          className="font-serif text-xl sm:text-2xl text-[#2D2D2D] leading-tight"
                        >
                          {teacher.name}
                        </h3>
                        <p className="text-[0.9rem] text-[#2D2D2D]/75">
                          {teacher.hook}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenId(null)}
                        className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a96e]/25 bg-white/80 text-[#2D2D2D] hover:bg-white shrink-0"
                        aria-label="Stäng"
                      >
                        ✕
                      </button>
                    </div>
                  </header>

                  <div className="flex-1 min-h-0 px-5 sm:px-6 py-5 sm:py-6 overflow-y-auto overscroll-contain">
                    <div className="space-y-3 text-[0.95rem] leading-relaxed text-[#2D2D2D]/85">
                      {teacher.bio.split("\n").map((p, i) => {
                        const text = p.trim();
                        if (!text) return null;
                        return <p key={i}>{text}</p>;
                      })}
                    </div>
                    <div className="h-6" aria-hidden="true" />
                  </div>

                  <footer className="border-t border-[#c8a96e]/15 bg-[#F5F2ED]/98 px-5 sm:px-6 py-4 shrink-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <p className="text-[0.8rem] text-[#2D2D2D]/70">
                        Vill du boka yoga i Göteborg? Välj en klass och skicka en
                        mjuk förfrågan.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        <a
                          className="inline-flex items-center rounded-full px-4 py-1.5 text-[0.8rem] font-medium text-[#F5F2ED] shadow-sm hover:opacity-95 transition-opacity"
                          style={{ backgroundColor: GOLD }}
                          href={`/schema?teacher=${encodeURIComponent(
                            teacher.name
                          )}`}
                        >
                          Boka klass med {teacher.name}
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>

              {/* Mobile: small teacher image bottom-right with fade */}
              {teacher.image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute right-4 bottom-20 w-24 h-24 rounded-2xl overflow-hidden z-0 sm:hidden"
                  aria-hidden="true"
                >
                  <img
                    src={teacher.image}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition:
                        TEACHER_OBJECT_POSITION[teacher.id] ?? "100% 50%",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2ED]/90 to-transparent" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
