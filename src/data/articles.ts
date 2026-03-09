/**
 * Artikelbibliotek – metadata för Lär dig mer-sidan.
 * Använd slug för URL: /lar-dig-mer/[slug]
 */
export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  /** Kort etikett t.ex. "Kundaliniyoga · Göteborg" */
  category: string;
  /** ISO-datum för sortering och visning */
  date: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "kom-igang-med-kundaliniyoga",
    title: "Kom igång med Kundaliniyoga på morgonen",
    excerpt:
      "Att börja dagen med ett kort Kundaliniyogapass ger lugn, fokus och mer energi genom hela dagen. En enkel morgonrutin steg för steg – från intoning och andning till mjuka rörelser och vila – som du kan göra hemma eller som komplement till dina klasser på Yogastudion i Göteborg.",
    category: "Kundaliniyoga · Göteborg",
    date: "2025-03-01",
  },
  {
    slug: "sat-kriya",
    title: "Sat Kriya",
    excerpt:
      "Sat Kriya är en av Kundaliniyogans mest kraftfulla övningar – den räknas som ett helt pass men kan också göras tillsammans med andra ställningar. Guiden beskriver utförande, längd och avslutning, plus viktiga råd vid graviditet och menstruation. Perfekt för dig som vill stärka magen och de lägre chakrana i Göteborg.",
    category: "Kundaliniyoga · Göteborg",
    date: "2025-03-05",
  },
];

/** Hitta artikel efter slug */
export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
