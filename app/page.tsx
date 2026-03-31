"use client";

import {
  MessageCircle,
  Calendar,
  Clock,
  Bell,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Phone,
  ChevronDown,
  Bot,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

/* ─────────────── WHATSAPP CTA LINK ─────────────── */
const WA_LINK =
  "https://wa.me/506XXXXXXXX?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20asistente%20virtual%20WhatsApp";

/* ─────────────── NAV ─────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold gradient-text">INM</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition">
            Funciones
          </a>
          <a href="#how" className="hover:text-white transition">
            Como funciona
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Precios
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition flex items-center gap-2"
        >
          <MessageCircle size={16} />
          Contactar
        </a>
      </div>
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-slate-950 to-slate-950" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-sm mb-6">
            <Sparkles size={14} />
            Inteligencia Artificial para tu negocio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Tu negocio atiende{" "}
            <span className="gradient-text">24/7</span> por WhatsApp
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">
            Un asistente virtual que agenda citas, responde consultas y envia
            recordatorios automaticamente. Tu{" "}
            <strong className="text-white">recepcionista digital</strong> que
            nunca descansa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 text-lg animate-pulse-glow"
            >
              <MessageCircle size={20} />
              Quiero mi asistente
            </a>
            <a
              href="#how"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-8 py-4 rounded-full transition flex items-center justify-center gap-2"
            >
              Ver como funciona
              <ArrowRight size={16} />
            </a>
          </div>
          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-emerald-800 border-2 border-slate-950 flex items-center justify-center text-xs text-emerald-300"
                >
                  {["K", "S", "R"][i - 1]}
                </div>
              ))}
            </div>
            <span>Negocios en Heredia ya lo usan</span>
          </div>
        </div>

        {/* Phone mockup with chat */}
        <div className="animate-fade-in-up delay-300 flex justify-center">
          <PhoneMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

/* ─────────────── PHONE MOCKUP ─────────────── */
function PhoneMockup() {
  return (
    <div className="relative w-[300px] md:w-[340px]">
      {/* Phone frame */}
      <div className="bg-slate-900 rounded-[2.5rem] p-3 border border-slate-800 shadow-2xl shadow-emerald-500/10">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-slate-950 rounded-[2rem] overflow-hidden">
          {/* WhatsApp header */}
          <div className="bg-emerald-800 px-4 py-3 pt-8 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Asistente Virtual
              </p>
              <p className="text-emerald-300 text-xs">en linea</p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="px-3 py-4 space-y-3 min-h-[380px] bg-[#0b141a]">
            <ChatMsg
              from="user"
              text="Hola, quiero agendar una cita para manana"
              time="10:32"
            />
            <ChatMsg
              from="bot"
              text="Hola! Con gusto te ayudo. Tengo disponible manana a las 10:00 AM, 2:00 PM y 4:30 PM. Cual te funciona mejor?"
              time="10:32"
            />
            <ChatMsg from="user" text="A las 2 PM perfecto" time="10:33" />
            <ChatMsg
              from="bot"
              text="Listo! Tu cita quedo agendada para manana martes a las 2:00 PM. Te envio un recordatorio 24 horas antes. Nos vemos!"
              time="10:33"
            />
            <div className="flex justify-center">
              <span className="bg-emerald-900/40 text-emerald-400 text-xs px-3 py-1 rounded-full">
                Respuesta en 2 segundos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-4 top-20 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-float shadow-lg">
        24/7
      </div>
      <div className="absolute -left-4 bottom-32 bg-slate-800 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full animate-float delay-200 shadow-lg border border-slate-700">
        IA Inteligente
      </div>
    </div>
  );
}

