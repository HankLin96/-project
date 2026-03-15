import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-brand-purple text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif mb-4">偶爾光合</h2>
          <p className="text-brand-teal/80 tracking-widest text-sm uppercase">Occasional Photosynthesis</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-widest uppercase font-medium">
          <a href="#" className="hover:text-brand-teal transition-colors">關於我們</a>
          <a href="#" className="hover:text-brand-teal transition-colors">Podcast 節目</a>
          <a href="#" className="hover:text-brand-teal transition-colors">身份探索文章</a>
          <a href="#" className="hover:text-brand-teal transition-colors">聯絡合作</a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-white/60 text-xs mb-2">© 2026 偶爾光合. All rights reserved.</p>
          <p className="text-white/40 text-[10px] uppercase tracking-tighter">在遷徙的脈絡中，辨認彼此的光。</p>
        </div>
      </div>
    </footer>
  );
};
