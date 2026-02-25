'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'TG Lab',
    subtitle: 'iGaming software providers',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'NordPass',
    subtitle: 'Reliable password manager solution',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80',
    titleColor: 'text-[#e85d4a]',
  },
  {
    title: 'FastTrack',
    subtitle: 'Modern educational platform',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Fivrec',
    subtitle: 'Sustainability driven company',
    category: 'Branding + Web Design & Development',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80',
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
      </div>
    </section>
  )
}
