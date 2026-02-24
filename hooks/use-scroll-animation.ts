import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation(callback?: (trigger: ScrollTrigger) => void) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        onEnter: () => callback?.(trigger),
      })

      return () => trigger.kill()
    })

    return () => ctx.revert()
  }, [callback])

  return ref
}

export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: (i, target) => {
          return gsap.getProperty(target, 'offsetHeight') as number * speed
        },
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return ref
}

export function useSectionReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const items = ref.current?.querySelectorAll('[data-reveal]')
      if (!items?.length) return

      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center+=100',
          markers: false,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return ref
}
