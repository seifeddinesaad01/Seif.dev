// src/components/EngagementModels.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Calendar,
  Headphones,
  Clock,
  Star,
  RefreshCw,
  CreditCard,
  Infinity as InfinityIcon,
} from 'lucide-react';

const EngagementModels = () => {
  const models = [
    {
      title: 'Project Based',
      description: 'Perfect for defined scope projects with clear deliverables',
      features: [
        { text: 'Fixed price guarantee', icon: <DollarSign className="w-4 h-4" /> },
        { text: 'Clear timeline',          icon: <Calendar  className="w-4 h-4" /> },
        { text: 'Dedicated support',       icon: <Headphones className="w-4 h-4" /> },
      ],
      button: 'Get Quote',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      delay: 0.2,
    },
    {
      title: 'Monthly Retainer',
      description: 'Ongoing development and maintenance needs',
      features: [
        { text: 'Reserved monthly hours', icon: <Clock     className="w-4 h-4" /> },
        { text: 'Priority support',       icon: <Star      className="w-4 h-4" /> },
        { text: 'Regular updates',        icon: <RefreshCw className="w-4 h-4" /> },
      ],
      button: 'Start Monthly Plan',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      delay: 0.4,
    },
    {
      title: 'Hourly Rate',
      description: 'Flexible engagement for varying project needs',
      features: [
        { text: 'Pay as you go',   icon: <CreditCard    className="w-4 h-4" /> },
        { text: 'No commitment',    icon: <InfinityIcon  className="w-4 h-4" /> },
        { text: 'Regular updates',  icon: <RefreshCw     className="w-4 h-4" /> },
      ],
      button: 'Get Started',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      delay: 0.6,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Flexible Engagement Models
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Choose the collaboration model that best fits your project needs
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {models.map((model, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`${model.bgColor} rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl relative`}
            whileHover={{ y: -10 }}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${model.color}`} />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${model.color} flex items-center justify-center mr-4`}>                  
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{model.title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{model.description}</p>

              <ul className="space-y-3 mb-8">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-3 text-gray-700">
                      {feature.icon}
                    </div>
                    <span className="text-gray-600">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full cursor-pointer py-3 rounded-lg font-medium text-white bg-gradient-to-r ${model.color} shadow-md hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
              >
                {model.button}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EngagementModels;
