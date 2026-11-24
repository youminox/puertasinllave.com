import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import ArticleCard from "@/components/ArticleCard";
import ReadingProgress from "@/components/ReadingProgress";
import SplitHeading from "@/components/SplitHeading";
import OpenChatButton from "@/components/OpenChatButton";
import AmazonAffiliateBox from "@/components/AmazonAffiliateBox";
import { JsonLd } from "@/components/Breadcrumbs";
import Hero from "@/components/home/Hero";
import ScrollStory from "@/components/home/ScrollStory";
import DoorMeasureDiagramSvg from "@/components/home/DoorMeasureDiagramSvg";
import SmartLockOrbit, { type OrbitItem } from "@/components/home/SmartLockOrbit";
import LockSpecsCounters, {
  type LockMetricItem,
} from "@/components/home/LockSpecsCounters";
import PropertyModeSlider from "@/components/home/PropertyModeSlider";
import MomentsCarousel, { type Moment } from "@/components/home/MomentsCarousel";
import SmartLockFinderBlock, {
  type LockTier,
} from "@/components/home/SmartLockFinderBlock";
import {
  SITE_URL,
  OG_DEFAULT,
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
  ambient,
  getAllContent,
  getArticlesIn,
  getByPath,
  getCategories,
  safeHref,
  type Article,
} from "@/lib/content";
import { CATALOG } from "@/lib/amazon";

export const metadata: Metadata = {
  title:
    "PuertaSinLlave.com: Guía de Cerraduras Digitales (TEEHO y eufy) para Casas, Departamentos y Airbnb en Amazon EE. UU.",
  description:
    "Guía en español para elegir cerraduras digitales para casas, departamentos y alquileres temporales. Compara TEEHO y eufy según precio, medidas de puerta y acceso (código, huella o celular), códigos temporales y accesorios Wi-Fi en Amazon Estados Unidos.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title:
      "PuertaSinLlave.com: Cerraduras Digitales TEEHO y eufy en Amazon Estados Unidos",
    description:
      "Compara precios, comprueba las medidas de tu puerta antes de comprar, verifica códigos para huéspedes y qué accesorios requiere cada modelo para abrir desde el celular.",
    images: [
      {
        url: OG_DEFAULT(),
        width: 1200,
        height: 675,
        alt: "Cerraduras digitales TEEHO y eufy Security para casas, departamentos y alquileres temporales",
      },
    ],
  },
};

const FAQ = [
  {
    q: "¿Qué medidas debo comprobar en mi puerta antes de comprar una cerradura digital en Amazon?",
    a: "Comprueba cuatro medidas en milímetros o pulgadas: (1) Backset (distancia del borde al centro del agujero): debe ser 60 mm (2-3/8\") o 70 mm (2-3/4\"); (2) Grosor de la puerta: entre 35 y 50 mm para TEEHO o 35–55 mm en eufy; (3) Orificio frontal (Cross Bore): 54 mm (2-1/8\") o 38 mm (1-1/2\"); y (4) Orificio del canto del pestillo: 25 mm (1\"). Si tu puerta tiene caja embutida o multipunto, elige un modelo retrofit interior como SwitchBot Lock Pro.",
  },
  {
    q: "¿Qué diferencia hay entre TEEHO (TE001 / TE002) y eufy Security (C210 / C220)?",
    a: "TEEHO TE001 (<US$45, solo código PIN) y TEEHO TE002 (<US$60, huella 0.3s + código PIN) funcionan de forma 100 % local sin app ni internet: son ideales por precio en casas y departamentos donde no necesitas abrir desde otra ciudad. En cambio, eufy C210 y C220 (US$89–US$149) integran Wi-Fi 2.4 GHz directo para abrir desde el celular, ver historial en tiempo real y programar códigos por fechas desde cualquier país sin pagar mensualidades.",
  },
  {
    q: "¿Permiten crear códigos temporales para huéspedes de Airbnb o visitas?",
    a: "Sí, pero de distinta manera: las TEEHO TE001 y TE002 permiten digitar códigos de un solo uso directamente en el teclado estando junto a la puerta (se borran tras abrir), mientras que eufy C210, eufy C220, eufy E330 y Schlage Encode te permiten crear, editar y programar códigos con fecha y hora exacta de check-in y check-out desde el celular a distancia.",
  },
  {
    q: "¿Qué accesorios requiere una cerradura digital para funcionar desde el celular a distancia?",
    a: "Depende del modelo: eufy C210 y C220 traen el módulo Wi-Fi integrado y no requieren ningún accesorio; eufy Video Smart Lock E330 incluye su Chime Wi-Fi en la caja; las cerraduras Bluetooth (como TEEHO Smart App/Tuya o SwitchBot Lock Pro) exigen comprar un Puente Gateway Wi-Fi G2 o Hub Mini enchufado a 3–5 metros en red 2.4 GHz; y modelos locales como TEEHO TE001/TE002 no tienen conexión remota.",
  },
  {
    q: "¿Qué pasa si se agotan las pilas y estoy afuera sin llave física?",
    a: "Tanto TEEHO TE002 como eufy C220, Aqara U100 y la mayoría de cerraduras digitales actuales avisan con semanas de anticipación mediante LED rojo y pitidos, e incluyen un puerto USB-C (o contactos de 9V en modelos clásicos) en la parte inferior exterior del teclado para dar energía temporal con un powerbank o cable del celular, digitar tu código o usar tu huella y entrar normalmente.",
  },
  {
    q: "¿Puedo instalar una cerradura digital si vivo en un departamento alquilado o edificio con reglas estrictas?",
    a: "Sí. Si tu junta de condominio no permite cambiar el frente exterior o si alquilas y quieres llevarte el equipo al mudarte, usa una cerradura tipo Retrofit interior (como SwitchBot Lock Pro o August Wi-Fi): se fija por dentro sobre tu cilindro actual conservando exactamente la misma estética y llaves originales por fuera.",
  },
  {
    q: "¿Quién dirige PuertaSinLlave.com y cómo se financia el sitio?",
    a: `PuertaSinLlave.com es una guía independiente operada por ${LEGAL_OWNER}, domiciliado en ${LEGAL_LOCATION} (${LEGAL_EMAIL}). Participamos en el Programa de Afiliados de Amazon Estados Unidos (ID: puertasinllave-20) y Amazon España (ID: puertasinllave-21) sin costo adicional para el comprador.`,
  },
];

