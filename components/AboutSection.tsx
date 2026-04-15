'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal
      const words = gsap.utils.toArray<HTMLElement>('.about-word')
      words.forEach((word) => {
        gsap.fromTo(
          word,
          { opacity: 0.15 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: word,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        )
      })

      // Parallax images
      gsap.utils.toArray<HTMLElement>('.about-image').forEach((img) => {
        gsap.fromTo(
          img,
          { y: 40 },
          {
            y: -40,
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
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

  const aboutText = 'i am a passionate and creative developer. Adding distinctive touch to every venture.'
  const words = aboutText.split(' ')

  return (
    <section
      ref={sectionRef}
      id="about"
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
        {/* Text and images layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-28">
          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-light leading-[1.3] tracking-[-0.02em]"
            >
              {words.map((word, i) => {
                const isBold = word === 'passionate' || word === 'creative'
                return (
                  <span
                    key={i}
                    className={`about-word inline-block mr-[0.3em] ${
                      isBold ? 'font-normal italic text-white' : 'text-white/50'
                    }`}
                  >
                    {isBold ? <em>{word}</em> : word}
                  </span>
                )
              })}
            </motion.p>
          </div>

          {/* Images */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-image rounded-lg overflow-hidden aspect-[3/4]"
            >
              <img
                src="/parash.jpeg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-image rounded-lg overflow-hidden aspect-[3/4] mt-8"
            >
              <img
                src="/me2.jpg"
                alt="Team working"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <div className="grid-line-h h-px bg-white/[0.08] origin-left" />
      </div>
    </section>
  )
}
