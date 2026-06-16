import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Our Experts',  href: '#experts' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');
  const { theme, toggleTheme }    = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-salon-dark/95 dark:bg-salon-dark/95 light:bg-white/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => handleNav('#home')} className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="leading-none">
                <span className="font-serif font-bold text-lg text-gold-gradient tracking-wide">AURA</span>
                <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gold-400/80">Beauty Salon & Spa</p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? 'text-gold-400'
                      : 'text-gray-300 hover:text-gold-400 dark:text-gray-300 dark:hover:text-gold-400'
                  }`}
                >
                  {link.label}
                  {active === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-500"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-300 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleNav('#booking')}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-white text-sm font-semibold shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-105 transition-all duration-200"
              >
                Book Now
              </button>

              <button
                onClick={() => setMenuOpen(v => !v)}
                className="lg:hidden p-2 rounded-full text-gray-300 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-salon-dark/98 backdrop-blur-md border-b border-gold-500/20 lg:hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className={`py-3 text-left text-base font-medium border-b border-white/5 transition-colors ${
                    active === link.href.slice(1) ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNav('#booking')}
                className="mt-4 py-3 rounded-full bg-gold-gradient text-white font-semibold text-center"
              >
                Book Appointment
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
