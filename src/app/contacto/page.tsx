import type { Metadata } from "next";
import Link from "next/link";
import SimplePage from "@/components/SimplePage";
import OpenChatButton from "@/components/OpenChatButton";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto | PuertaSinLlave.com",
  description: `Contacto oficial con ${LEGAL_OWNER} en ${LEGAL_LOCATION} (${LEGAL_EMAIL}) y acceso al Asesor Técnico de Cerraduras Digitales IA.`,
  alternates: { canonical: `${SITE_URL}/contacto/` },
};

export default function ContactoPage() {
  return (
    <SimplePage
      title="Contacto y Asesoría de Cerraduras"
      crumb="Contacto"
      href="/contacto/"
      intro="¿Necesitas ayuda para validar las medidas de tu puerta o comunicar una corrección editorial? Aquí tienes nuestros canales directos."
    >
      <h2>1. Datos de contacto del titular</h2>
      <ul>
        <li>
          <strong>Titular responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico oficial:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Respuesta inmediata sobre compatibilidad de tu puerta</h2>
      <p>
        Si buscas orientación inmediata sobre qué modelo TEEHO o eufy encaja en
        tu puerta, si permite códigos temporales para huéspedes o qué puente
        Wi-Fi necesita para abrir desde el celular, utiliza nuestro{" "}
        <Link href="/verificador-de-medidas/">
          Verificador Interactivo de Medidas
        </Link>{" "}
        o consulta al Asesor IA disponible en toda la web:
      </p>
      <div className="my-6 flex flex-wrap gap-3">
        <OpenChatButton
          label="Abrir Asesor de Cerraduras IA"
          className="btn btn-buy shine"
        />
        <Link href="/verificador-de-medidas/" className="btn btn-ghost">
          Ir al Verificador de Puerta
        </Link>
      </div>
    </SimplePage>
  );
}
