"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/feedback/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F97316]/5 dark:bg-[#F97316]/10 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-8 shadow-inner">
            <span className="text-[10px] font-black text-[#F97316] uppercase tracking-[0.2em]">User Voice</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Share Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] to-[#F97316]">Feedback</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Your thoughts help us improve and build better digital experiences.
            We'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-2xl"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-20 h-20 text-[#16A394] mx-auto mb-6" />
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Thank You!</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Your feedback has been successfully submitted.</p>
              <button
                onClick={() => setStatus('idle')}
                className="px-8 py-4 bg-[#16A394] text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-[#16A394] outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-[#16A394] outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you think..."
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-[#16A394] outline-none transition-all font-medium resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                  <AlertCircle size={16} /> Something went wrong. Please try again.
                </div>
              )}

              <button
                disabled={status === 'loading'}
                className="w-full py-5 bg-[#16A394] text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#16A394]/20 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Feedback'} <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
