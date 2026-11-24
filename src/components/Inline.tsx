import Link from "next/link";
import { Fragment } from "react";

export default function Inline({
  text,
}: {
  text: string;
  source?: string;
}) {
  const out: React.ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last)
      out.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    if (m[2]) out.push(<strong key={i++}>{m[2]}</strong>);
    else if (m[3]) out.push(<em key={i++}>{m[3]}</em>);
    else if (m[4]) {
      const href = m[5];
      if (href.startsWith("/"))
        out.push(
          <Link key={i++} href={href}>
            {m[4]}
          </Link>
        );
      else
        out.push(
          <a
            key={i++}
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            {m[4]}
          </a>
        );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length)
    out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

export function stripMd(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function slugify(t: string) {
  return stripMd(t)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
}
