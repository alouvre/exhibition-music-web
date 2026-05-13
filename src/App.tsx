import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Play, Pause, ChevronRight, Instagram, Twitter, Globe, Volume2, Maximize, Disc, Clock } from 'lucide-react';

// --- Constants & Data ---
const ARTIST_DATA = {
  name: "KAIROS",
  genre: "ELECTRONIC / AVANT-GARDE / MINIMAL",
  origin: "BERLIN, GERMANY",
  activeSince: "2018",
  biography: "Kairos is a transdisciplinary artist exploring the tension between organic textures and synthetic resonance. Based in Berlin, their work transcends traditional performance, creating immersive sonic architectures that challenge the boundaries of perception. With a focus on granular synthesis and field recordings, Kairos has redefined the landscape of modern electronic music.",
  quote: "Sound is not a medium for communication, but a physical space to inhabit.",
  songs: [
    { id: "01", title: "Temporal Shift", album: "Aetheria", duration: "6:12" },
    { id: "02", title: "Glass Resonance", album: "Aetheria", duration: "4:45" },
    { id: "03", title: "Subterranean Echoes", album: "Primal Logic", duration: "5:30" },
    { id: "04", title: "Void Walkers", album: "Void", duration: "7:02" },
    { id: "05", title: "Kinetic Stillness", album: "Single", duration: "3:58" },
  ],
  albums: [
    { title: "Aetheria", year: "2024", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400" },
    { title: "Void", year: "2022", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400" },
    { title: "Primal Logic", year: "2020", cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" },
    { title: "Fragments", year: "2018", cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400" },
  ],
  timeline: [
    { year: "2018", event: "Formation of Fragments project in subterranean Berlin." },
    { year: "2020", event: "Release of 'Primal Logic', marking a shift to structural minimalism." },
    { year: "2022", event: "The 'Void' Tour: A sold-out 12-city immersive exhibition." },
    { year: "2024", event: "Launch of 'Aetheria', a multi-sensory digital experience." },
  ]
};

// --- Sub-components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
    />
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center text-off-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-4xl font-display font-bold tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {ARTIST_DATA.name}
      </motion.div>
      <motion.div
        className="w-48 h-[1px] bg-white/20 mt-8 relative overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <motion.div
        className="mt-4 text-[10px] tracking-[0.4em] opacity-40 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
      >
        Modern Music Exhibition_2026
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [exhibitionMode, setExhibitionMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="noise-bg pointer-events-none" />
      <CustomCursor />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[90] origin-left"
        style={{ scaleX }}
      />

      <main className={`transition-colors duration-1000 ${exhibitionMode ? 'bg-zinc-950 text-off-white' : 'bg-off-white text-ink'}`}>
        
        {/* Header */}
        <header className="fixed top-0 left-0 w-full p-12 flex justify-between items-baseline z-[80]">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase mix-blend-difference invert">Music Exhibition Archive / 2026</div>
          
          <nav className="hidden md:flex gap-12 text-[11px] items-center tracking-[0.2em] uppercase mix-blend-difference invert">
            <a href="#bio" className="opacity-40 hover:opacity-100 transition-opacity">01 — Identity</a>
            <a href="#songs" className="opacity-40 hover:opacity-100 transition-opacity">02 — Catalog</a>
            <a href="#archive" className="hover:opacity-100 transition-opacity">03 — Playback</a>
          </nav>

          <div className="flex items-center gap-8">
            <div className="text-[11px] font-bold tracking-[0.3em] uppercase hidden md:block mix-blend-difference invert">Entry No. 8821</div>
            <button 
              onClick={() => setExhibitionMode(!exhibitionMode)}
              className={`flex items-center gap-2 px-6 py-2 border text-[10px] tracking-[0.3em] transition-all uppercase font-bold ${
                exhibitionMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              {exhibitionMode ? 'Exit Mode' : 'Exhibition'}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center p-12 overflow-hidden pt-32 md:pt-0">
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10 w-full h-full">
            
            {/* Left Column: Visual & Bio-mini */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full space-y-12">
              <motion.div 
                className={`relative w-full md:w-96 aspect-square group overflow-hidden ${exhibitionMode ? 'bg-zinc-800' : 'bg-[#D9D7D2]'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1549412640-9fe47a4697a2?q=80&w=800" 
                  alt="Kairos"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {/* Decorative circle overlay from theme */}
                <div className="absolute bottom-8 right-8 w-48 h-48 border border-white/10 rounded-full flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center">
                    <Disc className="text-white/10 animate-spin-slow" size={32} />
                  </div>
                </div>
              </motion.div>

              <div className="max-w-sm">
                <motion.p 
                  className="text-[10px] uppercase tracking-[0.3em] text-accent font-black mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  The Artist Portrait
                </motion.p>
                <motion.p 
                  className="text-sm leading-relaxed opacity-60 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  A multidisciplinary auditory pioneer, blending structural synthesis with architectural textures. Born in Berlin, active within the void.
                </motion.p>
              </div>

              <div className={`border-t pt-8 flex items-end gap-12 ${exhibitionMode ? 'border-white/10' : 'border-black/10'}`}>
                <div>
                  <span className="block text-[9px] uppercase tracking-tighter opacity-30 mb-2">Origin</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{ARTIST_DATA.origin}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-tighter opacity-30 mb-2">Period</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{ARTIST_DATA.activeSince} — PRST</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-tighter opacity-30 mb-2">Genre</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Void Synth</span>
                </div>
              </div>
            </div>

            {/* Right Column: Massive Heading */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-end md:text-right relative">
              <div className="absolute -top-12 md:right-0 text-[10px] uppercase tracking-[0.5em] opacity-30">Musician Showcase</div>
              <motion.h1 
                className="text-[15vw] md:text-[10vw] font-black leading-[0.8] italic uppercase tracking-tighter"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                KAI<br/>ROS
              </motion.h1>
              
              <motion.div 
                className="mt-12 w-full max-w-xs space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className={`p-4 border italic text-xs leading-relaxed opacity-50 ${exhibitionMode ? 'border-white/10' : 'border-black/5'}`}>
                   "Exploring the architectural stillness between frequencies. An archive of synthetic life."
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative background numbers */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[400px] font-black pointer-events-none select-none z-0">
            2026
          </div>
        </section>

        {/* Biography Section */}
        <section id="bio" className={`min-h-screen py-48 p-12 border-y transition-colors duration-500 ${exhibitionMode ? 'border-white/5' : 'border-black/5'}`}>
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-12 block underline decoration-accent/30 underline-offset-8">Bio Index</span>
                <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] uppercase tracking-tighter">STRUCTURAL<br/>SYMMETRY.</h2>
                <div className="text-lg md:text-xl leading-relaxed font-light opacity-60 max-w-xl">
                  {ARTIST_DATA.biography}
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-end">
              <div className={`relative border-l pl-12 space-y-16 ${exhibitionMode ? 'border-white/10' : 'border-black/10'}`}>
                {ARTIST_DATA.timeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <div className="absolute -left-[53px] top-2 w-2 h-2 bg-accent" />
                    <span className="text-2xl md:text-4xl font-black mb-2 block tracking-tighter uppercase">{item.year}</span>
                    <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 max-w-sm font-bold">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative py-48 p-12 flex items-center justify-center overflow-hidden bg-accent text-off-white">
          <motion.div 
            className="container max-w-5xl mx-auto text-center z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[7vw] md:text-[4vw] font-display font-medium leading-tight italic tracking-tighter uppercase font-black">
              "{ARTIST_DATA.quote}"
            </span>
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="w-16 h-[1px] bg-white/30" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-80">— Kairos Manifesto</span>
              <div className="w-16 h-[1px] bg-white/30" />
            </div>
          </motion.div>
        </section>

        {/* Popular Songs UI - Themed */}
        <section id="songs" className="py-48 p-12">
          <div className="container max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-4 block">Cataloged Frequencies</span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">Recordings</h2>
              </div>
              <div className="hidden md:flex flex-col text-right">
                 <span className="text-[10px] opacity-40 uppercase tracking-widest mb-1">Archive Segment</span>
                 <span className="text-xs font-bold tracking-widest">Scroll 01/04</span>
              </div>
            </div>

            <div className="space-y-2">
              {ARTIST_DATA.songs.map((song, idx) => (
                <motion.div 
                  key={idx}
                  className={`group flex items-center justify-between py-8 border-t transition-all cursor-pointer relative overflow-hidden ${
                    exhibitionMode ? 'border-white/5 hover:bg-white/5 px-4' : 'border-black/5 hover:bg-black/5 px-4'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-12">
                    <span className="text-[10px] italic opacity-20 group-hover:opacity-100 transition-opacity translate-y-1">{song.id}</span>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold tracking-tight uppercase group-hover:text-accent transition-colors">{song.title}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] opacity-30 font-black">{song.album}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                     <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
                     <span className="text-[10px] font-mono font-bold opacity-40 tabular-nums">P_{song.duration.replace(':', '.')}_S</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Archive / Gallery - Themed */}
        <section id="archive" className="py-48 p-12">
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-48">
                <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-8 italic">THE<br/>GALLERY</h2>
                <div className="w-24 h-[2px] bg-accent mb-8" />
                <p className="text-sm leading-relaxed opacity-50 uppercase tracking-widest font-medium">Physical pressings and digital artifacts collected from the Berlin underground.</p>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
              {ARTIST_DATA.albums.map((album, idx) => (
                <motion.div 
                  key={idx}
                  className="group relative aspect-[4/5] overflow-hidden bg-off-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <img src={album.cover} alt={album.title} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-[1.01] group-hover:scale-105" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between mix-blend-difference invert group-hover:text-white group-hover:mix-blend-normal">
                    <span className="text-[10px] font-black tracking-widest opacity-40">{album.year}</span>
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 italic">{album.title}</h3>
                      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[8px] uppercase tracking-widest font-black">View Catalog</span>
                         <ChevronRight size={12} className="text-accent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Themed with Wave Visual and Serif Quote */}
        <footer id="social" className={`py-32 p-12 border-t border-black transition-colors duration-500 overflow-hidden relative z-10`}>
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            
            {/* Audio Wave Decor */}
            <div className="flex gap-12 items-center">
              <div className="flex space-x-1.5 items-end h-8">
                <div className="w-1.5 h-6 bg-ink" />
                <div className="w-1.5 h-4 bg-ink/40" />
                <div className="w-1.5 h-8 bg-ink" />
                <div className="w-1.5 h-3 bg-ink/20" />
                <div className="w-1.5 h-7 bg-ink/60" />
              </div>
              <div className="text-[10px] leading-tight opacity-40 uppercase tracking-[0.2em] font-bold">
                Interactive Exhibition Mode<br/>
                Archive Stream Active
              </div>
            </div>

            {/* Serif Aesthetic Quote */}
            <div className="text-center md:max-w-md">
              <p className="italic text-2xl font-serif text-ink opacity-60">
                "Silence is the canvas, sound is the brush."
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">Spotify</a>
              <a href="#" className="hover:text-accent transition-colors">Archive</a>
            </div>
          </div>
          
          <div className="container max-w-7xl mx-auto mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-black/5">
            <span className="text-[8px] tracking-[0.5em] opacity-40 uppercase font-black">Aetheria.Exh // Index_No:8821 // Vol_04</span>
            <div className="flex gap-12 text-[9px] tracking-[0.3em] font-black opacity-40 uppercase">
              <span className="hover:text-accent cursor-pointer">Protocol</span>
              <span className="hover:text-accent cursor-pointer">Security</span>
              <span className="hover:text-accent cursor-pointer">Credits_2026</span>
            </div>
          </div>
        </footer>

      </main>

      {/* Exhibition Mode Indicator */}
      <AnimatePresence>
        {exhibitionMode && (
          <motion.div 
            className="fixed bottom-12 right-12 z-[100] pointer-events-none flex items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <div className="flex flex-col text-right">
              <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-accent">
                SIGNAL ACTIVE
              </div>
              <div className="text-[32px] font-mono leading-none font-bold text-white shadow-lg">
                BER_FLX_004
              </div>
            </div>
            <div className="w-1.5 h-16 bg-accent animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
