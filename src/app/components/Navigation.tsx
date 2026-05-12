import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import keimarLogo from '../../imports/KeimarLogo.png';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <img src={keimarLogo} alt="Keimar" className="h-12 w-auto" />
        </motion.button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#1a1a1a] hover:text-[#b88888] transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-[#1a1a1a] hover:text-[#b88888] transition-colors duration-200"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-[#d4a5a5] text-white hover:bg-[#b88888] transition-colors duration-200 rounded-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
