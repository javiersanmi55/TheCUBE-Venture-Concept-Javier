# Synthex Landing Page — Roadmap de Mejoras

> **Última actualización:** 2026-04-29  
> Checklist detallado de mejoras organizadas por categoría. Se actualiza conforme se van completando.

---

## 🎨 Estética y Diseño Visual

### Animaciones y Microinteracciones
- [ ] **Hero fade-in premium**: Animación escalonada (stagger) con Framer Motion: primero el H1, luego subtítulo, luego CTA, luego imagen. Debe sentirse "cinematic".
- [ ] **Hover en tarjetas (cards)**: Efecto de borde con gradiente que sigue el cursor (border-gradient hover) tipo Linear/Vercel.
- [ ] **Scroll-triggered animations**: Cada sección aparece con una animación suave al entrar en viewport. Los pasos del OS se revelan secuencialmente.
- [ ] **Background animado**: Añadir un sutil efecto de partículas o una malla de gradiente animada (mesh gradient) en el hero para dar vida al fondo.
- [ ] **Animación de la banda de logos**: Movimiento continuo horizontal tipo "marquee" infinito para los logos de integraciones.
- [ ] **Glow pulsante en el CTA**: El botón principal debe tener un efecto de "respiración" (pulse glow) sutil para atraer la atención.

### Componentes y Layout
- [ ] **Migrar a React + Tailwind + shadcn/ui**: Usar componentes shadcn/ui (`Button`, `Card`, `Input`) para un acabado premium consistente.
- [ ] **Iconos Lucide React**: Reemplazar los SVGs genéricos y emojis por iconos profesionales de Lucide (e.g., `BrainCircuit`, `FileText`, `Link2`, `Target`, `Layers`, `Headphones`).
- [ ] **Tarjetas con glassmorphism mejorado**: Refinar el efecto glass con bordes más definidos, sombras interiores sutiles y mejor contraste.
- [ ] **Tipografía responsive mejorada**: Ajustar el scale tipográfico con clamp() más agresivo para que el H1 sea verdaderamente impactante en desktop.
- [ ] **Espaciado y ritmo vertical**: Aumentar el padding entre secciones para que "respire" más. Seguir la regla de 8px grid.

### Identidad Visual
- [ ] **Favicon y Open Graph image**: Crear un favicon con el logo-dot cyan y una OG image para compartir en redes.
- [ ] **Imágenes del Hero más contextuales**: Generar una imagen que muestre más claramente un "flujo de datos entrando por un lado (post-its, audio) y saliendo como un documento estratégico".
- [ ] **Ilustraciones para los 3 pasos del OS**: En vez de emojis, crear mini-visualizaciones/diagramas SVG animados que representen cada paso.

---

## 📝 Contenido y Copy

### Secciones Faltantes
- [ ] **Sección "Para Quién"**: Añadir una sección explícita con 3 perfiles (Facilitador Profesional, Consultora Boutique, Head of Strategy) con su dolor y cómo Synthex lo resuelve.
- [ ] **Sección de Social Proof / Datos**: Añadir estadísticas del mercado (ej: "Los facilitadores pierden una media de 8h en síntesis post-taller" — citando fuentes del análisis de Perplexity).
- [ ] **Sección FAQ**: Preguntas frecuentes como: "¿Qué pasa con la confidencialidad de los datos?" / "¿Necesito cambiar mis herramientas actuales?" / "¿Cuánto tarda la integración?".
- [ ] **Footer completo**: Con links legales, redes sociales y un mini-texto de la empresa.

### Mejoras de Copy Existente
- [ ] **H1 más disruptivo**: Evaluar variaciones del H1. Actualmente es "El taller terminó. Ahora toca el sensemaking." — considerar algo más provocador como "8 horas de síntesis. 15 minutos con Synthex."
- [ ] **Subtítulo más concreto**: Incluir un dato cuantificable en el subtítulo ("…en menos de 15 minutos, ahorrando una media de 8 horas facturables por taller").
- [ ] **Microcopy del CTA**: Añadir "línea de confianza" bajo el formulario (ej: "Sin spam. Solo actualizaciones para early adopters.").
- [ ] **Problem cards más emocionales**: Añadir una frase "gancho" en negrita al inicio de cada tarjeta que conecte emocionalmente (ej: "¿Otra vez reagrupando 200 post-its?").

### SEO y Metadata
- [ ] **Title tag optimizado**: "Synthex | AI Strategy Facilitation OS para Consultoras de Innovación"
- [ ] **Meta description**: Incluir keywords: "talleres estratégicos", "síntesis automática", "OKRs", "facilitación".
- [ ] **Heading hierarchy**: Verificar que solo hay un H1 y que la jerarquía H2→H3 es correcta.
- [ ] **Schema markup**: Añadir JSON-LD para SoftwareApplication.

---

## ⚙️ Técnico y Performance

### Infraestructura
- [x] **Migración a React + Vite** (en progreso)
- [ ] **Tailwind CSS configurado con design tokens** del proyecto.
- [ ] **shadcn/ui instalado y componentes importados**.
- [ ] **Framer Motion configurado** con variantes reutilizables.
- [ ] **Lucide React instalado**.

### Rendimiento
- [ ] **Optimización de imágenes**: Convertir PNGs a WebP, usar `loading="lazy"` y `srcset` para responsive.
- [ ] **Code splitting**: Asegurar que Vite hace tree-shaking correcto con las dependencias.
- [ ] **Lighthouse audit**: Conseguir >90 en Performance, Accessibility, Best Practices y SEO.

### Accesibilidad
- [ ] **Contraste de colores**: Verificar que todo el texto cumple WCAG AA (4.5:1 para texto normal).
- [ ] **Focus states**: Todos los elementos interactivos deben tener un focus ring visible (estilo Indigo).
- [ ] **Alt text significativo**: Todas las imágenes con alt text descriptivo en español.
- [ ] **Keyboard navigation**: La navbar y los formularios deben ser navegables con teclado.

---

## 🚀 Funcionalidad

- [ ] **Formulario funcional**: Conectar el form de email a un servicio (Formspree, Resend, o similar) para capturar leads reales.
- [ ] **Animación de confirmación**: Tras enviar el email, mostrar una animación de éxito (checkmark animado + mensaje).
- [ ] **Mobile hamburger menu**: Implementar un menú desplegable para mobile con animación suave.
- [ ] **Scroll spy en Navbar**: Resaltar el enlace activo en la navbar según la sección visible.
- [ ] **Analytics-ready**: Preparar data attributes para Google Analytics / Mixpanel.

---

## 📊 Priorización (Siguiente Sprint)

| Prioridad | Tarea | Impacto |
|---|---|---|
| 🔴 P0 | Migrar a React + Tailwind + shadcn/ui + Framer Motion | Base técnica para todo lo demás |
| 🔴 P0 | Iconos Lucide en vez de emojis | Profesionalismo inmediato |
| 🟡 P1 | Hero fade-in stagger animation | Primera impresión "wow" |
| 🟡 P1 | Sección "Para Quién" con perfiles | Relevancia para el target |
| 🟡 P1 | Mobile hamburger menu | Usabilidad mobile |
| 🟢 P2 | Background mesh gradient animado | Diferenciación visual |
| 🟢 P2 | Sección FAQ | Confianza y objeciones |
| 🟢 P2 | Formulario funcional con confirmación | Captura de leads |