function ChatMsg({
  from,
  text,
  time,
}: {
  from: "user" | "bot";
  text: string;
  time: string;
}) {
  const isBot = from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
          isBot
            ? "bg-emerald-900/60 text-emerald-100 rounded-tl-none"
            : "bg-slate-800 text-slate-200 rounded-tr-none"
        }`}
      >
        <p>{text}</p>
        <p
          className={`text-[10px] mt-1 ${
            isBot ? "text-emerald-500" : "text-slate-500"
          } text-right`}
        >
          {time}
        </p>
      </div>
    </div>
  );
}

/* ─────────────── STATS ─────────────── */
function Stats() {
  const stats = [
    { value: "24/7", label: "Disponible siempre", icon: Clock },
    { value: "2s", label: "Tiempo de respuesta", icon: Zap },
    { value: "85%", label: "Menos llamadas perdidas", icon: Phone },
    { value: "₡35K", label: "Desde al mes", icon: TrendingUp },
  ];
  return (
    <section className="py-16 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon size={24} className="mx-auto text-emerald-500 mb-3" />
            <p className="text-3xl font-black gradient-text">{s.value}</p>
            <p className="text-sm text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── PROBLEM / SOLUTION ─────────────── */
function Problem() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problem */}
          <div>
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              El problema
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-6">
              Tu negocio pierde clientes mientras dormis
            </h2>
            <div className="space-y-4">
              {[
                "Clientes escriben fuera de horario y nunca reciben respuesta",
                "Llamadas perdidas = citas perdidas = dinero perdido",
                "Una recepcionista cuesta ₡200,000/mes y trabaja 8 horas",
                "Agendar manualmente por WhatsApp consume horas del dia",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <p className="text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              La solucion
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-6">
              Un asistente que trabaja por vos, siempre
            </h2>
            <div className="space-y-4">
              {[
                "Responde al instante, cualquier hora del dia o noche",
                "Agenda citas automaticamente sin errores ni traslapes",
                "Envia recordatorios 24h antes — reduce cancelaciones un 60%",
                "Cuesta menos que 1 dia de salario de una recepcionista",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle
                    size={18}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FEATURES ─────────────── */
function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Agenda Citas Automatico",
      desc: "El bot revisa disponibilidad real y agenda sin conflictos. Maneja cancelaciones y reagendados.",
    },
    {
      icon: Bell,
      title: "Recordatorios 24h",
      desc: "Envia un mensaje automatico al cliente un dia antes de su cita. Reduce no-shows drasticamente.",
    },
    {
      icon: MessageCircle,
      title: "Conversacion Natural",
      desc: "Powered by inteligencia artificial. Entiende contexto, responde como un humano, en espanol.",
    },
    {
      icon: Clock,
      title: "24/7 sin pausas",
      desc: "Tu negocio atiende de noche, fines de semana y feriados. Nunca pierdas un cliente.",
    },
    {
      icon: Shield,
      title: "Seguro y Confiable",
      desc: "Mensajes cifrados, rate limiting anti-spam, logs de cada conversacion para tu control.",
    },
    {
      icon: Users,
      title: "Multi-servicio",
      desc: "Configurable para cualquier negocio: salon, clinica, veterinaria, restaurante, gimnasio.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Funciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Todo lo que necesitas, nada que sobre
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Cada funcion esta disenada para que tu negocio atienda mas clientes
            con menos esfuerzo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 hover:border-emerald-500/30 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition">
                <f.icon size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── HOW IT WORKS ─────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Conversamos",
      desc: "Te contactas por WhatsApp. Hablamos de tu negocio, servicios y horarios. 15 minutos.",
    },
    {
      num: "02",
      title: "Configuramos",
      desc: "Configuramos el bot con tus servicios, precios y horario. Listo en menos de 2 horas.",
    },
    {
      num: "03",
      title: "Tu negocio atiende solo",
      desc: "El asistente empieza a atender. Tus clientes agendan 24/7 y vos te concentras en tu trabajo.",
    },
  ];

  return (
    <section id="how" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Activo en menos de 2 horas
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-1/2" />
              )}
              <div className="text-5xl font-black text-emerald-500/20 mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIAL ─────────────── */
function Testimonial() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Caso de exito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Negocios reales, resultados reales
          </h2>
        </div>
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={20}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8">
            &ldquo;Desde que activamos el asistente, mis clientas agendan solas
            a cualquier hora. Ya no pierdo citas por no contestar rapido.
            Es como tener una recepcionista que nunca descansa.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-lg font-bold">
              K
            </div>
            <div>
              <p className="font-bold">Karolina Madrigal</p>
              <p className="text-sm text-slate-500">
                GLAM NAILS — Heredia, Costa Rica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PRICING ─────────────── */
function Pricing() {
  const plans = [
    {
      name: "Basico",
      subtitle: "Salones y barberias",
      price: "35,000",
      setup: "75,000",
      features: [
        "Bot WhatsApp 24/7",
        "Agenda automatica de citas",
        "Recordatorios 24h antes",
        "Hasta 3 servicios configurados",
        "Soporte por WhatsApp",
      ],
      cta: "Empezar ahora",
      popular: false,
    },
    {
      name: "Profesional",
      subtitle: "Clinicas y spas",
      price: "55,000",
      setup: "150,000",
      features: [
        "Todo lo del plan Basico",
        "Servicios ilimitados",
        "Cancelacion/reagendado inteligente",
        "Reenvio de imagenes de referencia",
        "Reportes mensuales",
        "Soporte prioritario",
      ],
      cta: "Elegir Profesional",
      popular: true,
    },
    {
      name: "Premium",
      subtitle: "Todo incluido",
      price: "80,000",
      setup: "Gratis",
      features: [
        "Todo lo del plan Profesional",
        "Setup gratis (ahorra ₡150,000)",
        "Integracion con Google Calendar",
        "Personalizacion avanzada del bot",
        "Dashboard de metricas",
        "Soporte dedicado",
      ],
      cta: "Contactar",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Menos que un dia de salario de recepcionista
          </h2>
          <p className="text-slate-500 mt-4">
            Sin contratos. Cancela cuando quieras. Prueba gratis 1 semana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition ${
                plan.popular
                  ? "bg-gradient-to-b from-emerald-900/40 to-slate-900 border-2 border-emerald-500/50 scale-105"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full">
                  MAS POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.subtitle}</p>
              <div className="mb-2">
                <span className="text-4xl font-black">₡{plan.price}</span>
                <span className="text-slate-500">/mes</span>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                Setup: {plan.setup === "Gratis" ? plan.setup : `₡${plan.setup}`}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3 rounded-full transition ${
                  plan.popular
                    ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                    : "border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Precios en colones costarricenses. Se acepta SINPE Movil y
          transferencia bancaria.
        </p>
      </div>
    </section>
  );
}

/* ─────────────── COMPARISON ─────────────── */
function Comparison() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Recepcionista vs Asistente Virtual
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {/* Header */}
          <div className="font-bold text-slate-500 p-4" />
          <div className="font-bold text-center p-4 bg-slate-800/50 rounded-t-xl text-red-400">
            Recepcionista
          </div>
          <div className="font-bold text-center p-4 bg-emerald-900/30 rounded-t-xl text-emerald-400">
            Asistente INM
          </div>
          {/* Rows */}
          {[
            ["Costo mensual", "₡200,000+", "₡35,000"],
            ["Horario", "8 horas/dia", "24/7"],
            ["Tiempo respuesta", "1-30 minutos", "2 segundos"],
            ["Dias libres", "Si (vacaciones, incapacidad)", "Nunca"],
            ["Errores de agenda", "Frecuentes", "Cero traslapes"],
            ["Recordatorios", "Manual", "Automatico"],
            ["Escalable", "1 persona = 1 limite", "Ilimitado"],
          ].map(([label, trad, inm], i) => (
            <div key={label} className="contents">
              <div
                className={`p-4 text-slate-400 font-medium ${
                  i % 2 === 0 ? "bg-slate-800/20" : ""
                }`}
              >
                {label}
              </div>
              <div
                className={`p-4 text-center text-slate-500 ${
                  i % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"
                }`}
              >
                {trad}
              </div>
              <div
                className={`p-4 text-center text-emerald-400 font-semibold ${
                  i % 2 === 0 ? "bg-emerald-900/20" : "bg-emerald-900/10"
                }`}
              >
                {inm}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FAQ ─────────────── */
function FAQ() {
  const faqs = [
    {
      q: "Necesito algun conocimiento tecnico?",
      a: "No. Nosotros nos encargamos de todo. Vos solo nos decis tus servicios, horarios y precios. En menos de 2 horas esta listo.",
    },
    {
      q: "Funciona con mi numero de WhatsApp actual?",
      a: "El bot usa un numero dedicado para tu negocio via WhatsApp Business API. Tus clientes escriben a ese numero y el bot responde automaticamente.",
    },
    {
      q: "Que pasa si un cliente hace una pregunta que el bot no sabe?",
      a: "El bot esta entrenado para manejar las consultas mas comunes de tu negocio. Si algo se sale de lo normal, te reenvia el mensaje para que vos respondas.",
    },
    {
      q: "Puedo cancelar en cualquier momento?",
      a: "Si. No hay contratos ni permanencia minima. Cancelas cuando quieras, sin preguntas.",
    },
    {
      q: "Cuanto tarda en estar activo?",
      a: "Desde que nos envias la info de tu negocio, en menos de 2 horas tu bot esta funcionando y atendiendo clientes.",
    },
    {
      q: "Ofrecen prueba gratis?",
      a: "Si. Te damos 1 semana gratis para que pruebes el bot con tus clientes reales. Si no te convence, no pagas nada.",
    },
    {
      q: "Puedo ver las conversaciones del bot?",
      a: "Si. Tenes acceso a un registro de todas las conversaciones y citas agendadas. Transparencia total.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="glass rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5">
        <h3 className="font-semibold text-sm md:text-base">{q}</h3>
        <ChevronDown
          size={18}
          className={`text-slate-500 transition-transform shrink-0 ml-4 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────── FINAL CTA ─────────────── */
function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Deja de perder clientes.
          <br />
          <span className="gradient-text">Activa tu asistente hoy.</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          Prueba gratis 1 semana. Sin contratos. Sin riesgo. Tu negocio merece
          atender a cada cliente, siempre.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-10 py-5 rounded-full text-lg transition animate-pulse-glow"
        >
          <MessageCircle size={24} />
          Escribime por WhatsApp
        </a>
        <p className="text-slate-600 text-sm mt-6">
          Respondo en menos de 1 hora durante horario laboral
        </p>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-slate-600">
          INM 2026. Heredia, Costa Rica.
        </span>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition">
            WhatsApp
          </a>
          <span>hola@inm.cr</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── PAGE ─────────────── */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <Features />
      <HowItWorks />
      <Testimonial />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
