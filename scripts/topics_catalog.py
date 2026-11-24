#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Catálogo Maestro Ortogonal Sin Canibalización para PuertaSinLlave.com:
- 14 Hubs Pilares de Categoría (PILLARS)
- 520 Artículos Transaccionales de Afiliados Amazon (6 Silos: 115 + 105 + 90 + 80 + 65 + 65 = 520)
- 1,000 Artículos SEO Informacionales (8 Silos: 140 + 130 + 130 + 125 + 125 + 120 + 115 + 115 = 1,000)
Total = 1,534 páginas editoriales únicas con 0 solapamiento de intención, slug o primaryKeyword.
"""

PILLARS = [
    {
        "slug": "resenas-cerraduras-digitales",
        "title": "Reseñas de Cerraduras Digitales en Amazon EE. UU. (TEEHO, eufy Security, Schlage y Aqara)",
        "kw": "resenas de cerraduras digitales teeho y eufy amazon estados unidos",
        "focus": "análisis individuales por modelo exacto de cerraduras inteligentes TEEHO, eufy Security, Schlage, Aqara y SwitchBot en Amazon Estados Unidos, evaluando precio, medidas de puerta compatibles, acceso por código/huella/celular, códigos temporales de huéspedes y puente Wi-Fi",
        "subject": "an editorial entryway showcase featuring matte black and satin nickel smart door locks with backlit keypad and 3D fingerprint sensor next to a smartphone",
    },
    {
        "slug": "comparativas-cerraduras-digitales",
        "title": "Comparativas de Cerraduras Digitales: TEEHO vs eufy y Alternativas en Amazon EE. UU.",
        "kw": "comparativas cerraduras digitales teeho vs eufy amazon",
        "focus": "duelos directos Modelo A vs Modelo B y Marca A vs Marca B comparando precio en USD, grosor y backset compatible, huella frente a solo PIN, creación de códigos temporales de huéspedes y si incluyen Wi-Fi o exigen puente Gateway",
        "subject": "side-by-side comparison of two matte black and brushed nickel smart deadbolts resting on an oak architectural sample board in crisp daylight",
    },
    {
        "slug": "cerraduras-para-airbnb-y-alquiler-temporal",
        "title": "Cerraduras Digitales para Airbnb, Booking y Alquiler Temporal en Amazon EE. UU.",
        "kw": "cerraduras digitales para airbnb y alquiler temporal amazon",
        "focus": "rankings comerciales para anfitriones de Airbnb y alojamientos por noches: auto check-in sin llaves, generación de códigos por fechas/horas desde otra ciudad, sincronización por reserva y respaldo ante emergencias",
        "subject": "modern Airbnb apartment front door with a sleek Wi-Fi smart keypad lock illuminated beside a travel carry-on suitcase in warm natural light",
    },
    {
        "slug": "cerraduras-para-casas-y-departamentos",
        "title": "Cerraduras Digitales para Casas, Departamentos y Puertas de Madera o Metal",
        "kw": "cerraduras digitales para casas y departamentos amazon estados unidos",
        "focus": "guías de compra según tipo de vivienda y material de puerta: juegos completos handleset para entrada principal de casa, sistemas retrofit invisibles para departamentos alquilados, puertas de madera, aluminio o acero",
        "subject": "modern residential front door handleset with electronic fingerprint deadbolt installed on warm walnut wood in an inviting house porch",
    },
    {
        "slug": "cerraduras-por-precio-y-forma-de-acceso",
        "title": "Cerraduras Digitales por Precio y Forma de Acceso (Código, Huella, Celular y Cámara 2K)",
        "kw": "cerraduras digitales por precio codigo huella digital y celular amazon",
        "focus": "selecciones comerciales en Amazon EE. UU. organizadas por presupuesto (<US$45, <US$60, <US$100, <US$150 y gamas con cámara 2K) y por método principal de apertura",
        "subject": "trio of smart locks arranged by tier showing a simple keypad lock, a fingerprint deadbolt and a 2K video smart lock on a stone entryway console",
    },
    {
        "slug": "puentes-wifi-baterias-y-accesorios",
        "title": "Puentes Wi-Fi (Gateways), Pilas de Litio, Lockboxes y Accesorios Compatibles en Amazon",
        "kw": "puentes wifi gateway pilas y accesorios para cerraduras digitales amazon",
        "focus": "guías de compra de puentes Gateway Wi-Fi G2, eufy Bridge, Hubs Matter, pilas AA de litio recomendadas, cajas guardallaves de respaldo, placas de refuerzo y kits de sierras copa 54 mm",
        "subject": "smart lock accessories flat-lay featuring a compact Wi-Fi bridge plug, 8 lithium AA batteries, a wall key lockbox and a brass deadbolt strike plate",
    },
    {
        "slug": "como-medir-tu-puerta-y-compatibilidad",
        "title": "Cómo Medir tu Puerta Antes de Comprar una Cerradura Digital (Backset, Grosor y Orificio)",
        "kw": "como medir tu puerta backset grosor y orificio para cerradura digital",
        "focus": "métodos exactos paso a paso en milímetros y pulgadas para comprobar backset (60/70 mm), grosor (35–55 mm), orificio frontal de 54 mm, canto de 25 mm, orientación izquierda/derecha y diferencias entre deadbolt y mortise",
        "subject": "close-up macro photograph of hands measuring the 60mm backset distance from the edge of a wooden door to the center of the deadbolt bore with a steel tape measure",
    },
    {
        "slug": "codigos-temporales-y-gestion-de-huespedes",
        "title": "Códigos Temporales para Huéspedes, Limpieza y Uso Anti-Espía en Cerraduras Digitales",
        "kw": "como crear codigos temporales para huespedes en cerradura digital",
        "focus": "funcionamiento técnico de PIN de un solo uso offline (TEEHO), códigos programados por día y hora vía Wi-Fi (eufy/Schlage), códigos dinámicos anti-espía y registros de auditoría de entradas",
        "subject": "smartphone screen held near a smart keypad lock showing scheduled guest PIN windows beside a clean modern apartment hallway door",
    },
    {
        "slug": "control-desde-el-celular-wifi-y-puentes",
        "title": "Control desde el Celular, Redes Wi-Fi 2.4 GHz y Cuándo Hace Falta un Puente (Bridge)",
        "kw": "como funciona el control desde el celular wifi y puentes en cerraduras digitales",
        "focus": "arquitectura de conectividad remota: alcance real de Bluetooth vs Wi-Fi integrado vs Gateway Wi-Fi G2 enchufable, configuración en routers doble banda 2.4/5 GHz, Matter, Thread y consumo energético",
        "subject": "plugged-in compact white Wi-Fi gateway bridge in a hallway electrical outlet 3 meters away from a smart lock door in bright daylight",
    },
    {
        "slug": "formas-de-acceso-codigo-huella-y-llave",
        "title": "Formas de Acceso: Huella Digital 3D, Teclado Físico vs Táctil, Auto-Unlock y Llave Física",
        "kw": "formas de acceso huella digital codigo pin celular y llave de respaldo",
        "focus": "análisis funcional de sensores semiconductores biométricos, lectura en niños o adultos mayores, teclados retroiluminados bajo lluvia o sol, Apple HomeKey NFC y cilindros mecánicos de respaldo",
        "subject": "macro close-up of a thumb resting on a circular biometric fingerprint sensor mounted above a matte black digital keypad",
    },
    {
        "slug": "instalacion-paso-a-paso-y-ajustes-de-puerta",
        "title": "Instalación Paso a Paso de Cerraduras Digitales, Calibración y Ajuste del Marco",
        "kw": "como instalar una cerradura digital paso a paso y calibrar puerta",
        "focus": "procedimiento de montaje con destornillador manual, ajuste del pestillo telescópico de 60 a 70 mm, tendido del cable plano, calibración de apertura izquierda/derecha y alineación del recibidor sin rebote",
        "subject": "careful hands using a manual Phillips screwdriver to fasten the interior mounting plate of a smart deadbolt on a white painted door",
    },
    {
        "slug": "baterias-autonomia-y-emergencias-sin-energia",
        "title": "Baterías, Autonomía Real y Cómo Abrir por Puerto USB-C si la Cerradura Queda Sin Energía",
        "kw": "baterias autonomia y emergencia usb c en cerraduras digitales",
        "focus": "duración real de 4 u 8 pilas AA alcalinas frente a litio 1.5V o NiMH 1.2V, significado de alertas tempranas y protocolo seguro de alimentación de emergencia por USB-C o batería 9V desde el exterior",
        "subject": "hand connecting a compact portable powerbank via USB-C cable into the bottom emergency port of a digital door lock outside a home",
    },
    {
        "slug": "seguridad-fisica-certificaciones-y-clima",
        "title": "Seguridad Física, Normas ANSI/BHMA, Privacidad de Huellas y Protección Climática IP54/IP65",
        "kw": "seguridad fisica certificaciones ansi bhma y resistencia al clima cerraduras",
        "focus": "protección contra fuerza bruta, bloqueo tras intentos fallidos, almacenamiento local cifrado de huellas en chip interno, resistencia a lluvia/sol/salitre IP54 vs IP65 y modo bloqueo interior",
        "subject": "exterior matte black weather-resistant smart deadbolt beaded with fine raindrops under a residential porch awning",
    },
    {
        "slug": "solucion-de-problemas-y-compra-en-amazon",
        "title": "Solución de Fallas (Lock Jammed, Pitidos, Reset) y Guía de Compra en Amazon EE. UU.",
        "kw": "solucion de problemas lock jammed reset y compra en amazon estados unidos",
        "focus": "diagnóstico de atascos del pasador, códigos de pitidos, restablecimiento de fábrica, cambio de código maestro y consejos prácticos de acabados, aduanas y envíos internacionales en amazon.com",
        "subject": "neat entryway workbench with a newly delivered smart lock box, user manual, mechanical backup key and door alignment gauge",
    },
]


def generate_transactional_520():
    """
    Genera exactamente 520 artículos transaccionales únicos en 6 silos (115 + 105 + 90 + 80 + 65 + 65 = 520).
    Cada tupla:
    (slug, title, pillar, kw, price_spec, door_compat, access_spec, guest_codes, remote_acc, picks, subj)
    """
    items = []

    # =========================================================================
    # SILO 1: resenas-cerraduras-digitales (115 artículos)
    # =========================================================================
    silo1_flagships = [
        (
            "teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad",
            "TEEHO TE002 (Huella + Código PIN): Reseña, Medidas Compatibles y Precio en Amazon EE. UU.",
            "US$45 – US$59 en Amazon EE. UU.",
            "Backset 60/70 mm (2-3/8\" o 2-3/4\") · Grosor 35–50 mm · Orificio frontal 54 mm (o 38 mm)",
            "Huella biométrica 0.3s (20 huellas) + Código PIN anti-espía (20 códigos) + 2 llaves físicas",
            "Sí: crea códigos temporales de 1 solo uso directamente en el teclado (se borran al abrir)",
            "No requiere ni admite accesorios remotos (funciona 100 % local sin app ni Wi-Fi)",
            "TEEHO TE002 Fingerprint Lock y Pack Pilas Energizer Lithium AA",
            "matte black TEEHO style fingerprint keypad deadbolt lock mounted on a light oak house door",
        ),
        (
            "teeho-te001-cerradura-teclado-resena-medidas-y-codigos",
            "TEEHO TE001 (Solo Teclado PIN): Reseña Económica, Medidas de Puerta y Códigos Temporales",
            "US$32 – US$44 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–50 mm (1-3/8\" a 2\") · Orificio 54 mm y canto 25 mm",
            "Código PIN en teclado físico retroiluminado + 2 llaves de respaldo",
            "Sí: PIN de un solo uso offline programable en el teclado para visitas o limpieza",
            "Sin conectividad celular ni puente Wi-Fi: ideal cuando buscas máxima simplicidad económica",
            "TEEHO TE001 Keypad Deadbolt y Caja Guardallaves de Respaldo",
            "affordable brushed satin nickel electronic keypad deadbolt lock with physical rubber buttons on a white interior door",
        ),
        (
            "teeho-te002h-handleset-manillon-puerta-principal-resena",
            "TEEHO TE002H (Cerrojo Huella + Manillón Principal): Reseña, Medidas de Doble Hueco y Precio",
            "US$79 – US$99 en Amazon EE. UU.",
            "2 orificios estándar 54 mm · Backset 60/70 mm · Grosor 35–50 mm · Vástago inferior ajustable",
            "Huella digital 0.3s + Teclado PIN + Manillón inferior con picaporte + 2 llaves",
            "Sí: códigos de 1 solo uso en el propio teclado sin necesidad de smartphone",
            "Funcionamiento local autónomo (para Wi-Fi remoto elige eufy C220 o kit con Gateway)",
            "TEEHO TE002H Front Door Handleset completo",
            "complete matte black front door lock set with exterior handle grip and biometric keypad deadbolt on a mahogany door",
        ),
        (
            "eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas",
            "eufy Security Smart Lock C220 (Wi-Fi Integrado + Huella): Reseña, Airbnb y Medidas de Puerta",
            "US$119 – US$149 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–55 mm (1-3/8\" a 2-1/8\") · Orificio 54 mm o 38 mm",
            "Huella dactilar 3D + Código PIN + App eufy Wi-Fi + Alexa/Google + Llave física",
            "Sí (Avanzado): códigos temporales programados por fecha y hora exacta desde otro país",
            "Wi-Fi 2.4 GHz integrado de fábrica: NO requiere comprar bridge ni pagar cuotas",
            "eufy Smart Lock C220 Wi-Fi y Pack 8 Pilas Litio AA",
            "sleek matte black eufy style smart lock with circular top keypad and thumb fingerprint scanner on a contemporary gray apartment door",
        ),
        (
            "eufy-c210-smart-lock-wifi-economica-resena-y-compatibilidad",
            "eufy Security Smart Lock C210 (Wi-Fi Directo + Teclado): Reseña para Airbnb y Departamentos",
            "US$89 – US$109 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–55 mm · Orificio estándar 54 mm (2-1/8\")",
            "Teclado numérico táctil + App móvil Wi-Fi + Control por voz + Llaves físicas",
            "Sí: crea hasta 100 códigos por rango de fechas, horas y días recurrentes vía app",
            "Wi-Fi integrado sin puente externo ni suscripción mensual",
            "eufy Smart Lock C210 Built-in Wi-Fi",
            "minimalist touch keypad Wi-Fi deadbolt installed on a modern bright apartment hallway door",
        ),
        (
            "eufy-e330-video-smart-lock-camara-2k-resena-completa",
            "eufy Video Smart Lock E330 / S330 (Cámara 2K + Huella + Timbre): Reseña, Medidas y Chime",
            "US$199 – US$279 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–55 mm · Requiere 22 mm libres sobre el orificio y no chocar con reja",
            "Cámara 2K HD + Timbre + Huella 0.3s + Teclado PIN + App remota + Llave",
            "Sí: gestión remota completa de códigos por horarios para huéspedes y repartidores",
            "Incluye el Chime Wi-Fi en la caja (actúa como puente y guarda video local sin cuotas)",
            "eufy Video Smart Lock E330 y Batería Extra 10,000 mAh",
            "all-in-one video smart door lock with upper wide-angle camera lens, doorbell button and biometric keypad on a house entryway",
        ),
        (
            "schlage-encode-smart-wifi-resena-airbnb-y-medidas",
            "Schlage Encode Smart Wi-Fi Deadbolt: Reseña Profesional, Sincronización Airbnb y Grado 1",
            "US$249 – US$319 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–45 mm (1-3/8\" a 1-3/4\") · Orificio 54 mm",
            "Teclado táctil anti-huellas + App Schlage Home + Integración Airbnb + Llave física",
            "Sí (Automático): crea y borra PIN único por cada reserva confirmada de Airbnb",
            "Wi-Fi integrado directo (no necesita bridge ni accesorio adicional)",
            "Schlage Encode Smart Wi-Fi Deadbolt",
            "premium satin nickel touch keypad deadbolt installed on an upscale home front entrance door",
        ),
        (
            "switchbot-lock-pro-retrofit-departamento-alquilado-resena",
            "SwitchBot Lock Pro (Sin Cambiar Llave Exterior): Reseña para Departamentos y Multipunto",
            "US$119 – US$179 (Combo con Hub Mini y Keypad Touch)",
            "Universal por dentro sobre cilindro europeo, suizo o cerrojo americano sin perforar exterior",
            "Celular Bluetooth/Wi-Fi + Tu llave actual (+ Huella/PIN con Keypad Touch externo)",
            "Sí: combinando el SwitchBot Keypad Touch + Hub Mini creas códigos temporales a distancia",
            "Requiere SwitchBot Hub Mini o Hub 2 enchufado dentro del depa para control remoto",
            "SwitchBot Lock Pro + Hub Mini + Keypad Touch",
            "compact black motorized smart lock retrofit unit mounted cleanly on the interior side of an apartment door over the existing lock cylinder",
        ),
        (
            "aqara-u100-apple-homekey-resena-medidas-y-hub",
            "Aqara Smart Lock U100 (Apple HomeKey + Huella): Reseña, Medidas y Requisito de Hub M2/M3",
            "US$159 – US$189 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm · Cuerpo IP65",
            "Apple HomeKey (iPhone/Watch) + Huella + Código PIN + NFC + USB-C + Llave",
            "Sí: códigos offline periódicos y gestión remota añadiendo Hub Aqara M2/M3",
            "Requiere Aqara Hub M2/M3 (o Apple TV/HomePod) para apertura y códigos a distancia",
            "Aqara Smart Lock U100 y Aqara Hub M3 Matter",
            "sleek shadow gray smart deadbolt lock responding to a smartwatch tap on an upscale apartment wood door",
        ),
        (
            "eufy-c33-manija-biometrica-wifi-resena-un-orificio",
            "eufy Security Smart Lever Lock C33 / C30 (Con Manija): Reseña para Puertas de 1 Hueco",
            "US$119 – US$159 en Amazon EE. UU.",
            "1 solo orificio frontal 54 mm · Backset 60/70 mm · Grosor 35–55 mm",
            "Huella integrada en la manija + Código PIN + App Wi-Fi + Llave física",
            "Sí: códigos temporales programables desde el celular para oficinas, cuartos o Airbnb",
            "Wi-Fi integrado sin bridge externo",
            "eufy Smart Lever Lock C33",
            "modern smart door lever handle with thumb fingerprint sensor and keypad mounted on a sleek home office wood door",
        ),
    ]
    for it in silo1_flagships:
        items.append((it[0], it[1], "resenas-cerraduras-digitales", it[0].replace("-", " "), *it[2:]))

    # Completar Silo 1 hasta 115 reseñas concretas por modelo/acabado/escenario
    s1_models = [
        ("TEEHO TE001", "teeho-te001", "US$32–$44", "Backset 60/70 mm · 35–50 mm", "Código PIN + Llave", "1 uso en teclado", "Sin Wi-Fi (100% local)"),
        ("TEEHO TE002", "teeho-te002", "US$45–$59", "Backset 60/70 mm · 35–50 mm", "Huella 0.3s + PIN + Llave", "1 uso en teclado", "Sin Wi-Fi (100% local)"),
        ("TEEHO TE002H Handleset", "teeho-te002h", "US$79–$99", "Doble hueco 54 mm · 35–50 mm", "Huella + PIN + Manillón", "1 uso en teclado", "Sin Wi-Fi (100% local)"),
        ("TEEHO TE001H Handleset", "teeho-te001h", "US$69–$85", "Doble hueco 54 mm · 35–50 mm", "PIN + Manillón + Llave", "1 uso en teclado", "Sin Wi-Fi (100% local)"),
        ("TEEHO TE003", "teeho-te003", "US$42–$55", "Backset 60/70 mm · 35–50 mm", "Huella + Teclado Cuadrado", "1 uso offline", "Sin Wi-Fi (local)"),
        ("TEEHO TE004 / TE011 App", "teeho-te004-app", "US$65–$89", "Backset 60/70 mm · 35–50 mm", "Huella + PIN + App BLE", "Por fechas (con Gateway)", "Requiere Gateway Wi-Fi G2"),
        ("TEEHO TE006 Manija", "teeho-te006-manija", "US$59–$79", "1 orificio 54 mm · 35–50 mm", "Huella + PIN en manija", "1 uso offline", "Sin Wi-Fi o BLE según versión"),
        ("eufy Smart Lock C210", "eufy-c210", "US$89–$109", "Backset 60/70 mm · 35–55 mm", "PIN Táctil + App Wi-Fi", "Por fecha y hora remota", "Wi-Fi integrado sin bridge"),
        ("eufy Smart Lock C220", "eufy-c220", "US$119–$149", "Backset 60/70 mm · 35–55 mm", "Huella + PIN + App Wi-Fi", "Por fecha y hora remota", "Wi-Fi integrado sin bridge"),
        ("eufy Smart Lock C30", "eufy-c30", "US$99–$129", "1 orificio 54 mm · 35–55 mm", "Manija + PIN + Wi-Fi", "Por fecha y hora remota", "Wi-Fi integrado sin bridge"),
        ("eufy Smart Lock C33", "eufy-c33", "US$119–$159", "1 orificio 54 mm · 35–55 mm", "Manija Huella + PIN + Wi-Fi", "Por fecha y hora remota", "Wi-Fi integrado sin bridge"),
        ("eufy Video Lock E330", "eufy-e330", "US$199–$259", "Backset 60/70 mm · 35–55 mm", "Cámara 2K + Huella + App", "Por fecha y hora remota", "Incluye Chime Wi-Fi en caja"),
        ("eufy Video Lock S330", "eufy-s330", "US$239–$289", "Backset 60/70 mm · 35–55 mm", "Cámara 2K + Huella + Timbre", "Por fecha y hora remota", "Incluye Chime Wi-Fi en caja"),
        ("eufy Touch & Wi-Fi T8520", "eufy-t8520", "US$159–$189", "Backset 60/70 mm · 35–55 mm", "Huella + PIN + Wi-Fi", "Por fecha y hora remota", "Wi-Fi integrado + 10,000 mAh"),
        ("eufy FamiLock", "eufy-familock", "US$249–$329", "Backset 60/70 mm · 35–55 mm", "Vena Palma + Cámara + Matter", "Por fecha y hora remota", "Wi-Fi + Matter integrado"),
        ("Schlage Encode Plus", "schlage-encode-plus", "US$279–$329", "Backset 60/70 mm · 35–45 mm", "Apple HomeKey + PIN + Wi-Fi", "Sincronización Airbnb", "Wi-Fi integrado sin bridge"),
        ("Yale Assure Lock 2 Wi-Fi", "yale-assure-lock-2", "US$219–$269", "Backset 60/70 mm · 35–57 mm", "Huella/PIN + Wi-Fi/Matter", "Por fechas en Yale Access", "Módulo Wi-Fi incluido o Bridge"),
        ("Ultraloq U-Bolt Pro WiFi", "ultraloq-ubolt-pro", "US$149–$179", "Backset 60/70 mm · 35–50 mm", "Huella + PIN + Auto-Unlock", "Por horas/días en App", "Wi-Fi integrado sin bridge"),
        ("Kwikset Halo Wi-Fi", "kwikset-halo-wifi", "US$189–$239", "Backset 60/70 mm · 35–57 mm", "Huella/PIN + SmartKey + Wi-Fi", "Hasta 250 códigos por horario", "Wi-Fi integrado sin bridge"),
        ("August Wi-Fi 4th Gen", "august-wifi-4th-gen", "US$179–$219", "Solo interior sobre deadbolt", "App Celular + Auto-Unlock", "Con Keypad adicional", "Wi-Fi integrado (sin puente)"),
        ("SwitchBot Lock Pro", "switchbot-lock-pro", "US$119–$179", "Universal sobre cilindro actual", "App + Tu llave (+ Keypad)", "Con Keypad + Hub Mini", "Requiere Hub Mini / Hub 2"),
    ]
    s1_angles = [
        ("acabado-matte-black-negro-mate", "en acabado Negro Mate (Matte Black): estética, desgaste de teclas y compatibilidad"),
        ("acabado-satin-nickel-niquel-satinado", "en acabado Níquel Satinado / Bronce: para qué puertas conviene y medidas"),
        ("para-puerta-principal-casa-exterior", "para puerta principal de casa exterior: clima, medidas y respaldo de energía"),
        ("para-departamento-y-condominio", "para puerta de departamento: ruido del motor, compatibilidad y control de acceso"),
        ("para-anfitriones-airbnb-y-huespedes", "para alquiler temporal Airbnb: cómo gestiona códigos de huéspedes y control remoto"),
    ]
    idx_m = 0
    while len(items) < 115:
        m_name, m_slug, pr, dc, ac, gc, rem = s1_models[idx_m % len(s1_models)]
        a_slug, a_txt = s1_angles[(idx_m // len(s1_models)) % len(s1_angles)]
        slug = f"resena-{m_slug}-{a_slug}"
        title = f"{m_name} {a_txt}"
        kw = f"{m_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
        subj = f"realistic close-up of a {m_name} smart lock {a_slug.replace('-', ' ')} installed on a modern entryway door"
        items.append((slug, title, "resenas-cerraduras-digitales", kw, pr, dc, ac, gc, rem, f"{m_name} en Amazon EE. UU.", subj))
        idx_m += 1

    # =========================================================================
    # SILO 2: comparativas-cerraduras-digitales (105 artículos)
    # =========================================================================
    silo2_core = [
        (
            "teeho-vs-eufy-cual-cerradura-digital-elegir-casa-departamento-airbnb",
            "TEEHO vs eufy Security: cuál cerradura digital elegir para casa, departamento o Airbnb",
            "TEEHO US$32–$99 vs eufy US$89–$279",
            "Ambas ajustan a backset 60/70 mm y orificio 54 mm (eufy sube hasta 55 mm de grosor)",
            "TEEHO prioriza teclado/huella local; eufy suma Wi-Fi integrado y cámara 2K",
            "TEEHO: 1 uso en teclado; eufy: códigos por fechas desde otra ciudad",
            "TEEHO local sin internet vs eufy Wi-Fi integrado (sin puente extra)",
            "eufy Smart Lock C220 vs TEEHO TE002",
        ),
        (
            "teeho-te001-vs-teeho-te002-diferencias-y-cual-conviene",
            "TEEHO TE001 vs TEEHO TE002: diferencias reales entre solo código y huella digital",
            "TE001 (US$32–$44) vs TE002 (US$45–$59)",
            "Idénticas en medidas: backset 60/70 mm, grosor 35–50 mm, orificio 54 mm",
            "TE001 solo PIN + llave; TE002 añade sensor de huella 0.3s en el frontal",
            "Ambas crean PIN temporal de 1 uso offline en el teclado",
            "Ninguna trae Wi-Fi ni app remota",
            "TEEHO TE002 vs TEEHO TE001",
        ),
        (
            "teeho-te002-vs-eufy-c220-comparativa-huella-wifi-y-precio",
            "TEEHO TE002 vs eufy Smart Lock C220: ¿vale la pena pagar el doble por Wi-Fi integrado?",
            "TE002 (~US$49) vs eufy C220 (~US$139)",
            "Ambas caben en 60/70 mm y 54 mm; C220 admite puertas algo más gruesas (55 mm)",
            "Ambas tienen huella 0.3s + código PIN; C220 añade app Wi-Fi y Alexa",
            "TE002 solo 1 uso junto a la puerta; C220 crea códigos desde cualquier país",
            "TE002 es offline; C220 incluye Wi-Fi 2.4 GHz sin puente extra",
            "eufy C220 vs TEEHO TE002",
        ),
        (
            "eufy-c210-vs-eufy-c220-diferencias-huella-bateria-y-airbnb",
            "eufy C210 vs eufy C220: comparativa para elegir entre teclado táctil o huella + teclado",
            "C210 (US$89–$109) vs C220 (US$119–$149)",
            "Mismas medidas (60/70 mm, grosor 35–55 mm, orificio 54/38 mm)",
            "C210 solo PIN + Wi-Fi; C220 añade lector biométrico de huella de 0.3s",
            "Idéntica app para códigos de huéspedes por fecha y hora en Airbnb",
            "Ambas llevan Wi-Fi integrado sin bridge",
            "eufy C220 vs eufy C210",
        ),
        (
            "eufy-c220-vs-schlage-encode-cual-es-mejor-para-airbnb",
            "eufy C220 vs Schlage Encode: cuál conviene más para anfitriones de Airbnb en Amazon",
            "eufy C220 (~US$139) vs Schlage Encode (~US$279)",
            "C220 acepta hasta 55 mm; Schlage Encode hasta 45 mm (1-3/4\") en estándar BHMA Grado 1",
            "C220 suma huella + teclado; Schlage Encode es código táctil + integración directa Airbnb",
            "Ambas permiten códigos remotos; Schlage automatiza según calendario de reservas Airbnb",
            "Ninguna requiere puente Wi-Fi externo",
            "Schlage Encode vs eufy C220",
        ),
        (
            "eufy-video-lock-e330-vs-s330-diferencias-camara-chime-y-precio",
            "eufy Video Smart Lock E330 vs S330: diferencias en cámara 2K, Chime Wi-Fi y batería",
            "E330 (US$199–$249) vs S330 (US$239–$279)",
            "Misma plantilla de puerta 60/70 mm y grosor 35–55 mm",
            "Ambas combinan cámara 2K + timbre + huella + PIN + app",
            "Códigos temporales remotos en app sin suscripción mensual",
            "Ambas traen Chime Wi-Fi incluido en la caja",
            "eufy E330 vs S330",
        ),
    ]
    for it in silo2_core:
        items.append((it[0], it[1], "comparativas-cerraduras-digitales", it[0].replace("-", " "), *it[2:], f"side by side comparison studio photo of {it[0].replace('-', ' ')}"))

    duel_pairs = [
        ("TEEHO TE002", "eufy C210", "US$49 vs US$99", "60/70 mm · 35–50/55 mm", "Huella local vs PIN con Wi-Fi", "1 uso vs fechas en app", "Offline vs Wi-Fi integrado"),
        ("TEEHO TE002H", "eufy E330", "US$89 vs US$229", "Doble orificio vs Cerrojo 2K", "Manillón+Huella vs Cámara 2K", "Local vs remoto", "Offline vs Chime Wi-Fi"),
        ("TEEHO TE004 Bluetooth", "eufy C220", "US$79 (+$25 G2) vs US$139", "60/70 mm · 35–50/55 mm", "App + Gateway vs Wi-Fi nativo", "Por fechas (con G2) vs nativo", "Requiere G2 vs integrado"),
        ("eufy C220", "Aqara U100", "US$139 vs US$179", "60/70 mm · 35–55 mm", "Wi-Fi directo vs Apple HomeKey", "Nativo app vs requiere Hub M2/M3", "Sin bridge vs requiere Hub"),
        ("eufy C220", "Ultraloq U-Bolt Pro WiFi", "US$139 vs US$169", "35–55 mm vs 35–50 mm", "App eufy vs Auto-Unlock + Sensor", "Por horarios en ambas", "Wi-Fi integrado en ambas"),
        ("eufy C33 Manija", "TEEHO TE006 Manija", "US$139 vs US$69", "1 orificio 54 mm", "Manija Wi-Fi vs Manija local", "Remotos vs 1 uso teclado", "Integrado vs local/BLE"),
        ("SwitchBot Lock Pro", "eufy C220", "US$139 vs US$139", "Retrofit cilindro vs Deadbolt", "Sin cambiar llave vs reemplazo", "Con Keypad+Hub vs integrado", "Requiere Hub vs Wi-Fi directo"),
        ("SwitchBot Lock Pro", "August Wi-Fi 4th Gen", "US$139 vs US$199", "Europeo/Multipunto vs Deadbolt US", "Motor interno sobre llave", "Con Keypad accesorio", "Hub Mini vs Wi-Fi interno"),
        ("TEEHO TE001", "Kwikset SmartCode 260", "US$39 vs US$99", "60/70 mm · 35–50 mm", "PIN económico vs SmartKey", "1 uso en teclado", "Locales sin Wi-Fi"),
        ("eufy C210", "Schlage Encode", "US$99 vs US$279", "35–55 mm vs 35–45 mm", "PIN Wi-Fi vs Airbnb Nativo Grado 1", "App eufy vs sincronización Airbnb", "Wi-Fi integrado en ambas"),
        ("TEEHO TE002", "Aqara U100", "US$49 vs US$179", "35–50 mm vs 35–55 mm", "Huella simple vs HomeKey+Zigbee", "Local vs Hub M2/M3", "Sin app vs Hub/Apple TV"),
        ("eufy E330", "Yale Assure Lock 2 Wi-Fi", "US$229 vs US$249", "35–55 mm vs 35–57 mm", "Cámara 2K integrada vs Compacta", "Remotos por fechas", "Chime incluido vs módulo"),
        ("TEEHO TE002", "TEEHO TE003", "US$49 vs US$48", "60/70 mm · 35–50 mm", "Diseño vertical vs cuadrado", "1 uso offline", "100 % locales"),
        ("eufy C220", "eufy Touch T8520", "US$139 vs US$179", "8 AA vs 10,000 mAh recargable", "Huella + PIN + Wi-Fi", "Por fechas en app eufy", "Wi-Fi integrado en ambas"),
        ("eufy C220", "Kwikset Halo Wi-Fi", "US$139 vs US$219", "35–55 mm vs 35–57 mm", "Huella + eufy vs SmartKey + Halo", "100 vs 250 códigos", "Wi-Fi integrado en ambas"),
    ]
    duel_contexts = [
        ("para-casa-principal", "para puerta principal de casa"),
        ("para-departamento-moderno", "para departamento en edificio"),
        ("para-airbnb-alquiler-temporal", "para alquiler temporal y Airbnb"),
        ("precio-calidad-y-bateria", "en precio, autonomía de pilas y durabilidad"),
        ("medidas-y-facilidad-instalacion", "en compatibilidad de medidas e instalación"),
        ("seguridad-y-codigos-huespedes", "en seguridad física y códigos de huéspedes"),
        ("control-desde-el-celular-wifi", "en control desde el celular y necesidad de puente"),
    ]
    d_idx = 0
    while len(items) < 115 + 105:
        a, b, pr, dc, ac, gc, rem = duel_pairs[d_idx % len(duel_pairs)]
        c_slug, c_txt = duel_contexts[(d_idx // len(duel_pairs)) % len(duel_contexts)]
        raw_slug = f"{a}-vs-{b}-{c_slug}".lower().replace("+", "").replace(" ", "-")
        slug = "-".join(filter(None, raw_slug.split("-")))
        title = f"{a} vs {b} {c_txt}: comparativa completa"
        kw = f"{a.lower()} vs {b.lower()} {c_slug.replace('-', ' ')}"
        items.append((slug, title, "comparativas-cerraduras-digitales", kw, pr, dc, ac, gc, rem, f"{a} vs {b}", f"comparison between {a} and {b} smart locks on a residential doorframe"))
        d_idx += 1

    # =========================================================================
    # SILO 3: cerraduras-para-airbnb-y-alquiler-temporal (90 artículos)
    # =========================================================================
    s3_core = [
        (
            "mejores-cerraduras-digitales-para-airbnb-y-alquiler-temporal-amazon",
            "Las Mejores Cerraduras Digitales para Airbnb y Alquiler Temporal en Amazon EE. UU.",
            "US$89 – US$289 según nivel de automatización",
            "Estándar americano 60/70 mm (35–55 mm) o Retrofit sin perforar exterior",
            "PIN remoto + huella o sincronización automática de reservas",
            "Programación por fecha y hora exacta de check-in y check-out",
            "Prioriza eufy C210/C220 o Schlage Encode con Wi-Fi integrado sin puente",
            "eufy C220, Schlage Encode y eufy C210",
        ),
        (
            "mejores-cerraduras-airbnb-con-wifi-sin-bridge-ni-suscripcion",
            "Mejores Cerraduras para Airbnb con Wi-Fi Integrado (Sin Bridge ni Cuotas Mensuales)",
            "US$89 – US$159 en Amazon EE. UU.",
            "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm",
            "Código PIN en teclado + apertura desde app en otra ciudad",
            "Códigos temporales recurrentes o por fecha exacta en la app",
            "Cero accesorios extra: Wi-Fi 2.4 GHz directo al router del alojamiento",
            "eufy Smart Lock C210 y eufy Smart Lock C220",
        ),
        (
            "mejores-cerraduras-economicas-airbnb-habitaciones-coliving",
            "Mejores Cerraduras Económicas (<US$60) para Habitaciones, Hostales y Coliving",
            "US$35 – US$59 por puerta en Amazon",
            "1 orificio estándar o deadbolt de 35–50 mm",
            "Código PIN físico o huella sin depender del Wi-Fi del huésped",
            "Hasta 20 códigos individuales o PIN de 1 solo uso por rotación",
            "100 % offline o con Gateway G2 si son puertas Bluetooth en pasillo",
            "TEEHO TE001 y TEEHO TE002",
        ),
    ]
    for it in s3_core:
        items.append((it[0], it[1], "cerraduras-para-airbnb-y-alquiler-temporal", it[0].replace("-", " "), *it[2:], "Airbnb vacation rental apartment entrance with smart Wi-Fi keypad deadbolt beside guest luggage"))

    s3_scenarios = [
        ("auto-check-in-sin-entregar-llaves", "para auto check-in nocturno sin entregar llaves", "eufy C220 / Schlage Encode", "US$119–$279", "Wi-Fi integrado sin bridge"),
        ("gestion-remota-desde-otra-ciudad", "para administrar tu Airbnb desde otra ciudad o país", "eufy C210 / eufy C220", "US$89–$149", "Wi-Fi integrado directo"),
        ("casas-de-playa-humedad-y-salitre", "resistentes a humedad y salitre en casas de playa", "Aqara U100 / Ultraloq U-Bolt Pro", "US$149–$189", "IP65 + Wi-Fi/Hub"),
        ("cabanas-en-montana-frio-extremo", "para cabañas de montaña y clima frío con pilas de litio", "Schlage Encode / TEEHO TE002", "US$49–$279", "Pilas Energizer Lithium AA"),
        ("edificios-turisticos-que-no-dejan-cambiar-cerradura", "para edificios que prohíben cambiar la cerradura exterior", "SwitchBot Lock Pro + Keypad", "US$139–$179", "Retrofit + Hub Mini"),
        ("alquiler-por-cuartos-y-estudiantes", "para pisos compartidos, cuartos y alquiler por meses", "TEEHO TE002 / eufy C33", "US$49–$149", "Local o Wi-Fi en manija"),
        ("control-de-personal-de-limpieza", "para controlar horarios exactos de limpieza y mantenimiento", "eufy C220 / C210", "US$89–$149", "Códigos cíclicos por horario"),
        ("puerta-con-reja-o-acceso-doble", "para propiedades con reja exterior o doble puerta de entrada", "eufy C210 / Lockbox respaldo", "US$89–$129", "Wi-Fi directo + Lockbox"),
        ("videovigilancia-de-llegadas-huespedes", "con cámara 2K para verificar llegada de huéspedes sin invadir", "eufy Video Smart Lock E330", "US$199–$259", "Chime Wi-Fi incluido"),
        ("anfitriones-con-varios-departamentos", "para gestionar múltiples departamentos desde una sola app", "Schlage Encode / eufy C220", "US$119–$289", "App multi-propiedad sin cuotas"),
    ]
    s3_modifiers = [
        ("en-amazon-estados-unidos", "en Amazon Estados Unidos"),
        ("sin-pagar-mensualidad", "sin pagar suscripciones mensuales"),
        ("faciles-de-medir-e-instalar", "fáciles de medir e instalar en 15 minutos"),
        ("con-codigos-de-fecha-y-hora", "con códigos programados por fecha y hora"),
        ("con-respaldo-usb-c-y-llave", "con respaldo USB-C y llave de emergencia"),
        ("calidad-precio-recomendadas", "con mejor relación calidad-precio"),
        ("para-huespedes-internacionales", "para huéspedes sin descargar ninguna app"),
        ("compatibles-con-alexa-y-booking", "compatibles con reservas Booking y Alexa"),
        ("para-puertas-madera-y-metal", "compatibles con puertas estándar de madera y metal"),
    ]
    s3_idx = 0
    while len(items) < 115 + 105 + 90:
        sc_slug, sc_txt, pick, pr, rem = s3_scenarios[s3_idx % len(s3_scenarios)]
        m_slug, m_txt = s3_modifiers[(s3_idx // len(s3_scenarios)) % len(s3_modifiers)]
        slug = f"cerraduras-airbnb-{sc_slug}-{m_slug}"
        title = f"Cerraduras digitales {sc_txt} {m_txt}"
        kw = f"cerradura airbnb {sc_slug.replace('-', ' ')} {m_slug.replace('-', ' ')}"
        items.append((
            slug, title, "cerraduras-para-airbnb-y-alquiler-temporal", kw,
            pr, "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm",
            "Código PIN + App remota / Huella según modelo",
            "Códigos temporales automáticos o por fechas sin entregar llaves",
            rem, pick,
            f"smart keypad door lock for vacation rental {sc_slug.replace('-', ' ')} in natural daylight",
        ))
        s3_idx += 1

    # =========================================================================
    # SILO 4: cerraduras-para-casas-y-departamentos (80 artículos)
    # =========================================================================
    s4_types = [
        ("puerta-principal-de-casa-madera", "para puerta principal de madera en casa unifamiliar", "TEEHO TE002H / eufy E330", "US$89–$249", "Backset 60/70 mm · 35–55 mm"),
        ("departamento-propio-edificio", "para puerta principal de departamento propio", "eufy C220 / TEEHO TE002", "US$49–$149", "Backset 60/70 mm · 35–55 mm"),
        ("departamento-alquilado-sin-taladrar", "para departamento alquilado sin dañar ni cambiar cerradura", "SwitchBot Lock Pro / August Wi-Fi", "US$119–$219", "Retrofit sobre cilindro interior"),
        ("puerta-metalica-o-blindada", "para puertas metálicas, blindadas o con marco de acero", "SwitchBot Lock Pro / eufy C220 (verificar grosor)", "US$119–$189", "Verificar aislación y grosor ≤55 mm"),
        ("puerta-interior-oficina-estudio", "para puerta interior de oficina, consultorio o estudio", "eufy C33 Manija / TEEHO TE006", "US$59–$149", "1 orificio de 54 mm (manija)"),
        ("puerta-entre-garaje-y-casa", "para puerta de acceso entre garaje/cochera y casa", "TEEHO TE001 / eufy C33", "US$39–$139", "Auto-Lock de 10–30 segundos"),
        ("puerta-aluminio-con-perfil-estrecho", "para puertas de aluminio o vidrio con marco angosto", "SwitchBot Lock Pro / Cerradura perfil fino", "US$119–$179", "Comprobar espacio backset <45 mm"),
        ("puerta-con-manija-inferior-existente", "para puertas con cerrojo arriba y manija abajo", "TEEHO TE002 / eufy C220 / TE002H", "US$45–$149", "Mínimo 140 mm entre ambos centros"),
    ]
    s4_features = [
        ("con-huella-dactilar-rapida", "con huella dactilar rápida para familia y niños"),
        ("con-wifi-y-control-celular", "con Wi-Fi integrado y alertas al celular"),
        ("economicas-sin-cuotas-mensuales", "económicas y sin mensualidades en Amazon"),
        ("con-camara-y-timbre-integrado", "con videoportero 2K integrado"),
        ("resistentes-al-sol-y-lluvia", "resistentes a lluvia exterior y sol directo"),
        ("silenciosas-y-cierre-automatico", "con cierre automático silencioso al entrar"),
        ("para-adultos-mayores-y-familias", "fáciles de usar para adultos mayores y familias"),
        ("compatibles-con-backset-60-y-70-mm", "compatibles con medidas estándar 60 y 70 mm"),
        ("con-llave-fisica-y-puerto-usb-c", "con llave física de seguridad y puerto USB-C"),
        ("con-manillon-completo-juego", "en kit completo con manija o manillón a juego"),
    ]
    s4_idx = 0
    while len(items) < 115 + 105 + 90 + 80:
        t_slug, t_txt, pick, pr, dc = s4_types[s4_idx % len(s4_types)]
        f_slug, f_txt = s4_features[(s4_idx // len(s4_types)) % len(s4_features)]
        slug = f"cerraduras-{t_slug}-{f_slug}"
        title = f"Mejores cerraduras digitales {t_txt} {f_txt}"
        kw = f"cerraduras {t_slug.replace('-', ' ')} {f_slug.replace('-', ' ')}"
        items.append((
            slug, title, "cerraduras-para-casas-y-departamentos", kw,
            pr, dc, "Huella digital, Código PIN, Celular Wi-Fi o Llave según versión",
            "Códigos de 1 uso o programados por horario para visitas y servicio",
            "Wi-Fi integrado en eufy/Schlage o local en TEEHO TE001/TE002",
            pick,
            f"smart door lock installed {t_slug.replace('-', ' ')} {f_slug.replace('-', ' ')}",
        ))
        s4_idx += 1

    # =========================================================================
    # SILO 5: cerraduras-por-precio-y-forma-de-acceso (65 artículos)
    # =========================================================================
    s5_budgets = [
        ("menos-de-45-dolares", "por menos de US$45 en Amazon EE. UU.", "TEEHO TE001", "US$32–$44", "Código PIN + Llave", "1 uso local", "Sin Wi-Fi"),
        ("menos-de-60-dolares", "por menos de US$60 con huella digital en Amazon", "TEEHO TE002 / TE003", "US$45–$59", "Huella 0.3s + Código PIN", "1 uso local", "Sin Wi-Fi"),
        ("entre-80-y-110-dolares", "entre US$80 y US$110 con Wi-Fi o manillón", "eufy C210 / TEEHO TE002H", "US$80–$109", "PIN Wi-Fi o Huella+Manillón", "Por fechas (eufy) / 1 uso", "Wi-Fi directo en eufy C210"),
        ("entre-120-y-160-dolares", "entre US$120 y US$160 calidad-precio total", "eufy C220 / Ultraloq U-Bolt Pro", "US$119–$159", "Huella + PIN + App Wi-Fi", "Por fecha y hora remota", "Wi-Fi integrado sin bridge"),
        ("gama-alta-con-camara-o-homekey", "gama premium con cámara 2K o Apple HomeKey", "eufy E330 / Schlage Encode / Aqara U100", "US$179–$299", "Cámara 2K / HomeKey / Huella", "Automáticos y remotos", "Chime / Wi-Fi / Hub M3"),
    ]
    s5_access = [
        ("solo-codigo-pin-numerico", "de solo código numérico PIN (sin huella ni app)"),
        ("con-huella-digital-biometrica", "con lector biométrico de huella dactilar"),
        ("controladas-desde-el-celular-iphone-android", "controladas desde el celular (iOS y Android)"),
        ("compatibles-con-alexa-y-google-home", "compatibles con Alexa y Google Assistant"),
        ("compatibles-con-apple-homekit-homekey", "compatibles con Apple HomeKit y HomeKey"),
        ("con-desbloqueo-automatico-auto-lock", "con bloqueo y desbloqueo automático inteligente"),
        ("con-teclado-fisico-retroiluminado", "con botones físicos retroiluminados para lluvia"),
        ("con-pantalla-tactil-anti-huellas", "con teclado táctil de vidrio templado"),
        ("con-codigo-anti-espia-virtual", "con protección de dígitos aleatorios anti-espía"),
        ("con-sensor-de-puerta-abierta", "con aviso si la puerta quedó mal cerrada"),
        ("sin-internet-100-por-ciento-offline", "100 % offline sin depender de internet ni nube"),
        ("con-llave-fisica-re-amaestrable", "con cilindro mecánico de respaldo compatible"),
        ("con-puerto-usb-c-emergencia", "con puerto USB-C exterior para batería agotada"),
    ]
    s5_idx = 0
    while len(items) < 115 + 105 + 90 + 80 + 65:
        b_slug, b_txt, pick, pr, ac, gc, rem = s5_budgets[s5_idx % len(s5_budgets)]
        a_slug, a_txt = s5_access[(s5_idx // len(s5_budgets)) % len(s5_access)]
        slug = f"mejores-cerraduras-{a_slug}-{b_slug}"
        title = f"Mejores cerraduras digitales {a_txt} {b_txt}"
        kw = f"mejores cerraduras {a_slug.replace('-', ' ')} {b_slug.replace('-', ' ')}"
        items.append((
            slug, title, "cerraduras-por-precio-y-forma-de-acceso", kw,
            pr, "Backset 60/70 mm · Grosor 35–55 mm · Orificio 54 mm",
            ac, gc, rem, pick,
            f"smart door lock selection highlighting {a_slug.replace('-', ' ')} feature on modern entry door",
        ))
        s5_idx += 1

    # =========================================================================
    # SILO 6: puentes-wifi-baterias-y-accesorios (65 artículos)
    # =========================================================================
    s6_acc = [
        ("gateway-wifi-g2-ttlock-tuya", "Puente Gateway Wi-Fi G2 para cerraduras Bluetooth", "US$22–$35", "Se enchufa a ≤5 m de la puerta (red 2.4 GHz)", "Habilita apertura por app y Alexa", "Activa códigos por fechas remotos", "Es el puente remoto para modelos BLE"),
        ("eufy-wifi-bridge-y-chime", "eufy Wi-Fi Bridge y Chime adicional para casa o Airbnb", "US$29–$49", "Toma de corriente interior cerca de la entrada", "Amplía alertas y timbre interior", "Sincronización remota en app", "Incluido en E330; opcional en modelos BLE"),
        ("aqara-hub-m2-y-m3-matter", "Aqara Hub M2 y Hub M3 Matter para Aqara U100/U50", "US$49–$129", "Conexión USB/PoE a ≤8 m de la cerradura", "Conecta Zigbee/Thread con internet", "Permite códigos temporales remotos", "Puente obligatorio para U100 a distancia"),
        ("switchbot-hub-mini-y-keypad-touch", "SwitchBot Hub Mini Matter y Keypad Touch exterior", "US$39–$79", "Hub en enchufe + Keypad adhesivo/atornillado", "Agrega huella y PIN al Lock Pro", "Permite códigos temporales Airbnb", "Puente imprescindible para uso remoto"),
        ("pilas-energizer-ultimate-lithium-aa", "Energizer Ultimate Lithium AA (Pack 8 y 12)", "US$16–$26", "Tamaño AA estándar 1.5V (sin fugas de ácido)", "Alimenta 4 u 8 pilas en TEEHO y eufy", "Evita cortes de PIN por frío o Wi-Fi", "Aumenta autonomía hasta 40 %"),
        ("bateria-recargable-eufy-10000mah", "Batería recargable oficial eufy 10,000 mAh", "US$39–$49", "Exclusiva para eufy E330 / S330 / T8520", "Cero pilas desechables: recarga USB-C", "Mantiene cámara 2K y códigos activos", "Ideal tener una de repuesto al rotar"),
        ("caja-guardallaves-pared-lockbox", "Caja guardallaves metálica con combinación para Airbnb", "US$19–$32", "Se fija a pared o reja con 4 tornillos", "Respaldo físico de la llave mecánica", "Código de emergencia si falla el Wi-Fi", "Plan B recomendado para anfitriones"),
        ("kit-brocas-sierras-copa-dewalt-d180004", "Kit de instalación DEWALT D180004 (54 mm y 25 mm)", "US$24–$36", "Prepara puertas nuevas a backset 60/70 mm", "Permite instalar cualquier deadbolt US", "Prepara puertas sin orificio previo", "Herramienta previa de montaje exacto"),
        ("placa-embellecedora-refuerzo-scar-plate", "Placas de refuerzo y embellecedores (Scar Plates)", "US$12–$22", "Cubre agujeros grandes o marcos dañados", "Estabiliza el montaje en madera fina", "Evita holguras del pasador motorizado", "Estética Matte Black y Satin Nickel"),
        ("manijas-inferiores-sin-llave-matching", "Manijas y pasadores inferiores coordinados para TEEHO/eufy", "US$25–$48", "Orificio inferior estándar 54 mm · 60/70 mm", "Complementa cerraduras tipo solo deadbolt", "Paso libre sin cerrar arriba", "Acabados exactos Negro Mate y Níquel"),
        ("sensor-puerta-y-cierrapuertas-automatico", "Cierrapuertas hidráulico y sensores para Auto-Lock", "US$25–$55", "Ajusta cierre suave de hoja hasta 65 kg", "Garantiza que la puerta cierre antes de trancar", "Evita error Lock Jammed con huéspedes", "Clave en edificios y Airbnb"),
        ("protectores-lluvia-teclado-acrilico", "Cubiertas protectoras impermeables para teclados exteriores", "US$14–$24", "Sobre el panel exterior en zonas sin techo", "Protege del sol UV y lluvia directa", "Mantiene legible el teclado numérico", "Recomendado si no hay alero"),
        ("cables-powerbank-usb-c-emergencia", "Powerbanks compactos y cables USB-C para emergencia", "US$15–$29", "Conector USB-C exterior inferior", "Energía instantánea ante pilas al 0 %", "Abre usando tu PIN habitual", "Guardar uno en guantera o mochila"),
    ]
    s6_suffixes = [
        ("para-cerraduras-teeho-y-eufy", "compatible con cerraduras TEEHO y eufy"),
        ("para-airbnb-y-alquiler-temporal", "indispensable para anfitriones de Airbnb"),
        ("en-amazon-estados-unidos-precio", "disponible en Amazon Estados Unidos"),
        ("para-casas-y-departamentos", "para puerta de casa y departamento"),
        ("guia-de-compra-y-compatibilidad", "ficha de compatibilidad y compra"),
    ]
    s6_idx = 0
    while len(items) < 520:
        a_slug, a_name, pr, dc, ac, gc, rem = s6_acc[s6_idx % len(s6_acc)]
        su_slug, su_txt = s6_suffixes[(s6_idx // len(s6_acc)) % len(s6_suffixes)]
        slug = f"accesorio-{a_slug}-{su_slug}"
        title = f"{a_name} {su_txt}"
        kw = f"{a_slug.replace('-', ' ')} {su_slug.replace('-', ' ')}"
        items.append((
            slug, title, "puentes-wifi-baterias-y-accesorios", kw,
            pr, dc, ac, gc, rem, a_name,
            f"smart lock accessory {a_slug.replace('-', ' ')} displayed neatly next to a modern digital lock on an oak table",
        ))
        s6_idx += 1

    assert len(items) == 520, f"Expected 520 transactional, got {len(items)}"
    return items


def generate_seo_1000():
    """
    Genera exactamente 1,000 artículos SEO informacionales sin canibalización en 8 silos:
    140 + 130 + 130 + 125 + 125 + 120 + 115 + 115 = 1,000 artículos.
    Cada tupla: (slug, title, pillar, kw, focus_summary, visual_subject)
    """
    items = []

    def add_matrix(pillar: str, count: int, bases: list, contexts: list, focus_prefix: str):
        added = 0
        idx = 0
        # Primero los 1-2 temas pilares clave del silo si hay
        while added < count:
            b_slug, b_title, b_subj = bases[idx % len(bases)]
            c_slug, c_title = contexts[(idx // len(bases)) % len(contexts)]
            slug = f"{b_slug}-{c_slug}"
            title = f"{b_title} {c_title}"
            kw = f"{b_slug.replace('-', ' ')} {c_slug.replace('-', ' ')}"
            items.append((
                slug, title, pillar, kw,
                f"{focus_prefix}: {title.lower()}",
                f"{b_subj} in scenario {c_slug.replace('-', ' ')}",
            ))
            added += 1
            idx += 1

    # SILO 7: como-medir-tu-puerta-y-compatibilidad (140)
    s7_first = (
        "como-medir-backset-grosor-y-orificio-de-puerta-antes-de-comprar-cerradura-digital",
        "Cómo medir backset (60/70 mm), grosor y orificio de tu puerta antes de comprar",
        "como-medir-tu-puerta-y-compatibilidad",
        "como medir backset grosor y orificio de puerta cerradura digital",
        "guía práctica paso a paso para verificar todas las medidas de compatibilidad de una cerradura digital en puertas residenciales",
        "close-up of a steel ruler measuring backset 60mm and cross bore diameter on a real wooden apartment door",
    )
    items.append(s7_first)
    s7_bases = [
        ("como-medir-el-backset-entrada-60-mm-vs-70-mm", "Cómo medir el backset o entrada (60 mm / 2-3/8\" vs 70 mm / 2-3/4\")", "measuring door backset distance from edge to center"),
        ("como-medir-el-grosor-de-la-puerta-35-a-55-mm", "Cómo comprobar el grosor exacto de tu puerta (35 mm a 55 mm)", "digital caliper measuring thickness of a wood front door"),
        ("como-medir-el-orificio-transversal-54-mm-vs-38-mm", "Cómo medir el orificio frontal de la puerta (54 mm vs 38 mm)", "measuring 2-1/8 inch circular bore hole in door"),
        ("como-medir-el-agujero-del-canto-25-mm-y-cajetin", "Cómo verificar el orificio del canto de 25 mm (1\") y la profundidad del pestillo", "tape measure on door edge latch bore 25mm"),
        ("distancia-minima-entre-cerrojo-superior-y-manija", "Qué distancia mínima debe quedar entre el cerrojo superior y la manija inferior", "measuring vertical spacing between upper deadbolt and lower lever"),
        ("diferencia-entre-cerrojo-deadbolt-y-cerradura-mortise", "Cómo distinguir un cerrojo tubular (deadbolt) de una cerradura embutida (mortise)", "comparing American tubular deadbolt latch with European mortise lock case"),
        ("como-identificar-puerta-izquierda-o-derecha-handing", "Cómo saber si tu puerta abre hacia la izquierda o derecha al configurar el motor", "door hinge orientation check for left hand or right hand smart lock"),
        ("compatibilidad-con-puertas-con-reja-o-mosquitero-exterior", "Cuánto espacio libre requiere el teclado si tienes puerta de reja o mosquitero", "checking clearance space between front wood door and outer security screen door"),
        ("como-comprobar-el-marco-y-profundidad-del-recibidor", "Cómo medir la profundidad del hueco en el marco para que el pasador no rebote", "measuring depth of metal strike plate recess on door jamb"),
        ("que-hacer-si-tu-puerta-tiene-cerradura-de-sobreponer", "Qué opciones existen si tu puerta actual usa cerradura de sobreponer metálica", "inspecting surface mounted rim lock on apartment door"),
        ("como-adaptar-una-puerta-delgada-menor-a-35-mm", "Cómo ajustar una puerta delgada de menos de 35 mm sin que el teclado baile", "door spacer shim behind deadbolt mounting plate"),
        ("que-pasa-si-tu-puerta-mide-mas-de-55-mm-de-espesor", "Qué ocurre si la hoja de tu puerta supera los 55 mm de espesor", "thick insulated exterior door edge with long deadbolt spindle"),
        ("tabla-de-conversion-pulgadas-a-milimetros-para-amazon", "Tabla de equivalencias pulgadas a milímetros para leer fichas de Amazon EE. UU.", "ruler showing inches and millimeters side by side near lock hardware"),
        ("como-medir-puertas-nuevas-sin-perforaciones-previas", "Cómo trazar las medidas desde cero en una puerta nueva sin agujeros", "paper installation template taped onto clean unpainted door"),
    ]
    s7_contexts = [
        ("para-cerraduras-teeho-te001-y-te002", "para cerraduras TEEHO TE001 y TE002"),
        ("para-cerraduras-eufy-c210-c220-y-e330", "para modelos eufy C210, C220 y E330"),
        ("en-puertas-de-madera-maciza-o-enchapada", "en puertas de madera maciza o enchapada"),
        ("en-puertas-metalicas-y-de-seguridad", "en puertas metálicas o blindadas"),
        ("en-departamentos-de-latinoamerica-y-espana", "en edificios de Latinoamérica y España"),
        ("en-casas-con-molduras-o-biseles", "en puertas con molduras o rebajes decorativos"),
        ("en-puertas-interiores-de-dormitorio-y-oficina", "en puertas interiores de dormitorio u oficina"),
        ("con-regla-escolar-o-cinta-metrica-casera", "usando solo una cinta métrica casera"),
        ("para-evitar-devoluciones-al-comprar-online", "para evitar errores antes de pedir online"),
        ("con-verificacion-para-manillones-handleset", "al instalar juegos completos con manillón"),
    ]
    add_matrix("como-medir-tu-puerta-y-compatibilidad", 139, s7_bases, s7_contexts, "guía dimensional paso a paso")

    # SILO 8: codigos-temporales-y-gestion-de-huespedes (130)
    s8_bases = [
        ("como-crear-un-codigo-temporal-de-un-solo-uso", "Cómo crear un código temporal de un solo uso (One-Time PIN) sin internet", "entering one-time PIN sequence on matte black keypad"),
        ("como-programar-codigos-por-fecha-y-hora-de-check-in", "Cómo programar códigos con fecha y hora exacta de entrada y salida", "setting check-in and check-out PIN schedule in mobile app"),
        ("como-funciona-el-codigo-virtual-anti-espia", "Cómo usar dígitos aleatorios anti-espía para que nadie copie tu PIN al verte", "hand typing extra decoy digits before real PIN on glowing keypad"),
        ("como-generar-codigos-algoritmicos-offline-sin-wifi", "Cómo funcionan los códigos temporales offline generados sin conexión a internet", "vacation rental keypad generating offline timed PIN"),
        ("como-borrar-o-caducar-codigos-de-huespedes-anteriores", "Cómo eliminar y auditar códigos vencidos al terminar cada reserva", "deleting expired guest code on smartphone app"),
        ("cuantos-codigos-de-usuario-almacena-cada-cerradura", "Cuántos códigos permanentes y temporales guarda la memoria interna", "smart lock memory diagram showing guest and family PIN slots"),
        ("codigos-ciclicos-semanales-para-personal-de-limpieza", "Cómo configurar códigos cíclicos solo para días y horas de limpieza", "cleaning service PIN code active Tuesdays and Fridays"),
        ("que-longitud-de-digitos-conviene-usar-en-el-pin", "Por qué elegir códigos de 4, 6 u 8 dígitos y evitar combinaciones obvias", "numeric keypad glowing with 6-digit access code"),
        ("como-enviar-instrucciones-de-acceso-claras-al-huesped", "Qué mensaje enviar al huésped para que abra la puerta al primer intento", "welcome guest message with lock code and door photo on phone"),
        ("que-hacer-si-un-huesped-llega-antes-o-se-retrasa-el-vuelo", "Cómo extender el horario de un código temporal si el vuelo del huésped se retrasa", "updating guest PIN expiration time remotely from phone"),
        ("codigo-maestro-vs-codigos-de-usuario-diferencias", "Diferencia crítica entre el Código Maestro de programación y los códigos de uso", "owner programming master code vs guest keypad code"),
        ("como-activar-el-modo-paso-libre-o-vacaciones", "Cuándo activar el modo paso libre para mudanzas o el modo vacaciones al viajar", "smart lock passage mode indicator during move-in"),
        ("auditoria-de-entradas-quien-entro-y-a-que-hora", "Cómo revisar el historial de aperturas por código, huella o llave manual", "activity log showing timestamped entries on smartphone"),
    ]
    s8_contexts = [
        ("en-cerraduras-teeho-te001-y-te002", "en cerraduras TEEHO TE001 y TE002"),
        ("en-cerraduras-eufy-c210-y-c220", "en cerraduras eufy C210 y C220"),
        ("para-anfitriones-de-airbnb-y-booking", "para anfitriones de Airbnb y Booking"),
        ("para-visitas-repartidores-y-familiares", "para visitas, entregas y familiares"),
        ("para-personal-de-limpieza-y-mantenimiento", "para personal de limpieza y técnicos"),
        ("sin-necesidad-de-descargar-aplicaciones", "sin que el huésped descargue aplicaciones"),
        ("desde-otro-pais-o-ciudad-via-app", "desde otra ciudad por control remoto"),
        ("protegiendo-la-privacidad-y-seguridad", "protegiendo el código maestro de administración"),
        ("en-departamentos-de-alquiler-por-temporada", "en departamentos de alquiler temporal"),
        ("en-casas-vacacionales-sin-internet-estable", "en casas de descanso con internet intermitente"),
    ]
    add_matrix("codigos-temporales-y-gestion-de-huespedes", 130, s8_bases, s8_contexts, "manual operativo de códigos temporales")

    # SILO 9: control-desde-el-celular-wifi-y-puentes (130)
    s9_first = (
        "cerraduras-con-wifi-integrado-vs-puente-wifi-bridge-que-accesorios-necesitas",
        "Cerraduras con Wi-Fi integrado vs Puente Wi-Fi (Bridge): qué accesorios necesitas para controlar a distancia",
        "control-desde-el-celular-wifi-y-puentes",
        "cerraduras con wifi integrado vs puente wifi bridge accesorios control remoto",
        "comparativa técnica sobre conectividad inalámbrica y accesorios necesarios para abrir y crear códigos desde el celular",
        "white plug-in Wi-Fi gateway bridge placed in a hallway outlet beside a wireless router and smart lock",
    )
    items.append(s9_first)
    s9_bases = [
        ("diferencia-entre-bluetooth-local-y-wifi-a-distancia", "Por qué Bluetooth solo abre a 8 metros y qué hace falta para abrir desde otra ciudad", "smartphone Bluetooth icon range vs cloud Wi-Fi connection"),
        ("donde-enchufar-el-puente-gateway-g2-para-senal-estable", "A qué distancia y sin qué obstáculos enchufar un Puente Gateway Wi-Fi", "plugging Wi-Fi bridge into wall outlet 3 meters from apartment door"),
        ("por-que-las-cerraduras-wifi-exigen-red-2-4-ghz", "Por qué tu cerradura no detecta redes Wi-Fi 5 GHz y cómo configurar la banda 2.4 GHz", "dual-band Wi-Fi router setup for 2.4 GHz smart lock pairing"),
        ("como-afecta-el-wifi-integrado-al-consumo-de-pilas", "Cuánto reduce la autonomía el Wi-Fi integrado frente a usar un puente externo", "battery drain chart comparing built-in Wi-Fi vs BLE bridge lock"),
        ("como-funciona-matter-y-thread-en-cerraduras-modernas", "Qué aportan Matter y Thread frente al Wi-Fi tradicional en cerraduras digitales", "smart home Matter Thread border router connecting door lock"),
        ("que-pasa-si-se-corta-el-internet-o-la-luz-en-casa", "Siguen funcionando la huella y los códigos PIN si se cae el Wi-Fi o se va la luz", "smart lock operating on AA batteries during home internet outage"),
        ("notificaciones-en-tiempo-real-cuando-abren-la-puerta", "Cómo activar alertas instantáneas en iPhone y Android al abrir o quedar mal cerrada", "push notification alert on smartphone screen showing front door unlocked"),
        ("integracion-con-alexa-google-home-y-rutinas-de-voz", "Cómo vincular apertura con PIN de voz en Alexa y Google Home de forma segura", "smart speaker next to entryway lock configuring voice PIN security"),
        ("cuanto-ancho-de-banda-y-datos-consume-una-cerradura-wifi", "Consumo de internet de una cerradura Wi-Fi frente a una videocerradura 2K", "home router traffic meter connected to Wi-Fi smart deadbolt"),
        ("como-compartir-acceso-de-administrador-con-coanfitriones", "Cómo dar acceso de coanfitrión o pareja en la app sin compartir tu contraseña", "inviting co-host family member inside smart lock mobile app"),
        ("diferencia-entre-chime-wifi-eufy-y-gateway-g2-generico", "En qué se diferencia el Chime Wi-Fi de eufy E330 de un puente Gateway G2", "comparing eufy HomeBase Chime with compact G2 Wi-Fi bridge"),
        ("como-mejorar-la-senal-wifi-si-la-puerta-es-metalica", "Cómo solucionar caídas de conexión si la puerta metálica o el concreto atenúan el Wi-Fi", "mesh Wi-Fi node positioned near thick concrete hallway doorway"),
        ("apertura-remota-de-emergencia-para-entregas-y-visitas", "Cómo destrabar la puerta a distancia para un familiar o técnico en menos de 5 segundos", "remote unlock button confirmation inside smart lock app"),
    ]
    s9_contexts = [
        ("en-modelos-eufy-c210-c220-y-e330", "en modelos eufy C210, C220 y E330"),
        ("en-cerraduras-con-puente-gateway-g2", "en cerraduras Bluetooth con puente G2"),
        ("en-routers-de-fibra-optica-y-redes-mesh", "en routers de fibra óptica y mallas Mesh"),
        ("en-departamentos-con-paredes-de-concreto", "en departamentos con muros gruesos"),
        ("para-controlar-alquileres-desde-el-extranjero", "para gestionar propiedades desde el extranjero"),
        ("en-casas-grandes-de-dos-o-tres-pisos", "en casas amplias de varios niveles"),
        ("con-iphone-apple-tv-y-android", "con iPhone, Android, Apple TV o Alexa"),
        ("para-ahorrar-bateria-sin-perder-alertas", "optimizando el ahorro de batería"),
        ("en-redes-de-invitados-o-domotica-segura", "aislando la red IoT por seguridad"),
        ("cuando-cambias-de-router-o-clave-wifi", "al cambiar de router o contraseña Wi-Fi"),
    ]
    add_matrix("control-desde-el-celular-wifi-y-puentes", 129, s9_bases, s9_contexts, "guía técnica de conectividad remota y puentes")

    # SILO 10: formas-de-acceso-codigo-huella-y-llave (125)
    s10_bases = [
        ("como-funciona-el-sensor-biometrico-de-huella-3d", "Cómo leen la huella los sensores semiconductores 3D de TEEHO y eufy", "macro close-up of finger touching capacitive biometric sensor"),
        ("por-que-falla-la-huella-en-dedos-secos-humedos-o-mayores", "Por qué falla la huella con manos mojadas o piel seca y cómo registrarla mejor", "registering fingerprint at multiple angles on smart deadbolt"),
        ("teclado-fisico-retroiluminado-vs-pantalla-tactil-bajo-sol", "Botones físicos de goma vs pantalla táctil: cuál resiste mejor bajo sol, guantes o lluvia", "side-by-side texture close-up of physical buttons vs glass touch keypad"),
        ("como-usar-la-llave-fisica-de-respaldo-oculto", "Cómo usar la llave mecánica de emergencia y por qué nunca dejarla dentro de casa", "inserting physical backup brass key into concealed smart lock keyway"),
        ("como-funciona-el-desbloqueo-automatico-por-gps", "Cómo funciona el Auto-Unlock por geofencing al llegar con compras en las manos", "person holding grocery bags while smart door unlocks via pocket phone"),
        ("apple-homekey-nfc-como-abrir-con-reloj-o-celular", "Cómo funciona Apple HomeKey para abrir tocando con iPhone o Apple Watch sin batería", "tapping smartwatch against NFC zone of smart lock"),
        ("cuantas-huellas-y-tarjetas-nfc-permite-registrar", "Cuántas huellas familiares conviene grabar por usuario (pulgar e índice)", "family members scanning thumbprints on front door biometric lock"),
        ("diferencia-entre-bloqueo-automatico-por-tiempo-y-sensor", "Auto-Lock por temporizador (10–99s) vs por sensor magnético de puerta cerrada", "door sensor magnet aligned on jamb with auto-locking deadbolt"),
        ("como-abrir-con-un-toque-desde-el-teclado-al-salir", "Función One-Touch Locking: cómo echar llave con un solo botón al salir rápido", "finger pressing single lock button on keypad when leaving home"),
        ("compatibilidad-de-cilindros-con-tu-llave-antigua-rekey", "Qué cerraduras digitales permiten re-amaestrar el cilindro para usar tu llave actual", "rekeying pin tumbler cylinder next to smart lock housing"),
        ("accesibilidad-sin-llaves-para-ninos-y-adultos-mayores", "Qué forma de acceso resulta más intuitiva para niños pequeños y adultos mayores", "senior hand comfortably pressing large backlit keypad buttons"),
        ("como-limpiar-el-lector-de-huella-sin-rayar-el-sensor", "Cómo limpiar el sensor capacitivo y pantalla táctil sin dañar el recubrimiento", "microfiber cloth gently wiping fingerprint sensor on matte black lock"),
        ("que-es-el-modo-silencioso-para-llegar-de-madrugada", "Cómo silenciar los pitidos del teclado para entrar de noche sin despertar a nadie", "quiet nighttime home entrance keypad illuminated softly without sound"),
    ]
    s10_contexts = [
        ("en-puertas-de-entrada-principal", "en puertas de entrada principal"),
        ("para-familias-con-ninos-y-mayores", "para hogares con niños y adultos mayores"),
        ("en-climas-humedos-o-muy-frios", "en climas húmedos, lluviosos o muy fríos"),
        ("para-anfitriones-y-huespedes-temporales", "en alojamientos y alquiler temporal"),
        ("en-teeho-te002-y-eufy-c220", "en modelos TEEHO TE002 y eufy C220"),
        ("cuando-llegas-con-bolsas-o-mascotas", "al llegar cargado con compras o mascotas"),
        ("para-oficinas-y-consultorios-privados", "en oficinas y consultorios compartidos"),
        ("evitando-desgaste-prematuro-del-panel", "evitando desgaste y marcas en el teclado"),
        ("combinando-doble-metodo-por-seguridad", "combinando dos métodos para cero fallos"),
        ("con-configuracion-inicial-paso-a-paso", "durante la configuración inicial paso a paso"),
    ]
    add_matrix("formas-de-acceso-codigo-huella-y-llave", 125, s10_bases, s10_contexts, "guía operativa sobre métodos de apertura")

    # SILO 11: instalacion-paso-a-paso-y-ajustes-de-puerta (125)
    s11_bases = [
        ("por-que-instalar-solo-con-destornillador-manual", "Por qué instalar tu cerradura digital con destornillador manual y nunca con atornillador de impacto", "hand using manual Phillips screwdriver on interior mounting plate"),
        ("como-ajustar-el-pestillo-telescopico-de-60-a-70-mm", "Cómo girar la leva del pestillo para pasar de 60 mm (2-3/8\") a 70 mm (2-3/4\") sin romperlo", "twisting adjustable deadbolt latch cam from 60mm to 70mm"),
        ("como-pasar-el-cable-plano-sin-pellizcarlo-al-montar", "Cómo guiar el cable plano de datos por debajo del pestillo sin morderlo con los tornillos", "carefully routing flat ribbon connector cable under deadbolt body"),
        ("calibracion-automatica-de-orientacion-door-handing", "Cómo ejecutar la detección automática de puerta izquierda/derecha tras instalar", "smart lock bolt cycling automatically during door handing calibration"),
        ("como-alinear-el-recibidor-strike-plate-si-el-pasador-roza", "Cómo limar o ajustar el recibidor metálico del marco para que el cerrojo entre suave", "aligning strike plate on wood doorframe so deadbolt glides without friction"),
        ("como-colocar-el-collar-adaptador-si-el-hueco-es-holgado", "Cuándo usar la arandela o placa adaptadora para orificios de 54 mm o 38 mm", "fitting adapter ring onto door face before tightening lock"),
        ("como-ajustar-la-caja-guardapolvo-detras-del-recibidor", "Por qué profundizar el hueco de madera del marco a 25 mm (1\") evita errores del motor", "chiseling clean 1-inch deep pocket behind strike plate in jamb"),
        ("orden-de-ensamble-con-la-puerta-siempre-abierta", "Regla de oro: por qué probar códigos y calibración con la puerta abierta", "testing keypad lock unlocking cycle while door stands wide open"),
        ("posicion-horizontal-vs-vertical-del-pestillo-al-insertar", "En qué posición exacta va la varilla plana (tailpiece) al unir exterior e interior", "horizontal flat metal tailpiece sliding cleanly through latch hub"),
        ("como-instalar-el-manillon-inferior-sin-volver-a-taladrar", "Cómo ajustar el tornillo deslizante inferior en sets Handleset como TEEHO TE002H", "adjusting lower sliding through-bolt on front door handleset"),
        ("como-desinstalar-cerradura-anterior-sin-danar-la-pintura", "Cómo retirar la cerradura vieja y limpiar marcas antes de montar la nueva", "removing old brass deadbolt cleanly from painted door"),
        ("como-ajustar-burletes-de-goma-si-exigen-empujar-la-puerta", "Cómo corregir burletes de goma muy duros que bloquean el cierre automático", "adjusting foam weatherstripping on doorframe for smooth motorized locking"),
        ("instalacion-en-puerta-virgen-con-plantilla-y-sierra-copa", "Cómo perforar paso a paso una puerta de madera nueva con plantilla guía", "drilling 54mm cross bore with hole saw guide on timber door"),
    ]
    s11_contexts = [
        ("en-puertas-estandar-de-madera", "en puertas estándar de madera"),
        ("en-puertas-metalicas-huecas", "en puertas metálicas huecas"),
        ("en-modelos-teeho-te001-y-te002", "en cerraduras TEEHO TE001 y TE002"),
        ("en-modelos-eufy-c210-c220-y-e330", "en cerraduras eufy C210, C220 y E330"),
        ("en-sistemas-retrofit-sin-perforar", "en sistemas retrofit interiores sin taladro"),
        ("en-15-minutos-sin-contratar-cerrajero", "en menos de 15 minutos sin cerrajero"),
        ("evitando-que-el-motor-se-trabe", "para que el motor cierre sin rozamientos"),
        ("manteniendo-el-teclado-recto-a-nivel", "garantizando que el teclado quede recto"),
        ("en-puertas-con-doble-cerradura", "en puertas con cerradura superior e inferior"),
        ("antes-de-poner-la-tapa-de-baterias", "justo antes de cerrar la tapa de baterías"),
    ]
    add_matrix("instalacion-paso-a-paso-y-ajustes-de-puerta", 125, s11_bases, s11_contexts, "manual técnico de montaje e instalación")

    # SILO 12: baterias-autonomia-y-emergencias-sin-energia (120)
    s12_bases = [
        ("pilas-alcalinas-vs-litio-1-5v-vs-recargables-nimh-1-2v", "Por qué NO usar pilas recargables NiMH 1.2V y elegir alcalinas o litio 1.5V", "comparing 1.5V lithium AA cells against 1.2V rechargeable NiMH batteries"),
        ("como-usar-el-puerto-usb-c-de-emergencia-con-powerbank", "Cómo abrir con un powerbank o cable USB-C si la cerradura llegó al 0 %", "plugging external powerbank USB-C cable into bottom port of smart lock"),
        ("el-puerto-usb-c-carga-las-pilas-o-solo-da-energia-temporal", "Aclaración vital: el puerto USB-C exterior solo alimenta el teclado, no recarga pilas AA", "diagram explaining emergency USB-C temporary power vs battery bay"),
        ("como-usar-bateria-cuadrada-de-9v-en-contactos-inferiores", "Cómo apoyar una pila de 9V en los polos de emergencia en modelos clásicos", "touching 9V battery terminals to emergency external contacts under keypad"),
        ("cuantos-meses-duran-4-pilas-aa-vs-8-pilas-aa", "Autonomía real en meses: 4 pilas AA en TEEHO frente a 8 pilas AA en eufy C220", "4 AA batteries vs 8 AA batteries lined up next to door lock"),
        ("como-interpretar-el-aviso-de-bateria-baja-rojo-y-pitidos", "Cuántas aperturas te quedan desde que parpadea la luz roja de batería baja", "blinking red battery warning LED icon on digital keypad"),
        ("por-que-se-descargan-rapido-las-pilas-en-cerraduras-digitales", "Las 5 causas de descarga rápida: pestillo rozando el marco, Wi-Fi débil o pilas baratas", "inspecting friction points causing excessive motor amperage draw"),
        ("como-cargar-y-mantener-la-bateria-10000-mah-de-eufy-e330", "Cómo recargar la batería extraíble de 10,000 mAh sin dejar la puerta sin protección", "charging removable 10000mAh Li-ion lock battery pack indoors via USB-C"),
        ("por-que-nunca-mezclar-pilas-nuevas-con-usadas", "Riesgo real de sulfatación y fugas ácidas al mezclar marcas o cargas distintas", "clean intact battery compartment springs with fresh matched AA cells"),
        ("comportamiento-de-las-pilas-en-temperaturas-bajo-cero", "Por qué las pilas alcalinas caen en invierno y el litio aguanta hasta -40 °C", "frost resistant lithium AA battery in cold weather door lock"),
        ("como-programar-recordatorios-y-cambio-preventivo-en-airbnb", "Protocolo de mantenimiento cada 6 meses para no dejar nunca sin energía a un huésped", "host calendar reminder for swapping lock batteries twice a year"),
        ("que-hacer-si-el-motor-suena-lento-pero-aun-responde-el-teclado", "Señales de voltaje insuficiente antes del bloqueo total del pasador", "measuring AA battery voltage with digital multimeter at 1.25V"),
    ]
    s12_contexts = [
        ("en-cerraduras-teeho-te001-y-te002", "en cerraduras TEEHO TE001 y TE002"),
        ("en-cerraduras-eufy-c210-y-c220", "en cerraduras eufy C210 y C220"),
        ("en-videocerraduras-eufy-e330-y-s330", "en videocerraduras eufy E330 y S330"),
        ("en-casas-con-uso-familiar-diario", "en viviendas de uso familiar diario"),
        ("en-departamentos-de-alquiler-airbnb", "en departamentos Airbnb con rotación alta"),
        ("en-puertas-con-alta-exposicion-solar-o-frio", "en puertas exteriores expuestas al frío o calor"),
        ("cuando-viajas-fuera-varias-semanas", "cuando pasas varias semanas fuera de casa"),
        ("antes-de-que-el-codigo-deje-de-responder", "antes de quedarte bloqueado afuera"),
        ("con-pilas-alcalinas-o-de-litio-en-amazon", "eligiendo las pilas correctas en Amazon"),
        ("siguiendo-medidas-seguras-para-la-placa", "protegiendo la placa electrónica de sulfato"),
    ]
    add_matrix("baterias-autonomia-y-emergencias-sin-energia", 120, s12_bases, s12_contexts, "guía energética de baterías y emergencias")

    # SILO 13: seguridad-fisica-certificaciones-y-clima (115)
    s13_bases = [
        ("que-significa-certificacion-ansi-bhma-grado-1-2-y-3", "Qué evalúan los grados ANSI/BHMA 1, 2 y 3 en resistencia física y ciclos", "certified ANSI BHMA deadbolt latch durability test"),
        ("proteccion-anti-fuerza-bruta-bloqueo-tras-5-intentos", "Cómo bloquea el teclado el sistema anti-adivinación tras 5 códigos erróneos", "lockout countdown warning after repeated wrong PIN attempts"),
        ("donde-se-guardan-tus-huellas-almacenamiento-local-vs-nube", "Privacidad biométrica: por qué tu huella se cifra en el chip local y no sube a la nube", "encrypted local microchip inside smart lock protecting fingerprint template"),
        ("diferencia-entre-ip54-ip65-y-ip66-contra-lluvia-y-polvo", "Qué protege realmente una certificación IP54 frente a IP65 en puertas exteriores", "water droplets beading on IP65 rated matte black exterior keypad"),
        ("como-evitar-que-la-condensacion-falle-en-el-teclado", "Cómo prevenir condensación por choque térmico entre interior calefaccionado y exterior frío", "interior vs exterior weather sealing gasket behind smart deadbolt"),
        ("modo-privacidad-interior-deadlock-como-funciona", "Cómo activar el botón interior de privacidad para bloquear códigos desde dentro", "sliding privacy lock switch on interior escutcheon plate"),
        ("seguridad-de-la-placa-electronica-si-arrancan-el-teclado", "Por qué arrancar el panel exterior NO abre la puerta (la placa lógica está adentro)", "diagram showing exterior keypad only sends encrypted signal to interior controller"),
        ("cilindro-anti-ganzua-y-refuerzo-del-marco-con-tornillos-largos", "Cómo reforzar el recibidor con tornillos de 3 pulgadas para frenar palancas", "long 3-inch steel security screws anchored into door frame stud"),
        ("proteccion-contra-rayos-uv-en-teclados-orientados-al-sol", "Cómo afecta la radiación solar directa a pantallas táctiles y cómo protegerlas", "shaded residential door portico protecting electronic lock keypad"),
        ("que-es-la-alarma-de-manipulacion-integrada-tamper-alert", "Cómo suena la sirena y envía alerta si alguien golpea o fuerza el cerrojo", "tamper alarm sensor triggered inside digital deadbolt housing"),
        ("cifrado-aes-128-y-aes-256-en-cerraduras-wifi-y-bluetooth", "Cómo protegen la señal inalámbrica las cerraduras modernas frente a interceptación", "encrypted AES wireless signal padlock diagram between phone and smart lock"),
        ("seguridad-en-casas-con-puerta-de-vidrio-junto-a-la-cerradura", "Qué precaución tomar si hay una ventana o vitral al lado de la mariposa interior", "door with frosted sidelight window and double protection strategy"),
    ]
    s13_contexts = [
        ("en-puertas-principales-de-casa", "en puertas principales de casas"),
        ("en-departamentos-y-condominios", "en departamentos de edificios"),
        ("en-zonas-costeras-y-lluviosas", "en zonas costeras con lluvia y humedad"),
        ("en-puertas-al-aire-libre-sin-alero", "en puertas exteriores sin techo protector"),
        ("evaluando-modelos-teeho-eufy-y-schlage", "al evaluar modelos TEEHO, eufy y Schlage"),
        ("en-propiedades-de-alquiler-temporal", "en propiedades de alquiler temporal"),
        ("para-proteger-la-privacidad-familiar", "para proteger datos y privacidad familiar"),
        ("mejorando-la-resistencia-del-marco", "reforzando la estructura del marco"),
        ("cumpliendo-polizas-de-seguro-de-hogar", "cumpliendo estándares de seguro residencial"),
        ("durante-viajes-y-ausencias-largas", "durante vacaciones y ausencias prolongadas"),
    ]
    add_matrix("seguridad-fisica-certificaciones-y-clima", 115, s13_bases, s13_contexts, "análisis técnico de seguridad y resistencia")

    # SILO 14: solucion-de-problemas-y-compra-en-amazon (115)
    s14_bases = [
        ("solucion-al-error-lock-jammed-pasador-atascado", "Cómo solucionar el error 'Lock Jammed' cuando el pestillo patina o choca con el marco", "inspecting jammed deadbolt alignment with strike hole on doorframe"),
        ("significado-de-pitidos-largos-y-luz-roja-al-programar", "Por qué la cerradura da 3 o 5 pitidos cortos al guardar un código o huella", "keypad flashing red status LED during programming step"),
        ("como-hacer-factory-reset-restablecer-de-fabrica-sin-perder-llaves", "Cómo ejecutar un Factory Reset seguro y cambiar el código maestro por defecto", "pressing recessed reset pinhole button inside battery compartment"),
        ("por-que-el-cerrojo-cierra-al-reves-cuando-pulsas-bloquear", "Por qué la cerradura se cierra al revés (abre en vez de trancar) y cómo recalibrar", "re-running door handing detection so bolt throws in correct direction"),
        ("el-teclado-tactil-no-enciende-al-tocarlo-diagnostico", "Qué revisar si la pantalla no despierta al pasar la mano o tocar dígitos", "checking loose data cable plug behind interior assembly plate"),
        ("la-app-no-encuentra-la-cerradura-en-emparejamiento", "Cómo solucionar fallos de emparejamiento Bluetooth o Wi-Fi al vincular la app", "pairing smartphone next to door lock on 2.4 GHz network"),
        ("como-comprar-cerraduras-digitales-en-amazon-estados-unidos-sin-errores", "Cómo leer acabados, versiones (Kit vs Solo Cerrojo) y voltaje en Amazon EE. UU.", "checking product variant options on Amazon smart lock listing"),
        ("envios-amazonglobal-y-limites-aduaneros-a-latinoamerica", "Cómo aprovechar envíos internacionales y topes libres de impuestos (<US$200) hacia LATAM", "packaged smart deadbolt box ready for international delivery"),
        ("por-que-la-huella-tarda-en-responder-o-solo-abre-al-segundo-intento", "Cómo recalibrar las huellas grabadas cuando baja la precisión tras meses de uso", "re-enrolling fingerprint carefully on clean dry sensor"),
        ("como-recuperar-el-acceso-si-olvidaste-el-codigo-maestro", "Pasos exactos para recuperar control administrativo tras olvidar el código maestro", "interior battery cover removed showing reset switch instructions"),
        ("solucion-si-la-puerta-se-abre-sola-por-peso-del-burlete", "Cómo ajustar el resbalón inferior o recibidor si el cerrojo queda tenso", "tightening latch strike tab with flat screwdriver to eliminate play"),
        ("como-verificar-si-un-modelo-en-amazon-es-reacondicionado-o-nuevo", "Cómo comprobar vendedor oficial, garantía de fábrica y política de devolución en Amazon", "checking official manufacturer storefront badge and sealed box"),
    ]
    s14_contexts = [
        ("en-cerraduras-teeho-te001-y-te002", "en cerraduras TEEHO TE001 y TE002"),
        ("en-cerraduras-eufy-c210-c220-y-e330", "en cerraduras eufy C210, C220 y E330"),
        ("en-cerraduras-schlage-aqara-y-switchbot", "en modelos Schlage, Aqara y SwitchBot"),
        ("despues-de-una-instalacion-reciente", "justo después de instalarla por primera vez"),
        ("tras-un-cambio-de-pilas-o-corte-de-luz", "tras un cambio de pilas o reinicio de router"),
        ("cuando-compras-desde-peru-mexico-o-colombia", "al comprar desde Perú, México o Colombia"),
        ("en-departamentos-con-uso-intenso-airbnb", "en departamentos con rotación intensa"),
        ("cuando-cambia-la-humedad-de-la-madera", "cuando la puerta de madera se hincha por lluvia"),
        ("paso-a-paso-sin-desarmar-el-pestillo", "sin tener que desarmar todo el cerrojo"),
        ("para-dejar-el-equipo-operativo-en-minutos", "dejando el sistema operativo en 5 minutos"),
    ]
    add_matrix("solucion-de-problemas-y-compra-en-amazon", 115, s14_bases, s14_contexts, "diagnóstico técnico y soluciones prácticas")

    assert len(items) == 1000, f"Expected 1000 SEO items, got {len(items)}"
    return items