const CLAIMS = [
  "TEEHO TE001 / TE002 / TE002H",
  "eufy C210 / C220 / E330",
  "Casas · Departamentos · Airbnb",
  "Backset 60 / 70 mm",
  "Grosor 35–55 mm",
  "Huella Biométrica 0.3s",
  "Códigos Temporales Huéspedes",
  "Amazon EE. UU. (puertasinllave-20)",
];

const CLAIMS_2 = [
  "Comprobación de medidas antes de comprar",
  "Wi-Fi integrado vs Puente Bridge G2",
  "Código PIN Anti-Espía",
  "Control desde el celular sin cuotas",
  "Puerto USB-C de emergencia",
  "Guías para puerta de madera y metal",
  "Retrofit sin cambiar llave exterior",
  "1,534 guías técnicas en español",
];

const ICONS: Record<string, string> = {
  lock: "🔐",
  scale: "⚖️",
  key: "🔑",
  home: "🏠",
  tag: "🏷️",
  bridge: "📡",
  ruler: "📏",
  calendar: "📅",
  wifi: "📶",
  fingerprint: "👆",
  wrench: "🔧",
  battery: "🔋",
  shield: "🛡️",
  help: "❓",
};

export default function Home() {
  const cats = getCategories();
  const all = getAllContent();
  const heroImg = ambient(
    "home-hero-cerradura",
    "/img/ambiente/home-hero-cerradura.webp"
  );

  const orbit: OrbitItem[] = [
    {
      k: "teeho",
      name: "TEEHO TE001 / TE002",
      icon: "🔐",
      role: "Mejor Calidad-Precio Local (<$45–$60)",
      d: "Huella en 0.3s (TE002) y teclado PIN anti-espía (TE001). Permite códigos temporales de 1 uso en el teclado sin necesitar internet ni suscripción.",
      href: safeHref(
        "/resenas-cerraduras-digitales/teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad/"
      ),
      img: null,
    },
    {
      k: "eufy",
      name: "eufy C210 / C220",
      icon: "📱",
      role: "Wi-Fi Integrado Sin Bridge ni Cuotas",
      d: "Abre desde el celular y crea códigos por fecha/hora desde otra ciudad sin comprar puentes ni pagar almacenamiento en la nube.",
      href: safeHref(
        "/resenas-cerraduras-digitales/eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas/"
      ),
      img: null,
    },
    {
      k: "medidas",
      name: "Medidas de Puerta",
      icon: "📏",
      role: "Backset 60/70 mm · Grosor 35–55 mm",
      d: "Comprobar el backset, diámetro de 54 mm y canto de 25 mm antes de comprar evita el 90 % de incompatibilidades en casa o departamento.",
      href: safeHref("/como-medir-tu-puerta-y-compatibilidad/"),
      img: null,
    },
    {
      k: "huespedes",
      name: "Códigos Airbnb",
      icon: "🔑",
      role: "Auto Check-in Temporal Sin Llaves",
      d: "Desde PIN offline de un solo uso hasta códigos sincronizados por calendario de reserva con fecha exacta de entrada y salida.",
      href: safeHref("/codigos-temporales-y-gestion-de-huespedes/"),
      img: null,
    },
    {
      k: "puentes",
      name: "Puentes Wi-Fi G2",
      icon: "📡",
      role: "Acceso Remoto para Modelos Bluetooth",
      d: "Qué cerraduras ya incluyen Wi-Fi, cuáles traen Chime en la caja y cuándo debes enchufar un Gateway G2 o Hub Mini a 3–5 m.",
      href: safeHref("/control-desde-el-celular-wifi-y-puentes/"),
      img: null,
    },
    {
      k: "video",
      name: "Videocerradura E330",
      icon: "📹",
      role: "3-en-1: Cámara 2K + Timbre + Huella",
      d: "Control total de la puerta principal de tu casa con batería recargable de 10,000 mAh y Chime Wi-Fi incluido.",
      href: safeHref("/cerraduras-para-casas-y-departamentos/"),
      img: null,
    },
    {
      k: "retrofit",
      name: "Retrofit Depa Alquilado",
      icon: "🏢",
      role: "Sin Cambiar Estética ni Bombín Exterior",
      d: "La salida inteligente cuando el edificio prohíbe modificar la puerta o tienes caja multipunto: motor interior sobre tu llave.",
      href: safeHref("/cerraduras-para-casas-y-departamentos/"),
      img: null,
    },
    {
      k: "emergencia",
      name: "Pilas Litio y USB-C",
      icon: "🔋",
      role: "Autonomía 8–12 Meses y Respaldo",
      d: "Por qué usar pilas AA de litio 1.5V (en lugar de NiMH 1.2V) y cómo usar el puerto USB-C exterior ante una descarga total.",
      href: safeHref("/baterias-autonomia-y-emergencias-sin-energia/"),
      img: null,
    },
  ];

  const metrics: LockMetricItem[] = [
    {
      v: 0.3,
      dec: 1,
      u: "seg",
      l: "Lectura de huella 3D",
      pct: 95,
      note: "TEEHO TE002 y eufy C220",
    },
    {
      v: 60,
      dec: 0,
      u: "/ 70mm",
      l: "Backset ajustable estándar",
      pct: 100,
      note: "2-3/8\" o 2-3/4\" de serie",
    },
    {
      v: 54,
      dec: 0,
      u: "mm",
      l: "Orificio frontal (2-1/8\")",
      pct: 92,
      note: "Grosor de hoja 35–55 mm",
    },
    {
      v: 8,
      dec: 0,
      u: "–12 m",
      l: "Autonomía con pilas AA",
      pct: 84,
      note: "Con aviso previo y USB-C",
    },
    {
      v: 100,
      dec: 0,
      u: "códigos",
      l: "PIN temporales / familia",
      pct: 88,
      note: "Según modelo (20 en TEEHO, 100 eufy)",
    },
    {
      v: 0,
      dec: 0,
      u: "USD/mes",
      l: "Cuotas o suscripciones",
      pct: 100,
      note: "TEEHO, eufy y Aqara sin renta",
    },
  ];

  const moments: Moment[] = [
    {
      img: ambient("home-medir-backset", heroImg),
      t: "Comprueba medidas",
      d: "Cómo medir backset (60/70 mm), grosor y orificio en 2 minutos.",
      href: safeHref(
        "/como-medir-tu-puerta-y-compatibilidad/como-medir-backset-grosor-y-orificio-de-puerta-antes-de-comprar-cerradura-digital/"
      ),
      alt: "Cinta métrica midiendo el backset de 60 mm en una puerta de madera",
    },
    {
      img: ambient("home-airbnb-huespedes", heroImg),
      t: "Huéspedes Airbnb",
      d: "Códigos con fecha de check-in y check-out sin entregar llaves.",
      href: safeHref("/cerraduras-para-airbnb-y-alquiler-temporal/"),
      alt: "Entrada de departamento Airbnb con cerradura digital y maleta de viaje",
    },
    {
      img: ambient("home-huella-biometrica", heroImg),
      t: "Huella en 0.3s",
      d: "Olvida buscar llaves al llegar con bolsas del mercado o niños.",
      href: safeHref("/formas-de-acceso-codigo-huella-y-llave/"),
      alt: "Dedo apoyándose sobre lector biométrico iluminado en cerradura digital",
    },
    {
      img: ambient("home-puente-wifi", heroImg),
      t: "Wi-Fi vs Puente G2",
      d: "Qué accesorios necesitas para abrir y crear PIN desde otra ciudad.",
      href: safeHref(
        "/control-desde-el-celular-wifi-y-puentes/cerraduras-con-wifi-integrado-vs-puente-wifi-bridge-que-accesorios-necesitas/"
      ),
      alt: "Smartphone abriendo cerradura a distancia junto a puente Wi-Fi enchufado",
    },
    {
      img: ambient("home-departamento-retrofit", heroImg),
      t: "Depa alquilado",
      d: "Instala por dentro sin cambiar la cerradura exterior del edificio.",
      href: safeHref("/cerraduras-para-casas-y-departamentos/"),
      alt: "Puerta moderna de departamento con mecanismo retrofit interior",
    },
    {
      img: ambient("home-emergencia-usbc", heroImg),
      t: "Sin pilas / USB-C",
      d: "Cómo entrar al instante usando tu celular o un powerbank exterior.",
      href: safeHref("/baterias-autonomia-y-emergencias-sin-energia/"),
      alt: "Cable USB-C conectado desde powerbank al puerto inferior de una cerradura",
    },
    {
      img: ambient("home-instalacion-destornillador", heroImg),
      t: "Instalación DIY",
      d: "Montaje en 15 min y calibración izquierda/derecha sin atascos.",
      href: safeHref("/instalacion-paso-a-paso-y-ajustes-de-puerta/"),
      alt: "Destornillador manual fijando placa interior de cerradura digital",
    },
  ];

  const lockFinderOptions: LockTier[] = [
    {
      key: "airbnb",
      label: "🔑 Airbnb / Remoto",
      priceSpec: "US$119 – US$149",
      doorSpec: "Backset 60/70 mm · Grosor 35–55 mm",
      guestSpec: "Códigos por fechas/horas desde el celular",
      remoteSpec: "Wi-Fi integrado (NO requiere bridge)",
      img: ambient("home-airbnb-huespedes", heroImg),
      alt: "eufy Smart Lock C220 instalada en departamento Airbnb",
      idealFor:
        "Alquileres temporales y dueños que crean códigos o abren desde otra ciudad sin mensualidades",
      reviewHref: safeHref(
        "/resenas-cerraduras-digitales/eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas/"
      ),
      productKey: "EUFY_C220",
    },
    {
      key: "calidad-precio",
      label: "👆 Huella Económica",
      priceSpec: "US$45 – US$59",
      doorSpec: "Backset 60/70 mm · Grosor 35–50 mm",
      guestSpec: "Códigos de 1 solo uso en el teclado",
      remoteSpec: "100 % Local (Sin Wi-Fi ni app remota)",
      img: ambient("home-huella-biometrica", heroImg),
      alt: "TEEHO TE002 con huella digital y teclado en puerta de casa",
      idealFor:
        "Casas, departamentos familiares y puertas interiores que buscan huella rápida al mejor precio",
      reviewHref: safeHref(
        "/resenas-cerraduras-digitales/teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad/"
      ),
      productKey: "TEEHO_TE002",
    },
    {
      key: "presupuesto",
      label: "💵 < US$45 Solo Código",
      priceSpec: "US$32 – US$44",
      doorSpec: "Backset 60/70 mm · Grosor 35–50 mm",
      guestSpec: "PIN de 1 solo uso offline + 20 códigos",
      remoteSpec: "Sin internet ni accesorios (solo teclado)",
      img: ambient("cat-cerraduras-por-precio-y-forma-de-acceso", heroImg),
      alt: "TEEHO TE001 teclado numérico retroiluminado económico",
      idealFor:
        "Presupuestos ajustados, cocheras, despachos o puertas donde basta código numérico fiable",
      reviewHref: safeHref(
        "/resenas-cerraduras-digitales/teeho-te001-cerradura-teclado-resena-medidas-y-codigos/"
      ),
      productKey: "TEEHO_TE001",
    },
    {
      key: "video",
      label: "📹 Casa con Cámara 2K",
      priceSpec: "US$199 – US$279",
      doorSpec: "Backset 60/70 mm · Grosor 35–55 mm",
      guestSpec: "Códigos por fechas + video al abrir",
      remoteSpec: "Incluye Chime Wi-Fi en la caja",
      img: ambient("cat-cerraduras-para-casas-y-departamentos", heroImg),
      alt: "Videocerradura eufy E330 3 en 1 con cámara 2K en puerta principal",
      idealFor:
        "Puertas principales de casas unifamiliares que quieren timbre con cámara 2K, huella y app en 1 equipo",
      reviewHref: safeHref("/resenas-cerraduras-digitales/"),
      productKey: "EUFY_E330_VIDEO",
    },
  ];

  const POPULAR = [
    "/comparativas-cerraduras-digitales/teeho-vs-eufy-cual-cerradura-digital-elegir-casa-departamento-airbnb/",
    "/resenas-cerraduras-digitales/teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad/",
    "/resenas-cerraduras-digitales/eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas/",
    "/como-medir-tu-puerta-y-compatibilidad/como-medir-backset-grosor-y-orificio-de-puerta-antes-de-comprar-cerradura-digital/",
    "/cerraduras-para-airbnb-y-alquiler-temporal/mejores-cerraduras-digitales-para-airbnb-y-alquiler-temporal-amazon/",
    "/control-desde-el-celular-wifi-y-puentes/cerraduras-con-wifi-integrado-vs-puente-wifi-bridge-que-accesorios-necesitas/",
  ];
  const popular: Article[] = POPULAR.map((p) => getByPath(p)).filter(
    Boolean
  ) as Article[];
  for (const a of all) {
    if (popular.length >= 6) break;
    if (!a.isPillar && !popular.includes(a)) popular.push(a);
  }

  return (
    <>
      <ReadingProgress />
      <Header variant="dark" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: `${SITE_URL}/`,
              name: "PuertaSinLlave.com: Guía de Cerraduras Digitales en Amazon EE. UU.",
              inLanguage: "es",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              primaryImageOfPage: `${SITE_URL}${heroImg}`,
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <main>
        {/* 1–2. Hero 3D Tilt + Partículas + HeroSearch */}
        <Hero heroImage={heroImg} />

        {/* 3. Doble cinta Marquee */}
        <div className="relative border-b border-[var(--line)] bg-white py-5">
          <div className="marquee">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="marquee-track font-display text-lg font-bold text-fxink/85"
                aria-hidden={k === 1}
              >
                {CLAIMS.map((t) => (
                  <span key={t} className="flex items-center gap-3 whitespace-nowrap">
                    <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-gradient-to-br from-fxblue to-fxlime" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="marquee reverse mt-3" aria-hidden>
            {[0, 1].map((k) => (
              <div
                key={k}
                className="marquee-track text-sm font-semibold uppercase tracking-[0.14em] text-fxbluedeep/75"
              >
                {CLAIMS_2.map((t) => (
                  <span key={t} className="flex items-center gap-3 whitespace-nowrap">
                    <span className="h-1.5 w-1.5 rounded-full bg-prune" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Los 4 criterios clave + 4 tarjetas Spotlight */}
        <section id="criterios" className="wrap py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Antes de elegir en Amazon EE. UU.
              </span>
              <SplitHeading
                text="Compara precio, medidas,"
                accent={{
                  text: "huéspedes y acceso remoto",
                  className: "text-fxblue",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
                No todas las cerraduras digitales sirven para cualquier puerta ni
                para alquiler temporal. En{" "}
                <strong className="text-fxink">PuertaSinLlave.com</strong>{" "}
                desglosamos cada modelo de <strong className="text-fxink">TEEHO y eufy</strong>{" "}
                comprobando tus medidas exactas antes de comprar y evitando gastar
                de más en accesorios o puentes innecesarios.
              </p>
              <div
                className="mt-6 rounded-2xl border border-sky-300/60 bg-sky-50/75 p-5"
                data-reveal
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-900">
                  📏 Regla de Oro Anti-Devoluciones en Amazon USA
                </p>
                <ul className="mt-2 space-y-1.5 text-[0.97rem] text-fxink">
                  <li>
                    • Comprueba tu <strong>Backset</strong>: debe medir{" "}
                    <strong>60 mm (2-3/8&quot;)</strong> o{" "}
                    <strong>70 mm (2-3/4&quot;)</strong> del borde al centro.
                  </li>
                  <li>
                    • Verifica si necesitas{" "}
                    <strong>códigos temporales a distancia</strong> (eufy Wi-Fi)
                    o basta PIN de un solo uso local (TEEHO).
                  </li>
                  <li>
                    • Confirma si trae <strong>Wi-Fi integrado</strong> o
                    requiere <strong>Puente Gateway G2</strong> enchufado cerca.
                  </li>
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/verificador-de-medidas/"
                  className="btn btn-prune"
                  data-magnetic
                >
                  Abrir Verificador de Medidas
                </Link>
                <Link
                  href="/comparativas-cerraduras-digitales/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Ver Comparativas TEEHO vs eufy
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-3xl shadow-[0_30px_60px_-35px_rgba(6,10,18,0.6)]"
                data-reveal
              >
                <Image
                  src={ambient("og-default", heroImg)}
                  alt="Comparativa de cerraduras digitales TEEHO, eufy Security, puente Wi-Fi y cinta métrica para medir puerta"
                  fill
                  sizes="(max-width:1024px) 100vw, 600px"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-fxink">
                  Guía técnica verificada para casas, depas y Airbnb
                </span>
              </div>
              {[
                [
                  "💵",
                  "Precio Claro (US$32–$279)",
                  "Desde opciones económicas locales (TEEHO) hasta Wi-Fi + cámara 2K (eufy E330).",
                ],
                [
                  "📏",
                  "Medidas Verificadas",
                  "Backset 60/70 mm, grosor 35–55 mm, orificio 54 mm y alerta si tienes caja mortise.",
                ],
                [
                  "🔑",
                  "Códigos de Huéspedes",
                  "PIN de 1 uso en teclado vs programación por fechas/horas desde otra ciudad.",
                ],
                [
                  "📡",
                  "Wi-Fi Directo o Puente",
                  "Te indicamos si conecta sola al router 2.4 GHz o exige Gateway G2 aparte.",
                ],
              ].map(([e, t, d], i) => (
                <div
                  key={t}
                  className="card spot p-5"
                  data-reveal
                  data-reveal-delay={String(i)}
                >
                  <p className="text-2xl" aria-hidden>
                    {e}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-tight">
                    {t}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Historia fijada GSAP en 4 pasos */}
        <ScrollStory />

        {/* 6. Diagrama Técnico SVG: Medidas de Puerta */}
        <section className="relative isolate overflow-hidden bg-[#060a12] py-24 text-white">
          <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-fxblue/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-prune/25 blur-3xl" />
          <div className="hero-grid opacity-50" />
          <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="eyebrow !text-drinklight" data-reveal>
                Compatibilidad de Puertas Sin Errores
              </span>
              <SplitHeading
                text="Las 4 medidas que deciden"
                accent={{
                  text: "si encaja en tu puerta",
                  className: "text-gradient",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-white/75" data-reveal>
                Casi todas las cerraduras americanas vendidas en Amazon EE. UU. (
                <strong className="text-white">TEEHO, eufy, Schlage, Aqara</strong>
                ) están diseñadas para el estándar{" "}
                <strong className="text-white">ANSI Deadbolt</strong>. Si tu
                puerta ya tiene un cerrojo superior de llave independiente, en el
                90 % de los casos basta comprobar cuatro cifras con una regla o
                cinta métrica.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3" data-reveal>
                {[
                  ["📐", "Backset 60/70 mm"],
                  ["⭕", "Hueco 54 mm"],
                  ["🚪", "Grosor 35–55 mm"],
                ].map(([e, t]) => (
                  <div key={t} className="glass p-4 text-center">
                    <p className="text-2xl" aria-hidden>
                      {e}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{t}</p>
                  </div>
                ))}
              </div>
              <div className="glass mt-6 p-5 text-sm text-white/75" data-reveal>
                <strong className="text-white">Ojo si vives en Latinoamérica o España:</strong>{" "}
                si la hoja tiene una sola cerradura larga embutida (<em>mortise</em>
                ) que saca varios pasadores al girar la llave, o si eres inquilino
                y no puedes alterar el exterior, revisa nuestras soluciones{" "}
                <strong>Retrofit</strong> que motorizan por dentro sin perforar.
              </div>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/verificador-de-medidas/"
                  className="btn btn-lime text-slate-950"
                  data-magnetic
                >
                  Probar Verificador Interactivo
                </Link>
                <Link
                  href="/como-medir-tu-puerta-y-compatibilidad/"
                  className="btn btn-glass"
                  data-magnetic
                >
                  Guía ilustrada de medidas
                </Link>
              </div>
            </div>
            <div data-reveal>
              <DoorMeasureDiagramSvg />
            </div>
          </div>
        </section>

        {/* 7. Órbita interactiva de 8 nodos */}
        <section className="wrap py-24">
          <SmartLockOrbit items={orbit} center={heroImg} />
        </section>

        {/* 8. Contadores animados + Tabla Comparativa TEEHO vs eufy */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#060a12] via-[#0b1320] to-[#082f49] py-24 text-white">
          <div className="hero-aurora opacity-40" />
          <div className="wrap relative grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="eyebrow !text-drinklight" data-reveal>
                Datos Reales de Rendimiento
              </span>
              <SplitHeading
                text="Especificaciones clave,"
                accent={{ text: "sin letra pequeña", className: "text-gradient" }}
                className="section-title mt-3"
              />
              <p className="mt-4 max-w-xl text-white/70" data-reveal>
                Cifras verificadas en manuales de instalación de{" "}
                <strong className="text-white">TEEHO</strong> y{" "}
                <strong className="text-white">eufy Security</strong> en Amazon
                Estados Unidos para evitar sorpresas con pilas, Wi-Fi o tamaño.
              </p>
              <div className="mt-8">
                <LockSpecsCounters data={metrics} />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/comparativas-cerraduras-digitales/"
                  className="btn btn-glass"
                  data-magnetic
                >
                  Ver 105 comparativas VS
                </Link>
                <Link
                  href="/baterias-autonomia-y-emergencias-sin-energia/"
                  className="btn btn-glass"
                  data-magnetic
                >
                  Pilas y emergencia USB-C
                </Link>
              </div>
            </div>

            <div
              className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl border border-white/20"
              data-reveal
            >
              <p className="text-xs font-extrabold uppercase tracking-wider text-fxbluedeep">
                Comparativa Rápida · Amazon EE. UU.
              </p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">
                TEEHO vs eufy Security en 4 líneas
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 pr-2">Modelo</th>
                      <th className="py-2 px-2">Acceso</th>
                      <th className="py-2 px-2">Huéspedes</th>
                      <th className="py-2 pl-2">Remoto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2.5 pr-2 font-bold">TEEHO TE001</td>
                      <td className="py-2.5 px-2">PIN + Llave</td>
                      <td className="py-2.5 px-2">1 uso (local)</td>
                      <td className="py-2.5 pl-2 text-slate-500">No</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-bold">TEEHO TE002</td>
                      <td className="py-2.5 px-2">Huella + PIN</td>
                      <td className="py-2.5 px-2">1 uso (local)</td>
                      <td className="py-2.5 pl-2 text-slate-500">No</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-bold text-fxbluedeep">
                        eufy C210
                      </td>
                      <td className="py-2.5 px-2">PIN + App</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">
                        Por fechas
                      </td>
                      <td className="py-2.5 pl-2 font-semibold text-sky-700">
                        Wi-Fi directo
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-bold text-fxbluedeep">
                        eufy C220
                      </td>
                      <td className="py-2.5 px-2">Huella + PIN + App</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">
                        Por fechas
                      </td>
                      <td className="py-2.5 pl-2 font-semibold text-sky-700">
                        Wi-Fi directo
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-2 font-bold text-prune-deep">
                        eufy E330
                      </td>
                      <td className="py-2.5 px-2">Cámara 2K + Huella</td>
                      <td className="py-2.5 px-2 font-semibold text-emerald-700">
                        Por fechas
                      </td>
                      <td className="py-2.5 pl-2 font-semibold text-sky-700">
                        Chime incluido
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-slate-600">
                Todos estos modelos soportan backset ajustable{" "}
                <strong>60 mm / 70 mm</strong> y puerta estándar de{" "}
                <strong>35–50 mm</strong> (hasta 55 mm en eufy).
              </p>
            </div>
          </div>
        </section>

        {/* 9. Slider Arrastrable Casa/Depa vs Airbnb */}
        <section className="wrap py-24">
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Dos necesidades opuestas
              </span>
              <SplitHeading
                text="Hogar diario o"
                accent={{ text: "alquiler temporal remoto", className: "text-fxblue" }}
                className="section-title mt-3"
              />
            </div>
            <p className="text-lg text-[var(--muted)]" data-reveal>
              Desliza el comparador para ver cuándo te ahorras dinero con una{" "}
              <strong className="text-fxink">TEEHO local</strong> y cuándo
              necesitas obligatoriamente el{" "}
              <strong className="text-fxink">Wi-Fi directo de eufy</strong> para
              gestionar huéspedes desde otra ciudad.
            </p>
          </div>
          <div data-reveal>
            <PropertyModeSlider />
          </div>
        </section>

        {/* 10. MomentsCarousel */}
        <section className="overflow-hidden bg-fxsky py-24">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow" data-reveal>
                Escenarios reales en casa, depa y Airbnb
              </span>
              <SplitHeading
                text="Momentos reales"
                accent={{ text: "sin buscar llaves", className: "text-fxbluedeep" }}
                className="section-title mt-3"
              />
            </div>
            <MomentsCarousel items={moments} />
          </div>
        </section>

        {/* 11. Recomendador interactivo + Simulador de Batería */}
        <section id="selector" className="wrap py-24">
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Selector Inteligente en Amazon EE. UU.
              </span>
              <SplitHeading
                text="Encuentra tu modelo exacto"
                accent={{ text: "en cuatro toques", className: "text-prune" }}
                className="section-title mt-3"
              />
            </div>
            <p className="text-lg text-[var(--muted)]" data-reveal>
              Elige entre alquiler temporal, huella económica, presupuesto
              mínimo o videocerradura 2K y consulta su precio, medidas,
              huéspedes y requisito de Wi-Fi al instante.
            </p>
          </div>
          <div data-reveal>
            <SmartLockFinderBlock options={lockFinderOptions} />
          </div>
        </section>

        {/* 12. Bento Grid de los 14 Silos + Vitrina Amazon Top 3 + 6 Más Consultadas */}
        <section className="bg-gradient-to-b from-white to-fxsky py-24">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow" data-reveal>
                1,534 Guías Organizadas Sin Canibalización
              </span>
              <SplitHeading
                text="Explora los 14 silos"
                accent={{
                  text: "de cerraduras digitales",
                  className: "text-fxbluedeep",
                }}
                className="section-title mt-3"
              />
            </div>

            <div className="grid auto-rows-[minmax(190px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
              {cats.map((c, i) => {
                const count = getArticlesIn(c.slug).length;
                const big = i === 0;
                const wide = i === 1 || i === 6 || i === 7;
                return (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}/`}
                    className={`card spot group flex flex-col p-7 ${
                      big
                        ? "spot-dark border-transparent bg-gradient-to-br from-[#060a12] via-[#0b1320] to-[#0284c7] text-white md:col-span-2 lg:row-span-2"
                        : ""
                    } ${wide ? "lg:col-span-2" : ""}`}
                    data-reveal
                    data-reveal-delay={String(i % 4)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${
                          big ? "bg-white/15" : "bg-fxsky"
                        }`}
                        aria-hidden
                      >
                        {ICONS[c.icon] || "🔐"}
                      </span>
                      {count > 0 && (
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            big ? "text-fxlime" : "text-fxbluedeep"
                          }`}
                        >
                          {count} guías
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mt-5 font-display font-extrabold ${
                        big ? "text-3xl sm:text-4xl" : "text-2xl"
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p
                      className={`mt-2 ${
                        big ? "text-white/80" : "text-[var(--muted)]"
                      }`}
                    >
                      {c.description}
                    </p>
                    {big && (
                      <ul className="mt-6 space-y-2 text-sm text-white/85">
                        {getArticlesIn(c.slug)
                          .slice(0, 5)
                          .map((a) => (
                            <li key={a.path}>→ {a.title}</li>
                          ))}
                      </ul>
                    )}
                    <span
                      className={`mt-auto pt-5 font-semibold ${
                        big ? "text-white" : "text-fxbluedeep"
                      }`}
                    >
                      Explorar silo →
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-14">
              <AmazonAffiliateBox
                variant="showcase"
                sectionTitle="Top 3 Cerraduras y Accesorios Más Recomendados en Amazon EE. UU."
                sectionSubtitle="Nuestra selección directa cubriendo mejor calidad-precio local (TEEHO TE002), mejor Wi-Fi integrado para Airbnb y hogar (eufy C220) y respaldo esencial:"
                products={[
                  CATALOG.TEEHO_TE002,
                  CATALOG.EUFY_C220,
                  CATALOG.LITHIUM_AA_AND_LOCKBOX,
                ]}
                source="home-showcase"
              />
            </div>

            {popular.length > 0 && (
              <div className="mt-16">
                <h3
                  className="font-display text-2xl font-extrabold sm:text-3xl"
                  data-reveal
                >
                  Las 6 guías más consultadas antes de comprar
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {popular.slice(0, 6).map((a) => (
                    <div key={a.path} data-reveal>
                      <ArticleCard a={a} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 13. Transparencia técnica vs marketing (E-E-A-T) */}
        <section className="wrap py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Criterio Editorial Independiente
              </span>
              <SplitHeading
                text="Datos de puerta reales,"
                accent={{ text: "no promesas de caja", className: "text-fxblue" }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
                Muchos anuncios en Amazon llaman «Wi-Fi Smart» a cerraduras que
                en realidad son solo Bluetooth y te obligan a comprar un puente
                aparte, o esconden que solo aceptan puertas americanas de
                54 mm. Aquí lo comprobamos por adelantado.
              </p>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/politica-editorial/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Nuestra metodología
                </Link>
                <Link
                  href="/sobre-nosotros/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Sobre {LEGAL_OWNER}
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card spot p-6" data-reveal>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  ✓ Qué sí verificamos aquí
                </span>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Backset exacto (60 vs 70 mm) y grosor en mm y pulgadas</li>
                  <li>• Si el puente Wi-Fi viene incluido o se compra aparte</li>
                  <li>• Si crea códigos por fechas o solo de 1 uso local</li>
                  <li>• Qué pasa cuando las pilas AA llegan a 0 %</li>
                </ul>
              </div>
              <div
                className="card spot p-6"
                data-reveal
                data-reveal-delay="1"
              >
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  ⚠️ Alertas frecuentes en Amazon
                </span>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Modelos «App» que solo tienen alcance Bluetooth (8 m)</li>
                  <li>• Incompatibilidad con puertas metálicas multipunto</li>
                  <li>• Redes Wi-Fi 5 GHz que bloquean el emparejamiento</li>
                  <li>• Pilas recargables 1.2V que disparan alerta falsa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 14. FAQ JSON-LD + OpenChatButton */}
        <section className="wrap pb-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Preguntas frecuentes
              </span>
              <SplitHeading
                text="Respuestas rápidas"
                className="section-title mt-3"
              />
              <p className="mt-4 text-[var(--muted)]" data-reveal>
                ¿Aún dudas si TEEHO o eufy le queda a tu puerta o qué puente
                necesitas para tu Airbnb? Nuestro Asesor IA responde al instante.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <OpenChatButton
                  label="Preguntar al Asesor IA"
                  className="btn btn-buy"
                />
                <Link href="/verificador-de-medidas/" className="btn btn-ghost">
                  Verificar medidas
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="card card-static group p-5 open:shadow-lg"
                  data-reveal
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fxsky text-fxbluedeep transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 15. CTA final Aurora */}
        <section className="wrap pb-6">
          <div className="relative isolate overflow-hidden rounded-[36px] bg-gradient-to-br from-[#060a12] via-[#0b1320] to-[#0284c7] px-6 py-14 text-white sm:px-14 sm:py-20">
            <Image
              src={heroImg}
              alt=""
              fill
              sizes="1200px"
              className="-z-[2] object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="hero-grid opacity-60" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-drinklight/35 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-fxlime/25 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div className="text-center lg:text-left">
                <SplitHeading
                  text="Abre tu puerta sin llaves,"
                  accent={{
                    text: "con la cerradura exacta para tu puerta",
                    className: "text-fxlime",
                  }}
                  className="text-4xl font-extrabold sm:text-5xl"
                />
                <p className="mt-4 text-lg text-white/85">
                  Compara precios de TEEHO y eufy en Amazon Estados Unidos,
                  valida tu backset de 60/70 mm y consulta al instante cualquier
                  duda sobre huéspedes o puentes Wi-Fi.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <Link
                    href="/verificador-de-medidas/"
                    className="btn btn-lime shine text-base"
                    data-magnetic
                  >
                    📏 Verificar Mi Puerta Ahora
                  </Link>
                  <OpenChatButton
                    label="Consultar Asesor IA"
                    className="btn btn-glass text-base"
                    magnetic
                  />
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[360px]">
                <div className="float-y relative aspect-[16/10] overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl">
                  <Image
                    src={ambient("home-airbnb-huespedes", heroImg)}
                    alt="Cerradura inteligente Wi-Fi instalada en entrada moderna"
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ClientEffects stickySource="home-sticky" />
    </>
  );
}
