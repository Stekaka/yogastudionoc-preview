/**
 * Receptbibliotek – metadata och fullständigt innehåll för Recept-sidan.
 * URL: /recept (översikt), /recept/[slug] (enskilde recept)
 */
export interface RecipeIngredientBenefit {
  name: string;
  text: string;
}

export interface Recipe {
  slug: string;
  title: string;
  excerpt: string;
  /** Bild-URL (t.ex. /images/recept/slug.jpg) – visas på kort och i receptet */
  image?: string;
  author: string;
  /** ISO-datum */
  date: string;
  /** T.ex. "Grytor", "Yogisk mat" */
  category?: string;
  ingredients: string[];
  /** Steg för steg eller stycken */
  instructions: string[];
  /** Serveringsförslag, förvaring m.m. */
  tips?: string[];
  /** Kort text om varför rätten är bra */
  benefits?: string;
  /** Förklaring per ingrediens (kryddor etc.) */
  ingredientBenefits?: RecipeIngredientBenefit[];
  /** Råd för gravida/ammande */
  notePregnant?: string;
}

export const RECIPES: Recipe[] = [
  {
    slug: "mungbonsgryta",
    title: "Mungbönsgryta",
    image: "/images/recept/mungbonsgryta.jpg",
    excerpt:
      "Lättsmält och näringsrik yogisk gryta med mungbönor, basmatiris och kryddor som lök, ingefära och gurkmeja. Fullvärdigt protein, utmärkt att äta hur mycket du vill eller för att återfå styrka efter sjukdom. Yogastudion Göteborg.",
    author: "Jill Johansson",
    date: "2025-05-05",
    category: "Grytor",
    ingredients: [
      "2,5 dl mungbönor",
      "2,5 dl basmatiris",
      "¾ dl olivolja",
      "2 gula lökar",
      "¾ dl färsk hackad ingefära",
      "8–10 vitlöksklyftor",
      "2 tsk gurkmeja",
      "1 msk garam masala",
      "½ tsk svartpeppar",
      "1 tsk malen kardemumma",
      "1 tsk chilipeppar",
      "½ msk salt",
      "valfria grönsaker i riklig mängd (t.ex. morötter, broccoli eller rödbetor)",
    ],
    instructions: [
      "Lägg mungbönorna i blöt kvällen före. Skölj och koka dem försiktigt i 6–8 dl vatten under 20–30 minuter.",
      "Koka riset i 4 dl vatten med 1 msk olivolja och 1 tsk salt ca 10–12 minuter.",
      "Skala och hacka lök, ingefära och vitlök. Stek löken, ingefäran och vitlöken försiktigt tills löken mjuknar. Tillsätt kryddorna och stek några minuter till under omrörning.",
      "När 5 minuter återstår av risets och mungbönornas koktid: häll i lökblandningen och eventuell stekt grönsaksblandning. Rör om.",
      "Den färdiga maten kan vara vattnig – gör den gärna en dag innan och låt stå i kylskåp så dras vätskan åt av bönorna och riset. Servera gärna med grönsallad, gurka och naturell yoghurt.",
    ],
    tips: [
      "Gör gärna en större laddning som håller i kylskåpet upp till en vecka.",
      "Servera med grönsallad, gurka och naturell yoghurt.",
    ],
    benefits:
      "Yogisk gryta är lättsmält och näringsrik med fullvärdigt protein. Lök, vitlök och ingefära ger kraft och kreativitet. Utmärkt om du vill gå ner i vikt – ät hur mycket du vill – och för att återfå styrka efter sjukdom. Kryddkombinationen laddar med energi och verkar utrensande.",
    ingredientBenefits: [
      { name: "Lök", text: "Renar blodet, ger energi och stimulerar matsmältningen." },
      { name: "Vitlök", text: "Fungerar som en naturlig form av antibiotika och hjälper mot bakterier och virus." },
      { name: "Ingefära", text: "Stärker nervsystemet, lindrar symptom, stimulerar matsmältningen och hjälper mot förkylning. Bra mot menstruationskramp och ryggsmärtor." },
      { name: "Gurkmeja", text: "Bra för huden, slemhinnorna och lederna." },
      { name: "Svartpeppar", text: "Renar blodet, stimulerar matsmältningen och driver ut gaser ur magen." },
      { name: "Chili", text: "Innehåller mycket C-vitamin och A-vitamin, bra för blodcirkulationen och matsmältningen." },
    ],
    notePregnant:
      "Är du gravid kan du göra en likadan gryta med mildare kryddblandning – t.ex. fänkål, kardemumma, gurkmeja och koriander. När du ammar ska kryddningen vara mild; mild kryddning passar bäst i den fasen.",
  },
  {
    slug: "kikartsrora-med-aprikos-och-chilli",
    title: "Kikärtsröra med aprikos och chilli",
    image: "/images/recept/kikartsrora-med-aprikos-och-chilli.jpg",
    excerpt:
      "Aprikos innehåller mycket järn. En röra med kikärtor och sting av chili – god som den är till mat eller som dipp till grönsaker. Snabbt och enkelt från Yogastudion.",
    author: "Jill Johansson",
    date: "2025-05-05",
    category: "Röror & tillbehör",
    ingredients: [
      "400 g kokta kikärtor",
      "10 aprikoser",
      "2–3 msk olivolja",
      "tabasco, spiskummin, salt och peppar efter smak",
    ],
    instructions: [
      "Klipp ner aprikoserna i småbitar och lägg i en skål. Häll över hett vatten så att det knappt täcker. Låt dra i 1–2 timmar.",
      "Mixa kikärtor och de mjuka aprikoserna. Krydda med tabasco, spiskummin, salt och peppar och häll på olivoljan. Rör till lagom konsistens – använd som maträtt eller dipp till grönsaker.",
    ],
    benefits:
      "Aprikos innehåller mycket järn och ger röran en söt, mjuk smak. Kikärtor ger protein och fibrer. Perfekt som lätt lunch, tillbehör eller dipp till grönsaksstavar.",
  },
  {
    slug: "gron-drink-for-ammande-mammor",
    title: "Grön drink för ammande mammor",
    image: "/images/recept/gron-drink-for-ammande-mammor.jpg",
    excerpt:
      "Grön drink mot järnbrist – bygg upp dig med gröna drinkar efter förlossningen. Nässlor, aprikos och gröna blad ger mycket järn. Enkel att mixa och njuta av.",
    author: "Jill Johansson",
    date: "2025-05-05",
    category: "Drycker",
    ingredients: [
      "1–2 tsk nässelpulver (alternativt 1 näve färska nässlor)",
      "5 st torkade aprikoser (lägg gärna i vatten en stund så att de blir lite mjuka)",
      "1–2 bananer, äpple, päron eller annan söt frukt",
      "½ näve ruccolasallad",
      "5 st romansalladsblad",
      "2 dl vatten",
    ],
    instructions: [
      "Lägg torkade aprikoser i vatten en stund om du vill att de ska bli mjukare.",
      "Kör alla ingredienser i mixer. Häll upp och njut av drycken direkt.",
    ],
    benefits:
      "Grön drink mot järnbrist – om du har järnbrist efter förlossningen kan du bygga upp dig med gröna drinkar. Nässlor och aprikos innehåller mycket järn; gröna blad och frukt ger näring och smak. Ett enkelt sätt att få i dig mer järn när du ammar.",
  },
  {
    slug: "potenta-potatis",
    title: "Potenta potatis",
    image: "/images/recept/potenta-potatis.jpg",
    excerpt:
      "Fylld bakpotatis med lök, vitlök, ingefära och kryddor – ger kraft och kreativitet. Keso och ost toppar rätten. Servera med yoghurt för att balansera kryddorna. 2 portioner.",
    author: "Jill Johansson",
    date: "2025-05-05",
    category: "Varmrätter",
    ingredients: [
      "2 bakpotatis",
      "½ dl ghee eller olivolja",
      "1 lök",
      "1 liten bit ingefära",
      "1–2 vitlöksklyftor",
      "½ tsk svartpeppar",
      "1 tsk gurkmeja",
      "½ tsk chilipulver",
      "8 hela nejlikor eller 1 tsk malen nejlika",
      "3 kardemummakärnor eller ½ tsk kardemumma",
      "½ tsk kanel",
      "½ dl soyasås",
      "250 g keso",
      "1 dl riven ost",
    ],
    instructions: [
      "Sätt ugnen på 180 °C och baka potatisen i ca 1 timme.",
      "Hacka och stek lök, vitlök och ingefära med kryddorna (svartpeppar, gurkmeja, chilipulver, nejlika, kardemumma, kanel). Tillsätt soyasåsen.",
      "Dela potatisarna på mitten och gröp ur dem. Blanda potatisköttet, keson och kryddblandningen i stekpannan.",
      "Fyll potatisskalen med blandningen och strö riven ost ovanpå. Grädda i ugnen ca 15 minuter.",
      "Servera med yoghurt för att balansera kryddblandningen.",
    ],
    benefits:
      "Rätten innehåller lök, vitlök och ingefära som ger kraft och kreativitet att verka i världen. Kryddorna ger både smak och välgörande effekter – yoghurt vid sidan om balanserar upp.",
  },
  {
    slug: "4-immunstarkande-shottar",
    title: "4 immunstärkande shottar",
    image: "/images/recept/4-immunstarkande-shottar.jpg",
    excerpt:
      "Fyra enkla immunstärkande shottar med gurkmeja, ingefära, citron, vitlök, äppelcidervinäger och honung. Stödjer kroppen vid förkylnings- och influensatider.",
    author: "Jill Johansson",
    date: "2025-05-05",
    category: "Drycker",
    ingredients: [
      "Gurkmeja-shot: 1,5 dl fruktjuice, 1 msk gurkmeja, ¼ tsk svartpeppar/chili/cayenne, 1 tsk kanel, 1 msk äppelcidervinäger, 1 msk citronjuice, 1 msk kokosolja eller olivolja",
      "Immunbomben: 1 bit färsk ingefära, 1 vitlöksklyfta, 1 tsk gurkmeja, 1 tsk svartpeppar, 1 tsk honung (valfritt)",
      "Ingefärs-shot: 1 msk finriven ingefära, 1 pressad citron, 5 msk vatten, 3/4 msk honung",
      "Äppelcidervinäger-shot: 10 skalade, krossade vitlöksklyftor, 3,5–4,5 dl vatten, 0,5 dl ekologisk äppelcidervinäger, 1 citron, 4 msk honung (eller mer efter smak)",
    ],
    instructions: [
      "Gurkmeja-shot: Blanda alla ingredienser i mixer eller shaker. Drick direkt eller fördela över dagen.",
      "Immunbomben: Koka upp 5 dl vatten med ingefära och vitlök några minuter. Häll den varma drycken över 1 tsk gurkmeja i en stor kopp (sila bort ingefära och vitlök). Blanda väl och tillsätt honung först när drycken är kroppstempererad. Undvik honung vid hög feber.",
      "Ingefärs-shot: Värm vatten till fingerljummet. Blanda 5 msk av vattnet med honungen. Tillsätt riven ingefära och pressad citron, mixa och sila genom liten sil/tesil. Späd med mer vatten vid behov.",
      "Äppelcidervinäger-shot: Sjud krossad vitlök i vattnet i 10 minuter. Sila bort vitlöken. Rör i äppelcidervinäger, citronsaft och honung. Drick 2–3 gånger dagligen efter behov.",
    ],
    benefits:
      "Recept på enkla drycker med naturliga råvaror – gurkmeja, ingefära, citron, vitlök, äppelcidervinäger och honung – som kan stödja kroppen vid förkylnings- och influensatider.",
  },
  {
    slug: "tahini-energi-bollar",
    title: "Tahini-energibollar",
    image: "/images/recept/tahini-energi-bollar.jpg",
    excerpt:
      "Snabbt och enkelt mellanmål med cirka 4–5 g protein per boll. Vegan, glutenfritt, sockerfritt och paleo. Tahini, frön, nötter och torkad frukt – klar på 20 minuter.",
    author: "Jill Johansson",
    date: "2025-05-05",
    category: "Mellanmål",
    ingredients: [
      "1,5 dl tahini (alternativt mandel-, jordnöts-, solros- eller cashewpasta)",
      "1 dl malda solrosfrön",
      "0,5 dl malda linfrön",
      "0,5 dl chiafrön",
      "1 dl mandelmjöl",
      "1 dl hackade valfria nötter (t.ex. valnötter, mandlar, paranötter, macadamia)",
      "1 dl valfri torkad frukt (tranbär, gojibär, russin)",
      "1 tsk kanel",
      "1 tsk vanilj",
      "För sötare bollar (valfritt): 2–3 msk riven kokos, 4–5 msk flytande sötningsmedel (t.ex. lönnsirap), 4–5 msk mini chokladpellets",
    ],
    instructions: [
      "Mixa solrosfrön (och linfrön om de inte redan är malda). Hacka nötterna i småbitar om du använder hela nötter.",
      "Blanda alla ingredienser i en skål med en sked. Det är okej om blandningen är lite smulig – den ska ändå hålla ihop.",
      "Rulla blandningen till bollar, ca 2–2,5 cm i diameter. Rulla gärna bollarna i kokos om du vill.",
      "Förvara i kylskåp minst 2 timmar så att smakerna hinner mogna – ju längre desto bättre balans.",
    ],
    tips: [
      "Förvaras i kylen. Ju längre du väntar innan du äter, desto bättre balans i smaken.",
    ],
    benefits:
      "Ett snabbt och enkelt mellanmål med cirka 4–5 gram protein per boll. Vegan, glutenfritt, sockerfritt och paleo – perfekt som energiboost eller när du vill ha något nyttigt att ta med.",
  },
  {
    slug: "sotpotatispaj-med-guacamole-och-tomater",
    title: "Sötpotatispaj med guacamole och tomater",
    image: "/images/recept/sotpotatispaj-med-guacamole-och-tomater.jpg",
    excerpt:
      "Raw-vänlig paj med sötpotatis-, morots- och äppelbotten och guacamole toppad med tomater, rucola, oliver och nötter. Kan gräddas 7 h på 45 °C eller 45 min på 175 °C.",
    author: "Guest User",
    date: "2025-04-15",
    category: "Varmrätter",
    ingredients: [
      "Botten: 1 sötpotatis, 2 morötter, 1 rött äpple, 3 dl saltade cashewnötter, ½ citron, ½ tsk salt",
      "Guacamole: ½ rödlök, 1 mogen tomat, 2 mogna avokados, ½–1 pressad vitlöksklyfta, 1 msk citronsaft, 1–2 krm cayennepeppar, salt och svartpeppar",
      "Topping: tomater, rucola, skivad rödlök, skivad squash (valfritt), bladpersilja, svarta oliver, rostade nötter eller saltade cashewnötter",
    ],
    instructions: [
      "Sätt ugnen på 45 °C (raw) eller 175 °C om du vill grädda botten snabbare. Botten kan förberedas dagen före.",
      "Skala och skiva sötpotatis, morötter och äpple. Lägg i matberedare tillsammans med cashewnötter och mixa till grov smet. Smaka av med citron och salt. Tryck ut smeten i en form med löstagbara kanter (gärna med bakplåtspapper). Grädda 7 timmar på 45 °C eller ca 45 minuter på 175 °C. Låt svalna.",
      "Guacamole: Skala och hacka rödlök och tomat. Dela och gröp ur avokadorna. Mixa avokado, tomat, lök och vitlök i matberedare till jämn röra. Smaka av med citronsaft, cayennepeppar, salt och svartpeppar.",
      "Bred ut guacamole på den svalnade botten. Lägg på tomater, rucola, skivad rödlök, persilja, oliver och nötter (t.ex. saltade cashewnötter eller macadamianötter).",
    ],
    benefits:
      "En rå- eller lågtemperaturgräddad paj med sötpotatis, morötter och äpple i botten och krämig guacamole med färska toppingar – både mättande och färgrik.",
  },
  {
    slug: "golden-milk-variant",
    title: "Golden Milk-variant",
    image: "/images/recept/golden-milk-variant.jpg",
    excerpt:
      "Guld mjölk med gurkmejepasta, mjölk (eller soja/havre), sesam- eller mandelolja och honung. Antiinflammatorisk kvällsdryck som stödjer immunsystemet och förbränningen.",
    author: "Guest User",
    date: "2025-04-15",
    category: "Drycker",
    ingredients: [
      "1 tsk gurkmejepasta",
      "1 stor kopp mjölk, sojamjölk eller havremjölk",
      "1 tsk sesamolja eller mandelolja",
      "lite honung",
      "eventuellt några kardemummakärnor",
    ],
    instructions: [
      "Värm alla ingredienser tillsammans i en kastrull. Drick gärna på kvällen som avslappnande dryck.",
    ],
    benefits:
      "Golden Milk innehåller antiinflammatoriska ingredienser och kan bidra till ett starkare immunsystem. Gurkmejan och oljan boostar förbränningen och stödjer lever och välmående – en enkel kvällsritual.",
  },
  {
    slug: "linsbiffar",
    title: "Linsbiffar",
    image: "/images/recept/linsbiffar.jpg",
    excerpt:
      "Vegana biffar på röda linser, rivna morötter, lök, solrosfrön och havregryn. Kryddade med oregano och chili – stek i olivolja och servera med ris, sallad och grekisk yoghurt.",
    author: "Guest User",
    date: "2025-04-15",
    category: "Varmrätter",
    ingredients: [
      "2 dl röda linser (okokta)",
      "drygt 4 dl vatten (till kokning av linserna)",
      "2 rivna morötter",
      "1 finhackad gul lök",
      "1 klyfta vitlök",
      "1 dl solrosfrön",
      "1 tsk salt",
      "1 tsk chilipulver",
      "2 tsk oregano (eller annan krydda efter smak)",
      "1–2 dl havregryn (till lämplig konsistens)",
      "olivolja till stekning",
    ],
    instructions: [
      "Koka de röda linserna i drygt 4 dl vatten tills de är mjuka. Låt svalna något.",
      "Blanda kokta linser med rivna morötter, finhackad lök, vitlök, solrosfrön, salt, chilipulver, oregano och havregryn. Justera med mer havregryn om blandningen är för lös – den ska hålla ihop som biffar.",
      "Forma till biffar och stek i olivolja i en stekpanna till gyllenbruna och genomvarma.",
      "Servera med ris, sallad och gärna en klick grekisk yoghurt.",
    ],
    tips: [
      "Servera med ris, sallad och grekisk yoghurt.",
    ],
    benefits:
      "Proteinrika linsbiffar med morot, lök och solrosfrön – enkelt och mättande vegetariskt alternativ som passar både vardag och gäst.",
  },
  {
    slug: "kramig-masala-med-cashewnotter-och-koriandersallad",
    title: "Krämig masala med cashewnötter och koriandersallad",
    image: "/images/recept/kramig-masala-cashewnotter-koriandersallad.jpg",
    excerpt:
      "Krämig indisk masala med morötter, ingefära, krossade tomater, kidney- och blackeyebönor och färskost. Serveras med basmatiris, koriandersallad och cashewnötter.",
    author: "Guest User",
    date: "2025-04-15",
    category: "Grytor",
    ingredients: [
      "3,5 dl basmatiris",
      "1 gul lök",
      "500 g morötter",
      "1 bit ingefära (ca 2 msk finriven)",
      "1 msk garam masala",
      "1 msk honung",
      "1 tsk sambal oelek",
      "1 burk krossade tomater",
      "3 dl vatten",
      "1 tärning grönsaksbuljong",
      "½ tsk salt",
      "1 förpackning färskost",
      "1 burk kidneybönor (avrunna och sköljda)",
      "1 burk blackeyebönor (avrunna och sköljda)",
      "körsbärstomater efter smak",
      "½ ask fryst koriander",
      "cashewnötter till servering",
      "Koriandersallad: 2 gröna paprikor, 1 silverlök, ½ ask koriander (eller färsk), 2 krm salt",
    ],
    instructions: [
      "Koka basmatiris enligt anvisning på förpackningen.",
      "Finhacka löken. Skala och riv morötterna grovt. Skala och riv ingefäran fint. Fräs lök, morötter och ingefära i en rymlig gryta i 2–3 minuter.",
      "Tillsätt garam masala, honung, sambal oelek, krossade tomater, vatten, grönsaksbuljong och salt. Låt sjuda i 10–12 minuter.",
      "Koriandersallad: Skär paprikor och silverlök, blanda i en skål med koriander och salt.",
      "Rör ner färskosten i grytan och mixa såsen slät med stavmixer.",
      "Häll av och skölj bönorna. Rör ner kidneybönor, blackeyebönor och körsbärstomater i grytan. Låt koka i 5 minuter.",
      "Vänd ner den frysta koriandern i grytan. Strö över cashewnötter. Servera masalan med ris och koriandersallad.",
    ],
    benefits:
      "Mättande vegetarisk gryta med indiska kryddor, bönor och krämig sås – perfekt med ris och fräsch koriandersallad.",
  },
  {
    slug: "mungbonssoppa-med-tomat",
    title: "Mungbönssoppa med tomat",
    image: "/images/recept/mungbonssoppa-med-tomat.jpg",
    excerpt:
      "Indisk-inspirerad soppa på mungbönor, tomatpuré, ingefära, chili och hing. Lättsmält och bra mot gaser i magen – mixa slät och servera varm.",
    author: "Guest User",
    date: "2025-04-15",
    category: "Soppor",
    ingredients: [
      "1¼ dl mungbönor (blötlägg i 5 timmar)",
      "1 l vatten",
      "1 msk ghi eller olja",
      "1 färsk finhackad chili (ta bort kärnorna; använd ½ chili för mildare soppa)",
      "1 msk torrostad malen koriander",
      "½ tsk hing (indisk krydda, bra mot gaser i magen)",
      "1 bit färsk ingefära (riven på rivjärn)",
      "1½ dl tomatpuré",
      "1 msk råsocker",
      "1¾ tsk salt",
    ],
    instructions: [
      "Blötlägg mungbönorna i 5 timmar. Koka upp bönorna i vattnet och skumma av.",
      "Tillsätt ghi eller olja, finhackad chili och riven ingefära. Låt koka på svag värme under lock ca 1 timme, eller tills bönorna är sönderkokta.",
      "Blanda i tomatpuré, koriander, hing, råsocker och salt. Låt koka på svag värme i 5–10 minuter.",
      "Mixa soppan slät med stavmixer. Servera varm.",
    ],
    benefits:
      "Lättsmält soppa med mungbönor och tomat. Hing är en indisk krydda som anses bra mot gaser i magen – soppan blir mättande och lugnande för magen.",
  },
  {
    slug: "rod-linssoppa",
    title: "Röd linssoppa",
    image: "/images/recept/rod-linssoppa.jpg",
    excerpt:
      "Kryddad röd linssoppa med lök, morötter, vitlök, timjan, curry, kanel, ingefära och chili. Mixas slät och serveras gärna med bröd och yoghurt.",
    author: "Guest User",
    date: "2025-04-15",
    category: "Soppor",
    ingredients: [
      "2 dl röda linser",
      "1 l grönsaksbuljong",
      "1 gul lök",
      "olja till fräsning",
      "2 morötter (slantskurna)",
      "2 vitlöksklyftor",
      "timjan, curry, kanel, ingefära och chili efter smak",
    ],
    instructions: [
      "Koka upp röda linser i grönsaksbuljongen och skumma av. Låt koka i 10 minuter.",
      "Under tiden: fräs den finhackade löken i olja ca 5 minuter utan att den får färg. Tillsätt slantskurna morötter, vitlök, timjan, curry, kanel, ingefära och chili och fräs tills det mjuknar.",
      "Häll lök- och kryddblandningen i grytan med linserna. Låt koka ca 20 minuter tills allt är mjukt.",
      "Mixa soppan slät med stavmixer. Smaka av med extra krydda. Servera gärna med gott bröd och yoghurt.",
    ],
    tips: [
      "Servera med bröd och yoghurt.",
    ],
    benefits:
      "Mättande och kryddad röd linssoppa – enkel att laga och perfekt med bröd och yoghurt.",
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}

export function getRecipeSlugs(): string[] {
  return RECIPES.map((r) => r.slug);
}
