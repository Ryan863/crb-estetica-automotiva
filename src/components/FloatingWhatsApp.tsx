"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phone = "554792418769";
  const defaultMessage = "Olá! Vim pelo site da CRB Estética e gostaria de agendar um horário.";
  const encodedMsg = encodeURIComponent(defaultMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Atendimento WhatsApp CRB Estética"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-[#FF5100] hover:bg-[#ff6821] text-white rounded-full shadow-2xl shadow-[#FF5100]/40 transition-transform active:scale-95 duration-200"
      >
        {/* Micro-Pulse Attention Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#FF5100] opacity-80" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white/90 border-2 border-[#FF5100]" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2 stroke-[2]" />
        <span className="hidden sm:inline font-semibold text-sm tracking-wide">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
