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
    <div className="hidden xl:flex items-center select-none pointer-events-none">
      {/* The dot sits exactly on the line, vertically centered on its position */}
      <div className="relative w-5 h-5 flex items-center justify-center -translate-y-1/2">
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style={{ animationDuration: '2.5s' }} />
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

      {/* Solución section (ProductDemo + Flow + Integrations) */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 28px)', top: '6rem' }}>
          <SectionDot />
        </div>
        <ProductDemo />
        <FlowVisualization />
        <Integrations />
      </div>

      {/* El Problema */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 28px)', top: '6rem' }}>
          <SectionDot />
        </div>
        <Problem />
      </div>

      {/* Para quién */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 28px)', top: '6rem' }}>
          <SectionDot />
        </div>
        <Audience />
      </div>

      {/* Acceso / Únete */}
      <div className="relative">
        <div className="hidden xl:block absolute" style={{ left: 'calc(50% - 600px + 28px)', top: '7rem' }}>
          <SectionDot />
        </div>
        <CTA />
      </div>
    </div>
  )
}

export default App
