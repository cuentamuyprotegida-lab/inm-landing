const pptxgen = require("C:/Users/inmgo/AppData/Roaming/npm/node_modules/pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "INM — Asistente Virtual WhatsApp";

// Color palette
const BG = "0F1923";       // Dark navy
const BG2 = "162030";      // Slightly lighter navy (for cards)
const GREEN = "10B981";    // Emerald green
const GREEN_DARK = "059669"; // Darker green
const WHITE = "FFFFFF";
const GRAY = "94A3B8";
const LIGHT = "E2E8F0";

// ─── SLIDE 1 — Cover ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Left green accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.22, h: 5.625,
    fill: { color: GREEN }, line: { color: GREEN }
  });

  // Bottom green strip
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.1, w: 10, h: 0.525,
    fill: { color: GREEN_DARK }, line: { color: GREEN_DARK }
  });

  // Large decorative circle (right side, behind text)
  s.addShape(pres.shapes.OVAL, {
    x: 5.5, y: -1.5, w: 6.5, h: 6.5,
    fill: { color: "162030" }, line: { color: "1E3048", width: 1 }
  });

  // Inner circle accent
  s.addShape(pres.shapes.OVAL, {
    x: 6.8, y: -0.6, w: 4.0, h: 4.0,
    fill: { color: "0F2535" }, line: { color: GREEN, width: 2 }
  });

  // INM label
  s.addText("INM", {
    x: 0.45, y: 0.5, w: 2, h: 0.6,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: GREEN, charSpacing: 6, margin: 0
  });

  // Main title
  s.addText("Asistente Virtual\nWhatsApp", {
    x: 0.45, y: 1.2, w: 7, h: 2.4,
    fontSize: 52, fontFace: "Calibri", bold: true,
    color: WHITE, margin: 0
  });

  // Subtitle
  s.addText("Tu negocio atiende clientes 24/7", {
    x: 0.45, y: 3.6, w: 6.5, h: 0.7,
    fontSize: 22, fontFace: "Calibri",
    color: GREEN, margin: 0
  });

  // Bottom tagline
  s.addText("Automatización inteligente para pequeños negocios en Costa Rica", {
    x: 0.45, y: 5.12, w: 7, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "C7F7E3", margin: 0
  });
}

// ─── SLIDE 2 — El Problema ────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.18,
    fill: { color: GREEN }, line: { color: GREEN }
  });

  // Title
  s.addText("Tus clientes escriben.\nNadie responde.", {
    x: 0.55, y: 0.35, w: 9, h: 1.5,
    fontSize: 36, fontFace: "Calibri", bold: true,
    color: WHITE, margin: 0
  });

  // Stat cards — 3 large numbers
  const stats = [
    { num: "70%", label: "de mensajes fuera\nde horario sin respuesta", x: 0.55 },
    { num: "₡200K", label: "al mes cuesta\nuna recepcionista", x: 3.65 },
    { num: "1 de 3", label: "clientes no vuelve\nsi no le responden", x: 6.75 }
  ];

  stats.forEach(({ num, label, x }) => {
    // Card background
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.0, w: 2.9, h: 2.7,
      fill: { color: BG2 }, line: { color: "1E3A52", width: 1 }
    });

    // Green top accent
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.0, w: 2.9, h: 0.12,
      fill: { color: GREEN }, line: { color: GREEN }
    });

    // Number
    s.addText(num, {
      x: x + 0.1, y: 2.25, w: 2.7, h: 1.1,
      fontSize: 44, fontFace: "Calibri", bold: true,
      color: GREEN, align: "center", margin: 0
    });

    // Label
    s.addText(label, {
      x: x + 0.1, y: 3.35, w: 2.7, h: 1.1,
      fontSize: 13, fontFace: "Calibri",
      color: LIGHT, align: "center", margin: 0
    });
  });

  // Bottom call to action line
  s.addText("Cada mensaje sin respuesta = cliente perdido", {
    x: 0.55, y: 4.9, w: 8.9, h: 0.5,
    fontSize: 15, fontFace: "Calibri", bold: true,
    color: GREEN, align: "center", margin: 0
  });
}

