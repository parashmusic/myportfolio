'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Branding', 'Products', 'Web'] as const
type Category = (typeof categories)[number]

const allProjects = [
  {
    title: 'TG Lab',
    subtitle: 'iGaming software providers',
    category: 'Web',
    tag: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'NordPass',
    subtitle: 'Reliable password manager solution',
    category: 'Branding',
    tag: 'Branding',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80',
    titleColor: 'text-[#e85d4a]',
  },
  {
    title: 'FastTrack',
    subtitle: 'Modern educational platform',
    category: 'Web',
    tag: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Fivrec',
    subtitle: 'Sustainability driven company',
    category: 'Branding',
    tag: 'Branding + Web Design & Development',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Zenith',
    subtitle: 'Premium lifestyle brand',
    category: 'Products',
    tag: 'Product Design',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
    titleColor: 'text-[#a78bfa]',
  },
  {
    title: 'Pulse',
    subtitle: 'Health & fitness platform',
    category: 'Web',
    tag: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    titleColor: 'text-[#4ade80]',
  },
  {
    title: 'Artisan',
    subtitle: 'Handcrafted goods marketplace',
    category: 'Products',
    tag: 'Product Design',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Horizon',
    subtitle: 'Travel experience platform',
    category: 'Branding',
    tag: 'Branding + Web Design',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900&q=80',
    titleColor: 'text-[#f59e0b]',
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const heroRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        '.work-hero-line',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.15,
          delay: 0.3,
        }
      )

      // Red dot animation
      gsap.fromTo(
        '.work-hero-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(2)',
          delay: 0.8,
        }
      )

      // Filter tabs animation
      gsap.fromTo(
        '.work-filter-tab',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 1,
        }
      )

      // Grid lines
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.work-grid-line-v'),
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          stagger: 0.1,
          delay: 0.2,
        }
      )

      gsap.fromTo(
        '.work-grid-line-h',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          stagger: 0.15,
          delay: 0.5,
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate cards on filter change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-project-card')

      // Card entrance animation
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
        }
      )

      // Staircase reveal animation for each card
      cards.forEach((card, i) => {
        const stairSteps = card.querySelectorAll('.portfolio-stair-step')
        if (stairSteps.length) {
          gsap.fromTo(
            stairSteps,
            { scaleY: 1 },
            {
              scaleY: 0,
              stagger: 0.08,
              duration: 1.2,
              ease: 'power4.inOut',
              delay: i * 0.12,
            }
          )
        }
      })
    }, gridRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <main ref={sectionRef} className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-xl"
      >
        <div className="w-full px-5 md:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">
            <Link href="/" className="flex items-center gap-0 group shrink-0">
              <span className="text-white/90 text-sm font-normal tracking-tight">
                Parash.dev
              </span>
              <span className="text-white/40 text-sm font-light mx-1.5">—</span>
              <span className="text-white/40 text-sm font-light">Digital Agency</span>
            </Link>

            {/* Center dots */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              <span className="w-2 h-2 rounded-full bg-white/80" />
              <span className="w-2 h-2 rounded-full border border-white/30" />
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-7">
              <Link
                href="/work"
                className="text-white text-sm font-light transition-colors duration-300 relative group cursor-pointer"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/40" />
              </Link>
              <Link
                href="/#services"
                className="text-white/50 text-sm font-light hover:text-white transition-colors duration-300 relative group cursor-pointer"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/#about"
                className="text-white/50 text-sm font-light hover:text-white transition-colors duration-300 relative group cursor-pointer"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/#contact"
                className="text-white/50 text-sm font-light hover:text-white transition-colors duration-300 relative group cursor-pointer"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile back button */}
            <Link
              href="/"
              className="md:hidden text-white/70 text-sm font-light hover:text-white transition-colors"
            >
              ← Back
            </Link>
          </div>
        </div>
        <div className="w-full h-px bg-white/[0.58]" />
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-14 md:pt-14">
        {/* Grid lines overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="h-full mx-5 md:mx-8 flex">
            <div className="work-grid-line-v flex-1 border-l border-white/[0.06] origin-top" />
            <div className="work-grid-line-v flex-1 border-l border-white/[0.06] origin-top" />
            <div className="work-grid-line-v flex-1 border-l border-white/[0.06] origin-top" />
            <div className="work-grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-top" />
          </div>
        </div>

        <div className="relative z-10 px-5 md:px-8 py-20 md:py-32 lg:py-40">
          {/* Red dot accent */}
          <div className="flex justify-center mb-10 md:mb-14">
            <div className="work-hero-dot w-2.5 h-2.5 rounded-full bg-[#e85d4a]" />
          </div>

          {/* Hero text */}
          <div className="overflow-hidden">
            <h1 className="work-hero-line text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white text-center">
              Creative ideas turned into
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="work-hero-line text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-center">
              <em className="italic text-white/90">success stories</em>
            </h1>
          </div>
        </div>

        {/* Separator */}
        <div className="px-5 md:px-8">
          <div className="work-grid-line-h h-px bg-white/[0.58] origin-left" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative">
        <div className="px-5 md:px-8 py-6 md:py-8">
          <div className="flex items-center gap-6 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`work-filter-tab text-sm font-light transition-all duration-300 relative cursor-pointer ${
                  activeCategory === cat
                    ? 'text-[#4ade80]'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#4ade80]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="px-5 md:px-8">
          <div className="work-grid-line-h h-px bg-white/[0.58] origin-left" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative">
        {/* Grid lines overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="h-full mx-5 md:mx-8 flex">
            <div className="flex-1 border-l border-white/[0.06]" />
            <div className="flex-1 border-l border-white/[0.06]" />
            <div className="flex-1 border-l border-white/[0.06]" />
            <div className="flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06]" />
          </div>
        </div>

        <div ref={gridRef} className="relative z-10 px-5 md:px-8">
            <div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
            >
              {filteredProjects.map((project, index) => {
                const isRight = index % 2 === 1
                return (
                  <div
                    key={project.title}
                    className={`work-project-card group cursor-pointer ${
                      isRight
                        ? 'md:pl-4 md:border-l md:border-white/[0.06]'
                        : 'md:pr-4'
                    } ${index > 1 ? 'md:pt-0' : ''}`}
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
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Text below image */}
                    <div className="pt-4 pb-8 md:pb-10">
                      <h3 className="text-sm md:text-base font-normal tracking-tight mb-1">
                        <span className={project.titleColor}>{project.title}</span>
                        <span className="text-white/70 font-light">
                          {' '}
                          — {project.subtitle}
                        </span>
                      </h3>
                      <p className="text-white/35 text-xs font-light">{project.tag}</p>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>

        {/* Separator */}
        <div className="px-5 md:px-8">
          <div className="work-grid-line-h h-px bg-white/[0.58] origin-left" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="h-full mx-5 md:mx-8 flex">
            <div className="flex-1 border-l border-white/[0.06]" />
            <div className="flex-1 border-l border-white/[0.06]" />
            <div className="flex-1 border-l border-white/[0.06]" />
            <div className="flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06]" />
          </div>
        </div>

        <div className="relative z-10 px-5 md:px-8 text-center py-20 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-white mb-1">
              Chasing success?
            </h2>
            <div className="px-5 md:px-0">
              <div className="work-grid-line-h h-px bg-white/[0.58] origin-left my-3 md:my-4" />
            </div>
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em] text-white mb-1">
              Let&apos;s get there.
            </h2>
            <div className="px-5 md:px-0">
              <div className="work-grid-line-h h-px bg-white/[0.58] origin-left my-3 md:my-4" />
            </div>
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.03em]">
              <em className="italic bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent">
                With Parash.
              </em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
            className="mt-12"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-white/60 group-hover:text-white transition-colors"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="px-5 md:px-8">
          <div className="work-grid-line-h h-px bg-white/[0.58] origin-left" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
