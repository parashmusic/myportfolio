'use client';

import React from 'react';
import { BeamCircle, OrbitConfig } from '@/components/lightswind/beam-circle';
import { 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiExpo,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiLinux,
  SiGithubactions,
  SiOracle,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy
} from 'react-icons/si';

import { 
  FaDatabase, 
  FaTerminal, 
  FaNetworkWired, 
  FaAws, 
  FaChartBar,
  FaCode,
  FaLayerGroup,
  FaTools,
  FaRobot
} from 'react-icons/fa';

// --- Category 1: Languages ---
const languagesOrbits: OrbitConfig[] = [
  {
    id: 1,
    radiusFactor: 0.25,
    speed: 6,
    icon: <SiC className="text-blue-500" />,
    iconSize: 28,
    orbitColor: 'rgba(59, 130, 246, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 2,
    radiusFactor: 0.38,
    speed: 9,
    icon: <SiCplusplus className="text-blue-600" />,
    iconSize: 28,
    orbitColor: 'rgba(37, 99, 235, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 3,
    radiusFactor: 0.50,
    speed: 12,
    icon: <SiJavascript className="text-yellow-400 bg-black" />,
    iconSize: 28,
    orbitColor: 'rgba(234, 179, 8, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 4,
    radiusFactor: 0.62,
    speed: 8,
    icon: <SiTypescript className="text-blue-500 bg-white" />,
    iconSize: 28,
    orbitColor: 'rgba(59, 130, 246, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 5,
    radiusFactor: 0.74,
    speed: 14,
    icon: <SiPython className="text-blue-400" />,
    iconSize: 28,
    orbitColor: 'rgba(96, 165, 250, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 6,
    radiusFactor: 0.86,
    speed: 11,
    icon: <FaDatabase className="text-cyan-400" />,
    iconSize: 28,
    orbitColor: 'rgba(34, 211, 238, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 7,
    radiusFactor: 0.96,
    speed: 16,
    icon: <FaTerminal className="text-gray-300" />,
    iconSize: 26,
    orbitColor: 'rgba(209, 213, 219, 0.3)',
    orbitThickness: 1.5,
  },
];

const languagesSkills = [
  'C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Shell Scripting', 'HTML5', 'CSS3'
];

// --- Category 2: Frameworks ---
const frameworksOrbits: OrbitConfig[] = [
  {
    id: 1,
    radiusFactor: 0.28,
    speed: 7,
    icon: <SiNodedotjs className="text-green-500" />,
    iconSize: 28,
    orbitColor: 'rgba(34, 197, 94, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 2,
    radiusFactor: 0.42,
    speed: 11,
    icon: <SiExpress className="text-gray-200" />,
    iconSize: 28,
    orbitColor: 'rgba(229, 231, 235, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 3,
    radiusFactor: 0.56,
    speed: 9,
    icon: <SiNextdotjs className="text-white" />,
    iconSize: 28,
    orbitColor: 'rgba(255, 255, 255, 0.4)',
    orbitThickness: 1.5,
  },
  {
    id: 4,
    radiusFactor: 0.70,
    speed: 13,
    icon: <SiExpo className="text-white" />,
    iconSize: 28,
    orbitColor: 'rgba(255, 255, 255, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 5,
    radiusFactor: 0.84,
    speed: 10,
    icon: <FaNetworkWired className="text-indigo-400" />,
    iconSize: 28,
    orbitColor: 'rgba(129, 140, 248, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 6,
    radiusFactor: 0.95,
    speed: 15,
    icon: <SiJsonwebtokens className="text-pink-500" />,
    iconSize: 28,
    orbitColor: 'rgba(236, 72, 153, 0.3)',
    orbitThickness: 1.5,
  },
];

const frameworksSkills = [
  'Node.js', 'Express.js', 'Next.js', 'Expo', 'REST APIs', 'JWT Authentication'
];

