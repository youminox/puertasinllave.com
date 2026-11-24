"use client";

import { useEffect, useState } from "react";
import OpenChatButton from "./OpenChatButton";
import {
  CATALOG,
  buildAmazonUrl,
  detectUserAmazonRegion,
  type AmazonStoreRegion,
} from "@/lib/amazon";
import { trackClick } from "@/lib/client-constants";

export default function ClientEffects({
  stickyBar = true,
  stickySource = "sticky-mobile",
}: {
  stickyBar?: boolean;
  stickySource?: string;
}) {
  const [show, setShow] = useState(false);
  const [region, setRegion] = useState<AmazonStoreRegion>("US");

  useEffect(() => {
    setRegion(detectUserAmazonRegion());
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    const scan = () =>
      document
        .querySelectorAll(
          "[data-reveal]:not(.is-in), .split:not(.is-in), .gel-scene:not(.is-in)"
        )
        .forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let magnet: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const t = target?.closest?.(".spot") as HTMLElement | null;
      if (t) {
        const r = t.getBoundingClientRect();
        t.style.setProperty("--mx", `${e.clientX - r.left}px`);
        t.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (!fine) return;
      const m = target?.closest?.("[data-magnetic]") as HTMLElement | null;
      if (magnet && magnet !== m) {
        magnet.style.transform = "";
        magnet = null;
      }
      if (m) {
        const r = m.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        m.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
        magnet = m;
      }
    };
    const onLeave = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!stickyBar) return null;
  const topUrl = buildAmazonUrl(CATALOG.EUFY_C220, region);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-500 md:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/15 bg-[#060a12]/95 p-2.5 pl-3.5 text-white shadow-2xl backdrop-blur-xl">
        <div className="leading-tight min-w-0">
          <p className="text-[0.65rem] uppercase tracking-wider text-white/60 truncate">
            TEEHO y eufy · 1,534 Guías
          </p>
          <p className="font-display text-sm font-extrabold truncate">
            Cerraduras{" "}
            <span className="text-xs font-semibold text-fxlime">Amazon</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <OpenChatButton
            label="Asesor IA"
            className="btn btn-glass !px-3 !py-2.5 text-xs"
          />
          <a
            href={topUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={() =>
              trackClick(stickySource, {
                article_slug: CATALOG.EUFY_C220.id,
                article_title: CATALOG.EUFY_C220.title,
                category: "amazon",
                target_url: topUrl,
              })
            }
            className="btn btn-lime shine !px-3.5 !py-2.5 text-xs"
          >
            Ver Ofertas ↗
          </a>
        </div>
      </div>
    </div>
  );
}
