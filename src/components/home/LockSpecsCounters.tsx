"use client";

import { useEffect, useRef, useState } from "react";

export type LockMetricItem = {
  v: number;
  dec: number;
  u: string;
  l: string;
  pct: number | null;
  note?: string;
};

export default function LockSpecsCounters({ data }: { data: LockMetricItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(() => setT(1));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / 1600);
          setT(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {data.map((d) => (
        <div key={d.l} className="glass spot spot-dark p-4 sm:p-5">
          <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            {(d.v * t).toFixed(d.dec)}
            <span className="ml-1 text-base font-bold text-drinklight">{d.u}</span>
          </p>
          <p className="mt-1 text-sm text-white/80">{d.l}</p>
          <div
            className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
            aria-hidden
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-drinklight to-fxlime"
              style={{
                width:
                  d.pct == null
                    ? "0%"
                    : `${Math.max(d.pct > 0 ? 5 : 0, Math.min(100, d.pct)) * t}%`,
              }}
            />
          </div>
          <p className="mt-1.5 text-[0.7rem] text-white/55">
            {d.note || "Estándar verificado"}
          </p>
        </div>
      ))}
    </div>
  );
}
