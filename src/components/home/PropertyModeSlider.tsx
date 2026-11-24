"use client";

import { useCallback, useRef, useState } from "react";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function PropertyModeSlider() {
  const [v, setV] = useState(26);
  const [touched, setTouched] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  const t = v / 100;
  const mid = clamp(1 - Math.abs(t - 0.5) * 2.4);
  const airbnb = clamp((t - 0.45) / 0.45);
  const fullAirbnb = clamp((t - 0.55) / 0.4);

  const phase =
    t < 0.35
      ? "Escenario A · Casa o Departamento Familiar (Acceso Rápido Local)"
      : t < 0.68
      ? "Transición · Comparando Acceso Diario vs Gestión Remota Airbnb"
      : "Escenario B · Alquiler Temporal Airbnb (Códigos por Fechas desde el Celular)";

  const specBadge =
    t < 0.45
      ? "TEEHO TE002 / TE002H · US$45–$99 · Sin Wi-Fi"
      : "eufy C210 / C220 · Wi-Fi Integrado · US$89–$149";

  const fromPointer = useCallback((clientX: number) => {
    const el = scene.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setV(Math.round(clamp((clientX - r.left) / r.width) * 100));
    setTouched(true);
  }, []);

  return (
    <div className="daynight bg-[#060a12] shadow-[0_40px_80px_-40px_rgba(6,10,18,0.75)]">
      <div
        ref={scene}
        className="relative aspect-[4/5] cursor-ew-resize select-none sm:aspect-[16/9]"
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") e.preventDefault();
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.pointerType === "touch") {
            if (
              (e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)
            )
              fromPointer(e.clientX);
          }
        }}
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="pm-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e0f2fe" />
              <stop offset="1" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="pm-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0284c7" />
              <stop offset="0.55" stopColor="#d97706" />
              <stop offset="1" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="pm-dark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#060a12" />
              <stop offset="0.7" stopColor="#0b1320" />
              <stop offset="1" stopColor="#132036" />
            </linearGradient>
          </defs>
          <rect width="800" height="450" fill="url(#pm-light)" />
          <rect width="800" height="450" fill="url(#pm-mid)" opacity={mid} />
          <rect width="800" height="450" fill="url(#pm-dark)" opacity={airbnb} />

          <rect
            x="0"
            y="365"
            width="800"
            height="85"
            fill={airbnb > 0.5 ? "#060a12" : "#cbd5e1"}
          />

          {airbnb < 0.5 ? (
            <g>
              <rect
                x="195"
                y="142"
                width="410"
                height="198"
                rx="18"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="4"
              />
              <text
                x="400"
                y="192"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="17"
                fill="#0369a1"
              >
                🏠 Casa o Departamento: TEEHO TE002 / TE002H
              </text>
              <text
                x="400"
                y="226"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="700"
                fill="#0b1320"
              >
                ✓ Huella digital en 0.3s + 20 códigos PIN para familia y visitas
              </text>
              <text
                x="400"
                y="254"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#334155"
              >
                ✓ Bloqueo automático configurable al salir sin preocuparse
              </text>
              <text
                x="400"
                y="282"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#16a34a"
              >
                ✓ 100 % Offline (no depende del router) · 4 pilas AA (hasta 1 año)
              </text>
            </g>
          ) : (
            <g opacity={fullAirbnb}>
              <rect
                x="185"
                y="138"
                width="430"
                height="206"
                rx="18"
                fill="#0b1320"
                stroke="#f59e0b"
                strokeWidth="4"
              />
              <text
                x="400"
                y="190"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="17"
                fill="#fde68a"
              >
                🔑 Alquiler Temporal / Airbnb: eufy C220 / C210
              </text>
              <text
                x="400"
                y="224"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="700"
                fill="#ffffff"
              >
                ✓ Códigos temporales con fecha/hora exacta de check-in y check-out
              </text>
              <text
                x="400"
                y="252"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#cbd5e1"
              >
                ✓ Wi-Fi 2.4 GHz integrado: controla desde el celular sin bridge
              </text>
              <text
                x="400"
                y="280"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#38bdf8"
              >
                ✓ Registro en vivo de entradas + $0 en suscripciones mensuales
              </text>
            </g>
          )}

          <rect
            x="110"
            y="354"
            width="580"
            height="34"
            rx="10"
            fill="#060a12"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <text
            x="400"
            y="375"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12"
            fill="#e0f2fe"
          >
            {airbnb > 0.5
              ? "Auto check-in remoto sin entregar llaves físicas · Compatible 60/70 mm y 35–55 mm"
              : "Presupuesto imbatible (<$60) · PIN de 1 uso offline para entregas o limpieza"}
          </text>
        </svg>

        <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/30 bg-slate-950/70 px-4 py-2 text-white backdrop-blur-md sm:left-6 sm:top-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/75">
            {phase}
          </p>
          <p className="font-display text-lg sm:text-xl font-extrabold tabular-nums text-amber-300">
            {specBadge}
          </p>
        </div>
        {!touched && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 animate-pulse whitespace-nowrap rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-fxink shadow-lg sm:bottom-5 sm:px-4 sm:py-2 sm:text-sm">
            ← Arrastra: Casa / Depa Local (TEEHO) vs Airbnb Remoto (eufy Wi-Fi) →
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 bg-[#060a12] px-5 py-4 text-white sm:px-7">
        <span className="text-xs font-bold whitespace-nowrap text-sky-300">
          🏠 Hogar Local (TEEHO)
        </span>
        <label className="sr-only" htmlFor="pm-range">
          Comparador de escenario hogar vs alquiler temporal
        </label>
        <input
          id="pm-range"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => {
            setV(Number(e.target.value));
            setTouched(true);
          }}
        />
        <span className="text-xs font-bold whitespace-nowrap text-amber-300">
          🔑 Airbnb Remoto (eufy)
        </span>
      </div>
    </div>
  );
}
