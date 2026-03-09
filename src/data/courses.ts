export interface Course {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  level?: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  courseType: string;
  suggestedTeacher?: string;
}

export interface CategoryConfig {
  id: string;
  label: string;
  seoText: string;
}

export const CATEGORIES: CategoryConfig[] = [
  {
    id: "alla",
    label: "Alla",
    seoText: "",
  },
  {
    id: "kundaliniyoga",
    label: "Kundaliniyoga",
    seoText:
      "Kundaliniyoga är en fysisk, mental och andlig yogaform med rörelser, andning, meditation och avslappning. Fokus ligger på kraft och uthållighet – i din egen takt och helt utan prestation. Passar alla, oavsett ålder och erfarenhet.",
  },
  {
    id: "yinyoga",
    label: "Yin & Restorative",
    seoText:
      "Våra yinyogakurser ger dig ett mjukt, meditativt rum för återhämtning. Du stannar längre i positionerna, påverkar bindväv och leder och låter nervsystemet varva ned. Ett fint komplement till annan träning – och en plats att landa när livet går fort.",
  },
  {
    id: "medicinsk-yoga",
    label: "Medicinsk Yoga",
    seoText:
      "Medicinsk yoga vänder sig till dig som behöver en extra varsam, läkande praktik – vid stressrelaterade besvär, smärta, sömnproblem eller hormonella förändringar som PMS och klimakteriet. Klassen anpassas efter gruppen och dina individuella behov.",
  },
  {
    id: "specialklasser",
    label: "Workshops",
    seoText:
      "För dig som vill fördjupa din praktik eller prova något nytt erbjuder vi specialklasser och temapass – till exempel gongbad, iyengaryoga, yoganidra, dansmeditation och yoga för musiker. Varje pass ger en unik upplevelse.",
  },
];

function withCategory<T extends { category: string }>(
  items: T[],
  categoryId: string
): (T & { categoryId: string })[] {
  return items.map((item) => ({ ...item, categoryId }));
}

const kundaliniCourses = withCategory(
  [
    {
      id: "kundaliniyoga",
      title: "Kundaliniyoga",
      category: "Kundaliniyoga",
      level: "Alla kan delta – nybörjare som erfarna",
      shortDescription: "Kraft och närvaro i din egen takt – helt utan prestation. Kundaliniyoga i Göteborg.",
      longDescription: `Kundaliniyoga är en fysisk, mental och andlig form av yoga som består av rörelser, andnings- och fokuseringstekniker, avslappning samt olika typer av meditationer och mantra. Alla kan delta – nybörjare som erfarna – helt utan prestation.

Det handlar om enkla men kraftfulla tekniker där du i din egen takt stärker dig själv, finner lugnet på insidan samtidigt som kroppen och sinnet blir mer flexibla. Fokus ligger snarare på kraft och uthållighet än på avancerade kroppsställningar; vi tränar vår närvaro i nuet, vilket får positiva effekter i vardagen. Yoga är till för alla, oavsett ålder, kön och rörlighet – anpassning är alltid möjlig utifrån dina förutsättningar.

Vi gör ett yogapass och efter det får vi en skön stund för återhämtning i Savasana. På vissa klasser lyssnar vi till gongarnas läkande vibrationer som tar oss till djup avslappning, därefter avslutar vi med meditation. Välkommen till Kundaliniyoga på Yogastudion i Linné, Göteborg.`,
      imageUrl: "/images/recept/Kundalini2png.png",
      courseType: "kundaliniyoga",
      suggestedTeacher: "Anki Bladh",
    },
    {
      id: "gravidyoga",
      title: "Gravidyoga",
      category: "Kundaliniyoga",
      level: "Lugn yoga med fokus på andning och trygghet",
      shortDescription: "Skonsam yoga som förbereder kropp och sinne för förlossning. Gravidyoga Göteborg.",
      longDescription: `Gravidyoga är en lugn form av yoga där stor vikt läggs på andning, fokus och uthållighetsträning – alla viktiga för en trygg förlossning. Vår gravidyoga på Yogastudion innehåller yoga, meditationer och andningsteknik som förbereder dig för värkarbete, förlossning och att bli förälder.

Du förbättrar din hälsa, självstyrka och känsla av välmående. En människa som andas lugnt och djupt är lugnare och känner sig tryggare. Gravidyogan reducerar stress och verkar lugnande så att du och din baby mår så bra som möjligt. Yogapassen genomförs i lugnt tempo med ställningar och övningar för flexibilitet och styrka, kombinerat med andningsteknik och koncentration. Meditation ingår i kursen.

Graviditetsprocessen är en transformerande fas med stora förändringar. Gravidyogaklasserna ger dig möjlighet att vara med andra som går igenom liknande erfarenheter. Vi är inte en förlossningsskola, men det du tränar under kursen stöttar dig genom förändringar och förlossning. Boka gravidyoga i Göteborg – välkommen till Linné.`,
      imageUrl: "/images/recept/Gravidyoga2.png",
      courseType: "gravidyoga",
    },
  ],
  "kundaliniyoga"
);

