import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2, ChevronRight, Inbox, GitBranch, Star,
  Layers, BarChart3, Send, Paperclip, AlertTriangle,
  CheckCircle2, Clock, Sparkles, User, Bot
} from 'lucide-react'

// ─── Sidebar Data ──────────────────────────────────────────────────────
const clients = [
  { id: 1, name: 'Accenture Strategy', color: '#a855f7', active: true },
  { id: 2, name: 'BBVA Innova', color: '#3b82f6' },
  { id: 3, name: 'Telefónica', color: '#06b6d4' },
  { id: 4, name: 'McKinsey Madrid', color: '#f59e0b' },
  { id: 5, name: 'Banco Santander', color: '#ef4444' },
]

const workspaceItems = [
  { icon: Layers, label: 'Iniciativas', count: 3 },
  { icon: GitBranch, label: 'Proyectos', count: 7 },
  { icon: BarChart3, label: 'Insights', count: 12 },
]

const favorites = [
  { label: 'Q2 Strategy Workshop', color: '#a855f7', active: true },
  { label: 'Digital Transformation Roadmap', color: '#06b6d4' },
  { label: 'Market Expansion Analysis', color: '#f59e0b' },
]

// ─── Dashboard Data ────────────────────────────────────────────────────
const decisions = [
  {
    id: 'SYN-001',
    title: 'Pivote hacia mercados LATAM',
    confidence: 8,
    status: 'active',
    source: 'Miro Board · 3 clusters',
  },
  {
    id: 'SYN-002',
    title: 'Consolidar portfolio de productos',
    confidence: 7,
    status: 'pending',
    source: 'Transcript · 12 min 34 s',
  },
  {
    id: 'SYN-003',
    title: 'Invertir en capacidades digitales',
    confidence: 9,
    status: 'done',
    source: 'SessionLab · Bloque 3',
  },
]

const okrs = [
  {
    objective: 'O1: Capturar 15% del mercado LATAM en 6 meses',
    krs: [
      { text: 'KR1: Lanzar en México antes del 30 de sep', progress: 40 },
      { text: 'KR2: Cerrar 3 partnerships locales', progress: 20 },
    ],
  },
  {
    objective: 'O2: Consolidar portfolio a 1 plataforma unificada',
    krs: [
      { text: 'KR1: Deprecar 2 productos antes de Q4', progress: 0 },
      { text: 'KR2: Migrar 80% usuarios a nueva plataforma', progress: 0 },
    ],
  },
]

// ─── Chat Messages ─────────────────────────────────────────────────────
const chatMessages = [
  {
    role: 'user',
    text: 'Analiza las decisiones clave del taller de ayer con Accenture y dime qué OKRs deberíamos proponer para Q3.',
    time: 'hace 4 min',
  },
  {
    role: 'bot',
    time: 'hace 3 min',
    content: [
      { type: 'text', value: 'Analizando board SYN-2024-Q2...' },
      { type: 'text', value: 'He identificado 3 decisiones estratégicas del taller:' },
      { type: 'list', items: ['Pivote hacia mercados LATAM (consenso 8/10)', 'Consolidar portfolio de productos (3 iniciativas → 1)', 'Invertir en capacidades digitales internas'] },
      { type: 'bold', value: 'OKRs sugeridos para Q3:' },
      { type: 'okr', objective: 'O1: Capturar 15% del mercado LATAM', krs: ['KR1: Lanzar en México antes del 30 sep', 'KR2: Cerrar 3 partnerships locales'] },
    ],
  },
  {
    role: 'user',
    text: '¿Hay algún riesgo estratégico que debería considerar?',
    time: 'hace 2 min',
  },
  {
    role: 'bot',
    time: 'hace 1 min',
    content: [
      { type: 'text', value: 'Basándome en el análisis de las transcripciones...' },
      { type: 'warning', value: 'Riesgo Identificado (Alta prioridad): La Directora de Producto mencionó en 3 ocasiones la dependencia de un proveedor clave en Otter · 08:42' },
      { type: 'text', value: 'Recomiendo añadir un KR de contingencia:' },
      { type: 'code', value: '→ KR3: Identificar proveedor alternativo antes de Q3 end' },
      { type: 'text', value: '¿Quieres que genere el informe ejecutivo completo o lo exporto directamente a Notion?' },
    ],
  },
]

// ─── Sub-components ────────────────────────────────────────────────────
function StatusBadge({ status }) {
  if (status === 'active') return <span className="status-badge status-active"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />Activo</span>
  if (status === 'pending') return <span className="status-badge status-pending"><Clock size={10} />Pendiente</span>
  return <span className="status-badge status-done"><CheckCircle2 size={10} />Aprobado</span>
}

