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

function extractImage(item: Element): string | null {
  // 1. <enclosure url="..." type="image/..."/>
  const enclosure = item.querySelector("enclosure");
  if (enclosure) {
    const type = enclosure.getAttribute("type") || "";
    if (type.startsWith("image")) {
      const url = enclosure.getAttribute("url");
      if (url) return url;
    }
  }

  // 2. <media:content url="..."/>
  const mediaContent = item.getElementsByTagNameNS(
    "http://search.yahoo.com/mrss/",
    "content"
  )[0];
  if (mediaContent) {
    const url = mediaContent.getAttribute("url");
    if (url) return url;
  }

  // 3. og:image inside <description> HTML
  const description = item.querySelector("description");
  if (description) {
    const text = description.textContent || "";
    const ogMatch = text.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/);
    if (ogMatch) return ogMatch[1];
    const contentMatch = text.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/);
    if (contentMatch) return contentMatch[1];
    // img src fallback inside HTML content
    const imgMatch = text.match(/<img[^>]+src=["']([^"']+)["']/);
    if (imgMatch) return imgMatch[1];
  }

  return null;
}

function detectPaywall(item: Element): boolean {
  // Substack marks paid posts with <itunes:episodeType>full</itunes:episodeType>
  // or a paywall marker inside the description. We check description length and keywords.
  const description = item.querySelector("description")?.textContent || "";
  const paywallKeywords = ["subscribe to read", "for paid subscribers", "abbonati", "subscribers only"];
  const lowerDesc = description.toLowerCase();
  return paywallKeywords.some((kw) => lowerDesc.includes(kw));
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

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
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

  // Parse using browser-like DOMParser via a lightweight regex approach (Node/Edge compatible)
  const items = [...xml.matchAll(/<item[\s\S]*?<\/item>/g)].map((m) => m[0]);

  const posts: SubstackPost[] = items.map((rawItem) => {
    const get = (tag: string) => {
      const match = rawItem.match(new RegExp(`<${tag}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\/${tag}>|<${tag}(?:[^>]*)>([\\s\\S]*?)<\/${tag}>`, "i"));
      return match ? (match[1] ?? match[2] ?? "").trim() : "";
    };

    const title = get("title");
    const link = get("link") || get("guid");
    const pubDate = get("pubDate");
    const description = get("description");
    const summary = stripHtml(description).slice(0, 200);

    // Extract image via regex (no DOM in Node)
    let image: string | null = null;
    const enclosureMatch = rawItem.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/[^"']+["']/);
    if (enclosureMatch) {
      image = enclosureMatch[1];
    } else {
      const mediaMatch = rawItem.match(/<media:content[^>]+url=["']([^"']+)["']/);
      if (mediaMatch) {
        image = mediaMatch[1];
      } else {
        const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
        if (imgMatch) image = imgMatch[1];
      }
    }

    const paywallKeywords = ["subscribe to read", "for paid subscribers", "abbonati", "subscribers only"];
    const isPaywall = paywallKeywords.some((kw) => description.toLowerCase().includes(kw));

    const slug = slugFromUrl(link);
    const publishedAt = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();

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
