import React from 'react';
import { motion } from 'motion/react';

export const FormSection = () => {
  return (
    <section id="invitation" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-teal uppercase tracking-widest text-xs font-semibold mb-4 block">
            留下你的座標 / Invitation
          </span>
          <h2 className="text-4xl font-serif text-brand-purple mb-6">開啟一場關於身份的對話</h2>
          <p className="text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            這不是一份審核表，而是一封寄往未來的邀請函。請依照你的節奏，填入那些你想被看見的碎片。
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-3xl p-1 overflow-hidden shadow-2xl"
        >
          <div className="bg-white rounded-[1.4rem] overflow-hidden min-h-[600px] flex flex-col items-center justify-center p-12 text-center">
            {/* Placeholder for Google Form iframe or a custom form */}
            <div className="max-w-md">
              <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-brand-purple mb-4">探索雷達表單</h3>
              <p className="text-slate-500 mb-8 font-light">
                為了提供最舒適的對話體驗，請先讓我們簡單認識你。
              </p>
              <a 
                href="https://forms.gle/JF6sZ3RXonFchxvBA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-purple text-white px-10 py-4 rounded-full hover:bg-brand-teal transition-all duration-500 shadow-lg tracking-widest text-sm uppercase font-semibold"
              >
                前往填寫表單
              </a>
              <p className="mt-6 text-xs text-slate-400 italic">
                提交後，我會親自閱讀每一份回覆。無論是否適合錄音，你的故事都已經在這裡留下了重量。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-brand-purple/10 to-transparent" />
      </div>
    </section>
  );
};
