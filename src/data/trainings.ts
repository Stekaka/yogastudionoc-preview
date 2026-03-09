export interface TrainingMeta {
  date: string;
  teacher?: string;
  guestTeacher?: string;
  place: string;
  price?: string;
  priceNote?: string;
  note?: string;
}

export interface TrainingBlock {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: string;
  teacher?: {
    name: string;
    italic?: string;
    bio?: string;
    contact?: string;
    link?: { href: string; label: string };
  };
}

export interface Training {
  slug: string;
  title: string;
  shortDescription: string;
  duration?: string;
  meta: TrainingMeta;
  ctaLabel?: string;
  ctaHref?: string;
  blocks: TrainingBlock[];
}

export const TRAININGS: Training[] = [
  {
    slug: "yinflow",
    title: "Yinyoga Flow – Yogalärarutbildning",
    shortDescription:
      "Inkännande, utforskande och flödande yoga. Förening av stillhet och rörelsefrihet på kroppens villkor.",
    duration: "50 tim",
    meta: {
      date: "Nytt datum meddelas senare",
      teacher: "Pernilla Cristvall",
      guestTeacher: "Anna Lindbäck (online)",
      place: "Yogastudion, Vegagatan 16, Göteborg",
      price: "13 000 kr",
      priceNote: "Betalning via Klarna – du bestämmer hur och i vilken takt du vill betala.",
    },
    ctaLabel: "Boka eller hör av dig",
    ctaHref: "/boka",
    blocks: [
      {
        paragraphs: [
          "Denna unika yinyogalärarutbildning med fokus på medveten närvaro och återhämtning passar dig som vill utforska och undervisa yin på ett naturligt sätt där vi väver samman yinyogans stilla positioner med mjuka yinflöden för att komma djupare in i fascians levande landskap och flöde.",
          "Vi utgår från yinyogans stilla positioner men lär oss att mjukt flöda i och ur yinyogapositionerna, för att lättare hitta in i djupavslappning genom att först släppa på underliggande spänningar i kroppen och sinnet.",
          "Utbildningen ger dig en djupare förståelse och upplevelse för effekterna av att praktisera yin ur såväl ett österländskt som västerländskt perspektiv. Du får kunskap om vad som händer i vår fascia och vår kropps olika system när vi förenar klassisk yinyoga med långsamt flödande Yin Flow – en kombination av två yinpraktiker samt myofascial teknik för att komma djupare in i fascians levande landskap och flödessystem.",
          "Precis som yin och yang, det maskulina och feminina, rör sig in och ut ur varandra i en ständig dans, kan vi med denna kombination av tekniker komma åt vår fascia och bindväv i såväl stillhet som i rörelse och individanpassa yinpraktiken efter våra unika behov och förutsättningar samt utforska vår kropp, vårt sinne och vårt energisystem i fler dimensioner.",
          "Denna yinyogautbildning är för dig som vill utforska och guida yin till sin natur – såväl det statiska och hållande som det inkännande, rytmiska, cykliska och dynamiska – för att omfamna hela den feminina essensen. Passar också dig som vill gå en lärarledd interaktiv yinyogautbildning på plats, hand i hand med din egen personliga resa i en trygg och tillåtande atmosfär. Ingen tidigare erfarenhet krävs.",
        ],
      },
      {
        teacher: {
          name: "Pernilla Cristvall",
          italic: "Yogalärare och andlig inspiratör som vandrar den shamanska vägen.",
          bio: "Pernilla är yogalärare, medicinkvinna, månprästinna och författare som vandrar den shamanska vägen med naturen som inspiration och vägledning. Hon har guidat och utbildat grupper inom yoga, personlig och andlig utveckling sedan 20 år tillbaka, där hon väver samman sina erfarenheter inom yoga, shamanism, tantra, ayurveda, pranayama, mindfulness, healing och coaching – allt djupt förankrat utifrån egna erfarenheter. Pernilla driver Spiritual Uplift tillsammans med Mattew.",
          contact: "Frågor om utbildningen: pernilla@spiritual-uplift.com, 070-772 11 10",
          link: { href: "https://spiritual-uplift.com/spritual-uplift", label: "Spiritual Uplift" },
        },
      },
      {
        heading: "Yinyoga Flow – helande yoga",
        paragraphs: [
          "Yinyoga Flow är en helande yoga med kombinationen av yinyogans stilla positioner och Yin Flows naturliga inkännande rörelsemönster för att skapa inre balans. Tidigare trodde man att yinyoga med dess stilla positioner var den enda effektiva yogaformen för att komma åt bindväven, men forskning och praktisk erfarenhet har visat att även mjuka långsamma rörelseflöden med komprimerande och utsträckande rörelser samt vridningar ger ökad smidighet och elasticitet – fascian kan, likt en tvättsvamp, sprida vätska ut i alla delar av våra vävnader.",
          "Kombinationen av yinyogans stilla positioner och Yin Flow möjliggör att vi lättare kan anpassa yinyogan efter våra olika behov och förutsättningar då vi varsamt går in i positionerna med mjuka, gungande och vaggande rörelser som länkas samman med vårt andetag och vår intuition för att sedan stanna i stillhet och djupavslappning. Vi påverkar våra yindelar i kroppen genom att töja och stärka inre djupt liggande strukturer samt stärker och balanserar vårt energisystem genom lugnande andningsövningar anpassade för yin.",
          "Det tantriska perspektivet genomsyrar Yinyoga Flow, framför allt hur vi praktiserar: en utforskande yoga bortom prestige och prestation där vi rör oss i cirklar och spiraler med den tantriska pulsen och rytmen som vägvisare in i stillheten i såväl positionen som i oss själva.",
        ],
      },
      {
        heading: "Så här går det till",
        list: [
          "Vi hittar långsamt in i varje yinyogaposition genom att först intuitivt gunga, vagga och röra oss i cirkel-, spiral och vågrörelser för att mjuka upp och ta kontakt med området.",
          "Sedan stannar vi rörelseflödet, slappnar av och smälter ner i positionen. Andas medvetna andetag och håller positionen mellan tre till fem minuter.",
          "Därefter går vi varsamt ur positionen och vilar eller vaggar i mellanrummet för att sedan fortsätta flöda in till nästa position.",
        ],
      },
      {
        heading: "Utbildningen passar dig som vill",
        list: [
          "Gå en lärarledd yinyogalärarutbildning på plats med kombination av teori och praktik i en interaktiv och personlig upplevelse tillsammans med andra i en öppen och tillåtande atmosfär.",
          "Utforska och undervisa yin i såväl stilla positioner som mjuka rörelseflöden.",
          "Lära dig hur yinyogans stilla positioner, Yin Flows mjuka rörelseflöden och andningstekniker samverkar med vår fascia och kroppens olika system.",
          "Gå en yinyogalärarutbildning med fokus på det intuitiva och feminina flödet.",
          "Undervisa från din intuition och din inre röst.",
          "Fördjupa din kunskap inom yin för din egen skull eller för att sprida den vidare till andra.",
          "Komplettera med en ny inriktning som fysioterapeut, samtalsterapeut, coach eller annan yrkesroll där du arbetar med människor.",
        ],
      },
    ],
  },
  {
    slug: "shamanic-sound-healing",
    title: "Shamanic Sound Healing",
    shortDescription: "Helande toner för alla medvetandenivåer. Lär dig hålla Sound Healing i shamansk anda – i grupp och individuellt.",
    duration: "30 timmar",
    meta: {
      date: "Ej bokat ännu",
      place: "Yogastudion, Vegagatan 16, Göteborg",
    },
    ctaLabel: "Boka eller hör av dig",
    ctaHref: "/boka",
    blocks: [
      {
        paragraphs: [
          "I denna fördjupningsmodul lär du dig att hålla Sound Healing i shamansk anda, såväl i grupp som i individuella sessioner. Fokus ligger på intuitivt skapande av musik, ljud, toner och rytmer från urinstrument och inte minst din egen kraftfulla röst för att hitta ditt alldeles egna uttryckssätt.",
          "Vi går igenom hur ljud påverkar oss djupt in på cellnivå och samverkar med vårt eget energifält.",
        ],
      },
      {
        quote: "Melodi är hjärtats medicin, rytm är kroppens medicin. Tystnad är sinnets medicin, harmoni är själens medicin.",
      },
      {
        heading: "Kursinnehåll",
        list: [
          "Syfte och teknik att hålla Sound Healing-sessioner utifrån din intuition",
          "Fördelar och effekter av Sound Healing (kroppsligt, mentalt som själsligt)",
          "Forskningsresultat inom Sound Healing",
          "Introduktion och utforskande av trumma, klang- och kristallskålar, gong och andra urinstrument i ett helande syfte",
          "Hur du skapar teman och upplägg för Sound Healing-sessioner med shamansk inriktning",
          "Röstaktiveringsövningar",
          "Utforskande av din autentiska röst och medicinsång",
          "Hur Sound Healing med dess övertoner och vibrationer påverkar ditt energisystem",
        ],
      },
      {
        heading: "För dig som vill",
        list: [
          "Hålla Sound Healing-sessioner med shamansk inriktning",
          "Undervisa Sound Healing-sessioner från din intuition",
          "Hitta ditt egna unika uttryck som Soundhealer",
          "Få kontakt med din autentiska röst",
          "Guida Sound Healing i helande och terapeutiskt syfte (hjälpa kroppen att läka sig själv) såväl i grupp som individuellt",
        ],
      },
    ],
  },
  {
    slug: "lymfyin-och-yinyoga",
    title: "LymfYin & Flödande Yinyoga",
    shortDescription: "Påbyggnadsutbildning för yinyogalärare och dig som vill fördjupa din egen praktik – mjukare, djupare och mer intuitivt.",
    duration: "YACEP 30 timmar",
    meta: {
      date: "13–15 februari 2026",
      teacher: "AnneSophie Sjöblom",
      place: "Yogastudion, Vegagatan 16, Göteborg samt onlineportal",
      price: "7 500 kr",
      priceNote: "Delbetalning 3 × 2 500 kr. Fred 14–18, lörd 8.30–16.30, sönd 8.30–15.30. Certifiering ingår.",
      note: "Endast 10 platser – fylls på snabbt.",
    },
    ctaLabel: "Boka min plats",
    ctaHref: "/boka",
    blocks: [
      {
        paragraphs: [
          "För dig som redan undervisar Yinyoga – eller vill fördjupa din egen praktik på en trygg nivå. Den här utbildningen är skapad för dig som vill undervisa mjukare, djupare och mer intuitivt.",
          "Du tas varsamt vidare in i en djupare förståelse för kroppens naturliga rörelser, lymfsystemets behov och Yins läkande intelligens.",
        ],
      },
      {
        heading: "Den här utbildningen är skapad för dig som",
        list: [
          "Redan undervisar Yinyoga",
          "Har gått en Yinyoga-utbildning (hos mig eller någon annan)",
          "Vill fördjupa din kroppskännedom och röra dig mjukt med energin",
          "Längtar efter att guida klasser som är läkande, intuitiva och flödande",
          "Vill möta dig själv och dina grupper med större närvaro, lyhördhet och trygghet",
          "Vill fördjupa din egen praktik",
        ],
      },
      {
        heading: "När Yin möter flöde händer något magiskt",
        paragraphs: [
          "Utbildningen väver samman tre läkande dimensioner som sällan möts: Lymf – Yin – Flow. Kombinationen gör utbildningen unik och uppskattad av både lärare och kursdeltagare.",
        ],
      },
      {
        heading: "Lymf – kroppens inre flöde",
        list: [
          "Tekniker för att stödja lymfflödet och stärka immunförsvaret",
          "Mjuk självmassage",
          "Flödesprinciper för återhämtning, minskad stagnation och balansering",
          "Andningsövningar för ökat flöde i lymfsystemet",
          "Fritt inre flöde både kroppsligt och själsligt",
        ],
      },
      {
        heading: "Yin – nervsystemets vila och djup",
        list: [
          "Trygg, inkännande och jordande Yin",
          "Fokus på närvaro och självkärlek",
          "Stillhet som öppnar, mjukar och läker",
          "Fascian och bindväven får ett ökat flöde",
        ],
      },
      {
        heading: "Flow – somatisk rörelse och intuitiv rytm",
        list: [
          "Organiska övergångar mellan positioner",
          "Fri, mjuk rörelse som följer kroppens egen rytm",
          "Ett sätt att undervisa Yin som känns levande, verkligt och djupt mänskligt",
        ],
      },
      {
        heading: "Vad du lär dig – under utbildningen får du",
        list: [
          "Fördjupad förståelse för lymfsystemet och hur det påverkar Yin",
          "Trygga, läkande övergångar mellan positioner",
          "Tekniker för mjuk somatisk rörelse",
          "Nya sätt att skapa klasser med tema flöde, vila och energi",
          "Fördjupning i närvaro, intuition och kroppskänsla",
          "Verktyg för att stödja hormonbalans och nervsystem",
          "Förfinad pedagogik och språk för att guida mjukt och hållande",
        ],
      },
      {
        heading: "Efter utbildningen kan du",
        list: [
          "Hålla egna LymfYin-klasser – online och på plats",
          "Väva in somatiskt flöde i dina Yinklasser",
          "Skapa egna workshops och temaklasser",
          "Erbjuda privatklasser med fokus på lymfflöde och mjuk rörelse",
          "Använda teknikerna vid stress, utmattning och hormonell obalans",
          "Integrera kunskapen i alla dina andra yogastilar",
          "Fördjupa din egen praktik med mer närvaro och intuition",
          "Räkna utbildningen som YACEP-timmar",
        ],
      },
      {
        heading: "Hur går utbildningen till?",
        list: [
          "Förinspelade övningar med självmassage",
          "Förinspelade fördjupande övningar med andning",
          "Guidade pass under helgen",
          "Genomgång av alla positioner och rörelser under helgen",
          "Teori om lymfsystemet, glymfatiska systemet och andning under helgen",
          "Gedigen lärarmanual",
        ],
      },
      {
        heading: "Min väg att undervisa – mjuk, närvarande och läkande",
        paragraphs: [
          "I min undervisning får kroppen tala sitt eget språk. Här möts Yin, flöde, lymfa och hjärtats visdom i en mjuk metod som väcker både stillhet och liv inifrån: självkärlek, somatisk trygghet, mjukhet, kroppens naturliga intelligens, vår förmåga att självläka och följa hjärtats väg hem.",
          "Med över 10 års erfarenhet som yogalärarutbildare, och som E-RYT 500 + YACEP, väver jag samman en unik linje av LymfYin, Yin, Flow och närvaro. Du får ta del av en metodik som du inte hittar i vanliga Yin-kurser.",
        ],
      },
      {
        heading: "Bonus när du bokar",
        paragraphs: [
          "Du får direkt tillgång till din utbildningsportal online med LymfYin-pass, andningsövningar och flera varianter av självmassage – och kan påbörja din resa i LymfYin och Flödande Yinyoga redan idag.",
        ],
      },
      {
        quote: "För mig var LymfYin den perfekta fördjupningsutbildningen. Egenmassagen gör verkligen skillnad vilket känns redan efter några dagar. Älskar hur de mjuka lymfrörelserna gifter sig med yinyogans positioner, en perfekt kombo. AnneSophie är en mycket duktig och närvarande lärare som med stor värme och engagemang väcker gruppens intresse och bjuder in till en skön gemenskap. — Lena Mikaelsson, Massageterapeut och Yogalärare",
      },
      {
        teacher: {
          name: "AnneSophie \"Fia\" Sjöblom",
          italic: "E-RYT 500, YACEP. Utbildar yogalärare inom Yinyoga, Ashtanga, pranayama, ayurveda, anatomi, yogafilosofi, meditation och LymfYin sedan 2014.",
          bio: "Vi har alla vår unika väg att vandra – en resa som ingen annan kan göra åt oss. Varje steg för oss närmare vårt inre, och till slut leder vägen oss hem, till hjärtat. Ofta söker vi efter tillfredsställelse och lycka utanför oss själva, men den djupaste visdomen och det vi söker finns redan inom oss. Den visar sig när vi vågar stanna upp, i stillheten där själen talar som tydligast. Utforskandet sker genom både kropp, sinne, själ och hjärta med hjälp av inre själslig praktik, yoga, andningsövningar, yogafilosofi och meditation – allt med självkärlek till oss själva och livet. AnneSophie delar frikostigt med sig av sina kunskaper och erfarenheter och vill inspirera fler att komma närmare sin egen kärna.",
          contact: "Frågor: yoga@annesophiesjoblom.se",
        },
      },
    ],
  },
];

export function getTrainingBySlug(slug: string): Training | undefined {
  return TRAININGS.find((t) => t.slug === slug);
}

export function getAllTrainingSlugs(): string[] {
  return TRAININGS.map((t) => t.slug);
}
