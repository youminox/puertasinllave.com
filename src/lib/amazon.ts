export const AMAZON_TAG_US = "puertasinllave-20";
export const AMAZON_TAG_ES = "puertasinllave-21";

export type AmazonStoreRegion = "US" | "ES";

export type AmazonCategoryType =
  | "keypad-lock"
  | "fingerprint-lock"
  | "wifi-lock"
  | "video-lock"
  | "retrofit-lock"
  | "accessory-bridge";

export interface AmazonProductRecommendation {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  rating: string;
  reviewsCount: string;
  categoryType: AmazonCategoryType;
  specs: {
    priceRange: string;
    doorCompat: string;
    accessMethods: string;
    guestCodes: string;
    remoteControl: string;
  };
  asinUS?: string;
  asinES?: string;
  queryUS: string;
  queryES: string;
  ctaLabel: string;
}

export function buildAmazonUrl(
  product: AmazonProductRecommendation,
  region: AmazonStoreRegion
): string {
  if (region === "ES") {
    if (product.asinES) {
      return `https://www.amazon.es/dp/${product.asinES}?tag=${AMAZON_TAG_ES}`;
    }
    const q = encodeURIComponent(product.queryES);
    return `https://www.amazon.es/s?k=${q}&tag=${AMAZON_TAG_ES}`;
  }
  if (product.asinUS) {
    return `https://www.amazon.com/dp/${product.asinUS}?tag=${AMAZON_TAG_US}`;
  }
  const q = encodeURIComponent(product.queryUS);
  return `https://www.amazon.com/s?k=${q}&tag=${AMAZON_TAG_US}`;
}

export function detectUserAmazonRegion(): AmazonStoreRegion {
  if (typeof window === "undefined") {
    return "US";
  }
  try {
    const saved = window.localStorage.getItem("psl_amazon_region");
    if (saved === "US" || saved === "ES") return saved;
  } catch {
    // ignore
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();
    if (
      tz === "Europe/Madrid" ||
      tz === "Atlantic/Canary" ||
      tz === "Europe/Ceuta" ||
      tz.startsWith("Europe/") ||
      lang === "es-es"
    ) {
      return "ES";
    }
    return "US";
  } catch {
    return "US";
  }
}

