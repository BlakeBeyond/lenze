import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const useCases = [
  {
    title: 'Narrative Short Films',
    description: 'Character-driven stories. Emotional depth. Festival-ready cinema.',
    image: 'https://images.unsplash.com/photo-1636470297237-790517e3c139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGRlcHRoJTIwb2YlMjBmaWVsZCUyMGJva2VofGVufDF8fHx8MTc3MTMzNzE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Experimental Visuals',
    description: 'Abstract, surreal, non-linear. Pushing the boundaries of visual storytelling.',
    image: 'https://images.unsplash.com/photo-1765571313178-a4d56002aff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29keSUyMGF0bW9zcGhlcmljJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMjY3NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Brand Cinema',
    description: 'Elevated commercial storytelling. Artful, memorable, emotionally resonant.',
    image: 'https://images.unsplash.com/photo-1761646062390-4189372086f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB3aWRlJTIwYW5nbGUlMjBkcmFtYXRpY3xlbnwxfHx8fDE3NzEzMzcxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Concept Proofs',
    description: 'Visualize ideas before production. Pre-vis that feels like finished film.',
    image: 'https://images.unsplash.com/photo-1603133464688-30087c2c6ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkYXJrJTIwbW9vZHklMjBmaWxtJTIwc2NlbmV8ZW58MXx8fHwxNzcxMzM3MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function UseCases() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="use-cases"
      ref={ref}
      className="relative py-40 bg-black overflow-hidden"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
            Selected Work
          </p>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
            Our
            <br />
            <span className="text-white/60">Portfolio</span>
          </h2>
        </motion.div>

        {/* Asymmetric grid layout */}
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:h-[600px]' : 'h-[500px]'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Film grain */}
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
                    {useCase.title}
                  </h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed max-w-2xl">
                    {useCase.description}
                  </p>
                </motion.div>

                {/* Play button indicator */}
                <motion.div
                  className="absolute top-10 right-10 w-16 h-16 border border-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3L16 10L5 17V3Z"
                      stroke="white"
                      strokeWidth="1"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Frame border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}