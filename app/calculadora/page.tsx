"use client";

import { useState } from "react";
import {
  Calculator,
  ArrowLeft,
  MessageCircle,
  TrendingUp,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/506XXXXXXXX?text=Hola%2C%20us%C3%A9%20la%20calculadora%20y%20quiero%20saber%20m%C3%A1s";

export default function CalculadoraPage() {
  const [citasPerdidas, setCitasPerdidas] = useState(8);
  const [precioPromedio, setPrecioPromedio] = useState(15000);
  const [plan, setPlan] = useState<"basico" | "profesional" | "premium">(
    "basico"
  );

  const planPrices = {
    basico: 35000,
    profesional: 55000,
    premium: 80000,
  };

  const costoPlan = planPrices[plan];
  const perdidaMensual = citasPerdidas * precioPromedio;
  const recuperado = Math.round(perdidaMensual * 0.85); // 85% recovery rate
  const ganancianeta = recuperado - costoPlan;
  const roi = costoPlan > 0 ? Math.round((ganancianeta / costoPlan) * 100) : 0;
  const recepcionistaCosto = 200000;

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-sm mb-4">
            <Calculator size={14} />
            Herramienta gratuita
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Calculadora de ROI
          </h1>
          <p className="text-slate-400">
            Descubri cuanto dinero estas perdiendo y cuanto recuperarias con un
            asistente virtual.
          </p>
        </div>

        {/* Calculator */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          {/* Input: Citas perdidas */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Citas perdidas al mes por no contestar rapido
            </label>
            <input
              type="range"
              min={1}
              max={30}
              value={citasPerdidas}
              onChange={(e) => setCitasPerdidas(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>1</span>
              <span className="text-2xl font-black text-emerald-400">
                {citasPerdidas}
              </span>
              <span>30</span>
            </div>
          </div>

          {/* Input: Precio promedio */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Precio promedio de una cita (colones)
            </label>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={precioPromedio}
              onChange={(e) => setPrecioPromedio(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>₡5,000</span>
              <span className="text-2xl font-black text-emerald-400">
                ₡{precioPromedio.toLocaleString()}
              </span>
              <span>₡50,000</span>
            </div>
          </div>

          {/* Input: Plan */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Plan
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(
                [
                  ["basico", "Basico", "₡35,000"],
                  ["profesional", "Profesional", "₡55,000"],
                  ["premium", "Premium", "₡80,000"],
                ] as const
              ).map(([key, label, price]) => (
                <button
                  key={key}
                  onClick={() => setPlan(key)}
                  className={`p-3 rounded-xl text-center transition ${
                    plan === key
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  <p className="text-sm font-bold">{label}</p>
                  <p className="text-xs mt-1">{price}/mes</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Money lost */}
          <div className="bg-red-950/30 border border-red-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-red-400 mb-3">
              <AlertTriangle size={18} />
              <span className="text-sm font-semibold">Estas perdiendo</span>
            </div>
            <p className="text-3xl font-black text-red-400">
              ₡{perdidaMensual.toLocaleString()}
            </p>
            <p className="text-sm text-red-400/60 mt-1">al mes en citas perdidas</p>
          </div>

          {/* Money recovered */}
          <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <TrendingUp size={18} />
              <span className="text-sm font-semibold">
                Recuperarias
              </span>
            </div>
            <p className="text-3xl font-black text-emerald-400">
              ₡{recuperado.toLocaleString()}
            </p>
            <p className="text-sm text-emerald-400/60 mt-1">
              85% de citas recuperadas con el bot
            </p>
          </div>
        </div>

        {/* Net result */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-slate-500 mb-1">Costo del plan</p>
              <p className="text-xl font-bold text-slate-300">
                ₡{costoPlan.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Ganancia neta</p>
              <p
                className={`text-xl font-bold ${
                  ganancianeta > 0 ? "text-emerald-400" : "text-red-400"
                }`}
              >
                ₡{ganancianeta.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">ROI</p>
              <p
                className={`text-xl font-bold ${
                  roi > 0 ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {roi}%
              </p>
            </div>
          </div>

          {ganancianeta > 0 && (
            <div className="mt-6 p-4 bg-emerald-900/20 rounded-xl text-center">
              <p className="text-emerald-300 text-sm">
                Por cada ₡1 que invertis en el bot, recuperas{" "}
                <strong>₡{((recuperado / costoPlan)).toFixed(1)}</strong>
              </p>
            </div>
          )}

          {/* Comparison with receptionist */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-xl">
            <p className="text-sm text-slate-400">
              <DollarSign size={14} className="inline text-slate-500" />{" "}
              Comparado con una recepcionista (₡{recepcionistaCosto.toLocaleString()}/mes), el
              bot te ahorra{" "}
              <strong className="text-white">
                ₡{(recepcionistaCosto - costoPlan).toLocaleString()}/mes
              </strong>
              {" "}y trabaja el triple de horas.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition text-lg"
          >
            <MessageCircle size={20} />
            Quiero recuperar esas citas
          </a>
          <p className="text-slate-600 text-sm mt-4">
            Prueba gratis 1 semana. Sin contrato.
          </p>
        </div>
      </div>
    </div>
  );
}
