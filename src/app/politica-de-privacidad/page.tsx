import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidad | PuertaSinLlave.com",
  description: `Política de privacidad y protección de datos personales de PuertaSinLlave.com, operado por ${LEGAL_OWNER} (${LEGAL_LOCATION}, ${LEGAL_EMAIL}).`,
  alternates: { canonical: `${SITE_URL}/politica-de-privacidad/` },
};

export default function PrivacidadPage() {
  return (
    <SimplePage
      title="Política de Privacidad"
      crumb="Privacidad"
      href="/politica-de-privacidad/"
      intro="Tratamiento transparente de datos conforme a la Ley N.º 29733 de Protección de Datos Personales (Perú), CCPA/CPRA y RGPD."
    >
      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos recabados a través de{" "}
        <strong>https://puertasinllave.com</strong> es{" "}
        <strong>{LEGAL_OWNER}</strong>, domiciliado en{" "}
        <strong>{LEGAL_LOCATION}</strong>, con correo electrónico de contacto{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>

      <h2>2. Datos que recopilamos</h2>
      <ul>
        <li>
          <strong>Navegación general y Verificador de Medidas:</strong> no
          exigimos registro, contraseñas ni cuentas para leer las 1,534 guías o
          usar la herramienta interactiva de compatibilidad de puerta.
        </li>
        <li>
          <strong>Consultas en el Asesor IA en línea:</strong> cuando envías
          una pregunta voluntaria al chat online, almacenamos el historial de
          la sesión con un identificador anónimo de navegador y la URL de la
          página desde donde nos escribes, con el único fin de responder tus
          dudas sobre medidas, modelos y enlaces en Amazon. Por favor, nunca
          introduzcas direcciones exactas de viviendas ni códigos PIN reales de
          tu cerradura en el chat.
        </li>
        <li>
          <strong>Comunicaciones por correo:</strong> si escribes a{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>, trataremos tu
          mensaje únicamente para responder tu consulta editorial o comercial.
        </li>
      </ul>

      <h2>3. Base legal, conservación y terceros</h2>
      <p>
        Tratamos las consultas del chat y de correo sobre la base del interés
        legítimo de prestar soporte técnico al visitante y su consentimiento al
        iniciar la conversación. Los registros anónimos del chat se alojan en
        infraestructura segura (Supabase) y las consultas de IA se procesan sin
        vender ni ceder datos personales a terceros publicitarios. Al pulsar un
        botón hacia Amazon.com o Amazon.es, abandonas PuertaSinLlave.com y
        aplicará la política de privacidad de Amazon.
      </p>

      <h2>4. Derechos ARCO y contacto</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, cancelación, oposición o eliminación escribiendo a{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>, indicando en el
        asunto «Privacidad – PuertaSinLlave.com».
      </p>
    </SimplePage>
  );
}
