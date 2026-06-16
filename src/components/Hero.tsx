import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const HERO_BG = 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Aura Beauty Salon"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gold-500/15 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-gold-400 text-xs font-medium uppercase tracking-widest">Premium Beauty Experience</span>
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-4"
        >
          Aura{' '}
          <span className="italic text-gold-gradient">Beauty</span>
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Salon & Spa</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-300 mb-4"
        >
          "Enhancing Beauty, Inspiring Confidence."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover a sanctuary where luxury meets artistry. From transformative hair services and
          radiant skin care to rejuvenating spa therapies and flawless makeup — we craft experiences
          that leave you glowing inside and out.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('booking')}
            className="group relative px-8 py-4 rounded-full bg-gold-gradient text-white font-semibold text-base shadow-2xl shadow-gold-500/40 hover:shadow-gold-500/60 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>

          <button
            onClick={() => scrollTo('services')}
            className="px-8 py-4 rounded-full border-2 border-gold-500/60 text-gold-300 font-semibold text-base hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-300"
          >
            View Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { num: '5+', label: 'Years Experience' },
            { num: '2K+', label: 'Happy Clients' },
            { num: '15+', label: 'Services' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold-400">{num}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold-400/60 hover:text-gold-400 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
