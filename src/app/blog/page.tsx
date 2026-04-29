"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PenTool, Clock, Construction } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#16A394]/5 dark:bg-[#16A394]/10 rounded-full blur-[150px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="w-24 h-24 rounded-3xl bg-[#16A394]/10 flex items-center justify-center mb-10 mx-auto border-2 border-[#16A394]/20">
             <Construction className="w-12 h-12 text-[#16A394] animate-bounce" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 mb-8 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-[0.2em]">Beta Phase</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Blog <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] to-[#F97316]">Coming Soon</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-12">
            We are currently crafting high-quality content about 3D Web, AI, and Software Architecture.
            Our blog is currently under internal testing and will be live soon.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <Clock className="w-5 h-5 text-[#16A394]" />
                <span className="text-sm font-black uppercase tracking-widest">Expected: Q2 2026</span>
             </div>
             <button className="px-8 py-4 bg-[#16A394] text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs shadow-xl shadow-[#16A394]/20">
                Notify Me
             </button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
