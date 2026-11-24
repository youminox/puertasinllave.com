import fs from "node:fs";
import path from "node:path";
import categories from "@/data/categories.json";
import keywordMap from "@/data/keyword_map.json";

export const SITE_URL = "https://puertasinllave.com";
export const SITE_NAME = "PuertaSinLlave.com";
export const LEGAL_OWNER = "CARLOS LINGAN BORJA";
export const LEGAL_LOCATION = "Lima, Perú";
export const LEGAL_EMAIL = "info@charlielingan.com";
export const LEGAL_LINE =
  "Titular del sitio web: CARLOS LINGAN BORJA, domiciliado en Lima, Perú · Correo electrónico: info@charlielingan.com";
export const LOCKS_DISCLAIMER =
  "las marcas comerciales mencionadas (Amazon, TEEHO, eufy Security, Anker, Schlage, Aqara, SwitchBot, Ultraloq, August, Kwikset, Apple HomeKey, Airbnb, entre otras) pertenecen a sus respectivos propietarios; este portal realiza análisis técnicos independientes en español sobre cerraduras digitales para casas, departamentos y alquileres temporales, y participa en el Programa de Afiliados de Amazon";
export const PUBLISHED = "2026-11-24";
export const VERIFIED_LABEL = "24/11/2026";
export const CHAT_ENDPOINT =
  "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/puertasinllave-chat";

export type Block =
  | { type: "p" | "h2" | "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | {
      type: "callout";
      variant: "etiqueta" | "fabricante" | "aviso" | "tip";
      title?: string;
      text: string;
    }
  | { type: "steps"; items: { name: string; text: string }[] }
  | { type: "cta"; text: string };

export type Article = {
  slug: string;
  pillar: string;
  path: string;
  isPillar: boolean;
  isTransactional?: boolean;
  primaryKeyword: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  quickAnswer: string;
  readingMinutes: number;
  image: { prompt: string; alt: string };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  related: string[];
  datePublished: string;
  dateModified: string;
  imageUrl: string | null;
};

export type Category = (typeof categories)[number];

const DIR = path.join(process.cwd(), "src/content/articles");
const PUBLIC = path.join(process.cwd(), "public");
let cache: Article[] | null = null;

function isValidArticle(a: Partial<Article>): a is Article {
  return Boolean(
    a && a.slug && a.pillar && a.path && a.title && Array.isArray(a.blocks)
  );
}

const PILLAR_SCENE_POOLS: Record<string, string[]> = {
  "resenas-cerraduras-digitales": [
    "cat-resenas-cerraduras-digitales",
    "scene-resenas-2",
    "scene-resenas-3",
    "home-hero-cerradura",
    "home-huella-biometrica",
  ],
  "comparativas-cerraduras-digitales": [
    "cat-comparativas-cerraduras-digitales",
    "scene-comparativas-2",
    "scene-comparativas-3",
    "og-default",
  ],
  "cerraduras-para-airbnb-y-alquiler-temporal": [
    "cat-cerraduras-para-airbnb-y-alquiler-temporal",
    "scene-airbnb-2",
    "scene-airbnb-3",
    "home-airbnb-huespedes",
  ],
  "cerraduras-para-casas-y-departamentos": [
    "cat-cerraduras-para-casas-y-departamentos",
    "scene-casas-2",
    "scene-casas-3",
    "home-departamento-retrofit",
  ],
  "cerraduras-por-precio-y-forma-de-acceso": [
    "cat-cerraduras-por-precio-y-forma-de-acceso",
    "scene-precio-2",
    "scene-precio-3",
    "home-huella-biometrica",
  ],
  "puentes-wifi-baterias-y-accesorios": [
    "cat-puentes-wifi-baterias-y-accesorios",
    "scene-accesorios-2",
    "scene-accesorios-3",
    "home-puente-wifi",
  ],
  "como-medir-tu-puerta-y-compatibilidad": [
    "cat-como-medir-tu-puerta-y-compatibilidad",
    "scene-medir-2",
    "scene-medir-3",
    "home-medir-backset",
  ],
  "codigos-temporales-y-gestion-de-huespedes": [
    "cat-codigos-temporales-y-gestion-de-huespedes",
    "scene-codigos-2",
    "scene-codigos-3",
    "home-airbnb-huespedes",
  ],
  "control-desde-el-celular-wifi-y-puentes": [
    "cat-control-desde-el-celular-wifi-y-puentes",
    "scene-wifi-2",
    "scene-wifi-3",
    "home-puente-wifi",
  ],
  "formas-de-acceso-codigo-huella-y-llave": [
    "cat-formas-de-acceso-codigo-huella-y-llave",
    "scene-acceso-2",
    "scene-acceso-3",
    "home-huella-biometrica",
  ],
  "instalacion-paso-a-paso-y-ajustes-de-puerta": [
    "cat-instalacion-paso-a-paso-y-ajustes-de-puerta",
    "scene-instalacion-2",
    "scene-instalacion-3",
    "home-instalacion-destornillador",
  ],
  "baterias-autonomia-y-emergencias-sin-energia": [
    "cat-baterias-autonomia-y-emergencias-sin-energia",
    "scene-baterias-2",
    "scene-baterias-3",
    "home-emergencia-usbc",
  ],
  "seguridad-fisica-certificaciones-y-clima": [
    "cat-seguridad-fisica-certificaciones-y-clima",
    "scene-seguridad-2",
    "scene-seguridad-3",
    "home-hero-cerradura",
  ],
  "solucion-de-problemas-y-compra-en-amazon": [
    "cat-solucion-de-problemas-y-compra-en-amazon",
    "scene-problemas-2",
    "scene-problemas-3",
    "og-default",
  ],
};