// ─── SLIDE 3 — La Solución ────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Left panel bg
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.5, h: 5.625,
    fill: { color: BG2 }, line: { color: BG2 }
  });

  // Green left bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.18, h: 5.625,
    fill: { color: GREEN }, line: { color: GREEN }
  });

  // Left title area
  s.addText("La Solución", {
    x: 0.38, y: 0.4, w: 3.8, h: 0.5,
    fontSize: 13, fontFace: "Calibri", bold: true,
    color: GREEN, charSpacing: 4, margin: 0
  });

  s.addText("Un asistente\ninteligente en\ntu WhatsApp", {
    x: 0.38, y: 0.95, w: 3.9, h: 2.6,
    fontSize: 30, fontFace: "Calibri", bold: true,
    color: WHITE, margin: 0
  });

  s.addText("Funciona con salones, barberías,\nclínicas, spas y más.", {
    x: 0.38, y: 3.8, w: 3.9, h: 0.9,
    fontSize: 13, fontFace: "Calibri",
    color: GRAY, margin: 0
  });

  // Feature rows on right side
  const features = [
    { icon: "✓", title: "Agenda citas automáticamente", detail: "24 horas, 7 días a la semana" },
    { icon: "✓", title: "Responde en 2 segundos", detail: "Sin tiempos de espera" },
    { icon: "✓", title: "Recordatorios automáticos", detail: "24h antes de cada cita" },
    { icon: "✓", title: "Sin traslapes ni errores", detail: "Control total de la agenda" }
  ];

  features.forEach(({ icon, title, detail }, i) => {
    const y = 0.55 + i * 1.18;

    // Feature card bg
    s.addShape(pres.shapes.RECTANGLE, {
      x: 4.85, y, w: 4.9, h: 0.95,
      fill: { color: BG2 }, line: { color: "243548", width: 1 }
    });

    // Green icon circle
    s.addShape(pres.shapes.OVAL, {
      x: 4.98, y: y + 0.2, w: 0.52, h: 0.52,
      fill: { color: GREEN }, line: { color: GREEN }
    });

    s.addText(icon, {
      x: 4.98, y: y + 0.2, w: 0.52, h: 0.52,
      fontSize: 14, fontFace: "Calibri", bold: true,
      color: BG, align: "center", valign: "middle", margin: 0
    });

    s.addText(title, {
      x: 5.62, y: y + 0.1, w: 3.95, h: 0.38,
      fontSize: 15, fontFace: "Calibri", bold: true,
      color: WHITE, valign: "middle", margin: 0
    });

    s.addText(detail, {
      x: 5.62, y: y + 0.48, w: 3.95, h: 0.3,
      fontSize: 11, fontFace: "Calibri",
      color: GRAY, valign: "middle", margin: 0
    });
  });

  // Bottom label
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.85, y: 5.15, w: 4.9, h: 0.35,
    fill: { color: GREEN_DARK }, line: { color: GREEN_DARK }
  });

  s.addText("Activación en menos de 2 horas", {
    x: 4.85, y: 5.15, w: 4.9, h: 0.35,
    fontSize: 12, fontFace: "Calibri", bold: true,
    color: WHITE, align: "center", valign: "middle", margin: 0
  });
}

