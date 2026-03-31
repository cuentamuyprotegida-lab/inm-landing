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
  ],
  openGraph: {
    title: "INM | Asistente Virtual WhatsApp",
    description:
      "Tu negocio atiende clientes 24/7 por WhatsApp. Agenda citas automáticamente desde ₡35,000/mes.",
    type: "website",
    locale: "es_CR",
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
      </head>
      <body className="bg-slate-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