function resolveArticleImage(
  a: Article,
  pillarCountMap: Map<string, number>
): string {
  const imgArt = path.join(PUBLIC, "img/articulos", `${a.slug}.webp`);
  if (fs.existsSync(imgArt)) {
    return `/img/articulos/${a.slug}.webp`;
  }
  if (a.isPillar) {
    const imgCat = path.join(PUBLIC, "img/ambiente", `cat-${a.pillar}.webp`);
    if (fs.existsSync(imgCat)) return `/img/ambiente/cat-${a.pillar}.webp`;
  }
  const idx = pillarCountMap.get(a.pillar) || 0;
  pillarCountMap.set(a.pillar, idx + 1);
  const pool = PILLAR_SCENE_POOLS[a.pillar] || ["home-hero-cerradura"];
  const candidate = pool[idx % pool.length];
  const candidatePath = path.join(PUBLIC, "img/ambiente", `${candidate}.webp`);
  if (fs.existsSync(candidatePath)) {
    return `/img/ambiente/${candidate}.webp`;
  }
  const imgAmb = path.join(PUBLIC, "img/ambiente", `cat-${a.pillar}.webp`);
  return fs.existsSync(imgAmb)
    ? `/img/ambiente/cat-${a.pillar}.webp`
    : `/img/ambiente/home-hero-cerradura.webp`;
}

export function getAllContent(): Article[] {
  if (cache) return cache;
  const order = (keywordMap as { path: string }[]).map((k) => k.path);
  const files = fs.existsSync(DIR)
    ? fs.readdirSync(DIR).filter((f) => f.endsWith(".json"))
    : [];
  const list: Article[] = [];
  const seen = new Set<string>();
  const pillarCountMap = new Map<string, number>();
  for (const f of files) {
    try {
      const a = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
      if (!isValidArticle(a) || seen.has(a.path)) continue;
      seen.add(a.path);
      const imageUrl = resolveArticleImage(a, pillarCountMap);
      list.push({
        ...a,
        isPillar: Boolean(a.isPillar),
        isTransactional: Boolean(a.isTransactional),
        image:
          a.image && a.image.alt ? a.image : { prompt: "", alt: a.title },
        faqs: Array.isArray(a.faqs) ? a.faqs : [],
        related: Array.isArray(a.related) ? a.related : [],
        quickAnswer: a.quickAnswer || a.excerpt || "",
        excerpt: a.excerpt || a.metaDescription || "",
        seoTitle: a.seoTitle || a.title,
        metaDescription: a.metaDescription || a.excerpt || "",
        datePublished: a.datePublished || PUBLISHED,
        dateModified: a.dateModified || PUBLISHED,
        imageUrl,
      });
    } catch {
      // ignore invalid json during generation
    }
  }
  list.sort((x, y) => {
    const ix = order.indexOf(x.path);
    const iy = order.indexOf(y.path);
    if (ix === -1 && iy === -1) return x.path.localeCompare(y.path);
    if (ix === -1) return 1;
    if (iy === -1) return -1;
    return ix - iy;
  });
  cache = list;
  return list;
}

export const getCategories = (): Category[] => categories;
export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
export const getPillar = (slug: string) =>
  getAllContent().find((a) => a.isPillar && a.pillar === slug);
export const getArticle = (pillar: string, slug: string) =>
  getAllContent().find(
    (a) => !a.isPillar && a.pillar === pillar && a.slug === slug
  );
export const getArticlesIn = (pillar: string) =>
  getAllContent().filter((a) => !a.isPillar && a.pillar === pillar);
export const getByPath = (p: string) =>
  getAllContent().find((a) => a.path === p);

export function safeHref(p: string): string {
  if (getByPath(p)) return p;
  const pillar = p.split("/").filter(Boolean)[0];
  if (pillar && getCategory(pillar)) return `/${pillar}/`;
  return "/";
}

export function ambient(
  name: string,
  fallback = "/img/ambiente/home-hero-cerradura.webp"
): string {
  const rel = `/img/ambiente/${name}.webp`;
  return fs.existsSync(path.join(PUBLIC, rel)) ? rel : fallback;
}

export const hasAmbient = (name: string) =>
  fs.existsSync(path.join(PUBLIC, `/img/ambiente/${name}.webp`));

export const OG_DEFAULT = () =>
  ambient("og-default", "/img/ambiente/home-hero-cerradura.webp");

export function absolute(url: string) {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

export function trimTitle(t: string) {
  return t.replace(/\s*\|\s*PuertaSinLlave(?:\.com)?\s*$/i, "");
}

export const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.svg`,
  founder: { "@id": `${SITE_URL}/#carlos` },
  email: LEGAL_EMAIL,
  description:
    "Guía en español para elegir cerraduras digitales para casas, departamentos y alquileres temporales en Amazon Estados Unidos. Compara marcas como TEEHO y eufy según precio, compatibilidad de medidas y formas de acceso (código, huella o celular), explicando códigos temporales para huéspedes y accesorios para control a distancia.",
};

export const personLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#carlos`,
  name: LEGAL_OWNER,
  email: LEGAL_EMAIL,
  jobTitle: "Fundador & Editor Jefe de PuertaSinLlave.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  url: `${SITE_URL}/sobre-nosotros/`,
};
