import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particlePositions, setParticlePositions] = useState<Array<{ x: number[], y: number[] }>>([]);

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityValue = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate particle positions only on client side
    setParticlePositions(
      [...Array(20)].map(() => ({
        x: [
          Math.random() * window.innerWidth,
          Math.random() * window.innerWidth
        ],
        y: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight
        ]
      }))
    );
  }, []);

  const words = [
    'Customer Experience',
    'Agent Productivity',
    'Business Growth',
    'Customer Satisfaction'
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-altanon-darker"
    >
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/images/new-back.jpg")',
          y: backgroundY,
          opacity: opacityValue
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-altanon-darker via-altanon-darker/50 to-altanon-darker z-[1]" />

      {/* Interactive Particles */}
      <div className="absolute inset-0 z-[2]">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-altanon-primary/30 rounded-full"
            animate={{
              x: pos.x,
              y: pos.y,
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 rounded-full bg-altanon-primary/10 border border-altanon-primary/20 text-altanon-primary text-sm font-medium">
                Powered by Advanced AI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="block bg-gradient-to-r from-altanon-primary via-altanon-secondary to-altanon-accent bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block mt-2"
              >
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-altanon-accent via-altanon-primary to-altanon-secondary bg-clip-text text-transparent"
                >
                  {words[currentWord]}
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <AnimatedStat number={40} label="Cost Reduction" symbol="%" />
              <AnimatedStat number={24} label="Hour Support" symbol="/" />
              <AnimatedStat number={99} label="Customer Satisfaction" symbol="%" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Transform your contact center with AI-powered intelligence that delivers 
              exceptional experiences while reducing operational costs by up to 40%.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 178, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary min-w-[200px] text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started Free</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-altanon-primary to-altanon-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary min-w-[200px] text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Watch Demo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-altanon-primary/10 to-altanon-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-altanon-primary rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Animated Stat Component
const AnimatedStat = ({ number, label, symbol }: { number: number, label: string, symbol: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-4 bg-altanon-gray-800/50 backdrop-blur-sm rounded-lg border border-altanon-gray-700"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-altanon-primary to-altanon-secondary bg-clip-text text-transparent">
        {count}{symbol}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </motion.div>
  );
};

export default Hero; 