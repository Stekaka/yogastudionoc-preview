import { f as createComponent, h as addAttribute, j as renderComponent, k as renderHead, l as renderSlot, r as renderTemplate, i as createAstro } from './astro/server_CUVSL_N1.mjs';
import 'kleur/colors';
import { $ as $$SEO } from './SEO_DKnWSAnY.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Yogastudion \u2013 En oas f\xF6r harmoni och personlig utveckling.",
    description = "Yogastudion erbjuder Hatha, Vinyasa och Yin Yoga i hj\xE4rtat av G\xF6teborg. Boka din n\xE4sta klass i en lugn, mjuk och minimalistisk milj\xF6."
  } = Astro2.props;
  return renderTemplate`<html lang="sv" class="scroll-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="sv_SE">${renderComponent($$result, "SEO", $$SEO, { "businessName": "Yogastudion", "city": "G\xF6teborg", "streetAddress": "Vegagatan 12, G\xF6teborg", "postalCode": "411 00", "telephone": "+46-31-000-00-00", "url": "https://yogastudion.com" })}${renderHead()}</head> <body class="bg-[#F5F2ED] text-[#2D2D2D] antialiased font-sans"> <div class="min-h-screen flex flex-col"> <header class="w-full sticky top-0 z-40 border-b border-white/25 bg-[#F5F2ED]/10 backdrop-blur-lg shadow-[0_18px_60px_rgba(0,0,0,0.18)]"> <div class="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between"> <a href="/" class="flex items-center gap-2 group" aria-label="Till startsidan"> <div class="h-11 w-11 rounded-full overflow-hidden bg-transparent flex items-center justify-center"> <img src="/videos/YogastudionLogo1.png" alt="Yogastudion logotyp" class="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105" loading="lazy"> </div> <span class="font-serif text-lg tracking-wide text-[#2D2D2D] group-hover:text-[#4A5D4E] transition-colors">
Yogastudion
</span> </a> <nav class="hidden md:flex items-center gap-8 text-sm text-[#2D2D2D]/80"> <a href="#klasser" class="hover:text-[#4A5D4E] transition-colors">
Klasser
</a> <a href="/kurser" class="hover:text-[#4A5D4E] transition-colors">
Kurser
</a> <a href="#studio" class="hover:text-[#4A5D4E] transition-colors">
Studion
</a> <a href="/boka" class="hover:text-[#4A5D4E] transition-colors">
Boka
</a> </nav> </div> </header> <main class="flex-1"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-black/5 mt-16"> <div class="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-[#2D2D2D]/70 flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <div> <p class="font-serif text-base">Yogastudion</p> <p>Yoga i Göteborg</p> </div> <div class="space-y-1"> <p>Lugna Gatan 12, 411 00 Göteborg</p> <p>Tel: +46-31-000-00-00 · E-post: hej@yogastudion.com</p> </div> </div> </footer> </div> </body></html>`;
}, "/Users/ocmac/Yogastudion/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
