"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    t: "Comprueba las medidas de tu puerta antes de ordenar en Amazon",
    d: "Mide el backset desde el borde al centro (60 mm o 70 mm), el grosor de la hoja (35–55 mm) y el orificio frontal (54 mm). Confirma también si usas cerrojo tubular americano o caja embutida.",
  },
  {
    n: "02",
    t: "Elige tus formas de acceso: Código PIN, Huella 0.3s o Celular",
    d: "Para máximo ahorro, TEEHO TE001 usa código PIN (<$45); si buscas huella rápida para toda la familia, TEEHO TE002 (<$60) o eufy C220 abren en 0.3 segundos sin sacar llaves.",
  },
  {
    n: "03",
    t: "Define cómo darás acceso temporal a huéspedes o personal",
    d: "Las TEEHO básicas crean códigos de 1 solo uso directo en el teclado sin internet. Si administras un Airbnb a distancia, eufy C210/C220 permiten programar fechas y horas desde la app.",
  },
  {
    n: "04",
    t: "Verifica si incluye Wi-Fi integrado o requiere puente (Bridge)",
    d: "eufy C210 y C220 ya traen Wi-Fi 2.4 GHz integrado sin comprar accesorios; los modelos Bluetooth necesitan un Gateway Wi-Fi G2 enchufado cerca para funcionar desde otra ciudad.",
  },
];

