import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Compass, Mic2 } from 'lucide-react';

const traits = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: "跨文化的遊牧民",
    description: "在多重身份間擺盪，試圖整合出獨特的自我。你可能曾感到位移，卻也因此擁有更寬廣的視野。"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "深刻的反思者",
    description: "不只經歷故事，更在思考故事的意義。你對自己的身份認同、家族遷徙、或文化差異有獨到的見解。"
  },
  {
    icon: <Mic2 className="w-6 h-6" />,
    title: "敘事的共鳴者",
    description: "願意透過聲音，將私密的經驗轉化為群體的連結。你不一定要很會講，但你一定有值得被聽見的真實。"
  }
];

export const Archetype = () => {
  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-teal uppercase tracking-widest text-xs font-semibold mb-4 block">
            我們在尋找這樣的你 / Archetype
          </span>
          <h2 className="text-4xl font-serif text-brand-purple">那些閃閃發光的故事家</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mb-6">
                {trait.icon}
              </div>
              <h3 className="text-xl font-serif text-brand-purple mb-4">{trait.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-500 italic">
            「你不一定要很完美，只要你足夠真實。」
          </p>
        </div>
      </div>
    </section>
  );
};
