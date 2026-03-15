"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#121212] pt-48 pb-12 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/20 mb-12">Available for Collaboration</p>
            <h2 className="text-6xl md:text-8xl font-black tracking-[ -0.05em] uppercase text-white leading-[0.9] mb-12">
              Let's craft the <span className="text-white/20 block">future.</span>
            </h2>
            <div className="h-[1px] w-24 bg-white/20" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Follow</p>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/vishnu-karanth-a25a32238" target="_blank" className="text-xl md:text-2xl font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    LinkedIn <ArrowUpRight size={18} className="text-white/10" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vishnukaranth-git" target="_blank" className="text-xl md:text-2xl font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    GitHub <ArrowUpRight size={18} className="text-white/10" />
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Contact</p>
              <a href="mailto:contact@vishnukaranth.com" className="text-xl md:text-2xl font-medium text-white/60 hover:text-white transition-colors block">
                hello@vishnu.dev
              </a>
              <p className="text-white/20 text-sm font-light uppercase tracking-widest mt-4">Based in Earth • UTC+5:30</p>
            </motion.div>
          </div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-white/5"
        >
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-medium text-white/10 uppercase tracking-[0.4em]">© 2026 Vishnu Karanth</p>
          </div>
          <p className="text-[10px] font-medium text-white/10 uppercase tracking-[0.4em]">Built with Precision & Obsession</p>
          <div className="flex gap-4">
            <div className="h-2 w-2 rounded-full bg-white/10 hover:bg-white/40 transition-colors" />
            <div className="h-2 w-2 rounded-full bg-white/10 hover:bg-white/40 transition-colors" />
            <div className="h-2 w-2 rounded-full bg-white/10 hover:bg-white/40 transition-colors" />
          </div>
        </motion.footer>
      </div>
    </section>
  );
};
