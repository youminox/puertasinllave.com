"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CATALOG,
  buildAmazonUrl,
  detectUserAmazonRegion,
  type AmazonStoreRegion,
  type AmazonProductRecommendation,
} from "@/lib/amazon";
import { trackClick } from "@/lib/client-constants";
import OpenChatButton from "@/components/OpenChatButton";

export type LockTier = {
  key: string;
  label: string;
  priceSpec: string;
  doorSpec: string;
  guestSpec: string;
  remoteSpec: string;
  img: string;
  alt: string;
  idealFor: string;
  reviewHref: string;
  productKey: keyof typeof CATALOG;
};

export default function SmartLockFinderBlock({
  options,
}: {
  options: LockTier[];
}) {
  const [k, setK] = useState(options[0].key);
  const [dailyOpens, setDailyOpens] = useState(14);
  const [region, setRegion] = useState<AmazonStoreRegion>("US");

  useEffect(() => {
    setRegion(detectUserAmazonRegion());
  }, []);

  const p = options.find((o) => o.key === k) || options[0];
  const amzProd: AmazonProductRecommendation =
    CATALOG[p.productKey] || CATALOG.EUFY_C220;
  const amzUrl = buildAmazonUrl(amzProd, region);
  const storeName = region === "US" ? "Amazon.com" : "Amazon.es";

  const isWifi = p.key === "airbnb" || p.key === "video";
  const monthsAlkaline = Math.max(
    3,
    Math.round((isWifi ? 140 : 210) / Math.sqrt(dailyOpens))
  );
  const monthsLithium = Math.round(monthsAlkaline * 1.45);
  const batteryCount = p.key === "video" ? "Recargable 10,000 mAh" : p.key === "airbnb" ? "8 pilas AA" : "4 pilas AA";

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr]">
      <div className="card card-static spot relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fxblue/10 blur-3xl" />
        <div className="relative">
          <div
            className="inline-flex flex-wrap rounded-full bg-fxsky p-1 gap-1"
            role="tablist"
            aria-label="Selector de cerradura digital por propiedad y presupuesto"
          >
            {options.map((o) => (
              <button
                key={o.key}
                role="tab"
                type="button"
                aria-selected={o.key === k}
                onClick={() => setK(o.key)}
                className={`rounded-full px-3.5 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  o.key === k
                    ? "bg-fxink text-amber-300 shadow"
                    : "text-[var(--muted)] hover:text-fxink"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_1.2fr]">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[240px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm">
              <Image
                key={p.img}
                src={p.img}
                alt={p.alt}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-extrabold text-sky-950">
                {amzProd.badge}
              </span>
              <p className="mt-1.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-fxink leading-snug">
                {amzProd.title.split("—")[0].trim()}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
                <strong className="text-fxink">Ideal para:</strong> {p.idealFor}
              </p>
              <div className="mt-2.5 rounded-xl bg-fxsky p-2.5 text-xs space-y-1">
                <p className="font-bold text-prune">💵 Precio: {p.priceSpec}</p>
                <p className="font-semibold text-fxbluedeep">
                  📏 Puerta: {p.doorSpec}
                </p>
                <p className="font-semibold text-emerald-900">
                  🔑 Huéspedes: {p.guestSpec}
                </p>
                <p className="font-semibold text-fxink">
                  📡 Control Remoto: {p.remoteSpec}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={amzUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackClick(`finder-amazon-${p.key}`, {
                  article_slug: amzProd.id,
                  article_title: amzProd.title,
                  category: "amazon",
                  target_url: amzUrl,
                })
              }
              className="btn btn-buy shine flex-1 text-sm"
              data-magnetic
            >
              🔐 Ver precio en {storeName} ↗
            </a>
            <Link href={p.reviewHref} className="btn btn-ghost text-sm">
              Leer reseña y medidas →
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#060a12] via-[#0b1320] to-[#132036] p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fxblue/20 blur-3xl" />
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-drinklight">
          Simulador de Autonomía de Baterías y Mantenimiento
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
          ¿Cuántos meses duran las pilas según el tránsito de tu puerta?
        </h3>
        <p className="mt-2 text-sm text-white/75">
          Ajusta cuántas veces al día se abre y cierra la puerta (familia o
          huéspedes de Airbnb) para calcular cuándo tocará cambiar pilas.
        </p>
        <label
          htmlFor="opens-slider"
          className="mt-6 flex items-center justify-between text-sm font-semibold"
        >
          <span>Aperturas diarias promedio</span>
          <span className="rounded-full bg-white/10 px-3.5 py-1 font-display text-lg text-fxlime">
            {dailyOpens} veces/día
          </span>
        </label>
        <input
          id="opens-slider"
          type="range"
          min={4}
          max={40}
          step={2}
          value={dailyOpens}
          onChange={(e) => setDailyOpens(Number(e.target.value))}
          className="mt-3 w-full accent-[#38BDF8]"
        />
        <div className="mt-1 flex justify-between text-[0.7rem] text-white/50">
          <span>4/día (Pareja)</span>
          <span>14/día (Familia)</span>
          <span>26/día (Airbnb)</span>
          <span>40/día (Oficina)</span>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["Con Pilas Litio AA", `~${monthsLithium} meses`],
            ["Con Alcalinas AA", `~${monthsAlkaline} meses`],
            ["Baterías Requeridas", batteryCount],
          ].map(([l, val], i) => (
            <div
              key={l}
              className={`glass flex flex-col-reverse p-3 ${
                i === 0 ? "border-fxlime/50 bg-fxlime/10" : ""
              }`}
            >
              <dt className="mt-1 text-[0.7rem] leading-tight text-white/65">
                {l}
              </dt>
              <dd
                className={`font-display font-extrabold ${
                  i === 0
                    ? "text-sm text-fxlime sm:text-base"
                    : "text-xs sm:text-base"
                }`}
              >
                {val}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs text-white/65">
          <span>
            Nota: todas las cerraduras modernas tienen{" "}
            <strong className="text-white">puerto USB-C de emergencia</strong>{" "}
            exterior por si llega a 0 %.
          </span>
          <OpenChatButton
            label="Preguntar al Asesor IA sobre mi puerta"
            prompt={`Mi puerta se abre unas ${dailyOpens} veces al día y estoy evaluando "${p.label}". ¿Qué modelo y pilas/puente me recomiendas en Amazon?`}
            className="text-drinklight font-bold hover:underline !bg-transparent !p-0"
          />
        </div>
      </div>
    </div>
  );
}
