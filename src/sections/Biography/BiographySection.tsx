import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Musician } from '../../types';

interface BiographySectionProps {
  musician: Musician;
  onBack: () => void;
  exhibitionMode?: boolean;
}

export const BiographySection: React.FC<BiographySectionProps> = ({ musician, onBack, exhibitionMode }) => {
  return (
    <section className="relative min-h-screen py-48 p-12">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-24 relative z-10">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <button 
              onClick={onBack}
              className={`flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold group mb-12 hover:text-accent transition-colors ${exhibitionMode ? 'text-off-white' : 'text-ink'}`}
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
              Return to Showcase
            </button>
            <h2 className="text-[12vw] font-black leading-[0.8] italic uppercase tracking-tighter mb-12">{musician.name}</h2>
            <div className={`max-w-md text-lg leading-relaxed font-light ${exhibitionMode ? 'text-off-white/60' : 'opacity-60'}`}>
              {musician.biography}
            </div>
          </motion.div>

          <div className="mt-24 space-y-12 border-l-2 border-accent pl-12">
            {musician.timeline.map((item, idx) => (
              <div key={idx}>
                <span className="text-4xl font-black tracking-tighter mb-2 block">{item.year}</span>
                <p className={`text-[10px] uppercase tracking-widest font-bold max-w-xs ${exhibitionMode ? 'text-off-white/40' : 'opacity-40'}`}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div 
            className={`aspect-[3/4] overflow-hidden relative grayscale ${exhibitionMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={musician.image} className="w-full h-full object-cover" alt={musician.name} />
            <div className={`absolute inset-0 mix-blend-overlay ${exhibitionMode ? 'bg-white/5' : 'bg-ink/10'}`} />
          </motion.div>
          
          <div className={`mt-12 grid grid-cols-2 gap-px border ${exhibitionMode ? 'bg-white/5 border-white/5' : 'bg-ink/5 border-ink/5'}`}>
            {musician.albums.map((album, idx) => (
              <div key={idx} className={`p-8 backdrop-blur-md ${exhibitionMode ? 'bg-zinc-900/40' : 'bg-off-white/5'}`}>
                 <span className={`text-[10px] font-black tracking-widest block mb-2 ${exhibitionMode ? 'text-off-white/20' : 'opacity-20'}`}>{album.year}</span>
                 <h4 className="text-xl font-black uppercase tracking-tighter italic">{album.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
