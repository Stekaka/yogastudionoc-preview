import { f as createComponent, m as maybeRenderHead, r as renderTemplate, j as renderComponent } from '../chunks/astro/server_CUVSL_N1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D_QoQTCr.mjs';
import 'clsx';
import { W as WeeklySchedule } from '../chunks/WeeklySchedule_DaJKhZbN.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative isolate overflow-hidden bg-[#F5F2ED] text-[#2D2D2D] -mt-16 pt-16 min-h-[calc(100vh+4rem)] flex items-center" aria-labelledby="hero-heading"> <div class="absolute inset-0 -z-10"> <video class="h-full w-full object-cover brightness-95" autoplay muted loop playsinline poster="/videos/YogaHero1.mp4"> <source src="/videos/YogaHero1.mp4" type="video/mp4">
Din webbläsare stödjer inte video-taggen.
</video> <div class="absolute inset-0 bg-gradient-to-t from-[#F5F2ED] via-[#F5F2ED]/45 to-transparent"></div> </div> <div class="mx-auto w-full max-w-6xl px-4 py-24 lg:py-28"> <div class="space-y-6 max-w-xl"> <p class="text-xs tracking-[0.35em] uppercase text-[#2D2D2D]/70">
Mjuk minimalism · Närvaro · Andning
</p> <h1 id="hero-heading" class="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2D2D2D]">
Yogastudion – En oas för harmoni och personlig utveckling
</h1> <p class="max-w-xl text-base sm:text-lg text-[#2D2D2D]/80 leading-relaxed">
Ett stilla rum mitt i staden. Mjuka klasser, små grupper och närvarande lärare
        som hjälper dig att landa – i andetaget, i kroppen och i nuet.
</p> <p class="text-xs sm:text-sm text-[#2D2D2D]/70"></p> </div> </div> </section>`;
}, "/Users/ocmac/Yogastudion/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "WeeklySchedule", WeeklySchedule, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ocmac/Yogastudion/src/components/WeeklySchedule", "client:component-export": "default" })} ${maybeRenderHead()}<section id="studio" class="mx-auto w-full max-w-6xl px-4 pb-20 sm:pb-24 space-y-10" aria-labelledby="studio-heading"> <div class="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center"> <div class="space-y-4"> <h2 id="studio-heading" class="font-serif text-2xl sm:text-3xl text-[#2D2D2D]">
En stilla studio i hjärtat av Göteborg
</h2> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
Yogastudion Vegagatan 16 i Göteborg. Här hittar du lugnet bland
         mjuka naturtoner, enkla material och generöst utrymme mellan mattorna.
</p> <p class="text-sm sm:text-base text-[#2D2D2D]/80 leading-relaxed">
Vi arbetar med ett begränsat antal platser per klass för att skapa trygghet,
          närvaro och möjlighet till personlig guidning.
</p> </div> <div class="relative"> <figure class="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#4A5D4E]/20 bg-[#4A5D4E]/5"> <img src="/videos/Yogastudionfrånköket.webp" alt="Yogastudion sedd från köket – ljus, mjuk studio med plats mellan mattorna" loading="lazy" class="h-full w-full object-cover"> </figure> </div> </div> </section> ` })}`;
}, "/Users/ocmac/Yogastudion/src/pages/index.astro", void 0);

const $$file = "/Users/ocmac/Yogastudion/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
