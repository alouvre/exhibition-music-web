import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Play, Pause, ChevronRight, Instagram, Twitter, Globe, Volume2, Maximize, Disc, Clock, ArrowLeft, ArrowDownRight } from 'lucide-react';

// --- Types ---
interface Song {
  id: string;
  title: string;
  album: string;
  duration: string;
  youtubeId?: string; // YouTube ID for the active transmission
}

interface Album {
  title: string;
  year: string;
  cover: string;
}

interface TimelineItem {
  year: string;
  event: string;
}

interface Musician {
  id: string;
  name: string;
  genre: string;
  origin: string;
  activeSince: string;
  biography: string;
  quote: string;
  image: string;
  songs: Song[];
  albums: Album[];
  timeline: TimelineItem[];
}

// --- Data ---
const MUSICIANS: Musician[] = [
  {
    id: 'ian-antono',
    name: 'IAN ANTONO',
    genre: 'ROCK LEGEND',
    origin: 'MALANG, ID',
    activeSince: '1970',
    biography: 'Ian Antono is a titan of Indonesian rock. As the legendary lead guitarist of God Bless, his riffs helped define the sound of an era. Known for his technical precision and melodic sensibility, he is often cited as the most influential guitarist in Indonesian history.',
    quote: "Rock is not just music, it is an attitude and a soul that never dies.",
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800',
    songs: [
      { id: '01', title: 'Rumah Kita', album: 'Semut Hitam', duration: '4:48', youtubeId: '_E2S0_GZ6M0' },
      { id: '02', title: 'Semut Hitam', album: 'Semut Hitam', duration: '5:45', youtubeId: 'pQfU88_QeSw' },
      { id: '03', title: 'Panggung Sandiwara', album: 'Cermin', duration: '4:12', youtubeId: '9G_7P_76_Z4' },
      { id: '04', title: 'Maret 1989', album: 'Raksasa', duration: '5:20', youtubeId: 'X7-m3D_y10I' },
      { id: '05', title: 'Syair Kehidupan', album: 'Single', duration: '3:55', youtubeId: '6qG1S2p6TDU' },
      { id: '06', title: 'Bus Kota', album: 'Single', duration: '4:05', youtubeId: 'm4J2W-J9xQY' },
      { id: '07', title: 'Menjilat Matahari', album: 'Raksasa', duration: '4:50', youtubeId: '7P-j8_M1V5s' },
      { id: '08', title: 'Selamat Pagi Indonesia', album: 'Semut Hitam', duration: '5:12', youtubeId: 'B-jS9_B1V5s' },
    ],
    albums: [
      { title: 'Semut Hitam', year: '1988', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400' },
      { title: 'Cermin', year: '1980', cover: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400' },
    ],
    timeline: [
      { year: '1974', event: 'Joined God Bless, changing the landscape of Indonesian rock.' },
      { year: '1988', event: 'Released "Semut Hitam", the highest-selling rock album in ID.' },
    ]
  },
  {
    id: 'toto-tewel',
    name: 'TOTO TEWEL',
    genre: 'BLUES ROCK',
    origin: 'MALANG, ID',
    activeSince: '1980',
    biography: 'Known for his work with Elpamas and as a session virtuoso for Iwan Fals and Kantata Takwa, Toto Tewel is the master of Indonesian blues-rock expression. His stage presence and raw energy are unmatched.',
    quote: "Every note should tell a story of life and struggle.",
    image: 'https://images.unsplash.com/photo-1525994886773-b205b8556617?q=80&w=800',
    songs: [
      { id: '01', title: 'Pak Tua', album: 'Dinding-Dinding Kota', duration: '5:10', youtubeId: 'fV06sVp06fE' },
      { id: '02', title: 'Dinding-Dinding Kota', album: 'Dinding-Dinding Kota', duration: '4:55', youtubeId: 'n7-m3D_y10I' },
      { id: '03', title: 'Bumi Perkemahan', album: 'Elpamas 2', duration: '4:30', youtubeId: 'j8_M1V5sB-j' },
      { id: '04', title: 'Tato', album: 'Elpamas 3', duration: '5:05', youtubeId: '7P-j8_M1V5s' },
    ],
    albums: [
      { title: 'Dinding-Dinding Kota', year: '1989', cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400' },
    ],
    timeline: [
      { year: '1983', event: 'Founded Elpamas, bringing a new energy to the local scene.' },
      { year: '1990', event: 'Collaborated on the historic Kantata Takwa project.' },
    ]
  },
  {
    id: 'sylvia-saartje',
    name: 'SYLVIA SAARTJE',
    genre: 'LADY ROCK',
    origin: 'ARNHEM, NL',
    activeSince: '1970',
    biography: 'The "Lady Rocker" of Indonesia. Sylvia Saartje was a trailblazer for women in the male-dominated rock scene of the 70s and 80s. Her powerful voice and rebellious spirit paved the way for generations of female artists.',
    quote: "Rock has no gender. It only has truth.",
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800',
    songs: [
      { id: '01', title: 'Biarkan', album: 'Biar Semua Hilang', duration: '4:20', youtubeId: 'v16N2F9XUoU' },
      { id: '02', title: 'Jakarta Blue Jeans', album: 'Single', duration: '3:50', youtubeId: 'B-jS9_B1V5s' },
      { id: '03', title: 'Ooh... Jakarta', album: 'Single', duration: '4:15', youtubeId: '7P-j8_M1V5s' },
      { id: '04', title: 'Biar Semua Hilang', album: 'Biar Semua Hilang', duration: '5:00', youtubeId: 'm4J2W-J9xQY' },
    ],
    albums: [
      { title: 'Biar Semua Hilang', year: '1981', cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400' },
    ],
    timeline: [
      { year: '1970', event: 'Started her career with Tornado group.' },
      { year: '1981', event: 'Iconic performance at the first National Rock Festival.' },
    ]
  },
  {
    id: 'sal-priadi',
    name: 'SAL PRIADI',
    genre: 'ALT POP',
    origin: 'MALANG, ID',
    activeSince: '2015',
    biography: 'A modern icon of Indonesian alternative music. Sal Priadi blends poetic lyricism with eccentric pop sensibilities, creating a theatrical experience that resonates with the modern generation.',
    quote: "I write what my heart fails to say out loud.",
    image: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=800',
    songs: [
      { id: '01', title: 'Amin Paling Serius', album: 'Berhati', duration: '7:05', youtubeId: 'tCE9U4D995s' },
      { id: '02', title: 'Mesra-mesraannya kecil-kecilan dulu', album: 'Markers and Such', duration: '4:15', youtubeId: 'u4J2W-J9xQY' },
      { id: '03', title: 'Kultusan', album: 'Single', duration: '4:45', youtubeId: 'B-jS9_B1V5s' },
      { id: '04', title: 'Irama La Laut', album: 'Berhati', duration: '4:30', youtubeId: '7P-j8_M1V5s' },
      { id: '05', title: 'Nyala', album: 'Berhati', duration: '3:50', youtubeId: 'm4J2W-J9xQY' },
      { id: '06', title: 'Dalam Diam', album: 'Berhati', duration: '5:10', youtubeId: 'X7-m3D_y10I' },
      { id: '07', title: 'Zuzuzaza', album: 'Markers and Such', duration: '3:40', youtubeId: 'pQfU88_QeSw' },
    ],
    albums: [
      { title: 'Berhati', year: '2020', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400' },
    ],
    timeline: [
      { year: '2018', event: 'Breakthrough with the single "Kultusan".' },
      { year: '2020', event: 'Released the critically acclaimed album "Berhati".' },
    ]
  }
];

// --- Sub-components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      style={{ opacity: isVisible ? 1 : 0 }}
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
        className="text-2xl md:text-4xl font-display font-black tracking-[0.3em] uppercase text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Malang Music Archive
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
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedMusician, setSelectedMusician] = useState<Musician | null>(null);
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [exhibitionMode, setExhibitionMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

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
        <header className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-baseline z-[80]">
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase mix-blend-difference invert cursor-pointer" onClick={() => setSelectedMusician(null)}>Malang Music Archive</span>
            <span className="text-[8px] opacity-40 uppercase tracking-[0.2em] mix-blend-difference invert mt-1">Exhibition 2026 // Vol. 01</span>
          </div>
          
          <nav className="hidden md:flex gap-12 text-[10px] items-center tracking-[0.2em] uppercase mix-blend-difference invert font-bold">
            <a href="#showcase" className="opacity-40 hover:opacity-100 transition-opacity">Legends</a>
            <a href="#archive" className="opacity-40 hover:opacity-100 transition-opacity">Archive</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleFullscreen}
              className={`px-4 py-2 border text-[9px] tracking-[0.3em] transition-all uppercase font-bold mix-blend-difference invert hidden md:block`}
            >
              Fullscreen
            </button>
            <button 
              onClick={() => setExhibitionMode(!exhibitionMode)}
              className={`px-6 py-2 border text-[9px] tracking-[0.3em] transition-all uppercase font-bold ${
                exhibitionMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              {exhibitionMode ? 'Exit Mode' : 'Exhibition'}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        {!selectedMusician && (
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
        )}

        {/* Musicians Showcase */}
        {!selectedMusician && (
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
                {MUSICIANS.map((artist, idx) => (
                  <motion.div
                    key={artist.id}
                    className="group relative aspect-[3/4] overflow-hidden bg-zinc-800 cursor-pointer border border-ink/5"
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedMusician(artist)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
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
        )}

        {/* Selected Musician Detail View */}
        <AnimatePresence mode="wait">
          {selectedMusician && (
            <motion.div
              key={selectedMusician.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen"
            >
              <section className="relative min-h-screen py-48 p-12">
                <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-24 relative z-10">
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      <button 
                        onClick={() => setSelectedMusician(null)}
                        className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold group mb-12 hover:text-accent transition-colors"
                      >
                        <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
                        Return to Showcase
                      </button>
                      <h2 className="text-[12vw] font-black leading-[0.8] italic uppercase tracking-tighter mb-12">{selectedMusician.name}</h2>
                      <div className="max-w-md text-lg leading-relaxed font-light opacity-60">
                        {selectedMusician.biography}
                      </div>
                    </motion.div>

                    <div className="mt-24 space-y-12 border-l-2 border-accent pl-12">
                      {selectedMusician.timeline.map((item, idx) => (
                        <div key={idx}>
                          <span className="text-4xl font-black tracking-tighter mb-2 block">{item.year}</span>
                          <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold max-w-xs">{item.event}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <motion.div 
                      className="aspect-[3/4] bg-zinc-200 overflow-hidden relative grayscale"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img src={selectedMusician.image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-ink/10 mix-blend-overlay" />
                    </motion.div>
                    
                    <div className="mt-12 grid grid-cols-2 gap-px bg-ink/5 border border-ink/5">
                      {selectedMusician.albums.map((album, idx) => (
                        <div key={idx} className="p-8 bg-off-white/5 backdrop-blur-md">
                           <span className="text-[10px] font-black tracking-widest opacity-20 block mb-2">{album.year}</span>
                           <h4 className="text-xl font-black uppercase tracking-tighter italic">{album.title}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Quote Layer */}
              <section className="py-48 bg-accent text-off-white p-12 text-center">
                 <div className="container max-w-4xl mx-auto">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                    >
                      <q className="text-5xl md:text-7xl font-sans font-black italic tracking-tighter leading-none mb-12 block">
                        {selectedMusician.quote}
                      </q>
                      <div className="flex items-center justify-center gap-8 opacity-40">
                        <div className="w-12 h-[1px] bg-white" />
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Artist Manifesto</span>
                        <div className="w-12 h-[1px] bg-white" />
                      </div>
                    </motion.div>
                 </div>
              </section>

              {/* Tracks Selection - Redesigned for Split Layout Exhibition */}
              <section className="bg-ink text-off-white relative flex flex-col md:flex-row overflow-hidden border-t border-white/10">
                 
                 {/* Left Column: Scrollable Archive List */}
                 <div className="w-full md:w-1/2 h-screen flex flex-col p-12 md:p-24 border-r border-white/10 overflow-hidden">
                    <div className="mb-12">
                       <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-4 block">Music Archive</span>
                       <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] italic">THE<br/>CATALOG</h3>
                    </div>

                    <div className="flex-1 overflow-y-auto no-scrollbar pr-4 space-y-1 relative group/list">
                       {/* Subtle fade overlay for scroll context */}
                       <div className="sticky top-0 h-10 w-full bg-gradient-to-b from-ink to-transparent z-10 pointer-events-none opacity-60" />
                       
                       {selectedMusician.songs.map((song, idx) => (
                         <motion.div 
                           key={idx} 
                           onClick={() => setActiveSong(song)}
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

                            {/* Background Number Visual (Only on Hover/Active) */}
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
                              {/* YouTube Embed Layer */}
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
                                 src={selectedMusician.image} 
                                 className="w-full h-full object-cover grayscale opacity-20" 
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

                          {/* Video Overlay Typography */}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Timeline Section */}
        {!selectedMusician && (
          <section id="archive" className="py-48 p-12 border-t border-ink/5">
             <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-32">
                   <span className="text-[10px] uppercase tracking-[1em] font-bold opacity-30 mb-8 block">Cultural Timeline</span>
                   <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">The Evolution<br/>of Malang Music</h2>
                </div>
                
                <div className="flex flex-col gap-px bg-ink/10">
                   {[
                     { era: '1970s', label: 'The Rise of Rock', artists: 'God Bless, Sil Saartje' },
                     { era: '1980s', label: 'Golden Pop Era', artists: 'Chrisye, Ian Antono' },
                     { era: '1990s', label: 'Indie & Alternative', artists: 'Slank, Dewa 19' },
                     { era: '2010s', label: 'Modern Renaissance', artists: 'Sal Priadi, Tulus' },
                   ].map((item, idx) => (
                     <div key={idx} className="bg-off-white p-12 flex flex-col md:flex-row justify-between items-center group cursor-default">
                        <div className="text-6xl font-black italic tracking-tighter opacity-10 group-hover:opacity-100 group-hover:text-accent transition-all duration-500">{item.era}</div>
                        <div className="text-center md:text-right">
                           <span className="text-xl font-bold uppercase tracking-tighter block mb-2">{item.label}</span>
                           <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">{item.artists}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </section>
        )}

        {/* Global Quote Section */}
        {!selectedMusician && (
          <section className="py-64 bg-zinc-950 text-off-white overflow-hidden relative">
            <motion.div 
              className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"
              style={{ x: -100 }}
              animate={{ x: 100 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            >
              <span className="text-[40vw] font-black italic whitespace-nowrap">MALANG_SOUNDS</span>
            </motion.div>
            <div className="container max-w-5xl mx-auto px-12 relative z-10 text-center">
              <motion.h2 
                className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-12 uppercase"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                "Music is the only language that honors the silence of the soul."
              </motion.h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Archive Manifesto // Vol. 01</span>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="py-32 p-12 relative overflow-hidden">
          <div className="container max-w-7xl mx-auto grid md:grid-cols-3 gap-16 relative z-10">
            <div className="space-y-8">
              <span className="text-3xl font-black uppercase tracking-tighter italic">MMA展</span>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-40 leading-relaxed">
                Malang Music Archive (MMA) is a digital tribute to the structural evolution of sound within the city of Malang. Dedicated to the visionaries of the past and the architects of the future.
              </p>
            </div>

            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-20 block mb-8">Exhibition Info</span>
              <div className="space-y-4">
                 <div className="flex justify-between border-b border-ink/10 pb-4">
                   <span className="text-[10px] uppercase font-bold opacity-40">Status:</span>
                   <span className="text-[10px] uppercase font-bold text-accent">Active // Exhibition</span>
                 </div>
                 <div className="flex justify-between border-b border-ink/10 pb-4">
                   <span className="text-[10px] uppercase font-bold opacity-40">Location:</span>
                   <span className="text-[10px] uppercase font-bold">Virtual Archive X Berlin</span>
                 </div>
                 <div className="flex justify-between border-b border-ink/10 pb-4">
                   <span className="text-[10px] uppercase font-bold opacity-40">Credits:</span>
                   <span className="text-[10px] uppercase font-bold">Archive_id004</span>
                 </div>
              </div>
            </div>

          </div>
          
          <div className="absolute -bottom-1/2 left-0 text-[30vw] font-black opacity-[0.02] tracking-tighter pointer-events-none select-none italic">
            MALANG
          </div>
        </footer>

      </main>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
}
