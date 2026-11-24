/** Diagrama técnico SVG animado de anatomía de puerta: Backset 60/70 mm, Cross Bore 54 mm, Edge Bore 25 mm y Grosor 35–55 mm. */
export default function DoorMeasureDiagramSvg() {
  const strands = Array.from({ length: 8 }).map((_, i) => {
    const a = (i / 8) * Math.PI * 2 + 0.25;
    const x1 = 200 + Math.cos(a) * 42;
    const y1 = 210 + Math.sin(a) * 42;
    const x2 = 200 + Math.cos(a) * 128;
    const y2 = 210 + Math.sin(a) * 128;
    const mx = 200 + Math.cos(a + 0.4) * 86;
    const my = 210 + Math.sin(a + 0.4) * 86;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  });

  return (
    <div className="gel-scene relative mx-auto aspect-square w-full max-w-[460px]">
      <svg
        viewBox="0 0 400 420"
        className="h-full w-full"
        role="img"
        aria-label="Diagrama técnico de medidas de puerta compatibles con cerraduras digitales TEEHO y eufy: Backset 60/70 mm, Orificio 54 mm y Grosor 35-55 mm"
      >
        <defs>
          <radialGradient id="dm-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#0284c7" stopOpacity="0.38" />
            <stop offset="0.6" stopColor="#f59e0b" stopOpacity="0.16" />
            <stop offset="1" stopColor="#060a12" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="dm-core" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e0f2fe" />
            <stop offset="0.5" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="210" r="188" fill="url(#dm-halo)" />
        <circle
          cx="200"
          cy="210"
          r="148"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeDasharray="4 7"
        />
        <circle
          cx="200"
          cy="210"
          r="104"
          fill="none"
          stroke="rgba(56,189,248,0.45)"
          strokeDasharray="6 5"
        />

        {strands.map((d, i) => (
          <path
            key={i}
            d={d}
            className="fiber-strand"
            fill="none"
            stroke={i % 2 === 0 ? "#38bdf8" : "#f59e0b"}
            strokeOpacity="0.82"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}

        {/* Núcleo central: Orificio 54 mm / Backset */}
        <circle
          cx="200"
          cy="210"
          r="56"
          fill="#0b1320"
          stroke="url(#dm-core)"
          strokeWidth="4"
        />
        <text
          x="200"
          y="202"
          textAnchor="middle"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="13.5"
          fill="#fef08a"
        >
          54 mm (2-1/8&quot;)
        </text>
        <text
          x="200"
          y="222"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="10.5"
          fill="#38bdf8"
        >
          Backset 60 o 70 mm
        </text>

        <g fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700">
          <g transform="translate(10 34)">
            <rect
              width="184"
              height="28"
              rx="14"
              fill="rgba(2,132,199,0.28)"
              stroke="rgba(56,189,248,0.7)"
            />
            <text x="92" y="18" textAnchor="middle" fill="#e0f2fe">
              📏 Backset: 60 mm / 70 mm
            </text>
          </g>
          <g transform="translate(204 48)">
            <rect
              width="186"
              height="28"
              rx="14"
              fill="rgba(22,163,74,0.24)"
              stroke="rgba(74,222,128,0.7)"
            />
            <text x="93" y="18" textAnchor="middle" fill="#dcfce7">
              🚪 Grosor: 35 mm a 55 mm
            </text>
          </g>
          <g transform="translate(14 336)">
            <rect
              width="180"
              height="28"
              rx="14"
              fill="rgba(245,158,11,0.24)"
              stroke="rgba(251,191,36,0.7)"
            />
            <text x="90" y="18" textAnchor="middle" fill="#fef08a">
              🔩 Canto Pestillo: 25 mm (1&quot;)
            </text>
          </g>
          <g transform="translate(202 366)">
            <rect
              width="188"
              height="28"
              rx="14"
              fill="rgba(217,119,6,0.28)"
              stroke="rgba(251,191,36,0.7)"
            />
            <text x="94" y="18" textAnchor="middle" fill="#fde68a">
              ⚠️ Deadbolt vs Caja Mortise
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
