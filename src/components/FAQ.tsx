import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "誰適合填寫這份表單？",
    answer: "只要你具備跨文化背景（如新移民、東南亞華僑、新二代、或曾長期旅居海外），且對自己的身份認同有過思考與反思，都非常歡迎填寫。"
  },
  {
    question: "我不確定自己算不算「新移民」或「新二代」，可以填嗎？",
    answer: "當然可以。我們對身份的定義非常寬廣，只要你曾因文化差異感到「位移」，或正在尋找自己的文化歸屬感，你就是我們要找的人。"
  },
  {
    question: "我沒有很會講故事，錄音會很尷尬嗎？",
    answer: "請放心，「偶爾光合」採用引導式的對話方式。我們更像是在聊天，我會協助你梳理脈絡，讓對話自然流動。"
  },
  {
    question: "填了表單就一定會被邀訪錄音嗎？",
    answer: "不一定。我們會根據目前策展的主題與節奏來邀請受訪者。但即便暫時沒有錄音計畫，你的資料也會留在我們的「雷達」中，未來有合適主題時會優先聯繫。"
  },
  {
    question: "我的個人資料會被如何使用？",
    answer: "所有填寫的資料僅供「偶爾光合」內部聯繫與計畫評估使用，未經你的同意，絕不會對外公開或挪作他用。"
  },
  {
    question: "可以推薦朋友參與嗎？",
    answer: "非常歡迎！你可以將此頁面分享給他，或在表單中留下他的聯繫方式（請務必先徵得他的同意）。"
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-teal uppercase tracking-widest text-xs font-semibold mb-4 block">
            常見問題 / FAQ
          </span>
          <h2 className="text-3xl font-serif text-brand-purple">關於這場探索，你可能想知道...</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-brand-purple">{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="w-5 h-5 text-brand-teal" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-500 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
