import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Archetype } from './components/Archetype';
import { Experience } from './components/Experience';
import { FAQ } from './components/FAQ';
import { FormSection } from './components/FormSection';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check for the specific error mentioned by the user
    // "Uncaught TypeError: Cannot set property fetch of #<Window> which has only a getter"
    // This often happens if some script tries to do window.fetch = ...
    // We can try to protect it or just ensure we don't do it.
    console.log("App initialized. window.fetch is:", typeof window.fetch);
  }, []);

  return (
    <div className="min-h-screen bg-brand-paper selection:bg-brand-teal/30 selection:text-brand-purple">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-teal z-50 origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        
        <Manifesto />
        
        <section className="py-20 px-6 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full"
            />
          </div>
        </section>

        <Archetype />
        
        <Experience />
        
        <section className="py-32 px-6 bg-brand-purple text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-3xl md:text-5xl font-serif leading-tight italic opacity-90">
              「故事不一定要完美，只要它足夠真實。」
            </p>
            <div className="mt-12 w-12 h-px bg-brand-teal mx-auto" />
          </motion.div>
        </section>

        <FAQ />
        
        <FormSection />
      </main>
    </div>
  );
}
