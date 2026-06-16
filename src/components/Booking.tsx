import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const services = [
  'Haircut & Styling',
  'Hair Coloring',
  'Hair Spa',
  'Facial',
  'Cleanup',
  'Bridal Makeup',
  'Party Makeup',
  'Body Spa',
  'Head Massage',
  'Relaxation Therapy',
  'Anti-Aging Treatment',
  'HD Makeup',
];

const times = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const empty: FormState = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' };

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const fieldClass = `w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white dark:text-white light:text-salon-warm placeholder:text-gray-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-200 text-sm`;
  const selectClass = `w-full px-4 py-3 rounded-xl bg-[#0c1f30] border border-white/15 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-200 text-sm`;

  return (
    <section id="booking" className="py-24 bg-salon-charcoal dark:bg-salon-charcoal light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Reservations</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white dark:text-white light:text-salon-warm leading-tight mb-6">
              Book Your <span className="italic text-gold-gradient">Appointment</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Reserve your spot at Aura Beauty Salon & Spa and let us craft the perfect experience just for you. Our experts are ready to welcome you.
            </p>

            {/* Why us */}
            <div className="space-y-4">
              {[
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Flexible scheduling to fit your lifestyle' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Personalized consultation with every appointment' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Premium products and expert-certified staff' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Comfortable, hygienic, luxury environment' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-300">
                  <span className="text-gold-400 flex-shrink-0">{icon}</span>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Decorative image with overlay */}
            <div className="mt-10 rounded-2xl overflow-hidden h-56 shadow-2xl shadow-black/50 relative group">
              <img
                src="https://images.pexels.com/photos/5069421/pexels-photo-5069421.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="Salon consultation and appointment"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/80 via-salon-dark/30 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-1">Reserve Your Spot</p>
                <p className="font-serif text-white text-lg font-bold leading-tight">Your transformation<br />awaits you.</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative p-8 rounded-2xl border border-white/10 bg-white/5 glass-card shadow-2xl shadow-black/30"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gold-500/40">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Appointment Confirmed!</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Thank you, {form.name || 'dear client'}! We have received your booking request and will contact you shortly to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(empty); }}
                  className="px-6 py-3 rounded-full bg-gold-gradient text-white text-sm font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-200"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-white mb-6">Your Details</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    <input
                      type="text" name="name" required
                      placeholder="Your Name"
                      value={form.name} onChange={handleChange}
                      className={`${fieldClass} pl-10`}
                    />
                  </label>
                  <label className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    <input
                      type="tel" name="phone" required
                      placeholder="Phone Number"
                      value={form.phone} onChange={handleChange}
                      className={`${fieldClass} pl-10`}
                    />
                  </label>
                </div>

                <label className="relative block">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                  <input
                    type="email" name="email" required
                    placeholder="Email Address"
                    value={form.email} onChange={handleChange}
                    className={`${fieldClass} pl-10`}
                  />
                </label>

                <select
                  name="service" required
                  value={form.service} onChange={handleChange}
                  className={`${selectClass} appearance-none`}
                >
                  <option value="" disabled style={{ color: '#9ca3af' }}>Select a Service</option>
                  {services.map(s => (
                    <option key={s} value={s} style={{ backgroundColor: '#0c1f30', color: '#ffffff' }}>{s}</option>
                  ))}
                </select>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    <input
                      type="date" name="date" required
                      min={new Date().toISOString().split('T')[0]}
                      value={form.date} onChange={handleChange}
                      className={`${fieldClass} pl-10`}
                    />
                  </label>
                  <label className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    <select
                      name="time" required
                      value={form.time} onChange={handleChange}
                      className={`${selectClass} pl-10 appearance-none`}
                    >
                      <option value="" disabled style={{ color: '#9ca3af' }}>Preferred Time</option>
                      {times.map(t => (
                        <option key={t} value={t} style={{ backgroundColor: '#0c1f30', color: '#ffffff' }}>{t}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="relative block">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                  <textarea
                    name="message"
                    placeholder="Additional notes (optional)"
                    rows={3}
                    value={form.message} onChange={handleChange}
                    className={`${fieldClass} pl-10 resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold-gradient text-white font-semibold text-sm shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}>
                      <Send className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? 'Booking...' : 'Book Appointment'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
