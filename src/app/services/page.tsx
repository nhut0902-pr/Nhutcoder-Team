"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Code2, Palette, Globe, Brain, Database, Layers } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="text-[#16A394]" />,
      title: "Web Development",
      desc: "Custom-built, high-performance web applications using the latest frameworks like Next.js and React."
    },
    {
      icon: <Brain className="text-[#F97316]" />,
      title: "AI Integration",
      desc: "Intelligent chatbots and AI-powered automation to streamline your business workflows."
    },
    {
      icon: <Layers className="text-[#16A394]" />,
      title: "3D Web Experiences",
      desc: "Immersive 3D environments and interactive visualizations using Three.js and Spline."
    },
    {
      icon: <Palette className="text-[#F97316]" />,
      title: "UI/UX Design",
      desc: "Modern, minimalist interfaces designed for clarity, impact, and exceptional user experience."
    },
    {
      icon: <Database className="text-[#16A394]" />,
      title: "E-Commerce",
      desc: "Scalable online stores with seamless payment integrations and optimized conversion paths."
    },
    {
      icon: <Code2 className="text-[#F97316]" />,
      title: "Cloud Solutions",
      desc: "Reliable hosting and cloud infrastructure setup for high availability and performance."
    }
  ];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#16A394]/10 dark:bg-[#16A394]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#F97316]/5 dark:bg-[#F97316]/5 rounded-full blur-[150px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 mb-8 shadow-inner">
            <span className="text-[10px] font-black text-[#F97316] uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Services & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#16A394]">Expertise</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
            We provide comprehensive digital solutions that blend cutting-edge technology with award-winning design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-[#16A394]/10 hover:border-[#16A394]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 group-hover:bg-[#16A394] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-[#16A394] transition-colors">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
