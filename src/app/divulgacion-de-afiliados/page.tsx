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
  title: "Divulgación de Afiliados de Amazon | PuertaSinLlave.com",
  description: `Declaración oficial de participación en Amazon Associates de PuertaSinLlave.com (${LEGAL_OWNER}, ${LEGAL_LOCATION}, ${LEGAL_EMAIL}).`,
  alternates: { canonical: `${SITE_URL}/divulgacion-de-afiliados/` },
};

export default function DivulgacionAfiliadosPage() {
  return (
    <SimplePage
      title="Divulgación de Afiliados de Amazon"
      crumb="Divulgación de afiliados"
      href="/divulgacion-de-afiliados/"
      intro="Transparencia total sobre cómo se financia PuertaSinLlave.com mediante enlaces de afiliado a Amazon Estados Unidos y Amazon España."
    >
      <h2>1. Participación oficial en Amazon Associates</h2>
      <p>
        <strong>PuertaSinLlave.com</strong>, sitio web titularidad de{" "}
        <strong>{LEGAL_OWNER}</strong>, domiciliado en{" "}
        <strong>{LEGAL_LOCATION}</strong> (email:{" "}
        <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>), participa en el
        Programa de Afiliados de Amazon Services LLC y Amazon EU, un programa de
        publicidad para afiliados diseñado para ofrecer a sitios web un modo de
        obtener comisiones publicitarias mediante la inclusión de enlaces hacia{" "}
        <strong>amazon.com</strong> y <strong>amazon.es</strong>.
      </p>
      <ul>
        <li>
          <strong>ID oficial en Amazon Estados Unidos (amazon.com):</strong>{" "}
          <code>{AMAZON_TAG_US}</code>
        </li>
        <li>
          <strong>ID oficial en Amazon España (amazon.es):</strong>{" "}
          <code>{AMAZON_TAG_ES}</code>
        </li>
      </ul>

      <h2>2. Sin costo adicional para ti</h2>
      <p>
        <strong>
          En calidad de Afiliado de Amazon, obtenemos ingresos por las compras
          adscritas que cumplen los requisitos aplicables.
        </strong>{" "}
        El precio que ves en Amazon no aumenta ni un centavo cuando entras
        desde nuestras tarjetas o comparativas; la comisión sale íntegramente del
        margen de Amazon.
      </p>

      <h2>3. Independencia de nuestras recomendaciones</h2>
      <p>
        Ninguna marca (incluyendo TEEHO, eufy Security, Schlage, Aqara o
        SwitchBot) paga para alterar nuestras conclusiones ni nuestras alertas de
        incompatibilidad. Si una cerradura económica como la TEEHO TE002 no
        permite gestión por Wi-Fi a distancia, o si una eufy C220 no cabe en una
        puerta con caja embutida sin adaptar, lo indicamos claramente aunque eso
        implique recomendarte medir antes o elegir un modelo distinto.
      </p>
    </SimplePage>
  );
}
