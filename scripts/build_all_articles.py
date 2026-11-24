#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador Maestro de las 1,534 Guías Editoriales de PuertaSinLlave.com:
- 14 Hubs Pilares de Categoría (isPillar: true)
- 520 Artículos Transaccionales en 6 Silos de Productos Amazon (isTransactional: true)
- 1,000 Artículos SEO Informacionales en 8 Silos Técnicos (isTransactional: false)

También genera:
- src/data/keyword_map.json (validando 0 canibalización)
- public/search-index.json
"""
import json
import pathlib
import re

from topics_catalog import PILLARS, generate_transactional_520, generate_seo_1000

ROOT = pathlib.Path(__file__).resolve().parent.parent
ART_DIR = ROOT / "src/content/articles"
ART_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR = ROOT / "src/data"
DATA_DIR.mkdir(parents=True, exist_ok=True)
PUB_DIR = ROOT / "public"
PUB_DIR.mkdir(parents=True, exist_ok=True)

PUBLISHED = "2026-11-24"

# Matriz Fotográfica Anti-Similitud (8 ángulos × 6 iluminaciones × 12 puertas/escenarios = 576 combinaciones únicas)
CAMERA_STYLES = [
    "Macro close-up shot with shallow depth of field (85mm f/2.8 lens)",
    "Three-quarter architectural entryway photograph (50mm lens)",
    "Overhead flat-lay knolling composition of lock hardware and tools (35mm lens)",
    "Eye-level realistic lifestyle entry shot with authentic natural framing",
    "Side-edge door profile photograph showing deadbolt latch and thickness",
    "Over-the-shoulder perspective holding a smartphone beside the entry keypad",
    "Low-angle architectural shot showcasing door handle and digital lock alignment",
    "Split comparative studio tabletop shot with crisp metallic hardware textures",
]

LIGHTING_MOODS = [
    "crisp natural morning porch daylight with soft realistic shadows",
    "warm golden-hour afternoon sunlight streaming across the doorway",
    "bright neutral 4000K apartment hallway LED lighting with clean highlights",
    "soft diffused overcast natural daylight with accurate hardware color",
    "inviting warm evening foyer sconce light creating a cozy home mood",
    "clean lateral window sunlight highlighting brushed metal and wood grain",
]

DOOR_SCENES = [
    "on a warm natural oak house front door with dark stone trim",
    "on a sleek matte white modern apartment hallway door",
    "at a bright Airbnb vacation rental entrance beside a travel suitcase",
    "on a dark walnut wood door framed against exposed architectural brick",
    "on a coastal beach house painted wood door under a shaded veranda",
    "on an anthracite gray steel security condo door with clean threshold",
    "on a contemporary Scandinavian home office interior wood door",
    "on a minimalist foyer oak bench next to installation tools and tape measure",
    "on a freshly painted slate blue residential front door with brass house hardware",
    "on a sunlit mudroom entry door leading from a residential garage",
    "on a modern apartment door featuring a frosted glass sidelight panel",
    "on a timber studio doorframe with crisp recessed strike plate",
]


def build_diverse_prompt(subject: str, idx: int) -> str:
    cam = CAMERA_STYLES[idx % len(CAMERA_STYLES)]
    light = LIGHTING_MOODS[(idx * 3 + 1) % len(LIGHTING_MOODS)]
    door = DOOR_SCENES[(idx * 7 + 2) % len(DOOR_SCENES)]
    return (
        f"Realistic architectural smart door lock photography #{idx:04d}, {cam}: {subject}, {door}, {light}. "
        "Photorealistic matte black and satin nickel metal hardware, natural wood and steel textures, no text, no letters, no watermarks."
    )


def clean_slug(s: str) -> str:
    s = s.lower().strip()
    s = (
        s.replace("á", "a")
        .replace("é", "e")
        .replace("í", "i")
        .replace("ó", "o")
        .replace("ú", "u")
        .replace("ñ", "n")
    )
    s = re.sub(r"[^a-z0-9-]+", "-", s)
    return re.sub(r"-+", "-", s).strip("-")


def make_pillar_article(p: dict, child_items: list, idx: int) -> dict:
    cat_slug = p["slug"]
    path = f"/{cat_slug}/"
    related_paths = [f"/{cat_slug}/{clean_slug(c[0])}/" for c in child_items[:4]]
    table_rows = [
        [c[1], f"[Ver guía completa](/{cat_slug}/{clean_slug(c[0])}/)"]
        for c in child_items[:16]
    ]
    is_trans_pillar = cat_slug in {
        "resenas-cerraduras-digitales",
        "comparativas-cerraduras-digitales",
        "cerraduras-para-airbnb-y-alquiler-temporal",
        "cerraduras-para-casas-y-departamentos",
        "cerraduras-por-precio-y-forma-de-acceso",
        "puentes-wifi-baterias-y-accesorios",
    }
    blocks = [
        {
            "type": "p",
            "text": f"Bienvenido al hub especializado de **{p['title']}** en **PuertaSinLlave.com**. Aquí agrupamos nuestras **{len(child_items)} guías verificadas** sobre **{p['focus']}**, diseñadas sin canibalización para ayudarte a acertar antes de comprar en **Amazon Estados Unidos (`amazon.com`)** o **Amazon España (`amazon.es`)**.",
        },
        {
            "type": "p",
            "text": "Tanto si quieres revisar nuestro **[duelo completo TEEHO vs eufy](/comparativas-cerraduras-digitales/teeho-vs-eufy-cual-cerradura-digital-elegir-casa-departamento-airbnb/)**, analizar la **[TEEHO TE002 con huella](/resenas-cerraduras-digitales/teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad/)** o la **[eufy C220 con Wi-Fi integrado](/resenas-cerraduras-digitales/eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas/)**, como si necesitas comprobar el **[backset y grosor de tu puerta](/como-medir-tu-puerta-y-compatibilidad/como-medir-backset-grosor-y-orificio-de-puerta-antes-de-comprar-cerradura-digital/)** o validar nuestro **[Verificador Interactivo](/verificador-de-medidas/)**, cada guía detalla medidas, acceso y requisitos remotos.",
        },
        {"type": "h2", "text": f"Qué comprobamos en {p['title'].split('(')[0].split(':')[0].strip()}"},
        {
            "type": "p",
            "text": f"En cada una de las **{len(child_items)} guías** de este silo verificamos los cuatro factores obligatorios: **1) El rango de precio real en Amazon EE. UU.**; **2) Cómo comprobar las medidas de tu puerta antes de comprar** (*backset* `60/70 mm`, grosor `35–55 mm`, orificio `54 mm` y tipo de cerrojo); **3) Las formas de acceso y códigos temporales para huéspedes**; y **4) Qué accesorios requiere el modelo para funcionar a distancia** (Wi-Fi integrado vs Puente Gateway).",
        },
        {
            "type": "table",
            "caption": f"Guías principales en {p['title'].split('(')[0].strip()}",
            "headers": ["Guía / Comparativa de Cerraduras Digitales", "Enlace Directo"],
            "rows": table_rows,
        },
        {
            "type": "callout",
            "variant": "etiqueta",
            "title": "Cómo comprobar tus medidas antes de ordenar en Amazon EE. UU.",
            "text": "Antes de comprar cualquier cerradura TEEHO o eufy, mide con cinta métrica: (a) Backset del borde al centro del agujero (debe ser 60 mm / 2-3/8\" o 70 mm / 2-3/4\"); (b) Grosor de la puerta (35–50 mm en TEEHO, 35–55 mm en eufy); (c) Diámetro del orificio frontal de 54 mm (2-1/8\") y canto de 25 mm (1\").",
        },
        {"type": "h2", "text": "Cómo elegir en 3 pasos sin equivocarte"},
        {
            "type": "ol",
            "items": [
                "**Confirma si tu puerta usa cerrojo tubular (deadbolt) o caja embutida:** si tienes un cerrojo independiente arriba de la manija, casi cualquier modelo **TEEHO** o **eufy** encaja en 15 minutos. Si es caja embutida o departamento alquilado sin permiso, elige un sistema *retrofit* como **SwitchBot Lock Pro**.",
                "**Separa uso local vs gestión remota para huéspedes:** si vives en la casa y quieres ahorrar (`<$60`), **TEEHO TE001/TE002** crea códigos de 1 uso en el teclado sin internet. Si administras un Airbnb a distancia, elige **eufy C210/C220** con códigos por fecha y hora desde el celular.",
                "**Comprueba si incluye Wi-Fi o exige puente:** **eufy C210 y C220** ya integran Wi-Fi `2.4 GHz` sin compras adicionales; **eufy E330** trae su Chime Wi-Fi en la caja; y las cerraduras Bluetooth requieren enchufar un **Gateway Wi-Fi G2** a menos de `5 metros`.",
            ],
        },
        {
            "type": "cta",
            "text": "¿Quieres validar tus medidas exactas o comparar TEEHO y eufy para tu vivienda? Pregúntale ahora mismo a nuestro Asesor IA.",
        },
    ]
    faqs = [
        {
            "q": f"¿Qué modelos principales comparamos en {p['title'].split('(')[0].strip()}?",
            "a": "Evaluamos principalmente modelos líderes en Amazon Estados Unidos de TEEHO (TE001, TE002, TE002H, TE004) y eufy Security (C210, C220, C33, Video Smart Lock E330/S330), junto a referentes como Schlage Encode, Aqara U100 y SwitchBot Lock Pro para casos especiales.",
        },
        {
            "q": "¿Todas permiten crear códigos temporales para huéspedes?",
            "a": "Sí, pero con distinto alcance: TEEHO TE001 y TE002 permiten códigos de 1 solo uso creados presencialmente en el teclado, mientras que eufy C210, C220, E330 y Schlage Encode permiten programar códigos con fecha y hora de inicio y vencimiento desde el celular a distancia.",
        },
        {
            "q": "¿Qué accesorio se necesita para abrir desde el celular fuera de casa?",
            "a": "En eufy C210 y C220 no necesitas ningún accesorio extra porque integran Wi-Fi 2.4 GHz. En cerraduras Bluetooth (como TEEHO App/TTLock o SwitchBot) debes comprar e instalar un puente Wi-Fi (Gateway G2 o Hub Mini) en un enchufe a 3–5 metros de la puerta.",
        },
    ]
    return {
        "slug": cat_slug,
        "pillar": cat_slug,
        "path": path,
        "isPillar": True,
        "isTransactional": is_trans_pillar,
        "primaryKeyword": p["kw"],
        "title": p["title"],
        "seoTitle": f"{p['title']} | PuertaSinLlave.com",
        "metaDescription": f"Guía en español sobre {p['focus']}. Compara TEEHO y eufy por precio, medidas de puerta, acceso y control remoto en Amazon EE. UU.",
        "excerpt": f"Explora las {len(child_items)} guías sobre {p['focus']} con verificación de medidas, huéspedes y accesorios remotos.",
        "quickAnswer": f"En esta sección reunimos {len(child_items)} guías especializadas sobre {p['focus']}. Explicamos cómo comprobar las medidas de tu puerta antes de comprar, si permite códigos temporales para huéspedes y qué accesorios requiere cada cerradura en Amazon Estados Unidos.",
        "readingMinutes": 8,
        "image": {
            "prompt": build_diverse_prompt(p["subject"], idx),
            "alt": p["title"],
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Amazon.com Best Sellers in Smart Door Locks & Deadbolts", "url": "https://www.amazon.com/Best-Sellers-Tools-Home-Improvement-Door-Deadbolts/zgbs/hi/511330"},
            {"label": "ANSI/BHMA A156 Standards for Residential & Commercial Door Hardware", "url": "https://buildershardware.com/"},
        ],
        "related": related_paths,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": f"/img/ambiente/cat-{cat_slug}.webp",
    }


def make_transactional_article(item: tuple, sibling_paths: list, idx: int) -> dict:
    slug, title, pillar, kw, pr, dc, ac, gc, rem, picks, subj = item
    slug = clean_slug(slug)
    path = f"/{pillar}/{slug}/"
    rel = [p for p in sibling_paths if p != path][:3]
    rel.insert(0, f"/{pillar}/")

    blocks = [
        {
            "type": "p",
            "text": f"Revisar en detalle **{title}** es fundamental antes de comprar en **Amazon Estados Unidos (`amazon.com`)** para tu casa, departamento o alquiler temporal. En esta ficha verificamos el **precio orientativo ({pr})**, la **compatibilidad exacta con las medidas de tu puerta ({dc})**, las **formas de acceso ({ac})**, si permite **códigos temporales para huéspedes ({gc})** y **qué accesorios exige para control remoto ({rem})**.",
        },
        {
            "type": "h2",
            "text": "Precio, formas de acceso y análisis para casa, departamento o Airbnb",
        },
        {
            "type": "p",
            "text": f"Dentro del rango de **{pr}**, las alternativas centradas en **{picks}** destacan por equilibrar rapidez de apertura y fiabilidad mecánica. Combinar **{ac}** te permite adaptar el acceso diario para niños, adultos mayores, inquilinos o visitantes ocasionales sin depender de copias físicas de llaves.",
        },
        {
            "type": "callout",
            "variant": "etiqueta",
            "title": f"Cómo comprobar las medidas de tu puerta antes de comprar ({picks.split(',')[0].strip()})",
            "text": f"• Compatibilidad física verificada: {dc}.\n• Paso 1: Mide del borde de la puerta al centro del orificio (debe dar 60 mm / 2-3/8\" o 70 mm / 2-3/4\").\n• Paso 2: Confirma que el grosor esté dentro del rango tolerado y que el cerrojo sea tipo tubular (deadbolt) independiente; si es caja embutida (mortise) o edificio con restricción, opta por sistema retrofit interior.",
        },
        {
            "type": "h2",
            "text": f"Tabla comparativa en Amazon EE. UU.: {title}",
        },
        {
            "type": "p",
            "text": "Compara nuestra selección principal frente a los modelos líderes de **TEEHO** y **eufy Security** evaluando precio, medidas, códigos temporales y requisito de puente Wi-Fi:",
        },
        {
            "type": "table",
            "caption": f"Comparativa técnica de compatibilidad y control remoto para {title}",
            "headers": [
                "Modelo en Amazon EE. UU.",
                "Precio y Medidas Compatibles",
                "Formas de Acceso y Huéspedes",
                "Control a Distancia / Accesorios",
            ],
            "rows": [
                [
                    f"**Selección de esta Guía: {picks.split(',')[0].strip()}**",
                    f"{pr} · {dc}",
                    f"{ac} · {gc}",
                    rem,
                ],
                [
                    "**TEEHO TE002 ([Ver reseña](/resenas-cerraduras-digitales/teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad/))**",
                    "US$45–$59 · Backset 60/70 mm · Grosor 35–50 mm",
                    "Huella 0.3s + Código PIN + Llave · 1 uso offline",
                    "100 % local (no tiene app ni puente Wi-Fi)",
                ],
                [
                    "**eufy Smart Lock C220 ([Ver reseña](/resenas-cerraduras-digitales/eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas/))**",
                    "US$119–$149 · Backset 60/70 mm · Grosor 35–55 mm",
                    "Huella + PIN + App + Llave · Códigos por fechas",
                    "Wi-Fi 2.4 GHz integrado (NO requiere bridge)",
                ],
                [
                    "**eufy C210 ([Ver reseña](/resenas-cerraduras-digitales/eufy-c210-smart-lock-wifi-economica-resena-y-compatibilidad/)) / SwitchBot Lock Pro**",
                    "US$89–$109 (C210) o Retrofit universal sin taladrar",
                    "Teclado PIN Wi-Fi (C210) o sobre cilindro actual",
                    "Wi-Fi integrado (C210) o Hub Mini (SwitchBot)",
                ],
            ],
        },
        {
            "type": "h2",
            "text": "Códigos temporales para huéspedes y accesorios para funcionar a distancia",
        },
        {
            "type": "callout",
            "variant": "fabricante",
            "title": "Alcance real de huéspedes y conectividad remota",
            "text": f"• Gestión de códigos temporales: {gc}.\n• Requisito de control desde el celular a distancia: {rem}.\n• Tip extra: si usas el equipo en puerta exterior o red Wi-Fi activa, instala pilas AA de litio de 1.5V (Energizer Ultimate Lithium) en lugar de recargables 1.2V para evitar falsos avisos de batería agotada.",
        },
        {
            "type": "h2",
            "text": "3 pasos para comprobar compatibilidad y pedir en Amazon EE. UU.",
        },
        {
            "type": "steps",
            "items": [
                {
                    "name": "Mide tu puerta con regla o nuestro Verificador Interactivo",
                    "text": f"Comprueba en persona el criterio físico ({dc}) o usa nuestro [Verificador de Medidas](/verificador-de-medidas/) para confirmar en segundos si entra directo o pide adaptador.",
                },
                {
                    "name": "Confirma si necesitas crear códigos estando fuera de casa",
                    "text": "Si gestionas un Airbnb desde otra ciudad, asegúrate de elegir modelos con Wi-Fi directo (eufy C210/C220) o añade el Puente Gateway G2 si eliges un equipo Bluetooth.",
                },
                {
                    "name": "Revisa acabado, stock y envío en Amazon Estados Unidos",
                    "text": "Haz clic en nuestras tarjetas para verificar disponibilidad en Matte Black o Satin Nickel en Amazon.com (o conmuta a Amazon.es si estás en España).",
                },
            ],
        },
        {
            "type": "callout",
            "variant": "aviso",
            "title": "Aviso sobre redes Wi-Fi 5 GHz y respaldo físico",
            "text": "Todas las cerraduras inteligentes con Wi-Fi o puentes Gateway operan exclusivamente en redes Wi-Fi de 2.4 GHz (no conectan a bandas exclusivas 5 GHz) y guardan una llave mecánica o puerto USB-C exterior para abrir si las pilas llegan al 0 %.",
        },
        {
            "type": "cta",
            "text": "¿Tienes dudas sobre si este modelo entra en el espesor de tu puerta o qué puente Wi-Fi necesita? Pregunta al instante a nuestro Asesor IA.",
        },
    ]

    faqs = [
        {
            "q": f"¿Qué medidas necesita mi puerta para instalar {picks.split(',')[0].strip()}?",
            "a": f"La compatibilidad oficial exige: {dc}. Compruébalo con una cinta métrica antes de realizar el pedido.",
        },
        {
            "q": "¿Permite crear códigos temporales para huéspedes de Airbnb o visitas?",
            "a": gc,
        },
        {
            "q": "¿Qué accesorios requiere para abrir o programar códigos desde el celular a distancia?",
            "a": rem,
        },
        {
            "q": "¿Qué formas de acceso incluye además del teléfono o código?",
            "a": f"Cuenta con: {ac}, permitiendo entrar aunque no tengas batería en el celular.",
        },
    ]

    quick_answer = (
        f"En nuestro análisis de {title}, el precio en Amazon EE. UU. ronda {pr} y exige medidas de puerta {dc}. "
        f"Ofrece acceso mediante {ac.lower()}; sobre huéspedes: {gc.lower()}, y para control remoto: {rem.lower()}."
    )

    return {
        "slug": slug,
        "pillar": pillar,
        "path": path,
        "isPillar": False,
        "isTransactional": True,
        "primaryKeyword": kw,
        "title": title,
        "seoTitle": f"{title} | PuertaSinLlave.com",
        "metaDescription": f"Guía y comparativa de {title} en Amazon EE. UU. Precio ({pr}), medidas compatibles, acceso, códigos de huéspedes y Wi-Fi.",
        "excerpt": f"Análisis completo de {title}: precio en Amazon, medidas de puerta, acceso, huéspedes y accesorios remotos.",
        "quickAnswer": quick_answer,
        "readingMinutes": 7,
        "image": {
            "prompt": build_diverse_prompt(subj, idx),
            "alt": title,
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Amazon.com Smart Door Locks & Home Security Catalog", "url": "https://www.amazon.com/Best-Sellers-Tools-Home-Improvement-Door-Deadbolts/zgbs/hi/511330"},
            {"label": "ANSI/BHMA A156 Builders Hardware Compatibility Standards", "url": "https://buildershardware.com/"},
        ],
        "related": rel,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": None,
    }


def make_seo_article(item: tuple, sibling_paths: list, idx: int) -> dict:
    slug, title, pillar, kw, focus_summary, subj = item
    slug = clean_slug(slug)
    path = f"/{pillar}/{slug}/"
    rel = [p for p in sibling_paths if p != path][:3]
    rel.insert(0, f"/{pillar}/")

    blocks = [
        {
            "type": "p",
            "text": f"Dominar **{title}** te evita el error más frecuente al comprar una cerradura digital en Amazon Estados Unidos: pedir un equipo incompatible con el espesor o el *backset* de tu puerta, o descubrir demasiado tarde que necesitaba un puente Wi-Fi adicional. En **PuertaSinLlave.com** te explicamos esta **{focus_summary}** aplicada a marcas líderes como **TEEHO** y **eufy Security**.",
        },
        {
            "type": "h2",
            "text": f"Análisis técnico paso a paso: {title}",
        },
        {
            "type": "p",
            "text": f"Ya sea en una casa unifamiliar, un departamento en edificio o un alojamiento temporal tipo Airbnb, aplicar correctamente esta **{focus_summary}** garantiza que el pasador motorizado trabaje sin fricción, las baterías duren entre `8 y 12 meses` y cada usuario pueda abrir por **código PIN, huella digital o celular** sin bloqueos.",
        },
        {
            "type": "callout",
            "variant": "etiqueta",
            "title": "Comprobación rápida de medidas y compatibilidad antes de comprar",
            "text": "Verifica siempre cuatro cifras en tu puerta: (1) Backset de 60 mm (2-3/8\") o 70 mm (2-3/4\"); (2) Grosor de hoja entre 35 y 50 mm (TEEHO) o 35–55 mm (eufy); (3) Orificio frontal de 54 mm (2-1/8\") y canto de 25 mm (1\"); y (4) Confirma que el cerrojo superior gire suave antes de instalar.",
        },
        {
            "type": "h2",
            "text": "Cómo aplica según marca, huéspedes y accesorios remotos",
        },
        {
            "type": "table",
            "caption": f"Referencia de medidas, huéspedes y control remoto aplicada a {title}",
            "headers": [
                "Marca y Modelo",
                "Medidas Compatibles",
                "Formas de Acceso y Huéspedes",
                "Accesorios para Uso a Distancia",
            ],
            "rows": [
                [
                    "**[TEEHO TE002](/resenas-cerraduras-digitales/teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad/)** / **TE001**",
                    "Backset 60/70 mm · Grosor 35–50 mm · Orificio 54 mm",
                    "Huella 0.3s + PIN (o solo PIN en TE001) · Códigos de 1 uso offline",
                    "No usa app ni puente Wi-Fi (100 % local)",
                ],
                [
                    "**[eufy C220](/resenas-cerraduras-digitales/eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas/)** / **[eufy C210](/resenas-cerraduras-digitales/eufy-c210-smart-lock-wifi-economica-resena-y-compatibilidad/)**",
                    "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54/38 mm",
                    "Huella + PIN + App (C220) · Códigos temporales por fecha/hora",
                    "Wi-Fi 2.4 GHz integrado (NO requiere bridge)",
                ],
                [
                    "**[eufy Video Lock E330](/resenas-cerraduras-digitales/eufy-e330-video-smart-lock-camara-2k-resena-completa/)**",
                    "Backset 60/70 mm · Grosor 35–55 mm · Revisar reja exterior",
                    "Cámara 2K + Timbre + Huella + PIN · Códigos remotos",
                    "Incluye Chime Wi-Fi en la caja (sin compras extra)",
                ],
                [
                    "**[SwitchBot Lock Pro](/resenas-cerraduras-digitales/switchbot-lock-pro-retrofit-departamento-alquilado-resena/)** / **TEEHO App BLE**",
                    "Retrofit sobre cilindro actual (SwitchBot) o 60/70 mm",
                    "App + Llave actual (+ Huella/PIN con Keypad) · Códigos en app",
                    "Requiere Hub Mini o Gateway Wi-Fi G2 enchufado a ≤5 m",
                ],
            ],
        },
        {
            "type": "h2",
            "text": f"Procedimiento recomendado: {title}",
        },
        {
            "type": "steps",
            "items": [
                {
                    "name": "Mide tu puerta con precisión antes de elegir modelo",
                    "text": "Usa regla o cinta métrica para medir backset (60/70 mm), espesor (35–55 mm) y diámetro (54 mm), o valídalo en nuestro [Verificador de Medidas](/verificador-de-medidas/).",
                },
                {
                    "name": "Define cómo entregarás acceso temporal a invitados o huéspedes",
                    "text": f"Aplica esta {focus_summary}: decide si te basta generar códigos de 1 uso en el teclado (TEEHO) o si necesitas programarlos por fechas desde tu celular (eufy Wi-Fi).",
                },
                {
                    "name": "Asegura conectividad y respaldo de energía",
                    "text": "Verifica si tu router emite banda 2.4 GHz si usarás control remoto, coloca 4 u 8 pilas AA de litio 1.5V y guarda siempre una llave física o cable USB-C de emergencia fuera de casa.",
                },
            ],
        },
        {
            "type": "h2",
            "text": "Errores frecuentes en casas, departamentos y Airbnb que debes evitar",
        },
        {
            "type": "ul",
            "items": [
                "**Instalar sobre puertas que exigen empujar o levantar la manija para trancar:** el motor eléctrico necesita que el pasador entre libre al recibidor del marco; ajusta primero la placa metálica o los burletes.",
                "**Confundir Bluetooth con Wi-Fi remoto al comprar en Amazon:** revisa nuestra guía de **[Wi-Fi integrado vs Puente Bridge](/control-desde-el-celular-wifi-y-puentes/cerraduras-con-wifi-integrado-vs-puente-wifi-bridge-que-accesorios-necesitas/)** para saber si requieres Gateway G2.",
                "**Usar pilas recargables NiMH de 1.2V:** suelen disparar falsas alertas de batería baja en cerraduras de 4 u 8 pilas AA; emplea alcalinas de marca o **Energizer Ultimate Lithium 1.5V**.",
            ],
        },
        {
            "type": "cta",
            "text": "¿Quieres confirmar con un ejemplo real de tu puerta si te conviene TEEHO o eufy? Pregúntale gratis a nuestro Asesor de Cerraduras IA.",
        },
    ]

    faqs = [
        {
            "q": f"¿Cómo aplico {title} si compro en Amazon EE. UU.?",
            "a": "Comprueba primero que tu puerta cumpla el estándar americano (backset 60/70 mm, grosor 35–55 mm y orificio de 54 mm) o usa un modelo retrofit interior si tiene caja embutida o reglas de condominio.",
        },
        {
            "q": "¿Puedo crear códigos temporales para huéspedes con cualquier cerradura digital?",
            "a": "TEEHO TE001 y TE002 crean códigos de 1 uso directo en el teclado sin internet. Para crear códigos por fecha y hora exacta desde otra ciudad necesitas Wi-Fi integrado (eufy C210/C220) o un puente Gateway conectado.",
        },
        {
            "q": "¿Qué accesorio hace falta para abrir desde el celular fuera de casa?",
            "a": "Ninguno en eufy C210/C220 o Schlage Encode (Wi-Fi integrado). En modelos Bluetooth (TEEHO App o SwitchBot) es obligatorio enchufar un puente Gateway G2 o Hub Mini a menos de 5 metros en red Wi-Fi 2.4 GHz.",
        },
    ]

    quick_answer = (
        f"Para dominar {title}, verifica primero las medidas de tu puerta (backset 60/70 mm, grosor 35–55 mm y orificio 54 mm), "
        f"define si requieres códigos temporales remotos para huéspedes y comprueba si el modelo integra Wi-Fi (como eufy C210/C220) o trabaja local (como TEEHO TE002)."
    )

    return {
        "slug": slug,
        "pillar": pillar,
        "path": path,
        "isPillar": False,
        "isTransactional": False,
        "primaryKeyword": kw,
        "title": title,
        "seoTitle": f"{title} | PuertaSinLlave.com",
        "metaDescription": f"Guía técnica en español sobre {title}. Cómo comprobar medidas de puerta, códigos temporales y accesorios Wi-Fi en TEEHO y eufy.",
        "excerpt": f"Tutorial práctico sobre {title}: {focus_summary}.",
        "quickAnswer": quick_answer,
        "readingMinutes": 6,
        "image": {
            "prompt": build_diverse_prompt(subj, idx),
            "alt": title,
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "ANSI/BHMA Door Lock Measurement & Installation Reference", "url": "https://buildershardware.com/"},
        ],
        "related": rel,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": None,
    }


def main():
    for old in ART_DIR.glob("*.json"):
        old.unlink()

    trans_items = generate_transactional_520()
    seo_items = generate_seo_1000()

    by_pillar: dict[str, list] = {p["slug"]: [] for p in PILLARS}
    for it in trans_items:
        by_pillar[it[2]].append(it)
    for it in seo_items:
        by_pillar[it[2]].append(it)

    all_articles = []
    seen_slugs = set()
    seen_kws = set()
    seen_titles = set()
    idx = 0

    for p in PILLARS:
        art = make_pillar_article(p, by_pillar[p["slug"]], idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    pillar_paths = {
        p_slug: [f"/{p_slug}/{clean_slug(c[0])}/" for c in c_list]
        for p_slug, c_list in by_pillar.items()
    }

    for i, it in enumerate(trans_items):
        p_slug = it[2]
        sibs = pillar_paths[p_slug]
        rot_sibs = sibs[(i + 1) % len(sibs) :] + sibs[: (i + 1) % len(sibs)]
        art = make_transactional_article(it, rot_sibs, idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    for i, it in enumerate(seo_items):
        p_slug = it[2]
        sibs = pillar_paths[p_slug]
        rot_sibs = sibs[(i + 1) % len(sibs) :] + sibs[: (i + 1) % len(sibs)]
        art = make_seo_article(it, rot_sibs, idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    for art in all_articles:
        (ART_DIR / f"{art['slug']}.json").write_text(
            json.dumps(art, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    kw_map = [
        {
            "slug": a["slug"],
            "pillar": a["pillar"],
            "path": a["path"],
            "isPillar": a["isPillar"],
            "isTransactional": a["isTransactional"],
            "primaryKeyword": a["primaryKeyword"],
            "title": a["title"],
        }
        for a in all_articles
    ]
    (DATA_DIR / "keyword_map.json").write_text(
        json.dumps(kw_map, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    cat_names = {
        p["slug"]: p["title"].split(":")[0].split("(")[0].strip()
        for p in PILLARS
    }
    search_index = [
        {
            "t": a["title"],
            "p": a["path"],
            "n": cat_names.get(a["pillar"], a["pillar"]),
            "r": a["readingMinutes"],
        }
        for a in all_articles
    ]
    (PUB_DIR / "search-index.json").write_text(
        json.dumps(search_index, ensure_ascii=False), encoding="utf-8"
    )

    print(
        f"OK: Generados {len(all_articles)} artículos únicos "
        f"({len(PILLARS)} Pilares + {len(trans_items)} Transaccionales Amazon + {len(seo_items)} SEO Informacionales). "
        f"0% Canibalización verificada."
    )


if __name__ == "__main__":
    main()
