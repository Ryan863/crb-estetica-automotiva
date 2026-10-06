"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { MessageCircle, Navigation, ShieldCheck, Star, MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const whatsappUrl =
    "https://wa.me/554792418769?text=" +
    encodeURIComponent("Olá! Vim pelo site da CRB Estética e gostaria de agendar um horário.");

  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("R. Orleans, 413 - Quintino, Timbó - SC, 89120-000");

  useGSAP(
    () => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 36,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.5"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-cta-group",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-spec-card",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".hero-car-visual",
          {
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1.0"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#060607]"
    >
      {/* Dynamic Background Blending Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle orange accent glow mimicking Porsche reference (Image 1) */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF5100]/[0.07] rounded-full blur-[140px] hero-radial-glow" />
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#FF5100]/[0.03] rounded-full blur-[120px]" />

        {/* Seamless section gradient transitions */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060607] via-[#060607]/80 to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Tesla Minimalist Layout - Image 3) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Tag */}
            <div className="hero-badge mb-5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5100] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5100]" />
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-300">
                Estética Automotiva de Precisão
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-[11px] font-medium text-neutral-400">
                Timbó, SC
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title-line font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
              Cuidado Extremo.{" "}
              <span className="text-gradient-accent block sm:inline">
                Acabamento Impecável.
              </span>
            </h1>

            {/* Subtitle strictly with real facts */}
            <p className="hero-description text-base sm:text-lg text-neutral-300/90 font-normal leading-relaxed max-w-xl mb-8">
              Atendimento técnico especializado em estética e detalhamento automotivo.
              Seu veículo tratado com precisão cirúrgica, técnicas avançadas e produtos de alto padrão na R. Orleans, em Timbó.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group flex flex-wrap items-center gap-4 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FF5100] hover:bg-[#ff6821] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(255,81,0,0.35)] hover:shadow-[0_0_35px_rgba(255,81,0,0.6)] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.8} />
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-neutral-200 hover:text-white font-medium text-sm transition-all duration-300 active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
                <span>Como Chegar</span>
              </a>
            </div>

            {/* Quick Metrics Bar (Tesla Spec Style) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] max-w-lg">
              <div className="hero-spec-card flex flex-col">
                <div className="flex items-center gap-1 text-[#FF5100] mb-0.5">
                  <Star className="w-4 h-4 fill-[#FF5100]" strokeWidth={1.8} />
                  <span className="font-display font-bold text-lg text-white">4.9★</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                  Google Maps
                </span>
              </div>

              <div className="hero-spec-card flex flex-col">
                <span className="font-display font-bold text-lg text-white mb-0.5">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                  Hora Marcada
                </span>
              </div>

              <div className="hero-spec-card flex flex-col">
                <span className="font-display font-bold text-lg text-white mb-0.5">
                  Timbó
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                  Santa Catarina
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Car Visual (Beetle Outlaw inspired by Images 1 & 2 blending into dark backdrop) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="hero-car-visual relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden group">
              {/* Outer ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060607] via-transparent to-[#060607]/40 z-10 pointer-events-none" />

              {/* The Hero Car Image */}
              <Image
                src="/assets/hero-car.jpg"
                alt="Fusca Outlaw Customizado com Iluminação Neon Orange - CRB Estética Automotiva"
                fill
                priority
                className="object-cover object-center filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Bottom floor fade overlay to ensure zero hard cut */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060607] via-[#060607]/80 to-transparent z-20 pointer-events-none" />

              {/* Floating aesthetic badge */}
              <div className="absolute bottom-4 right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#060607]/85 backdrop-blur-md border border-white/10 text-[11px] text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5100]" />
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  @crbestetica_ • Timbó SC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center pt-8">
        <a
          href="#avaliacoes"
          aria-label="Rolar para avaliações"
          className="flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Avaliações Reais</span>
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#FF5100] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
