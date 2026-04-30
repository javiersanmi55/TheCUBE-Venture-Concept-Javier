import { motion } from 'framer-motion'
import {
  SiMiro, SiMural, SiZoom, SiNotion,
  SiAsana, SiJira, SiSlack, SiConfluence, SiGoogleslides
} from 'react-icons/si'
import { Mic, CalendarDays } from 'lucide-react'

// ── Node data ─────────────────────────────────────────────────────────
// ViewBox: 900 × 620  |  80px internal padding top/bottom
// Left center X = 100, card right edge = 200
// Right card left edge = 700, center X = 800
// Synthex center: (450, 310)

const CX = 450, CY = 310
const LX = 100  // center of left column
const RX = 800  // center of right column
const L_RIGHT = 195  // right edge of left cards (line start)
const R_LEFT  = 705  // left edge of right cards (line end)

// 7 input nodes: y from 60 to 560, spacing 83
const LEFT_NODES = [
  { name: 'Miro',       color: '#FFD02F', y: 60  },
  { name: 'Mural',      color: '#FF5E00', y: 143 },
  { name: 'Granola',    color: '#10B981', y: 226 },
  { name: 'Otter.ai',  color: '#4B7BFF', y: 310 },
  { name: 'SessionLab', color: '#00C48C', y: 393 },
  { name: 'Zoom',       color: '#2D8CFF', y: 476 },
  { name: 'Notion',     color: '#E5E7EB', y: 559 },
]

// 8 output nodes: y from 60 to 560, spacing 71
const RIGHT_NODES = [
  { name: 'PowerPoint',    color: '#D94F27', y: 60  },
  { name: 'Google Slides', color: '#FBBC04', y: 131 },
  { name: 'Word',          color: '#2B579A', y: 202 },
  { name: 'Notion',        color: '#E5E7EB', y: 273 },
  { name: 'Confluence',    color: '#0052CC', y: 344 },
  { name: 'Asana',         color: '#F06A6A', y: 415 },
  { name: 'Jira',          color: '#0052CC', y: 487 },
  { name: 'Slack',         color: '#E01E5A', y: 558 },
]

const leftPath  = (y) => `M ${L_RIGHT} ${y} C 320 ${y}, 320 ${CY}, ${CX - 62} ${CY}`
const rightPath = (y) => `M ${CX + 62} ${CY} C 580 ${CY}, 580 ${y}, ${R_LEFT} ${y}`

// Card dimensions for Supabase-style pill nodes
const CARD_W = 190, CARD_H = 38, CARD_R = 7