// ─── SLIDE 4 — Caso de Éxito ─────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Top label
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.18,
    fill: { color: GREEN }, line: { color: GREEN }
  });

  s.addText("CASO DE ÉXITO", {
    x: 0.55, y: 0.28, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", bold: true,
    color: GREEN, charSpacing: 5, margin: 0
  });

  // Main client name
  s.addText("GLAM NAILS", {
    x: 0.55, y: 0.72, w: 7, h: 1.0,
    fontSize: 48, fontFace: "Calibri", bold: true,
    color: WHITE, margin: 0
  });

  s.addText("Heredia, Costa Rica — Salón de uñas", {
    x: 0.55, y: 1.7, w: 6, h: 0.4,
    fontSize: 14, fontFace: "Calibri",
    color: GRAY, margin: 0
  });

  // Quote card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 2.28, w: 8.9, h: 1.35,
    fill: { color: BG2 }, line: { color: "1E3A52", width: 1 }
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 2.28, w: 0.22, h: 1.35,
    fill: { color: GREEN }, line: { color: GREEN }
  });

  s.addText([
    { text: "\" ", options: { fontSize: 36, bold: true, color: GREEN } },
    { text: "Ya no pierdo citas por no contestar rápido.", options: { fontSize: 18, bold: true, color: WHITE } },
    { text: " El bot maneja toda mi agenda. Me cambió el negocio.\"", options: { fontSize: 18, color: LIGHT } }
  ], {
    x: 0.95, y: 2.38, w: 8.3, h: 1.15,
    valign: "middle", margin: 0
  });

  // Owner name
  s.addText("— Karolina Madrigal, dueña de GLAM NAILS", {
    x: 0.95, y: 3.55, w: 8.3, h: 0.35,
    fontSize: 12, fontFace: "Calibri", italic: true,
    color: GRAY, margin: 0
  });

  // Stats row
  const results = [
    { num: "100%", label: "citas agendadas\nautomáticamente" },
    { num: "0", label: "mensajes sin\nrespuesta" },
    { num: "24/7", label: "disponible sin\ncosto extra" }
  ];

  results.forEach(({ num, label }, i) => {
    const x = 0.55 + i * 3.2;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 4.15, w: 3.0, h: 1.2,
      fill: { color: BG2 }, line: { color: "1E3A52", width: 1 }
    });

    s.addText(num, {
      x: x + 0.1, y: 4.22, w: 2.8, h: 0.6,
      fontSize: 32, fontFace: "Calibri", bold: true,
      color: GREEN, align: "center", margin: 0
    });

    s.addText(label, {
      x: x + 0.1, y: 4.78, w: 2.8, h: 0.45,
      fontSize: 11, fontFace: "Calibri",
      color: LIGHT, align: "center", margin: 0
    });
  });
}

// ─── SLIDE 5 — Precios ────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: BG };

  // Top accent
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.18,
    fill: { color: GREEN }, line: { color: GREEN }
  });

  s.addText("Precios", {
    x: 0.55, y: 0.28, w: 3, h: 0.4,
    fontSize: 11, fontFace: "Calibri", bold: true,
    color: GREEN, charSpacing: 5, margin: 0
  });

  s.addText("Menos que 1 día de salario\nde recepcionista", {
    x: 0.55, y: 0.72, w: 8.9, h: 1.3,
    fontSize: 34, fontFace: "Calibri", bold: true,
    color: WHITE, margin: 0
  });

  // Pricing cards
  const plans = [
    {
      name: "Básico",
      price: "₡35,000",
      period: "/mes",
      target: "Salones y barberías",
      features: ["Bot de citas WhatsApp", "Hasta 3 servicios", "Recordatorios automáticos", "Soporte por WhatsApp"],
      highlight: false
    },
    {
      name: "Profesional",
      price: "₡55,000",
      period: "/mes",
      target: "Clínicas y spas",
      features: ["Todo lo del Básico", "Servicios ilimitados", "Múltiples horarios", "Reportes mensuales"],
      highlight: true
    },
    {
      name: "Premium",
      price: "₡80,000",
      period: "/mes",
      target: "Todo incluido",
      features: ["Todo lo del Profesional", "Setup gratis", "Personalización completa", "Soporte prioritario"],
      highlight: false
    }
  ];

  plans.forEach(({ name, price, period, target, features, highlight }, i) => {
    const x = 0.28 + i * 3.22;

    // Card bg
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.2, w: 3.05, h: 3.1,
      fill: { color: highlight ? "0F2A3A" : BG2 },
      line: { color: highlight ? GREEN : "243548", width: highlight ? 2 : 1 }
    });

    // Top accent
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.2, w: 3.05, h: 0.14,
      fill: { color: GREEN }, line: { color: GREEN }
    });

    if (highlight) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.65, y: 2.05, w: 1.75, h: 0.22,
        fill: { color: GREEN }, line: { color: GREEN }
      });
      s.addText("MAS POPULAR", {
        x: x + 0.65, y: 2.05, w: 1.75, h: 0.22,
        fontSize: 8, fontFace: "Calibri", bold: true,
        color: BG, align: "center", valign: "middle", charSpacing: 2, margin: 0
      });
    }

    s.addText(name, {
      x: x + 0.15, y: 2.38, w: 2.75, h: 0.42,
      fontSize: 16, fontFace: "Calibri", bold: true,
      color: highlight ? GREEN : LIGHT, margin: 0
    });

    s.addText(price, {
      x: x + 0.15, y: 2.82, w: 2.1, h: 0.65,
      fontSize: 28, fontFace: "Calibri", bold: true,
      color: WHITE, margin: 0
    });

    s.addText(period, {
      x: x + 2.25, y: 3.1, w: 0.7, h: 0.35,
      fontSize: 12, fontFace: "Calibri",
      color: GRAY, margin: 0
    });

    s.addText(target, {
      x: x + 0.15, y: 3.45, w: 2.75, h: 0.3,
      fontSize: 11, fontFace: "Calibri", italic: true,
      color: GRAY, margin: 0
    });

    // Features
    features.forEach((feat, fi) => {
      s.addText([
        { text: "✓  ", options: { color: GREEN, bold: true } },
        { text: feat, options: { color: LIGHT } }
      ], {
        x: x + 0.15, y: 3.82 + fi * 0.33, w: 2.75, h: 0.3,
        fontSize: 11, fontFace: "Calibri", margin: 0
      });
    });
  });

  // Free trial banner
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.28, y: 5.2, w: 9.44, h: 0.3,
    fill: { color: GREEN_DARK }, line: { color: GREEN_DARK }
  });

  s.addText("Prueba gratis 1 semana — Sin contrato — Sin permanencia", {
    x: 0.28, y: 5.2, w: 9.44, h: 0.3,
    fontSize: 12, fontFace: "Calibri", bold: true,
    color: WHITE, align: "center", valign: "middle", margin: 0
  });
}

