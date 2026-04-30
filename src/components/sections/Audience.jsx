import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Building2, BarChart3, Users } from 'lucide-react'

const audiences = [
  {
    icon: Building2,
    title: 'Consultoras boutique',
    pain: 'Su margen depende de las horas facturables.',
    solution: 'El post-work de síntesis es su mayor coste oculto. Synthex elimina el trabajo manual de convertir talleres en entregables, liberando horas que se facturan.',
  },
  {
    icon: BarChart3,
    title: 'Heads of Strategy / TMO',
    pain: 'Reciben información dispersa tras cada sesión.',
    solution: 'Necesitan reportar a governance con rapidez. Synthex entrega informes estructurados y trazables directamente desde el material del taller.',
  },
  {
    icon: Users,
    title: 'Facilitadores senior',
    pain: 'Diseñan múltiples talleres al mes.',
    solution: 'Necesitan escalar su delivery sin sacrificar la calidad estratégica de las conclusiones. Synthex automatiza la síntesis manteniendo el rigor.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.8, 0.25, 1] },
  }),
}

export function Audience() {
  return (
    <section className="py-28">
      <div id="audiencia" className="max-w-[1200px] mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight tracking-tight mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Para quién es{' '}
          <span className="gradient-text-accent">Synthex</span>
        </motion.h2>

        <motion.p
          className="text-center text-[var(--color-text-secondary)] max-w-xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Equipos que viven de transformar workshops en decisiones y no pueden permitirse perder horas en el camino.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[rgba(79,70,229,0.1)] flex items-center justify-center mb-4 text-[var(--color-accent-indigo-light)]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--color-accent-cyan)] text-sm font-medium mb-2">{item.pain}</p>
                    <p className="text-[var(--color-text-secondary)]">{item.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
