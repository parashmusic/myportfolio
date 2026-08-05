import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./card";
import { Calendar } from "lucide-react";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
  smoothScroll?: boolean;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description:
      "Description of the achievement or milestone reached during this time period.",
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about this significant milestone and its impact.",
  },
  {
    year: "2021",
    title: "Key Event",
    subtitle: "Organization Name",
    description: "Information about this key event in the timeline.",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Timeline",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-primary/30",
  activeColor = "bg-primary",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = false,
  smoothScroll = true,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgPath, setSvgPath] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  useEffect(() => {
    if (!containerRef.current || !timelineRefs.current.length) return;

    const updatePath = () => {
      const container = containerRef.current;
      if (!container) return;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const centerX = width / 2;
      
      const points = timelineRefs.current.map(el => {
        if (!el) return 0;
        return el.offsetTop + el.offsetHeight / 2;
      });

      if (points.length === 0) return;

      let path = `M ${centerX} 0`;
      path += ` L ${centerX} ${points[0]}`;
      
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i+1];
        
        const isMobile = width < 1024;
        let direction = 1;
        
        if (!isMobile && cardAlignment === "alternating") {
          direction = i % 2 === 0 ? 1 : -1;
        } else if (!isMobile && cardAlignment === "left") {
          direction = 1;
        } else if (!isMobile && cardAlignment === "right") {
          direction = -1;
        } else {
          direction = i % 2 === 0 ? 1 : -1; 
        }
        
        const curveOffset = isMobile ? 40 : 120;
        
        const cp1X = centerX + (curveOffset * direction);
        const cp1Y = p1 + (p2 - p1) / 3;
        
        const cp2X = centerX + (curveOffset * direction);
        const cp2Y = p2 - (p2 - p1) / 3;
        
        path += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${centerX} ${p2}`;
      }
      
      // We don't draw a trailing line to the bottom so it stops cleanly at the last node.
      // path += ` L ${centerX} ${height}`;
      setSvgPath(path);
      setSvgHeight(height);
    };

    updatePath();

    const observer = new ResizeObserver(() => {
      updatePath();
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [events, cardAlignment]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.2
        : index * 0.3;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x:
          cardAlignment === "left"
            ? -100
            : cardAlignment === "right"
            ? 100
            : index % 2 === 0
            ? -100
            : 100,
        opacity: 0,
      },
      scale: { scale: 0.8, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.7,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: false, margin: "-100px" },
    };
  };

  const getConnectorClasses = () => {
    const baseClasses = cn(
      "absolute left-1/2 transform -translate-x-1/2",
      lineColor
    );
    const widthStyle = `w-[${progressLineWidth}px]`;
    switch (connectorStyle) {
      case "dots":
        return cn(baseClasses, "w-1 rounded-full");
      case "dashed":
        return cn(
          baseClasses,
          widthStyle,
          `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`
        );
      case "line":
      default:
        return cn(baseClasses, widthStyle);
    }
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30  transition-all duration-300";
    const variantClasses = {
      default: "shadow-sm",
      elevated: "shadow-md",
      outlined: "shadow-sm",
      filled: "shadow-sm",
    };
    const effectClasses = {
      none: "",
      glow: "hover:shadow-[0_0_15px_rgba(var(--primary-rgb)/0.5)]",
      shadow: "hover:shadow-lg hover:-translate-y-1",
      bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
    };
    const alignmentClassesDesktop =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+20px)]"
          : "lg:ml-[calc(50%+20px)]"
        : cardAlignment === "left"
        ? "lg:mr-auto lg:ml-0"
        : "lg:ml-auto lg:mr-0";
    const perspectiveClass = perspective
      ? "transform transition-transform hover:rotate-y-1 hover:rotate-x-1"
      : "";

    return cn(
      baseClasses,
      variantClasses[cardVariant],
      effectClasses[cardEffect],
      alignmentClassesDesktop,
      "w-full lg:w-[calc(50%-40px)]"
    );
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        darkMode ? "bg-transparent text-white" : "",
        className
      )}
    >
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{title}</h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pb-0">
        <div className="relative mx-auto" ref={containerRef}>
          {/* SVG S-Curve Timeline Background & Animated Glow */}
          {progressIndicator && svgPath && (
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ height: svgHeight ? `${svgHeight}px` : '100%' }}>
              <svg 
                className="absolute inset-0 w-full" 
                style={{ height: '100%' }}
              >
                <defs>
                  <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  
                  <filter id="timeline-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background faint path */}
                <path 
                  d={svgPath} 
                  fill="none" 
                  stroke="rgba(255,255,255,0.05)" 
                  strokeWidth={progressLineWidth} 
                />
                
                {/* Animated glowing progress path */}
                <motion.path 
                  d={svgPath} 
                  fill="none" 
                  stroke="url(#timeline-gradient)" 
                  strokeWidth={progressLineWidth}
                  strokeLinecap={progressLineCap}
                  filter="url(#timeline-glow)"
                  style={{ pathLength: smoothProgress }}
                />
              </svg>
            </div>
          )}

          <div className="relative z-20">
            {events.map((event, index) => {
              const yOffset = useTransform(
                smoothProgress,
                [0, 1],
                [parallaxIntensity * 100, -parallaxIntensity * 100]
              );
              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative flex items-center mb-20 py-4",
                    "flex-col lg:flex-row",
                    cardAlignment === "alternating"
                      ? index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
                      : cardAlignment === "left"
                      ? "lg:justify-start"
                      : "lg:flex-row-reverse lg:justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 z-30",
                      "left-1/2 -translate-x-1/2"
                    )}
                  >
                    <motion.div
                      className={cn(
                        "w-10 h-10 rounded-full border-4 bg-[#0a0a0a] flex items-center justify-center text-white",
                        index <= activeIndex
                          ? "border-white"
                          : "border-white/20 bg-[#111]"
                      )}
                      animate={
                        index <= activeIndex
                          ? {
                              scale: [1, 1.15, 1],
                              boxShadow: [
                                "0 0 0px rgba(99,102,241,0)",
                                "0 0 15px rgba(99,102,241,0.6)",
                                "0 0 0px rgba(99,102,241,0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    >
                      {event.icon && (
                        <div className="opacity-80">
                          {event.icon}
                        </div>
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    className={cn(
                      getCardClasses(index),
                      "mt-12 lg:mt-0 group p-[1px]  overflow-hidden relative"
                    )}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, margin: "-100px" }}
                    style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                  >
                    {/* Default subtle border */}
                    <div className="absolute inset-0 bg-white/10 transition-opacity duration-500 group-hover:opacity-0" />
                    
                    {/* Metallic gradient border that activates on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Sweeping shine animation across the border */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 bottom-0 w-[200%] -translate-x-[150%] group-hover:translate-x-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-transform duration-[1500ms] ease-in-out delay-100" />
                    </div>

                    {/* Inner glass card container */}
                    <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl w-full h-full  overflow-hidden transition-colors duration-500 group-hover:bg-[#0a0a0a]/70">
                      {/* Inner top highlight for extra glass feel */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <Card className="bg-transparent border-0 text-white relative z-10 flex flex-col justify-center">
                        <CardContent className="p-8">
                          <div className="flex flex-col gap-0">
                            
                            {/* Header: App-like Icon & Metadata */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2  mb-2">
                              <div className="flex items-center gap-4">
                                {/* Prominent Icon Box */}
                                <div className="flex items-center justify-center min-w-12 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-white">
                                  {event.icon ? (
                                    <div className="[&>svg]:w-6 [&>svg]:h-6 opacity-90 drop-shadow-md">
                                      {event.icon}
                                    </div>
                                  ) : (
                                    <Calendar className="w-6 h-6 opacity-90 drop-shadow-md" />
                                  )}
                                </div>
                                
                                <div className="flex flex-col justify-center">
                                  {/* Company / Subtitle */}
                                  {event.subtitle && (
                                    <span className="text-base font-semibold text-white/90 tracking-wide">
                                      {event.subtitle}
                                    </span>
                                  )}
                                  {/* Subdued Date */}
                                  <span className="text-xs font-medium text-white/40 tracking-wider mt-0.5">
                                    {event.year}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Body: Title & Description */}
                            <div className="flex flex-col gap-3 pt-2">
                              <h3 className="text-md md:text-xl font-medium tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                                {event.title}
                              </h3>
                              
                              <div className="text-white/60 leading-relaxed text-xs">
                                {event.description}
                              </div>
                            </div>

                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
