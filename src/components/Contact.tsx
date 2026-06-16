import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const info = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 91234 56789'],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email Us',
    lines: ['hello@aurasalon.in', 'bookings@aurasalon.in'],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Opening Hours',
    lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 6:00 PM'],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 bg-salon-dark dark:bg-salon-dark light:bg-beige-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-warm mb-4">
            Contact <span className="italic text-gold-gradient">Aura</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            We would love to hear from you. Give us a call or drop us a message anytime.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {info.map(({ icon, title, lines }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/25 flex items-center justify-center text-gold-400">
                {icon}
              </div>
              <div>
                <h4 className="font-semibold text-white dark:text-white light:text-salon-warm text-sm mb-2">{title}</h4>
                {lines.map(line => (
                  <p key={line} className="text-gray-400 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
