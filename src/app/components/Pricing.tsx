import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Pricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1508026857937-8170b340e0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRyYW1hdGljJTIwbGlnaHRpbmclMjBzaGFkb3dzfGVufDF8fHx8MTc3MTMzNzE2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract lighting"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Film grain */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-8 py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8 font-light">
            Begin Your Project
          </p>

          <h2 className="text-6xl md:text-9xl font-bold text-white mb-12 tracking-tight leading-[0.9]">
            Let's Create
            <br />
            <span className="text-white/70">Together</span>
          </h2>

          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
              Every project is unique. Every vision deserves a custom approach.
            </p>
            <p className="text-lg text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              We work on a project basis, crafting bespoke proposals that align with your artistic goals
              and production requirements. From short experimental pieces to full-length narratives.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-32 h-[1px] bg-white/20 mx-auto mb-16"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('#home')}
              className="group relative px-16 py-6 border border-white/30 text-white text-lg font-light tracking-widest uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 group-hover:tracking-[0.25em] transition-all duration-300">
                Start a Conversation
              </span>
              {/* Light sweep on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>

            <motion.p
              className="mt-8 text-sm text-white/40 font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              Inquiries responded to within 24 hours
            </motion.p>
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