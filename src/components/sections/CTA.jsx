import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { FlaskConical } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] p-16 md:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-glow-indigo)_0%,transparent_70%)] opacity-30 pointer-events-none z-0" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
              Deja de sintetizar talleres a mano.
              <br />
              <span className="text-[var(--color-accent-cyan)]">Escala tu facilitación hoy.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Únete a la beta exclusiva para consultoras de estrategia y facilitadores profesionales.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="nombre@tuconsultora.com"
                required
              />
              <Button type="submit" className="whitespace-nowrap">
                Unirse a la lista de espera
              </Button>
            </form>
            <p className="text-xs text-[var(--color-text-secondary)] mt-4 opacity-60">
              Sin spam. Solo actualizaciones para consultores estratégicos.
            </p>

            {/* Validation note */}
            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center justify-center gap-2 text-[var(--color-text-tertiary)]">
                <FlaskConical size={14} />
                <p className="text-[11px]">
                  Construyendo bajo metodología de validación concierge con consultoras boutique early adopters.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
