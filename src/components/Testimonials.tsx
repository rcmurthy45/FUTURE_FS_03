import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Client',
    rating: 5,
    text: 'Amazing service and the friendliest staff I have ever encountered. The hair transformation I received was beyond my expectations. I leave feeling like a completely new person every time. Highly recommended to anyone looking for quality!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Ananya Reddy',
    role: 'Bride',
    rating: 5,
    text: 'The bridal makeup was absolutely stunning. I cried happy tears when I saw myself in the mirror. Jaswanth and the team made my wedding day extra special. The attention to detail was extraordinary and the look lasted all day!',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Meera Patel',
    role: 'Spa Client',
    rating: 5,
    text: 'The spa treatments were incredibly relaxing and rejuvenating. After a stressful work week, this was exactly what I needed. The body spa session left me feeling completely renewed. Will definitely be coming back every month!',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Kavya Nair',
    role: 'First-Time Visitor',
    rating: 5,
    text: 'I was nervous visiting for the first time but the team made me feel so comfortable and welcome. Shaik gave me the best haircut I have had in years. The atmosphere is luxurious and the results speak for themselves!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Divya Menon',
    role: 'Monthly Member',
    rating: 5,
    text: 'I have been a loyal client for over two years and the quality never drops. Every visit feels like a treat. The facials have completely transformed my skin and the team always remembers my preferences. Truly a five-star experience!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-salon-dark dark:bg-salon-dark light:bg-beige-50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-warm mb-4">
            What Our Clients <span className="italic text-gold-gradient">Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Real experiences from the people who trust us with their beauty.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${current}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative p-6 rounded-2xl border glass-card transition-all duration-300 ${
                  i === 1
                    ? 'border-gold-500/40 bg-gold-500/5 shadow-xl shadow-gold-500/10 scale-[1.02]'
                    : 'border-white/10 bg-white/5 dark:bg-white/5 light:bg-white'
                }`}
              >
                <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold-500/30" />
                  <div>
                    <p className="font-semibold text-white dark:text-white light:text-salon-warm text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-white/20 hover:bg-gold-400/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
