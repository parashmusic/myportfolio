'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'App Development', 'AI/ML', 'web development ', 'Utilities'] as const
type Category = (typeof categories)[number]

const allProjects = [
  // App Development
  {
    title: 'Trientra 🛡️',
    subtitle: 'Safety & Intelligence Platform',
    category: 'App Development',
    tag: 'Safety & Intelligence',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&q=80',
    titleColor: 'text-[#4ade80]',
  },
  {
    title: 'AeroSync',
    subtitle: 'Decentralized P2P messaging',
    category: 'App Development',
    tag: 'P2P Networking',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'tracerX',
    subtitle: 'Finance & project management',
    category: 'App Development',
    tag: 'Product Management',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Piggy_Buddy',
    subtitle: 'Livestock management app',
    category: 'App Development',
    tag: 'AgriTech',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=900&q=80',
    titleColor: 'text-[#fbbf24]',
  },

  // AI/ML
  {
    title: 'Jalbhoomi-Raksha',
    subtitle: 'Cloud-based Flood Detection',
    category: 'AI/ML',
    tag: 'AI/ML + Computer Vision',
    image: 'https://images.unsplash.com/photo-1527430295725-ddbc36d72190?w=900&q=80',
    titleColor: 'text-[#3b82f6]',
  },
  {
    title: 'Cutie_ai',
    subtitle: 'Agentic local AI assistant',
    category: 'AI/ML',
    tag: 'AI/ML + LLM',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    titleColor: 'text-[#a78bfa]',
  },
  {
    title: 'Juno-CLI',
    subtitle: 'AI-powered CLI agent',
    category: 'AI/ML',
    tag: 'AI/ML + CLI',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Emotion_detection',
    subtitle: 'Real-time DL emotion classifier',
    category: 'AI/ML',
    tag: 'AI/ML + Deep Learning',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=900&q=80',
    titleColor: 'text-[#f43f5e]',
  },
  {
    title: 'Amazon-ML-2025',
    subtitle: 'Amazon ML Challenge Project',
    category: 'AI/ML',
    tag: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80',
    titleColor: 'text-white',
  },

  // web development 
  {
    title: 'Yantraksh',
    subtitle: 'Official techfest platform',
    category: 'web development ',
    tag: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'barakedge',
    subtitle: 'Modern News & Media platform',
    category: 'web development ',
    tag: 'Media & News',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80',
    titleColor: 'text-[#e85d4a]',
  },
  {
    title: 'wave flow',
    subtitle: 'Music subscription platform',
    category: 'web development ',
    tag: 'SaaS',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80',
    titleColor: 'text-[#4ade80]',
  },
  {
    title: 'Cleoville',
    subtitle: 'Gifting e-commerce platform',
    category: 'web development ',
    tag: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'nexz-frontend',
    subtitle: 'Premium fintech dashboard',
    category: 'web development ',
    tag: 'Fintech',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?w=900&q=80',
    titleColor: 'text-[#2dd4bf]',
  },
  {
    title: 'codebyparash',
    subtitle: 'Personal portfolio ecosystem',
    category: 'web development ',
    tag: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Lata_Sarees',
    subtitle: 'Textile e-commerce platform',
    category: 'web development ',
    tag: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'rmc-front',
    subtitle: 'Music management application',
    category: 'web development ',
    tag: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=900&q=80',
    titleColor: 'text-white',
  },
  {
    title: 'Parashmusic_Catalog',
    subtitle: 'Music catalog system',
    category: 'web development ',
    tag: 'Music Tech',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
    titleColor: 'text-white',
  },

  // UTILITIES
  {
    title: 'Spotify_Code_Gen',
    subtitle: 'Scannable code generator',
    category: 'Utilities',
    tag: 'API & OAuth',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=900&q=80',
    titleColor: 'text-[#1db954]',
  },
  {
    title: 'spotify_API_manager',
    subtitle: 'Token automation solution',
    category: 'Utilities',
    tag: 'Automation',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    titleColor: 'text-white',
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
            >
              {filteredProjects.map((project, index) => {
                const isSecondMd = index % 2 === 1
                const colLg = index % 3 // 0, 1, 2
                
                return (
                  <div
                    key={project.title}
                    className={`work-project-card group cursor-pointer transition-all duration-500 ${
                      // Mobile (1 col)
                      'px-0 border-white/[0.06]'
                    } ${
                      // Tablet (2 col)
                      isSecondMd 
                        ? 'md:pl-6 md:border-l md:border-white/[0.06]' 
                        : 'md:pr-6 md:border-l-0'
                    } ${
                      // Desktop (3 col)
                      colLg === 0 
                        ? 'lg:pr-8 lg:pl-0 lg:border-l-0' 
                        : colLg === 1 
                        ? 'lg:px-8 lg:border-l lg:border-white/[0.06]' 
                        : 'lg:pl-8 lg:border-l lg:border-white/[0.06]'
                    } ${index > 2 ? 'lg:pt-0' : ''}`}
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
              Want to build Something Better, Smarter?
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
