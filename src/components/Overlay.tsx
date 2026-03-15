"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  progressRange: [number, number];
}

const Section: React.FC<SectionProps> = ({ children, align = "center", progressRange }) => {
  const { scrollYProgress } = useScroll();
  
  // Fade in and out logic
  const opacity = useTransform(
    scrollYProgress,
    [progressRange[0], progressRange[0] + 0.1, progressRange[1] - 0.1, progressRange[1]],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [progressRange[0], progressRange[1]],
    [100, -100]
  );

  const alignmentClass = {
    left: "items-start text-left px-12",
    right: "items-end text-right px-12",
    center: "items-center text-center px-4",
  }[align];

  return (
    <motion.div
      style={{ opacity, y }}
      className={`fixed inset-0 flex flex-col justify-center pointer-events-none ${alignmentClass}`}
    >
      <div className="max-w-4xl">
        {children}
      </div>
    </motion.div>
  );
};

export const Overlay: React.FC = () => {
  return (
    <div className="relative z-10">
      <Section progressRange={[0, 0.2]}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <p className="text-xs md:text-sm font-light tracking-[0.5em] uppercase text-white/30 mb-8">
            Digital Craftsmanship
          </p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] flex flex-col">
            <span className="text-white ring-offset-black">Vishnu</span>
            <span className="text-white/20">Karanth.</span>
          </h1>
          <div className="h-[1px] w-12 bg-white/20 my-10" />
          <p className="max-w-md text-white/60 text-lg md:text-xl font-light leading-snug">
            Designing <span className="text-white font-medium">intelligent systems</span> & 
            <br />building the future of <span className="text-white font-medium italic">interaction.</span>
          </p>
        </motion.div>
      </Section>

      <Section align="left" progressRange={[0.25, 0.5]}>
        <div className="space-y-12">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/20">Selected Artifacts</p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic opacity-10 absolute -left-4 -top-8 select-none">
              Nexus
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white relative">
              Engineering <span className="text-white/40">Intelligence.</span>
            </h2>
          </div>
          
          <div className="space-y-10 border-l border-white/5 pl-8 mt-12">
            <div className="group cursor-default">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/80 transition-colors">StudyMate</h3>
              <p className="text-white/40 text-sm max-w-sm mt-2 leading-relaxed font-light">
                An AI-driven ecosystem distilling complex literature into interactive learning neural paths.
              </p>
            </div>
            <div className="group cursor-default">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/80 transition-colors">Automated Daily News</h3>
              <p className="text-white/40 text-sm max-w-sm mt-2 leading-relaxed font-light">
                Architecting seamless information flows through autonomous n8n synchronization.
              </p>
            </div>
            <div className="group cursor-default">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/80 transition-colors">Shadow Files</h3>
              <p className="text-white/40 text-sm max-w-sm mt-2 leading-relaxed font-light">
                A recursive narrative experience exploring the intersection of logic and deduction.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section align="right" progressRange={[0.6, 0.85]}>
        <div className="space-y-16">
          <div className="space-y-2">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/20">Accolades</p>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase relative">
              Validated <span className="text-white/40">Excellence.</span>
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col items-end group">
              <span className="text-xs font-bold text-white/10 uppercase tracking-widest mb-2 group-hover:text-white/30 transition-colors">Credential 01</span>
              <p className="text-2xl md:text-4xl font-medium text-white/90 group-hover:text-white transition-colors text-right max-w-md leading-tight">
                AI for Sustainability
              </p>
              <p className="text-white/20 text-sm mt-2 font-light">Virtual Internship • 1M1B</p>
            </div>
            <div className="flex flex-col items-end group">
              <span className="text-xs font-bold text-white/10 uppercase tracking-widest mb-2 group-hover:text-white/30 transition-colors">Credential 02</span>
              <p className="text-2xl md:text-4xl font-medium text-white/90 group-hover:text-white transition-colors text-right max-w-md leading-tight">
                AR/VR Development
              </p>
              <p className="text-white/20 text-sm mt-2 font-light">Professional Certification • EBTS</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
