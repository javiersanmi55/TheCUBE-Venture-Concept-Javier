import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Problema', href: '#problema' },
  { label: 'Para quién', href: '#audiencia' },
  { label: 'Producto', href: '#producto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full h-20 z-50 flex items-center border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/95 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-[#020617]/85 border-white/5'
      }`}
      style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-[1200px] mx-auto px-8 w-full flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-[var(--color-text-primary)] no-underline transition-all duration-300 xl:-ml-[60px]">
          <div className="w-2.5 h-2.5 bg-[var(--color-accent-cyan)] rounded-full shadow-[0_0_10px_var(--color-accent-cyan)]" />
          Synthex
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-[var(--color-text-secondary)] no-underline font-medium text-[0.95rem] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" onClick={(e) => scrollTo(e, '#cta')}>
            <Button variant="nav">Acceso anticipado</Button>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
