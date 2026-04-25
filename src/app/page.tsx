"use client";

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import ThreeCanvas from '../components/ThreeCanvas';

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#010a13] text-slate-100 min-h-screen relative overflow-x-hidden font-sans flex flex-col selection:bg-teal-500/30">
      {/* Background Atmosphere - Updated to Teal/Orange */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#16A394]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4xNSIv+PC9zdmc+')] opacity-30 pointer-events-none" />

      {/* --- HEADER --- */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="relative z-50 flex justify-between items-center px-4 md:px-12 py-6 lg:py-10"
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Logo from Image */}
          <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden rounded-lg">
             <Image
               src="/logo.png"
               alt="NhutCoder Team Logo"
               width={48}
               height={48}
               className="object-contain"
             />
          </div>
          <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#16A394] to-[#1E3A8A] uppercase">
            NhutCoder <span className="text-[#16A394]">Team</span>
          </span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 items-center">
          {['About', 'Projects', 'Services'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold hover:text-[#16A394] transition-colors uppercase tracking-[0.2em] text-slate-400">{item}</a>
          ))}
          <button className="px-6 py-2.5 rounded-full border border-[#16A394]/30 bg-[#16A394]/10 backdrop-blur-md text-xs font-bold hover:bg-[#16A394] hover:text-white transition-all text-[#16A394] uppercase tracking-widest">
            Contact
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-[#16A394] p-2.5 border border-[#16A394]/20 bg-slate-900/40 rounded-xl backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-24 left-4 right-4 md:hidden bg-slate-900/90 backdrop-blur-2xl border border-white/5 rounded-3xl flex flex-col gap-6 px-8 py-10 z-[100] shadow-2xl"
          >
            {['About', 'Projects', 'Services'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.3em] text-slate-300 hover:text-[#16A394] transition-colors">{item}</a>
            ))}
            <button onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-4 rounded-2xl bg-[#16A394] text-white font-bold uppercase tracking-widest text-xs shadow-xl shadow-teal-900/40">
              Get in Touch
            </button>
          </motion.nav>
        )}
      </motion.header>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-12 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A394]/10 border border-[#16A394]/20 w-fit mb-8 mx-auto lg:mx-0 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#16A394] animate-pulse ring-4 ring-[#16A394]/20"></span>
                <span className="text-[10px] font-black text-[#16A394] uppercase tracking-[0.2em]">Creative Agency 2026</span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-4">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] via-[#0D9488] to-[#F97316]">DIGITAL</span>
                <span className="block text-slate-200 mt-2">DREAMS</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed mt-8 font-medium italic opacity-80">
                NhutCoder Team - Nâng tầm thương hiệu của bạn với công nghệ 3D và giải pháp lập trình hiện đại nhất.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 mt-4 w-full sm:w-auto"
            >
              <button className="px-10 py-5 bg-[#F97316] text-white font-black rounded-2xl shadow-2xl shadow-orange-500/20 hover:scale-105 transition-all text-sm uppercase tracking-widest">
                Start a Project
              </button>
              <button className="px-10 py-5 bg-slate-900 border border-slate-800 hover:border-[#16A394]/50 text-slate-300 font-bold rounded-2xl transition-all text-sm uppercase tracking-widest backdrop-blur-xl">
                View Portfolio
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-16 pt-12 border-t border-slate-800/50 w-full"
            >
              {[
                { val: '50+', label: 'Products' },
                { val: '12k', label: 'Commits' },
                { val: '100%', label: 'Passion' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-2 font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[700px] flex justify-center items-center order-1 lg:order-2"
          >
            {/* Geometric Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] sm:w-full sm:h-full border border-[#16A394]/5 rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[#F97316]/5 rounded-full pointer-events-none -z-10 animate-spin-slow" />
            
            <ThreeCanvas />
            
            {/* Tech Metadata overlay (positioned for minimal intrusion) */}
            <div className="absolute top-0 right-0 p-8 hidden sm:block pointer-events-none">
              <div className="flex flex-col gap-1 border-r-2 border-[#16A394] pr-4">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">System_Status</span>
                <span className="text-xs font-mono text-[#16A394]">READY_TEAL_V1</span>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center bg-slate-950/40 backdrop-blur-3xl border-t border-white/5 mt-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6 md:mb-0">
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Available for New Projects
          </div>
          <span className="hidden md:inline text-slate-800">/</span>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 NHUTCODER TEAM
          </div>
        </div>
        
        <div className="flex gap-6">
          {['TW', 'GH', 'LI'].map((social) => (
            <div key={social} className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500 hover:text-[#16A394] hover:border-[#16A394]/40 transition-all cursor-pointer group">
              <span className="text-[10px] font-black group-hover:scale-110 transition-transform">{social}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
