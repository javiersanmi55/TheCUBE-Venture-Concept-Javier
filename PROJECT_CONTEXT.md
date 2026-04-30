# Synthex — Contexto del Proyecto

> **Última actualización:** 2026-04-29 (v3)  
> Repositorio vivo de información del proyecto. Se actualiza con cada iteración.

---

## 1. Visión del producto

**Synthex** — *Sintetiza talleres estratégicos en decisiones ejecutables.*

Es la capa de IA que convierte los outputs dispersos de un taller estratégico (boards, transcripciones, agendas, notas) en entregables ejecutivos trazables: registros de decisiones, portfolios de apuestas, borradores de OKR y narrativas estratégicas, listos para governance.

### Propuesta de valor
> "Convierte el caos de tus talleres estratégicos en decisiones ejecutables."

### El gap identificado
Las herramientas actuales (Miro, Mural, Granola, Otter, SessionLab) resuelven bien partes concretas del proceso: diseñar agendas, organizar ideas en el lienzo o transcribir conversaciones. Todas se detienen en el mismo punto: **el final del taller**.

Lo que ocurre después sigue sin resolver. El consultor se enfrenta a un board lleno de insights, notas dispersas y to-do's que tiene que convertir manualmente en un informe ejecutivo trazable. Ese trabajo consume varias horas por taller en la práctica.

**La mayor pérdida de valor no ocurre durante el taller, sino después, en la traducción entre lo que se decidió en sala y lo que finalmente se alinea.**

### Diferenciadores
1. **Trazabilidad**: cada afirmación del entregable se vincula a la fuente original — un fragmento de transcript, una nota del board o un acuerdo verbal.
2. **Estructura estratégica**: no genera resúmenes genéricos; organiza la información según frameworks de negocio predefinidos.

---

## 2. Público objetivo

| Segmento | Dolor principal |
|---|---|
| **Consultoras boutique** (5-50 personas) | Su margen depende de las horas facturables; el post-work de síntesis es su mayor coste oculto no facturable. |
| **Heads of Strategy / TMO / PMO** | Reciben información dispersa y necesitan reportar a governance con informes estructurados y trazables. |
| **Facilitadores senior** | Diseñan múltiples talleres al mes; necesitan escalar su delivery sin sacrificar la calidad estratégica de las conclusiones. |

---

## 3. Landscape competitivo

| Categoría | Herramientas | Qué hacen | Qué no hacen |
|---|---|---|---|
| Pizarras con IA | Miro, Mural, FigJam | Agrupan post-its, resumen ideas en el lienzo | No modelan decisiones, trade-offs ni lógica estratégica |
| Meeting bots | Granola, Otter, Copilot | Transcriben, resumen y extraen action items | Resúmenes genéricos, sin frameworks de negocio |
| Planificación de talleres | SessionLab | Diseño de agendas con bloques y métodos | No consumen outputs para generar entregables |
| Ejecución estratégica | Workpath, Asana, Jira | OKRs, KPIs, gestión de proyectos | Asumen que la estrategia ya está definida |

### ¿Por qué no lo hacen Miro o Microsoft?
Porque su foco está en otra capa: Miro optimiza la colaboración visual y creativa; Microsoft optimiza la productividad de su ecosistema. Ninguno se especializa en convertir workshops estratégicos en conclusiones ejecutivas con lógica de decisión y trazabilidad estricta.

---

## 4. Flujo de valor

```
[Inputs del taller]  →  [Synthex AI]  →  [Entregables estratégicos]  →  [Ejecución]

  Miro / Mural            Motor de          Decision logs              Notion
  Granola / Otter          síntesis          Borradores de OKR          Asana
  SessionLab               estratégica       Narrativas ejecutivas      Jira
  Notas / archivos                           Portfolios de apuestas     Workpath
```

---

## 5. Go-to-market

**Estrategia**: piloto de 30 días con 3 consultoras boutique, procesando sus últimos 5 talleres en la sombra (modelo concierge) para demostrar la métrica de horas ahorradas.

**KPI core**: horas no facturables ahorradas por consultor al mes.

**Pricing**: anclado al valor ahorrado, no al coste técnico. Suscripción por equipo o por volumen de talleres/outputs procesados.

---

## 6. Decisiones de diseño (landing page)

### Paleta de colores (v2 — corporate executive)
| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#020617` | Fondo principal |
| `--bg-secondary` | `#0F172A` | Secciones alternas |
| `--accent-indigo` | `#4F46E5` | Botones, highlights |
| `--accent-cyan` | `#06B6D4` | Gradientes, acentos |

### Tech stack (v3)
- **Framework**: React (Vite)
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: Button, Card, Input (estilo shadcn/ui)
- **Iconos**: Lucide React + react-icons/si
- **Animaciones**: Framer Motion

### Estructura de la página (v3)
1. Navbar
2. Hero (nuevo H1 + data callout)
3. Integraciones (dos filas: fuentes + exportación)
4. El problema
5. Para quién es Synthex (**nuevo**)
6. De la sala a la ejecución (**nuevo** — flujo visual 4 pasos)
7. Synthex en acción (demo tipo Linear + Synthex Box)
8. CTA final (con nota de validación concierge)

---

## 7. Historial de decisiones

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-04-29 | H1 → "Convierte el caos de tus talleres estratégicos en decisiones ejecutables." | Venture concept v3, más directo al dolor |
| 2026-04-29 | Integraciones reorganizadas en dos filas funcionales | Distinguir entre fuentes de datos y sistemas de exportación |
| 2026-04-29 | Añadida sección "Para quién" con 3 perfiles | Segmentación clara del público objetivo |
| 2026-04-29 | Añadida sección de flujo visual (4 pasos) | Hacer tangible el valor del producto |
| 2026-04-29 | Nota de validación concierge en el CTA | Transmitir seriedad de go-to-market |
| 2026-04-29 | Migración a React + Tailwind + Framer Motion | Elevar calidad técnica y visual |
| 2026-04-29 | Paleta Slate/Indigo (abandonado verde neón) | Confianza ejecutiva, menos "hacker" |
