"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCard {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: ProjectCard[] = [
  {
    title: "StudyMate",
    description: "A profound AI learning ecosystem architected to distill multi-layer knowledge from complex academic literature into actionable neural study paths.",
    tags: ["Neural NLP", "GPT-4", "Next.js", "Knowledge Engineering"],
  },
  {
    title: "Automated Daily News",
    description: "Orchestrating autonomous info-sync pipelines using n8n, harmonizing multi-source inputs into curated daily executive briefings.",
    tags: ["n8n", "Pipeline Design", "Automation", "Node.js"],
  },
  {
    title: "Shadow Files",
    description: "A narrative-driven deductive sandbox. Engineering complex state logic to facilitate deep immersive mystery-solving experiences.",
    tags: ["Implicit Logic", "React", "State Machines", "Game Theory"],
  },
];

const Card: React.FC<{ project: ProjectCard; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-3xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10"
    >
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.03] px-4 py-1.5 text-[9px] font-bold tracking-[0.15em] uppercase text-white/40 border border-white/[0.05] transition-colors group-hover:text-white/60 group-hover:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-4 text-3xl font-bold tracking-tighter text-white/90 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="mb-12 text-white/40 leading-relaxed font-light text-base group-hover:text-white/50 transition-colors uppercase tracking-tight italic">{project.description}</p>
        
        <div className="mt-auto flex gap-8">
          <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/30 transition-all hover:text-white group-hover:gap-4">
            Explore <ArrowUpRight size={14} className="text-white/20 group-hover:text-white" />
          </button>
          <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/30 transition-all hover:text-white group-hover:gap-4">
            Source <Github size={14} className="text-white/20 group-hover:text-white" />
          </button>
        </div>
      </div>
      
      {/* Dynamic Glow */}
      <div className="absolute -inset-x-20 -top-20 -z-10 h-80 w-80 rounded-full bg-white/[0.02] blur-[120px] transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110" />
      <div className="absolute right-0 bottom-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
        <div className="h-32 w-32 border-r border-b border-white" />
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="relative z-20 min-h-screen bg-[#121212] py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-light tracking-[0.3em] uppercase text-white/40 mb-4">Selected Work</h2>
          <div className="h-[1px] w-12 bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-xs font-light tracking-widest uppercase"
        >
          <p>© 2026 Personal Portfolio</p>
          <p>Built with Next.js & Framer Motion</p>
          <p>Designed for Excellence</p>
        </motion.footer>
      </div>
    </section>
  );
};
