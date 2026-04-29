"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Code2, GitBranch, FlaskConical } from 'lucide-react';

export default function SourceCodePage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[150px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="w-24 h-24 rounded-[2rem] bg-[#1E3A8A]/10 flex items-center justify-center mb-10 mx-auto border-2 border-[#1E3A8A]/20">
             <Code2 className="w-12 h-12 text-[#1E3A8A]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 shadow-inner">
            <FlaskConical className="w-3 h-3 text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">Internal Testing</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Source <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#16A394]">Explorer</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-12">
            Our open-source repository explorer and code documentation engine is currently in experimental phase.
            We're working on a revolutionary way to browse and learn from our codebases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
             <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-left">
                <GitBranch className="w-6 h-6 text-[#16A394] mb-4" />
                <h4 className="font-black uppercase tracking-widest text-xs mb-2">Experimental Branch</h4>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tight">v0.4.2-alpha.7</p>
             </div>
             <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-left">
                <div className="flex gap-1 mb-4">
                   {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#16A394]/30" />)}
                </div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2">Active Developers</h4>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tight">nhut0902-pr + 3 others</p>
             </div>
          </div>

          <button className="mt-12 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs">
            Request Early Access
          </button>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
