import { motion } from 'framer-motion'
import { Card, CardTitle, CardContent } from '@/components/ui/Card'
import { BrainCircuit, FileText, Target } from 'lucide-react'

const steps = [
  {
    badge: 'Paso 1',
    title: 'Ingesta Multimodal Transversal',
    text: 'Conecta las APIs de tus pizarras visuales y tus meeting bots. Synthex cruza el lienzo visual (clusters, votos, frames) con el audio de la sala y las notas de la agenda para crear un contexto unificado de la sesión.',
    icon: BrainCircuit,
    visual: {
      label: 'Cerebro de Orquestación',
      sub: 'Miro Board + Otter Transcript + SessionLab',
    },
    accentClass: 'border-[var(--color-accent-indigo)]/30',
  },
  {
    badge: 'Paso 2',
    title: 'Motor de Entregables Ejecutivos',
    text: 'Aplica frameworks de consultoría aprobados sobre los datos crudos. Genera automáticamente un Strategy Storyline, un Portfolio de Apuestas o un Registro de Decisiones con 100% de trazabilidad a la fuente original.',
    icon: FileText,
    visual: {
      label: 'Strategy Storyline',
      sub: 'Contexto, opciones, decisiones y riesgos modelados.',
    },
    accentClass: 'border-[var(--color-accent-cyan)]/50',
  },
  {
    badge: 'Paso 3',
    title: 'Mapeo Directo a Ejecución',
    text: 'No dejes que la estrategia muera en un PowerPoint. Exporta las decisiones y prioridades directamente a Workpath, Jira o Notion como borradores de OKRs o épicas accionables.',
    icon: Target,
    visual: {
      label: 'Exportar a OKRs',
      sub: 'Sincronización bidireccional con Workpath/Notion',
    },
    accentClass: 'border-[var(--color-accent-indigo)]/50',
  },
]

export function Platform() {
  return (
    <section id="plataforma" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight tracking-tight mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          De outputs dispersos a{' '}
          <span className="gradient-text">arquitectura estratégica</span>
        </motion.h2>

        <div className="flex flex-col gap-16">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 !== 0
            return (
              <motion.div
                key={step.badge}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:direction-rtl' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={`p-4 ${isEven ? 'lg:order-2' : ''}`}>
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-[var(--color-accent-cyan)] bg-[rgba(79,70,229,0.1)] border border-[rgba(6,182,212,0.2)] mb-4">
                    {step.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">{step.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">{step.text}</p>
                </div>

                <div className={isEven ? 'lg:order-1' : ''}>
                  <Card className={`p-10 text-center ${step.accentClass}`}>
                    <div className="flex justify-center mb-4 text-[var(--color-accent-cyan)]">
                      <Icon size={48} strokeWidth={1} />
                    </div>
                    <CardTitle className="text-lg">{step.visual.label}</CardTitle>
                    <CardContent className="mt-2 text-sm">{step.visual.sub}</CardContent>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
