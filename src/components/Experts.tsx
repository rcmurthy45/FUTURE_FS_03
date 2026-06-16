import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';

const experts = [
  {
    name: 'Jaswanth Guptha',
    role: 'Spa & Wellness Expert',
    exp: '4+ Years',
    image: '/ChatGPT_Image_Jun_14,_2026,_12_22_25_AM.png',
    quote: 'Expert in spa therapies, relaxation techniques, wellness treatments, and client care.',
    skills: ['Spa Therapy', 'Wellness Treatments', 'Relaxation Techniques', 'Customer Care'],
    badge: 'Wellness',
    color: 'from-teal-900/40 to-salon-dark/80',
  },
  {
    name: 'Shaik Subhani',
    role: 'Hair & Styling Specialist',
    exp: '5+ Years',
    image: '/ChatGPT_Image_Jun_14,_2026,_12_07_45_AM.png',
    quote: 'Specializes in modern haircuts, hair treatments, hair coloring, and personalized styling.',
    skills: ['Hair Styling', 'Hair Coloring', 'Hair Treatments', "Men's Grooming"],
    badge: 'Styling',
    color: 'from-amber-900/40 to-salon-dark/80',
  },
];

export default function Experts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const scrollTo = () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="experts" className="py-24 bg-salon-dark dark:bg-salon-dark light:bg-beige-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">The Team</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-warm mb-4">
            Meet Our <span className="italic text-gold-gradient">Experts</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Our talented professionals bring passion, precision, and years of expertise to every appointment.
          </p>
        </motion.div>

        {/* Expert cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 hover:border-gold-500/30 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-96 sm:h-[440px] overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${expert.color} opacity-80`} />

                {/* Experience badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-gradient text-white text-xs font-bold shadow-lg">
                  {expert.exp}
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-1">{expert.role}</p>
                  <h3 className="font-serif text-2xl font-bold text-white">{expert.name}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="bg-salon-charcoal dark:bg-salon-charcoal light:bg-white p-6">
                <p className="text-gray-400 text-sm leading-relaxed italic mb-5">
                  "{expert.quote}"
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {expert.skills.map(skill => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social + CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={scrollTo}
                    className="px-5 py-2 rounded-full bg-gold-gradient text-white text-xs font-semibold hover:shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all duration-200"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
