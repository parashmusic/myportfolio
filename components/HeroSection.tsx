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
                "AWS",
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
          <div className="grid-line-v flex-1  border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
                    <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />

          <div className="grid-line-v flex-1 border-l border-white/[0.06]  origin-bottom" />

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
              className="text-[clamp(2.2rem,6.5vw,6rem)] font-light leading-[1.38] tracking-[-0.03em] text-white"
            >
             Crafting Seamless Digital Experiences


            </motion.h1>
          </div>
            <div className="grid-line-h w-full h-px bg-white/[0.58] origin-left" />
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2.2rem,6.5vw,6rem)] font-light leading-[1.38] tracking-[-0.03em] text-white"
            >
             That <span className="text-[#ff3708] italic">Breathe</span> and Evolve
            </motion.h1>
          </div>
                <div className="grid-line-h w-full h-px bg-white/[0.58] origin-left" />
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
        {/* <div className="grid-line-h h-px bg-white/[0.28] origin-left" /> */}

        {/* 3x3 Showcase Image Grid */}
        <div className="py-6  md:py-8">
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
                  src="/hero/Scene 41.png"
                  alt="Dark tech abstract"
                  className="w-full h-full object-cover"
                  
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
                  src="https://codebyparash.vercel.app/assets/rmchome-BlUD0lpa.png"
                  alt="Dashboard mockup"
                  className="w-full h-full object-cover"
                  
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
                  src="https://codebyparash.vercel.app/assets/rmc-08agVScG.png"
                  alt="Color palette design"
                  className="w-full h-full object-cover"
                  
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
                  src="https://codebyparash.vercel.app/assets/tracerx-Cyv7dVJV.png"
                  alt="UI screenshots grid"
                  className="w-full h-full object-cover"
                  
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
                  src="/hero/bill.png"
                  alt="Video showcase"
                  className="w-full h-full object-cover"
                  
                  loading="lazy"
                />
              </motion.div>
             
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
                  src="/hero/009.png"
                  alt="Product design"
                  className="w-full h-full object-cover"
                  
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
                  src="/hero/cleovv.png"
                  alt="Laptop mockup"
                  className="w-full h-full object-cover"
                  
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
                  src="/hero/Group4.png"
                  alt="Mobile design"
                  className="w-full scale-110 h-full object-cover"
                  
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
                  src="/hero/Group9.png"
                  alt="Phone in hand"
                  className="w-full h-full object-cover"
                  
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Separator line below showcase grid */}
        <div className="grid-line-h h-px bg-white/[0.28] origin-left" />
      </div>
    </section>
  )
}
