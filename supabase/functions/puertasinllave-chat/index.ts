import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-sync-key",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY") || "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_SERVICE_ROLE_KEY =
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const SITE = "https://puertasinllave.com";
const ALLOWED_MODELS = ["gpt-4o-mini", "gpt-4o"];
const AMAZON_TAG_US = "puertasinllave-20";
const AMAZON_TAG_ES = "puertasinllave-21";

export interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  category_name: string;
  excerpt: string | null;
  featured_image: string | null;
  read_time: string | null;
  search_text: string | null;
}

export interface ArticleCard {
  slug: string;
  title: string;
  category: string;
  categoryName: string;
  url: string;
  image: string;
  readTime: string;
  excerpt: string;
}

export interface AmazonProductCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  rating: string;
  reviewsCount: string;
  urlUS: string;
  urlES: string;
}

const AMAZON_PRODUCTS: Record<string, AmazonProductCard> = {
  "teeho-te002-huella": {
    id: "teeho-te002-huella",
    badge: "🏆 #1 Más Vendida Calidad-Precio (Huella + Código PIN)",
    title:
      "TEEHO TE002 Fingerprint Door Lock — Huella 0.3s + 20 Códigos + PIN Temporal de 1 Uso (IP54)",
    subtitle:
      "Cerrojo tubular estándar (backset 60/70 mm, grosor 35–50 mm, orificio 54 mm). Crea códigos de 1 uso sin internet; solo apertura local sin app remota.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("TEEHO TE002 Fingerprint Door Lock Keypad Deadbolt")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("TEEHO TE002 cerradura inteligente huella digital teclado")}&tag=${AMAZON_TAG_ES}`,
  },
  "teeho-te001-keypad": {
    id: "teeho-te001-keypad",
    badge: "💵 Mejor Económica Solo Código",
    title:
      "TEEHO TE001 Keyless Entry Door Lock — Teclado Numérico Anti-Espía + Auto-Lock + 2 Llaves",
    subtitle:
      "Ideal para presupuesto ajustado, habitaciones o primera puerta. Backset 60/70 mm, grosor 35–50 mm, PIN temporal de un solo uso y 4 pilas AA.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("TEEHO TE001 Keyless Entry Door Lock Electronic Keypad Deadbolt")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("TEEHO TE001 cerradura teclado numerico codigo")}&tag=${AMAZON_TAG_ES}`,
  },
  "teeho-te002h-handleset": {
    id: "teeho-te002h-handleset",
    badge: "🏠 Juego Completo con Manillón para Puerta Principal de Casa",
    title:
      "TEEHO TE002H Front Door Lock Set — Cerrojo Biométrico de Huella + Manillón Inferior Combinado",
    subtitle:
      "Transforma la entrada de tu casa en una sola compra: incluye manija inferior, cerrojo biométrico TE002, backset 60/70 mm y puerto USB-C/emergencia.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("TEEHO TE002H Front Door Lock Set Fingerprint Deadbolt Handle")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("TEEHO juego cerradura puerta principal huella manija")}&tag=${AMAZON_TAG_ES}`,
  },
  "teeho-te004-te011-gateway": {
    id: "teeho-te004-te011-gateway",
    badge: "📶 TEEHO con App Bluetooth + Opción de Puente Wi-Fi G2",
    title:
      "TEEHO Smart Door Lock (App Bluetooth / Tuya) + Gateway Wi-Fi G2 Opcional para Control Remoto",
    subtitle:
      "Desbloqueo por huella, código y celular; añadiendo el puente Wi-Fi G2 en un enchufe cercano generas códigos por fechas para huéspedes a distancia.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("TEEHO Smart Lock App Bluetooth WiFi Gateway G2")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("cerradura inteligente bluetooth tuya gateway wifi G2")}&tag=${AMAZON_TAG_ES}`,
  },
  "eufy-c220-wifi": {
    id: "eufy-c220-wifi",
    badge: "📱 #1 Mejor Wi-Fi Integrado sin Bridge (Huella + App + Airbnb)",
    title:
      "eufy Security Smart Lock C220 — Huella Biométrica + Teclado + Wi-Fi Integrado (Sin Suscripción)",
    subtitle:
      "Control total desde el celular en otra ciudad sin comprar puente extra: crea y borra códigos temporales por fechas/horas para Airbnb, backset 60/70 mm, 8 AA (8 meses).",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("eufy Security Smart Lock C220 Fingerprint Keyless Entry WiFi")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("eufy Security Smart Lock C220 cerradura WiFi huella")}&tag=${AMAZON_TAG_ES}`,
  },
  "eufy-c210-wifi": {
    id: "eufy-c210-wifi",
    badge: "🏡 Mejor Wi-Fi Económica para Alquiler Temporal y Departamentos",
    title:
      "eufy Security Smart Lock C210 — Teclado Táctil + Wi-Fi Directo + Códigos Temporales en App",
    subtitle:
      "La forma más accesible de tener control remoto real y gestión de códigos para huéspedes sin puente Wi-Fi externo ni cuotas mensuales.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("eufy Security Smart Lock C210 Built-in WiFi Keyless Entry")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("eufy Security Smart Lock C210 cerradura WiFi teclado")}&tag=${AMAZON_TAG_ES}`,
  },
  "eufy-e330-video-lock": {
    id: "eufy-e330-video-lock",
    badge: "📹 3-en-1: Cerradura Huella + Cámara 2K HD + Timbre (Con Chime Wi-Fi)",
    title:
      "eufy Security Video Smart Lock E330 / S330 — Cámara 2K Gran Angular + Huella + Batería 10,000 mAh",
    subtitle:
      "Incluye el Chime Wi-Fi interior en la caja para control remoto sin compras extra y visión nocturna para ver quién llega a tu casa o Airbnb.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("eufy Security Video Smart Lock E330 S330 Camera Fingerprint")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("eufy Video Smart Lock E330 cerradura con camara WiFi")}&tag=${AMAZON_TAG_ES}`,
  },
  "schlage-encode-airbnb": {
    id: "schlage-encode-airbnb",
    badge: "🏨 Integración Nativa Oficial con Airbnb (BHMA Grado 1)",
    title:
      "Schlage Encode Smart Wi-Fi Deadbolt — Códigos Automáticos por Reserva Airbnb + Wi-Fi Integrado",
    subtitle:
      "Máxima resistencia ANSI/BHMA Grado 1 y sincronización automática con el calendario de reservas de Airbnb sin puentes externos.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Schlage Encode Smart WiFi Deadbolt Keyless Entry")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Schlage Encode cerradura WiFi inteligente")}&tag=${AMAZON_TAG_ES}`,
  },
  "switchbot-lock-pro-retrofit": {
    id: "switchbot-lock-pro-retrofit",
    badge: "🏢 Mejor para Departamentos Alquilados y Cerraduras Multipunto/Europeas",
    title:
      "SwitchBot Lock Pro / August Wi-Fi Smart Lock — Instalación Interior Sin Cambiar tu Llave Actual",
    subtitle:
      "Se acopla por dentro sobre tu cilindro existente sin alterar la fachada del edificio; agrega Hub Mini para códigos y apertura desde el celular.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("SwitchBot Lock Pro Smart Door Lock Retrofit Matter Hub")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("SwitchBot Lock Pro cerradura inteligente invisible sin cambiar bombin")}&tag=${AMAZON_TAG_ES}`,
  },
  "aqara-u100-homekey": {
    id: "aqara-u100-homekey",
    badge: "🍎 Mejor Apple HomeKey + Zigbee / Matter (Requiere Hub M2/M3 Remoto)",
    title:
      "Aqara Smart Lock U100 — Apple HomeKey + Huella + Teclado + Puerto USB-C de Emergencia",
    subtitle:
      "Abre acercando tu iPhone o Apple Watch. Funciona por Bluetooth/HomeKey localmente o con Aqara Hub M2/M3 para códigos y control a distancia.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Aqara Smart Lock U100 Apple Home Key Fingerprint")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Aqara Smart Lock U100 cerradura inteligente Apple HomeKit")}&tag=${AMAZON_TAG_ES}`,
  },
  "gateway-wifi-g2-bridge": {
    id: "gateway-wifi-g2-bridge",
    badge: "📡 Accesorio Esencial para Control Remoto en Cerraduras Bluetooth",
    title:
      "Puente Gateway Wi-Fi G2 / eufy Wi-Fi Bridge / Aqara Hub M3 — Conexión a Distancia en Tiempo Real",
    subtitle:
      "Se enchufa a 3–5 metros de la puerta en red 2.4 GHz para abrir remotamente, recibir alertas al instante y generar códigos temporales desde cualquier país.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Smart Lock WiFi Gateway G2 Bridge Remote Control")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Gateway WiFi G2 puente cerradura inteligente bluetooth")}&tag=${AMAZON_TAG_ES}`,
  },
  "energizer-lithium-aa-lockbox": {
    id: "energizer-lithium-aa-lockbox",
    badge: "🔋 Pack Recomendado: Pilas Litio AA (1.5V) + Caja Guardallaves de Respaldo",
    title:
      "Energizer Ultimate Lithium AA (Pack 8) + Caja de Llaves con Combinación para Emergencias y Airbnb",
    subtitle:
      "Evita fugas de ácido y falsas alarmas de batería baja en invierno o cerraduras Wi-Fi; respalda tus llaves físicas en alquileres temporales.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Energizer Ultimate Lithium AA Batteries 8 Pack Master Lock Key Lockbox")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Energizer Ultimate Lithium AA pilas litio caja guardallaves")}&tag=${AMAZON_TAG_ES}`,
  },
  "dewalt-door-lock-kit": {
    id: "dewalt-door-lock-kit",
    badge: "📏 Kit de Instalación y Perforación Exacta (2-1/8\" y 1\" + Backset 60/70 mm)",
    title:
      "DEWALT Door Lock Installation Kit (D180004) — Guía Autoalineante + Sierras Copa Bi-Metal para Madera/Metal",
    subtitle:
      "Indispensable si tu puerta aún no tiene los orificios estándar americanos de 54 mm (2-1/8\") y canto de 25 mm (1\") para instalar TEEHO o eufy.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("DEWALT Door Lock Installation Kit D180004 Hole Saw")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("kit instalacion cerradura puerta sierra corona 54mm 25mm")}&tag=${AMAZON_TAG_ES}`,
  },
};

