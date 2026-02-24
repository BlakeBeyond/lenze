import { motion } from 'motion/react';
import { Film, Sparkles, Eye } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cards = [
  {
    icon: Film,
    title: 'AI-Driven Narratives',
    description:
      'Full-length films and short-form cinema powered by generative AI. Storytelling without compromise.',
  },
  {
    icon: Sparkles,
    title: 'Experimental Filmmaking',
    description:
      'Pushing boundaries of visual language. Abstract, surreal, and hyperreal cinematic experiences.',
  },
  {
    icon: Eye,
    title: 'Cinematic Vision',
    description:
      'Auteur-level direction. Every frame composed, lit, and graded with artistic intent.',
  },
];

export function WhatWeDo() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="what-we-do"
      ref={ref}
      className="relative py-40 bg-zinc-950 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1508026857937-8170b340e0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRyYW1hdGljJTIwbGlnaHRpbmclMjBzaGFkb3dzfGVufDF8fHx8MTc3MTMzNzE2NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
            Our Craft
          </p>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
            What We
            <br />
            <span className="text-white/60">Create</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            AI as a creative tool, not a replacement. Cinema that challenges, provokes, and transcends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative border border-white/10 p-10 hover:border-white/30 transition-all duration-300 cursor-pointer bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Icon */}
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <card.icon className="text-white/80" size={40} strokeWidth={1} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Film grain */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
}