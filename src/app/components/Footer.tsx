import { motion } from 'motion/react';
import logo from '../../assets/ac70afa67a34ec2966bbafaddb464bfc40e531bb.png';

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Studio', href: '#home' },
    { label: 'Craft', href: '#what-we-do' },
    { label: 'Vision', href: '#why-lenzeculture' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Work', href: '#use-cases' },
    { label: 'Contact', href: '#pricing' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 py-20 overflow-hidden">
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ opacity: 0.8 }}
            >
              <img
                src={logo}
                alt="Lenzé"
                className="h-8 w-auto brightness-0 invert opacity-90"
              />
              <div className="flex flex-col items-start -space-y-1">
                <span className="text-lg font-light tracking-[0.3em] text-white/90 uppercase">
                  Lenzé
                </span>
                <span className="text-[10px] font-light tracking-[0.4em] text-white/50 uppercase">
                  Film Studio
                </span>
              </div>
            </motion.div>
            <p className="text-white/50 mb-6 font-light leading-relaxed">
              AI-powered cinema.
              <br />
              Where technology serves art.
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs text-white/40 font-light tracking-wider">
                A{' '}
                <span className="text-white/60">Zenith Agents</span>
                {' '}Production
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/80 font-light mb-6 tracking-widest uppercase text-sm">
              Navigation
            </h4>
            <nav className="space-y-3">
              {links.slice(0, 3).map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/50 hover:text-white transition-colors text-left font-light"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white/80 font-light mb-6 tracking-widest uppercase text-sm">
              More
            </h4>
            <nav className="space-y-3">
              {links.slice(3).map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/50 hover:text-white transition-colors text-left font-light"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm font-light">
              © {new Date().getFullYear()} Lenzé Film Studio. All rights reserved.
            </p>
            <p className="text-white/40 text-sm font-light tracking-wider">
              Redefining cinema through AI
            </p>
          </div>
        </div>
      </div>

      {/* Subtle glow at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  );
}