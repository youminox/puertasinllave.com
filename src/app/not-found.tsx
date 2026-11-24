import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OpenChatButton from "@/components/OpenChatButton";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <section className="wrap py-24 text-center max-w-2xl">
          <span className="eyebrow">Página no encontrada (404)</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            No encontramos esa guía de cerraduras
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Vuelve al inicio para explorar nuestras 1,534 guías sobre TEEHO,
            eufy, medidas de puerta y códigos para huéspedes o usa el Verificador
            Interactivo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-buy shine">
              Ir al inicio de PuertaSinLlave.com
            </Link>
            <Link href="/verificador-de-medidas/" className="btn btn-ghost">
              Verificar medidas de puerta
            </Link>
            <OpenChatButton
              label="Preguntar al Asesor IA"
              className="btn btn-prune"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
