'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle form submission
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', company: '', message: '' });
      setStatus('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-altanon-primary" />,
      title: 'Email',
      content: 'altanontechnologysolutions@gmail.com',
      link: 'mailto:altanontechnologysolutions@gmail.com'
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-altanon-primary" />,
      title: 'Phone',
      content: '+91 9529784924',
      link: 'tel:+919529784924'
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-altanon-primary" />,
      title: 'Location',
      content: '204, Pooja Residency, Y point,<br />Hinjewadi Phase 1,<br />Pin code: 411057',
      link: 'https://www.google.com/maps/place/Pooja+Residency/@18.6056586,73.7345196,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb9151c61841:0x922bb5a0e0a600fa!8m2!3d18.6056535!4d73.7370945!16s%2Fg%2F11sjwlnllb'
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-altanon-primary" />,
      title: 'Office Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-altanon-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Ready to transform your contact center? Reach out to us for a personalized demo
            or to learn more about our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-altanon-gray-800 hover:bg-altanon-gray-700 transition-colors duration-200 border border-altanon-gray-700 hover:border-altanon-primary/50"
              >
                <div className="flex-shrink-0 mt-1">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  <p className="text-gray-400">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-altanon-gray-800 p-8 rounded-lg border border-altanon-gray-700 relative"
          >
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-4 right-4 flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-lg"
                >
                  <CheckCircleIcon className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-lg"
                >
                  <XCircleIcon className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 bg-altanon-gray-900 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-altanon-primary/50 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 bg-altanon-gray-900 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-altanon-primary/50 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 bg-altanon-gray-900 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-altanon-primary/50 focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-textarea w-full px-4 py-3 bg-altanon-gray-900 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-altanon-primary/50 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className={`w-full btn-primary relative ${status === 'loading' ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 