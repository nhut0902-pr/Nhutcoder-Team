"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Users, Target, Rocket, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: <Target className="text-[#16A394]" />, title: 'Innovation', desc: 'We push the boundaries of what is possible in digital experiences.' },
    { icon: <Users className="text-[#F97316]" />, title: 'Collaboration', desc: 'Working together with our clients to achieve shared goals.' },
    { icon: <Rocket className="text-[#16A394]" />, title: 'Excellence', desc: 'Delivering top-tier quality in every line of code we write.' },
    { icon: <Heart className="text-[#F97316]" />, title: 'Passion', desc: 'Driven by our love for technology and creative design.' },
  ];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#16A394]/10 dark:bg-[#16A394]/10 rounded-full blur-[150px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A394]/10 border border-[#16A394]/20 mb-8 shadow-inner">
            <span className="text-[10px] font-black text-[#16A394] uppercase tracking-[0.2em]">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Who We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] to-[#F97316]">Are</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Nhutcoder Team is a collective of visionary developers and designers dedicated to crafting the future of the web.
            Founded on the principles of innovation and excellence, we specialize in high-performance web applications
            and immersive 3D experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 hover:border-[#16A394]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{value.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-[#16A394] to-[#1E3A8A] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Let's build something extraordinary together.</h2>
            <p className="text-white/80 text-lg mb-8">We're always looking for new challenges and exciting projects to work on.</p>
            <button className="px-8 py-4 bg-white text-[#16A394] font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm">
              Work with us
            </button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
