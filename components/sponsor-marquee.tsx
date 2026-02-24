"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useAnimationFrame, useScroll } from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Example sponsor data - replace with actual sponsors
const SPONSORS = [
  { name: "Renault", logo: "/sponsors/renault.svg" },
  { name: "Oppo", logo: "/sponsors/oppo (1).svg" },
  { name: "White Label Recharge", logo: "/sponsors/image.webp" },
  { name: "Ola Cabs", logo: "/sponsors/Ola_Cabs_logo.svg.png" },
  { name: "Prag News", logo: "/sponsors/prag1.png" },
]

export function SponsorMarquee() {
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Speed configuration
  const baseSpeed = 0.5 // Normal speed
  const slowSpeed = 0.05 // Speed when hovered (10% of base)
  const speedRef = useRef(baseSpeed)
  
  // Animation state
  const x = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  // Measure content once mounted
  useEffect(() => {
    if (containerRef.current) {
        // The content width is half of the total scroll width because we doubled the list
        setContentWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])

  // Smoothly interpolate speed
  useEffect(() => {
    const target = isHovered ? slowSpeed : baseSpeed
    const step = (target - speedRef.current) * 0.1 // Simple lerp factor
    
    // We'll use a requestAnimationFrame loop to smoothly transition the speed value itself
    // independent of the scroll loop, or just update it inside the main loop?
    // Actually, updating a ref inside the main loop for 'current actual speed' is better.
  }, [isHovered])

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])


  const { scrollYProgress } = useScroll() // Just to have access to useMotionValue if needed, but we use refs for performance

  return (
    <section ref={sectionRef} className="relative z-20 overflow-hidden">
      {/* Vertical grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-full mx-5 md:mx-8 flex">
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
        </div>
      </div>

      <div className="relative z-10 py-10 px-5 md:px-8">
        <div className="absolute inset-0 z-10 pointer-events-none" />
    

      <div 
        className="relative w-full flex overflow-hidden mask-linear-gradient"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MarqueeContent 
            isHovered={isHovered} 
            baseSpeed={baseSpeed} 
            slowSpeed={slowSpeed} 
        />

      </div>
      </div>
    </section>
  )
}

function MarqueeContent({ isHovered, baseSpeed, slowSpeed }: { isHovered: boolean, baseSpeed: number, slowSpeed: number }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const x = useRef(0)
    const currentSpeed = useRef(baseSpeed)
    
    // Repeat sponsors enough times. 
    // Using a large number to ensure we have enough content to scroll before resetting.
    // 6 * 4 = 24 items.
    const baseList = Array(6).fill(SPONSORS).flat()
    const marqueeList = [...baseList, ...baseList] 

    useAnimationFrame((t: number, delta: number) => {
        if (!containerRef.current) return

        // Smoothly interpolate current speed towards target
        const targetSpeed = isHovered ? slowSpeed : baseSpeed
        // Lerp factor - adjust 0.05 for smoothness (lower = slower transition)
        currentSpeed.current = currentSpeed.current + (targetSpeed - currentSpeed.current) * 0.05

        // Move text
        // Optimize delta usage (divide by roughly 16ms to normalize speed across expected 60fps)
        const moveBy = currentSpeed.current * (delta / 16) 
        x.current -= moveBy

        // Reset logic
        // We know we doubled the list. So we can reset when we've scrolled half width.
        // Or simpler: get scrollWidth of container.
        const width = containerRef.current.scrollWidth
        const halfWidth = width / 2
        
        // Wrap around
        if (x.current <= -halfWidth) {
            x.current += halfWidth
        }

        containerRef.current.style.transform = `translate3d(${x.current}px, 0, 0)`
    })

    return (
        <div 
            ref={containerRef}
            className="flex gap-30 items-center whitespace-nowrap py-4 will-change-transform"
        >
          {marqueeList.map((sponsor, idx) => (
            <div 
              key={`${sponsor.name}-${idx}`}
              className="flex items-center justify-center shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
                <span className="w-4 h-4 flex items-center justify-center opacity-50">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="2" y="2" width="5" height="5" rx="1" />
                    <rect x="9" y="2" width="5" height="5" rx="1" />
                    <rect x="2" y="9" width="5" height="5" rx="1" />
                    <rect x="9" y="9" width="5" height="5" rx="1" />
                  </svg>
                </span>
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {sponsor.name}
                </span>
            </div>
          ))}
        </div>
    )
}
