import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Unplug, LayoutPanelLeft, Clock, ChevronDown } from 'lucide-react'

const problems = [
  {
    icon: Unplug,
    title: 'Las herramientas se detienen donde empieza el valor',
    text: 'Miro agrupa post-its. Granola transcribe la conversación. SessionLab planifica la agenda. Pero cuando el taller termina, ninguna sintetiza lo ocurrido en un entregable con estructura estratégica.',
  },
  {
    icon: LayoutPanelLeft,
    title: 'La síntesis sigue siendo manual y costosa',
    text: 'Tras cada taller, un consultor senior dedica varias horas a cruzar boards con transcripts y convertirlos en un documento ejecutivo para governance — una tarea de alto coste y no facturable.',
  },
  {
    icon: Clock,
    title: 'La pérdida de valor ocurre después de la sala',
    text: 'La mayor fricción no está en el workshop. Está en la traducción entre lo que se decidió en sala y lo que finalmente se alinea. Multiplicado por cada cliente y cada sesión mensual, el coste escala.',
  },
]

function ProblemCard({ problem, index, isOpen, onToggle }) {
  const Icon = problem.icon
  return (
    <div
      className={`rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
        isOpen
          ? 'border-cyan-500/30 bg-[rgba(6,182,212,0.04)] shadow-[0_0_20px_rgba(6,182,212,0.08)]'
          : 'border-white/8 bg-[rgba(30,41,59,0.5)] hover:border-white/15'
      }`}
      onClick={onToggle}
    >
      {/* Collapsed header — always visible */}
      <div className="flex items-center gap-4 px-5 py-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-cyan-400/10 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <p className={`flex-1 font-semibold text-sm leading-snug transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
          {problem.title}
        </p>
        <ChevronDown
          size={16}
          className={`text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
        />
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <div className="px-5 pb-5 pt-1 pl-[4.25rem]">
              <p className="text-sm text-slate-400 leading-relaxed">{problem.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Problem() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="problema" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight tracking-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tu taller genera ideas brillantes.
          <br />
          <span className="text-[var(--color-accent-cyan)]">¿Pero qué pasa después?</span>
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {problems.map((problem, i) => (
            <ProblemCard
              key={problem.title}
              problem={problem}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
