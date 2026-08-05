'use client';

import { ScrollTimeline, TimelineEvent } from '@/components/lightswind/scroll-timeline';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceEvents: TimelineEvent[] = [
  {
    year: 'July 2026 - Present',
    title: 'Research Intern',
    subtitle: 'Indian Knowledge Systems (IKS), NIT Silchar',
    description: (
      <p>
        Here I work at the intersection of AI and Indian classical music — building <strong className="text-white/90 font-medium">SWARAAG</strong>, a system that can actually hear individual melodic voices inside dense multi-instrument recordings. Using NMF, Hidden Markov Models, and dynamic time warping, the work goes from raw audio all the way to recognizing <strong className="text-white/90 font-medium">10+ ragas</strong> in noisy live conditions — a problem that's genuinely hard when harmonics blur together.
      </p>
    ),
    icon: (
      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
        <Image src="/experience/nits logo.png" alt="NITS Logo" fill className="object-contain" /> 
      </div>
    ),
  },
  {
    year: 'June 2026 - July 2026',
    title: 'Network Security Intern',
    subtitle: 'Numaligarh Refinery Limited (NRL)',
    description: (
      <p>
        At one of India's largest oil refineries, I worked inside the security operations centre — writing Python scripts that correlated threat signals from SIEM systems and cut incident response time by <strong className="text-white/90 font-medium">20%</strong> across <strong className="text-white/90 font-medium">300+</strong> enterprise users. I also automated identity and access workflows with PowerShell, turning tedious manual processes into something the team never had to think about again.
      </p>
    ),
    icon: (
      <div className="relative w-8 h-8 rounded-full overflow-hidden">
        <Image src="/experience/nrl.jpg" alt="NRL Logo" fill className="object-cover" />
      </div>
    ),
  },
  {
    year: 'Dec 2025 - April 2026',
    title: 'Tech Lead',
    subtitle: 'Yantraksh 2026',
    description: (
      <p>
        Led the entire technical effort behind NIT Silchar's flagship tech fest — from zero to a platform that absorbed <strong className="text-white/90 font-medium">30,000+ page views</strong> and <strong className="text-white/90 font-medium">500+ concurrent users</strong> on event day without flinching. I ran a <strong className="text-white/90 font-medium">7-person</strong> team, set up self-hosted contest infrastructure, and built the data backend that kept <strong className="text-white/90 font-medium">600+</strong> registrations organised in real time.
      </p>
    ),
    icon: (
      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
        <Image src="/experience/yan.png" alt="Yantraksh Logo" fill className="object-cover" />
      </div>
    ),
  },
  {
    year: 'Apr 2025 - July 2025',
    title: 'Full-Stack Developer Intern',
    subtitle: 'Regional Music Centre, Guwahati',
    description: (
      <p>
        Built the data infrastructure for a music label — a Python pipeline (Pandas + NumPy) that chewed through <strong className="text-white/90 font-medium">10,000+</strong> financial records and cut manual reporting work by <strong className="text-white/90 font-medium">70%</strong>. I also designed a live analytics dashboard across a <strong className="text-white/90 font-medium">5,000+ album</strong> catalogue, giving the team a real-time view of streaming performance, royalties, and audience data in one place.
      </p>
    ),
    icon: (
      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
        <Image src="/experience/rmc.png" alt="RMC Logo" fill className="object-contain" />
      </div>
    ),
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative w-full bg-[#0a0a0a] py-20 overflow-hidden">
      {/* Vertical grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="h-full max-w-[1320px] mx-auto px-5 md:px-8 flex">
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] origin-bottom" />
          <div className="grid-line-v flex-1 border-l border-white/[0.06] border-r border-r-white/[0.06] origin-bottom" />
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto relative px-5 md:px-8 z-10">
        <ScrollTimeline
          events={experienceEvents}
          title="Experience"
          subtitle="My professional journey and career milestones"
          darkMode={true}
          lineColor="bg-white/10"
          activeColor="bg-white"
          cardVariant="elevated"
          cardEffect="glow"
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
