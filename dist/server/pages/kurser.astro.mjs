import { f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CUVSL_N1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D_QoQTCr.mjs';
import { W as WeeklySchedule } from '../chunks/WeeklySchedule_DaJKhZbN.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 }
};
const modalVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};
const CourseCard = ({
  id,
  title,
  category,
  badgeLabel,
  shortDescription,
  longDescription,
  imageUrl,
  level,
  courseType,
  suggestedTeacher
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
    const onKeyDown = (event) => {
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
            detail: { teacher: suggestedTeacher }
          })
        );
      }
      window.dispatchEvent(
        new CustomEvent("booking:course", {
          detail: { courseType, title }
        })
      );
      const bookingEl = document.getElementById("boka");
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.article,
      {
        layoutId: id,
        variants: cardVariants,
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: "group relative flex flex-col overflow-hidden rounded-3xl border border-[#4A5D4E]/12 bg-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.12)]",
        "aria-label": title,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-[#4A5D4E]/10", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: imageUrl,
                alt: title,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-4 bottom-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#2D2D2D]", children: badgeLabel }),
              /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-[#F5F2ED] px-3 py-1 text-[0.7rem] font-medium text-[#4A5D4E] border border-[#4A5D4E]/25", children: category })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg sm:text-xl text-[#2D2D2D]", children: title }),
              level && /* @__PURE__ */ jsx("p", { className: "text-[0.75rem] uppercase tracking-[0.22em] text-[#2D2D2D]/55", children: level }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-[#2D2D2D]/80 leading-relaxed", children: shortDescription })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setOpen(true),
                  className: "inline-flex items-center rounded-full border border-[#4A5D4E]/30 bg-white/80 px-3.5 py-1.5 text-[0.8rem] font-medium text-[#2D2D2D] transition-colors hover:bg-[#F0E7DA]",
                  children: "Läs mer"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: handleBook,
                  className: "inline-flex items-center rounded-full bg-[#F5F2ED] px-4 py-1.5 text-[0.8rem] font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 transition-colors hover:bg-[#E8E0D4]",
                  children: "Boka"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/35 backdrop-blur-md px-3 sm:px-4 overscroll-contain",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onMouseDown: (e) => {
          if (e.target === e.currentTarget) setOpen(false);
        },
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": `${id}-title`,
            variants: modalVariants,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            transition: { duration: 0.3, ease: "easeOut" },
            className: "relative w-full max-w-3xl max-h-[calc(100vh-1.25rem)] sm:max-h-[calc(100vh-2.5rem)] overflow-hidden rounded-t-3xl sm:rounded-3xl border border-[#4A5D4E]/12 bg-[#F5F2ED] shadow-[0_30px_90px_rgba(0,0,0,0.28)]",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
              /* @__PURE__ */ jsxs("header", { className: "relative border-b border-[#4A5D4E]/12 bg-[#F5F2ED] px-5 sm:px-6 py-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "mx-auto h-1.5 w-12 rounded-full bg-[#2D2D2D]/10 sm:hidden",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "mt-3 sm:mt-0 flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0 space-y-1.5", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[0.7rem] uppercase tracking-[0.22em] text-[#2D2D2D]/60", children: category }),
                    /* @__PURE__ */ jsx(
                      "h2",
                      {
                        id: `${id}-title`,
                        className: "font-serif text-xl sm:text-2xl text-[#2D2D2D] leading-tight",
                        children: title
                      }
                    ),
                    level && /* @__PURE__ */ jsx("p", { className: "text-[0.82rem] text-[#2D2D2D]/70", children: level })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setOpen(false),
                      className: "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#4A5D4E]/20 bg-white/70 text-xs text-[#2D2D2D] hover:bg-white",
                      "aria-label": "Stäng",
                      children: "✕"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid flex-1 min-h-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative hidden md:block bg-[#4A5D4E]/12", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: imageUrl,
                      alt: title,
                      className: "h-full w-full object-cover",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "min-h-0 px-5 sm:px-6 py-5 sm:py-6", children: /* @__PURE__ */ jsxs("div", { className: "h-full overflow-y-auto overscroll-contain pr-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "space-y-3 text-[0.95rem] leading-relaxed text-[#2D2D2D]/85", children: longDescription.split("\n").map((paragraph, index) => {
                    const text = paragraph.trim();
                    if (!text) return null;
                    return /* @__PURE__ */ jsx("p", { children: text }, index);
                  }) }),
                  /* @__PURE__ */ jsx("div", { className: "h-6", "aria-hidden": "true" })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("footer", { className: "border-t border-[#4A5D4E]/12 bg-[#F5F2ED] px-5 sm:px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[0.8rem] text-[#2D2D2D]/70", children: "Yogakurser i Göteborg – boka yoga på Yogastudion." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 justify-end", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setOpen(false),
                      className: "inline-flex items-center rounded-full border border-[#4A5D4E]/30 bg-white/85 px-3.5 py-1.5 text-[0.8rem] font-medium text-[#2D2D2D] hover:bg-[#F0E7DA]",
                      children: "Stäng"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleBook,
                      className: "inline-flex items-center rounded-full bg-[#F5F2ED] px-4 py-1.5 text-[0.8rem] font-medium text-[#4A5D4E] shadow-sm border border-[#4A5D4E]/25 hover:bg-[#E8E0D4]",
                      children: "Boka den här klassen"
                    }
                  )
                ] })
              ] }) })
            ] })
          }
        )
      }
    ) })
  ] });
};

