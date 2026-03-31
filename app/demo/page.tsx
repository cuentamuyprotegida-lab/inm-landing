"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  ArrowLeft,
  Bot,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

type Message = {
  from: "user" | "bot";
  text: string;
};

const BOT_RESPONSES: Record<string, { match: RegExp; response: string }[]> = {
  greeting: [
    {
      match: /^(hola|hi|hey|buenas|buenos|que tal)/i,
      response:
        "Hola! Bienvenido/a a la Demo de INM. Soy un asistente virtual de ejemplo. Podes preguntarme:\n\n1. Quiero agendar una cita\n2. Que servicios tienen?\n3. Cuales son los horarios?\n4. Cancelar mi cita",
    },
  ],
  services: [
    {
      match: /(servicio|menu|que ofrecen|que tienen|precio|2)/i,
      response:
        "Estos son nuestros servicios:\n\n- Corte de cabello: ₡8,000 (30 min)\n- Manicure: ₡12,000 (45 min)\n- Pedicure Spa: ₡15,000 (60 min)\n- Tinte completo: ₡25,000 (90 min)\n\nCual te gustaria agendar?",
    },
  ],
  schedule: [
    {
      match: /(horario|hora|cuando|disponib|abierto|3)/i,
      response:
        "Nuestro horario es:\n\nLunes a Viernes: 8:00 AM - 6:00 PM\nSabado: 9:00 AM - 3:00 PM\nDomingo: Cerrado\n\nQueres agendar una cita?",
    },
  ],
  booking: [
    {
      match: /(agendar|cita|reservar|turno|1|quiero)/i,
      response:
        "Con gusto! Para agendar necesito:\n\n1. Tu nombre\n2. Servicio que deseas\n3. Dia y hora preferida\n\nTengo disponible manana:\n- 10:00 AM\n- 2:00 PM\n- 4:30 PM\n\nCual te funciona?",
    },
  ],
  time: [
    {
      match: /(10|2|4|pm|am|manana|martes|lunes)/i,
      response:
        "Perfecto! Tu cita quedo agendada:\n\n- Servicio: Manicure\n- Fecha: Manana\n- Hora: 2:00 PM\n- Duracion: 45 minutos\n\nTe envio un recordatorio 24 horas antes. Nos vemos!",
    },
  ],
  cancel: [
    {
      match: /(cancel|reagend|cambiar cita|4)/i,
      response:
        "Entendido. Para cancelar o reagendar necesito tu nombre y la fecha de tu cita actual.\n\nSi queres reagendar, decime el nuevo dia y hora que te funcione y verifico disponibilidad.",
    },
  ],
};

function getBotResponse(input: string): string {
  for (const category of Object.values(BOT_RESPONSES)) {
    for (const entry of category) {
      if (entry.match.test(input)) {
        return entry.response;
      }
    }
  }
  return "No entendi tu mensaje. Podes preguntarme:\n\n1. Quiero agendar una cita\n2. Que servicios tienen?\n3. Cuales son los horarios?\n4. Cancelar mi cita";
}

export default function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hola! Soy el asistente virtual de Demo Salon. Estoy disponible 24/7 para ayudarte.\n\nPuedo:\n1. Agendar una cita\n2. Mostrarte nuestros servicios\n3. Informarte de horarios\n4. Cancelar/reagendar citas\n\nEn que te puedo ayudar?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);

    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    }, 800);
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-md mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition text-sm"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>

      {/* Demo badge */}
      <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-sm mb-4">
        <Sparkles size={14} />
        Demo interactiva — asi se ve tu bot
      </div>

      {/* Phone */}
      <div className="w-full max-w-md">
        <div className="bg-slate-900 rounded-[2rem] p-2 border border-slate-800 shadow-2xl shadow-emerald-500/10">
          {/* WhatsApp header */}
          <div className="bg-emerald-800 px-4 py-3 rounded-t-[1.5rem] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">
                Demo Salon - Asistente
              </p>
              <p className="text-emerald-300 text-xs">en linea</p>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-[#0b141a] h-[450px] overflow-y-auto px-3 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                    msg.from === "bot"
                      ? "bg-emerald-900/60 text-emerald-100 rounded-tl-none"
                      : "bg-slate-800 text-slate-200 rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="bg-slate-900 px-3 py-3 rounded-b-[1.5rem] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribi un mensaje..."
              className="flex-1 bg-slate-800 text-white text-sm px-4 py-2.5 rounded-full outline-none placeholder:text-slate-600 focus:ring-1 focus:ring-emerald-500/50"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition shrink-0"
            >
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA below */}
      <div className="mt-8 text-center">
        <p className="text-slate-500 text-sm mb-4">
          Esto es solo una demo. Tu bot se personaliza con tus servicios reales.
        </p>
        <a
          href="https://wa.me/506XXXXXXXX?text=Hola%2C%20vi%20la%20demo%20y%20quiero%20mi%20asistente"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-full transition"
        >
          <MessageCircle size={18} />
          Quiero mi propio asistente
        </a>
      </div>
    </div>
  );
}
