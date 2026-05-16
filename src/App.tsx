import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Musician, Song } from './types';
import { MUSICIANS } from './data/musicians';
import { useFullscreen } from './hooks/useFullscreen';

// Layout Components
import { Header } from './components/layout/Header';
import { CustomCursor } from './components/common/CustomCursor';
import { LoadingScreen } from './components/common/LoadingScreen';

// Section Components
import { HeroSection } from './sections/Hero/HeroSection';
import { MusicianGallery } from './sections/Gallery/MusicianGallery';
import { BiographySection } from './sections/Biography/BiographySection';
import { PlaylistSection } from './sections/Playlist/PlaylistArchive';
import { GlobalTimeline } from './sections/Timeline/GlobalTimeline';
import { GlobalQuote } from './sections/Shared/GlobalQuote';
import { Footer } from './sections/Footer/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedMusician, setSelectedMusician] = useState<Musician | null>(null);
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [exhibitionMode, setExhibitionMode] = useState(false);
  
  const { toggleFullscreen } = useFullscreen();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleMusicianSelect = (musician: Musician) => {
    setSelectedMusician(musician);
    setActiveSong(null); // Reset active song on musician change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGallery = () => {
    setSelectedMusician(null);
    setActiveSong(null);
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
        
        <Header 
          exhibitionMode={exhibitionMode}
          setExhibitionMode={setExhibitionMode}
          toggleFullscreen={toggleFullscreen}
          onLogoClick={handleBackToGallery}
        />

        {!selectedMusician ? (
          <>
            <HeroSection />
            <MusicianGallery 
              musicians={MUSICIANS} 
              onSelect={handleMusicianSelect} 
            />
            <GlobalTimeline />
            <GlobalQuote />
          </>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMusician.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen"
            >
              <BiographySection 
                musician={selectedMusician} 
                onBack={handleBackToGallery} 
              />
              
              <GlobalQuote 
                quote={selectedMusician.quote} 
                source="Artist Manifesto" 
                isArtistSpecific 
              />

              <PlaylistSection 
                musician={selectedMusician}
                activeSong={activeSong}
                onSongSelect={setActiveSong}
              />
            </motion.div>
          </AnimatePresence>
        )}

        <Footer />

      </main>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
