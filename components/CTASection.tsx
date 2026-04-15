'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      )

      // Vertical grid lines draw animation (bottom to top)
      gsap.fromTo(
        '.grid-line-v',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Horizontal grid lines draw animation (left to right)
      gsap.fromTo(
        '.grid-line-h',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative"
    >
      {/* Vertical grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-full mx-5 md:mx-8 flex">
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
        </div>
      </div>

      <div className="relative z-10 px-5 md:px-8">
        <div className="cta-content text-center py-20 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-white mb-1">
             Want to build Something Better, Smarter?
            </h2>
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-white mb-1">
              Let&apos;s get there.
            </h2>
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.03em] mb-10">
              <em className="italic bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent">
                With Parash.
              </em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.a
              href="mailto:parashmoni.info@gmail.com" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] rounded-full text-sm font-medium tracking-wide hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] transition-shadow duration-500"
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />
      </div>
    </section>
  )
}
