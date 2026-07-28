export interface SubstackPost {
  title: string;
  slug: string;
  url: string;
  publishedAt: string;
  summary: string;
  image: string | null;
  isPaywall: boolean;
}

const FEED_URL = "https://domfutia.substack.com/feed";

/**
 * Decodes HTML entities in a string without relying on the DOM.
 * Handles:
 *  - Named entities: &amp; &quot; &apos; &lt; &gt; &nbsp;
 *  - Decimal numeric entities: &#224; &#8217;
 *  - Hex numeric entities: &#x00E0; &#xE0;
 *
 * Safe for server-side Next.js (no DOMParser, no dangerouslySetInnerHTML).
 */
function decodeHtmlEntities(str: string): string {
  if (!str) return str;

  // Named entities (most common subset)
  const named: Record<string, string> = {
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: "\u00A0",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    ldquo: "\u201C",
    rdquo: "\u201D",
    hellip: "\u2026",
    copy: "\u00A9",
    reg: "\u00AE",
    trade: "\u2122",
    euro: "\u20AC",
    pound: "\u00A3",
    yen: "\u00A5",
    cent: "\u00A2",
    bull: "\u2022",
    middot: "\u00B7",
    laquo: "\u00AB",
    raquo: "\u00BB",
    iexcl: "\u00A1",
    iquest: "\u00BF",
    agrave: "\u00E0",
    aacute: "\u00E1",
    acirc: "\u00E2",
    atilde: "\u00E3",
    auml: "\u00E4",
    aring: "\u00E5",
    egrave: "\u00E8",
    eacute: "\u00E9",
    ecirc: "\u00EA",
    euml: "\u00EB",
    igrave: "\u00EC",
    iacute: "\u00ED",
    icirc: "\u00EE",
    iuml: "\u00EF",
    ograve: "\u00F2",
    oacute: "\u00F3",
    ocirc: "\u00F4",
    otilde: "\u00F5",
    ouml: "\u00F6",
    ugrave: "\u00F9",
    uacute: "\u00FA",
    ucirc: "\u00FB",
    uuml: "\u00FC",
    ntilde: "\u00F1",
    ccedil: "\u00E7",
    Agrave: "\u00C0",
    Aacute: "\u00C1",
    Egrave: "\u00C8",
    Eacute: "\u00C9",
    Igrave: "\u00CC",
    Iacute: "\u00CD",
    Ograve: "\u00D2",
    Oacute: "\u00D3",
    Ugrave: "\u00D9",
    Uacute: "\u00DA",
    Ntilde: "\u00D1",
    Ccedil: "\u00C7",
  };

  return str
    // Hex numeric entities: &#xE0; &#x00E0;
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    // Decimal numeric entities: &#224; &#8217;
    .replace(/&#([0-9]+);/g, (_, dec) =>
      String.fromCodePoint(parseInt(dec, 10))
    )
    // Named entities
    .replace(/&([a-zA-Z]+);/g, (match, name) => named[name] ?? match);
}

function slugFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || encodeURIComponent(url);
  } catch {
    return encodeURIComponent(url);
  }
}

/**
 * Strip HTML tags and normalize whitespace.
 * NOTE: entities must be decoded BEFORE calling this function.
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const res = await fetch(FEED_URL, {
    next: { revalidate: 21600 }, // 6h ISR cache
    headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-bot/1.0)" },
  });

  if (!res.ok) {
    console.error(`Failed to fetch Substack feed: ${res.status}`);
    return [];
  }

  const xml = await res.text();

  // Parse using regex (Node/Edge compatible — no DOMParser)
  const items = [...xml.matchAll(/<item[\s\S]*?<\/item>/g)].map((m) => m[0]);

  const posts: SubstackPost[] = items.map((rawItem) => {
    const get = (tag: string) => {
      const match = rawItem.match(
        new RegExp(
          `<${tag}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}(?:[^>]*)>([\\s\\S]*?)<\\/${tag}>`,
          "i"
        )
      );
      return match ? (match[1] ?? match[2] ?? "").trim() : "";
    };

    const rawTitle = get("title");
    const link = get("link") || get("guid");
    const pubDate = get("pubDate");
    const rawDescription = get("description");

    // Correct order: extract → decode entities → strip HTML → truncate
    const title = stripHtml(decodeHtmlEntities(rawTitle));
    const summary = stripHtml(decodeHtmlEntities(rawDescription)).slice(0, 200);

    // Extract image via regex (no DOM in Node)
    let image: string | null = null;
    const enclosureMatch = rawItem.match(
      /<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/[^"']+["']/
    );
    if (enclosureMatch) {
      image = enclosureMatch[1];
    } else {
      const mediaMatch = rawItem.match(/<media:content[^>]+url=["']([^"']+)["']/);
      if (mediaMatch) {
        image = mediaMatch[1];
      } else {
        const imgMatch = rawDescription.match(/<img[^>]+src=["']([^"']+)["']/);
        if (imgMatch) image = imgMatch[1];
      }
    }

    const paywallKeywords = [
      "subscribe to read",
      "for paid subscribers",
      "abbonati",
      "subscribers only",
    ];
    const isPaywall = paywallKeywords.some((kw) =>
      rawDescription.toLowerCase().includes(kw)
    );

    const slug = slugFromUrl(link);
    const publishedAt = pubDate
      ? new Date(pubDate).toISOString()
      : new Date().toISOString();

    return {
      title,
      slug,
      url: link,
      publishedAt,
      summary,
      image,
      isPaywall,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
