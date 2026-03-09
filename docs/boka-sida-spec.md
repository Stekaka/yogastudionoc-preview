# Boka-sida – Specifikation & designskiss

**Yogastudion · Boka yoga i Göteborg**

Detta dokument beskriver struktur, design, copy och tekniska riktlinjer för en konverteringsoptimerad Boka-sida.

---

## 1. Målsättning

- **Harmonisk** – Känslan ska matcha studions lugna, inbjudande rum.
- **Förtroendeingivande** – Tydlig info, inga dolda kostnader, tydliga nästa steg.
- **Låg tröskel** – Minimalt klick till bokning, enkel filtrering, tydliga priser och FAQ så att osäkerhet inte stoppar bokningen.

---

## 2. Sidstruktur (i ordning)

| Sektion | Syfte |
|--------|--------|
| Hero | Välkomna, sätta stämning, primär CTA (t.ex. "Visa schema" eller "Boka pass") |
| Filter + schemavy | Hitta rätt klass snabbt (form, lärare, tid) och se tillgänglighet |
| Priser / medlemskap | Jämförelse drop-in vs klippkort vs abonnemang – beslutsstöd |
| FAQ | Ta bort sista tvivel (vad ta med, när öppnar porten, avbokning m.m.) |
| Sista CTA | Kort upprepning av huvudbudskap + knapp till schema/bokning |

---

## 3. Sektion-för-sektion

### 3.1 Hero-sektion

**Layout:** Fullbredd, luftig. Centrerad eller lätt asymmetrisk text; ev. en mjuk bild eller gradient i bakgrund (samma estetik som resten av sidan).

**Rubrik (H1):**  
*"Boka din yogastund"* eller *"Välkommen till mattan"*

**Underrubrik / ingress (1–2 meningar):**  
*"Här hittar du veckans klasser och gör din bokning direkt. Välj klass, tid och lärare – eller utforska utifrån vad som känns rätt just idag."*

**CTA:**  
En primär knapp: *"Visa schema"* eller *"Boka pass"* – scrollar till schemat eller öppnar bokningsflödet.

**Designnoteringar:**
- Samma serif som på övriga sidor för H1.
- Brödtext i sans-serif, radavstånd ca 1.5–1.6.
- Max bredd på textblocket (t.ex. 50–60 rem) så att raderna inte blir för långa.

---

### 3.2 Filtreringsfunktion

**Placering:** Direkt ovanför schemalistan, alltid synlig (ev. sticky på desktop).

**Filterdimensioner:**

| Filter | Typ | Exempel på alternativ |
|--------|-----|------------------------|
| Klassform | Pills/knappar (multi eller single) | Kundaliniyoga, Yinyoga, Medicinsk Yoga, Breathwork, Gongbad, Alla |
| Lärare | Dropdown eller pills | Alla lärare, Anki, Linda, Mathias, Malin, Jill, … |
| Tid på dygnet | Pills eller segment | Alla, Förmiddag, Eftermiddag, Kväll |

**Beteende:**
- Filtrering uppdaterar schemalistan direkt (ingen full sidladdning).
- Tydlig "Rensa filter"-länk när något filter är aktivt.
- På mobil: filter i en horisontell scroll eller en "Filter"-knapp som öppnar en panel.

**Design:**
- Samma pill-stil som på Kurser/schema (beige/off-white, diskret kant).
- Aktiv filter: lätt markerad (samma stil som idag på schema-sidan).

---

### 3.3 Schemavy

**Format:** Lista (kort per klass) – inte en kalendergrid som kräver mycket klick. Listan är primär; ev. "Veckovy" kan vara ett alternativt läge.

**Per klassrad ska visas:**
- **Dag + datum** (t.ex. Måndag 10 mars)
- **Tid** (start–slut)
- **Klassnamn** (t.ex. Kundaliniyoga, Yinyoga Flow)
- **Lärare** (namn)
- **Svårighetsgrad** (t.ex. Alla nivåer / Nybörjare / Med erfarenhet) – text eller enkel ikon
- **Platser kvar** (t.ex. "3 platser kvar" eller en enkel indikator)
- **CTA:** "Boka" – går till extern bokning eller öppnar inbäddat steg 2.

