import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ProductDemo } from '@/components/sections/ProductDemo'
import { Integrations } from '@/components/sections/Integrations'
import { Problem } from '@/components/sections/Problem'
import { Audience } from '@/components/sections/Audience'
import { FlowVisualization } from '@/components/sections/FlowVisualization'
import { CTA } from '@/components/sections/CTA'

// ── Improvement 3: Section dot marker on the timeline line ────────────
function SectionDot() {
  return (
    <div className="hidden xl:flex items-center select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* The dot sits exactly on the line, perfectly centered */}
      <div className="relative w-4 h-4 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
        <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping" style={{ animationDuration: '2.5s' }} />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="pt-20">
      <Navbar />

      {/* ── Global timeline line (Improvement 3) ─────────────────── */}
      {/* Thin cyan vertical line along the left edge of content */}
      <div
        className="hidden xl:block fixed top-20 bottom-0 pointer-events-none z-0"
        style={{
          left: 'calc(50% - 600px + 32px)',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(6,182,212,0.25) 8%, rgba(6,182,212,0.25) 92%, transparent 100%)',
        }}
      />

      {/* Hero */}
      <section id="top">
        <Hero />
      </section>

      {/* El Problema */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 32.5px)', top: 0 }}>
          <SectionDot />
        </div>
        <Problem />
      </div>

      {/* Para quién */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 32.5px)', top: 0 }}>
          <SectionDot />
        </div>
        <Audience />
      </div>

      {/* Solución section (ProductDemo + Flow + Integrations) */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 32.5px)', top: 0 }}>
          <SectionDot />
        </div>
        <ProductDemo />
        <FlowVisualization />
        <Integrations />
      </div>

      {/* Acceso / Únete */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 32.5px)', top: 0 }}>
          <SectionDot />
        </div>
        <CTA />
      </div>
    </div>
  )
}

export default App
