"use client";

import React, { useRef } from "react";
import { Star, ShieldCheck, Quote, CheckCircle2, MessageCircle } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment?: string;
  highlight?: string;
  verified: boolean;
  city?: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "edson",
    name: "Edson Deus",
    rating: 5,
    comment: "Muito bao lavação sou de Blumenau e recomendo só lavo meu carro nessa lavação",
    highlight: "Cliente fiel de Blumenau que se desloca até Timbó para o serviço",
    verified: true,
    city: "Blumenau - SC",
  },
  {
    id: "cristiano",
    name: "Cristiano Barreto",
    rating: 5,
    comment: "Muito Bom",
    verified: true,
  },
  {
    id: "fernando",
    name: "Fernando Roberto Dalpiaz",
    rating: 5,
    comment: "Recomendo",
    verified: true,
  },
  {
    id: "arthur",
    name: "Arthur",
    rating: 4,
    comment: "Qualidade em primeiro lugar",
    verified: true,
  },
  {
    id: "melissa",
    name: "Melissa Barreto de Deus",
    rating: 5,
    comment: "Bom bom",
    verified: true,
  },
  {
    id: "ryan",
    name: "Ryan Barreto #XMG",
    rating: 5,
    comment: "Avaliação 5 estrelas verificada no Google Maps",
    verified: true,
  },
];

export function SocialProofBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.from(".bento-header-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".bento-card-anim", {
        scrollTrigger: {
          trigger: ".bento-grid-target",
          start: "top 78%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="avaliacoes"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#060607] border-t border-white/[0.05] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5100]/[0.025] blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="bento-header-anim inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-[#FF5100] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.8} />
              <span>Opinião de Quem Confia</span>
            </div>
            <h2 className="bento-header-anim font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Avaliações Reais no{" "}
              <span className="text-[#FF5100]">Google Maps</span>
            </h2>
          </div>

          {/* Rating Summary Pill (Tesla Style Minimalist Counter) */}
          <div className="bento-header-anim flex items-center gap-4 p-3.5 px-5 rounded-2xl bg-[#0e0e11] border border-white/10 w-fit">
            <div className="flex items-center gap-1.5 text-[#FF5100]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                  strokeWidth={1.8}
                />
              ))}
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div className="text-xs">
              <span className="font-display font-bold text-white text-sm">4.9 / 5.0</span>
              <span className="text-neutral-400 ml-1.5 font-normal">Nota Média</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="bento-grid-target grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured Card (Edson Deus - Blumenau client quote) */}
          <SpotlightCard className="bento-card-anim md:col-span-2 lg:col-span-2 p-7 flex flex-col justify-between border-white/[0.08] hover:border-[#FF5100]/40">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-1 text-[#FF5100]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                      strokeWidth={1.8}
                    />
                  ))}
                  <span className="ml-2 text-xs font-mono font-medium text-neutral-400">
                    5.0
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#FF5100] bg-[#FF5100]/10 px-2.5 py-1 rounded-full border border-[#FF5100]/20">
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={1.8} />
                  <span>Avaliação Verificada</span>
                </div>
              </div>

              <Quote className="w-8 h-8 text-[#FF5100]/30 mb-3" strokeWidth={1.5} />

              <p className="text-lg sm:text-xl font-normal text-neutral-100 leading-relaxed mb-4">
                &ldquo;Muito bao lavação sou de Blumenau e recomendo só lavo meu carro nessa lavação&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-base">
                  Edson Deus
                </h4>
                <p className="text-xs text-neutral-400">
                  Cliente de Blumenau • Atendimento em Timbó
                </p>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">
                Google Review
              </span>
            </div>
          </SpotlightCard>

          {/* Card 2: Arthur - Qualidade em primeiro lugar */}
          <SpotlightCard className="bento-card-anim p-7 flex flex-col justify-between border-white/[0.08] hover:border-[#FF5100]/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#FF5100]">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                      strokeWidth={1.8}
                    />
                  ))}
                  <Star className="w-4 h-4 text-neutral-600" strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-medium text-neutral-400 font-mono">
                  4.0
                </span>
              </div>

              <p className="text-base font-normal text-neutral-200 leading-relaxed mb-6">
                &ldquo;Qualidade em primeiro lugar&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-sm">
                  Arthur
                </h4>
                <p className="text-xs text-neutral-400">Avaliação no Google Maps</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
            </div>
          </SpotlightCard>

          {/* Card 3: Cristiano Barreto */}
          <SpotlightCard className="bento-card-anim p-7 flex flex-col justify-between border-white/[0.08] hover:border-[#FF5100]/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#FF5100]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-neutral-400 font-mono">
                  5.0
                </span>
              </div>

              <p className="text-base font-normal text-neutral-200 leading-relaxed mb-6">
                &ldquo;Muito Bom&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-sm">
                  Cristiano Barreto
                </h4>
                <p className="text-xs text-neutral-400">Avaliação no Google Maps</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
            </div>
          </SpotlightCard>

          {/* Card 4: Fernando Roberto Dalpiaz */}
          <SpotlightCard className="bento-card-anim p-7 flex flex-col justify-between border-white/[0.08] hover:border-[#FF5100]/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#FF5100]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-neutral-400 font-mono">
                  5.0
                </span>
              </div>

              <p className="text-base font-normal text-neutral-200 leading-relaxed mb-6">
                &ldquo;Recomendo&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-sm">
                  Fernando Roberto Dalpiaz
                </h4>
                <p className="text-xs text-neutral-400">Avaliação no Google Maps</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
            </div>
          </SpotlightCard>

          {/* Card 5: Melissa Barreto de Deus */}
          <SpotlightCard className="bento-card-anim p-7 flex flex-col justify-between border-white/[0.08] hover:border-[#FF5100]/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#FF5100]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-neutral-400 font-mono">
                  5.0
                </span>
              </div>

              <p className="text-base font-normal text-neutral-200 leading-relaxed mb-6">
                &ldquo;Bom bom&rdquo;
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-sm">
                  Melissa Barreto de Deus
                </h4>
                <p className="text-xs text-neutral-400">Avaliação no Google Maps</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
            </div>
          </SpotlightCard>

          {/* Card 6: Ryan Barreto #XMG */}
          <SpotlightCard className="bento-card-anim p-7 flex flex-col justify-between border-white/[0.08] hover:border-[#FF5100]/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#FF5100]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FF5100] text-[#FF5100]"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-neutral-400 font-mono">
                  5.0
                </span>
              </div>

              <p className="text-base font-normal text-neutral-300 leading-relaxed mb-6">
                Classificação máxima de 5 estrelas registrada diretamente pelo perfil verificado no Google Maps.
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-sm">
                  Ryan Barreto #XMG
                </h4>
                <p className="text-xs text-neutral-400">Avaliação no Google Maps</p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-[#FF5100]" strokeWidth={1.8} />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