**Responsivitet:**
- Desktop: tabell-liknande rad per klass (tid, klass, lärare, nivå, platser, knapp).
- Mobil: kort per klass med samma info staplad; "Boka"-knappen tydlig.

**Design:**
- Luftig radavstånd, tillräcklig kontrast för text.
- Idag kan markeras med samma subtila "Idag"-stil som på nuvarande schema.
- Ingen onödig decoration – fokus på läsbarhet och en tydlig primär knapp per rad.

---

### 3.4 Prislistor / Medlemskap

**Syfte:** En tydlig jämförelse som hjälper besökaren välja mellan drop-in, klippkort och abonnemang.

**Layout:** Tre kolumner (på desktop) eller tre staplade kort (mobil). Varje kolumn = ett prisalternativ.

**Förslag på kolumner:**

| | Drop-in | Klippkort | Månad |
|--|--------|-----------|-------|
| **Rubrik** | Enstaka pass | 5 eller 10 pass | Obegränsat / X pass/månad |
| **Pris** | XXX kr/pass | XXX kr (pris per pass) | XXX kr/månad |
| **För dig som** | Vill prova eller yoga i liten skala | Tränar 1–2 ggr/vecka | Vill ha yoga som en fast del av vardagen |
| **CTA** | "Boka pass" | "Köp klippkort" | "Välj abonnemang" |

**Copy (exempel):**
- Drop-in: *"Perfekt för att prova eller när du har en ledsen dag."*
- Klippkort: *"Gäller X månader. Dela inte med andra – passen är personliga."*
- Abonnemang: *"Avsluta när du vill. Gäller alla klasser enligt schema."*

**Design:**
- Samma kortspråk som övriga sidor: beige/off-white bakgrund, serif för rubriker, sans för brödtext.
- En kolumn kan markeras som "Populärast" med en diskret badge om ni vill.
- Ingen onödig skugga eller 3D – platt, luftigt, lyxigt men enkelt.

---

### 3.5 FAQ

**Syfte:** Ta bort sista tvivel kring praktik (vad ta med, när öppnar porten, avbokning, betalning).

**Förslag på frågor:**

1. **Vad behöver jag ta med mig?**  
   *"Matta, bolster och filtar finns i studion. Ta med dig kläder du rör dig bekvämt i och eventuellt en vattenflaska. Byta om kan du i studion."*

2. **När öppnar ni porten?**  
   *"Porten öppnas ca 15 minuter före passets start. Kom gärna några minuter i förväg så du hinner byta och landa."*

3. **Hur bokar och avbokar jag?**  
   *"Du bokar via [Bokningssystem]. Avbokning kan göras kostnadsfritt fram till X timmar före passet; senare avbokning debiteras som genomfört pass."*

4. **Kan jag komma som nybörjare?**  
   *"Ja. De flesta klasser är anpassade så att alla kan delta. Om du är osäker, välj klasser märkta ’Alla nivåer’ eller ’Nybörjare välkomna’."*

5. **Var ligger Yogastudion?**  
   *"Nordostpassagen 19 i Linné, Göteborg. [Länk till karta]. Ring vid behov [telefon]."*

**Layout:** Accordion (en fråga i taget expanderbar) eller alla svar synliga under rubriker. Accordion sparar plats; öppna sektioner ger snabb scanning.

