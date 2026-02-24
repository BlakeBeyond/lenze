import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    title: 'Artistic Vision',
    description:
      'Every project guided by cinematic principles. Not templates, not algorithms alone—true artistic direction.',
    highlight: 'Direction-first',
  },
  {
    title: 'Technical Mastery',
    description:
      'Leveraging cutting-edge AI models trained on cinema history. Tools that serve the vision, not dictate it.',
    highlight: 'AI-powered',
  },
  {
    title: 'Infinite Iteration',
    description:
      'Explore unlimited creative directions. Refine until perfection. No budget constraints on imagination.',
    highlight: 'Boundless creativity',
  },
  {
    title: 'Speed & Scale',
    description:
      'What takes months in traditional production, we achieve in days. Without sacrificing quality.',
    highlight: 'Fast execution',
  },
];

export function WhyLenzeculture() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="why-lenzeculture"
      ref={ref}
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* Split layout: Text left, Image right */}
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
              Our Vision
            </p>
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-tight leading-[0.9]">
              Why
              <br />
              <span className="text-white/60">Lenzé</span>
            </h2>

            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative pl-8 border-l border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2 font-light">
                    {feature.highlight}
                  </p>
                  <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cinematic image */}
          <motion.div
            className="relative h-[800px] md:h-screen"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative h-full overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767823608836-980209ad69ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbm9pciUyMGRyYW1hdGljJTIwc2lsaG91ZXR0ZXxlbnwxfHx8fDE3NzEzMzcxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dramatic silhouette"
                className="w-full h-full object-cover"
              />
              {/* Film grain */}
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black/50" />

              {/* Frame borders - cinema aspect ratio feel */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
            </div>

            {/* Floating caption - film subtitle style */}
            <motion.div
              className="absolute bottom-12 left-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <p className="text-white/70 text-sm font-light italic leading-relaxed border-l-2 border-white/30 pl-4">
                "Technology in service of art. AI as the brush, cinema as the canvas."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Light sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent pointer-events-none"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}