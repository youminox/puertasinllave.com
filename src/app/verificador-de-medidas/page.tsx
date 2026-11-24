import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientEffects from "@/components/ClientEffects";
import DoorCompatibilityChecker from "@/components/DoorCompatibilityChecker";
import { SITE_URL, OG_DEFAULT, absolute } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Verificador de Medidas de Puerta para Cerraduras Digitales | PuertaSinLlave.com",
  description:
    "Comprueba en 30 segundos si una cerradura TEEHO o eufy es compatible con tu puerta: backset (60/70 mm), grosor (35–55 mm), orificio de 54 mm, códigos de huéspedes y control remoto.",
  alternates: { canonical: `${SITE_URL}/verificador-de-medidas/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/verificador-de-medidas/`,
    title: "Verificador de Medidas y Compatibilidad de Puerta",
    images: [{ url: absolute(OG_DEFAULT()), width: 1200, height: 675 }],
  },
};

export default function VerificadorDeMedidasPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <section className="relative overflow-hidden bg-gradient-to-b from-fxsky to-white pb-8 pt-10">
          <div className="wrap">
            <Breadcrumbs
              items={[
                { name: "Verificador de medidas", href: "/verificador-de-medidas/" },
              ]}
            />
            <span className="eyebrow mt-5">Herramienta gratuita · Antes de comprar</span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl max-w-3xl">
              Comprueba las medidas de tu puerta antes de comprar en Amazon
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
              El 90 % de devoluciones de cerraduras digitales ocurre por no medir el{" "}
              <strong className="text-fxink">backset (60 vs 70 mm)</strong> o por
              confundir un cerrojo americano con una caja embutida. Selecciona tus
              medidas y descubre qué modelos de TEEHO, eufy o sistemas retrofit te
              quedan perfectos.
            </p>
          </div>
        </section>

        <section className="wrap py-8">
          <DoorCompatibilityChecker />
        </section>
      </main>
      <Footer />
      <ClientEffects stickySource="verificador-sticky" />
    </>
  );
}
