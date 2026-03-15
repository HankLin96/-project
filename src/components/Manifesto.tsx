import React from 'react';
import { motion } from 'motion/react';

export const Manifesto = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-brand-teal uppercase tracking-widest text-xs font-semibold mb-4 block">
            核心理念 / Manifesto
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-purple mb-10 leading-snug">
            身為緬甸華僑，我常在想，那些跨越國境的移動，如何在我們靈魂裡留下痕跡？
          </h2>
          <div className="space-y-6 text-slate-600 leading-loose text-lg font-light">
            <p>
              「偶爾光合」不只是一個內容品牌，它更像是一個讓故事彼此辨認的入口。
            </p>
            <p>
              我們相信，身份認同不是一個靜止的標籤，而是一場持續進行的光合作用 —— 在吸收了不同文化的養分後，轉化成屬於自己生命的力量。
            </p>
            <p>
              這份「探索雷達」計畫，是為了尋找那些在台灣生活、在多重文化間擺盪，並願意停下腳步，去梳理自己生命脈絡的人。
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="font-serif italic text-brand-purple text-xl">
              —— 偶爾光合 創辦人
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
