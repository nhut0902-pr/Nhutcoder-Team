"use client";

import { motion } from 'motion/react';
import { Github, Globe, Star, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroAnimation from '../components/HeroAnimation';

export default function Home() {
  return (
    <>
      {/* Atmosphere / Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-[#16A394]/5 dark:bg-[#16A394]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#F97316]/5 dark:bg-[#F97316]/10 rounded-full blur-[150px] animate-pulse delay-700" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A394] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A394]"></span>
              </span>
              <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">Available for projects</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
              Next-Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] via-[#F97316] to-[#1E3A8A]">Digital</span> <br />
              Studio.
            </h1>

            <p className="max-w-md text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              We craft immersive digital experiences at the intersection of design, 3D, and cutting-edge engineering.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-5 bg-[#16A394] text-white font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#16A394]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2 uppercase tracking-widest text-xs">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              <button className="px-8 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 font-black rounded-2xl transition-all hover:border-[#16A394]/50 active:scale-95 uppercase tracking-widest text-xs">
                Our Work
              </button>
            </div>

            <div className="flex items-center gap-8 pt-12 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-3xl font-black tabular-nums">120+</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Projects Done</span>
              </div>
              <div className="w-px h-10 bg-slate-100 dark:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-black tabular-nums">4.9/5</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</span>
              </div>
              <div className="w-px h-10 bg-slate-100 dark:bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-black tabular-nums">2,000+</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GitHub Stars</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#16A394]/20 to-[#F97316]/20 blur-[100px] rounded-full scale-75 animate-pulse" />
            <div className="relative z-10 w-full aspect-square max-w-[600px] mx-auto">
              <HeroAnimation />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