const yinCourses = withCategory(
  [
    {
      id: "yinyoga",
      title: "Yinyoga",
      category: "Yinyoga",
      level: "Stillsam & meditativ – inga förkunskaper krävs",
      shortDescription: "Stillsam, meditativ yoga för återhämtning och inre lugn. Yinyoga Göteborg.",
      longDescription: `Yinyogan är en stillsam och meditativ yoga. Kursen är för dig som vill hitta ett inre lugn och stabilitet samt få tillgång till mer kraft och energi. Medveten närvaro följer som en röd tråd genom klassen.

Yinyogan är återhämtande och ett fint komplement till mer fysiska aktiviteter. Ibland använder vi lugn andningsövning för att stilla sinnet lite extra. Är du lite stel eller känner dig stressad passar den här yogaformen perfekt. Inga förkunskaper krävs.

Du är välkommen att boka kurs eller komma på enstaka pass i mån av plats. Yinyoga på Yogastudion – en personlig yogastudio på Vegagatan i Linné, Göteborg.`,
      imageUrl: "/images/recept/Yinyoga2.png",
      courseType: "yinyoga",
      suggestedTeacher: "Jill Johansson",
    },
    {
      id: "yin-flow",
      title: "Yinyoga med Yin Flow",
      category: "Yinyoga",
      level: "Mjuka flödande rörelser → stillhet & djupavslappning",
      shortDescription: "Lugn yogapraktik som stödjer varje kropp och förutsättning. Yin Flow i Göteborg.",
      longDescription: `Yinyoga med Yin Flow är en lugn yogapraktik med yinkvalitet som stödjer varje individs kropp och förutsättningar. Vi går varsamt in i yinyogapositionerna med mjuka, flödande och vaggande rörelser som länkas samman med andetaget, för att sedan stanna i stillhet och djupavslappning.

Denna metod passar dig som vill komma åt såväl flödet som stillheten och anpassa din yinyogapraktik efter dina behov. Vi rör oss intuitivt, lyssnar inåt och ger kroppen frihet att röra sig i den takt den vill – bortom form och prestation. Vi påverkar bindväv, leder och energisystem och stärker balansen genom lugnande andningsövningar anpassade för yin.

Fördelar med intuitiv Yinyoga: passar alla, ger djupavslappning, balanserar livskraften, frigör spänningar, lugnar sinnet, ökar kroppsmedvetenhet och smidighet, balanserar nervsystemet och hormoner, reducerar stress och är ett bra komplement till dynamisk träning. Passet avslutas med djup vila. Välkommen till Yin Flow på Yogastudion i Linné.`,
      imageUrl: "/images/recept/YinFlow2.png",
      courseType: "yinyoga-flow",
      suggestedTeacher: "Jill Johansson",
    },
  ],
  "yinyoga"
);

