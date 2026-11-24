"use client";

import { OPEN_CHAT_EVENT } from "@/lib/client-constants";

export default function OpenChatButton({
  label = "Consultar al Asesor de Cerraduras IA",
  prompt,
  className = "btn btn-buy",
  magnetic = false,
}: {
  label?: string;
  prompt?: string;
  className?: string;
  magnetic?: boolean;
}) {
  return (
    <button
      type="button"
      data-magnetic={magnetic ? "" : undefined}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent(OPEN_CHAT_EVENT, { detail: { prompt } })
        )
      }
      className={`cursor-pointer ${className}`}
    >
      🔐 {label}
    </button>
  );
}
