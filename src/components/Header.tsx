import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, Sun, Moon, Menu, X } from "lucide-react";

interface HeaderProps {
  view: 'home' | 'admin' | 'workout' | 'bmi';
  setView: (view: 'home' | 'admin' | 'workout' | 'bmi') => void;
  onJoinClick: () => void;
}

export default function Header({ view, setView, onJoinClick }: HeaderProps) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsLightMode(true);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      }
      return next;
    });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950 border-b border-neutral-900 block flex justify-between items-center px-6 lg:px-10 pt-6 lg:pt-8 pb-4 transition-all duration-300">
        <div 
          className="flex flex-col cursor-pointer"
          onClick={() => {
            if (view !== 'home') {
              window.open('/?view=home', 'fitzone_home');
            }
          }}
        >
          <span className="text-brand-500 font-black text-2xl lg:text-4xl tracking-tighter leading-none">FITZONE ELITE</span>
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] opacity-60 mt-1 font-bold">Bengaluru's Premier Destination</span>
        </div>

        <nav className="flex items-center gap-6 lg:gap-8 text-[10px] lg:text-[11px] uppercase tracking-widest font-bold">
          <a 
            href="/?view=home"
            target="fitzone_home"
            onClick={(e) => { if (view === 'home') e.preventDefault(); }}
            className={`transition-colors duration-300 hidden md:block ${view === 'home' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
          >
            Home
          </a>
          <a 
            href="/?view=workout"
            target="fitzone_workout"
            onClick={(e) => { if (view === 'workout') e.preventDefault(); }}
            className={`transition-colors duration-300 hidden md:block ${view === 'workout' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
          >
            Workout Log
          </a>
          <a 
            href="/?view=bmi"
            target="fitzone_bmi"
            onClick={(e) => { if (view === 'bmi') e.preventDefault(); }}
            className={`transition-colors duration-300 hidden md:block ${view === 'bmi' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
          >
            BMI Calc
          </a>
          <a 
            href="/?view=admin"
            target="fitzone_admin"
            onClick={(e) => { if (view === 'admin') e.preventDefault(); }}
            className={`transition-colors duration-300 hidden md:block ${view === 'admin' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
          >
            Admin Panel
          </a>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
              title="Toggle Theme"
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            
            <button 
              onClick={onJoinClick}
              className="hidden lg:inline-flex items-center justify-center h-8 lg:h-9 px-4 bg-brand-500 text-black hover:bg-brand-400 transition-colors duration-300"
            >
              JOIN NOW
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] md:hidden bg-neutral-950 border-b border-neutral-900 z-40 px-6 py-4 flex flex-col gap-4 text-xs shadow-2xl uppercase tracking-widest font-bold"
          >
            <a 
              href="/?view=home"
              target="fitzone_home"
              onClick={(e) => { if (view === 'home') { e.preventDefault(); setIsMobileMenuOpen(false); } }}
              className={`block py-3 border-b border-neutral-800/50 ${view === 'home' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
            >
              Home
            </a>
            <a 
              href="/?view=workout"
              target="fitzone_workout"
              onClick={(e) => { if (view === 'workout') { e.preventDefault(); setIsMobileMenuOpen(false); } }}
              className={`block py-3 border-b border-neutral-800/50 ${view === 'workout' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
            >
              Workout Log
            </a>
            <a 
              href="/?view=bmi"
              target="fitzone_bmi"
              onClick={(e) => { if (view === 'bmi') { e.preventDefault(); setIsMobileMenuOpen(false); } }}
              className={`block py-3 border-b border-neutral-800/50 ${view === 'bmi' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
            >
              BMI Calc
            </a>
            <a 
              href="/?view=admin"
              target="fitzone_admin"
              onClick={(e) => { if (view === 'admin') { e.preventDefault(); setIsMobileMenuOpen(false); } }}
              className={`block py-3 border-b border-neutral-800/50 ${view === 'admin' ? 'text-brand-500' : 'text-neutral-400 hover:text-white'}`}
            >
              Admin Panel
            </a>
            <button 
              onClick={() => {
                onJoinClick();
                setIsMobileMenuOpen(false);
              }}
              className="mt-2 w-full py-3 bg-brand-500 text-black hover:bg-brand-400 transition-colors"
            >
              JOIN NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
