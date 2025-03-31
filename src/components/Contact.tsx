'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'contact@altanon.com',
      link: 'mailto:contact@altanon.com',
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      content: '123 Tech Street, San Francisco, CA 94105',
      link: 'https://maps.google.com',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-altanon-dark relative overflow-hidden">
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
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.link}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-altanon-gray-800 hover:bg-altanon-gray-700 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <info.icon className="w-6 h-6 text-altanon-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{info.title}</h3>
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
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-altanon-gray-800 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-altanon-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-altanon-gray-800 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-altanon-primary"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-altanon-gray-800 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-altanon-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-altanon-gray-800 border border-altanon-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-altanon-primary"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 