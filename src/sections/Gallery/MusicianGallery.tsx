import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { Musician } from '../../types';

interface MusicianGalleryProps {
  musicians: Musician[];
  onSelect: (musician: Musician) => void;
}

export const MusicianGallery: React.FC<MusicianGalleryProps> = ({ musicians, onSelect }) => {
  return (
    <section id="showcase" className="min-h-screen py-32 p-12 bg-zinc-100/30">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">Curated Selection</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">The Icons</h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] opacity-40 uppercase tracking-widest">Selected Entities</span>
            <span className="block text-[14px] font-black">01 // 04</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {musicians.map((artist, idx) => (
            <motion.div
              key={artist.id}
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-800 cursor-pointer border border-ink/5"
              whileHover={{ y: -10 }}
              onClick={() => onSelect(artist)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-off-white">
                <span className="text-[10px] font-black tracking-widest opacity-60 uppercase">{artist.genre}</span>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-2 leading-none">{artist.name}</h3>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                    <span className="text-[9px] font-bold uppercase tracking-widest">Entry</span>
                    <ArrowDownRight size={14} className="text-accent" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
