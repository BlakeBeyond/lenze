import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import foundersImage from '@/assets/55e42891c8331ba53990faeafbbd282aa4494977.png';

const founders = [
  {
    name: 'Martyna Uliasz',
    title: 'AI Strategist',
    bio: 'With a background in neurocognitive science and over eight years in technology consulting and enterprise IT, she has led complex digital initiatives that connect business strategy with scalable AI systems. As a Women in Tech ambassador, she actively supports greater representation and leadership of women in emerging technologies. Combining cognitive science, consulting expertise, and applied AI execution, she helps organizations adopt intelligent agents that enhance decision-making, optimize operations, and unlock new growth opportunities.',
  },
  {
    name: 'Blake Lezenski',
    title: 'AI & Web3 VC',
    bio: 'As the Head of Advisory at Outlier Ventures, he has led the execution of multiple accelerators, including two editions of FARFETCH Dream Assembly Base Camp. Having successfully guided 40 startups across 5 cohorts, he is an expert in immersive commerce and the adoption of AI Agents & Web3 across various industries. Deeply embedded in the global technology ecosystem and executive advisor to numerous founders, he matches the needs of fashion brands, corporates, and foundations with the best startups to help them build technology ecosystems.',
  },
];

export function Founders() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="founders"
      ref={ref}
      className="relative py-40 bg-zinc-950 overflow-hidden"
    >
      {/* Film grain */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-light">
            The Visionaries
          </p>
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.9]">
            Founded
            <br />
            <span className="text-white/60">By</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <img
                src={foundersImage}
                alt="Martyna Uliasz and Blake Lezenski"
                className="w-full h-full object-cover"
              />
              {/* Film grain overlay on image */}
              <div 
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Image caption - film style */}
            <motion.div
              className="mt-6 pl-4 border-l-2 border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-white/50 text-sm font-light italic leading-relaxed">
                Martyna Uliasz & Blake Lezenski
                <br />
                Co-Founders, Lenzé Film Studio
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Bios */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.2,
                }}
              >
                {/* Name & Title */}
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide">
                    {founder.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50 font-light">
                    {founder.title}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-white/60 leading-relaxed font-light text-lg">
                  {founder.bio}
                </p>

                {/* Decorative line */}
                {index === 0 && (
                  <div className="absolute -bottom-8 left-0 w-16 h-[1px] bg-white/20" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote section - editorial style */}
        <motion.div
          className="mt-32 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="border-t border-b border-white/10 py-12">
            <p className="text-2xl md:text-3xl text-white/80 font-light italic leading-relaxed">
              "We believe AI is not replacing creativity—
              <br className="hidden md:block" />
              it's unlocking new forms of artistic expression."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Light sweep effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent pointer-events-none"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 10,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
