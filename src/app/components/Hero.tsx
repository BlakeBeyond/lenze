import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Cinematic background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1603133464688-30087c2c6ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkYXJrJTIwbW9vZHklMjBmaWxtJTIwc2NlbmV8ZW58MXx8fHwxNzcxMzM3MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cinematic scene"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Film grain overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-left w-full pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtitle - film credit style */}
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-white/50 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            A Zenith Agents Production
          </motion.p>

          {/* Main title - cinematic poster style */}
          <h1 className="text-7xl md:text-[140px] font-bold text-white mb-8 tracking-tight leading-[0.9] max-w-5xl">
            AI Cinema.
            <br />
            <span className="text-white/70">Redefined.</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-3xl leading-relaxed font-light tracking-wide">
            We craft AI-powered films, cinematic narratives, and visual experiences
            <br className="hidden md:block" />
            that blur the line between technology and artistry.
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('#pricing')}
              className="px-10 py-4 bg-white text-black font-light tracking-widest uppercase text-sm hover:bg-white/90 transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start a Project</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#use-cases')}
              className="px-10 py-4 border border-white/30 text-white font-light tracking-widest uppercase text-sm hover:bg-white/5 hover:border-white/50 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="group-hover:tracking-[0.25em] transition-all duration-300">View Work</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - cinematic style */}
        <motion.div
          className="absolute bottom-12 left-8 flex flex-col items-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase rotate-90 origin-center mt-8">
              Scroll
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Light sweep effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}