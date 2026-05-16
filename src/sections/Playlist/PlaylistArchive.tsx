import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Disc } from 'lucide-react';
import { Musician, Song } from '../../types';

interface PlaylistSectionProps {
  musician: Musician;
  activeSong: Song | null;
  onSongSelect: (song: Song) => void;
}

export const PlaylistSection: React.FC<PlaylistSectionProps> = ({ musician, activeSong, onSongSelect }) => {
  return (
    <section className="bg-ink text-off-white relative flex flex-col md:flex-row overflow-hidden border-t border-white/10">
      
      {/* Left Column: Scrollable Archive List */}
      <div className="w-full md:w-1/2 h-screen flex flex-col p-12 md:p-24 border-r border-white/10 overflow-hidden">
        <div className="mb-8">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">Music Archive</span>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">THE<br/>CATALOG</h3>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pr-4 space-y-1 relative group/list">
          <div className="sticky top-0 h-10 w-full bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none opacity-60" />
          
          {musician.songs.map((song, idx) => (
            <motion.div 
              key={idx} 
              onClick={() => onSongSelect(song)}
              className={`group relative flex items-center justify-between py-10 px-8 border-b border-white/5 cursor-pointer transition-all duration-500 overflow-hidden ${activeSong?.id === song.id ? 'bg-white/5' : 'hover:bg-white/5'}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center gap-12 z-10">
                <span className={`text-[10px] font-bold transition-all duration-500 ${activeSong?.id === song.id ? 'text-accent opacity-100' : 'opacity-20 group-hover:opacity-100'}`}>0{idx + 1}</span>
                <div className="flex flex-col">
                  <h5 className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${activeSong?.id === song.id ? 'text-accent' : 'opacity-60 group-hover:opacity-100'}`}>{song.title}</h5>
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-bold block mt-1">{song.album}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 z-10">
                {activeSong?.id === song.id && (
                  <motion.div 
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[1, 2, 3].map(i => (
                      <motion.div 
                        key={i}
                        className="w-1 bg-accent"
                        animate={{ height: [8, 16, 8] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                )}
                <span className="text-xs font-mono font-bold opacity-30 tabular-nums">{song.duration}</span>
              </div>

              <div className="absolute -right-8 -bottom-8 text-8xl font-black italic opacity-0 group-hover:opacity-5 transition-opacity select-none pointer-events-none">
                {song.id}
              </div>
            </motion.div>
          ))}

          <div className="sticky bottom-0 h-10 w-full bg-gradient-to-t from-ink to-transparent z-10 pointer-events-none opacity-60" />
        </div>
      </div>

      {/* Right Column: YouTube Music Video / Visual Exhibition Wall */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen sticky top-0 bg-zinc-900 overflow-hidden flex items-center justify-center border-l border-white/10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSong?.id || 'static'}
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-full h-full relative"
          >
            {activeSong?.youtubeId ? (
              <div className="w-full h-full relative">
                <iframe
                  className="w-full h-full object-cover grayscale opacity-60 pointer-events-auto"
                  src={`https://www.youtube.com/embed/${activeSong.youtubeId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
                  title={activeSong.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-ink/30 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
              </div>
            ) : (
              <div className="w-full h-full relative group">
                <img 
                  src={musician.image} 
                  className="w-full h-full object-cover grayscale opacity-20" 
                  alt={musician.name}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-24 text-center">
                  <motion.div 
                    className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center mb-12"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Disc className="text-accent/40" size={48} />
                  </motion.div>
                  <h4 className="text-[12px] uppercase tracking-[0.8em] font-black opacity-20">Awaiting Signal Selection</h4>
                </div>
              </div>
            )}

            <div className="absolute bottom-16 left-16 right-16 z-20 pointer-events-none">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">{activeSong?.title || "Exhibition Wall"}</h4>
                <div className="mt-6 flex gap-12 items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-[8px] uppercase tracking-widest font-black opacity-40">System Status</span>
                    <div className="w-12 h-[1px] bg-accent" />
                    <span className="text-[8px] uppercase tracking-widest font-black">Live transmission active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
