import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/ac70afa67a34ec2966bbafaddb464bfc40e531bb.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Studio', href: '#home' },
    { label: 'Craft', href: '#what-we-do' },
    { label: 'Vision', href: '#why-lenzeculture' },
    { label: 'Founders', href: '#founders' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Work', href: '#use-cases' },
    { label: 'Contact', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
      }}
      animate={{
        borderBottomColor: scrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logo} alt="Lenzé" className="h-7 w-auto brightness-0 invert opacity-90" />
            <div className="flex flex-col items-start -space-y-1">
              <span className="text-lg font-light tracking-[0.3em] text-white/90 uppercase">
                Lenzé
              </span>
              <span className="text-[10px] font-light tracking-[0.4em] text-white/50 uppercase">
                Film Studio
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-white/60 hover:text-white relative group transition-colors duration-200 tracking-wider uppercase font-light"
                whileHover={{ y: -1 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-white/80"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#pricing')}
              className="px-6 py-2.5 border border-white/20 text-white text-sm font-light tracking-wider uppercase hover:bg-white/10 transition-all duration-200"
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Inquire
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="px-8 py-8 flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-white/60 hover:text-white transition-colors uppercase tracking-wider text-sm font-light"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#pricing')}
              className="px-6 py-3 border border-white/20 text-white font-light tracking-wider uppercase hover:bg-white/10 transition-all text-center"
            >
              Inquire
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}