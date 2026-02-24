'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface StaircaseTransitionProps {
  isAnimating: boolean
  onComplete: () => void
  columns?: number
}

export default function StaircaseTransition({
  isAnimating,
  onComplete,
  columns = 5,
}: StaircaseTransitionProps) {
  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="fixed inset-0 z-[90] pointer-events-none flex">
          {Array.from({ length: columns }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-[#111] relative border-r border-white/20"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.4, 0.6, 1],
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                originY: '0%',
                transformOrigin: 'top',
              }}
              onAnimationComplete={() => {
                // Only fire onComplete from the last column
                if (i === columns - 1) {
                  onComplete()
                }
              }}
            >
              {/* Inner accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4ade80]"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.35, 0.65, 1],
                  delay: i * 0.06 + 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
