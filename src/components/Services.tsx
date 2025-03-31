'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChatBubbleLeftRightIcon,
  MicrophoneIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'AI Chatbots',
    description:
      'Intelligent chatbots that understand context, handle complex queries, and provide accurate responses 24/7.',
    icon: ChatBubbleLeftRightIcon,
    color: 'text-blue-400',
  },
  {
    title: 'Voice Automation',
    description:
      'Natural language processing for voice interactions, reducing wait times and improving customer satisfaction.',
    icon: MicrophoneIcon,
    color: 'text-purple-400',
  },
  {
    title: 'Omni-Channel Support',
    description:
      'Seamless integration across all communication channels - voice, chat, email, and social media.',
    icon: GlobeAltIcon,
    color: 'text-green-400',
  },
  {
    title: 'Sentiment Analysis',
    description:
      'Real-time analysis of customer emotions and feedback to proactively address concerns.',
    icon: ChartBarIcon,
    color: 'text-red-400',
  },
  {
    title: 'Real-Time Analytics',
    description:
      'Comprehensive dashboard with actionable insights for better decision-making and performance optimization.',
    icon: ChartBarIcon,
    color: 'text-yellow-400',
  },
  {
    title: '24/7 Support',
    description:
      'Round-the-clock customer service with intelligent routing and automated responses.',
    icon: ClockIcon,
    color: 'text-cyan-400',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-altanon-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your contact center operations
            and deliver exceptional customer experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card group hover:bg-altanon-gray-700/50"
            >
              <div className={`${service.color} mb-4`}>
                <service.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-altanon-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 