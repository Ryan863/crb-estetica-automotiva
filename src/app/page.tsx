import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProofBento } from "@/components/SocialProofBento";
import { LocationRoute } from "@/components/LocationRoute";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div id="topo" className="min-h-screen bg-[#060607] text-[#FAFAFA] relative selection:bg-[#FF5100] selection:text-white">
      {/* Minimalist Header */}
      <Header />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section with Blended Car Visual & Orange Accent Lighting */}
        <Hero />

        {/* Real Customer Reviews Bento Grid (Google Maps) */}
        <SocialProofBento />

        {/* Location & Direct GPS Route */}
        <LocationRoute />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Floating Mobile WhatsApp CTA with Pulsing Indicator */}
      <FloatingWhatsApp />
    </div>
  );
}