const medCourses = withCategory(
  [
    {
      id: "medicinsk-yoga",
      title: "Medicinsk Yoga",
      category: "Medicinsk Yoga",
      level: "För stress, återhämtning och hormonbalans",
      shortDescription: "Lugnare yogaform med fokus på läkande rörelser och andning. Medicinsk yoga Göteborg.",
      longDescription: `Medicinsk yoga är en lugnare yogaform som bygger på Kundaliniyogan men är mindre fysiskt krävande. Vi gör mjuka, inkännande rörelser tillsammans med olika andningstekniker och lägger stor vikt på djup avslappning – vi tar oss tid att stanna upp och hämta kraft och energi.

Forskning visar att medicinsk yoga är gynnsam vid stressrelaterade symtom, oro, ångest, depression, sömnstörningar, högt blodtryck och ryggbesvär. Det är viktigt att du meddelar innan kursen om du har någon sjukdom som vi behöver känna till.

Vi erbjuder även yoga för kvinnors hormonbalans – en anpassning av våra medicinska yogakurser. Vi arbetar med att balansera hormoner som kan ge besvär av fysisk, mental och emotionell karaktär, under alla livets skeden. Kursen vänder sig till alla kvinnor och framförallt till dig som upplever PMS eller klimakteriebesvär. Boka medicinsk yoga på Yogastudion i Linné, Göteborg.`,
      imageUrl: "/images/recept/Kundalini2png.png",
      courseType: "medicinsk-yoga",
      suggestedTeacher: "Linda Dankert",
    },
  ],
  "medicinsk-yoga"
);

