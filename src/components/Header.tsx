"use client";

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="relative z-50 flex justify-between items-center px-4 md:px-12 py-6 lg:py-10"
    >
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden rounded-lg">
           <Image
             src="/logo.png"
             alt="Nhutcoder Team Logo"
             width={48}
             height={48}
             className="object-contain"
           />
        </div>
        <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-[#16A394] to-[#1E3A8A] uppercase">
          Nhutcoder <span className="text-[#16A394]">Team</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-12 items-center">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="text-xs font-bold hover:text-[#16A394] transition-colors uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
            {item.name}
          </Link>
        ))}
        <ThemeToggle />
        <Link href="/#contact" className="px-6 py-2.5 rounded-full border border-[#16A394]/30 bg-[#16A394]/10 backdrop-blur-md text-xs font-bold hover:bg-[#16A394] hover:text-white transition-all text-[#16A394] uppercase tracking-widest">
          Contact
        </Link>
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="flex md:hidden items-center gap-3">
        <ThemeToggle />
        <button
          className="text-[#16A394] p-2.5 border border-[#16A394]/20 bg-white/50 dark:bg-slate-900/40 rounded-xl backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-24 left-4 right-4 md:hidden bg-slate-900/90 backdrop-blur-2xl border border-white/5 rounded-3xl flex flex-col gap-6 px-8 py-10 z-[100] shadow-2xl"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-[0.3em] text-slate-300 hover:text-[#16A394] transition-colors">
              {item.name}
            </Link>
          ))}
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-4 rounded-2xl bg-[#16A394] text-white font-bold uppercase tracking-widest text-xs shadow-xl shadow-teal-900/40">
            Get in Touch
          </button>
        </motion.nav>
      )}
    </motion.header>
  );
}
