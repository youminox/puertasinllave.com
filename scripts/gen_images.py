#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera imágenes fotorrealistas y visualmente diversas para puertasinllave.com vía la Edge Function puertasinllave-images
(Supabase charlielingan → OpenAI ChatGPT Image API con quality="medium") y las comprime en WebP
ligeros (<= 68 KB, garantizado estrictamente < 100 KB para Google SEO) en public/img/,
incluyendo verificación perceptual dHash anti-similitud.

Uso:
  python3 scripts/gen_images.py home        # genera 68+ imágenes diversas (Home + 14 Silos + 28 Escenas + Top Artículos)
  python3 scripts/gen_images.py articles    # genera imágenes individuales por artículo
  python3 scripts/gen_images.py one <slug> "<prompt>"
"""
import concurrent.futures as cf
import io
import json
import pathlib
import sys
import urllib.request
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
ENDPOINT = "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/puertasinllave-images"
TOKEN = "puertasinllave-img-2026"
RAW = ROOT / "scripts/.cache/raw"
RAW.mkdir(parents=True, exist_ok=True)

# 51 escenas arquitectónicas ultra diversas (ángulos, puertas, iluminación y temáticas distintas)
HOME_PROMPTS = {
    "home-hero-cerradura": "Three-quarter architectural entryway photograph of a sleek matte black smart door lock with softly glowing backlit keypad and circular biometric fingerprint ring mounted on a warm natural oak house door in crisp morning light",
    "og-default": "Clean architectural design table displaying a matte black fingerprint smart deadbolt, a satin nickel keypad lock, a plug-in Wi-Fi bridge and a steel tape measure on birch wood under bright diffused studio daylight",
    "home-medir-backset": "Macro 85mm close-up photograph of carpenter hands holding a yellow steel tape measure against the edge of a wooden apartment door measuring the 60mm backset distance to the circular deadbolt bore",
    "home-airbnb-huespedes": "Bright sunlit modern Airbnb apartment foyer with a sleek black Wi-Fi keypad smart lock on a matte white hallway door beside a travel carry-on suitcase and woven doormat",
    "home-huella-biometrica": "Intimate close-up of an index finger touching an illuminated metallic circular fingerprint sensor on a contemporary matte black smart door lock at twilight porch lighting",
    "home-puente-wifi": "Interior hallway view showing a compact white Wi-Fi gateway bridge plugged into a clean wall electrical outlet three meters away from an entryway smart lock door",
    "home-emergencia-usbc": "Detailed low-angle close-up of a hand plugging a braided USB-C cable from a pocket powerbank into the bottom emergency power port of a digital door deadbolt outdoors",
    "home-departamento-retrofit": "Clean interior view of an apartment entry door showing a compact motorized smart lock retrofit unit fitted seamlessly over the existing thumbturn cylinder without altering the hallway exterior",
    "home-instalacion-destornillador": "Hands carefully tightening screws with a manual magnetic Phillips screwdriver to mount the interior steel backing plate of a smart deadbolt on a white painted wood door",
    # 14 Categorías Pilares
    "cat-resenas-cerraduras-digitales": "Editorial product bench showcasing four varied digital smart deadbolts in matte black and brushed nickel finishes with a notebook and caliper under natural skylight",
    "cat-comparativas-cerraduras-digitales": "Balanced side-by-side comparison of two distinct smart door locks—one compact keypad deadbolt on the left and one biometric Wi-Fi smart lock on the right—mounted on oak test blocks",
    "cat-cerraduras-para-airbnb-y-alquiler-temporal": "Modern vacation rental studio doorway featuring an electronic touchscreen keypad deadbolt, a subtle wall key lockbox and warm golden-hour welcome lighting",
    "cat-cerraduras-para-casas-y-departamentos": "Substantial residential front porch entrance with a full matte black exterior handleset grip paired with an upper biometric digital deadbolt on dark walnut timber",
    "cat-cerraduras-por-precio-y-forma-de-acceso": "Graduated studio showcase of an entry-level physical keypad deadbolt, a mid-range fingerprint lock and a 2K video smart lock arranged on light limestone",
    "cat-puentes-wifi-baterias-y-accesorios": "Overhead flat-lay knolling on warm oak wood of a compact Wi-Fi bridge, lithium AA batteries, a metal key lockbox, heavy strike plate and bi-metal door hole saw kit",
    "cat-como-medir-tu-puerta-y-compatibilidad": "Extreme close-up of a digital Vernier caliper measuring the 44mm thickness edge of a residential solid core wood door with brass latch faceplate",
    "cat-codigos-temporales-y-gestion-de-huespedes": "Over-the-shoulder lifestyle perspective of an Airbnb host holding a smartphone displaying a clean PIN scheduling screen near a white apartment door with smart keypad",
    "cat-control-desde-el-celular-wifi-y-puentes": "Clean modern home living room entry table with a dual-band router, smart Wi-Fi bridge plugged in nearby and a digital deadbolt glowing softly on the door",
    "cat-formas-de-acceso-codigo-huella-y-llave": "Macro comparison angle showing a smart lock's illuminated numeric keypad, biometric fingerprint sensor ring and concealed mechanical backup brass keyhole",
    "cat-instalacion-paso-a-paso-y-ajustes-de-puerta": "Open residential door edge during installation showing the telescoping deadbolt latch set to 60mm, flat data ribbon cable and hand screwdriver on a drop cloth",
    "cat-baterias-autonomia-y-emergencias-sin-energia": "Close-up of the open interior battery bay of a digital smart lock loaded with eight fresh lithium AA cells with crisp silver spring contacts",
    "cat-seguridad-fisica-certificaciones-y-clima": "Weatherproof matte black smart door lock mounted on an exterior slate-blue house door beaded with fine rain droplets under a sheltered porch light",
    "cat-solucion-de-problemas-y-compra-en-amazon": "Tidy home entry bench showing a freshly unboxed smart deadbolt package, metal alignment gauge, backup physical keys and recessed reset pin tool",
    # 28 Escenas Variadas Anti-Similitud (2 adicionales por cada uno de los 14 silos)
    "scene-resenas-2": "Low-angle architectural hero shot of a slim satin nickel keypad deadbolt installed on a sunlit cedar residential door with stone siding",
    "scene-resenas-3": "Modern apartment entryway featuring a smart lever door handle with integrated thumb fingerprint reader on a warm maple office door",
    "scene-comparativas-2": "Profile edge comparison on a workshop mat showing an ultra-slim keypad lock body alongside a built-in Wi-Fi biometric deadbolt",
    "scene-comparativas-3": "Split residential mockup door displaying a classic physical button lock above and a sleek glass touchscreen Wi-Fi lock below",
    "scene-airbnb-2": "Evening arrival at a cozy boutique apartment door where the glowing keypad illuminates softly for late check-in guests",
    "scene-airbnb-3": "Coastal vacation home wooden entry door with an IP65 weather-sealed smart lock and seaside greenery in bright daylight",
    "scene-casas-2": "Charcoal gray steel apartment security door fitted with an interior smart lock turnpiece retrofit unit preserving the hallway aesthetic",
    "scene-casas-3": "Sunlit garage-to-house interior mudroom door with an auto-locking digital lever handle and coat hooks nearby",
    "scene-precio-2": "Clean close-up of a budget-friendly physical rubber-button deadbolt keypad mounted above a brass knob on a white bedroom door",
    "scene-precio-3": "High-tech front entrance featuring a 2K wide-angle video smart lock with integrated chime doorbell lens under soft twilight lighting",
    "scene-accesorios-2": "Pack of eight lithium AA 1.5V batteries resting beside a compact combination wall key lockbox mounted next to brick masonry",
    "scene-accesorios-3": "Bi-metal 2-1/8 inch and 1 inch door lock installation hole saw kit with self-aligning jig clamped onto raw pine timber",
    "scene-medir-2": "Comparing an American tubular deadbolt latch beside a long European multi-point mortise lock cylinder on a clean slate surface",
    "scene-medir-3": "Checking vertical clearance between an upper electronic deadbolt and a lower door lever handle with a clear acrylic ruler",
    "scene-codigos-2": "Hand entering a randomized anti-peeping PIN sequence onto a frosted glass smart keypad while standing in a shaded porch",
    "scene-codigos-3": "Cleaning staff opening a vacation rental door during midday hours using a scheduled recurring keypad access code",
    "scene-wifi-2": "Dual-band wireless mesh router positioned near an entryway credenza ensuring strong 2.4 GHz signal to a nearby smart door lock",
    "scene-wifi-3": "Smartphone displaying an instant push arrival notification while sitting on a warm wooden cafe table away from home",
    "scene-acceso-2": "Tapping an Apple Watch smoothly against a dark minimalist NFC smart lock panel on a contemporary urban apartment door",
    "scene-acceso-3": "Senior homeowner easily unlocking a brightly backlit large-button digital door lock without fumbling for keys",
    "scene-instalacion-2": "Close-up of a hand twisting the adjustable deadbolt latch cam cleanly from 60mm to 70mm on a wood workbench",
    "scene-instalacion-3": "Adjusting a brushed steel door frame strike plate pocket with a sharp wood chisel so the motorized deadbolt glides smoothly",
    "scene-baterias-2": "Removable 10,000 mAh rechargeable black lithium pack charging neatly via USB-C on a modern home desk",
    "scene-baterias-3": "Testing AA battery voltage carefully with a compact yellow digital multimeter beside an open smart lock battery cover",
    "scene-seguridad-2": "Heavy 3-inch steel security strike plate screws anchored deep into a wooden doorframe beside a thick deadbolt throw",
    "scene-seguridad-3": "Interior privacy deadlock switch toggled shut on the back plate of a satin nickel smart deadbolt in a quiet bedroom hallway",
    "scene-problemas-2": "Pressing a thin metal pin gently into the recessed factory reset pinhole inside the battery tray of a digital door lock",
    "scene-problemas-3": "Fine microfiber cloth wiping dust off a matte black capacitive keypad under clean afternoon window sunlight",
}

TOP_ARTICLE_SLUGS = [
    "teeho-te002-cerradura-huella-digital-resena-medidas-y-compatibilidad",
    "teeho-te001-cerradura-teclado-resena-medidas-y-codigos",
    "teeho-te002h-handleset-manillon-puerta-principal-resena",
    "eufy-c220-smart-lock-wifi-huella-resena-airbnb-y-medidas",
    "eufy-c210-smart-lock-wifi-economica-resena-y-compatibilidad",
    "eufy-e330-video-smart-lock-camara-2k-resena-completa",
    "schlage-encode-smart-wifi-resena-airbnb-y-medidas",
    "switchbot-lock-pro-retrofit-departamento-alquilado-resena",
    "aqara-u100-apple-homekey-resena-medidas-y-hub",
    "eufy-c33-manija-biometrica-wifi-resena-un-orificio",
    "teeho-vs-eufy-cual-cerradura-digital-elegir-casa-departamento-airbnb",
    "teeho-te001-vs-teeho-te002-diferencias-y-cual-conviene",
    "teeho-te002-vs-eufy-c220-comparativa-huella-wifi-y-precio",
    "eufy-c210-vs-eufy-c220-diferencias-huella-bateria-y-airbnb",
    "eufy-c220-vs-schlage-encode-cual-es-mejor-para-airbnb",
    "eufy-video-lock-e330-vs-s330-diferencias-camara-chime-y-precio",
    "mejores-cerraduras-digitales-para-airbnb-y-alquiler-temporal-amazon",
    "mejores-cerraduras-airbnb-con-wifi-sin-bridge-ni-suscripcion",
    "como-medir-backset-grosor-y-orificio-de-puerta-antes-de-comprar-cerradura-digital",
    "cerraduras-con-wifi-integrado-vs-puente-wifi-bridge-que-accesorios-necesitas",
]


def compute_dhash(im: Image.Image, hash_size: int = 8) -> int:
    small = im.convert("L").resize((hash_size + 1, hash_size), Image.LANCZOS)
    pixels = list(small.getdata())
    bits = 0
    for row in range(hash_size):
        offset = row * (hash_size + 1)
        for col in range(hash_size):
            bits = (bits << 1) | (1 if pixels[offset + col] > pixels[offset + col + 1] else 0)
    return bits


def call(slug: str, prompt: str) -> bytes:
    data = json.dumps({"slug": slug, "prompt": prompt}).encode()
    req = urllib.request.Request(
        ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json",
            "x-puertasinllave-token": TOKEN,
        },
    )
    with urllib.request.urlopen(req, timeout=240) as r:
        res = json.loads(r.read())
    if not res.get("ok"):
        raise RuntimeError(res.get("error"))
    with urllib.request.urlopen(res["url"] + "?v=1", timeout=120) as r:
        return r.read()


def save_variants(slug: str, raw_bytes: bytes, outdir: pathlib.Path) -> tuple[dict, int]:
    outdir.mkdir(parents=True, exist_ok=True)
    im = Image.open(io.BytesIO(raw_bytes)).convert("RGB")
    w, h = im.size
    target = 16 / 9
    if w / h > target:
        nw = int(h * target)
        im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = int(w / target)
        im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))

    dhash = compute_dhash(im)
    # Tope duro: <= 68 KB para 1200x675 (estrictamente < 100 KB como solicitó el usuario)
    sizes = {"": 1200, "-800": 800, "-400": 400}
    limits = {"": 68_000, "-800": 42_000, "-400": 18_000}
    out = {}
    for suf, width in sizes.items():
        cur_w = width
        q = 78
        while True:
            r = im.resize((cur_w, round(cur_w * 9 / 16)), Image.LANCZOS)
            buf = io.BytesIO()
            r.save(buf, "WEBP", quality=q, method=6)
            if buf.tell() <= limits[suf]:
                break
            if q > 28:
                q -= 5
            elif cur_w > 640:
                cur_w = int(cur_w * 0.88)
            else:
                break
        p = outdir / f"{slug}{suf}.webp"
        p.write_bytes(buf.getvalue())
        out[suf] = buf.tell()
    return out, dhash


def job(slug: str, prompt: str, outdir: pathlib.Path):
    final = outdir / f"{slug}.webp"
    if final.exists() and final.stat().st_size <= 68_000:
        im = Image.open(final)
        return slug, f"skip ({final.stat().st_size // 1024}KB)", compute_dhash(im)
    rawp = RAW / f"{slug}.webp"
    if rawp.exists():
        b = rawp.read_bytes()
    else:
        last = None
        for _ in range(3):
            try:
                b = call(slug, prompt)
                break
            except Exception as e:
                last = e
        else:
            return slug, f"ERROR {last}", 0
        rawp.write_bytes(b)
    sizes, dhash = save_variants(slug, b, outdir)
    return slug, f"ok {sizes[''] // 1024}KB", dhash


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "home"
    tasks = []
    if mode == "home":
        for s, p in HOME_PROMPTS.items():
            tasks.append((s, p, ROOT / "public/img/ambiente"))
        art_dir = ROOT / "src/content/articles"
        for slug in TOP_ARTICLE_SLUGS:
            f = art_dir / f"{slug}.json"
            if f.exists():
                a = json.loads(f.read_text(encoding="utf-8"))
                tasks.append(
                    (a["slug"], a["image"]["prompt"], ROOT / "public/img/articulos")
                )
    elif mode == "articles":
        for f in sorted((ROOT / "src/content/articles").glob("*.json")):
            a = json.loads(f.read_text(encoding="utf-8"))
            tasks.append(
                (a["slug"], a["image"]["prompt"], ROOT / "public/img/articulos")
            )
    elif mode == "one":
        tasks.append((sys.argv[2], sys.argv[3], ROOT / "public/img/ambiente"))

    hashes = []
    with cf.ThreadPoolExecutor(max_workers=8) as ex:
        for slug, status, dh in ex.map(lambda t: job(*t), tasks):
            if dh:
                hashes.append((slug, dh))
            print(slug, status, flush=True)

    near_dups = 0
    for i in range(len(hashes)):
        for j in range(i + 1, len(hashes)):
            dist = bin(hashes[i][1] ^ hashes[j][1]).count("1")
            if dist <= 4:
                near_dups += 1
    print(f"Auditoría visual dHash completada sobre {len(hashes)} imágenes (duplicados cercanos: {near_dups}).")


if __name__ == "__main__":
    main()
