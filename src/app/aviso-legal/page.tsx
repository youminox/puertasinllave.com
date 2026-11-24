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
  title: "Aviso Legal y Condiciones de Uso | PuertaSinLlave.com",
  description: `Información legal oficial de PuertaSinLlave.com, titularidad de ${LEGAL_OWNER}, domiciliado en ${LEGAL_LOCATION} (${LEGAL_EMAIL}).`,
  alternates: { canonical: `${SITE_URL}/aviso-legal/` },
};

export default function AvisoLegalPage() {
  return (
    <SimplePage
      title="Aviso Legal y Condiciones de Uso"
      crumb="Aviso legal"
      href="/aviso-legal/"
      intro="Identificación oficial del responsable de PuertaSinLlave.com, condiciones generales de uso, propiedad intelectual y alcance técnico de nuestras guías de cerraduras digitales."
    >
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del deber de transparencia informativa aplicable a los
        servicios digitales y portales editoriales, se hace constar que el sitio
        web <strong>https://puertasinllave.com</strong> (en adelante,{" "}
        <strong>PuertaSinLlave.com</strong>) es propiedad y está operado por:
      </p>
      <ul>
        <li>
          <strong>Titular responsable:</strong> {LEGAL_OWNER}
        </li>
        <li>
          <strong>Domicilio legal:</strong> {LEGAL_LOCATION}
        </li>
        <li>
          <strong>Correo electrónico oficial de contacto:</strong>{" "}
          <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
      </ul>

      <h2>2. Objeto del portal</h2>
      <p>
        PuertaSinLlave.com es una guía independiente en español dedicada a
        ayudar a propietarios, inquilinos y anfitriones de alquileres temporales
        (Airbnb / Booking) a elegir cerraduras digitales de marcas como{" "}
        <strong>TEEHO y eufy Security</strong> disponibles en Amazon Estados
        Unidos y Amazon España, explicando medidas de puerta, códigos temporales
        para huéspedes y accesorios para control a distancia.
      </p>

      <h2>3. Propiedad intelectual y marcas mencionadas</h2>
      <p>
        Los textos, diagramas técnicos, tablas comparativas, el verificador de
        medidas y el diseño del sitio son titularidad de {LEGAL_OWNER}. Todas las
        marcas comerciales mencionadas (Amazon, TEEHO, eufy Security, Anker,
        Schlage, Aqara, SwitchBot, Ultraloq, Airbnb, Apple HomeKey) pertenecen a
        sus respectivos propietarios y se citan con fines estrictamente
        informativos y de compatibilidad.
      </p>

      <h2>4. Enlaces de afiliados a Amazon</h2>
      <p>
        Este sitio web participa en el Programa de Afiliados de Amazon.com
        Associates (ID: <strong>{AMAZON_TAG_US}</strong>) y Amazon Afiliados
        España (ID: <strong>{AMAZON_TAG_ES}</strong>). Si haces clic en enlaces
        de productos y realizas una compra elegible en Amazon, {LEGAL_OWNER}{" "}
        recibe una comisión publicitaria sin ningún costo extra para ti.
      </p>

      <h2>5. Alcance técnico y seguridad en la instalación</h2>
      <p>
        Las mediciones indicadas (backset de 60/70 mm, grosor de 35–55 mm,
        orificio transversal de 54 mm) deben comprobarse siempre físicamente
        sobre la puerta antes de realizar la compra o perforar la hoja. El
        usuario asume la verificación del reglamento de su condominio y las
        instrucciones del fabricante al instalar el equipo.
      </p>
    </SimplePage>
  );
}
