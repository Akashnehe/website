'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

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
