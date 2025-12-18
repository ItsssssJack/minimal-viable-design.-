
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-24 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-white/20">
           <span>© 2025 ClickPilot</span>
           <span className="w-1 h-1 bg-white/10 rounded-full" />
           <span>Crafting the future of thumbnails</span>
        </div>
        
        <div className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="#" className="text-white/30 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-white/30 hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
