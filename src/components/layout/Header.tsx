import React from 'react';

interface HeaderProps {
  exhibitionMode: boolean;
  setExhibitionMode: (val: boolean) => void;
  toggleFullscreen: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  exhibitionMode, 
  setExhibitionMode, 
  toggleFullscreen, 
  onLogoClick 
}) => {
  return (
    <header className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-baseline z-[80]">
      <div className="flex flex-col">
        <span 
          className="text-[10px] font-black tracking-[0.3em] uppercase mix-blend-difference invert cursor-pointer" 
          onClick={onLogoClick}
        >
          Malang Music Archive
        </span>
        <span className="text-[8px] opacity-40 uppercase tracking-[0.2em] mix-blend-difference invert mt-1">
          Exhibition 2026 // Vol. 01
        </span>
      </div>
      
      <nav className="hidden md:flex gap-12 text-[10px] items-center tracking-[0.2em] uppercase mix-blend-difference invert font-bold">
        <a href="#showcase" className="opacity-40 hover:opacity-100 transition-opacity">Legends</a>
        <a href="#archive" className="opacity-40 hover:opacity-100 transition-opacity">Archive</a>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleFullscreen}
          className="px-4 py-2 border text-[9px] tracking-[0.3em] transition-all uppercase font-bold mix-blend-difference invert hidden md:block"
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
  );
};
