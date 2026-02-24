import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Palette, Film, Zap } from 'lucide-react';
import { useInView } from './hooks/useInView';

const steps = [
  {
    number: 'I',
    icon: MessageSquare,
    title: 'Conceptual Brief',
    description:
      'Discuss vision, narrative arc, mood, aesthetic references. This is a creative conversation.',
    details:
      'We explore your artistic intent, references from cinema history, and the emotional landscape you want to create. No forms, no templates—just a dialogue between filmmakers.',
  },
  {
    number: 'II',
    icon: Palette,
    title: 'Visual Development',
    description:
      'Mood boards, concept frames, visual treatments. The look and feel of your film takes shape.',
    details:
      'Using AI-assisted tools and traditional artistic methods, we develop a visual language unique to your project. Color palettes, lighting schemes, composition strategies.',
  },
  {
    number: 'III',
    icon: Film,
    title: 'Production',
    description:
      'Generative synthesis. Every shot crafted with cinematic intent. Iterative refinement.',
    details:
      'Our AI pipeline generates footage guided by your approved visual direction. We compose, light, and grade each frame with the precision of traditional cinematography.',
  },
  {
    number: 'IV',
    icon: Zap,
    title: 'Final Delivery',
    description:
      'Color grading, sound design, final output in cinema-grade formats. Ready for any screen.',
    details:
      'The finished film is delivered in formats optimized for film festivals, theatrical exhibition, streaming platforms, or immersive installations.',
  },
];

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-40 bg-zinc-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
            Our Process
          </p>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
            How We
            <br />
            <span className="text-white/60">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() =>
                setExpandedStep(expandedStep === index ? null : index)
              }
            >
              <div
                className={`relative border border-white/10 p-10 transition-all duration-300 ${
                  expandedStep === index
                    ? 'bg-white/5 border-white/30'
                    : 'bg-black/20 hover:border-white/20 hover:bg-white/3'
                }`}
              >
                <div className="flex items-start gap-8">
                  {/* Step Number - Roman numerals */}
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 flex items-center justify-center text-3xl font-light border transition-all duration-200 ${
                      expandedStep === index
                        ? 'text-white border-white'
                        : 'text-white/40 border-white/20 group-hover:text-white/60'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className="text-white/60" size={32} strokeWidth={1} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-white mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light text-lg">
                      {step.description}
                    </p>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <p className="text-white/60 font-light leading-relaxed">
                            {step.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Expand indicator */}
                <motion.div
                  className="absolute top-10 right-10 text-white/30 text-xs uppercase tracking-widest font-light"
                  animate={{
                    opacity: expandedStep === index ? 0 : 1,
                  }}
                >
                  Expand
                </motion.div>
              </div>
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