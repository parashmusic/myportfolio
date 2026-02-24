'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, borderRadius: '24px' },
        {
          scale: 1,
          borderRadius: '12px',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-4 md:px-10 pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[2.2/1] rounded-2xl overflow-hidden group"
        >
          {/* Background image */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a1a] via-[#0d1a0d] to-[#0a0a0a]">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
              alt="Dashboard showcase"
              className="w-full h-full object-cover opacity-70 mix-blend-luminosity"
              loading="lazy"
            />
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/20" />

          {/* Floating logo badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-[#4ade80]/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#4ade80]">
                <path d="M8 1L10.5 5.5L15 8L10.5 10.5L8 15L5.5 10.5L1 8L5.5 5.5L8 1Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium tracking-wide">Jossless</span>
          </motion.div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group/play hover:bg-white/20 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 text-white">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </motion.button>
          </div>

          {/* Bottom preview cards */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-3">
            <div className="w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80"
                alt="Preview 1"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80"
                alt="Preview 2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