export default function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const q = gsap.utils.selector(el);
        if (reduce) {
          gsap.set(q(".step"), { opacity: 1 });
          gsap.set(q(".bar"), { scaleX: 1 });
          gsap.set(q(".phone-alert, .night, .sound-wave"), { opacity: 1 });
          return;
        }
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=2200",
            scrub: 0.7,
            pin: q(".pin")[0],
            anticipatePin: 1,
          },
        });
        tl.to(q(".step-0"), { opacity: 1, duration: 0.2 }, 0)
          .to(
            q(".step-0 .dot"),
            { backgroundColor: "#0284C7", color: "#fff", duration: 0.2 },
            0
          )
          .fromTo(
            q(".latch-bolt"),
            { x: -18 },
            { x: 0, duration: 0.6 },
            0.1
          )
          .to(q(".step-0"), { opacity: 0.75, duration: 0.2 }, 1)
          .to(q(".step-1"), { opacity: 1, duration: 0.2 }, 1)
          .to(
            q(".step-1 .dot"),
            { backgroundColor: "#D97706", color: "#fff", duration: 0.2 },
            1
          )
          .to(
            q(".access-badge"),
            { scale: 1.06, svgOrigin: "200 112", duration: 0.5 },
            1.15
          )
          .to(q(".step-1"), { opacity: 0.75, duration: 0.2 }, 2)
          .to(q(".step-2"), { opacity: 1, duration: 0.2 }, 2)
          .to(
            q(".step-2 .dot"),
            { backgroundColor: "#16A34A", color: "#fff", duration: 0.2 },
            2
          )
          .fromTo(
            q(".pin-keypad"),
            { y: 12 },
            { y: 0, duration: 0.7 },
            2.05
          )
          .to(q(".sound-wave"), { opacity: 1, scaleX: 1, duration: 0.5 }, 2.1)
          .to(q(".step-2"), { opacity: 0.75, duration: 0.2 }, 3.1)
          .to(q(".step-3"), { opacity: 1, duration: 0.2 }, 3.1)
          .to(
            q(".step-3 .dot"),
            { backgroundColor: "#0B1320", color: "#FDE68A", duration: 0.2 },
            3.1
          )
          .to(q(".night"), { opacity: 1, duration: 0.6 }, 3.1)
          .to(q(".phone-alert"), { opacity: 1, y: 0, duration: 0.5 }, 3.3)
          .to(q(".bar"), { scaleX: 1, duration: 3.8 }, 0);
      }, el);
    };

    io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io?.disconnect();
          init();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="metodo-eleccion"
      ref={root}
      className="relative bg-gradient-to-b from-white via-fxsky to-white"
    >
      <div className="pin flex min-h-[100svh] items-center overflow-hidden py-10 lg:py-14">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="eyebrow">Compra Sin Devoluciones</span>
            <h2 className="section-title mt-3">
              Cuatro pasos.{" "}
              <span className="text-fxbluedeep">
                De medir tu puerta a abrir sin llaves desde cualquier lugar.
              </span>
            </h2>
            <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded bg-[var(--line)]">
              <div className="bar h-full origin-left scale-x-0 bg-gradient-to-r from-fxblue via-drinklight to-prune" />
            </div>
            <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className={`step step-${i} flex gap-4`}
                  style={{ opacity: 0.8 }}
                >
                  <span className="dot grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white font-display font-extrabold text-fxink shadow-md">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold sm:text-xl">
                      {s.t}
                    </p>
                    <p className="text-sm text-[var(--muted)] sm:text-base">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[360px] lg:max-w-[420px]">
            <svg
              viewBox="0 0 400 440"
              className="relative w-full drop-shadow-[0_30px_50px_rgba(11,19,32,0.22)]"
              role="img"
              aria-label="Esquema animado de cerradura digital inteligente con teclado, sensor de huella, pestillo 60/70 mm y alerta Wi-Fi al celular"
            >
              <defs>
                <linearGradient id="ss-light" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f8fafc" />
                  <stop offset="1" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="ss-dark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#060a12" />
                  <stop offset="0.65" stopColor="#0b1320" />
                  <stop offset="1" stopColor="#132036" />
                </linearGradient>
                <clipPath id="ss-panel">
                  <rect x="0" y="0" width="400" height="440" rx="36" />
                </clipPath>
              </defs>
              <g clipPath="url(#ss-panel)">
                <rect width="400" height="440" fill="url(#ss-light)" />
                <rect
                  className="night"
                  width="400"
                  height="440"
                  fill="url(#ss-dark)"
                  opacity="0"
                />

                <g className="access-badge">
                  <rect
                    x="55"
                    y="88"
                    width="290"
                    height="36"
                    rx="10"
                    fill="#0b1320"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="110"
                    textAnchor="middle"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="800"
                    fontSize="11"
                    fill="#e0f2fe"
                  >
                    CÓDIGO PIN + HUELLA 0.3s + APP WI-FI 2.4GHz
                  </text>
                </g>

                {/* Cuerpo exterior de cerradura digital */}
                <g className="pin-keypad">
                  <rect
                    x="130"
                    y="142"
                    width="140"
                    height="220"
                    rx="24"
                    fill="#0f172a"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                  />
                  {/* Teclas iluminadas */}
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={164 + col * 36}
                        cy={176 + row * 28}
                        r="7"
                        fill={row === 1 && col === 1 ? "#f59e0b" : "#38bdf8"}
                        opacity="0.9"
                      />
                    ))
                  )}
                  {/* Lector biométrico de huella */}
                  <circle
                    cx="200"
                    cy="288"
                    r="24"
                    fill="#0284c7"
                    stroke="#fde68a"
                    strokeWidth="3"
                  />
                  <path
                    d="M191 288 C191 280, 209 280, 209 288 M195 294 C195 286, 205 286, 205 294"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect x="172" y="330" width="56" height="12" rx="6" fill="#334155" />
                </g>

                {/* Pestillo deadbolt saliendo */}
                <g className="latch-bolt">
                  <rect x="270" y="232" width="58" height="28" rx="4" fill="#94a3b8" stroke="#0b1320" strokeWidth="2.5" />
                  <text
                    x="300"
                    y="276"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="800"
                    fill="#f59e0b"
                  >
                    60/70 mm
                  </text>
                </g>

                <line
                  className="sound-wave"
                  x1="54"
                  y1="392"
                  x2="346"
                  y2="392"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                <g
                  className="phone-alert"
                  opacity="0"
                  transform="translate(40 18)"
                >
                  <rect
                    width="320"
                    height="48"
                    rx="14"
                    fill="#ffffff"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                  />
                  <circle cx="24" cy="24" r="13" fill="#16a34a" />
                  <text
                    x="24"
                    y="28"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    fill="#ffffff"
                  >
                    ✓
                  </text>
                  <text
                    x="46"
                    y="20"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="800"
                    fontSize="11.5"
                    fill="#0b1320"
                  >
                    Código Huésped Airbnb Activo · Check-in OK
                  </text>
                  <text
                    x="46"
                    y="35"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    fontSize="10"
                    fill="#0369a1"
                  >
                    Puerta compatible 35–55 mm · Control Wi-Fi sin cuotas
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
