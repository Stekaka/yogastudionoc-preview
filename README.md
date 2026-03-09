# Yogastudion

En liten, premium webbplats för Yogastudion byggd med **Astro**, **React**, **Tailwind CSS** och **framer-motion**.

## Tech-stack

- Astro + React (Astro Islands)
- Tailwind CSS
- framer-motion

## Kom igång

```bash
cd Yogastudion
npm install
npm run dev
```

Öppna sedan `http://localhost:4321` i webbläsaren.

## Struktur

- `src/layouts/Layout.astro` – grundlayout med navigation, LocalBusiness JSON-LD och typografi
- `src/components/Hero.astro` – hero med bakgrundsvideo och bokningskort
- `src/components/BookingForm.tsx` – React-baserat bokningsformulär som Astro Island
- `src/pages/api/book.ts` – intern API-route som routar bokningar till rätt lärare (via loggfält nu)
- `src/pages/index.astro` – startsida med klasser och studiobeskrivning

Justera gärna stad, adress och kontaktuppgifter i `Layout.astro` och `SEO.astro` efter behov.

