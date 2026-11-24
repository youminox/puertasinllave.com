"use client";

import { useState, useMemo } from "react";
import {
  CATALOG,
  type AmazonProductRecommendation,
} from "@/lib/amazon";
import AmazonAffiliateBox from "./AmazonAffiliateBox";
import OpenChatButton from "./OpenChatButton";

type LockMechanism = "deadbolt" | "virgin" | "mortise" | "rental";
type BacksetSize = "60mm" | "70mm" | "other";
type ThicknessSize = "35-50mm" | "51-55mm" | "thin" | "thick";
type BoreSize = "54mm" | "38mm" | "none";
type UseCase = "casa" | "depa" | "airbnb";
type RemoteNeed = "local" | "wifi-builtin" | "camera";

export default function DoorCompatibilityChecker() {
  const [mechanism, setMechanism] = useState<LockMechanism>("deadbolt");
  const [backset, setBackset] = useState<BacksetSize>("60mm");
  const [thickness, setThickness] = useState<ThicknessSize>("35-50mm");
  const [bore, setBore] = useState<BoreSize>("54mm");
  const [useCase, setUseCase] = useState<UseCase>("airbnb");
  const [remoteNeed, setRemoteNeed] = useState<RemoteNeed>("wifi-builtin");

  const diagnosis = useMemo(() => {
    const warnings: string[] = [];
    let status: "compatible" | "adapter" | "retrofit" = "compatible";
    let headline =
      "¡100 % Compatible con cerraduras digitales estándar TEEHO y eufy!";
    let summary =
      "Tu puerta cumple las medidas americanas ANSI estándar. Puedes instalar directamente un cerrojo digital de código, huella o Wi-Fi integrado en 15 minutos con un destornillador Phillips.";

    if (mechanism === "mortise" || mechanism === "rental") {
      status = "retrofit";
      headline =
        mechanism === "rental"
          ? "Solución recomendada: Cerradura Retrofit Interior (sin cambiar fachada)"
          : "Atención: Cerradura embutida (Mortise) o multipunto — Usa Retrofit o evalúa adaptación";
      summary =
        mechanism === "rental"
          ? "Si alquilas departamento o el reglamento del condominio prohíbe cambiar la cerradura exterior, evita taladrar: instala una cerradura motorizada interior (como SwitchBot Lock Pro) sobre tu cilindro actual."
          : "Las cerraduras TEEHO y eufy usan pestillo tubular independiente (deadbolt). Si tu puerta tiene caja embutida con barra multipunto, instala un sistema Retrofit interior sobre el cilindro o añade una perforación superior nueva.";
      warnings.push(
        "No compres un cerrojo deadbolt estándar para reemplazar una caja mortise sin verificar si puedes perforar un cerrojo superior aparte."
      );
    } else if (mechanism === "virgin" || bore === "none") {
      status = "adapter";
      headline = "Puerta compatible tras perforación estándar (54 mm + 25 mm)";
      summary =
        "Al no tener orificios previos, necesitas una plantilla guía con sierras copa de 2-1/8\" (54 mm) y 1\" (25 mm) para crear los huecos exactos antes de montar TEEHO o eufy.";
      warnings.push(
        "Añade el Kit de Instalación DEWALT D180004 para evitar perforar chueco el pasador del canto."
      );
    }

    if (backset === "other") {
      status = status === "compatible" ? "adapter" : status;
      warnings.push(
        "Las cerraduras TEEHO y eufy ajustan únicamente a 60 mm (2-3/8\") o 70 mm (2-3/4\"). Si tu entrada es de 45 mm o 50 mm, necesitarás sistema retrofit interior o reubicar el orificio."
      );
    }
    if (thickness === "thin" || thickness === "thick") {
      status = "adapter";
      warnings.push(
        thickness === "thin"
          ? "Puerta menor a 35 mm (1-3/8\"): queda holgada en TEEHO/eufy; requiere placa espaciadora o refuerzo metálico."
          : "Puerta mayor a 55 mm (2-1/8\"): la varilla cuadrada estándar quedará corta; evalúa cerradura retrofit interior."
      );
    }
    if (thickness === "51-55mm") {
      warnings.push(
        "Entre 51 y 55 mm: eufy C210/C220 soporta hasta 55 mm de fábrica; TEEHO TE001/TE002 está pensada hasta 50 mm (2 pulgadas)."
      );
    }
    if (bore === "38mm") {
      warnings.push(
        "Orificio transversal de 38 mm (1-1/2\"): retira el anillo adaptador del teclado (disponible en modelos compatibles como eufy C220) o amplía a 54 mm con plantilla."
      );
    }

    let pickedProducts: [
      AmazonProductRecommendation,
      AmazonProductRecommendation,
      AmazonProductRecommendation,
    ] = [CATALOG.EUFY_C220, CATALOG.TEEHO_TE002, CATALOG.LITHIUM_AA_AND_LOCKBOX];

    if (status === "retrofit") {
      pickedProducts = [
        CATALOG.SWITCHBOT_LOCK_PRO,
        CATALOG.GATEWAY_WIFI_G2,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ];
    } else if (remoteNeed === "camera") {
      pickedProducts = [
        CATALOG.EUFY_E330_VIDEO,
        CATALOG.EUFY_C220,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ];
    } else if (remoteNeed === "wifi-builtin" || useCase === "airbnb") {
      pickedProducts = [
        CATALOG.EUFY_C220,
        useCase === "airbnb" ? CATALOG.SCHLAGE_ENCODE : CATALOG.EUFY_C210,
        status === "adapter"
          ? CATALOG.DOOR_INSTALL_KIT
          : CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ];
    } else {
      pickedProducts = [
        useCase === "casa" ? CATALOG.TEEHO_TE002H_HANDLESET : CATALOG.TEEHO_TE002,
        CATALOG.TEEHO_TE001,
        status === "adapter"
          ? CATALOG.DOOR_INSTALL_KIT
          : CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ];
    }

    return { status, headline, summary, warnings, pickedProducts };
  }, [mechanism, backset, thickness, bore, useCase, remoteNeed]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-[var(--line)] bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#0284C7]">
              Paso 1 · Tipo de cerradura actual o restricción
            </p>
            <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
              {[
                ["deadbolt", "Cerrojo tubular (Deadbolt)", "Puerta con perno superior estándar"],
                ["virgin", "Puerta nueva sin huecos", "Madera o metal sin perforar"],
                ["mortise", "Caja embutida / Multipunto", "Cerradura larga europea/española"],
                ["rental", "Depa alquilado / Regla edificio", "Prohibido cambiar estética exterior"],
              ].map(([k, t, sub]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setMechanism(k as LockMechanism)}
                  className={`rounded-2xl border p-3.5 text-left transition cursor-pointer ${
                    mechanism === k
                      ? "border-[#0284C7] bg-sky-50/90 ring-2 ring-[#0284C7]/25"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <p className="font-display text-sm font-extrabold text-slate-900">
                    {t}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">{sub}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                2. Backset (Borde → Centro)
              </label>
              <div className="space-y-1.5">
                {[
                  ["60mm", "60 mm (2-3/8\")"],
                  ["70mm", "70 mm (2-3/4\")"],
                  ["other", "Otra medida (<55 mm)"],
                ].map(([k, l]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setBackset(k as BacksetSize)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-xs font-bold transition cursor-pointer ${
                      backset === k
                        ? "border-[#0284C7] bg-[#0B1320] text-amber-300"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                3. Grosor de hoja
              </label>
              <div className="space-y-1.5">
                {[
                  ["35-50mm", "35–50 mm (1-3/8\" a 2\")"],
                  ["51-55mm", "51–55 mm (2\" a 2-1/8\")"],
                  ["thin", "Delgada (<34 mm)"],
                  ["thick", "Gruesa (>56 mm)"],
                ].map(([k, l]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setThickness(k as ThicknessSize)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-xs font-bold transition cursor-pointer ${
                      thickness === k
                        ? "border-[#0284C7] bg-[#0B1320] text-amber-300"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                4. Orificio frontal
              </label>
              <div className="space-y-1.5">
                {[
                  ["54mm", "54 mm (2-1/8\" estándar)"],
                  ["38mm", "38 mm (1-1/2\" estrecho)"],
                  ["none", "Sin orificio aún"],
                ].map(([k, l]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setBore(k as BoreSize)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-xs font-bold transition cursor-pointer ${
                      bore === k
                        ? "border-[#0284C7] bg-[#0B1320] text-amber-300"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                5. Tipo de propiedad
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  ["casa", "🏠 Casa"],
                  ["depa", "🏢 Departamento"],
                  ["airbnb", "🔑 Airbnb / Alquiler"],
                ].map(([k, l]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setUseCase(k as UseCase)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                      useCase === k
                        ? "bg-[#0284C7] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                6. ¿Cómo quieres controlar?
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  ["wifi-builtin", "📱 Wi-Fi sin Bridge"],
                  ["local", "👆 Local (Huella/PIN)"],
                  ["camera", "📹 Con Cámara 2K"],
                ].map(([k, l]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setRemoteNeed(k as RemoteNeed)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                      remoteNeed === k
                        ? "bg-[#D97706] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#0B1320] p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl">
          <div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold ${
                diagnosis.status === "compatible"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                  : diagnosis.status === "retrofit"
                  ? "bg-sky-500/20 text-sky-300 border border-sky-400/40"
                  : "bg-amber-500/20 text-amber-300 border border-amber-400/40"
              }`}
            >
              {diagnosis.status === "compatible"
                ? "✓ Compatibilidad Verificada"
                : diagnosis.status === "retrofit"
                ? "🏢 Modo Retrofit / Sin Modificar"
                : "🛠️ Requiere Adaptación Previa"}
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug">
              {diagnosis.headline}
            </h2>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              {diagnosis.summary}
            </p>

            {diagnosis.warnings.length > 0 && (
              <div className="mt-5 rounded-2xl border border-amber-400/35 bg-amber-500/10 p-4 space-y-2 text-xs text-amber-100">
                <p className="font-extrabold uppercase tracking-wider text-amber-300">
                  ⚠️ Puntos a confirmar antes de pedir en Amazon:
                </p>
                {diagnosis.warnings.map((w) => (
                  <p key={w}>• {w}</p>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl bg-white/5 p-3">
                <span className="text-white/55 block">Backset estándar</span>
                <strong className="text-sky-300">60 mm o 70 mm</strong>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <span className="text-white/55 block">Distancia entre huecos</span>
                <strong className="text-sky-300">Mín. 140 mm centro</strong>
              </div>
            </div>
            <OpenChatButton
              label="Validar mi foto o medida con Asesor IA"
              prompt={`Usé el verificador: mecanismo=${mechanism}, backset=${backset}, grosor=${thickness}, orificio=${bore}, uso=${useCase}, control=${remoteNeed}. Confírmame qué modelo TEEHO o eufy me queda mejor y qué accesorios necesito.`}
              className="btn btn-lime shine w-full text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>

      <AmazonAffiliateBox
        variant="showcase"
        sectionTitle="Cerraduras y Accesorios Compatibles con Tus Medidas"
        sectionSubtitle="Resultado calculado en base a la combinación de puerta, uso y control remoto que acabas de seleccionar:"
        products={diagnosis.pickedProducts}
        source="verificador-medidas"
      />
    </div>
  );
}
