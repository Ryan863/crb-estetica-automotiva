"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function Header() {
  const whatsappUrl =
    "https://wa.me/554792418769?text=" +
    encodeURIComponent("Olá! Vim pelo site da CRB Estética e gostaria de agendar um horário.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#060607]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#topo"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1b1b22] to-[#0e0e11] border border-white/10 flex items-center justify-center text-[#FF5100] group-hover:border-[#FF5100]/40 transition-colors">
            <span className="font-display font-bold text-sm tracking-tighter">CRB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm tracking-wider uppercase font-semibold text-white flex items-center gap-1.5">
              CRB Estética Automotiva
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5100]" />
            </span>
            <span className="text-[11px] text-[#8e8e98] tracking-widest uppercase">
              Timbó • Santa Catarina
            </span>
          </div>
        </a>

        {/* Center Nav - Tesla Minimalist Style */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-neutral-400">
          <a
            href="#hero"
            className="hover:text-white transition-colors duration-200"
          >
            Início
          </a>
          <a
            href="#avaliacoes"
            className="hover:text-white transition-colors duration-200"
          >
            Avaliações Reais
          </a>
          <a
            href="#localizacao"
            className="hover:text-white transition-colors duration-200"
          >
            Localização & Rota
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/crbestetica_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @crbestetica_"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-neutral-300 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#FF5100]" />
            <span className="hidden sm:inline">@crbestetica_</span>
          </a>

          {/* WhatsApp Primary CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5100] hover:bg-[#ff6821] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(255,81,0,0.35)] hover:shadow-[0_0_28px_rgba(255,81,0,0.55)] active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.8} />
            <span>Agendar Horário</span>
          </a>
        </div>
      </div>
    </header>
  );
}
