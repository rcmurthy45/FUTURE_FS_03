import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Scissors, Sparkles, Building2, Heart } from 'lucide-react';

interface GalleryItem {
  src: string;
  label: string;
  caption: string;
  tag: string;
  icon: React.ReactNode;
  colSpan?: string;
  rowSpan?: string;
}

const items: GalleryItem[] = [
  {
    src: '/menso.png',
    label: 'Hair Style Lookbook',
    caption: 'Modern cuts for every face shape',
    tag: 'Hair',
    icon: <Scissors className="w-3.5 h-3.5" />,
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
  },
  {
    src: '/spaa.jpg',
    label: 'Spa Massage',
    caption: 'Therapeutic body massage for deep relaxation',
    tag: 'Spa',
    icon: <Heart className="w-3.5 h-3.5" />,
  },
  {
    src: '/spa1.jpg',
    label: 'Luxury Spa Suite',
    caption: 'Serene treatment rooms designed for you',
    tag: 'Spa',
    icon: <Heart className="w-3.5 h-3.5" />,
  },
  {
    src: '/saloon2.jpg',
    label: 'Premium Salon',
    caption: 'World-class styling stations & ambiance',
    tag: 'Salon',
    icon: <Building2 className="w-3.5 h-3.5" />,
  },
  {
    src: '/makeup.jpeg',
    label: 'Makeup Artistry',
    caption: 'Professional makeup by certified artists',
    tag: 'Makeup',
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
];

const tagColors: Record<string, string> = {
  Hair:   'from-gold-600 to-gold-400',
  Spa:    'from-teal-600 to-teal-400',
  Salon:  'from-amber-600 to-amber-400',
  Makeup: 'from-rose-600 to-pink-400',
};

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-salon-charcoal dark:bg-salon-charcoal light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-dark mb-4">
            Beauty <span className="italic text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Trending hair looks, therapeutic spa sessions, flawless makeup and our premium salon — all in one place.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 lg:h-[580px]">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={[
                'group relative overflow-hidden rounded-2xl cursor-pointer',
                'shadow-xl shadow-black/50',
                'sm:h-[260px] lg:h-auto',
                item.colSpan ?? '',
                item.rowSpan ?? '',
              ].join(' ')}
              onClick={() => setLightbox(item)}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                style={{ minHeight: '200px' }}
              />

              {/* Persistent subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag badge */}
              <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${tagColors[item.tag]} shadow-lg`}>
                <span className="text-white">{item.icon}</span>
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">{item.tag}</span>
              </div>

              {/* Zoom icon */}
              <motion.div
                initial={false}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ZoomIn className="w-4 h-4 text-white" />
              </motion.div>

              {/* Label — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <p className="font-serif text-white font-semibold text-base leading-snug drop-shadow">{item.label}</p>
                <p className="text-gray-300 text-xs mt-0.5 drop-shadow">{item.caption}</p>
              </div>

              {/* Permanent bottom label for big images */}
              {(item.colSpan || item.rowSpan) && (
                <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-200">
                  <p className="font-serif text-white/80 font-semibold text-sm drop-shadow">{item.label}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white hover:bg-gold-600/70 transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col items-center gap-4 max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="max-h-[78vh] w-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${tagColors[lightbox.tag]} mb-2`}>
                  <span className="text-white">{lightbox.icon}</span>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">{lightbox.tag}</span>
                </div>
                <p className="font-serif text-white text-xl font-semibold">{lightbox.label}</p>
                <p className="text-gray-400 text-sm mt-1">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
