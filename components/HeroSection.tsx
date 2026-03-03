'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
                "React Js",
                "Next js",
                "Python",
                "Django",
                "Express Js",
                "React Native",
                "AWS CloudFront",
                "C & C++",
                "PHP",
                "ORACLE PL/SQL",
                "SQLite",
              ]

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)

  // Skill cycling state
  const [skillIndex, setSkillIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % SKILLS.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

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
              Transforming Visions into
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
              Flawless User Experiences
            </motion.h1>
          </div>

          {/* Skill transition subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 md:mt-7 flex items-center gap-2"
          >
            <span className="text-white/35 text-[clamp(0.8rem,1.6vw,1.05rem)] font-light tracking-widest uppercase">
              Specializing in
            </span>
            {/* Thin separator */}
            <span className="w-px h-4 bg-white/20 mx-1" />
            {/* Animated skill */}
            <span className="relative overflow-hidden h-[1.4em] flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={skillIndex}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[clamp(0.8rem,1.6vw,1.05rem)] font-medium tracking-widest uppercase"
                  style={{
                    background: 'linear-gradient(90deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {SKILLS[skillIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
        </div>

        {/* Separator line below headline */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />

        {/* 3x3 Showcase Image Grid */}
        <div className="py-6 md:py-8">
          <div className="grid grid-cols-3 gap-2 md:gap-3">

            {/* Card 1 — with badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] relative cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
                  alt="Dark tech abstract"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
              {/* Hover shimmer overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
              />
              {/* Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/70">
                    <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-white/80 text-sm font-light tracking-wide">lossless</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Dashboard mockup"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)' }}
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                  alt="Color palette design"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80"
                  alt="UI screenshots grid"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Card 5 — play button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] relative cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80"
                  alt="Video showcase"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.72)' }}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-0.5 text-white">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80"
                  alt="Product design"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Card 7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
                  alt="Laptop mockup"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Card 8 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                  alt="Mobile design"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Card 9 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-[4/3] rounded-none overflow-hidden bg-[#111] cursor-pointer"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                  alt="Phone in hand"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.82)' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Separator line below showcase grid */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />
      </div>
    </section>
  )
}