export const CATALOG: Record<string, AmazonProductRecommendation> = {
  TEEHO_TE002: {
    id: "teeho-te002-huella",
    badge: "🏆 #1 Calidad-Precio Amazon EE. UU. (Huella + Código PIN)",
    title:
      "TEEHO TE002 Fingerprint Door Lock — Huella Biométrica 0.3s + Teclado PIN + 2 Llaves",
    subtitle:
      "El cerrojo digital más vendido en Amazon para casas y departamentos: desbloquea por huella en 0.3 s o PIN anti-espía sin depender de Wi-Fi ni apps.",
    features: [
      "Permite crear hasta 20 códigos permanentes y PIN temporales de un solo uso directo en el teclado",
      "Bloqueo automático configurable (10 a 99 segundos), modo vacaciones y protección climática IP54",
      "Puerto de emergencia para alimentarla desde afuera con un cargador portátil si se agotan las pilas",
    ],
    rating: "4.5",
    reviewsCount: "26.400+",
    categoryType: "fingerprint-lock",
    specs: {
      priceRange: "US$45 – US$59",
      doorCompat: "Backset 60/70 mm (2-3/8\" o 2-3/4\") · Grosor 35–50 mm · Orificio 54 mm",
      accessMethods: "Huella dactilar 3D + Código PIN anti-espía + 2 llaves físicas",
      guestCodes: "Sí: códigos de 1 solo uso (se borran tras abrir) y códigos de usuario",
      remoteControl: "No controla a distancia (100 % local, sin app ni puente Wi-Fi)",
    },
    queryUS: "TEEHO TE002 Fingerprint Door Lock Keypad Deadbolt",
    queryES: "TEEHO TE002 cerradura inteligente huella digital teclado",
    ctaLabel: "Ver Precio de TEEHO TE002 en Amazon",
  },

  TEEHO_TE001: {
    id: "teeho-te001-keypad",
    badge: "💵 #1 Más Económica Solo Código (< US$45 en Amazon)",
    title:
      "TEEHO TE001 Keyless Entry Door Lock — Teclado Retroiluminado + Auto-Lock",
    subtitle:
      "La cerradura digital más accesible y simple de instalar en 15 minutos con destornillador Phillips. Ideal para puertas secundarias, habitaciones y primer hogar.",
    features: [
      "Hasta 20 códigos de acceso para familia + códigos de un solo uso para visitas o entregas",
      "Teclado físico con retroiluminación nocturna y código virtual anti-espía",
      "Autonomía de hasta 1 año con solo 4 pilas alcalinas AA (aviso de batería baja)",
    ],
    rating: "4.6",
    reviewsCount: "41.800+",
    categoryType: "keypad-lock",
    specs: {
      priceRange: "US$32 – US$44",
      doorCompat: "Backset 60/70 mm · Grosor 35–50 mm · Orificio 54 mm (2-1/8\")",
      accessMethods: "Código PIN físico + 2 llaves mecánicas de respaldo",
      guestCodes: "Sí: PIN de un solo uso offline (no permite fechas desde otra ciudad)",
      remoteControl: "Solo uso local sin internet ni celular (no admite puente Wi-Fi)",
    },
    queryUS: "TEEHO TE001 Keyless Entry Door Lock Electronic Keypad Deadbolt",
    queryES: "TEEHO TE001 cerradura teclado numerico codigo",
    ctaLabel: "Consultar TEEHO TE001 en Amazon",
  },

  TEEHO_TE002H_HANDLESET: {
    id: "teeho-te002h-handleset",
    badge: "🏠 Set Completo con Manillón para Puerta Principal de Casa",
    title:
      "TEEHO TE002H Front Door Lock Set — Cerrojo de Huella + Manillón Exterior Combinado",
    subtitle:
      "Kit completo para renovar la entrada principal de una casa unifamiliar: incluye el cerrojo biométrico TE002 arriba y la manija inferior a juego.",
    features: [
      "Distancia ajustable en el manillón inferior para reutilizar la perforación inferior sin taladrar de nuevo",
      "Lector biométrico de 0.3 s + códigos temporales de 1 uso + bloqueo con 1 toque",
      "Acabados Matte Black o Satin Nickel resistentes al clima IP54",
    ],
    rating: "4.6",
    reviewsCount: "8.900+",
    categoryType: "fingerprint-lock",
    specs: {
      priceRange: "US$79 – US$99",
      doorCompat: "2 orificios estándar 54 mm · Backset 60/70 mm · Grosor 35–50 mm",
      accessMethods: "Huella digital + Código PIN + 2 llaves + manija inferior",
      guestCodes: "Sí: códigos de 1 uso en teclado (sin gestión por internet)",
      remoteControl: "Solo local (sin app; para Wi-Fi ver eufy C220 o TEEHO con Gateway)",
    },
    queryUS: "TEEHO TE002H Front Door Lock Set Fingerprint Deadbolt Handle",
    queryES: "TEEHO juego cerradura puerta principal huella manija",
    ctaLabel: "Ver Kit TEEHO TE002H en Amazon",
  },

  TEEHO_SMART_GATEWAY: {
    id: "teeho-te004-te011-gateway",
    badge: "📶 TEEHO con App Bluetooth + Puente Wi-Fi G2 Opcional",
    title:
      "TEEHO Smart Door Lock (Bluetooth App) + Gateway Wi-Fi G2 para Control Remoto",
    subtitle:
      "Permite gestionar códigos temporales desde el celular estando cerca por Bluetooth, o desde cualquier país añadiendo el puente Wi-Fi G2 enchufado.",
    features: [
      "App para celular con historial de quién abrió la puerta y a qué hora",
      "Genera códigos por rango de fechas, permanentes, cíclicos o de un solo uso",
      "Requiere el Puente Gateway Wi-Fi G2 a 3–5 metros en red 2.4 GHz para uso a distancia",
    ],
    rating: "4.5",
    reviewsCount: "5.600+",
    categoryType: "wifi-lock",
    specs: {
      priceRange: "US$65 – US$95 (+US$25 Gateway G2)",
      doorCompat: "Backset 60/70 mm · Grosor 35–50 mm · Orificio 54 mm",
      accessMethods: "Huella digital + Código PIN + App Bluetooth/Wi-Fi + Llave",
      guestCodes: "Sí: por fechas y horas (con Gateway G2 para crearlos a distancia)",
      remoteControl: "Requiere accesorio: Puente Gateway Wi-Fi G2 enchufado cerca",
    },
    queryUS: "TEEHO Smart Lock App Bluetooth WiFi Gateway G2",
    queryES: "cerradura inteligente bluetooth gateway wifi G2",
    ctaLabel: "Ver TEEHO App + Gateway en Amazon",
  },

  EUFY_C220: {
    id: "eufy-c220-wifi",
    badge: "📱 #1 Mejor Wi-Fi Integrado sin Bridge (Huella + Celular + Airbnb)",
    title:
      "eufy Security Smart Lock C220 — Huella Biométrica + Teclado + Wi-Fi Integrado",
    subtitle:
      "La cerradura más recomendada para Airbnb, casas y departamentos que exigen control desde el celular desde otra ciudad sin comprar puentes ni pagar mensualidades.",
    features: [
      "Wi-Fi 2.4 GHz integrado de fábrica: abre a distancia y recibe alertas en vivo sin hub adicional",
      "Crea, edita y borra códigos temporales programados por fecha y hora exacta para huéspedes desde la app eufy Security",
      "Almacenamiento local de huellas con cifrado y hasta 8 meses de autonomía con 8 pilas AA + puerto USB-C",
    ],
    rating: "4.5",
    reviewsCount: "9.400+",
    categoryType: "wifi-lock",
    specs: {
      priceRange: "US$119 – US$149",
      doorCompat: "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm (o 38 mm)",
      accessMethods: "Huella 0.3s + Código PIN + App Celular Wi-Fi + Alexa/Google + Llave",
      guestCodes: "Sí (Avanzado): códigos con fecha/hora de inicio y expiración remota",
      remoteControl: "Wi-Fi integrado: NO requiere bridge ni accesorios extra",
    },
    queryUS: "eufy Security Smart Lock C220 Fingerprint Keyless Entry WiFi",
    queryES: "eufy Security Smart Lock C220 cerradura WiFi huella",
    ctaLabel: "Ver Precio de eufy C220 en Amazon",
  },

  EUFY_C210: {
    id: "eufy-c210-wifi",
    badge: "🏡 Mejor Wi-Fi Económica para Alquiler Temporal y Departamentos",
    title:
      "eufy Security Smart Lock C210 — Teclado Táctil + Wi-Fi Integrado sin Suscripción",
    subtitle:
      "Toda la potencia remota de eufy para gestionar códigos de huéspedes desde cualquier país sin huella biométrica, bajando el costo respecto a la C220.",
    features: [
      "Conexión Wi-Fi directa integrada (sin puente extra ni cuotas mensuales en la nube)",
      "Teclado táctil elegante con bloqueo automático por sensor o temporizador",
      "Ideal para anfitriones de Airbnb que prefieren dar acceso 100 % por PIN programado",
    ],
    rating: "4.4",
    reviewsCount: "6.800+",
    categoryType: "wifi-lock",
    specs: {
      priceRange: "US$89 – US$109",
      doorCompat: "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm",
      accessMethods: "Código PIN táctil + App Celular Wi-Fi + 2 Llaves físicas",
      guestCodes: "Sí: hasta 100 códigos con calendario por fecha y hora en la app",
      remoteControl: "Wi-Fi integrado: NO requiere accesorios ni puente",
    },
    queryUS: "eufy Security Smart Lock C210 Built-in WiFi Keyless Entry",
    queryES: "eufy Security Smart Lock C210 cerradura WiFi teclado",
    ctaLabel: "Ver Precio de eufy C210 en Amazon",
  },

  EUFY_E330_VIDEO: {
    id: "eufy-e330-video-lock",
    badge: "📹 3-en-1: Cerradura Huella + Cámara 2K HD + Timbre (Con Chime Wi-Fi)",
    title:
      "eufy Security Video Smart Lock E330 / S330 — Cámara 2K + Timbre + Huella + Batería 10,000 mAh",
    subtitle:
      "Sustituye mirilla, timbre y cerrojo: graba en 2K quien toca o abre tu puerta sin pagar almacenamiento mensual gracias a la microSD en su Chime interior.",
    features: [
      "Incluye el Chime Wi-Fi en la caja (actúa como timbre interior, puente remoto y ranura microSD)",
      "Batería recargable de 10,000 mAh extraíble (no gasta pilas desechables AA)",
      "Detección inteligente de personas y paquetes + audio bidireccional desde el celular",
    ],
    rating: "4.6",
    reviewsCount: "4.900+",
    categoryType: "video-lock",
    specs: {
      priceRange: "US$199 – US$279",
      doorCompat: "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm (revisar reja exterior)",
      accessMethods: "Huella dactilar + Código PIN + App con Video 2K + Llave",
      guestCodes: "Sí: códigos temporales con horario desde cualquier país",
      remoteControl: "Incluye Chime Wi-Fi en la caja (no requiere compras extra)",
    },
    queryUS: "eufy Security Video Smart Lock E330 S330 Camera Fingerprint",
    queryES: "eufy Video Smart Lock E330 cerradura con camara WiFi",
    ctaLabel: "Ver eufy Video Lock E330 en Amazon",
  },

  EUFY_C33_LEVER: {
    id: "eufy-c33-lever",
    badge: "🚪 Cerradura Biométrica con Manija Wi-Fi (Un Solo Orificio)",
    title:
      "eufy Security Smart Lever Lock C33 / C30 — Manija con Huella + Teclado + Wi-Fi Integrado",
    subtitle:
      "Pensada para puertas con un solo agujero (manija/pomo en lugar de cerrojo superior), oficinas, puertas de servicio o acceso entre garaje y casa.",
    features: [
      "Reemplaza cualquier manija tubular estándar de un solo orificio en 15 minutos",
      "Sensor de huella ergonómico integrado justo en el pulgar al girar la manija",
      "Wi-Fi integrado para apertura remota, auto-lock y códigos de invitados",
    ],
    rating: "4.5",
    reviewsCount: "3.100+",
    categoryType: "wifi-lock",
    specs: {
      priceRange: "US$119 – US$159",
      doorCompat: "1 solo orificio 54 mm · Backset 60/70 mm · Grosor 35–55 mm",
      accessMethods: "Huella en manija + Código PIN + App Wi-Fi + Llave",
      guestCodes: "Sí: programación por fechas/horas en la app eufy",
      remoteControl: "Wi-Fi integrado sin puente adicional",
    },
    queryUS: "eufy Security Smart Lever Lock C33 Fingerprint WiFi",
    queryES: "eufy cerradura manija inteligente WiFi huella",
    ctaLabel: "Ver eufy C33 Manija en Amazon",
  },

  SCHLAGE_ENCODE: {
    id: "schlage-encode-airbnb",
    badge: "🏨 Integración Automática Oficial con Airbnb (BHMA Grado 1)",
    title:
      "Schlage Encode Smart Wi-Fi Deadbolt — Sincronización Nativa Airbnb + Grado 1",
    subtitle:
      "El estándar de oro en EE. UU. para anfitriones profesionales de alquiler temporal: genera automáticamente un código único vinculado a cada reserva de Airbnb.",
    features: [
      "Certificación ANSI/BHMA Grado 1 (máxima resistencia física comercial y residencial)",
      "Integración oficial con Airbnb y Guesty: el huésped recibe los últimos 4 dígitos de su teléfono",
      "Wi-Fi integrado directo con alarma de manipulación integrada en el teclado",
    ],
    rating: "4.7",
    reviewsCount: "16.200+",
    categoryType: "wifi-lock",
    specs: {
      priceRange: "US$249 – US$319",
      doorCompat: "Backset 60/70 mm · Grosor 35–45 mm (1-3/8\" a 1-3/4\") · Orificio 54 mm",
      accessMethods: "Código PIN + App Schlage Home / Airbnb + Llave física",
      guestCodes: "Sí (Automático): códigos creados y eliminados según check-in/check-out",
      remoteControl: "Wi-Fi integrado directo (no requiere puente ni hub)",
    },
    queryUS: "Schlage Encode Smart WiFi Deadbolt Keyless Entry",
    queryES: "Schlage Encode cerradura WiFi inteligente",
    ctaLabel: "Ver Schlage Encode en Amazon",
  },

  SWITCHBOT_LOCK_PRO: {
    id: "switchbot-lock-pro-retrofit",
    badge: "🏢 Mejor para Departamentos Alquilados y Cerraduras Multipunto",
    title:
      "SwitchBot Lock Pro + Hub Mini (Retrofit Interior Sin Cambiar Tu Llave Exterior)",
    subtitle:
      "La salvación si tu edificio no permite modificar la fachada o si tienes cilindro europeo/multipunto: se instala solo por dentro girando tu propia llave o mariposa.",
    features: [
      "Cero perforaciones y 100 % reversible al mudarte de departamento alquilado",
      "Compatible con cilindros europeos, perfil suizo, multipunto y cerrojos americanos",
      "Con el Hub Mini/Matter añade apertura desde el celular y teclado numérico/huella exterior adhesivo",
    ],
    rating: "4.4",
    reviewsCount: "7.500+",
    categoryType: "retrofit-lock",
    specs: {
      priceRange: "US$119 – US$179 (Combo Hub + Teclado)",
      doorCompat: "Universal por dentro: sobre cilindro existente sin cambiar frente exterior",
      accessMethods: "App Bluetooth/Wi-Fi + Tu llave actual (+ Huella/PIN con Keypad Touch)",
      guestCodes: "Sí: usando el SwitchBot Keypad Touch + Hub Mini Wi-Fi",
      remoteControl: "Requiere accesorio: SwitchBot Hub Mini o Hub 2 enchufado cerca",
    },
    queryUS: "SwitchBot Lock Pro Smart Door Lock Retrofit Matter Hub",
    queryES: "SwitchBot Lock Pro cerradura inteligente invisible sin cambiar bombin",
    ctaLabel: "Ver SwitchBot Lock Pro en Amazon",
  },

  AQARA_U100_HOMEKEY: {
    id: "aqara-u100-homekey",
    badge: "🍎 Mejor Apple HomeKey + Zigbee/Matter (iPhone & Apple Watch)",
    title:
      "Aqara Smart Lock U100 — Apple HomeKey + Huella + Teclado + Puerto USB-C",
    subtitle:
      "Toca la cerradura con tu iPhone o Apple Watch para abrir al instante gracias a Apple HomeKey, incluso si la batería del teléfono está agotada.",
    features: [
      "Compatible con Apple HomeKit, HomeKey, Alexa y Google Home",
      "Puerto USB-C de emergencia oculto en el panel frontal y cuerpo metálico IP65",
      "Funciona local por Bluetooth/HomeKey; requiere Hub Aqara M2/M3 para Wi-Fi remoto",
    ],
    rating: "4.5",
    reviewsCount: "3.400+",
    categoryType: "fingerprint-lock",
    specs: {
      priceRange: "US$159 – US$189 (+Hub M2/M3 para remoto)",
      doorCompat: "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm",
      accessMethods: "Apple HomeKey (NFC) + Huella + Código PIN + App + Llave",
      guestCodes: "Sí: códigos offline temporales y gestión remota vía Hub Aqara",
      remoteControl: "Requiere Hub Aqara M2/M3 (o Apple TV/HomePod como central)",
    },
    queryUS: "Aqara Smart Lock U100 Apple Home Key Fingerprint",
    queryES: "Aqara Smart Lock U100 cerradura inteligente Apple HomeKit",
    ctaLabel: "Ver Aqara U100 en Amazon",
  },

  GATEWAY_WIFI_G2: {
    id: "gateway-wifi-g2-bridge",
    badge: "📡 Accesorio Remoto para Cerraduras Bluetooth (TTLock / Tuya / eufy)",
    title:
      "Puente Gateway Wi-Fi G2 / eufy Wi-Fi Bridge — Habilita Códigos y Apertura a Distancia",
    subtitle:
      "Convierte cualquier cerradura Bluetooth compatible (TTLock, Tuya o modelos sin Wi-Fi integrado) en controlable desde otra ciudad o país por internet.",
    features: [
      "Se conecta a un tomacorriente dentro de casa a 3–5 metros de la puerta en red Wi-Fi 2.4 GHz",
      "Permite crear, modificar y eliminar códigos de huéspedes Airbnb en tiempo real",
      "Envía notificaciones push instantáneas de cada entrada al celular",
    ],
    rating: "4.5",
    reviewsCount: "11.300+",
    categoryType: "accessory-bridge",
    specs: {
      priceRange: "US$22 – US$39",
      doorCompat: "No va en la puerta: se enchufa a la corriente a ≤ 5 metros",
      accessMethods: "Habilita apertura remota por App, Alexa y Google Assistant",
      guestCodes: "Habilita gestión remota en vivo de códigos temporales y registros",
      remoteControl: "Es el puente/bridge requerido por cerraduras Bluetooth sin Wi-Fi",
    },
    queryUS: "Smart Lock WiFi Gateway G2 Bridge Remote Control TTLock",
    queryES: "Gateway WiFi G2 puente cerradura inteligente bluetooth",
    ctaLabel: "Ver Puentes Wi-Fi Compatibles en Amazon",
  },

  LITHIUM_AA_AND_LOCKBOX: {
    id: "energizer-lithium-aa-lockbox",
    badge: "🔋 Imprescindible: Pilas Litio AA 1.5V + Caja Guardallaves de Respaldo",
    title:
      "Energizer Ultimate Lithium AA (Pack 8) + Caja de Llaves Segura para Emergencias",
    subtitle:
      "Evita fugas corrosivas en la placa electrónica, duplicando la autonomía en cerraduras Wi-Fi y asegurando un plan B físico para huéspedes de Airbnb.",
    features: [
      "Voltaje estable 1.5V (sin falsas alertas de batería baja que dan las NiMH 1.2V)",
      "Funcionan desde -40 °C hasta +60 °C en puertas exteriores expuestas al sol o frío",
      "Caja de llaves metálica con combinación para guardar una copia física oculta de respaldo",
    ],
    rating: "4.8",
    reviewsCount: "64.000+",
    categoryType: "accessory-bridge",
    specs: {
      priceRange: "US$18 – US$34",
      doorCompat: "Compatible con el 100 % de cerraduras TEEHO, eufy C210/C220 y Schlage",
      accessMethods: "Alimentación estable 4 u 8 pilas AA + respaldo físico de llave",
      guestCodes: "La caja de llaves ofrece código de respaldo si el huésped agota pilas",
      remoteControl: "Indispensable para mantener cerraduras Wi-Fi activas 6–12 meses",
    },
    queryUS:
      "Energizer Ultimate Lithium AA Batteries 8 Pack Master Lock Key Lockbox",
    queryES:
      "Energizer Ultimate Lithium AA pilas litio caja guardallaves combinacion",
    ctaLabel: "Ver Pilas Litio + Lockbox en Amazon",
  },

  DOOR_INSTALL_KIT: {
    id: "dewalt-door-lock-kit",
    badge: "📏 Kit de Instalación y Perforación Exacta (2-1/8\" y 1\" + Backset 60/70 mm)",
    title:
      "DEWALT Door Lock Installation Kit (D180004) — Guía + Sierras Copa Bi-Metal",
    subtitle:
      "Si tu puerta de madera o metal es nueva o solo tiene cerradura antigua de tamaño distinto, esta plantilla garantiza agujeros milimétricos para TEEHO y eufy.",
    features: [
      "Plantilla autoalineante con ajuste exacto de backset a 60 mm (2-3/8\") y 70 mm (2-3/4\")",
      "Incluye sierra copa de 54 mm (2-1/8\") para el cuerpo y 25 mm (1\") para el pestillo del canto",
      "Compatible con puertas de madera maciza, huecas o metálicas estándar",
    ],
    rating: "4.7",
    reviewsCount: "9.800+",
    categoryType: "accessory-bridge",
    specs: {
      priceRange: "US$24 – US$36",
      doorCompat: "Prepara puertas de 35–45 mm para el estándar americano (54 mm + 25 mm)",
      accessMethods: "Herramienta de adaptación previa antes de instalar tu cerradura",
      guestCodes: "Permite instalar cualquier cerradura digital con códigos o huella",
      remoteControl: "Asegura alineación sin fricción para que el motor Wi-Fi no trabe",
    },
    queryUS: "DEWALT Door Lock Installation Kit D180004 Hole Saw",
    queryES: "kit instalacion cerradura puerta sierra corona 54mm 25mm",
    ctaLabel: "Ver Kit de Perforación en Amazon",
  },

  ULTRALOQ_UBOLT_WIFI: {
    id: "ultraloq-ubolt-pro-wifi",
    badge: "🔐 Ultraloq U-Bolt Pro Wi-Fi (6 Formas de Acceso + IP65)",
    title:
      "ULTRALOQ U-Bolt Pro WiFi — Huella + Código + Auto-Unlock + Sensor Puerta Abierta",
    subtitle:
      "Incluye sensor magnético para verificar desde el celular no solo si el cerrojo echó llave, sino si la puerta quedó físicamente cerrada o abierta.",
    features: [
      "6 modos de apertura: huella 360°, código anti-espía, celular, auto-desbloqueo GPS, Shake-to-Open y llave",
      "Sensor de puerta incluida en el paquete + Wi-Fi integrado sin puente",
      "Resistencia climática IP65 superior para puertas exteriores descubiertas",
    ],
    rating: "4.4",
    reviewsCount: "11.200+",
    categoryType: "wifi-lock",
    specs: {
      priceRange: "US$149 – US$179",
      doorCompat: "Backset 60/70 mm · Grosor 35–45 mm (hasta 50 mm) · Orificio 54 mm",
      accessMethods: "Huella + Código PIN + Wi-Fi/GPS Auto-Unlock + Alexa + Llave",
      guestCodes: "Sí: códigos programados por horas/días desde el celular",
      remoteControl: "Wi-Fi integrado sin bridge externo",
    },
    queryUS: "ULTRALOQ U-Bolt Pro WiFi Smart Lock Fingerprint Deadbolt",
    queryES: "ULTRALOQ U-Bolt Pro WiFi cerradura inteligente huella",
    ctaLabel: "Ver Ultraloq U-Bolt Pro en Amazon",
  },
};