function calculateCostUsd(
  model: string,
  promptTokens: number,
  completionTokens: number
): number {
  if (model.includes("mini")) {
    return Number(
      (promptTokens * 0.00000015 + completionTokens * 0.0000006).toFixed(6)
    );
  }
  return Number(
    (promptTokens * 0.0000025 + completionTokens * 0.00001).toFixed(6)
  );
}

const norm = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const STOPWORDS = new Set([
  "como",
  "cual",
  "cuales",
  "que",
  "quien",
  "donde",
  "cuando",
  "por",
  "para",
  "con",
  "sin",
  "una",
  "uno",
  "los",
  "las",
  "del",
  "al",
  "hola",
  "quiero",
  "puedo",
  "recomienda",
  "mejor",
  "mejores",
  "sobre",
  "mas",
  "muy",
  "tiene",
  "tengo",
  "cerradura",
  "cerraduras",
  "digital",
  "digitales",
  "puerta",
  "puertas",
]);

function extractTokens(text: string): string[] {
  return norm(text)
    .split(" ")
    .filter((w) => w.length >= 2 && !STOPWORDS.has(w));
}

let catalogCache: {
  at: number;
  rows: ArticleRow[];
  bySlug: Map<string, ArticleRow>;
} | null = null;

async function loadCatalog(): Promise<{
  rows: ArticleRow[];
  bySlug: Map<string, ArticleRow>;
}> {
  if (
    catalogCache &&
    Date.now() - catalogCache.at < 10 * 60 * 1000 &&
    catalogCache.rows.length > 0
  ) {
    return catalogCache;
  }
  const [batch1, batch2] = await Promise.all([
    supabase
      .from("puertasinllave_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(0, 999),
    supabase
      .from("puertasinllave_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(1000, 1999),
  ]);

  const rows: ArticleRow[] = [];
  const bySlug = new Map<string, ArticleRow>();
  for (const data of [batch1.data, batch2.data]) {
    if (Array.isArray(data)) {
      for (const r of data as ArticleRow[]) {
        if (!bySlug.has(r.slug)) {
          bySlug.set(r.slug, r);
          rows.push(r);
        }
      }
    }
  }
  catalogCache = { at: Date.now(), rows, bySlug };
  return catalogCache;
}

function toArticleCard(r: ArticleRow): ArticleCard {
  const img = r.featured_image || "/img/ambiente/home-hero-cerradura.webp";
  const url =
    r.slug === r.category
      ? `${SITE}/${r.category}/`
      : `${SITE}/${r.category}/${r.slug}/`;
  return {
    slug: r.slug,
    title: r.title,
    category: r.category,
    categoryName: r.category_name,
    url,
    image: img.startsWith("http") ? img : `${SITE}${img}`,
    readTime: r.read_time || "7 min",
    excerpt: (r.excerpt || "").slice(0, 145),
  };
}

function searchArticles(
  rows: ArticleRow[],
  userMessage: string,
  historyText: string,
  limit = 14
): ArticleRow[] {
  const primaryTokens = extractTokens(userMessage);
  const contextTokens = extractTokens(historyText).filter(
    (t) => !primaryTokens.includes(t)
  );
  const fullPhrase = norm(userMessage);

  const starterSlugs = [
    "teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad",
    "eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas",
    "teeho-vs-eufy-cual-cerradura-digital-elegir-casa-departamento-airbnb",
    "como-medir-backset-grosor-y-orificio-de-puerta-antes-de-comprar-cerradura-digital",
    "mejores-cerraduras-digitales-para-airbnb-y-alquiler-temporal-amazon",
    "cerraduras-con-wifi-integrado-vs-puente-wifi-bridge-que-accesorios-necesitas",
  ];

  if (primaryTokens.length === 0 && contextTokens.length === 0) {
    const picked: ArticleRow[] = [];
    for (const s of starterSlugs) {
      const f = rows.find((r) => r.slug === s);
      if (f) picked.push(f);
    }
    return picked.length > 0 ? picked : rows.slice(0, 8);
  }

  const scored: Array<{ r: ArticleRow; score: number }> = [];
  for (const r of rows) {
    const titleNorm = norm(r.title);
    const catNorm = norm(`${r.category_name} ${r.category}`);
    const bodyNorm =
      r.search_text || `${titleNorm} ${catNorm} ${norm(r.excerpt || "")}`;

    let score = 0;
    if (fullPhrase.length >= 5 && titleNorm.includes(fullPhrase)) score += 45;

    let matchedPrimary = 0;
    for (const tok of primaryTokens) {
      if (titleNorm.includes(tok)) {
        score += 16;
        matchedPrimary++;
      } else if (catNorm.includes(tok)) {
        score += 9;
        matchedPrimary++;
      } else if (bodyNorm.includes(tok)) {
        score += 5;
        matchedPrimary++;
      }
    }
    if (matchedPrimary >= 2) score += matchedPrimary * 8;
    if (starterSlugs.includes(r.slug)) score += 5;

    for (const cTok of contextTokens.slice(-5)) {
      if (titleNorm.includes(cTok)) score += 3;
    }

    if (score > 0) scored.push({ r, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.r);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const json = (b: unknown, status = 200) =>
    new Response(JSON.stringify(b), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body =
      req.method === "POST" ? await req.json().catch(() => ({})) : {};
    const mode = body.mode || (req.method === "GET" ? "config" : "chat");

    // 0. Seed / Sync articles endpoint
    if (mode === "seed_articles") {
      const syncKey = req.headers.get("x-sync-key") || "";
      if (syncKey !== "puertasinllave-sync-2026") {
        return json({ error: "No autorizado" }, 401);
      }
      const rows = Array.isArray(body.articles) ? body.articles : [];
      if (rows.length === 0) return json({ error: "Sin artículos" }, 400);
      const { error } = await supabase
        .from("puertasinllave_articles")
        .upsert(rows, { onConflict: "slug" });
      if (error) return json({ error: error.message }, 500);
      catalogCache = null;
      return json({ success: true, count: rows.length });
    }

    // 1. Load live config (Default: gpt-4o-mini)
    const { data: configRow } = await supabase
      .from("puertasinllave_chat_config")
      .select("*")
      .eq("id", "default")
      .maybeSingle();

    const config = configRow || {
      is_enabled: true,
      ai_model: "gpt-4o-mini",
      temperature: 0.35,
      max_messages_per_session: 30,
      daily_budget_usd: 5.0,
      welcome_message:
        "¡Hola! 🔐📱 Soy tu Asesor de Cerraduras Digitales IA de PuertaSinLlave.com (modelo mini rápido). Cuéntame si es para casa, departamento o alquiler temporal (Airbnb), las medidas de tu puerta o si buscas TEEHO o eufy con código, huella o Wi-Fi desde el celular, y te recomendaré la opción compatible en Amazon Estados Unidos.",
      custom_instructions: "",
    };

    const activeModel = ALLOWED_MODELS.includes(config.ai_model)
      ? config.ai_model
      : "gpt-4o-mini";

    if (mode === "config" || req.method === "GET") {
      return json({
        is_enabled: config.is_enabled,
        welcome_message: config.welcome_message,
        ai_model: activeModel,
        max_messages_per_session: config.max_messages_per_session,
      });
    }

    // 2. Track click on an article or Amazon product
    if (mode === "track_click") {
      const {
        session_id,
        visitor_id,
        article_slug,
        article_title,
        category,
        target_url,
        page_url,
      } = body;
      if (target_url) {
        await supabase.from("puertasinllave_chat_clicks").insert({
          session_id: session_id || null,
          visitor_id: String(visitor_id || "anon").slice(0, 80),
          article_slug: article_slug ? String(article_slug).slice(0, 180) : null,
          article_title: article_title
            ? String(article_title).slice(0, 240)
            : null,
          category: category ? String(category).slice(0, 80) : null,
          target_url: String(target_url).slice(0, 500),
          page_url: page_url ? String(page_url).slice(0, 500) : null,
        });

        if (session_id) {
          const { data: sess } = await supabase
            .from("puertasinllave_chat_sessions")
            .select("clicks_count, clicked_urls")
            .eq("id", session_id)
            .maybeSingle();
          if (sess) {
            const urls = Array.isArray(sess.clicked_urls)
              ? sess.clicked_urls
              : [];
            if (!urls.includes(target_url)) urls.push(target_url);
            await supabase
              .from("puertasinllave_chat_sessions")
              .update({
                clicks_count: (sess.clicks_count || 0) + 1,
                clicked_urls: urls,
              })
              .eq("id", session_id);
          }
        }
      }
      return json({ success: true });
    }

    // 3. Chat Completion
    if (!config.is_enabled) {
      return json({
        reply: `En este momento el Asesor de Cerraduras IA está en mantenimiento breve. Puedes consultar nuestras comparativas de TEEHO y eufy y el verificador de medidas en [PuertaSinLlave.com](${SITE}/).`,
        recommended_articles: [],
        recommended_products: [],
        suggested_options: [
          "Cómo medir mi puerta antes de comprar",
          "TEEHO vs eufy para Airbnb",
        ],
        disabled: true,
      });
    }

    const userMessage = String(body.message || "").trim().slice(0, 1000);
    if (!userMessage) return json({ error: "Mensaje vacío" }, 400);

    const visitorId = String(
      body.visitor_id || "psl-" + crypto.randomUUID().slice(0, 8)
    ).slice(0, 80);
    const region = body.region === "ES" ? "ES" : "US";
    const storeName = region === "ES" ? "Amazon.es" : "Amazon.com";
    const pageUrl = String(body.page_url || SITE + "/").slice(0, 500);
    const userAgent = String(
      body.user_agent || req.headers.get("user-agent") || ""
    ).slice(0, 300);
    const history = Array.isArray(body.history) ? body.history.slice(-8) : [];
    let sessionId: string | null = body.session_id || null;

    let existingSession: any = null;
    if (sessionId) {
      const { data: s } = await supabase
        .from("puertasinllave_chat_sessions")
        .select("*")
        .eq("id", sessionId)
        .maybeSingle();
      existingSession = s;
    }

    if (!existingSession) {
      const { data: created, error: createErr } = await supabase
        .from("puertasinllave_chat_sessions")
        .insert({
          visitor_id: visitorId,
          page_url: pageUrl,
          user_agent: userAgent,
          first_user_message: userMessage.slice(0, 250),
          last_user_message: userMessage.slice(0, 250),
          messages_count: 1,
          model_used: activeModel,
        })
        .select("*")
        .single();

      if (!createErr && created) {
        existingSession = created;
        sessionId = created.id;
      }
    }

    if (sessionId) {
      await supabase.from("puertasinllave_chat_messages").insert({
        session_id: sessionId,
        role: "user",
        content: userMessage,
      });
    }

    const catalog = await loadCatalog();
    const recentHistoryText = history
      .slice(-3)
      .map((h: any) => h?.content || "")
      .join(" ");
    const candidateRows = searchArticles(
      catalog.rows,
      userMessage,
      recentHistoryText,
      14
    );

    const candidatesPrompt =
      candidateRows.length > 0
        ? candidateRows
            .map((r) => {
              const u =
                r.slug === r.category
                  ? `${SITE}/${r.category}/`
                  : `${SITE}/${r.category}/${r.slug}/`;
              return `- SLUG: "${r.slug}" | TÍTULO: "${r.title}" | CATEGORÍA: ${r.category_name} | URL: ${u} | RESUMEN: ${(r.excerpt || "").slice(0, 140)}`;
            })
            .join("\n")
        : "No se encontraron artículos exactos con esos términos.";

    const amazonCatalogPrompt = Object.values(AMAZON_PRODUCTS)
      .map(
        (p) =>
          `- PRODUCT_ID: "${p.id}" | ${p.badge} | NOMBRE: "${p.title}" | DETALLE: ${p.subtitle} | URL_${region}: ${region === "ES" ? p.urlES : p.urlUS}`
      )
      .join("\n");

    const extraInstructions = config.custom_instructions
      ? `\nINSTRUCCIONES ADICIONALES DEL ADMINISTRADOR:\n${config.custom_instructions}\n`
      : "";

    const systemPrompt = `Eres el Asesor Técnico Oficial de Cerraduras Digitales de PuertaSinLlave.com (${SITE}), la guía en español con más de 1,500 artículos para elegir cerraduras inteligentes para casas, departamentos y alquileres temporales (Airbnb) en Amazon Estados Unidos (fundado por Carlos Lingan Borja, info@charlielingan.com).

Tu doble misión es:
1. RESOLVER CON PRECISIÓN TÉCNICA CADA CONSULTA EN ESPAÑOL:
   - COMPARATIVA POR MARCA, PRECIO Y ACCESO:
     * TEEHO TE001, TEEHO TE002 y TEEHO TE002H (con manillón completo para puerta principal): funcionan SIN internet ni app remota, y permiten crear códigos temporales de 1 solo uso directamente en el teclado.
     * TEEHO con App Bluetooth (ej. TE011/TE004) requiere añadir un Puente Gateway Wi-Fi G2 enchufado a 3-5 m para abrir o crear códigos a distancia.
     * eufy Security C210 (código + Wi-Fi integrado) y eufy C220 (huella + código + Wi-Fi integrado, sin suscripción mensual): permiten crear códigos temporales por fecha/hora y abrir desde el celular desde otra ciudad SIN accesorios extra.
     * eufy Video Smart Lock E330 / S330: 3-en-1 (cámara 2K + timbre + huella) e incluye su Chime Wi-Fi en la caja.
     * Schlage Encode: Wi-Fi integrado + sincronización automática con reservas de Airbnb.
     * SwitchBot Lock Pro / August Wi-Fi: modelos retrofit por dentro para departamentos alquilados o puertas con cerradura multipunto/europea donde no dejan cambiar el exterior.
   - COMPATIBILIDAD Y MEDIDAS DE PUERTA ANTES DE COMPRAR:
     * Verifica siempre: (a) Backset o entrada de 2-3/8" (60 mm) o 2-3/4" (70 mm) desde el borde hasta el centro del agujero; (b) Grosor de la puerta entre 1-3/8" y 2-1/8" (35 a 54 mm; 35–50 mm en TEEHO); (c) Orificio transversal (Cross Bore) de 2-1/8" (54 mm) y orificio del canto de 1" (25 mm); (d) Que sea puerta de apertura abatible con cerrojo tubular estándar (deadbolt), advirtiendo si es cerradura embutida (mortise) o de sobreponer.
   - Enlaza entre 1 y 3 guías de nuestro listado inferior usando Markdown exacto: [Título](${SITE}/categoria/slug/) e incluye sus slugs en "recommended_slugs".
2. AYUDAR ACTIVAMENTE A QUE COMPREN EN AMAZON (${storeName}):
   - Recomienda siempre 1 o 2 productos exactos de nuestro CATÁLOGO AMAZON OFICIAL (por ejemplo, la cerradura ideal + pilas de litio/puente/kit de brocas si aplica).
   - Incluye en tu texto un enlace Markdown directo al producto en ${storeName} usando su URL_${region} exacta y añade entre 1 y 2 IDs en "recommended_product_ids".${extraInstructions}

CATÁLOGO AMAZON OFICIAL (${storeName}):
${amazonCatalogPrompt}

ARTÍCULOS ENCONTRADOS EN PUERTASINLLAVE.COM:
${candidatesPrompt}

Responde ÚNICAMENTE con un objeto JSON válido con estas 4 llaves exactas:
{
  "reply": "Tu respuesta experta y clara en español evaluando compatibilidad de medidas, forma de acceso, códigos temporales de huéspedes y requisitos para control remoto, con enlaces Markdown a nuestras guías y al producto en ${storeName}",
  "recommended_slugs": ["slug-1", "slug-2"],
  "recommended_product_ids": ["eufy-c220-wifi", "energizer-lithium-aa-lockbox"],
  "suggested_options": ["Opción 1", "Opción 2", "Opción 3"]
}`;

    const chatMessages: any[] = [{ role: "system", content: systemPrompt }];
    for (const h of history) {
      if (
        h &&
        (h.role === "user" || h.role === "assistant") &&
        typeof h.content === "string"
      ) {
        chatMessages.push({ role: h.role, content: h.content.slice(0, 1200) });
      }
    }
    chatMessages.push({ role: "user", content: userMessage });

    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: activeModel,
          messages: chatMessages,
          temperature: Number(config.temperature) || 0.35,
          max_tokens: 900,
          response_format: { type: "json_object" },
        }),
      }
    );

    if (!openaiRes.ok) {
      throw new Error("OpenAI status " + openaiRes.status);
    }

    const openaiData = await openaiRes.json();
    const rawContent = openaiData.choices?.[0]?.message?.content || "{}";
    let parsed: any = {};
    try {
      parsed = JSON.parse(rawContent);
    } catch {
      parsed = {
        reply: rawContent,
        recommended_slugs: candidateRows.slice(0, 2).map((r) => r.slug),
        recommended_product_ids: ["teeho-te002-huella", "eufy-c220-wifi"],
        suggested_options: [
          "¿Cómo mido mi puerta antes de comprar?",
          "TEEHO TE002 vs eufy C220 para Airbnb",
          "¿Qué cerradura permite códigos remotos sin puente extra?",
        ],
      };
    }

    const slugs: string[] = Array.isArray(parsed.recommended_slugs)
      ? parsed.recommended_slugs.slice(0, 3)
      : [];
    const recommendedArticles: ArticleCard[] = slugs
      .map((s) => catalog.bySlug.get(s))
      .filter((r): r is ArticleRow => Boolean(r))
      .map(toArticleCard);

    const productIds: string[] = Array.isArray(parsed.recommended_product_ids)
      ? parsed.recommended_product_ids.slice(0, 2)
      : ["eufy-c220-wifi"];
    const recommendedProducts: AmazonProductCard[] = productIds
      .map((id) => AMAZON_PRODUCTS[id])
      .filter((p): p is AmazonProductCard => Boolean(p));

    const suggestedOptions: string[] = Array.isArray(parsed.suggested_options)
      ? parsed.suggested_options
          .slice(0, 3)
          .map((s: unknown) => String(s).slice(0, 72))
      : [];

    const replyText: string =
      parsed.reply ||
      `Te recomiendo revisar nuestra comparativa [TEEHO vs eufy: cuál cerradura digital elegir](${SITE}/comparativas-cerraduras-digitales/teeho-vs-eufy-cual-cerradura-digital-elegir-casa-departamento-airbnb/).`;

    const promptTokens = openaiData.usage?.prompt_tokens || 0;
    const completionTokens = openaiData.usage?.completion_tokens || 0;
    const totalTokens =
      openaiData.usage?.total_tokens || promptTokens + completionTokens;
    const costUsd = calculateCostUsd(
      activeModel,
      promptTokens,
      completionTokens
    );

    if (sessionId && existingSession) {
      await supabase.from("puertasinllave_chat_messages").insert({
        session_id: sessionId,
        role: "assistant",
        content: replyText,
        recommended_articles: recommendedArticles,
        suggested_options: suggestedOptions,
        model: activeModel,
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: totalTokens,
        cost_usd: costUsd,
      });

      const prevRecs: string[] = Array.isArray(
        existingSession.recommended_articles
      )
        ? existingSession.recommended_articles
        : [];
      for (const ra of recommendedArticles) {
        if (!prevRecs.includes(ra.title)) prevRecs.push(ra.title);
      }
      for (const rp of recommendedProducts) {
        const label = `[Amazon] ${rp.title}`;
        if (!prevRecs.includes(label)) prevRecs.push(label);
      }

      await supabase
        .from("puertasinllave_chat_sessions")
        .update({
          last_user_message: userMessage.slice(0, 250),
          messages_count: (existingSession.messages_count || 1) + 2,
          recommended_articles: prevRecs.slice(0, 30),
          prompt_tokens: (existingSession.prompt_tokens || 0) + promptTokens,
          completion_tokens:
            (existingSession.completion_tokens || 0) + completionTokens,
          total_tokens: (existingSession.total_tokens || 0) + totalTokens,
          estimated_cost_usd: Number(
            (Number(existingSession.estimated_cost_usd || 0) + costUsd).toFixed(
              6
            )
          ),
          model_used: activeModel,
          last_message_at: new Date().toISOString(),
        })
        .eq("id", sessionId);
    }

    await supabase.from("token_usage").insert({
      source: "puertasinllave.com",
      content_type: "ai_chat",
      model: activeModel,
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      total_tokens: totalTokens,
      images_generated: 0,
      estimated_cost_usd: costUsd,
      slug: sessionId || visitorId,
    });

    return json({
      session_id: sessionId,
      reply: replyText,
      recommended_articles: recommendedArticles,
      recommended_products: recommendedProducts,
      suggested_options: suggestedOptions,
      model: activeModel,
    });
  } catch (err: any) {
    return json(
      {
        error: err.message || "Error interno",
        reply: `Puedes explorar nuestras más de 1,500 guías de cerraduras digitales TEEHO y eufy y verificar las medidas de tu puerta en [PuertaSinLlave.com](${SITE}/).`,
        recommended_articles: [],
        recommended_products: [],
        suggested_options: ["Intentar de nuevo"],
      },
      500
    );
  }
});
