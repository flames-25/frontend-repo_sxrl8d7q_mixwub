import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/generator', label: 'Generator' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const { theme, toggle } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#05050A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0A0A0F] via-[#06060C] to-[#05050A]" />
      <div className="pointer-events-none absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(79,140,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,140,255,0.08) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />

      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00F6FF] via-[#4F8CFF] to-[#9A6BFF] shadow-[0_0_40px_rgba(79,140,255,0.6)]" />
            <span className="font-semibold tracking-wide">Astra by AriseLabs</span>
          </div>
          <div className="hidden md:flex items-center gap-1 rounded-xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 p-1 border border-white/10">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} className={({isActive})=>`px-4 py-2 rounded-lg transition ${isActive? 'bg-[#0F172A] text-cyan-300 shadow-[0_0_20px_rgba(0,246,255,0.35)]' : 'text-white/80 hover:bg-white/10'}`}>
                {n.label}
              </NavLink>
            ))}
          </div>
          <button onClick={toggle} className="rounded-lg p-2 bg-white/5 border border-white/10 hover:bg-white/10 transition shadow-[0_0_20px_rgba(154,107,255,0.25)]">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 mt-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[#9A6BFF]" size={18} />
            <span>© {new Date().getFullYear()} AriseLabs. All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-sm">
            <a className="hover:text-white transition" href="#">Twitter</a>
            <a className="hover:text-white transition" href="#">GitHub</a>
            <a className="hover:text-white transition" href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
