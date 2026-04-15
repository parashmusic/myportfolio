'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Trientra',
    subtitle: 'Safety & Intelligence Platform',
    category: 'App Development',
    image: '/trin.png',
    titleColor: 'text-[#4ade80]',
  },
  {
    title: 'Juno-CLI',
    subtitle: 'AI-powered CLI agent',
    category: 'AI/ML',
    image: '/juno.png',
    titleColor: 'text-white',
  },
  {
    title: 'barakedge',
    subtitle: 'Modern News & Media platform',
    category: 'Web Development',
    image: '/barak.png',
    titleColor: 'text-[#e85d4a]',
  },
  {
    title: 'AeroSync',
    subtitle: 'Decentralized P2P messaging',
    category: 'App Development',
    image: '/aerosync.png',
    titleColor: 'text-white',
  },
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ─── MOBILE (≤ 767px) ───────────────────────────────────────────────
      mm.add('(max-width: 767px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card')

        cards.forEach((card) => {
          // Lighter entrance — smaller y offset, fires earlier
          gsap.fromTo(
            card,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                end: 'top 70%',
                toggleActions: 'play none none none',
              },
            }
          )

          // Stair reveal — faster stagger, earlier trigger
          const stairSteps = card.querySelectorAll('.portfolio-stair-step')
          if (stairSteps.length) {
            gsap.to(stairSteps, {
              scaleY: 0,
              stagger: 0.06,
              duration: 0.9,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
              },
            })
          }

          // No parallax on mobile — too janky on low-end devices
        })

        // Grid lines scoped to this section only
        gsap.fromTo(
          sectionRef.current!.querySelectorAll('.grid-line-v'),
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.2,
            ease: 'power3.inOut',
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
            },
          }
        )
      })

      // ─── DESKTOP (≥ 768px) ──────────────────────────────────────────────
      mm.add('(min-width: 768px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card')

        cards.forEach((card) => {
          // Card entrance
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse',
              },
            }
          )

          // Stair cut reveal
          const stairSteps = card.querySelectorAll('.portfolio-stair-step')
          if (stairSteps.length) {
            gsap.to(stairSteps, {
              scaleY: 0,
              stagger: 0.08,
              duration: 1.2,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
              },
            })
          }

          // Subtle parallax on inner image — desktop only
          const img = card.querySelector('.portfolio-img')
          if (img) {
            gsap.fromTo(
              img,
              { y: -15, scale: 1.08 },
              {
                y: 15,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.5,
                },
              }
            )
          }
        })

        // Vertical grid lines scoped to this section
        gsap.fromTo(
          sectionRef.current!.querySelectorAll('.grid-line-v'),
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

        // Horizontal grid lines scoped to this section
        gsap.fromTo(
          sectionRef.current!.querySelectorAll('.grid-line-h'),
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
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="portfolio"
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
        {/* 2x2 Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {projects.map((project, index) => {
            const isRight = index % 2 === 1
            return (
              <div
                key={project.title}
                className={`portfolio-card group cursor-pointer ${
                  isRight ? 'md:pl-4 md:border-l md:border-white/[0.06]' : 'md:pr-4'
                } ${index > 0 ? 'pt-8 md:pt-0' : ''}`}
              >
                {/* Image container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111]">
                  {/* Stair reveal overlay */}
                  <div className="absolute inset-0 z-20 pointer-events-none flex">
                    <div className="portfolio-stair-step flex-1 bg-[#0a0a0a] origin-bottom border-x border-white/5" />
                    <div className="portfolio-stair-step flex-1 bg-[#0a0a0a] origin-bottom border-x border-white/5" />
                    <div className="portfolio-stair-step flex-1 bg-[#0a0a0a] origin-bottom border-x border-white/5" />
                    <div className="portfolio-stair-step flex-1 bg-[#0a0a0a] origin-bottom border-x border-white/5" />
                    <div className="portfolio-stair-step flex-1 bg-[#0a0a0a] origin-bottom border-x border-white/5" />
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-img w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text below image */}
                <div className="pt-4 pb-8 md:pb-10">
                  <h3 className="text-sm md:text-base font-normal tracking-tight mb-1">
                    <span className={project.titleColor}>{project.title}</span>
                    <span className="text-white/70 font-light"> — {project.subtitle}</span>
                  </h3>
                  <p className="text-white/35 text-xs font-light">
                    {project.category}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="flex justify-center py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
          >
        {/* View More Button */}
        <div className="flex justify-center py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Link href="/work" aria-label="View more work" className="block">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="relative flex items-center justify-center h-12 rounded-full border border-white/20 bg-transparent cursor-pointer overflow-hidden"
                variants={{
                  initial: { width: '3rem' },
                  hover: { 
                    width: '9rem', 
                    backgroundColor: '#ffffff',
                    borderColor: '#ffffff'
                  }
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                {/* Plus icon — centered and visible initially */}
                <motion.div
                  className="absolute flex items-center justify-center"
                  variants={{
                    initial: { opacity: 1, scale: 1 },
                    hover: { opacity: 0, scale: 0.5 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-white"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.div>

                {/* "View More" text — appears only on hover */}
                <motion.span
                  className="absolute whitespace-nowrap text-[#0a0a0a] text-sm font-medium tracking-tight"
                  variants={{
                    initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
                    hover: { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }}
                  transition={{ delay: 0.1, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                  View More
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