// ─── SLIDE 6 — CTA ────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: "0A1520" };

  // Full-width green bottom half
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 3.2, w: 10, h: 2.425,
    fill: { color: GREEN_DARK }, line: { color: GREEN_DARK }
  });

  // Circle behind title
  s.addShape(pres.shapes.OVAL, {
    x: 3.0, y: -1.2, w: 7, h: 7,
    fill: { color: "0D1F2D" }, line: { color: "162A3A", width: 1 }
  });

  s.addText("¿Listo para que tu\nnegocio atienda solo?", {
    x: 0.55, y: 0.45, w: 8.9, h: 2.2,
    fontSize: 42, fontFace: "Calibri", bold: true,
    color: WHITE, align: "center", margin: 0
  });

  s.addText("Contáctanos ahora — activamos tu bot hoy mismo", {
    x: 0.55, y: 2.75, w: 8.9, h: 0.45,
    fontSize: 16, fontFace: "Calibri",
    color: "C7F7E3", align: "center", margin: 0
  });

  // Contact info
  s.addText("WhatsApp: +506 XXXX-XXXX", {
    x: 0.55, y: 3.5, w: 8.9, h: 0.65,
    fontSize: 26, fontFace: "Calibri", bold: true,
    color: WHITE, align: "center", margin: 0
  });

  // Promise badges
  const badges = [
    "Respondemos en menos de 1 hora",
    "Activación en menos de 2 horas",
    "1 semana de prueba gratis"
  ];

  badges.forEach((text, i) => {
    const x = 0.6 + i * 3.0;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 4.3, w: 2.8, h: 0.75,
      fill: { color: "0A7A55" }, line: { color: "0D9666", width: 1 }
    });
    s.addText(text, {
      x: x + 0.1, y: 4.3, w: 2.6, h: 0.75,
      fontSize: 12, fontFace: "Calibri", bold: true,
      color: WHITE, align: "center", valign: "middle", margin: 0
    });
  });

  // INM branding
  s.addText("INM — Agencia de automatización AI", {
    x: 0.55, y: 5.25, w: 8.9, h: 0.3,
    fontSize: 10, fontFace: "Calibri",
    color: "C7F7E3", align: "center", margin: 0
  });
}

// Save
pres.writeFile({ fileName: "C:/Users/inmgo/proyectos/inm-landing/content/pitch-deck-inm.pptx" })
  .then(() => console.log("Done: pitch-deck-inm.pptx"))
  .catch(err => { console.error(err); process.exit(1); });
