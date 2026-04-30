import { cn } from "@/lib/utils"

export function Button({ children, variant = "primary", className, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-base transition-all duration-300 cursor-pointer border-none"
  
  const variants = {
    primary: "bg-gradient-to-r from-[var(--color-accent-indigo)] to-[var(--color-accent-cyan)] text-white px-8 py-4 shadow-[0_4px_20px_var(--color-glow-indigo)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5",
    nav: "bg-white/5 border border-[var(--color-border)] px-5 py-2.5 rounded-lg text-[var(--color-text-primary)] hover:bg-white/10 hover:border-[var(--color-accent-indigo)]",
    ghost: "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] px-4 py-2"
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
