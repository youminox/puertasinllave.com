import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/content";
import { getCategory } from "@/lib/content";

export default function ArticleCard({
  a,
  priority = false,
}: {
  a: Article;
  priority?: boolean;
}) {
  const cat = getCategory(a.pillar);
  return (
    <Link
      href={a.path}
      className="card spot group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-fxsky">
        {a.imageUrl ? (
          <Image
            src={a.imageUrl}
            alt={a.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-fxsky via-white to-fxcream" />
        )}
        {cat && (
          <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold text-slate-900 backdrop-blur">
            {cat.name}
          </span>
        )}
        {a.isTransactional && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-400/95 px-2.5 py-0.5 text-[11px] font-extrabold text-slate-950 shadow">
            🔐 Selección Amazon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-fxink group-hover:text-fxbluedeep">
          {a.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
          {a.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs font-semibold text-fxbluedeep">
          <span>Ver medidas y guía →</span>
          <span className="text-[var(--muted)]">
            {a.readingMinutes || 7} min
          </span>
        </div>
      </div>
    </Link>
  );
}
