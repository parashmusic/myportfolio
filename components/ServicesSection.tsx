'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'App Development',
    icon: (
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <motion.path
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        />
      </motion.svg>
    ),
    items: [
      'Native iOS & Android,',
      'Cross-platform (React Native),',
      'App Architecture,',
      'Store Optimization,',
      'Performance Tuning',
    ],
  },
    {
    title: 'Web Solutions',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        {[6, 10, 14, 18].map((y, i) => (
          <motion.path
            key={y}
            d={`M4 ${y}H20`}
            animate={{ opacity: [0.3, 1, 0.3], x: [0, 1, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    ),
    items: [
      'Website Development,',
      'CMS Implementation,',
      'Front-end Development,',
      'Quality Assurance,',
      'Maintenance & Support',
    ],
  },
  {
    title: 'UX/UI Design',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <motion.rect
          x="3" y="6" width="3" height="12"
          animate={{ height: [12, 16, 12], y: [6, 4, 6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.rect
          x="8" y="3" width="3" height="18"
          animate={{ height: [18, 14, 18], y: [3, 5, 3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.rect
          x="13" y="8" width="3" height="8"
          animate={{ height: [8, 12, 8], y: [8, 6, 8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.rect
          x="18" y="5" width="3" height="14"
          animate={{ height: [14, 10, 14], y: [5, 7, 5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </svg>
    ),
    items: [
      'UX Audits,',
      'User Flows & Prototypes,',
      'Product Design,',
      'Web Design,',
      'Design Systems',
    ],
  },
  {
    title: 'Creative Design',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <motion.path
          d="M12 3C12 3 14 8 14 12C14 16 12 21 12 21"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M12 3C12 3 10 8 10 12C10 16 12 21 12 21"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <path d="M3 12H21" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    items: [
      'Illustrations & Animations,',
      'Custom Iconography,',
      'Motion Graphics,',
      '3D Rendering,',
      'NFT Development',
    ],
  },

]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-italic',
        { opacity: 0, x: -30, skewX: 3 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Stagger service cards
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.service-cards-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

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
      id="services"
      className="relative"
    >
      {/* Vertical grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-full mx-5 md:mx-8 flex">
          <div className="grid-line-v flex-1 border-l border-white/[0.76] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.76] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.76] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.76] border-r border-r-white/[0.76] origin-bottom" />
        </div>
      </div>

      <div className="relative z-10 px-5 md:px-8">
        {/* Headline */}
        <div ref={headlineRef} className="pt-12 bg-background md:pt-20 pb-8 md:pb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white/90 max-w-4xl"
          >
            Offering strategic approach that results in{' '}
            <em className="services-italic italic text-white/80 font-light">
              transformative design
            </em>
          </motion.p>
        </div>

        {/* Separator */}
        <div className="grid-line-h hidden lg:block h-px bg-white/[0.76] origin-left" />

        {/* Service cards - 4 columns */}
        <div className="service-cards-grid px-5 pb-8 lg:px-0 lg:bg-transparent bg-background grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card border-b border-white/[0.00] flex lg:flex-col  py-3 pl-3 md:pl-6 md:py-10 pr-3 md:pr-6 ${
                index > 0 ? '' : ''
              }`}
            > 
              {/* Icon */}
              <div className="text-white/40 mb-2 mr-3 lg:mr-0 md:mb-8">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-base md:text-2xl font-normal mb-2 md:mb-5 tracking-tight">
                {service.title}
              </h3>

              {/* Service list */}
              <div className="space-y-0.5 hidden lg:block">
                {service.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className="text-white/90 text-xs md:text-sm font-light leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom separator */}
        {/* <div className="grid-line-h h-px bg-white/[0.08] origin-left" /> */}
      </div>
    </section>
  )
}