export function getContextualAmazonProducts(
  slug: string,
  pillar: string,
  title: string
): {
  sectionTitle: string;
  sectionSubtitle: string;
  products: [
    AmazonProductRecommendation,
    AmazonProductRecommendation,
    AmazonProductRecommendation,
  ];
  vsCompetitor?: AmazonProductRecommendation;
} {
  const text = `${slug} ${pillar} ${title}`.toLowerCase();

  // 1. Comparativas directas VS o duelos TEEHO vs eufy
  if (
    pillar === "comparativas-cerraduras-digitales" ||
    text.includes("-vs-")
  ) {
    if (text.includes("te001") && text.includes("te002")) {
      return {
        sectionTitle: "Comparativa TEEHO TE001 vs TEEHO TE002 en Amazon EE. UU.",
        sectionSubtitle:
          "Solo código PIN económico vs lector biométrico de huella 0.3s + teclado + pilas recomendadas:",
        products: [
          CATALOG.TEEHO_TE002,
          CATALOG.TEEHO_TE001,
          CATALOG.LITHIUM_AA_AND_LOCKBOX,
        ],
        vsCompetitor: CATALOG.TEEHO_TE001,
      };
    }
    if (text.includes("c210") && text.includes("c220")) {
      return {
        sectionTitle: "Comparativa eufy C210 vs eufy C220 (Wi-Fi Integrado)",
        sectionSubtitle:
          "Ambos incluyen Wi-Fi sin puente; compara teclado puro frente a huella biométrica + teclado:",
        products: [
          CATALOG.EUFY_C220,
          CATALOG.EUFY_C210,
          CATALOG.LITHIUM_AA_AND_LOCKBOX,
        ],
        vsCompetitor: CATALOG.EUFY_C210,
      };
    }
    if (text.includes("e330") || text.includes("s330") || text.includes("video")) {
      return {
        sectionTitle: "Comparativa Videocerradura eufy E330 vs eufy C220",
        sectionSubtitle:
          "Cámara 2K con Chime Wi-Fi incluido frente a cerradura biométrica compacta:",
        products: [
          CATALOG.EUFY_E330_VIDEO,
          CATALOG.EUFY_C220,
          CATALOG.LITHIUM_AA_AND_LOCKBOX,
        ],
        vsCompetitor: CATALOG.EUFY_C220,
      };
    }
    if (text.includes("schlage")) {
      return {
        sectionTitle: "Comparativa Schlage Encode vs eufy C220 para Airbnb y Casa",
        sectionSubtitle:
          "Sincronización oficial Airbnb Grado 1 frente a huella + Wi-Fi sin suscripción:",
        products: [
          CATALOG.SCHLAGE_ENCODE,
          CATALOG.EUFY_C220,
          CATALOG.LITHIUM_AA_AND_LOCKBOX,
        ],
        vsCompetitor: CATALOG.EUFY_C220,
      };
    }
    if (text.includes("switchbot") || text.includes("retrofit") || text.includes("august")) {
      return {
        sectionTitle: "Comparativa Cerradura Retrofit vs Cerrojo Completo",
        sectionSubtitle:
          "Sin cambiar la llave exterior en departamento alquilado vs reemplazo completo:",
        products: [
          CATALOG.SWITCHBOT_LOCK_PRO,
          CATALOG.EUFY_C220,
          CATALOG.GATEWAY_WIFI_G2,
        ],
        vsCompetitor: CATALOG.EUFY_C220,
      };
    }
    return {
      sectionTitle: "Duelo TEEHO vs eufy Security en Amazon EE. UU.",
      sectionSubtitle:
        "Compara la mejor cerradura local calidad-precio (TEEHO) frente a Wi-Fi integrado sin bridge (eufy):",
      products: [
        CATALOG.EUFY_C220,
        CATALOG.TEEHO_TE002,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ],
      vsCompetitor: CATALOG.TEEHO_TE002,
    };
  }

  // 2. Airbnb, alquiler temporal y gestión de códigos para huéspedes
  if (
    pillar === "cerraduras-para-airbnb-y-alquiler-temporal" ||
    pillar === "codigos-temporales-y-gestion-de-huespedes" ||
    text.includes("airbnb") ||
    text.includes("huesped") ||
    text.includes("alquiler")
  ) {
    return {
      sectionTitle:
        "Mejores Cerraduras con Códigos Temporales para Airbnb y Huéspedes",
      sectionSubtitle:
        "Genera códigos por fechas desde tu celular sin entregar llaves + caja guardallaves física de respaldo:",
      products: [
        CATALOG.EUFY_C220,
        CATALOG.SCHLAGE_ENCODE,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ],
    };
  }

  // 3. Medición de puerta, instalación y compatibilidad física
  if (
    pillar === "como-medir-tu-puerta-y-compatibilidad" ||
    pillar === "instalacion-paso-a-paso-y-ajustes-de-puerta" ||
    text.includes("medir") ||
    text.includes("backset") ||
    text.includes("grosor") ||
    text.includes("orificio") ||
    text.includes("instala")
  ) {
    return {
      sectionTitle:
        "Cerraduras con Pestillo Ajustable (60/70 mm) + Kit de Perforación",
      sectionSubtitle:
        "Compatibles con puertas estándar de 35–54 mm y orificio de 54 mm (2-1/8\") en Amazon:",
      products: [
        CATALOG.TEEHO_TE002,
        CATALOG.EUFY_C220,
        CATALOG.DOOR_INSTALL_KIT,
      ],
    };
  }

  // 4. Control desde el celular, Wi-Fi y puentes (Bridges)
  if (
    pillar === "control-desde-el-celular-wifi-y-puentes" ||
    pillar === "puentes-wifi-baterias-y-accesorios" ||
    text.includes("wifi") ||
    text.includes("bridge") ||
    text.includes("puente") ||
    text.includes("gateway") ||
    text.includes("celular")
  ) {
    return {
      sectionTitle:
        "Cerraduras con Wi-Fi Integrado vs Puentes Remotos en Amazon EE. UU.",
      sectionSubtitle:
        "Elige Wi-Fi directo sin accesorios (eufy C220 / C210) o añade un puente Gateway G2:",
      products: [
        CATALOG.EUFY_C220,
        CATALOG.GATEWAY_WIFI_G2,
        CATALOG.TEEHO_SMART_GATEWAY,
      ],
    };
  }

  // 5. Baterías, pilas AA, emergencias USB-C
  if (
    pillar === "baterias-autonomia-y-emergencias-sin-energia" ||
    text.includes("bateria") ||
    text.includes("pila") ||
    text.includes("usb-c") ||
    text.includes("emergencia")
  ) {
    return {
      sectionTitle:
        "Pilas de Litio Recomendadas y Cerraduras con Puerto USB-C de Emergencia",
      sectionSubtitle:
        "Mantén hasta 12 meses de autonomía estable sin fugas y respaldo energético externo:",
      products: [
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
        CATALOG.EUFY_C220,
        CATALOG.AQARA_U100_HOMEKEY,
      ],
    };
  }

  // 6. Casas, departamentos alquilados, manijas y handlesets
  if (
    pillar === "cerraduras-para-casas-y-departamentos" ||
    text.includes("handleset") ||
    text.includes("manillon") ||
    text.includes("te002h") ||
    text.includes("alquilado") ||
    text.includes("edificio")
  ) {
    if (text.includes("alquilado") || text.includes("edificio") || text.includes("multipunto")) {
      return {
        sectionTitle:
          "Soluciones Sin Modificar Fachada para Departamentos y Edificios",
        sectionSubtitle:
          "Cerraduras retrofit por dentro o con manija compacta compatibles con reglas de condominio:",
        products: [
          CATALOG.SWITCHBOT_LOCK_PRO,
          CATALOG.EUFY_C33_LEVER,
          CATALOG.GATEWAY_WIFI_G2,
        ],
      };
    }
    return {
      sectionTitle:
        "Sets Completos para Puerta Principal de Casa y Departamento",
      sectionSubtitle:
        "Juegos con manillón inferior, cámara 2K integrada o cerrojo biométrico compacto:",
      products: [
        CATALOG.TEEHO_TE002H_HANDLESET,
        CATALOG.EUFY_E330_VIDEO,
        CATALOG.EUFY_C220,
      ],
    };
  }

  // 7. Modelos específicos mencionados en el slug/título
  if (text.includes("te001") || text.includes("economica") || text.includes("barata") || text.includes("45")) {
    return {
      sectionTitle: "Cerraduras Económicas de Alta Valoración en Amazon EE. UU.",
      sectionSubtitle:
        "Máxima fiabilidad por debajo de US$60 sin cuotas mensuales:",
      products: [
        CATALOG.TEEHO_TE001,
        CATALOG.TEEHO_TE002,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ],
    };
  }
  if (text.includes("eufy") && (text.includes("e330") || text.includes("s330") || text.includes("camara"))) {
    return {
      sectionTitle: "Videocerraduras eufy 3-en-1 y Alternativas Wi-Fi sin Suscripción",
      sectionSubtitle:
        "Cámara 2K gran angular + timbre + huella dactilar con Chime incluido:",
      products: [
        CATALOG.EUFY_E330_VIDEO,
        CATALOG.EUFY_C220,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ],
    };
  }
  if (text.includes("teeho") || text.includes("te002")) {
    return {
      sectionTitle: "Modelos TEEHO Más Vendidos y Accesorios Compatibles en Amazon",
      sectionSubtitle:
        "Huella en 0.3s, código temporal de 1 uso y compatibilidad estándar 60/70 mm:",
      products: [
        CATALOG.TEEHO_TE002,
        CATALOG.TEEHO_TE002H_HANDLESET,
        CATALOG.LITHIUM_AA_AND_LOCKBOX,
      ],
    };
  }
  if (text.includes("eufy")) {
    return {
      sectionTitle: "Cerraduras eufy Security con Wi-Fi Integrado en Amazon EE. UU.",
      sectionSubtitle:
        "Control remoto desde el celular sin puente externo y cero mensualidades:",
      products: [
        CATALOG.EUFY_C220,
        CATALOG.EUFY_C210,
        CATALOG.EUFY_E330_VIDEO,
      ],
    };
  }

  // Default general: Top 3 Venta Cruzada (TEEHO Calidad-Precio + eufy Wi-Fi + Pilas/Lockbox)
  return {
    sectionTitle:
      "Cerraduras Digitales Más Recomendadas en Amazon EE. UU. (TEEHO y eufy)",
    sectionSubtitle:
      "Compara la mejor económica con huella (TEEHO TE002), la mejor con Wi-Fi directo (eufy C220) y el pack de pilas de litio + respaldo:",
    products: [
      CATALOG.TEEHO_TE002,
      CATALOG.EUFY_C220,
      CATALOG.LITHIUM_AA_AND_LOCKBOX,
    ],
  };
}
