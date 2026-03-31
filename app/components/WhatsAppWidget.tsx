"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WA_LINK =
  "https://wa.me/506XXXXXXXX?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20asistente%20virtual%20WhatsApp";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup */}
      {open && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-[320px] overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-emerald-700 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                J
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Jeremy — INM</p>
                <p className="text-emerald-200 text-xs">
                  Respondo en menos de 1 hora
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-emerald-200 hover:text-white transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 bg-[#e5ddd5]">
            <div className="bg-white rounded-lg px-3 py-2 shadow-sm max-w-[85%]">
              <p className="text-slate-800 text-sm">
                Hola! Queres saber como funciona el asistente virtual para tu
                negocio? Escribime y te cuento en 5 minutos.
              </p>
              <p className="text-slate-400 text-[10px] text-right mt-1">
                ahora
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="p-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-full transition w-full text-sm"
            >
              <MessageCircle size={16} />
              Abrir WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition hover:scale-110"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
