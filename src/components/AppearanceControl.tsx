import { useState, useEffect, useRef, useCallback } from 'react';
import { Moon, Sun, Check } from 'lucide-react';
import { THEME_OPTIONS, type ThemeMode } from '../types/theme';

export { THEME_OPTIONS, type ThemeMode };

interface AppearanceControlProps {
  onThemeChange?: (theme: ThemeMode) => void;
}

export const AppearanceControl = ({ onThemeChange }: AppearanceControlProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('siva_portfolio_theme') as ThemeMode | null;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'dark';
  });
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('siva_portfolio_theme', currentTheme);
    if (onThemeChange) {
      onThemeChange(currentTheme);
    }
  }, [currentTheme, onThemeChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const applyTheme = useCallback((theme: ThemeMode) => {
    setCurrentTheme(theme);
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      {/* Quick 1-Click Toggle with Dropdown option on right click or indicator */}
      <div className="flex items-center rounded-xl bg-slate-900/80 dark:bg-[#101424] border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-sm overflow-hidden">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white light:text-slate-700 light:hover:text-slate-900 hover:bg-white/[0.05] transition-all cursor-pointer font-sans group"
          title={`Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Theme"
        >
          {currentTheme === 'dark' ? (
            <>
              <Moon className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[11px] text-slate-300 hidden sm:inline">Dark</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-45 transition-transform" />
              <span className="font-mono text-[11px] text-slate-700 hidden sm:inline">Light</span>
            </>
          )}
        </button>

        {/* Small dropdown chevron trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-1.5 py-1.5 border-l border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
          title="Theme Options"
          aria-label="Open Theme Menu"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        </button>
      </div>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-[#0D101C]/95 dark:bg-[#0D101C]/95 light:bg-white/95 backdrop-blur-2xl border border-white/10 dark:border-white/10 light:border-slate-200 shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 text-slate-200 light:text-slate-800">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-100">
            <span className="text-xs font-bold font-sans tracking-tight">Select Theme</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-1.5 py-0.5 rounded bg-white/[0.04]">
              {currentTheme.toUpperCase()}
            </span>
          </div>

          <div className="space-y-1.5">
            {THEME_OPTIONS.map((theme) => {
              const isSelected = currentTheme === theme.id;
              const Icon = theme.id === 'dark' ? Moon : Sun;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    applyTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/40 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                      : 'bg-white/[0.02] border-transparent hover:bg-white/[0.05] hover:border-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner"
                      style={{ backgroundColor: theme.bg }}
                    >
                      <Icon className={`w-3.5 h-3.5 ${theme.id === 'dark' ? 'text-indigo-400' : 'text-amber-500'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold font-sans">
                          {theme.name}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-slate-400">
                          {theme.tag}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                        {theme.desc}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-indigo-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