**Design:**
- Rubrik: "Vanliga frågor" (serif).
- Frågor i sans-serif, något större eller fetare än svar.
- Svaren med generöst radavstånd och nedtonad färg (t.ex. #2D2D2D med 80 % opacity).

---

### 3.6 Sista CTA

**Innehåll:** En rad text (t.ex. *"Vi ser fram emot att träffa dig på mattan."*) och en knapp: *"Visa schema och boka"*.

**Design:** Samma knappstil som övriga primära CTAs (beige/off-white med diskret kant eller jordnära accent). Ingen extra sektion – bara luft och en tydlig avslutning.

---

## 4. Designestetik (sammanfattning)

- **Färgpalett:** Jordnära toner; salviagrön (#4A5D4E) som accent (sparsamt); mjuk beige (#E8E0D4, #F0E7DA) och off-white/sand (#F5F2ED) som bakgrund; mörk charcoal (#2D2D2D) för text.
- **Typsnitt:** Serif (t.ex. Playfair Display) för rubriker; sans-serif (system-ui eller vald sans) för brödtext.
- **Känsla:** Minimalistisk, luftig (mycket white space), lyxig men tillgänglig – ingen rörig layout eller för många färger.
- **Komponenter:** Pills, knappar och kort ska matcha befintliga sidor (Kurser, Schema, Om oss) så att Boka-sidan känns som en del av samma varumärke.

---

## 5. Tekniska riktlinjer – bokningssystem

Målet är att bokningsflödet känns **inbäddat och proffsigt**, inte som en billig iframe i en annan design.

### 5.1 Översikt

- **Första skärmen (schema, filter, priser, FAQ)** – er egen kod (Astro/React) med er design.
- **Bokningsflödet (välj pass → detaljer → betalning)** – antingen inbäddat från leverantören eller byggt som eget steg-baserat gränssnitt som anropar leverantörens API.

### 5.2 Mindbody

- **API:** Mindbody har ett publikt API. Backend (t.ex. Node/Astro API route) kan hämta klasser, platser, priser och skicka bokningar.
- **Rekommendation:** Bygg schema- och prislistan i er egen UI; vid "Boka" öppna antingen:
  - en **inbäddad vy** (Mindbody "Widget" eller deras bokningssida i en iframe med anpassad höjd och minimal chrome), eller
  - en **egen modalsida** som visar steg 1 (välj pass) med er styling och sedan redirect till Mindbody för inloggning/betalning om det krävs.
- **Iframe:** Om ni använder iframe, använd en **fullscreen-modal** med er header (logo + "Stäng") och bara iframe under; sätt iframe till 100 % bredd/höjd så det känns mer integrerat.

### 5.3 Zoezi

- **API/Integration:** Kolla om Zoezi har API eller inbäddningslösning (widget/länk).
- **Rekommendation:** Samma som ovan – visa schema och priser i er design; vid "Boka" öppna Zoezi i egen flik eller i en modal med tydlig "Öppnas i Zoezi"-information så användaren inte känner sig vilse.

### 5.4 BokaDirekt

- **Integration:** BokaDirekt erbjuder ofta länk eller inbäddning. Om de har API kan ni bygga ert eget steg 1 (välj datum, klass, tid) och sedan skicka användaren till BokaDirekt för slutförande.
- **Rekommendation:** Om endast länk finns: tydlig knapp "Gå till bokning" som öppnar BokaDirekt (samma flik eller ny flik med tydlig copy: "Du skickas till vårt bokningssystem för att slutföra bokningen.").

### 5.5 Generella tips

- **Enhetlig URL:** Om möjligt, ha bokningsflödet under er egen path (t.ex. `/boka/klass` eller `/boka/checkout`) och proxya/redirecta till leverantören – då känns det mer som en del av er webb.
- **Loading & feedback:** Vid övergång till extern/iframe, visa en enkel loader och kort text ("Öppnar bokningssidan…") så användaren förstår att något händer.
- **Mobil:** Säkerställ att leverantörens sida är mobilvänlig; om ni använder iframe i modal, låt den anpassa höjd (viewport) på mobil.
- **Tillgänglighet:** Iframe måste ha en beskrivande `title`; knappar som öppnar extern bokning ska ha tydlig aria-label t.ex. "Öppna bokning i nytt fönster".

---

## 6. Kort checklista innan launch

- [ ] Hero med tydlig H1 och en primär CTA.
- [ ] Filter (klassform, lärare, tid) som uppdaterar schemalistan direkt.
- [ ] Schema med tid, lärare, svårighetsgrad, platser kvar och "Boka"-knapp.
- [ ] Prisjämförelse (drop-in, klippkort, abonnemang) med korta fördelar och CTA per alternativ.
- [ ] FAQ med minst 4–5 vanliga frågor (ta med, porten, avbokning, nybörjare, adress).
- [ ] Sista CTA-sektion.
- [ ] Bokningsflöde antingen inbäddat eller med tydlig övergång till leverantör; ingen känsla av "billig" iframe utan kontext.
- [ ] Responsiv layout och tillgänglighet (fokus, kontrast, semantik).

---

*Specifikationen är skriven för Yogastudion och kan anpassas efter er exakta priser, bokningssystem och copy.*
