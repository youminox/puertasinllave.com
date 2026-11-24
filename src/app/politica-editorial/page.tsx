import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import {
  SITE_URL,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Política Editorial y Metodología Técnica | PuertaSinLlave.com",
  description: `Cómo analizamos cerraduras digitales, comprobamos medidas de puerta y verificamos códigos temporales en PuertaSinLlave.com (${LEGAL_OWNER}).`,
  alternates: { canonical: `${SITE_URL}/politica-editorial/` },
};

export default function PoliticaEditorialPage() {
  return (
    <SimplePage
      title="Política Editorial y Metodología Técnica"
      crumb="Política editorial"
      href="/politica-editorial/"
      intro="Los criterios de verificación técnica detrás de nuestras 1,534 guías sobre cerraduras digitales para casas, departamentos y alquileres temporales."
    >
      <h2>1. Dirección editorial</h2>
      <p>
        La línea editorial de <strong>PuertaSinLlave.com</strong> es dirigida
        por <strong>{LEGAL_OWNER}</strong>, domiciliado en{" "}
        <strong>{LEGAL_LOCATION}</strong> ({LEGAL_EMAIL}). Nuestro objetivo es
        evitar errores costosos de compra al adquirir cerraduras digitales en
        Amazon Estados Unidos desde Latinoamérica, EE. UU. o España.
      </p>

      <h2>2. Los 4 pilares obligatorios en cada análisis</h2>
      <ul>
        <li>
          <strong>Compatibilidad dimensional real:</strong> verificamos en cada
          ficha el <em>backset</em> (60 mm / 2-3/8&quot; o 70 mm / 2-3/4&quot;),
          el rango exacto de grosor de puerta (35–50 mm en TEEHO frente a 35–55 mm
          en eufy), el diámetro transversal (54 mm o 38 mm) y si requiere cerrojo
          tubular americano frente a caja embutida.
        </li>
        <li>
          <strong>Formas de acceso y tasa de acierto:</strong> contrastamos
          teclados físicos frente a pantallas táctiles, velocidad del lector de
          huella (0.3 s), presencia de llaves de respaldo y puerto USB-C exterior.
        </li>
        <li>
          <strong>Gestión real de códigos temporales para huéspedes:</strong>{" "}
          distinguimos con claridad entre códigos de un solo uso creados en el
          teclado sin internet (TEEHO TE001/TE002) y códigos programados por fecha
          y hora desde el celular (eufy C210/C220, Schlage Encode).
        </li>
        <li>
          <strong>Accesorios necesarios para uso a distancia:</strong> siempre
          declaramos si la cerradura trae Wi-Fi integrado, incluye su propio
          Chime (eufy E330), necesita comprar un Puente Gateway G2 aparte o no
          admite control remoto.
        </li>
      </ul>

      <h2>3. Actualizaciones y reporte de errores</h2>
      <p>
        Los precios en Amazon Estados Unidos fluctúan con frecuencia y los
        fabricantes lanzan revisiones de firmware. Si detectas alguna variación
        técnica o de compatibilidad, puedes informarnos escribiendo a{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.
      </p>
    </SimplePage>
  );
}
