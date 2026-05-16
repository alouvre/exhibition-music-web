import React from 'react';

export const Footer = () => {
  return (
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
  );
};
