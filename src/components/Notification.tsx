"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Bell } from 'lucide-react';

export default function Notification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm w-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-2xl shadow-2xl">
            {/* Background Glow */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-teal-500/10 blur-2xl" />

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/20">
                <Bell className="h-5 w-5 text-white" />
              </div>

              <div className="flex-1 pr-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-teal-400">Welcome to Nhutcoder Team</h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  Chúng tôi vừa ra mắt dự án mới <span className="text-white font-bold text-teal-300">"Kỷ Niệm Lớp 9/2"</span>.
                </p>

                <a
                  href="https://kiniemlop92.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 group inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-xs font-bold text-white border border-white/10 hover:bg-white/10 hover:border-teal-500/50 transition-all"
                >
                  Xem ngay
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 rounded-full p-1 text-slate-500 hover:bg-white/5 hover:text-white transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Progress bar animation for attention */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-500/50 to-orange-500/50 w-full opacity-50" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
