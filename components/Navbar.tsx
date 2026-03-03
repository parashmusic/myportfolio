'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StaircaseTransition from './StaircaseTransition'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetHref, setTargetHref] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    setTargetHref(href)
    setIsTransitioning(true)

    // Scroll to target during the transition hold phase
    setTimeout(() => {
      const targetEl = document.querySelector(href)
      if (targetEl) {
        // Temporarily disable smooth scroll so it jumps instantly
        targetEl.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }, 500) // fires at the midpoint of the transition when screen is fully covered
  }, [])

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false)
    setTargetHref(null)
  }, [])

  return (
    <>
      {/* Staircase Transition Overlay */}
      <StaircaseTransition
        isAnimating={isTransitioning}
        onComplete={handleTransitionComplete}
        columns={5}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl'
            : 'bg-[#0a0a0a]'
        }`}
      >
        <div className="w-full px-5  md:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo — left */}
            <a href="#" className="flex items-center gap-0 group shrink-0">
              <span className="text-white/90 text-sm font-normal tracking-tight">
                Parash.dev
              </span>
              <span className="text-white/40 text-sm font-light mx-1.5">
                —
              </span>
              <span className="text-white/40 text-sm font-light">
                Digital Agency
              </span>
            </a>

            {/* Center dots */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              <span className="w-2 h-2 rounded-full bg-white/80" />
              <span className="w-2 h-2 rounded-full border border-white/30" />
            </div>

            {/* Desktop Nav — right */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.3, duration: 0.5 }}
                  className="text-white/50 text-sm font-light hover:text-white transition-colors duration-300 relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1px] bg-white origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[1px] bg-white"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1px] bg-white origin-center"
              />
            </button>
          </div>
        </div>

        {/* Navbar bottom separator line */}
        <div className="w-full h-px bg-white/[0.28]" />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              <div className="px-5 py-8 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="text-white/70 text-2xl font-light hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