// --- Category 3: Developer Tools ---
const devToolsOrbits: OrbitConfig[] = [
  {
    id: 1,
    radiusFactor: 0.25,
    speed: 8,
    icon: <SiGit className="text-orange-500" />,
    iconSize: 28,
    orbitColor: 'rgba(249, 115, 22, 0.3)',
    orbitThickness: 1.5,
  },
  {
    id: 2,
    radiusFactor: 0.38,
    speed: 12,
    icon: <SiGithub className="text-white" />,
    iconSize: 28,
    orbitColor: 'rgba(255, 255, 255, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 3,
    radiusFactor: 0.50,
    speed: 7,
    icon: <SiDocker className="text-blue-500" />,
    iconSize: 28,
    orbitColor: 'rgba(59, 130, 246, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 4,
    radiusFactor: 0.63,
    speed: 14,
    icon: <FaAws className="text-amber-500" />,
    iconSize: 28,
    orbitColor: 'rgba(245, 158, 11, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 5,
    radiusFactor: 0.75,
    speed: 10,
    icon: <SiFirebase className="text-yellow-500" />,
    iconSize: 28,
    orbitColor: 'rgba(234, 179, 8, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 6,
    radiusFactor: 0.86,
    speed: 15,
    icon: <SiLinux className="text-white" />,
    iconSize: 28,
    orbitColor: 'rgba(255, 255, 255, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 7,
    radiusFactor: 0.96,
    speed: 11,
    icon: <SiPostgresql className="text-blue-400" />,
    iconSize: 28,
    orbitColor: 'rgba(96, 165, 250, 0.35)',
    orbitThickness: 1.5,
  },
];

const devToolsSkills = [
  'Git', 'GitHub', 'Docker', 'AWS', 'Firebase', 'Linux', 'CI/CD', 'Oracle Database', 'PostgreSQL'
];

// --- Category 4: Libraries & ML ---
const librariesOrbits: OrbitConfig[] = [
  {
    id: 1,
    radiusFactor: 0.28,
    speed: 6,
    icon: <SiReact className="text-cyan-400" />,
    iconSize: 28,
    orbitColor: 'rgba(34, 211, 238, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 2,
    radiusFactor: 0.42,
    speed: 10,
    icon: <SiRedux className="text-purple-500" />,
    iconSize: 28,
    orbitColor: 'rgba(168, 85, 247, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 3,
    radiusFactor: 0.56,
    speed: 13,
    icon: <SiTensorflow className="text-orange-500 bg-white p-0.5 rounded-sm" />,
    iconSize: 28,
    orbitColor: 'rgba(249, 115, 22, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 4,
    radiusFactor: 0.70,
    speed: 8,
    icon: <SiKeras className="text-red-600 bg-white rounded-full p-0.5" />,
    iconSize: 28,
    orbitColor: 'rgba(220, 38, 38, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 5,
    radiusFactor: 0.84,
    speed: 14,
    icon: <SiPandas className="text-blue-900 bg-white p-0.5 rounded-sm" />,
    iconSize: 28,
    orbitColor: 'rgba(30, 58, 138, 0.35)',
    orbitThickness: 1.5,
  },
  {
    id: 6,
    radiusFactor: 0.95,
    speed: 11,
    icon: <SiNumpy className="text-blue-500" />,
    iconSize: 28,
    orbitColor: 'rgba(59, 130, 246, 0.35)',
    orbitThickness: 1.5,
  },
];

const librariesSkills = [
  'React', 'Redux', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib'
];

interface SkillCategoryCardProps {
  title: string;
  centerIcon: React.ReactNode;
  orbits: OrbitConfig[];
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  title,
  centerIcon,
  orbits,
}) => {
  return (
    <div className="relative flex flex-col justify-between items-center text-center p-4">
      {/* Category Header */}
      <div className="mb-2 z-10">
        <h3 className="text-xl md:text-2xl font-normal tracking-tight text-white">
          {title}
        </h3>
      </div>

      {/* Orbiting Beam Circle Visualization */}
      <div className="py-2 my-2 flex justify-center items-center z-10">
        <BeamCircle
          size={320}
          centerIcon={centerIcon}
          orbits={orbits}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Technical Stack & Skills
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Architecting modern applications with a robust ecosystem of core languages, scalable frameworks, cloud tools, and machine learning libraries.
          </p>
        </div>

        {/* 2x2 Grid of Beam Circle Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <SkillCategoryCard
            title="Languages"
            centerIcon={<FaCode className="w-5 h-5 text-blue-400" />}
            orbits={languagesOrbits}
          />

          <SkillCategoryCard
            title="Frameworks"
            centerIcon={<FaLayerGroup className="w-5 h-5 text-indigo-400" />}
            orbits={frameworksOrbits}
          />

          <SkillCategoryCard
            title="Developer Tools"
            centerIcon={<FaTools className="w-5 h-5 text-emerald-400" />}
            orbits={devToolsOrbits}
          />

          <SkillCategoryCard
            title="Libraries & ML"
            centerIcon={<FaRobot className="w-5 h-5 text-purple-400" />}
            orbits={librariesOrbits}
          />
        </div>
      </div>
    </section>
  );
}
