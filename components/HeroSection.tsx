'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline parallax
      gsap.to(headlineRef.current, {
        y: -60,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

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
      className="relative pt-14 md:pt-14 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none" />

      {/* Vertical grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* 4 vertical columns */}
        <div className="h-full max-w-none mx-5 md:mx-8 flex">
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-5 md:px-8">
        {/* Headline area */}
        <div ref={headlineRef} className="pt-16 md:pt-28 pb-6 md:pb-8">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2.2rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.03em] text-white"
            >
              We build brands & digital products
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2.2rem,6.5vw,5rem)] font-light leading-[1.08] tracking-[-0.03em] text-white"
            >
              for lasting success
            </motion.h1>
          </div>
        </div>

        {/* Separator line below headline */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />

        {/* 3x3 Showcase Image Grid */}
        <div className="py-6 md:py-8">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {/* Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
                alt="Dark tech abstract"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              {/* Lossless overlay badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 opacity-90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/80">
                    <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-white/90 text-sm font-light tracking-wide">lossless</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Dashboard mockup"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                alt="Color palette design"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
                alt="UI screenshots grid"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80"
                alt="Video showcase"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-0.5 text-white">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80"
                alt="Product design"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Row 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
                alt="Laptop mockup"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                alt="Mobile design"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111] group"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                alt="Phone in hand"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Separator line below showcase grid */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />
      </div>
    </section>
  )
}
