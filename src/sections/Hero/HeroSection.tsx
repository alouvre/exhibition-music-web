import React from 'react';
import { motion } from 'motion/react';
import { Disc } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 w-full">
        <div className="w-full md:w-1/2">
          <motion.span 
            className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40 block mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Interactive Music Experience
          </motion.span>
          <motion.h1 
            className="text-[10vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase italic"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            SOUNDS OF<br/>MALANG
          </motion.h1>
          <motion.div 
            className="mt-12 flex items-center gap-6"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
          >
            <div className="w-16 h-[1px] bg-accent" />
            <p className="text-xs uppercase tracking-[0.3em] font-medium opacity-60">Exploration of Legends & Icons</p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/3 mt-24 md:mt-0 flex justify-end">
          <motion.div 
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 border border-ink/10 flex items-center justify-center relative overflow-hidden bg-white/5">
              <Disc className="text-ink opacity-10 animate-spin-slow" size={240} strokeWidth={0.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[10px] font-black uppercase tracking-widest bg-ink text-off-white px-4 py-2">Start Journey</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-20 text-6xl font-black italic">Archive</div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[400px] font-black pointer-events-none select-none z-0">2026</div>
    </section>
  );
};
