"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroCard = {
  activeSrc: string;
  showIdleSwap?: boolean;
  className?: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    activeSrc: "https://codebyparash.vercel.app/assets/rmchome-BlUD0lpa.png",
  },
  {
    activeSrc: "https://codebyparash.vercel.app/assets/rmc-08agVScG.png",
  },
  {
    activeSrc: "https://codebyparash.vercel.app/assets/tracerx-Cyv7dVJV.png",
  },
  {
    activeSrc: "/hero/Group4.png",
  },
  {
    activeSrc: "/hero/009.png",
    showIdleSwap: false,
    className: "transition-opacity duration-300",
  },
  {
    activeSrc: "/hero/cleovv.png",
  },
  {
    activeSrc: "/yan.png",
  },
  {
    activeSrc: "/hero/bill.png",
  },
];

type SpringConfig = {
  type: "spring";
  bounce?: number;
  visualDuration?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
};

const defaultSpring: SpringConfig = {
  type: "spring",
  visualDuration: 0.5,
  bounce: 0.2,
};

export interface FeyCardsProps {
  spring?: SpringConfig;
  shiftDistance?: number;
  swapDuration?: number;
  entranceStagger?: number;
}

export const controls = {
  spring: defaultSpring,
  shiftDistance: [140, 0, 300, 5],
  swapDuration: [0.5, 0, 2, 0.05],
  entranceStagger: [0.1, 0, 0.5, 0.01],
};

export const FeyCards = ({
  spring = defaultSpring,
  shiftDistance = 160,
  swapDuration = 0.5,
  entranceStagger = 0.15,
}: FeyCardsProps = {}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const swapStyle = { transitionDuration: `${swapDuration}s` };

  // Card dimensions
  const CARD_W = 300;
  const CARD_H = 230;
  // How much each successive card peeks out from behind the previous one
  const PEEK = 65;

  // Total stack width = base card + N fanning cards peeking
  const totalCards = HERO_CARDS.length + 1; // +1 for base
  const stackWidth = CARD_W + HERO_CARDS.length * PEEK;

  useEffect(() => {
    const baseCard  = containerRef.current?.querySelector<HTMLElement>(".gsap-base-card");
    const fanCards  = containerRef.current?.querySelectorAll<HTMLElement>(".gsap-fanning-card");

    // Treat ALL cards (base + fanning) as one set for symmetric centering
    const allCards: HTMLElement[] = [];
    if (baseCard) allCards.push(baseCard);
    fanCards?.forEach((c) => allCards.push(c));

    const triggers: ScrollTrigger[] = [];

    if (allCards.length > 0) {
      const centerIndex = (allCards.length - 1) / 2; // fractional ok for even counts
      const SPREAD = 100; // px per unit distance from center

      const scrollConfig = {
        trigger: containerRef.current!,
        start: "top 90%",
        end: "bottom top",
        scrub: 1.2,
      };

      allCards.forEach((card, i) => {
        const targetX = (i - centerIndex) * SPREAD;
        const st = gsap.to(card, {
          x: targetX,
          ease: "none",
          scrollTrigger: scrollConfig,
        });
        if (st.scrollTrigger) triggers.push(st.scrollTrigger);
      });
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: entranceStagger,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: (offset: number) => ({ x: offset, rotateY: -35, rotateX: 8, rotateZ: 0, opacity: 0 }),
    visible: { x: 0, rotateY: -35, rotateX: 8, rotateZ: 0, opacity: 1, transition: { ...spring } },
  };

  return (
    <div className="w-full flex items-center justify-center" ref={containerRef}>
      {/* 
        Outer wrapper: full-width, centered, perspective applied here
        so all cards share the same perspective vanishing point
      */}
      <div
        className="relative w-full max-w-6xl mx-auto flex items-center justify-center"
        style={{ height: `${CARD_H + 60}px`, perspective: "1800px" }}
      >
        <motion.div
          className="relative"
          style={{ width: `${stackWidth}px`, height: `${CARD_H}px` }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Base / hero image card */}
          <div
            className="absolute top-0 z-20 gsap-base-card"
            style={{ left: 0, width: CARD_W, height: CARD_H }}
          >
            <motion.div
              className="h-full w-full overflow-hidden  shadow-2xl ring-1 ring-white/10"
              initial={{ rotateY: -35, rotateX: 8, rotateZ: 0 }}
              animate={{ rotateY: -35, rotateX: 8, rotateZ: 0 }}
            >
              <img
                src="/hero/Scene 41.png"
                alt="Hero"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/5 pointer-events-none " />
            </motion.div>
          </div>

          {/* Fanning Cards — each peeks PEEK px to the right of the previous */}
          {HERO_CARDS.map((card, index) => {
            const shouldShift = activeIndex !== null && index > activeIndex;
            const isActive = activeIndex === index;
            const entranceOffset = -(index + 1) * 60;
            const leftPos = PEEK * (index + 1);

            return (
              <div
                key={card.activeSrc}
                className={`absolute top-0 z-30 gsap-fanning-card ${card.className ?? ""}`}
                style={{ left: leftPos, width: CARD_W, height: CARD_H }}
              >
                <motion.div
                  className="group h-full w-full cursor-pointer"
                  variants={cardVariants}
                  custom={entranceOffset}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                  whileHover={{ rotateY: -20, rotateX: 4, scale: 1.04, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="relative h-full w-full overflow-hidden  shadow-2xl ring-1 ring-white/10"
                    animate={{ x: shouldShift ? shiftDistance : 0 }}
                    transition={spring}
                  >
                    {card.showIdleSwap !== false ? (
                      <>
                        <img
                          src={card.activeSrc}
                          alt="Hero"
                          width={1000}
                          height={1000}
                          style={swapStyle}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-100",
                            isActive && "opacity-100",
                          )}
                        />
                        <img
                          src={card.activeSrc}
                          alt="Hero idle"
                          width={1000}
                          height={1000}
                          style={swapStyle}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-100",
                            isActive && "opacity-0",
                          )}
                        />
                      </>
                    ) : (
                      <img
                        src={card.activeSrc}
                        alt="Hero"
                        width={1000}
                        height={1000}
                        style={swapStyle}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity"
                      />
                    )}

                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/0 via-transparent to-blue-400/0 group-hover:from-violet-500/10 group-hover:to-blue-400/10 transition-all duration-500  pointer-events-none" />

                    {/* Edge shadow to create depth between cards */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default FeyCards;
