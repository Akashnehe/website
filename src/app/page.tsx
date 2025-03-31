'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-altanon-dark via-altanon-darker to-altanon-dark">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            AI-Powered Contact Centers,
            <br />
            <span className="text-altanon-primary">Unmatched Customer Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transform your customer service with cutting-edge AI technology.
            Deliver exceptional experiences that set you apart.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-altanon-primary rounded-full p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-altanon-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        ref={ref}
        id="about"
        className="py-20 bg-altanon-darker relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Altanon</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We're revolutionizing the contact center industry by combining cutting-edge AI technology
              with human expertise to deliver exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Solutions',
                description:
                  'Leverage advanced AI algorithms to automate routine tasks, predict customer needs, and provide personalized experiences.',
                icon: '🤖',
              },
              {
                title: 'Real-Time Analytics',
                description:
                  'Gain valuable insights into customer behavior, agent performance, and service quality with our comprehensive analytics dashboard.',
                icon: '📊',
              },
              {
                title: 'Seamless Integration',
                description:
                  'Easily integrate our solutions with your existing contact center infrastructure and business processes.',
                icon: '🔄',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
