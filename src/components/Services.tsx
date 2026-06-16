import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scissors, Sparkles, Star, Wind } from 'lucide-react';

const categories = [
  {
    id: 'hair',
    label: 'Hair Services',
    icon: <Scissors className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    services: [
      { name: 'Haircut & Styling', desc: 'Precision cuts tailored to your face shape and personality', price: '₹149' },
      { name: 'Hair Coloring',     desc: 'Vibrant colors and highlights using premium, gentle formulas', price: '₹99' },
      { name: 'Hair Spa',          desc: 'Deep nourishment and repair for silky, healthy hair', price: '₹299' },
      { name: 'Hair Styling',      desc: 'Party-ready or everyday looks crafted with expert hands', price: '₹99' },
    ],
  },
  {
    id: 'skin',
    label: 'Skin Care',
    icon: <Sparkles className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/3762870/pexels-photo-3762870.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    services: [
      { name: 'Facials',              desc: 'Customized facials to address your unique skin concerns', price: '₹349' },
      { name: 'Cleanup',              desc: 'Deep cleanse to remove impurities and refresh your skin', price: '₹199' },
      { name: 'Anti-Aging Treatment', desc: 'Advanced therapies to reduce fine lines and restore radiance', price: '₹649' },
      { name: 'Skin Brightening',     desc: 'Even-tone treatments for a luminous, glowing complexion', price: '₹449' },
    ],
  },
  {
    id: 'makeup',
    label: 'Makeup',
    icon: <Star className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    services: [
      { name: 'Bridal Makeup',  desc: 'Flawless bridal looks that make your special day unforgettable', price: '₹1,999' },
      { name: 'Party Makeup',   desc: 'Stunning party-ready looks for every celebration', price: '₹799' },
      { name: 'HD Makeup',      desc: 'High-definition finish perfect for photos and video', price: '₹999' },
      { name: 'Airbrush Makeup',desc: 'Flawless, long-lasting coverage with airbrush technology', price: '₹1,299' },
    ],
  },
  {
    id: 'spa',
    label: 'Spa & Wellness',
    icon: <Wind className="w-5 h-5" />,
    image: 'https://images.pexels.com/photos/3188/marketing-vintage-marketing-vintage.jpg?auto=compress&cs=tinysrgb&w=600&q=80',
    services: [
      { name: 'Body Spa',           desc: 'Full-body treatments for ultimate relaxation and rejuvenation', price: '₹999' },
      { name: 'Head Massage',       desc: 'Therapeutic scalp massage to relieve stress and tension', price: '₹249' },
      { name: 'Relaxation Therapy', desc: 'Holistic therapies to calm your mind, body, and spirit', price: '₹749' },
      { name: 'Aromatherapy',       desc: 'Healing through natural essential oils and gentle massage', price: '₹649' },
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof categories[0]['services'][0]; index: number }) {
  const scrollTo = () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group relative p-5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-beige-200 hover:border-gold-500/40 hover:bg-gold-500/5 transition-all duration-300 cursor-default"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="font-serif font-semibold text-white dark:text-white light:text-salon-warm text-base leading-tight">
          {service.name}
        </h4>
        <span className="flex-shrink-0 font-bold text-gold-400 text-sm">{service.price}</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
      <button
        onClick={scrollTo}
        className="w-full py-2 rounded-lg border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider hover:bg-gold-500/10 transition-colors duration-200"
      >
        Book Now
      </button>
    </motion.div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('hair');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const active = categories.find(c => c.id === activeTab)!;

  return (
    <section id="services" className="py-24 bg-salon-charcoal dark:bg-salon-charcoal light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-warm mb-4">
            Our <span className="italic text-gold-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Carefully curated treatments designed to bring out your natural beauty with expert precision.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gold-gradient text-white shadow-lg shadow-gold-500/30'
                  : 'border border-white/20 text-gray-400 hover:border-gold-500/40 hover:text-gold-400'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Image */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
          >
            <img
              src={active.image}
              alt={active.label}
              className="w-full h-64 lg:h-full object-cover"
            />
          </motion.div>

          {/* Service cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {active.services.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
