import type { MetadataRoute } from "next";
import { SITE_URL, getAllContent, absolute } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-24");
  const content = getAllContent().map((a) => ({
    url: `${SITE_URL}${a.path}`,
    lastModified: new Date(a.dateModified),
    changeFrequency: (a.isPillar ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: a.isPillar ? 0.9 : a.isTransactional ? 0.85 : 0.75,
    images: a.imageUrl ? [absolute(a.imageUrl)] : undefined,
  }));
  const fixed = [
    { path: "/", p: 1, f: "weekly" as const },
    { path: "/verificador-de-medidas/", p: 0.9, f: "monthly" as const },
    { path: "/sobre-nosotros/", p: 0.6, f: "yearly" as const },
    { path: "/contacto/", p: 0.5, f: "yearly" as const },
    { path: "/divulgacion-de-afiliados/", p: 0.4, f: "yearly" as const },
    { path: "/politica-editorial/", p: 0.4, f: "yearly" as const },
    { path: "/aviso-legal/", p: 0.3, f: "yearly" as const },
    { path: "/politica-de-privacidad/", p: 0.3, f: "yearly" as const },
    { path: "/politica-de-cookies/", p: 0.3, f: "yearly" as const },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.f,
    priority: r.p,
  }));
  return [...fixed, ...content];
}
