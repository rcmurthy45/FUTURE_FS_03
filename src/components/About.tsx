import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const ABOUT_IMG = 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800&q=80';
const ABOUT_IMG2 = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&q=80';

const pillars = [
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Excellence',
    desc: 'Every treatment is performed with precision and passion.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Care',
    desc: 'Your comfort and satisfaction are our highest priority.',
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: 'Natural',
    desc: 'Premium, skin-friendly products for lasting results.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Community',
    desc: 'Building lasting relationships with every client.',
  },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-salon-dark dark:bg-salon-dark light:bg-beige-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <AnimatedSection className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <img src={ABOUT_IMG} alt="Aura Salon Interior" className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating second image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-56 md:h-56 z-20 rounded-xl overflow-hidden shadow-2xl border-4 border-salon-dark">
                <img src={ABOUT_IMG2} alt="Salon detail" className="w-full h-full object-cover" />
              </div>
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 z-20 w-24 h-24 rounded-full bg-gold-gradient flex flex-col items-center justify-center shadow-xl shadow-gold-500/40">
                <span className="font-serif font-bold text-white text-2xl leading-none">5+</span>
                <span className="text-white text-[10px] font-medium text-center leading-tight mt-0.5">Years of<br />Excellence</span>
              </div>
            </div>
            {/* Decorative gold line */}
            <div className="absolute top-1/2 -left-4 w-2 h-32 rounded-full opacity-70" style={{ background: 'linear-gradient(180deg, #f59e0b 0%, #14b8a6 100%)' }} />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-warm leading-tight mb-6">
              Where Beauty Meets{' '}
              <span className="italic text-gold-gradient">Artistry</span>
            </h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-5">
              Nestled in the heart of the city, Aura Beauty Salon & Spa is your premier destination
              for luxury beauty and wellness services. Since our founding, we have transformed
              thousands of lives through our expert artistry and unwavering commitment to quality.
            </p>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-8">
              Our philosophy is simple: every client deserves to leave feeling more beautiful,
              confident, and refreshed than when they arrived. We combine cutting-edge techniques
              with time-honored traditions to deliver results that exceed expectations.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/25 hover:border-gold-500/50 transition-colors">
                <h4 className="font-serif font-bold text-gold-400 mb-2">Our Mission</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To deliver exceptional beauty experiences that enhance natural beauty and restore confidence.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/25 hover:border-teal-500/50 transition-colors">
                <h4 className="font-serif font-bold text-teal-400 mb-2">Our Vision</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To be the most trusted and celebrated salon in the region, known for transformative results.
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold-500/15 border border-gold-500/25 flex items-center justify-center text-gold-400">
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white dark:text-white light:text-salon-warm text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
