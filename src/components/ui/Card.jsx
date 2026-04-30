import { cn } from "@/lib/utils"

export function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "glass-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn("text-xl font-semibold text-[var(--color-text-primary)]", className)} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("text-[var(--color-text-secondary)] text-base leading-relaxed", className)} {...props}>
      {children}
    </div>
  )
}
