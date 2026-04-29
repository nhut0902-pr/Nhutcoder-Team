"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { LifeBuoy, Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  const supportChannels = [
    {
      icon: <Mail className="text-[#16A394]" />,
      title: 'Email Support',
      desc: 'Send us an email and we\'ll get back to you within 24 hours.',
      contact: 'support@nhutcoder.com'
    },
    {
      icon: <MessageCircle className="text-[#F97316]" />,
      title: 'Live Chat',
      desc: 'Connect with our team instantly for urgent matters.',
      contact: 'Available 9AM - 6PM'
    },
    {
      icon: <HelpCircle className="text-[#1E3A8A]" />,
      title: 'Knowledge Base',
      desc: 'Find answers to common questions in our documentation.',
      contact: 'View Docs'
    }
  ];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#16A394]/5 dark:bg-[#16A394]/10 rounded-full blur-[130px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A394]/10 border border-[#16A394]/20 mb-8 shadow-inner">
            <span className="text-[10px] font-black text-[#16A394] uppercase tracking-[0.2em]">Help Center</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            How Can We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] to-[#1E3A8A]">Help You?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Need assistance with your project or have questions about our services?
            Our dedicated support team is here to ensure your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#16A394]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-8 shadow-xl group-hover:rotate-12 transition-transform">
                {channel.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{channel.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                {channel.desc}
              </p>
              <div className="text-sm font-black text-[#16A394] uppercase tracking-widest cursor-pointer hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                {channel.contact}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3.5rem] border-4 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center text-center"
        >
          <LifeBuoy className="w-16 h-16 text-[#F97316] mb-6 animate-spin-slow" />
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Urgent Issue?</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
            For critical system failures or security concerns, our emergency team is on standby 24/7.
          </p>
          <button className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-[0.2em] text-xs">
            Emergency Contact
          </button>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
