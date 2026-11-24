import { useId } from "react";

/** Logotipo de PuertaSinLlave.com: Puerta Digital + Teclado Numérico + Sensor Biométrico */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#060A12" />
          <stop offset="0.55" stopColor="#0B1320" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={`${id}amber`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDE68A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}bg)`} />
      <rect
        x="17"
        y="10"
        width="30"
        height="44"
        rx="7"
        fill="#132036"
        stroke="#38BDF8"
        strokeWidth="2.4"
      />
      <circle cx="25" cy="19" r="2" fill={`url(#${id}amber)`} />
      <circle cx="32" cy="19" r="2" fill={`url(#${id}amber)`} />
      <circle cx="39" cy="19" r="2" fill={`url(#${id}amber)`} />
      <circle cx="25" cy="26" r="2" fill="#38BDF8" />
      <circle cx="32" cy="26" r="2" fill="#38BDF8" />
      <circle cx="39" cy="26" r="2" fill="#38BDF8" />
      <circle
        cx="32"
        cy="40"
        r="6.5"
        fill="#0284C7"
        stroke="#E0F2FE"
        strokeWidth="2"
      />
      <line
        x1="32"
        y1="37"
        x2="32"
        y2="43"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
      <LogoMark />
      <span>
        Puerta<span className={dark ? "text-fxlime" : "text-fxblue"}>SinLlave</span>
        <span
          className={`ml-1.5 hidden text-[10px] font-bold uppercase tracking-[0.18em] sm:inline ${
            dark ? "text-white/60" : "text-[var(--muted)]"
          }`}
        >
          .com
        </span>
      </span>
    </span>
  );
}
