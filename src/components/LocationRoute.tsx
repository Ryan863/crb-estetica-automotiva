"use client";

import React, { useRef } from "react";
import { MapPin, Navigation, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function LocationRoute() {
  const containerRef = useRef<HTMLDivElement>(null);

  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("R. Orleans, 413 - Quintino, Timbó - SC, 89120-000");

  const whatsappUrl =
    "https://wa.me/554792418769?text=" +
    encodeURIComponent("Olá! Gostaria de confirmar a localização e agendar um horário na CRB Estética.");

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.from(".location-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="localizacao"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#060607] border-t border-white/[0.05]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="location-anim inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-[#FF5100] mb-4">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.8} />
            <span>Atendimento Presencial</span>
          </div>
          <h2 className="location-anim font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Localização & <span className="text-[#FF5100]">Como Chegar</span>
          </h2>
          <p className="location-anim text-neutral-300 text-base sm:text-lg">
            Estamos estrategicamente sediados em Timbó - SC, com fácil acesso para clientes de toda a região do Vale do Itajaí.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <SpotlightCard className="location-anim p-8 border-white/[0.08] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5100]/10 border border-[#FF5100]/25 flex items-center justify-center text-[#FF5100]">
                    <MapPin className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FF5100]">
                      Endereço Oficial
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      CRB Estética Automotiva
                    </h3>
                  </div>
                </div>

                {/* Structured Address */}
                <div className="space-y-4 mb-8 text-sm">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">
                      Logradouro & Bairro
                    </p>
                    <p className="text-white font-medium text-base">
                      R. Orleans, número 413
                    </p>
                    <p className="text-neutral-300">Bairro Quintino</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">
                        Cidade & Estado
                      </p>
                      <p className="text-white font-medium">Timbó - SC</p>
                    </div>
                    <div className="text-right">
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">
                        CEP
                      </p>
                      <p className="text-neutral-300 font-mono text-xs">89120-000</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
                    <span className="text-xs text-neutral-300">
                      Atendimento exclusivo com agendamento prévio
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-white/[0.08]">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="directions-action-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#FF5100] hover:bg-[#ff6821] text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,81,0,0.3)] hover:shadow-[0_0_35px_rgba(255,81,0,0.55)] active:scale-95"
                >
                  <Navigation className="w-4 h-4" strokeWidth={1.8} />
                  <span>Abrir Rota no Google Maps</span>
                </a>

                <a
                  href="tel:+554792418769"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-neutral-200 hover:text-white font-medium text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
                  <span>Ligar: (47) 9241-8769</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Interactive Google Maps Frame Column */}
          <div className="lg:col-span-7 location-anim h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/[0.08] relative group">
            {/* Dark Styled Map Overlay */}
            <iframe
              title="Mapa de Localização - CRB Estética Automotiva Timbó"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.843132641042!2d-49.2731!3d-26.8277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzM5LjciUyA0OcKwMTYnMjMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Quick Route Floating Card inside Map */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#060607]/90 backdrop-blur-md border border-white/10 shadow-xl pointer-events-auto">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5100] animate-pulse" />
                <span className="text-xs font-semibold text-white">
                  Ponto de Atendimento CRB
                </span>
              </div>
              <p className="text-[12px] text-neutral-400 mb-3">
                R. Orleans, 413 - Quintino, Timbó - SC
              </p>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#FF5100] hover:underline inline-flex items-center gap-1"
              >
                <span>Navegar via GPS</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
