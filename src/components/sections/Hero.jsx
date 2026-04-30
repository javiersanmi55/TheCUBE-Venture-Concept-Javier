import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Clock, FileText, Mic, StickyNote, LayoutGrid, ArrowRight, CheckCircle } from 'lucide-react'

function WorkshopFlowVisual() {
  const inputs = [
    { icon: LayoutGrid, label: 'Board Miro', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
    { icon: Mic, label: 'Transcript Granola', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
    { icon: StickyNote, label: 'Notas del taller', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
    { icon: FileText, label: 'Agenda SessionLab', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  ]
  return (
    <div className="flex items-center justify-center gap-6 w-full max-w-3xl mx-auto mt-12 hero-enter hero-enter-5">
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 text-center font-semibold">Workshop outputs</p>
        <div className="grid grid-cols-2 gap-2">
          {inputs.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border backdrop-blur-sm ${item.bg} ${i === 1 ? 'translate-y-2' : ''} ${i === 3 ? '-translate-y-1' : ''}`}
              >
                <Icon size={20} className={item.color} strokeWidth={1.5} />
                <span className="text-[9px] text-slate-400 text-center leading-tight">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 shrink-0 px-2">
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-1"
        >
          <div className="w-8 h-px bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <div className="w-3 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
          <ArrowRight size={16} className="text-cyan-400 -ml-1" />
        </motion.div>
        <span className="text-[9px] text-indigo-400 font-semibold mt-1">Synthex AI</span>
      </div>

      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 text-center font-semibold">Entregable ejecutivo</p>
        <div className="p-4 rounded-xl border border-indigo-500/25 bg-indigo-950/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={14} className="text-cyan-400" />
            <span className="text-[11px] text-slate-200 font-semibold">Decision Log — Q2 Strategy</span>
          </div>
          <div className="space-y-1.5">
            {['Decisiones estratégicas: 3', 'OKRs generados: 4', 'Riesgos identificados: 1'].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-indigo-400" />
                <span className="text-[9px] text-slate-400">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-1.5">
            <Clock size={10} className="text-cyan-400" />
            <span className="text-[9px] text-cyan-300 font-medium">Listo en 15 min</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
  }

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center text-center pt-12 relative overflow-hidden">
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_60%)] blur-[60px] z-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10 w-full">
        <div className="max-w-[900px] mx-auto">
          {/* MEJORA 4: pure CSS staggered animations */}
          <h1 className="hero-enter hero-enter-1 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.07] tracking-tight mb-5">
            Convierte el caos de tus talleres estratégicos en{' '}
            <span className="gradient-text-accent">decisiones ejecutables</span>.
          </h1>

          <p className="hero-enter hero-enter-2 text-lg md:text-xl text-[var(--color-text-secondary)] mb-6 max-w-[760px] mx-auto leading-relaxed">
            Synthex es la capa de IA que sintetiza boards, transcripts y notas en entregables ejecutivos trazables y listos para governance, en cuestión de minutos.
          </p>

          <div className="hero-enter hero-enter-3 flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/50 border border-indigo-500/20">
              <Clock size={13} className="text-cyan-400 shrink-0" />
              <span className="text-sm text-cyan-300 font-medium">Recupera las horas no facturables perdidas en síntesis manual post-taller</span>
            </div>
          </div>

          <div className="hero-enter hero-enter-4 flex flex-col items-center gap-3">
            <a href="#cta" onClick={(e) => scrollTo(e, '#cta')}>
              <Button>Solicitar acceso anticipado</Button>
            </a>
            {/* MEJORA 5 from previous: audience clarity badge */}
            <p className="text-xs text-slate-500 max-w-sm text-center leading-relaxed">
              Diseñado para consultoras de estrategia e innovación, facilitadores senior y equipos internos de transformación.
            </p>
          </div>

          {/* Visual flow diagram (WorkshopFlowVisual) */}
          <WorkshopFlowVisual />
        </div>
      </div>
    </section>
  )
}
