import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Teacher = {
  id: string;
  name: string;
  hook: string;
  bio: string;
};

const TEACHERS: Teacher[] = [
  {
    id: "anki-bladh",
    name: "Anki Bladh",
    hook: "Kundalini & Yinyoga Flow – närvaro, kraft och mjuk rytm.",
    bio: `Anki är internationellt certifierad kundaliniyogalärare och meditationslärare, samt utbildad yinyoga flow-lärare.

På Yogastudion undervisar hon i Kundaliniyoga och Yinyoga Flow. Hon har en bakgrund som elitidrottare inom kanotsport och är också utbildad idrottsmassör.

Till vardags arbetar hon som gymnasielärare och specialpedagog. Utanför yogavärlden rör hon sig gärna i natur, resor och ett nyfiket utforskande av shamanism – alltid med människan, hälsan och den inre resan i fokus.`,
  },
  {
    id: "linda-dankert",
    name: "Linda Dankert",
    hook: "Kundalini, gravidyoga & mediyoga – tryggt, lugnt och inkännande.",
    bio: `Linda är internationellt certifierad kundaliniyogalärare och meditationslärare, instruktör i Mediyoga och utbildad gravidyogalärare. Hon är också utbildad i paryoga, mamma-bebisyoga och taktil massage.

Med en bakgrund som legitimerad sjuksköterska (med vidareutbildning inom intensivvård) kombinerar hon yogans verktyg med en varm, jordad förståelse för kropp och nervsystem.

Linda inspireras av hur vi kan styra vårt sinne för att må bra – och delar gärna praktiker som stöttar återhämtning, fokus och välmående.`,
  },
  {
    id: "mathias-bengtsson",
    name: "Mathias Bengtsson",
    hook: "Iyengar & Yoga för män – tydliga instruktioner, linjering och utveckling.",
    bio: `Mathias började med Iyengaryoga 2014 och fastnade direkt för de tydliga instruktionerna och fokus på linjering – och att ställningarna går att anpassa efter var du befinner dig just nu.

På Yogastudion håller han klasser i Yoga för män och Iyengaryoga. Efter en fördjupningskurs påbörjade han yogalärarutbildning 2018 och är sedan 2022 internationellt certifierad Iyengaryogalärare.

För Mathias är yoga ett verktyg som följer med ut i livet: närvaro, personlig utveckling och en fin balans mellan fysisk träning, mental klarhet och vila.`,
  },
  {
    id: "malin-wattrning",
    name: "Malin Wättring",
    hook: "Kundalini, gong & mjuk kraft – en trygg plats utan krav.",
    bio: `Malin är internationellt certifierad kundaliniyogalärare och gongspelare. På Yogastudion håller hon klasser i Yoga för musiker samt grundkurs i Kundaliniyoga. Hon är även utbildad i Sensing Yin och Reiki.

Utöver yogan arbetar Malin som frilansande jazzmusiker och kompositör. Hennes yogaresa började 2013, ur en längtan efter en läkande plats med mer stillhet, kontakt och närvaro.

Malins klasser är ofta mjuka och lugna, med ett varsamt utmanande inslag där du själv sätter nivån. Hon vill skapa en trygg miljö där du kan landa, fylla på och möta dig själv med vänlighet.`,
  },
  {
    id: "jill-johansson",
    name: "Jill Johansson",
    hook: "Yin, gravidyoga & shamanic yinflow – stillhet, livskraft och hjärta.",
    bio: `Jill (“Meher Tiaga Kaur”) leder sina klasser med glädje och mjuk energi – inget ska lasta, bara lusta. Hon håller klasser i Yinyoga, Gravidyoga YinFlow och Shamanic YinFlow.

Hon har mediterat sedan 80-talet och yogan har varit en del av hennes vardag sedan tidigt 00-tal. Jill är utbildad kundaliniyogalärare (220h) och yinyogalärare (200h) samt har fördjupat sig inom shamanic yinflow och intuitivt gongspel.

För Jill är yogan en väg till stillhet, kraft och kontakt med det inre – och hon vill att alla ska få uppleva hur det känns när kroppen mjuknar och sinnet klarnar.`,
  },
  {
    id: "pernille-bjorkli",
    name: "Pernille Björkli",
    hook: "Mindful flow, ceremonier & embodied healing – bohemiskt, varmt och närande.",
    bio: `Pernille bär en bohemisk anda och en stor passion för mindful living, resor och en hälsosam livsstil. Hon håller internationella retreater via sin plattform Boho Glow Yoga och skapar även månceremonier och cirklar.

I sina klasser väver hon samman andning, rörelse, guidade meditationer och healing – ett heligt utrymme där du får utforska dig själv utan att prestera.

Målet är att du ska gå härifrån med mer näring, energi och balans – och känslan av att vara väl omhändertagen, oavsett var du är i livet.`,
  },
  {
    id: "eva-lotta-sandberg",
    name: "Eva-Lotta Sandberg",
    hook: "Dansmeditation – frigörande rörelse och stillhet, i din egen rytm.",
    bio: `Eva-Lotta håller klasser i Dansmeditation på Yogastudion. Hon är konstnärlig ledare och lärare i frigörande dans och certifierad Movement Medicine Apprentice.

Hon har praktiserat och lett grupper i frigörande dans och meditation i många år – med fokus på förutsättningslösa möten där kroppen får tala och sinnet får vila.

Med en trygg guidning bjuder hon in till mer närvaro, kreativitet och kontakt, genom rörelse som känns sann i stunden.`,
  },
  {
    id: "samson-telemichael",
    name: "Samson Telemichael",
    hook: "Healing & budskap – mjuk energi, återhämtning och klarhet.",
    bio: `Samson brinner för att hjälpa människor och håller klasser i Healing och budskap på Yogastudion.

Hans resa började 2013 med Reiki, följt av vidare studier som medium och certifiering som Angelic Reiki Healer. Under sina sessioner håller han healing i grupp och kan även erbjuda privata behandlingar där bilder, symboler och budskap kan dyka upp.

Samson skapar ett tryggt rum där du får släppa taget, ta emot och hitta tillbaka till din inre stillhet.`,
  },
  {
    id: "lisbet-wikman",
    name: "Lisbet Wikman",
    hook: "Iyengar-metoden sedan 90-talet – erfarenhet, precision och omtanke.",
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
  // Keep cards visible even without hydration; animate subtly on view.
  hidden: { opacity: 1, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
            className="group text-left rounded-[1.75rem] overflow-hidden border border-[#4A5D4E]/12 bg-white/65 backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.10)] hover:shadow-[0_28px_96px_rgba(0,0,0,0.14)] transition-shadow"
          >
            <div className="relative aspect-[4/3] bg-[#4A5D4E]/8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-[#4A5D4E]/70 bg-[#F5F2ED]/95 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                  <div className="flex flex-col items-center justify-center text-[#4A5D4E]">
                    <div className="h-6 w-6 rounded-full border border-[#4A5D4E]" />
                    <div className="mt-1 h-7 w-[2px] bg-[#4A5D4E]" />
                    <div className="mt-0.5 flex gap-2">
                      <div className="h-4 w-[2px] bg-[#4A5D4E] -rotate-12" />
                      <div className="h-4 w-[2px] bg-[#4A5D4E] rotate-12" />
                    </div>
                    <div className="mt-0.5 flex gap-3">
                      <div className="h-4 w-[2px] bg-[#4A5D4E]" />
                      <div className="h-4 w-[2px] bg-[#4A5D4E]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-serif text-lg text-white drop-shadow">
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
              <span className="inline-flex items-center rounded-full bg-[#4A5D4E]/10 px-3 py-1 text-[0.75rem] font-medium text-[#4A5D4E]">
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
              className="w-full max-w-3xl max-h-[calc(100vh-1.25rem)] sm:max-h-[calc(100vh-2.5rem)] overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#4A5D4E]/12 bg-[#F5F2ED] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="teacher-dialog-title"
            >
              <div className="flex flex-col h-full">
                <header className="border-b border-[#4A5D4E]/12 px-5 sm:px-6 py-4 bg-[#F5F2ED]">
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
                      className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#4A5D4E]/20 bg-white/70 text-xs text-[#2D2D2D] hover:bg-white"
                      aria-label="Stäng"
                    >
                      ✕
                    </button>
                  </div>
                </header>

                <div className="flex-1 min-h-0 px-5 sm:px-6 py-5 sm:py-6">
                  <div className="h-full overflow-y-auto overscroll-contain pr-1">
                    <div className="space-y-3 text-[0.95rem] leading-relaxed text-[#2D2D2D]/85">
                      {teacher.bio.split("\n").map((p, i) => {
                        const text = p.trim();
                        if (!text) return null;
                        return <p key={i}>{text}</p>;
                      })}
                    </div>
                    <div className="h-6" aria-hidden="true" />
                  </div>
                </div>

                <footer className="border-t border-[#4A5D4E]/12 bg-[#F5F2ED] px-5 sm:px-6 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-[0.8rem] text-[#2D2D2D]/70">
                      Vill du boka yoga i Göteborg? Välj en klass och skicka en
                      mjuk förfrågan.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setOpenId(null)}
                        className="inline-flex items-center rounded-full border border-[#4A5D4E]/30 bg-transparent px-3.5 py-1.5 text-[0.8rem] font-medium text-[#2D2D2D] hover:bg-[#4A5D4E]/5"
                      >
                        Stäng
                      </button>
                      <a
                        className="inline-flex items-center rounded-full bg-[#4A5D4E] px-4 py-1.5 text-[0.8rem] font-medium text-[#F5F2ED] shadow-sm hover:bg-[#3c4c40]"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

