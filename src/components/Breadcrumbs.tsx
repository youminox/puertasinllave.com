import Link from "next/link";
import { SITE_URL } from "@/lib/content";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Breadcrumbs({
  items,
  dark = false,
}: {
  items: { name: string; href: string }[];
  dark?: boolean;
}) {
  const all = [{ name: "Inicio", href: "/" }, ...items];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
  return (
    <nav
      aria-label="Migas de pan"
      className={`text-sm ${dark ? "text-white/65" : "text-[var(--muted)]"}`}
    >
      <JsonLd data={ld} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((it, i) => (
          <li key={it.href + i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i < all.length - 1 ? (
              <Link
                href={it.href}
                className={dark ? "hover:text-white" : "hover:text-fxblue"}
              >
                {it.name}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={dark ? "text-white" : "text-fxink"}
              >
                {it.name.length > 60 ? it.name.slice(0, 58) + "…" : it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
