import React from 'react';
import { motion } from 'motion/react';

interface GlobalQuoteProps {
  quote?: string;
  source?: string;
  isArtistSpecific?: boolean;
}

export const GlobalQuote: React.FC<GlobalQuoteProps> = ({ 
  quote = "Music is the only language that honors the silence of the soul.",
  source = "Archive Manifesto // Vol. 01",
  isArtistSpecific = false
}) => {
  return (
    <section className={`py-64 overflow-hidden relative ${isArtistSpecific ? 'bg-accent text-off-white' : 'bg-zinc-950 text-off-white'}`}>
      {!isArtistSpecific && (
        <motion.div 
          className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        >
          <span className="text-[40vw] font-black italic whitespace-nowrap">MALANG_SOUNDS</span>
        </motion.div>
      )}
      <div className="container max-w-5xl mx-auto px-12 relative z-10 text-center">
        <motion.h2 
          className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-12 uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          "{quote}"
        </motion.h2>
        <div className={`w-24 h-1 mx-auto mb-8 ${isArtistSpecific ? 'bg-white' : 'bg-accent'}`} />
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">{source}</span>
      </div>
    </section>
  );
};
