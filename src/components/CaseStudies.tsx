'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Global E-commerce Platform',
    description:
      'Implemented AI-powered chatbots and voice automation, resulting in a 60% reduction in response time and 40% increase in customer satisfaction.',
    metrics: [
      { label: 'Response Time', value: '-60%' },
      { label: 'Customer Satisfaction', value: '+40%' },
      { label: 'Cost Reduction', value: '-45%' },
    ],
  },
  {
    title: 'Financial Services Provider',
    description:
      'Deployed sentiment analysis and real-time analytics to proactively address customer concerns, leading to a 35% decrease in customer complaints.',
    metrics: [
      { label: 'Customer Complaints', value: '-35%' },
      { label: 'Resolution Time', value: '-50%' },
      { label: 'Customer Retention', value: '+25%' },
    ],
  },
  {
    title: 'Healthcare Provider',
    description:
      'Integrated omni-channel support and AI chatbots to streamline patient inquiries, achieving a 70% reduction in wait times and improved patient satisfaction.',
    metrics: [
      { label: 'Wait Times', value: '-70%' },
      { label: 'Patient Satisfaction', value: '+55%' },
      { label: 'Staff Efficiency', value: '+40%' },
    ],
  },
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {caseStudies[currentIndex].title}
              </h3>
              <p className="text-gray-400 mb-8">
                {caseStudies[currentIndex].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudies[currentIndex].metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-altanon-gray-800 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-altanon-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

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