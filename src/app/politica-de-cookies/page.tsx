import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";
import { AMAZON_TAG_US, AMAZON_TAG_ES } from "@/lib/amazon";

export const metadata: Metadata = {
  title: "Política de Cookies y Almacenamiento Local | PuertaSinLlave.com",
  description: `Información sobre almacenamiento técnico local y cookies de atribución de Amazon en PuertaSinLlave.com (${LEGAL_OWNER}, ${LEGAL_LOCATION}).`,
  alternates: { canonical: `${SITE_URL}/politica-de-cookies/` },
};

export default function CookiesPage() {
  return (
    <SimplePage
      title="Política de Cookies"
      crumb="Cookies"
      href="/politica-de-cookies/"
      intro="Detalle claro sobre el almacenamiento técnico de sesión y la atribución de enlaces de afiliado de Amazon en PuertaSinLlave.com."
    >
      <h2>1. Titular del portal</h2>
      <p>
        Esta política aplica al sitio web{" "}
        <strong>https://puertasinllave.com</strong>, gestionado por{" "}
        <strong>{LEGAL_OWNER}</strong>, domiciliado en{" "}
        <strong>{LEGAL_LOCATION}</strong> ({LEGAL_EMAIL}).
      </p>

      <h2>2. Almacenamiento técnico propio (localStorage)</h2>
      <p>
        PuertaSinLlave.com no inyecta rastreadores invasivos de terceros para
        perfilado publicitario. Utilizamos únicamente almacenamiento local del
        navegador estrictamente funcional:
      </p>
      <ul>
        <li>
          <code>psl_amazon_region</code>: recuerda si elegiste ver precios y
          stock en Amazon Estados Unidos (<code>US</code>) o Amazon España (
          <code>ES</code>).
        </li>
        <li>
          <code>psl_chat_session</code>, <code>psl_chat_messages</code> y{" "}
          <code>psl_visitor</code>: conservan localmente el hilo del Asesor de
          Cerraduras IA para que no pierdas tu conversación al cambiar de guía.
        </li>
      </ul>

      <h2>3. Cookies de terceros al salir hacia Amazon</h2>
      <p>
        Cuando haces clic en un botón de producto para consultar disponibilidad
        en Amazon.com (etiqueta <code>{AMAZON_TAG_US}</code>) o Amazon.es
        (etiqueta <code>{AMAZON_TAG_ES}</code>), Amazon coloca una cookie de
        atribución en su propio dominio con el objetivo exclusivo de asociar la
        recomendación a nuestro programa de afiliados durante la ventana
        habitual de 24 horas.
      </p>

      <h2>4. Cómo desactivar o borrar cookies</h2>
      <p>
        Puedes borrar el almacenamiento local y las cookies desde la
        configuración de privacidad de tu navegador (Chrome, Safari, Firefox o
        Edge) en cualquier momento. Si tienes dudas, contáctanos en{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
