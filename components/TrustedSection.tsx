"use client"
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const logos = [
  'blaze',
  'Kilo.Health',
  'BlockWallet',
  'Northern Horizon',
  'lossless',
  'viena saskaita',
]

export default function TrustedSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section ref={sectionRef} className="relative">
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
        {/* Separator */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />

        {/* Plus button and dot */}
        <div className="flex flex-col items-center pt-8 md:pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mb-3 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="opacity-60">
              <path d="M12 5V19M5 12H19" />
            </svg>
          </motion.div>

          {/* Red dot */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-2 h-2 rounded-full bg-[#e85d4a] mb-5"
          />

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/40 text-sm font-light tracking-wide"
          >
            Trusted by 150+ companies including:
          </motion.p>
        </div>

        {/* Company logos row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pb-10 md:pb-14"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
            {logos.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.6, duration: 0.5 }}
                className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 cursor-default"
              >
                
                <span className="w-4 h-4 flex items-center justify-center opacity-50">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="2" y="2" width="5" height="5" rx="1" />
                    <rect x="9" y="2" width="5" height="5" rx="1" />
                    <rect x="2" y="9" width="5" height="5" rx="1" />
                    <rect x="9" y="9" width="5" height="5" rx="1" />
                  </svg>
                </span>
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Bottom separator */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />
      </div>
    </section>
  )
}
