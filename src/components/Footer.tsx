"use client";

import React from "react";
import { MessageCircle, MapPin, Phone, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    "https://wa.me/554792418769?text=" +
    encodeURIComponent("Olá! Vim pelo site da CRB Estética e gostaria de agendar um horário.");

  return (
    <footer className="border-t border-white/[0.06] bg-[#060607] pt-16 pb-24 sm:pb-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0e0e11] border border-white/10 flex items-center justify-center text-[#FF5100]">
                <span className="font-display font-bold text-xs">CRB</span>
              </div>
              <span className="font-display font-bold text-base text-white tracking-wide uppercase">
                CRB Estética Automotiva
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Cuidado minucioso, tecnologia e acabamento de alto padrão.
              Atendimento com hora marcada em Timbó - SC.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/crbestetica_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @crbestetica_"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#FF5100]/40 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#FF5100]" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Atendimento"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#FF5100]/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  className="hover:text-white transition-colors"
                >
                  Avaliações Reais (Google Maps)
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  className="hover:text-white transition-colors"
                >
                  Localização & GPS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold">
              Contato & Endereço
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#FF5100] shrink-0 mt-0.5" strokeWidth={1.8} />
                <span>R. Orleans, 413 - Quintino, Timbó - SC, 89120-000</span>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-[#FF5100] shrink-0" strokeWidth={1.8} />
                <a href="tel:+554792418769" className="hover:text-white transition-colors">
                  +55 (47) 9241-8769
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-neutral-300">
                <InstagramIcon className="w-4 h-4 text-[#FF5100] shrink-0" />
                <a
                  href="https://www.instagram.com/crbestetica_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @crbestetica_
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} CRB Estética Automotiva. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Timbó • Santa Catarina</span>
            <span>•</span>
            <span className="text-neutral-400">@crbestetica_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
