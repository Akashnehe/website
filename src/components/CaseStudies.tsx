'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'FlowNodes Integration',
    description: 'Successfully integrated FlowNodes into our AI contact center solution, resulting in a 40% improvement in customer satisfaction.',
    image: '/images/flownodes.jpg',
    metrics: ['40%', '60%', '24/7']
  },
  {
    title: 'Enterprise Transformation',
    description: 'Transformed a Fortune 500 company\'s contact center operations with our AI solutions, reducing response times by 60%.',
    image: '/images/dashboard.jpg',
    metrics: ['60%', '85%', '100%']
  },
  {
    title: 'Global Expansion',
    description: 'Enabled seamless multilingual support across 12 countries, handling customer queries in multiple languages.',
    image: '/images/NLP.jpg',
    metrics: ['12', '95%', '24/7']
  }
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="py-20 bg-altanon-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Success Stories</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Discover how our AI-powered solutions have transformed contact centers across various industries.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={caseStudies[currentIndex].image}
                alt={caseStudies[currentIndex].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                quality={100}
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{caseStudies[currentIndex].title}</h3>
              <p className="text-gray-300 mb-8">{caseStudies[currentIndex].description}</p>
              <div className="grid grid-cols-3 gap-4">
                {caseStudies[currentIndex].metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-altanon-primary">{metric}</div>
                    <div className="text-sm text-gray-400">Metric {i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-full bg-altanon-gray-800 text-white hover:bg-altanon-gray-700 transition-colors duration-200"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-full bg-altanon-gray-800 text-white hover:bg-altanon-gray-700 transition-colors duration-200"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-altanon-primary w-4'
                    : 'bg-altanon-gray-700 hover:bg-altanon-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 