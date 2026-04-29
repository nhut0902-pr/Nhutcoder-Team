"use client";

import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Github, ExternalLink, Star } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Giay Dep Huong Nho",
      desc: "A premium e-commerce platform for high-quality footwear, featuring a modern shopping experience and seamless checkout.",
      tags: ["React", "E-commerce", "Tailwind CSS"],
      github: "https://github.com/nhut0902-pr/giaydephuongnho",
      demo: "#",
      color: "#16A394"
    },
    {
      title: "Personal Blog",
      desc: "A minimalist, high-performance blog platform optimized for readability and SEO, built with modern static site generation.",
      tags: ["Next.js", "Contentful", "MDX"],
      github: "https://github.com/nhut0902-pr/blog",
      demo: "#",
      color: "#F97316"
    },
    {
      title: "Chat Bot AI",
      desc: "Advanced AI conversational assistant integrated with Large Language Models to provide intelligent responses and automation.",
      tags: ["Python", "OpenAI", "FastAPI"],
      github: "https://github.com/nhut0902-pr/Chat-bot-AI",
      demo: "#",
      color: "#1E3A8A"
    }
  ];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[20%] w-[700px] h-[700px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/10 rounded-full blur-[150px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 mb-8 shadow-inner">
            <span className="text-[10px] font-black text-[#1E3A8A] uppercase tracking-[0.2em]">Our Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Featured <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] via-[#F97316] to-[#1E3A8A]">Projects</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-3xl transition-all"
            >
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: project.color }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Star className="w-16 h-16 text-slate-300 dark:text-slate-700 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <div className="flex gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    <Github className="w-4 h-4" /> Source
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border border-slate-200 dark:border-slate-800 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
