import React from 'react';
import { motion } from 'motion/react';
import { Coffee, MessageCircle, Radio, Heart } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "初步聯繫",
    description: "填寫表單後，我會親自閱讀你的故事，並透過 Email 或通訊軟體與你打聲招呼。"
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "線上或線下聊聊",
    description: "在正式錄音前，我們先像朋友一樣喝杯咖啡，聊聊彼此的生命經驗，確認訪談的方向。"
  },
  {
    icon: <Radio className="w-5 h-5" />,
    title: "Podcast 錄製",
    description: "在舒適、無壓力的環境下進行對話。這不是審核，而是一場溫柔的敘事探索。"
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "故事發酵",
    description: "錄音完成後，我們會進行後製與策展，讓你的故事在「偶爾光合」的社群中發光。"
  }
];

export const Experience = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <span className="text-brand-teal uppercase tracking-widest text-xs font-semibold mb-4 block">
              參與說明 / Experience
            </span>
            <h2 className="text-4xl font-serif text-brand-purple mb-6">這不是一場面試，<br />而是一次相遇。</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              我們重視對話的品質勝過錄音的長度。在這裡，你可以放心地整理自己的碎片。
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-purple/5 text-brand-purple rounded-full flex items-center justify-center border border-brand-purple/10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-brand-purple mb-2">{step.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
