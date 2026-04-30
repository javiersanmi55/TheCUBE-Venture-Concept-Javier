/**
 * SectionDivider — thin centered vertical line with glowing node
 * Inspired by bolt.new / linear.app narrative flow connectors.
 * showHorizontal: adds a faint horizontal separator from the node
 */
export function SectionDivider({ showHorizontal = false }) {
  return (
    <div className="relative flex flex-col items-center z-10 pointer-events-none select-none" style={{ height: 0, overflow: 'visible' }}>
      {/* Top line segment (extends upward from center) */}
      <div
        className="w-px"
        style={{
          height: 48,
          marginTop: -48,
          background: 'linear-gradient(to bottom, transparent, rgba(6,182,212,0.28))',
        }}
      />

      {/* Glowing node */}
      <div className="relative flex items-center justify-center" style={{ width: 16, height: 16 }}>
        {/* Ping ring */}
        <div
          className="absolute rounded-full border border-cyan-400/40 soft-ping"
          style={{ width: 12, height: 12 }}
        />
        {/* Core dot */}
        <div
          className="rounded-full bg-cyan-400"
          style={{
            width: 6,
            height: 6,
            boxShadow: '0 0 10px rgba(6,182,212,0.9), 0 0 4px rgba(6,182,212,1)',
          }}
        />
      </div>

      {/* Bottom line segment */}
      <div
        className="w-px"
        style={{
          height: 48,
          background: 'linear-gradient(to bottom, rgba(6,182,212,0.28), transparent)',
        }}
      />

      {/* Optional horizontal separator */}
      {showHorizontal && (
        <div
          className="absolute inset-x-0"
          style={{
            top: 8, // centered on the node
            height: 1,
            background: 'linear-gradient(to right, transparent 0%, rgba(6,182,212,0.18) 20%, rgba(6,182,212,0.18) 80%, transparent 100%)',
          }}
        />
      )}
    </div>
  )
}