const $$Kurser = createComponent(($$result, $$props, $$slots) => {
  const kundaliniCourses = [
    {
      id: "kundaliniyoga",
      title: "Kundaliniyoga",
      category: "Kundaliniyoga",
      badgeLabel: "Kraftfull yoga",
      level: "Alla kan delta \u2013 nyb\xF6rjare som erfarna",
      shortDescription: "Alla kan delta, nyb\xF6rjare som erfarna, helt utan prestation.",
      longDescription: `Alla kan delta, nyb\xF6rjare som erfarna, helt utan prestation.

Kundaliniyoga \xE4r en fysisk, mental och andlig form av yoga som best\xE5r av r\xF6relser, andnings- och fokuseringstekniker, avslappning samt olika typer av meditationer och mantra. Det handlar om enkla men kraftfulla tekniker d\xE4r du i din eget takt st\xE4rker dig sj\xE4lv, finner lugnet p\xE5 insidan samtidigt som kroppen och sinnet blir mer flexibelt. Fokus ligger snarare p\xE5 kraft och uth\xE5llighet \xE4n p\xE5 avancerade kroppsst\xE4llningar, vi tr\xE4nar v\xE5r n\xE4rvaro i tid, vilket f\xE5r positiva effekter i v\xE5r \xF6vriga vardag. Yoga \xE4r till f\xF6r alla, oavsett \xE5lder, k\xF6n och r\xF6rlighet - anpassning \xE4r alltid m\xF6jlig utifr\xE5n dina f\xF6ruts\xE4ttningar.

Vi g\xF6r ett yogapass och efter det f\xE5r vi en sk\xF6n stund f\xF6r \xE5terh\xE4mtning i Savasana, och p\xE5 Malins klasser lyssnar vi till gongarnas l\xE4kande vibrationer som tar oss till djup avslappning. Sedan avslutar vi med en meditation.`,
      imageUrl: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "kundaliniyoga",
      suggestedTeacher: "Stina"
    },
    {
      id: "gravidyoga",
      title: "Gravidyoga",
      category: "Kundaliniyoga",
      badgeLabel: "Gravid",
      level: "Lugn yoga med fokus p\xE5 andning, uth\xE5llighet och trygghet",
      shortDescription: "Gravidyoga \xE4r en lugn form av yoga d\xE4r stor vikt l\xE4ggs p\xE5 andning, fokus och uth\xE5llighetstr\xE4ning.",
      longDescription: `Gravidyoga \xE4r en lugn form av yoga och stor vikt l\xE4ggs p\xE5 andning, fokus och uth\xE5llighetstr\xE4ning, som \xE4r av stor vikt f\xF6r en lyckad f\xF6rlossning.

V\xE5r gravidyoga inneh\xE5ller yoga, meditationer och andningsteknik som f\xF6rbereder dig f\xF6r v\xE4rkarbete, f\xF6rlossning och att bli mamma. Du f\xF6rb\xE4ttrar din h\xE4lsa, sj\xE4lvstyrka och k\xE4nsla av v\xE4lm\xE5ende. En m\xE4nniska som andas lugnt och djupt \xE4r lugnare och k\xE4nner sig tryggare! Gravidyogan reducerar stress och verkar lugnande s\xE5 att du och din baby m\xE5r s\xE5 bra som m\xF6jligt. Yogapassen genomf\xF6rs i ett lugnt tempo med olika st\xE4llningar och yoga\xF6vningar f\xF6r flexibilitet och styrka, kombinerat med andningsteknik och koncentration. Meditation ing\xE5r i kursen.

V\xE5r Gravidyoga \xE4r inte en f\xF6rlossningsskola men det du tr\xE4nar under kursen hj\xE4lper och st\xF6ttar dig igenom utmaningar, f\xF6r\xE4ndringar och din f\xF6rlossning. Om du \xE4r tr\xE4nings-van och har behov av kraftfull h\xE5rd tr\xE4ning d\xE4r du svettas rekommenderar vi att b\xF6rja lite senare i graviditeten. M\xE5nga av v\xE5ra elever \xF6nskar dock att de hade b\xF6rjat tidigare!

Graviditetsprocessen \xE4r en transformerande fas med stora f\xF6r\xE4ndringar. Gravidyogaklasserna ger dig m\xF6jlighet att vara med andra som g\xE5r igenom liknande erfarenheter.`,
      imageUrl: "https://images.pexels.com/photos/8436582/pexels-photo-8436582.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "gravidyoga"
    }
  ];
  const yinCourses = [
    {
      id: "yinyoga",
      title: "Yinyoga",
      category: "Yinyoga",
      badgeLabel: "Mjuk yoga",
      level: "Stillsam & meditativ yoga \u2013 inga f\xF6rkunskaper kr\xE4vs",
      shortDescription: "Yinyogan \xE4r en stillsam och meditativ yoga.",
      longDescription: `Yinyogan \xE4r en stillsam och meditativ yoga. Den \xE4r kursen \xE4r f\xF6r dig som vill hitta ett inre lugn och stabilitet samt f\xE5 tillg\xE5ng till mer kraft och energi. Medveten n\xE4rvaro f\xF6ljer som en r\xF6d tr\xE5d genom klassen. Yinyogan \xE4r \xE5terh\xE4mtande och ett fint komplement till mer fysiska aktiviteter. Ibland anv\xE4nder vi n\xE5gon lugn andnings\xF6vning d\xE4r vi stillar sinnet lite extra. \xC4r du lite stel eller k\xE4nner dig stressad passar den h\xE4r yogaformen perfekt. Inga f\xF6rkunskaper kr\xE4vs.

Du \xE4r v\xE4lkommen att boka kurs eller komma p\xE5 enstaka pass i m\xE5n av plats`,
      imageUrl: "https://images.pexels.com/photos/3735479/pexels-photo-3735479.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "yinyoga",
      suggestedTeacher: "Layza"
    },
    {
      id: "yin-flow",
      title: "Yinyoga med Yin Flow",
      category: "Yinyoga",
      badgeLabel: "Yin Flow",
      level: "Mjuka, fl\xF6dande r\xF6relser \u2192 stillhet & djupavslappning",
      shortDescription: "Yinyoga med Yin Flow, \xE4r en lugn yogapraktik med yinkvalitet som st\xF6djer varje individs kropp och f\xF6ruts\xE4ttningar.",
      longDescription: `Yinyoga med Yin Flow \xE4r en lugn yogapraktik med yinkvalitet som st\xF6djer varje individs kropp och f\xF6ruts\xE4ttningar.

Vi g\xE5r varsamt in i yinyogapositionerna med mjuka, fl\xF6dande och vaggande r\xF6relser som l\xE4nkas samman med v\xE5rt andetag f\xF6r att sedan stanna i stillhet och djupavslappning.

Denna metod passar dig som vill komma \xE5t s\xE5v\xE4l fl\xF6det som stillheten samt anpassa din yinyogapraktik efter dina individuella behov och \xF6nskem\xE5l. Vi r\xF6r oss intuitivt med slutna \xF6gon och har m\xF6jlighet att lyssna in\xE5t och ge v\xE5r kropp frihet att r\xF6ra sig i den takt den vill, bortom form, prestige och prestation.

Vi p\xE5verkar v\xE5ra yindelar i kroppen genom att t\xF6ja och st\xE4rka inre djupt liggande strukturer som leder, ben och bindv\xE4v samt v\xE5r kropps energisystem med dess chakrasystem.

Vi st\xE4rker och balanserar energisystemet ytterligare genom att l\xE4gga till lugnande andnings\xF6vningar anpassat f\xF6r yin.

\u201CWe don\u2019t use or body to get into a pose, we use the pose to get into our body\u201D
\u2014 Bernie Clark

F\xF6rdelar med Intuitiv Yinyoga
\u2022 Passar alla
\u2022 Ger avslappning p\xE5 djupet
\u2022 Balanserar v\xE5r livskraft
\u2022 Frig\xF6r b\xE5de inre och yttre sp\xE4nningar
\u2022 Lugnande f\xF6r sinnet
\u2022 \xD6kar v\xE5r kroppsmedvetenhet
\u2022 Bygger upp smidighet och r\xF6rlighet
\u2022 Lugnande och balanserande f\xF6r nervsystemet
\u2022 Tr\xE4nar n\xE4rvaro i nuet, mindfulness
\u2022 Reducerar stress
\u2022 Balanserar v\xE5rt hormonsystem, \xE4mnesoms\xE4ttning
\u2022 Ett bra komplement till dynamisk yangtr\xE4ning
\u2022 Ger b\xE4ttre s\xF6mn

S\xE5 h\xE4r g\xE5r det till:
Vi hittar l\xE5ngsamt in i varje yinyogaposition genom att f\xF6rst intuitivt gunga, vagga och r\xF6ra oss i cirkel-, spiral och v\xE5gr\xF6relser f\xF6r att mjuka upp och ta kontakt med omr\xE5det. Sedan stannar vi, slappnar av, andas medvetet och h\xE5ller positionen mellan tre till fem minuter. D\xE4refter g\xE5r vi f\xF6rsiktigt ur positionen och forts\xE4tter fl\xF6da in till n\xE4sta position.`,
      imageUrl: "https://images.pexels.com/photos/8436523/pexels-photo-8436523.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "yinyoga-flow",
      suggestedTeacher: "Layza"
    }
  ];
  const medCourses = [
    {
      id: "medicinsk-yoga",
      title: "Medicinsk Yoga",
      category: "Medicinsk Yoga",
      badgeLabel: "L\xE4kande yoga",
      level: "F\xF6r stress, \xE5terh\xE4mtning och hormonbalans",
      shortDescription: "Medicinsk Yoga \xE4r en lugnare yogaform som bygger p\xE5 Kundaliniyogan men \xE4r mindre fysiskt kr\xE4vande.",
      longDescription: `Medicinsk Yoga \xE4r en lugnare yogaform som bygger p\xE5 Kundaliniyogan men \xE4r mindre fysiskt kr\xE4vande. Vi g\xF6r mjuka ink\xE4nnande r\xF6relser tillsammans med olika andningstekniker.

Vi l\xE4gger stor vikt p\xE5 djup avslappning. Vi tar oss tid att stanna upp och h\xE4mta kraft och energi. Forskning visar att medicinsk yoga \xE4r mycket gynnsam vid stressrelaterade symtom, oro, \xE5ngest, depression, s\xF6mnst\xF6rningar, h\xF6gt blodtryck samt ryggbesv\xE4r.

Det \xE4r viktigt att du meddelar innan kursen om du har n\xE5gon sjukdom som vi beh\xF6ver k\xE4nna till.

Det finns \xE4ven yoga f\xF6r kvinnans hormonbalans - \xE4r en anpassning av v\xE5ra medicinska yogakurser!

Vi arbetar med att balansera v\xE5ra hormoner, som ibland kan ge oss olika besv\xE4r av b\xE5de fysisk, mental och emotionell karakt\xE4r. Under alla livets skeden. V\xE4nder sig till alla kvinnor och framf\xF6rallt till dig som lider av PMS och klimakteriebesv\xE4r.

Klicka p\xE5 boka kurs h\xE4r nedan och scrolla fram Medicinskyoga kurs f\xF6r bokning och anm\xE4lan.`,
      imageUrl: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "medicinsk-yoga",
      suggestedTeacher: "Stina"
    }
  ];
  const specialCourses = [
    {
      id: "yoga-for-musiker",
      title: "Yoga f\xF6r musiker",
      category: "Specialklass",
      badgeLabel: "F\xF6r musiker",
      level: "Torsdagar kl 17\u201318 (\xF6ppna klasser)",
      shortDescription: "Yoga f\xF6r musiker \xE4r klasser s\xE4rskilt utformade f\xF6r dig som \xE4r professionell musiker eller musikstuderande.",
      longDescription: `Att arbeta med musik \xE4r b\xE5de inspirerande och givande \u2013 vi f\xE5r uttrycka oss kreativt, m\xF6ta fantastiska m\xE4nniskor och resa v\xE4rlden \xF6ver. Men det \xE4r ocks\xE5 ett yrke som st\xE4ller h\xF6ga krav: sena kv\xE4llar, oregelbundna arbetstider, sv\xE5righeter att somna efter konserter, prestationspress, sm\xE4rta fr\xE5n \xF6verbelastning och ibland brist p\xE5 \xE5terh\xE4mtning.

Yoga f\xF6r musiker \xE4r klasser s\xE4rskilt utformade f\xF6r dig som \xE4r professionell musiker eller musikstuderande. Torsdagar kl 17-18 bjuder jag in er till \xF6ppna yogaklasser d\xE4r vi fokuserar p\xE5 att st\xE4rka och balansera kroppens muskler, lugna nervsystemet och skapa balans i vardagen.

Vi jobbar med:
* Skonsam och st\xE4rkande r\xF6relsetr\xE4ning speciellt anpassade f\xF6r musikers behov
* Andning och avslappning
* Verktyg f\xF6r att minska stress och fr\xE4mja s\xF6mn
* Kroppsmedvetenhet \u2013 f\xF6r ett h\xE5llbart musikut\xF6vande
* Ingen f\xF6rkunskap kr\xE4vs! Jag m\xF6ter er utifr\xE5n d\xE4r ni \xE4r.

Jag som leder kursen heter Malin W\xE4ttring och \xE4r frilansande jazzmusiker och komposit\xF6r sedan 2011. Jag b\xF6rjade ut\xF6va yoga 2013. Jag har en kandidatutbildning i improvisation vid H\xF6gskolan f\xF6r scen & musik i G\xF6teborg och undervisar i musik p\xE5 h\xF6gskoleniv\xE5. Min f\xF6rsta yogal\xE4rarutbildning gick jag 2018, och nyligen har jag f\xF6rdjupat mig ytterligare genom en utbildning baserad p\xE5 violinisten Katharina Giegling's metod Yoga f\xF6r musiker. Den bygger p\xE5 Vinyasa yoga och Ayurveda, och \xE4r s\xE4rskilt framtagen f\xF6r att p\xE5 ett enkelt och lustfyllt s\xE4tt m\xF6ta musikers specifika behov \u2013 b\xE5de fysiskt och mentalt.

F\xF6r mig har yogan blivit ett ov\xE4rderligt st\xF6d i mitt yrkesliv \u2013 ett s\xE4tt att ta hand om b\xE5de kropp och sinne, som tillsammans med saxofonen bildar mitt instrument. Nu vill jag dela det vidare.`,
      imageUrl: "https://images.pexels.com/photos/8436613/pexels-photo-8436613.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "yoga-for-musiker"
    },
    {
      id: "gongbad",
      title: "Gongbad",
      category: "Specialklass",
      badgeLabel: "Ljudresa",
      level: "F\xF6r djup avslappning och \xE5terh\xE4mtning",
      shortDescription: "Vad \xE4r ett gongbad bra f\xF6r? Till exempel f\xF6r att l\xF6sa upp sp\xE4nningar i kroppen och \xF6ka fl\xF6det.",
      longDescription: `Vad \xE4r ett gongbad bra f\xF6r? Till exempel f\xF6r att l\xF6sa upp sp\xE4nningar i kroppen och \xF6ka fl\xF6det. M\xE4nniskan best\xE5r av 60-70% vatten. N\xE4r man spelar p\xE5 gongen skapas vibrationer och dessa s\xE4tter vattnet i kroppen i r\xF6relse. Detta bidrar till att sp\xE4nningar kan vibrera loss, vilket i sin tur \xF6kar fl\xF6det i kroppen. Detta s\xE4tter ig\xE5ng l\xE4kande och \xE5terh\xE4mtande processer.

Gong kan \xE4ven l\xF6sa upp emotionella blockeringar. Om vi inte till\xE5ter v\xE5ra k\xE4nslor att fl\xF6da fritt utan ist\xE4llet trycker ner dem och undviker att k\xE4nna dem, d\xE5 kan de fastna i kroppen. Detta kan skapa sm\xE4rta p\xE5 ett specifikt st\xE4lle, en k\xE4nsla av avst\xE4ngdhet, depression, stelhet mm. Gongen kan v\xE4cka v\xE5ra undantryckta k\xE4nslor s\xE5 att vi kan k\xE4nna dom. F\xF6rsta n\xE4r vi gjort det kan de sl\xE4ppa taget och l\xE4mna kroppen. Detta bidrar mental och k\xE4nslom\xE4ssig h\xE4lsa.

Gong p\xE5verkar \xE4ven v\xE5ra chakran. Inom den yogiska filosofin s\xE4ger man att m\xE4nniskan har 7 stora chakran l\xE4ngs med ryggraden; rot-, sakral-, navel-, hj\xE4rt-, hals-, pann- och kronchakrat. Detta \xE4r energicenter som representerar olika funktioner i kropp och sj\xE4l. Vi kan ha blockeringar i v\xE5ra chakran och det kan p\xE5verka v\xE5rt s\xE4tta att vara, k\xE4nna och agera. Gongens vibrationer \xF6kar fl\xF6det i chakrasystemet och bidrar till balans`,
      imageUrl: "https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "gongbad",
      suggestedTeacher: "Sylwia"
    },
    {
      id: "yoga-for-man",
      title: "Yoga f\xF6r m\xE4n",
      category: "Specialklass",
      badgeLabel: "F\xF6r m\xE4n",
      level: "Grundkurs med precision och kroppslinjering",
      shortDescription: "\xC4r du man och nyfiken p\xE5 yoga och vill l\xE4ra dig grunderna i en metod som \xE4r k\xE4nd f\xF6r sin precision och fokus p\xE5 korrekt kroppslinjering?",
      longDescription: `\xC4r du man och nyfiken p\xE5 yoga och vill l\xE4ra dig grunderna i en metod som \xE4r k\xE4nd f\xF6r sin precision och fokus p\xE5 korrekt kroppslinjering? D\xE5 \xE4r min yogagrupp f\xF6r m\xE4n perfekt f\xF6r dig! Min kurs \xE4r speciellt utformad f\xF6r m\xE4n som vill st\xE4rka b\xE5de kropp och sinne!

Vad kan du f\xF6rv\xE4nta dig?
\u2022 Grundl\xE4ggande yogapositioner (asanas) f\xF6r att bygga styrka, balans och flexibilitet
\u2022 En trygg och st\xF6djande milj\xF6 d\xE4r du kan utvecklas i din egen takt`,
      imageUrl: "https://images.pexels.com/photos/8436620/pexels-photo-8436620.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "yoga-for-man"
    },
    {
      id: "elemental-flow",
      title: "Elemental Flow \u2013 Yoga genom Jord, Vatten, Eld, Luft & Eter",
      category: "Specialklass",
      badgeLabel: "Flow",
      level: "L\xE5ngsamt tempo, somatik & energi \u2013 avslutas med djup vila",
      shortDescription: "Genom att lyssna in m\xF6jligg\xF6r vi f\xF6rberedelser p\xE5 b\xE5de somatisk & energetisk niv\xE5.",
      longDescription: `Genom att lyssna in m\xF6jligg\xF6r vi f\xF6rberedelser p\xE5 b\xE5de somatisk & energetisk niv\xE5. Det l\xE5ngsamma tempot ger tid att st\xF6dja kroppen d\xE4r den befinner sig & skapa balans b\xE5de fysiskt, energim\xE4ssigt & mentalt. Vi avslutar timmen med djup vila & integration. V\xE4lkommen till inspirerande musik, en bra blandning av uppfriskande \xF6vningar & sk\xF6na stretchar, s\xE5 \xE4r du redo f\xF6r resten av s\xF6ndagen \u2013 & resten av veckan. Ingen tidigare erfarenhet kr\xE4vs, passar alla`,
      imageUrl: "https://images.pexels.com/photos/3820347/pexels-photo-3820347.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "elemental-flow"
    },
    {
      id: "iyengaryoga",
      title: "Iyengaryoga",
      category: "Specialklass",
      badgeLabel: "Metod",
      level: "Precision, hj\xE4lpmedel & \u201CMeditation in action\u201D",
      shortDescription: "Yogaformen har f\xE5tt sitt namn efter BKS Iyengar och har sin grund i Patanjalis Yoga Sutras.",
      longDescription: `Yogaformen har f\xE5tt sitt namn efter BKS Iyengar, som anses vara en av v\xE4rldens fr\xE4msta yogam\xE4stare och den har sin grund i Patanjalis Yoga Sutras.

BKS Iyengar menar att i praktiken av asana finns alla delar av yogan med. F\xF6r att n\xE5 v\xE5rt inre m\xE5ste vi b\xF6rja utifr\xE5n och arbeta oss in\xE5t, g\xE5 fr\xE5n det stora till det subtila. F\xF6r att kunna stilla medvetandet m\xE5ste vi f\xF6rst stilla kroppen. D\xE4rf\xF6r l\xE4ggs mycket fokus p\xE5 att utf\xF6ra yogast\xE4llningarna p\xE5 ett anatomiskt och fysiologiskt h\xE4lsosamt s\xE4tt. BKS Iyengar var f\xF6rst med att systematiskt anv\xE4nda olika hj\xE4lpmedel, till exempel klossar, stolar, b\xE4lten och rep. Tack vare hj\xE4lpmedlen kan \xE4ven personer med fysiska begr\xE4nsningar utf\xF6ra yogast\xE4llningarna p\xE5 b\xE4sta s\xE4tt. Hj\xE4lpmedlen g\xF6r det ocks\xE5 m\xF6jligt att stanna l\xE4ngre i positionerna, vilket ger uth\xE5llighet och \xF6kar koncentrationsf\xF6rm\xE5gan. Iyengaryoga k\xE4nnetecknas av att stor vikt ligger p\xE5 hur asana utf\xF6rs. L\xE4raren ger noggranna instruktioner f\xF6r hur alla delar av kroppen ska placeras i de olika \xF6vningarna. BKS Iyengar menar att det \xE4r i koncentrationen som meditationen s\xE5 sm\xE5ningom infinner sig. \u201DMeditation in action\u201D kallar han detta.

Iyengaryogal\xE4rare har goda kunskaper i anatomi och fysiologi, och har tr\xE4nats i att se behoven och f\xF6ruts\xE4ttningarna hos varje elev. Under en lektion hj\xE4lper l\xE4raren eleverna att hitta sitt s\xE4tt att utf\xF6ra \xF6vningarna, s\xE5 att alla kan dra f\xF6rdelar av yogans h\xE4lsoeffekter.`,
      imageUrl: "https://images.pexels.com/photos/8436629/pexels-photo-8436629.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "iyengaryoga"
    },
    {
      id: "yoga-nidra-innerdance-reiki",
      title: "YogaNidra, Innerdance & Reiki",
      category: "Specialklass",
      badgeLabel: "Vila",
      level: "Ljudresa & energiarbete \u2013 unik upplevelse varje g\xE5ng",
      shortDescription: "V\xE4lkommen till din ljudresa \u2013 L\xE5t ljudv\xE5gor och vibrationer guida dig in i djup avslappning d\xE4r kropp och sinne f\xE5r vila, bearbeta och \xE5terh\xE4mta sig.",
      longDescription: `V\xE4lkommen till din ljudresa- L\xE5t ljudv\xE5gor och vibrationer guida dig in i djup avslappning d\xE4r kropp och sinne f\xE5r vila, bearbeta och \xE5terh\xE4mta sig. Under sessionen kombineras ljudresan med Reiki \u2013 en energibaserad metod som m\xE5nga upplever som lugnande och balanserande.

Varje upplevelse \xE4r unik. Du kan k\xE4nna dig tyngdl\xF6s, uppleva inre bilder, temperaturv\xE4xlingar eller nya insikter \u2013 allt i din egen takt.

Hj\xE4rnan \xE4r formbar och i vilotillst\xE5nd ges utrymme f\xF6r f\xF6r\xE4ndring och l\xE4kning. Mellan sessionerna kan du m\xE4rka nya perspektiv och en djupare kontakt med dig sj\xE4lv.

V\xE4lkommen till en resa in\xE5t \u2013 d\xE4r du f\xE5r vara helt och fullt du.`,
      imageUrl: "https://images.pexels.com/photos/3820348/pexels-photo-3820348.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "yoga-nidra-innerdance-reiki"
    },
    {
      id: "dansmeditation",
      title: "Dansmeditation",
      category: "Specialklass",
      badgeLabel: "Meditation",
      level: "Dans + stillhet \u2013 de fyra elementen",
      shortDescription: "F\xF6r dig som b\xE5de vill dansa och meditera.",
      longDescription: `F\xF6r dig som b\xE5de vill dansa och meditera. Vi b\xF6rjar med centrering och grundning f\xF6r att f\xF6rbereda kroppen inf\xF6r danscykeln, frig\xF6rande dans, och dansar oss genom de fyra elementen jord, eld, vatten och luft, och d\xE4refter en kort tyst meditation i stillhet. Passet avrundas med avslappning och vila. Dansmeditation \xE4r en metod f\xF6r att frig\xF6ra energi, \xF6ppna upp f\xF6r kreativa processer och bli mer n\xE4rvarande i nuet genom enkla andnings- och kropps\xF6vningar. Det kr\xE4vs inga f\xF6rkunskaper.`,
      imageUrl: "https://images.pexels.com/photos/3820346/pexels-photo-3820346.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "dansmeditation"
    },
    {
      id: "healing-budskap",
      title: "Healing & Budskap",
      category: "Specialklass",
      badgeLabel: "Healing",
      level: "Meditation + healing f\xF6r energi & cirkulation",
      shortDescription: "Under meditationen ger Samson healing till var och en av er.",
      longDescription: `Under meditationen ger Samson healing till var och en av er. Healing \xF6kar ditt energifl\xF6de & cirkulation, l\xF6ser blockeringar, vilket hj\xE4lper sinnet att \xE5terh\xE4mta sig. Det ger en djup avslappning & v\xE4lbefinnande. Du kan bli hj\xE4lpt av healing som st\xE4rker ditt inre helande arbete, en vacker & l\xE4kande process f\xF6r din unika sj\xE4l. Healing \xE4r alltid anpassat till dig & din situation. H\xE4r kan du sl\xE4ppa pressen att prestera, bara till\xE5ta dig sj\xE4lv att ta emot healing.`,
      imageUrl: "https://images.pexels.com/photos/3822620/pexels-photo-3822620.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "healing-budskap"
    },
    {
      id: "foretagsyoga",
      title: "F\xF6retagsyoga eller kompisg\xE4nget",
      category: "Specialklass",
      badgeLabel: "Privat grupp",
      level: "Skr\xE4ddarsydd yoga- eller gong-klass f\xF6r grupper",
      shortDescription: "F\xF6r f\xF6retag och privata grupper erbjuder jag skr\xE4ddarsydda yoga- eller gong-klasser, d\xE4r du och dina anst\xE4llda eller v\xE4nner f\xE5r njuta av ett h\xE4rligt pass.",
      longDescription: `F\xF6r f\xF6retag och privata grupper erbjuder jag skr\xE4ddarsydda yoga- eller gong-klasser, d\xE4r du och dina anst\xE4llda eller v\xE4nner f\xE5r njuta av ett h\xE4rligt pass.

Kontakta Jill p\xE5 jill@jillskundalini.com eller telefon 070-7958514.`,
      imageUrl: "https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg?auto=compress&cs=tinysrgb&w=1200",
      courseType: "foretagsyoga"
    }
  ];
  const pageTitle = "Klasser & kurser \u2013 Yogastudion G\xF6teborg";
  const pageDescription = "Utforska Yogastudions klasser och yogakurser i G\xF6teborg \u2013 Kundaliniyoga, Gravidyoga, Yinyoga (inkl. Yin Flow), Medicinsk Yoga samt specialklasser som Gongbad, Iyengaryoga, YogaNidra, Dansmeditation och Yoga f\xF6r m\xE4n. Boka yoga i en mjuk, stilla studio i Linn\xE9.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16 space-y-16"> <section aria-labelledby="courses-hero-heading" class="space-y-5 max-w-3xl"> <p class="text-[0.7rem] tracking-[0.32em] uppercase text-[#2D2D2D]/65">
Yogakurser Göteborg · Klasser & fördjupning
</p> <h1 id="courses-hero-heading" class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D2D2D]">
Klasser och kurser på Yogastudion
</h1> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
Här hittar du text och upplägg för våra klasser och kurser. Vi erbjuder
        kundaliniyoga, yinyoga (inkl. Yin Flow), medicinsk yoga, gravidyoga och
        en rad specialklasser – allt i en liten, personlig studio i Göteborg.
</p> </section> <section aria-labelledby="kundalini-heading" class="space-y-6"> <div class="space-y-3"> <h2 id="kundalini-heading" class="font-serif text-2xl sm:text-3xl text-[#2D2D2D]">
Kundaliniyoga – energi, stresslindring & fokus
</h2> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed max-w-3xl">
Kundaliniyoga är en fysisk, mental och andlig yogaform med rörelser,
          andning, meditation och avslappning. Fokus ligger på kraft och
          uthållighet – i din egen takt och helt utan prestation.
</p> </div> <div class="grid gap-6 sm:grid-cols-2"> ${kundaliniCourses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", CourseCard, { "client:load": true, ...course, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/CourseCard", "client:component-export": "default" })}`)} </div> </section> <section aria-labelledby="yin-heading" class="space-y-6"> <div class="space-y-3"> <h2 id="yin-heading" class="font-serif text-2xl sm:text-3xl text-[#2D2D2D]">
Yinyoga – stillhet, bindväv & återhämtning
</h2> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed max-w-3xl">
Våra yinyogakurser ger dig ett mjukt, meditativt rum för återhämtning.
          Du stannar längre i positionerna, påverkar bindväv och leder och låter
          nervsystemet varva ned. Ett fint komplement till annan träning – och
          en plats att landa när livet går fort.
</p> </div> <div class="grid gap-6 sm:grid-cols-2"> ${yinCourses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", CourseCard, { "client:load": true, ...course, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/CourseCard", "client:component-export": "default" })}`)} </div> </section> <section aria-labelledby="medicinsk-heading" class="space-y-6"> <div class="space-y-3 max-w-3xl"> <h2 id="medicinsk-heading" class="font-serif text-2xl sm:text-3xl text-[#2D2D2D]">
Medicinsk Yoga – läkande fokus & hormonbalans
</h2> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
Medicinsk yoga vänder sig till dig som behöver en extra varsam,
          läkande praktik – vid stressrelaterade besvär, smärta, sömnproblem
          eller hormonella förändringar som PMS och klimakteriet. Klassen
          anpassas efter gruppen och dina individuella behov.
