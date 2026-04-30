import { motion } from 'framer-motion'
import { Link2, BrainCircuit, FileText, Target, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Link2,
    label: 'Inputs del taller',
    description: 'Boards, transcripciones, agendas y notas',
    color: 'text-slate-400',
    bg: 'bg-slate-800/60',
    border: 'border-slate-700/50',
  },
  {
    icon: BrainCircuit,
    label: 'Synthex AI',
    description: 'Motor de síntesis con frameworks estratégicos',
    color: 'text-indigo-400',
    bg: 'bg-indigo-950/60',
    border: 'border-indigo-500/30',
    glow: true,
  },
  {
    icon: FileText,
    label: 'Entregables estratégicos',
    description: 'Decision logs, OKRs, narrativas ejecutivas',
    color: 'text-cyan-400',
    bg: 'bg-cyan-950/40',
    border: 'border-cyan-500/25',
  },
  {
    icon: Target,
    label: 'Ejecución',
    description: 'Exportación directa a tu plataforma favorita',
    color: 'text-emerald-400',
    bg: 'bg-emerald-950/40',
    border: 'border-emerald-500/25',
  },
]

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.8, 0.25, 1] },
  }),
}

export function FlowVisualization() {
  return (
    <section className="py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight tracking-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          De la sala a la{' '}
          <span className="gradient-text">ejecución</span>
        </motion.h2>

        <motion.p
          className="text-center text-[var(--color-text-secondary)] max-w-lg mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Un flujo continuo que conecta lo que ocurrió en el taller con lo que debe ocurrir después.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="flex items-center">
                <motion.div
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl ${step.bg} border ${step.border} w-56 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  {step.glow && (
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)] pointer-events-none" />
                  )}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${step.color} bg-white/5`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <p className={`text-sm font-semibold mb-1.5 ${step.color}`}>{step.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">{step.description}</p>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex items-center mx-3 text-slate-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.15 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
