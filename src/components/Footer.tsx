import { Instagram, Facebook, Twitter, Youtube, Sparkles } from 'lucide-react';

const quickLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About Us',     href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Our Experts',  href: '#experts' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Book Now',     href: '#booking' },
];

const services = [
  'Hair Services',
  'Skin Care',
  'Makeup',
  'Spa & Wellness',
  'Bridal Packages',
  'Men\'s Grooming',
];

const socials = [
  { icon: <Instagram className="w-4 h-4" />, href: '#' },
  { icon: <Facebook className="w-4 h-4" />,  href: '#' },
  { icon: <Twitter className="w-4 h-4" />,   href: '#' },
  { icon: <Youtube className="w-4 h-4" />,   href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gold-500/20">
      {/* CTA strip */}
      <div className="bg-gold-gradient py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Experience True Luxury?
          </h3>
          <p className="text-white/80 mb-6 text-sm">
            Book your appointment today and let us unveil the best version of you.
          </p>
          <button
            onClick={() => scrollTo('#booking')}
            className="px-8 py-3 rounded-full bg-white text-gold-600 font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-serif font-bold text-gold-gradient text-lg leading-none">AURA</p>
                <p className="text-[9px] uppercase tracking-[0.18em] text-gold-400/70">Beauty Salon & Spa</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Your premier destination for luxury beauty and wellness. Where every visit is a celebration of you.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-gray-500 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-gray-500 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">123 Beauty Boulevard<br />Hyderabad, TS 500001</li>
              <li>
                <a href="tel:+919876543210" className="text-gray-500 text-sm hover:text-gold-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@aurasalon.in" className="text-gray-500 text-sm hover:text-gold-400 transition-colors">
                  hello@aurasalon.in
                </a>
              </li>
              <li className="text-gray-500 text-sm">Mon–Sat: 9 AM – 8 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Aura Beauty Salon & Spa. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed with <span className="text-gold-400">love</span> for beauty & wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