</p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${medCourses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", CourseCard, { "client:load": true, ...course, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/CourseCard", "client:component-export": "default" })}`)} </div> </section> <section aria-labelledby="special-heading" class="space-y-6"> <div class="space-y-3 max-w-3xl"> <h2 id="special-heading" class="font-serif text-2xl sm:text-3xl text-[#2D2D2D]">
Specialklasser – gongbad, metod & djup vila
</h2> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
För dig som vill fördjupa din praktik eller prova något nytt erbjuder
          vi specialklasser och temapass – till exempel gongbad, iyengaryoga,
          yoganidra/innerdance/reiki, dansmeditation och yoga för musiker.
</p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${specialCourses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", CourseCard, { "client:load": true, ...course, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/CourseCard", "client:component-export": "default" })}`)} </div> </section> <section id="boka" aria-labelledby="booking-heading" class="space-y-6 pt-4 border-t border-[#4A5D4E]/15"> <div class="space-y-3 max-w-3xl"> <h2 id="booking-heading" class="font-serif text-2xl sm:text-3xl text-[#2D2D2D]">
Boka din plats – Yogakurser i Göteborg
</h2> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
När du klickar på <span class="font-medium">”Boka”</span> på en kurs
          ovan för vi dig hit, förifyller din bokningsförfrågan med vald lärare
          där det är möjligt och hjälper dig att göra en lugn, mjuk bokning.
          Här kan du boka yoga i Göteborg – kurser, klasser och specialkvällar
          på Yogastudion.
</p> </div> ${renderComponent($$result2, "WeeklySchedule", WeeklySchedule, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/WeeklySchedule", "client:component-export": "default" })} </section> </main> ` })}`;
}, "/Users/ocmac/Yogastudion/src/pages/kurser.astro", void 0);

const $$file = "/Users/ocmac/Yogastudion/src/pages/kurser.astro";
const $$url = "/kurser";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kurser,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
