# Preview-publicering (Yogastudion OC)

Sidan är **inte** redo för produktion, men du kan publicera en **preview** som fungerar utanför localhost och på mobil.

## Vercel (rekommenderat)

1. **Koppla repot till Vercel**
   - Gå till [vercel.com](https://vercel.com) och logga in (t.ex. med GitHub).
   - Klicka **Add New** → **Project** och välj `kodco-hemsidor`.
   - Vercel upptäcker monorepot automatiskt.

2. **Konfigurera projektet**
   - **Root Directory:** sätt till `apps/Yogastudionoc` (välj i listan eller ange om möjligt).
   - **Framework Preset:** Astro (ska vara valt).
   - **Build Command:** `pnpm run build` (standard).
   - **Install Command:** `cd ../.. && pnpm install` (viktigt – måste köras från repots rot så att workspace-paketet `@kodco/ui` installeras).
   - **Output Directory:** lämna **tomt** – Vercel-adaptern sätter rätt output. Om något annat står där (t.ex. `dist`), ta bort det.

3. **Miljövariabler (om behövs)**  
   Om boknings-API:t använder nycklar eller hemligheter, lägg till dem under **Settings → Environment Variables** (t.ex. bara för Preview).

4. **Deploy**
   - Klicka **Deploy**. Efter bygget får du en URL som `https://yogastudionoc-xxx.vercel.app`.
   - **Preview-URL:** Varje ny push eller branch ger en egen preview-URL under **Deployments**.
   - Dela denna länk för att visa sidan på dator och mobil – den är publik men inte “live” som huvudsida.

### Preview per branch

- **main** (eller din huvudbranch) → kan användas som “preview-miljö” tills sidan ska gå live.
- Skapa en branch t.ex. `preview/mars-2025` → pusha → Vercel skapar en ny preview-URL för den branchen.
- När sidan ska gå live byter du domän/projekt till produktion.

### 404 efter deploy?

- **Output Directory:** Under **Settings → General** ska **Output Directory** vara **tom**. Om det står t.ex. `dist`, radera värdet och spara – Astro med Vercel-adaptern använder `.vercel/output`.
- **Install Command:** Ska vara `cd ../.. && pnpm install` så att workspace-paket (t.ex. `@kodco/ui`) installeras.
- **Redeploy:** Efter ändringar – **Deployments** → **⋯** på senaste → **Redeploy**.

---

## Alternativ: snabbtunnel mot localhost

Om du bara vill visa något **en gång** utan att deploya:

1. Bygg och starta preview lokalt:
   ```bash
   cd apps/Yogastudionoc && pnpm run build && pnpm run preview
   ```
2. I en annan terminal, exponera med ngrok:
   ```bash
   npx ngrok http 4321
   ```
3. Använd den genererade HTTPS-URL:en (t.ex. `https://abc123.ngrok.io`) – den fungerar på mobil också.  
   **Nackdel:** URL:en ändras varje gång du startar ngrok, och din dator måste vara på.

---

**Sammanfattning:** För en **stabil, delbar preview** som fungerar på mobil: använd Vercel och dela preview-URL:en. När sidan ska gå live växlar du bara till rätt domän/projekt.
