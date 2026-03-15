import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="max-w-4xl text-center z-10"
      >
        <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
          新移民探索雷達專區
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-purple leading-tight mb-8">
          在遷徙的脈絡中，<br />辨認彼此的光。
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          一個關於身份、認同與自我重建的敘事計畫。<br />
          邀請跨文化背景的同路人，在座標上留下你的痕跡。
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-purple text-white px-10 py-4 rounded-full text-sm tracking-widest hover:bg-brand-teal transition-colors duration-500 shadow-lg"
          onClick={() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })}
        >
          開啟一場對話
        </motion.button>
      </motion.div>
      
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-brand-purple/5 rounded-full blur-3xl"
      />
    </section>
  );
};
