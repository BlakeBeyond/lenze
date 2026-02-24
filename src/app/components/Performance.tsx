import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const metrics = [
  {
    value: 48,
    suffix: 'h',
    label: 'Turnaround',
    description: 'From concept to first cut',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Creative Control',
    description: 'Your vision, realized',
  },
  {
    value: 4,
    suffix: 'K',
    label: 'Cinema Grade',
    description: 'Festival-ready output',
  },
];

function CountUpNumber({ end, duration = 1200, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Performance() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-40 bg-zinc-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
            By the Numbers
          </p>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
            Studio
            <br />
            <span className="text-white/60">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative border border-white/10 p-12 hover:border-white/30 transition-all duration-300 bg-black/20 backdrop-blur-sm">
                {/* Number */}
                <div className="text-7xl md:text-8xl font-light text-white mb-6 tracking-tight">
                  <CountUpNumber
                    end={metric.value}
                    suffix={metric.suffix}
                  />
                </div>

                {/* Label */}
                <div className="text-xl font-light text-white/80 mb-4 tracking-wide uppercase">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-white/50 leading-relaxed font-light">
                  {metric.description}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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