# Synthex — Contexto del Proyecto

> **Última actualización:** 2026-04-29  
> Este archivo sirve como repositorio vivo de toda la información clave del proyecto. Se actualiza con cada iteración.

---

## 1. Visión del Producto

**Synthex** es un **AI Strategy Facilitation OS** — el primer sistema operativo de IA diseñado para orquestar la síntesis estratégica de talleres complejos. No es un bot de reuniones ni una pizarra con IA; es la **capa de sentido** que conecta herramientas existentes (Miro, Otter, SessionLab, Notion, Workpath) para transformar datos dispersos en entregables estratégicos accionables ligados a OKRs.

### Propuesta de Valor Central
> "Existe una brecha real: hoy casi todo el stack se centra en pizarras con IA y 'meeting notes', mientras sigue poco resuelto el **cerebro estratégico** que conecta briefing → diseño del taller → sensemaking en vivo → outputs accionables ligados a la estrategia y a los OKR."

### Posicionamiento
- **No somos**: Otro Miro, otro meeting bot, otro resumidor de transcripciones.
- **Somos**: La capa de orquestación y síntesis estratégica que cruza varias herramientas y produce artefactos ejecutivos con trazabilidad del 100%.

---

## 2. Público Objetivo

| Segmento | Dolor Principal |
|---|---|
| **Facilitadores profesionales** | Diseñan docenas de workshops al año. Pierden 8+ horas en síntesis post-taller cruzando boards y transcripts manualmente. |
| **Consultoras boutique de innovación** | Necesitan escalar la calidad de sus entregables sin disparar horas no facturables. |
| **Heads of Strategy / Product** | Reciben boards y resúmenes, pero necesitan traducirlos a decisiones claras, OKRs y backlog coordinado. |

---

## 3. Landscape Competitivo (Resumen)

| Categoría | Herramientas | Qué Hacen | Qué No Hacen |
|---|---|---|---|
| Pizarras con IA | Miro, Mural, FigJam, Lucidspark | Agrupan post-its, resumen ideas en el lienzo | No modelan decisiones, trade-offs ni lógica estratégica |
| Meeting Bots | Otter, Granola, Jamie, Copilot | Transcriben, resumen y extraen action items | Resúmenes genéricos, sin frameworks de negocio |
| Planificadores de Talleres | SessionLab, Creately | Diseño de agendas con bloques y métodos | No consumen contenido de boards/transcripts para generar entregables |
| Ejecución Estratégica | Workpath, WorkBoard/Quantive | OKRs, KPIs, dashboards ejecutivos | Asumen que la estrategia ya se definió; no participan en el taller |

### Oportunidad Identificada
Ninguna herramienta actual hace **síntesis estructurada cross-tool**: los meeting bots se quedan en el nivel de resumen y las plataformas de ejecución en el nivel de objetivos/indicadores, sin conciencia del proceso conversacional que los generó.

---

## 4. Flujo de Valor del Producto (v1)

```
[Ingesta Multimodal] → [Motor de Entregables] → [Mapeo a Ejecución]
     |                        |                        |
     ├─ Miro/Mural boards     ├─ Strategy Storyline    ├─ OKRs en Workpath
     ├─ Otter/Granola          ├─ Decision Log          ├─ Épicas en Jira
     ├─ SessionLab agenda      ├─ Portfolio de Apuestas ├─ Páginas en Notion
     └─ Notas de facilitador   └─ Borradores de OKR    └─ Roadmap actualizado
```

---

## 5. Decisiones de Diseño (Landing Page)

### Paleta de Colores (v2 — Corporate Executive)
| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#020617` (Slate 950) | Fondo principal |
| `--bg-secondary` | `#0F172A` (Slate 900) | Fondo de secciones alternas |
| `--text-primary` | `#F8FAFC` (Slate 50) | Texto principal |
| `--text-secondary` | `#94A3B8` (Slate 400) | Texto secundario |
| `--accent-primary` | `#4F46E5` (Indigo 600) | Botones, highlights |
| `--accent-hover` | `#6366F1` (Indigo 500) | Estados hover |
| `--accent-cyan` | `#06B6D4` (Cyan 500) | Gradientes, acentos secundarios |

### Tipografía
- **Familia**: Inter (Google Fonts)
- **Pesos**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extra Bold)

### Efectos Visuales
- Glassmorphism en tarjetas (backdrop-filter blur + bordes translúcidos)
- Cuadrículas de fondo sutiles (grids)
- Micro-animaciones de entrada (fade-in on scroll)
- Gradientes Indigo → Cyan en botones y acentos

### Tech Stack (v2 — Actual)
- **Framework**: React (Vite)
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui (botones, cards, inputs)
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion

---

## 6. Estructura de la Página

1. **Navbar** — Logo + enlaces ancla + CTA
2. **Hero** — H1 + subtítulo + CTA + imagen generada
3. **Integraciones** — Banda de logos (Miro, Otter, SessionLab, Notion, Workpath)
4. **El Problema** — 3 tarjetas (diseño aislado, muro estático, overhead de síntesis)
5. **El OS Estratégico** — 3 pasos alternados (Ingesta, Motor, Mapeo)
6. **CTA Final** — Email input + botón "Unirse a la Lista de Espera"

---

## 7. Copy Aprobado (Español)

- **H1 Hero**: "El taller terminó. Ahora toca el *sensemaking*."
- **Subtítulo**: "Synthex es el primer AI Strategy Facilitation OS. Conecta tus tableros de Miro, transcripciones y notas de sesión para generar entregables estratégicos ligados a OKRs en minutos, no en días."
- **Tagline CTA**: "Diseñado para Facilitadores Profesionales y Consultoras Boutique"
- **CTA Final**: "Deja de hacer vibe-coding manual. Escala tu facilitación hoy."

---

## 8. Historial de Decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-04-29 | H1 cambiado de "Tu taller terminó. El verdadero trabajo acaba de empezar." a "El taller terminó. Ahora toca recapitular." | Feedback del usuario: más natural en español |
| 2026-04-29 | Paleta cambiada de Negro/Verde Neón (TheCUBE) a Slate/Indigo | Feedback: transmitir más confianza ejecutiva, menos "hacker" |
| 2026-04-29 | Copy pivotado de "meeting bot genérico" a "AI Strategy Facilitation OS" | Basado en análisis de Perplexity del landscape competitivo |
| 2026-04-29 | Añadida sección de Integraciones con logos | Feedback: mostrar visualmente el stack que Synthex orquesta |
| 2026-04-29 | Migración de HTML/CSS/JS vanilla a React + Tailwind + shadcn/ui | Feedback: elevar la calidad y stack profesional |
