import type { Block } from "@/lib/content";
import Inline, { slugify } from "./Inline";
import OpenChatButton from "./OpenChatButton";

const CALLOUT: Record<string, { label: string; cls: string; icon: string }> = {
  etiqueta: {
    label:
      "Comprobación de Medidas Antes de Comprar (Backset · Grosor · Orificio)",
    cls: "border-fxblue/35 bg-fxsky",
    icon: "📏",
  },
  fabricante: {
    label: "Códigos Temporales para Huéspedes y Accesorios de Control Remoto",
    cls: "border-amber-300/70 bg-amber-50",
    icon: "🔑",
  },
  aviso: {
    label: "Atención Técnica: Compatibilidad Wi-Fi, Puente y Puertas Especiales",
    cls: "border-orange-300/70 bg-orange-50",
    icon: "⚠️",
  },
  tip: {
    label: "Consejo de instalación para casa, departamento o Airbnb",
    cls: "border-emerald-300/70 bg-emerald-50/70",
    icon: "💡",
  },
};

export default function ArticleBody({
  blocks,
  source,
}: {
  blocks: Block[];
  source: string;
}) {
  return (
    <div className="prose-fx">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <Inline text={b.text} source={source} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={slugify(b.text)}>
                <Inline text={b.text} source={source} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={i}>
                <Inline text={b.text} source={source} />
              </h3>
            );
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} source={source} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} source={source} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <figure
                key={i}
                className="my-7 overflow-x-auto rounded-2xl border border-[var(--line)]"
              >
                <table>
                  <thead>
                    <tr>
                      {b.headers.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k}>
                            <Inline text={String(c)} source={source} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && (
                  <figcaption className="px-4 py-2 text-xs text-[var(--muted)]">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "callout": {
            const c = CALLOUT[b.variant] || CALLOUT.tip;
            return (
              <aside key={i} className={`my-7 rounded-2xl border p-5 ${c.cls}`}>
                <p className="!mb-1 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  <span aria-hidden>{c.icon}</span> {c.label}
                </p>
                {b.title && (
                  <p className="!mb-1 font-display text-lg font-bold text-fxink">
                    {b.title}
                  </p>
                )}
                <p className="!mb-0 whitespace-pre-line">
                  <Inline text={b.text} source={source} />
                </p>
              </aside>
            );
          }
          case "steps":
            return (
              <ol key={i} className="!gap-4">
                {b.items.map((s, j) => (
                  <li key={j}>
                    <strong>{s.name}.</strong>{" "}
                    <Inline text={s.text} source={source} />
                  </li>
                ))}
              </ol>
            );
          case "cta":
            return (
              <div
                key={i}
                className="my-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-fxblue/35 bg-gradient-to-r from-fxsky to-white p-5"
              >
                <p className="!mb-0 font-display text-base font-bold text-fxink">
                  {b.text}
                </p>
                <OpenChatButton
                  label="Preguntar al Asesor IA"
                  prompt={`Estoy leyendo la guía "${source}" y quiero verificar si una cerradura TEEHO o eufy le queda a las medidas de mi puerta y qué accesorios necesito en Amazon EE. UU.`}
                  className="btn btn-buy shine !px-4 !py-2.5 text-xs shrink-0"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
