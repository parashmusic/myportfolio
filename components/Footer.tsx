'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerLinks = {
  main: [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
  ],
  services: [
    { label: 'Branding', href: '#services' },
    { label: 'UX/UI Design', href: '#services' },
    { label: 'Development', href: '#services' },
    { label: 'Creative', href: '#services' },
  ],
  social: [
    { label: 'X (Twitter)', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-brand',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
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
            trigger: footerRef.current,
            start: 'top bottom',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0a0a0a]"
    >
      <div className="px-5 md:px-8">
        {/* Footer link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 py-12 md:py-16">
          {/* Main */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:pr-6"
          >
            <h4 className="text-white/90 text-xs font-medium uppercase tracking-widest mb-5">Parash</h4>
            <ul className="space-y-2.5">
              {footerLinks.main.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/35 text-sm font-light hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pl-6 md:border-l md:border-white/[0.06]"
          >
            <h4 className="text-white/90 text-xs font-medium uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/35 text-sm font-light hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:pl-6 md:border-l md:border-white/[0.06]"
          >
            <h4 className="text-white/90 text-xs font-medium uppercase tracking-widest mb-5">Socials</h4>
            <ul className="space-y-2.5">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/35 text-sm font-light hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:pl-6 md:border-l md:border-white/[0.06]"
          >
            <h4 className="text-white/90 text-xs font-medium uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/25 text-xs font-light block mb-0.5">Location</span>
                <span className="text-white/50 text-sm font-light">Guwahati, IN</span>
              </li>
              <li>
                <span className="text-white/25 text-xs font-light block mb-0.5">Phone</span>
                <a href="tel:+917814012345" className="text-white/50 text-sm font-light hover:text-white/70 transition-colors">
                  +91 78140 12345
                </a>
              </li>
              <li>
                <span className="text-white/25 text-xs font-light block mb-0.5">Email</span>
                <a href="mailto:hello@Parash.agency" className="text-white/50 text-sm font-light hover:text-white/70 transition-colors">
                  hello@Parash.agency
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="grid-line-h h-px bg-white/[0.06] origin-left" />

        {/* Large "Parash" brand text */}
        <div className="footer-brand py-6 md:py-10 overflow-hidden">
          <div className="flex items-end justify-between">
            <h2 className="text-[clamp(4rem,18vw,14rem)] font-light leading-[0.85] tracking-[-0.04em] text-white select-none">
              Parash<span className="text-[#4ade80]">.</span>
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hidden md:flex items-center gap-2 pb-6"
            >
              <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
                <span className="text-white/50 text-xs">©</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="grid-line-h h-px bg-white/[0.06] origin-left" />
        <div className="flex flex-col md:flex-row items-center justify-between py-5">
          <p className="text-white/30 text-xs font-light">
            © Parash 2025
          </p>
          <p className="text-white/30 text-xs font-light mt-1 md:mt-0">
            Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
