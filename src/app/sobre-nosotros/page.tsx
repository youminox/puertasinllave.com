import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre Nosotros | PuertaSinLlave.com",
  description: `Conoce a ${LEGAL_OWNER}, creador de PuertaSinLlave.com (${LEGAL_LOCATION}, ${LEGAL_EMAIL}), la guía en español para elegir cerraduras digitales sin errores de medida.`,
  alternates: { canonical: `${SITE_URL}/sobre-nosotros/` },
};

export default function SobreNosotrosPage() {
  return (
    <SimplePage
      title="Sobre PuertaSinLlave.com"
      crumb="Sobre nosotros"
      href="/sobre-nosotros/"
      intro="Nacimos para responder en español claro las tres preguntas que nadie responde bien antes de comprar una cerradura digital en Amazon: ¿le cabe a mi puerta?, ¿crea códigos para huéspedes? y ¿necesita puente Wi-Fi?"
    >
      <h2>Quién está detrás del proyecto</h2>
      <p>
        <strong>PuertaSinLlave.com</strong> es un proyecto editorial creado y
        operado por <strong>{LEGAL_OWNER}</strong>, domiciliado en{" "}
        <strong>{LEGAL_LOCATION}</strong>, con correo directo{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
      <p>
        Al revisar catálogos en Amazon Estados Unidos, la mayoría de compradores
        y anfitriones de Airbnb en español se enfrentan al mismo problema: las
        fichas vienen en pulgadas (<code>2-3/8&quot;</code>,{" "}
        <code>2-1/8&quot;</code>, <code>1-3/4&quot;</code>), confunden un
        cerrojo Bluetooth con Wi-Fi integrado o compran un <em>deadbolt</em>{" "}
        americano para una puerta con cerradura embutida que no es compatible.
      </p>

      <h2>Qué encontrarás en nuestras 1,534 guías</h2>
      <ul>
        <li>
          Comparativas directas de modelos líderes en Amazon EE. UU. como{" "}
          <strong>TEEHO (TE001, TE002, TE002H)</strong> y{" "}
          <strong>eufy Security (C210, C220, E330/S330)</strong> según precio,
          acceso y durabilidad.
        </li>
        <li>
          Un{" "}
          <Link href="/verificador-de-medidas/">
            Verificador Interactivo de Medidas de Puerta
          </Link>{" "}
          con equivalencias exactas entre milímetros y pulgadas.
        </li>
        <li>
          Guías especializadas para anfitriones de alquiler temporal sobre
          códigos temporales con fecha de expiración, puentes Wi-Fi y respaldo en
          emergencias.
        </li>
      </ul>
    </SimplePage>
  );
}
