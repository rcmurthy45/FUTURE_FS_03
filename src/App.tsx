import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experts from './components/Experts';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-salon-dark light:bg-beige-50 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Experts />
          <Gallery />
          <Testimonials />
          <Booking />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