function ProgressBar({ value }) {
  return (
    <div className="h-1 rounded-full bg-white/10 mt-1 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

function BotMessage({ content }) {
  return (
    <div className="space-y-2">
      {content.map((block, i) => {
        if (block.type === 'text') return <p key={i} className="text-[11px] text-slate-300 leading-relaxed">{block.value}</p>
        if (block.type === 'bold') return <p key={i} className="text-[11px] font-semibold text-white">{block.value}</p>
        if (block.type === 'list') return (
          <ul key={i} className="space-y-1 pl-2">
            {block.items.map((item, j) => (
              <li key={j} className="text-[10px] text-slate-400 flex gap-1.5">
                <span className="text-cyan-400 mt-0.5 shrink-0">›</span>{item}
              </li>
            ))}
          </ul>
        )
        if (block.type === 'okr') return (
          <div key={i} className="bg-indigo-950/60 border border-indigo-500/20 rounded-lg p-2.5 space-y-1.5">
            <p className="text-[10px] font-semibold text-indigo-300">{block.objective}</p>
            {block.krs.map((kr, j) => (
              <p key={j} className="text-[10px] text-slate-400 pl-2">→ {kr}</p>
            ))}
          </div>
        )
        if (block.type === 'warning') return (
          <div key={i} className="flex gap-2 bg-amber-950/40 border border-amber-500/25 rounded-lg p-2.5">
            <AlertTriangle size={12} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[10px] text-amber-200 leading-relaxed">{block.value}</p>
          </div>
        )
        if (block.type === 'code') return (
          <p key={i} className="mono text-[10px]">{block.value}</p>
        )
        return null
      })}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────
export function ProductDemo() {
  const chatRef = useRef(null)
  const [inputVal, setInputVal] = useState('')

  return (
    <section id="producto" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-400 bg-indigo-950/60 border border-cyan-500/20 mb-4">
            Synthex en acción
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4">
            Tu cerebro estratégico,
            <br />
            <span className="gradient-text-accent">siempre al lado</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Gestiona clientes, visualiza iniciativas y chatea con tu IA estratégica — todo en un solo OS.
          </p>
        </motion.div>

        {/* ── App Mock ─────────────────────────────────────────────── */}
        <motion.div
          className="rounded-2xl border border-white/10 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_rgba(79,70,229,0.15)] bg-[var(--color-bg-app)]"
          style={{ height: '580px', display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-[var(--color-sidebar)] shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-xs text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              app.synthex.ai
            </div>
          </div>

          {/* Three-column layout */}
          <div className="flex flex-1 overflow-hidden">
            {/* ── Sidebar ───────────────────────────── */}
            <aside className="w-52 shrink-0 bg-[var(--color-sidebar)] border-r border-white/[0.07] flex flex-col overflow-hidden">
              <div className="px-4 py-3 border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-[9px]">S</div>
                  <span className="text-xs font-semibold text-white">Synthex</span>
                  <ChevronRight size={10} className="text-slate-600 ml-auto" />
                </div>
              </div>

              <div className="app-scroll flex-1 py-3 space-y-4">
                {/* Nav items */}
                <div className="px-2 space-y-0.5">
                  {[{ icon: Inbox, label: 'Bandeja' }, { icon: Star, label: 'Destacados' }].map(({ icon: Icon, label }) => (
                    <button key={label} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors text-left">
                      <Icon size={12} />{label}
                    </button>
                  ))}
                </div>

                {/* Clientes */}
                <div className="px-2">
                  <p className="text-[9px] uppercase tracking-wider text-slate-600 px-2.5 mb-1.5 font-semibold">Clientes</p>
                  {clients.map(c => (
                    <button key={c.id} className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] transition-colors text-left ${c.active ? 'bg-white/8 text-white' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>
                      <Building2 size={11} style={{ color: c.color }} />
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>

                {/* Workspace */}
                <div className="px-2">
                  <p className="text-[9px] uppercase tracking-wider text-slate-600 px-2.5 mb-1.5 font-semibold">Workspace</p>
                  {workspaceItems.map(({ icon: Icon, label, count }) => (
                    <button key={label} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors text-left">
                      <Icon size={12} /><span className="flex-1">{label}</span>
                      <span className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded-full">{count}</span>
                    </button>
                  ))}
                </div>

                {/* Favoritos */}
                <div className="px-2">
                  <p className="text-[9px] uppercase tracking-wider text-slate-600 px-2.5 mb-1.5 font-semibold">Favoritos</p>
                  {favorites.map(f => (
                    <button key={f.label} className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] transition-colors text-left ${f.active ? 'bg-indigo-500/10 text-indigo-300' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>
                      <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: f.color }} />
                      <span className="truncate">{f.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Main Dashboard ────────────────────── */}
            <main className="flex-1 min-w-0 flex flex-col overflow-hidden border-r border-white/[0.07]">
              {/* Header */}
              <div className="px-5 py-3.5 border-b border-white/[0.07] flex items-center gap-3 shrink-0">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white">Q2 Strategy Workshop</h3>
                    <Star size={11} className="text-amber-400 fill-amber-400" />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Accenture Strategy · 28 Abr 2025</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="status-badge status-active"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />En Progreso</span>
                  <span className="text-[10px] text-slate-500">SYN-2024</span>
                </div>
              </div>

              {/* Content */}
              <div className="app-scroll flex-1 p-5 space-y-5">
                {/* Decisiones clave */}
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Decisiones Clave Identificadas</p>
                  <div className="space-y-2">
                    {decisions.map(d => (
                      <div key={d.id} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors cursor-pointer">
                        <div className="shrink-0 pt-0.5">
                          <span className="text-[9px] text-slate-600 font-mono">{d.id}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] text-slate-200 font-medium truncate">{d.title}</p>
                          <p className="text-[10px] text-slate-600 mt-0.5">{d.source}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] text-slate-500">Consenso</span>
                            <span className="text-[10px] font-semibold text-cyan-400">{d.confidence}/10</span>
                          </div>
                          <StatusBadge status={d.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* OKRs generados */}
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">OKRs Generados por Synthex</p>
                  <div className="space-y-3">
                    {okrs.map((okr, i) => (
                      <div key={i} className="p-3.5 rounded-lg bg-indigo-950/40 border border-indigo-500/15">
                        <p className="text-[11px] font-semibold text-indigo-300 mb-2">{okr.objective}</p>
                        {okr.krs.map((kr, j) => (
                          <div key={j} className="mb-2">
                            <div className="flex justify-between mb-1">
                              <p className="text-[10px] text-slate-400">{kr.text}</p>
                              <span className="text-[10px] text-slate-500">{kr.progress}%</span>
                            </div>
                            <ProgressBar value={kr.progress} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            {/* ── Synthex Box (Chat) ─────────────────── */}
            <aside className="w-72 shrink-0 flex flex-col overflow-hidden bg-[#0a1020]">
              {/* Chat header */}
              <div className="px-4 py-3 border-b border-white/[0.07] flex items-center gap-2 shrink-0 bg-[var(--color-sidebar)]">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                  <Sparkles size={12} className="text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white">Synthex Box</p>
                  <p className="text-[9px] text-slate-500">IA Estratégica · SYN-2024</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
              </div>

              {/* Chat messages — scrollable */}
              <div
                ref={chatRef}
                className="synthex-chat-scroll flex-1 p-3 space-y-4"
              >
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'bot' && (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot size={10} className="text-white" />
                      </div>
                    )}
                    <div className={`max-w-[85%] rounded-xl px-3 py-2.5 ${msg.role === 'user'
                        ? 'bg-indigo-600/70 border border-indigo-500/30 text-right'
                        : 'bg-white/[0.04] border border-white/[0.07]'
                      }`}>
                      {msg.role === 'user'
                        ? <p className="text-[11px] text-slate-200 leading-relaxed">{msg.text}</p>
                        : <BotMessage content={msg.content} />
                      }
                      <p className="text-[9px] text-slate-600 mt-1.5">{msg.time}</p>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <User size={10} className="text-slate-400" />
                      </div>
                    )}
                  </div>
                ))}
                {/* Typing indicator */}
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <Bot size={10} className="text-white" />
                  </div>
                  <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-3 py-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>

              {/* Chat input */}
              <div className="p-3 border-t border-white/[0.07] shrink-0 bg-[var(--color-sidebar)]">
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2">
                  <Paperclip size={12} className="text-slate-600 shrink-0" />
                  <input
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    placeholder="Pregunta a Synthex..."
                    className="flex-1 bg-transparent text-[11px] text-slate-400 placeholder:text-slate-600 outline-none min-w-0"
                  />
                  <Send size={12} className="text-indigo-400 shrink-0 cursor-pointer hover:text-indigo-300 transition-colors" />
                </div>
                <p className="text-[9px] text-slate-700 mt-1.5 text-center">Synthex AI · Sólo demo</p>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
