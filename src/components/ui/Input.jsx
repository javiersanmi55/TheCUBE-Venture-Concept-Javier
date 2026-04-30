import { cn } from "@/lib/utils"

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "flex-grow px-5 py-4 rounded-lg border border-[var(--color-border)] bg-black/30 text-[var(--color-text-primary)] font-sans text-base placeholder:text-[var(--color-text-secondary)] transition-all duration-300 focus:outline-none focus:border-[var(--color-accent-indigo)] focus:shadow-[0_0_10px_rgba(79,70,229,0.2)]",
        className
      )}
      {...props}
    />
  )
}
