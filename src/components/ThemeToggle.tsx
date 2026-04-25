"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center opacity-0">
        <Sun size={18} />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#16A394] hover:border-[#16A394]/40 transition-all cursor-pointer group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="group-hover:scale-110 transition-transform" />
      ) : (
        <Moon size={18} className="group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
