"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl border-t border-slate-200 dark:border-white/5 mt-auto">
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
  );
}