const specialCourses = withCategory(
  [
    {
      id: "yoga-for-musiker",
      title: "Yoga för musiker",
      category: "Specialklass",
      level: "Torsdagar kl 17–18",
      shortDescription: "Skonsam träning anpassad för musikers behov. Yoga för musiker Göteborg.",
      longDescription: `Att arbeta med musik är både inspirerande och givande – men det ställer också höga krav: sena kvällar, oregelbundna arbetstider, svårigheter att somna efter konserter, prestationspress, smärta från överbelastning och brist på återhämtning.

Yoga för musiker är klasser särskilt utformade för dig som är professionell musiker eller musikstuderande. Torsdagar kl 17–18 bjuder vi in till öppna yogaklasser där vi fokuserar på att stärka och balansera kroppens muskler, lugna nervsystemet och skapa balans i vardagen. Vi jobbar med skonsam och stärkande rörelseträning anpassad för musikers behov, andning och avslappning, verktyg för att minska stress och främja sömn, samt kroppsmedvetenhet för ett hållbart musikutövande. Ingen förkunskap krävs – vi möter er utifrån där ni är.

Kursen ledes av Malin Wättring, frilansande jazzmusiker och kompositör, med utbildning i Katharina Gieglings metod Yoga för musiker (Vinyasa och Ayurveda). Boka yoga för musiker på Yogastudion, Vegagatan 16 i Linné.`,
      imageUrl: "/images/recept/Yogamusiker2.png",
      courseType: "yoga-for-musiker",
      suggestedTeacher: "Malin Wättring",
    },
    {
      id: "gongbad",
      title: "Gongbad",
      category: "Specialklass",
      level: "Djup avslappning och återhämtning",
      shortDescription: "Låt vibrationer och ljud guida dig in i djup vila. Gongbad Göteborg.",
      longDescription: `Ett gongbad är bland annat bra för att lösa upp spänningar i kroppen och öka flödet. Människan består av 60–70 % vatten – när man spelar på gongen skapas vibrationer som sätter vattnet i kroppen i rörelse. Detta bidrar till att spänningar kan vibrera loss och flödet ökar, vilket sätter igång läkande och återhämtande processer.

Gong kan även lösa upp emotionella blockeringar. Känslor som trycks ner kan fastna i kroppen och skapa smärta, avstängdhet eller stelhet. Gongens vibrationer kan väcka undantryckta känslor så att de kan släppa och lämna kroppen – vilket bidrar till mental och känslomässig hälsa. Gong påverkar även våra chakran; vibrationerna ökar flödet i chakrasystemet och bidrar till balans.

Välkommen till gongbad på Yogastudion i Linné, Göteborg.`,
      imageUrl: "/images/recept/Gongbad2.png",
      courseType: "gongbad",
      suggestedTeacher: "Malin Wättring",
    },
    {
      id: "yoga-for-man",
      title: "Yoga för män",
      category: "Specialklass",
      level: "Grundkurs med precision",
      shortDescription: "Grunderna i en metod känd för tydlighet och kroppslinjering. Yoga för män Göteborg.",
      longDescription: `Är du man och nyfiken på yoga och vill lära dig grunderna i en metod som är känd för sin precision och fokus på korrekt kroppslinjering? Då är vår yogagrupp för män perfekt för dig. Kursen är utformad för män som vill stärka både kropp och sinne.

Vad kan du förvänta dig? Grundläggande yogapositioner (asanas) för att bygga styrka, balans och flexibilitet, samt en trygg och stödjande miljö där du kan utvecklas i din egen takt. Boka yoga för män på Yogastudion – en personlig yogastudio på Vegagatan i Linné, Göteborg.`,
      imageUrl: "/images/recept/Yogaman2.png",
      courseType: "yoga-for-man",
    },
    {
      id: "elemental-flow",
      title: "Elemental Flow",
      category: "Specialklass",
      level: "Jord, Vatten, Eld, Luft & Eter",
      shortDescription: "Långsamt tempo, somatik och energi – avslutas med djup vila.",
      longDescription: `Elemental Flow – yoga genom Jord, Vatten, Eld, Luft och Eter. Genom att lyssna in möjliggör vi förberedelser på både somatisk och energetisk nivå. Det långsamma tempot ger tid att stödja kroppen där den befinner sig och skapa balans fysiskt, energimässigt och mentalt.

Vi avslutar timmen med djup vila och integration. Välkommen till inspirerande musik, en bra blandning av uppfriskande övningar och sköna stretchar – så är du redo för resten av veckan. Ingen tidigare erfarenhet krävs; passar alla. Elemental Flow på Yogastudion i Göteborg.`,
      imageUrl: "/images/recept/Elemental2.png",
      courseType: "elemental-flow",
    },
    {
      id: "iyengaryoga",
      title: "Iyengaryoga",
      category: "Specialklass",
      level: "Precision & hjälpmedel",
      shortDescription: "Meditation in action – noggrann linjering för alla kroppar. Iyengaryoga Göteborg.",
      longDescription: `Yogaformen har fått sitt namn efter BKS Iyengar, en av världens främsta yogamästare, och har sin grund i Patanjalis Yoga Sutras. BKS Iyengar menar att i praktiken av asana finns alla delar av yogan – för att nå vårt inre måste vi börja utifrån och arbeta oss inåt. För att stilla medvetandet måste vi först stilla kroppen.

Därför läggs stor vikt på att utföra yogaställningarna på ett anatomiskt och fysiologiskt hälsosamt sätt. Iyengar var först med att systematiskt använda hjälpmedel som klossar, stolar, bälten och rep – tack vare dem kan även personer med fysiska begränsningar utföra ställningarna på bästa sätt. Hjälpmedlen gör det möjligt att stanna längre i positionerna, vilket ger uthållighet och ökar koncentrationsförmågan. ”Meditation in action” kallar han detta. Iyengaryogalärare har goda kunskaper i anatomi och fysiologi och hjälper eleverna att hitta sitt sätt att utföra övningarna. Boka Iyengaryoga på Yogastudion i Linné.`,
      imageUrl: "/images/recept/Iyengaryoga2.png",
      courseType: "iyengaryoga",
    },
    {
      id: "yoga-nidra-innerdance-reiki",
      title: "YogaNidra, Innerdance & Reiki",
      category: "Specialklass",
      level: "Ljudresa & energiarbete",
      shortDescription: "Djup avslappning där kropp och sinne får vila och återhämta sig.",
      longDescription: `Välkommen till din ljudresa. Låt ljudvågor och vibrationer guida dig in i djup avslappning där kropp och sinne får vila, bearbeta och återhämta sig. Under sessionen kombineras ljudresan med Reiki – en energibaserad metod som många upplever som lugnande och balanserande.

Varje upplevelse är unik. Du kan känna dig tyngdlös, uppleva inre bilder, temperaturväxlingar eller nya insikter – allt i din egen takt. Hjärnan är formbar, och i vilotillstånd ges utrymme för förändring och läkning. Mellan sessionerna kan du märka nya perspektiv och en djupare kontakt med dig själv. Välkommen till en resa inåt – där du får vara helt och fullt du. YogaNidra och Reiki på Yogastudion, Göteborg.`,
      imageUrl: "/images/recept/reiki2.png",
      courseType: "yoga-nidra-innerdance-reiki",
    },
    {
      id: "dansmeditation",
      title: "Dansmeditation",
      category: "Specialklass",
      level: "Dans + stillhet – de fyra elementen",
      shortDescription: "Frigörande dans och meditation i rörelse. Dansmeditation Göteborg.",
      longDescription: `För dig som både vill dansa och meditera. Vi börjar med centrering och grundning för att förbereda kroppen inför danscykeln – frigörande dans – och dansar oss genom de fyra elementen: jord, eld, vatten och luft. Därefter följer en kort tyst meditation i stillhet. Passet avrundas med avslappning och vila.

Dansmeditation är en metod för att frigöra energi, öppna upp för kreativa processer och bli mer närvarande i nuet genom enkla andnings- och kroppsövningar. Inga förkunskaper krävs. Boka dansmeditation på Yogastudion i Linné, Göteborg.`,
      imageUrl: "/images/recept/dans2.png",
      courseType: "dansmeditation",
    },
    {
      id: "healing-budskap",
      title: "Healing & Budskap",
      category: "Specialklass",
      level: "Meditation + healing",
      shortDescription: "Healing som stärker ditt inre helande arbete.",
      longDescription: `Under meditationen ges healing till var och en av er. Healing ökar ditt energiflöde och cirkulation, löser blockeringar och hjälper sinnet att återhämta sig. Det ger djup avslappning och välbefinnande.

Du kan bli hjälpt av healing som stärker ditt inre helande arbete – en vacker och läkande process för din unika själ. Healing är alltid anpassat till dig och din situation. Här kan du släppa pressen att prestera och bara tillåta dig själv att ta emot. Healing & Budskap på Yogastudion, Vegagatan 16 i Göteborg.`,
      imageUrl: "/images/recept/Healing2.png",
      courseType: "healing-budskap",
    },
    {
      id: "foretagsyoga",
      title: "Företagsyoga eller kompisgänget",
      category: "Specialklass",
      level: "Skräddarsydd för grupper",
      shortDescription: "Privata yoga- eller gong-klasser för företag och vänner. Företagsyoga Göteborg.",
      longDescription: `För företag och privata grupper erbjuder vi skräddarsydda yoga- eller gong-klasser, där du och dina anställda eller vänner får njuta av ett härligt pass. Passen kan anpassas efter gruppens önskemål och behov – på plats hos er eller i vår studio på Vegagatan 16 i Linné.

Kontakta oss för bokning och priser: jill@jillskundalini.com eller 070-7958514. Företagsyoga och gruppyoga i Göteborg – Yogastudion.`,
      imageUrl: "/images/recept/Foretag2.png",
      courseType: "foretagsyoga",
    },
  ],
  "specialklasser"
);

export const ALL_COURSES: Course[] = [
  ...kundaliniCourses,
  ...yinCourses,
  ...medCourses,
  ...specialCourses,
];

export function getCoursesByCategory(): Map<string, Course[]> {
  const map = new Map<string, Course[]>();
  CATEGORIES.forEach((c) => {
    if (c.id === "alla") return;
    map.set(c.id, ALL_COURSES.filter((course) => course.categoryId === c.id));
  });
  return map;
}
