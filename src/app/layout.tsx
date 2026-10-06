import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crbestetica.com.br"),
  title: "CRB Estética Automotiva | Timbó - SC | @crbestetica_",
  description:
    "Estética Automotiva de alto padrão em Timbó - SC. Cuidado minucioso, acabamento impecável e atendimento exclusivo. Agende pelo WhatsApp.",
  keywords: [
    "CRB Estética Automotiva",
    "Estética Automotiva Timbó",
    "Polimento Timbó SC",
    "Lavação detalhada Timbó",
    "Vitrificação Timbó",
    "Higienização interna Timbó",
    "Quintino Timbó SC"
  ],
  authors: [{ name: "CRB Estética Automotiva" }],
  openGraph: {
    title: "CRB Estética Automotiva | Timbó - SC",
    description: "Estética Automotiva de alto padrão em Timbó - SC. Cuidado minucioso e acabamento impecável.",
    url: "https://crbestetica.com.br",
    siteName: "CRB Estética Automotiva",
    images: [
      {
        url: "/assets/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "CRB Estética Automotiva - Detailing de Alta Precisão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRB Estética Automotiva | Timbó - SC",
    description: "Estética automotiva especializada com agendamento direto pelo WhatsApp.",
    images: ["/assets/hero-car.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "CRB Estética Automotiva",
  "image": "https://crbestetica.com.br/assets/hero-car.jpg",
  "telephone": "+554792418769",
  "url": "https://www.instagram.com/crbestetica_/",
  "sameAs": [
    "https://www.instagram.com/crbestetica_/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Orleans, número 413",
    "addressLocality": "Timbó",
    "addressRegion": "SC",
    "postalCode": "89120-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -26.8277,
    "longitude": -49.2731
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "6"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Edson Deus" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Muito bao lavação sou de Blumenau e recomendo só lavo meu carro nessa lavação"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Cristiano Barreto" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Muito Bom"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Fernando Roberto Dalpiaz" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Recomendo"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Arthur" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "reviewBody": "Qualidade em primeiro lugar"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Melissa Barreto de Deus" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Bom bom"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ryan Barreto #XMG" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Excelente atendimento e cuidado minucioso."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060607] text-[#FAFAFA] min-h-screen selection:bg-[#FF5100] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
