import React from 'react';

const TIMELINE_DATA = [
  { era: '1970s', label: 'The Rise of Rock', artists: 'God Bless, Sil Saartje' },
  { era: '1980s', label: 'Golden Pop Era', artists: 'Chrisye, Ian Antono' },
  { era: '1990s', label: 'Indie & Alternative', artists: 'Slank, Dewa 19' },
  { era: '2010s', label: 'Modern Renaissance', artists: 'Sal Priadi, Tulus' },
];

export const GlobalTimeline = () => {
  return (
    <section id="archive" className="py-48 p-12 border-t border-ink/5">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[1em] font-bold opacity-30 mb-8 block">Cultural Timeline</span>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">The Evolution<br/>of Malang Music</h2>
        </div>
        
        <div className="flex flex-col gap-px bg-ink/10">
          {TIMELINE_DATA.map((item, idx) => (
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
  );
};
