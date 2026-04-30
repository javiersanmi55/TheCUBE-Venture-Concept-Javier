import { motion } from 'framer-motion'
import { Layers, Link2, Share2, BookOpen } from 'lucide-react'

const cards = [
  {
    icon: Layers,
    title: 'Síntesis estratégica, no resúmenes',
    text: 'No transcribe. Genera artefactos ejecutivos con estructura estratégica predefinida: decision log, bet portfolio, OKR drafts.',
    accent: 'from-indigo-500/20 to-indigo-500/0',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
  },
  {
    icon: Link2,
    title: 'Trazabilidad fuente a entregable',
    text: 'Cada afirmación del output está enlazada al fragmento exacto del taller donde se generó. Cada decisión, defendible.',
    accent: 'from-cyan-500/20 to-cyan-500/0',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
  },
  {
    icon: Share2,
    title: 'Neutral entre plataformas',
    text: 'Se integra con las herramientas que ya usas sin reemplazar ninguna. Miro, Granola, SessionLab, Notion. Tú eliges el stack.',
    accent: 'from-violet-500/20 to-violet-500/0',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
  },
  {
    icon: BookOpen,
    title: 'Plantillas por tipo de taller',
    text: 'El sistema sabe que un taller de visión no genera los mismos outputs que uno de priorización. El entregable se adapta al contexto.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.8, 0.25, 1] }
  })
}

export function Differentiators() {
  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-secondary)] mb-3">Diferenciadores</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Por qué Synthex es <span className="gradient-text-accent">diferente</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-xl border border-white/[0.07] bg-[#0c111d] p-6 overflow-hidden group hover:border-white/[0.13] transition-colors duration-300"
              >
                {/* Subtle top-left gradient wash on hover */}
                <div className={`absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl`} />

                {/* Icon */}
                <div className={`w-9 h-9 rounded-lg ${card.iconBg} flex items-center justify-center mb-4 relative z-10`}>
                  <Icon size={18} className={card.iconColor} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-[0.95rem] font-semibold text-white mb-2 leading-snug relative z-10">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                  {card.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
