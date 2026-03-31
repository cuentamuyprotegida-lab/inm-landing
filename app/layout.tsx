import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INM | Asistente Virtual WhatsApp para tu Negocio",
  description:
    "Tu negocio atiende clientes 24/7 por WhatsApp. Agenda citas, responde consultas y envía recordatorios automáticamente. Desde ₡35,000/mes.",
  keywords: [
    "bot WhatsApp",
    "asistente virtual",
    "agendar citas",
    "chatbot Costa Rica",
    "automatización negocios",
    "recepcionista virtual",
    "WhatsApp Business",
    "bot citas",
    "recepcionista digital",
    "automatización WhatsApp",
  ],
  openGraph: {
    title: "INM | Asistente Virtual WhatsApp",
    description:
      "Tu negocio atiende clientes 24/7 por WhatsApp. Agenda citas automáticamente desde ₡35,000/mes.",
    type: "website",
    locale: "es_CR",
    siteName: "INM",
  },
  twitter: {
    card: "summary_large_image",
    title: "INM | Asistente Virtual WhatsApp",
    description:
      "Tu negocio atiende clientes 24/7 por WhatsApp. Agenda citas automáticamente desde ₡35,000/mes.",
  },
  alternates: {
    canonical: "https://inm.cr",
  },
  other: {
    "google-site-verification": "PENDING",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "INM - Asistente Virtual WhatsApp",
              description:
                "Asistente virtual por WhatsApp que agenda citas 24/7 para negocios en Costa Rica.",
              url: "https://inm.cr",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Heredia",
                addressCountry: "CR",
              },
              priceRange: "₡35,000 - ₡80,000/mes",
              areaServed: {
                "@type": "Country",
                name: "Costa Rica",
              },
              serviceType: [
                "Chatbot WhatsApp",
                "Automatización de citas",
                "Asistente virtual",
              ],
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "35000",
                highPrice: "80000",
                priceCurrency: "CRC",
                offerCount: 3,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Necesito conocimiento técnico para usar el asistente virtual?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Nosotros configuramos todo. Solo necesitas decirnos tus servicios, horarios y precios. En menos de 2 horas está listo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto cuesta el asistente virtual WhatsApp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desde ₡35,000 colones al mes para el plan básico. Incluye bot 24/7, agenda automática y recordatorios. Sin contratos de permanencia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen prueba gratis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Ofrecemos 1 semana de prueba gratuita sin compromiso ni contrato.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-slate-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
