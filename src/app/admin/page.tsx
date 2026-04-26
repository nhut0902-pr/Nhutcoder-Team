"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Lock, History, User, LogOut, ChevronRight, Mail, MessageSquare, Clock } from 'lucide-react';

type Feedback = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsLoggedIn(true);
        fetchFeedbacks();
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch('/api/admin/feedback/');
      if (res.ok) {
        const data = await res.json();
        setFeedbacks(data);
      }
    } catch (err) {
      console.error('Failed to fetch feedbacks');
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#16A394]/10 flex items-center justify-center mb-4">
                <Lock className="text-[#16A394]" />
              </div>
              <h1 className="text-3xl font-black uppercase tracking-tighter">Admin Portal</h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Username</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-[#16A394] outline-none transition-all font-medium"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-[#16A394] outline-none transition-all font-medium"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-[10px] font-bold uppercase text-center tracking-widest">{error}</p>}

              <button
                disabled={loading}
                className="w-full py-5 bg-[#16A394] text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#16A394]/20 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Sign In'} <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 md:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A394]/10 border border-[#16A394]/20 mb-6 shadow-inner">
              <span className="text-[10px] font-black text-[#16A394] uppercase tracking-[0.2em]">Dashboard</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter uppercase">Admin Panel</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total Responses</p>
                <p className="text-2xl font-black text-[#16A394] leading-none">{feedbacks.length}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#16A394]/10 flex items-center justify-center">
                <History className="text-[#16A394] w-5 h-5" />
              </div>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all shadow-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {feedbacks.length === 0 ? (
            <div className="p-20 text-center border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[3rem]">
              <History className="w-16 h-16 text-slate-200 dark:text-slate-800 mx-auto mb-6" />
              <p className="text-slate-400 font-bold uppercase tracking-widest">No feedback records found.</p>
            </div>
          ) : (
            feedbacks.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-start hover:border-[#16A394]/30 transition-all"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                      <User size={14} className="text-[#16A394]" />
                      <span className="text-xs font-black uppercase tracking-tight">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                      <Mail size={14} className="text-[#F97316]" />
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.email}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                      <Clock size={14} className="text-[#1E3A8A]" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {new Date(item.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                    <div className="flex gap-4 items-start">
                       <MessageSquare size={18} className="text-[#16A394] mt-1 shrink-0" />
                       <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic">
                         "{item.message}"
                       </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