export function Integrations() {
  return (
    <section className="pb-24 pt-12 relative" style={{ background: 'radial-gradient(ellipse at center, rgba(0, 180, 216, 0.06) 0%, transparent 70%)' }}>
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-secondary)] mb-3">Integraciones</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Conecta tu stack. <span className="gradient-text-accent">Synthex lo sintetiza.</span>
          </h2>
        </motion.div>

        <motion.div
          className="overflow-x-auto pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <svg
            viewBox="0 0 900 650"
            className="w-full max-w-5xl mx-auto block"
            style={{ minWidth: 680 }}
          >
            <defs>
              {/* Line gradients */}
              <linearGradient id="gl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.55"/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="gr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.55"/>
              </linearGradient>
              {/* Glow for center node */}
              <filter id="glow-c" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              {/* Text gradient for center S */}
              <linearGradient id="gs" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#818cf8"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
              {/* Animation keyframes */}
              <style>{`
                .ln { stroke-dasharray:7 5; animation:fl 3s linear infinite; }
                .rn { stroke-dasharray:7 5; animation:fr 3s linear infinite; }
                @keyframes fl {
                  0%   { stroke-dashoffset:200; opacity:.2; }
                  50%  { opacity:.5; }
                  100% { stroke-dashoffset:0;   opacity:.2; }
                }
                @keyframes fr {
                  0%   { stroke-dashoffset:0;   opacity:.2; }
                  50%  { opacity:.5; }
                  100% { stroke-dashoffset:-200; opacity:.2; }
                }
                @keyframes gp {
                  0%,100% { opacity:.35; }
                  50%     { opacity:.75; }
                }
                .gp { animation: gp 2.5s ease-in-out infinite; }
              `}</style>
            </defs>

            {/* ── Column labels ─────────────────────────────── */}
            <text x={LX} y={22} textAnchor="middle" fontSize="8.5" fill="#475569" fontWeight="700" letterSpacing="2.5">CONECTA TUS FUENTES</text>
            <text x={RX} y={22} textAnchor="middle" fontSize="8.5" fill="#475569" fontWeight="700" letterSpacing="2.5">ENTREGA DONDE TRABAJAS</text>

            {/* ── LEFT: paths ──────────────────────────────── */}
            {LEFT_NODES.map((n,i) => (
              <path key={`lp${i}`} d={leftPath(n.y)} fill="none" stroke="url(#gl)" strokeWidth="1" className="ln" style={{animationDelay:`${i*0.2}s`}}/>
            ))}

            {/* ── RIGHT: paths ─────────────────────────────── */}
            {RIGHT_NODES.map((n,i) => (
              <path key={`rp${i}`} d={rightPath(n.y)} fill="none" stroke="url(#gr)" strokeWidth="1" className="rn" style={{animationDelay:`${i*0.15}s`}}/>
            ))}

            {/* ── Particles left → center ───────────────────── */}
            {LEFT_NODES.map((n,i) => (
              <circle key={`lpar${i}`} r="2.5" fill="#6366f1" opacity="0">
                <animateMotion dur={`${2.2+i*0.22}s`} begin={`${i*0.28}s`} repeatCount="indefinite" path={leftPath(n.y)}/>
                <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.1;.85;1" dur={`${2.2+i*0.22}s`} begin={`${i*0.28}s`} repeatCount="indefinite"/>
              </circle>
            ))}

            {/* ── Particles center → right ──────────────────── */}
            {RIGHT_NODES.map((n,i) => (
              <circle key={`rpar${i}`} r="2.5" fill="#06b6d4" opacity="0">
                <animateMotion dur={`${2+i*0.18}s`} begin={`${0.4+i*0.22}s`} repeatCount="indefinite" path={rightPath(n.y)}/>
                <animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.1;.85;1" dur={`${2+i*0.18}s`} begin={`${0.4+i*0.22}s`} repeatCount="indefinite"/>
              </circle>
            ))}

            {/* ── LEFT: Supabase-style card nodes ──────────── */}
            {LEFT_NODES.map((n,i) => (
              <g key={`ln${i}`}>
                {/* Card background */}
                <rect x={LX - CARD_W/2} y={n.y - CARD_H/2} width={CARD_W} height={CARD_H} rx={CARD_R}
                  fill="#0f1117" stroke="#1e2a3a" strokeWidth="1"/>
                {/* Brand color indicator dot */}
                <circle cx={LX - CARD_W/2 + 16} cy={n.y} r="5" fill={n.color} opacity="0.85"/>
                {/* Name */}
                <text x={LX - CARD_W/2 + 30} y={n.y + 4} fontSize="10.5" fill="#94a3b8" fontWeight="500">{n.name}</text>
                {/* Connector dot on right edge */}
                <circle cx={L_RIGHT} cy={n.y} r="3" fill="#6366f1" opacity="0.4"/>
              </g>
            ))}

            {/* ── RIGHT: Supabase-style card nodes ─────────── */}
            {RIGHT_NODES.map((n,i) => (
              <g key={`rn${i}`}>
                <rect x={RX - CARD_W/2} y={n.y - CARD_H/2} width={CARD_W} height={CARD_H} rx={CARD_R}
                  fill="#0f1117" stroke="#1e2a3a" strokeWidth="1"/>
                <circle cx={RX - CARD_W/2 + 16} cy={n.y} r="5" fill={n.color} opacity="0.85"/>
                <text x={RX - CARD_W/2 + 30} y={n.y + 4} fontSize="10.5" fill="#94a3b8" fontWeight="500">{n.name}</text>
                {/* Connector dot on left edge */}
                <circle cx={R_LEFT} cy={n.y} r="3" fill="#06b6d4" opacity="0.4"/>
              </g>
            ))}

            {/* ── CENTER: Synthex node (most prominent) ────── */}
            {/* Outer glow rings */}
            <circle cx={CX} cy={CY} r="80" fill="rgba(6,182,212,0.03)" className="gp"/>
            <circle cx={CX} cy={CY} r="72" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1"/>
            <circle cx={CX} cy={CY} r="65" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="0.5"/>
            {/* Main card */}
            <circle cx={CX} cy={CY} r="60" fill="#0b1120" stroke="rgba(6,182,212,0.45)" strokeWidth="1.5" filter="url(#glow-c)"/>
            <circle cx={CX} cy={CY} r="58" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="0.5"/>
            {/* S */}
            <text x={CX} y={CY - 8} textAnchor="middle" fontSize="30" fontWeight="900" fill="url(#gs)" letterSpacing="-1">S</text>
            {/* Label */}
            <text x={CX} y={CY + 16} textAnchor="middle" fontSize="8" fill="#94a3b8" letterSpacing="3.5" fontWeight="700">SYNTHEX</text>
            {/* Glow dot top and bottom */}
            <circle cx={CX} cy={CY - 60} r="3" fill="#06b6d4" opacity="0.5"/>
            <circle cx={CX} cy={CY + 60} r="3" fill="#6366f1" opacity="0.5"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
