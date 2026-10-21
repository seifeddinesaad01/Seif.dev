

// ContactSection.tsx
"use client";
import React from 'react';
import { Zap, Shield, User, ArrowRight, Clock } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import FadeInSection from './FadeInSection';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <FadeInSection>
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-12 lg:space-y-0">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <span className="inline-flex items-center bg-blue-100 text-blue-500 rounded-full px-4 py-1 text-sm font-medium mb-4">
              <Zap className="w-5 h-5 mr-2" />
              Let&apos;s Create Something Amazing
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Start Your Project Today</h2>
            <p className="text-gray-600 mb-8">
              Transform your vision into reality with access to expert level full-stack development
            </p>
            <ul className="space-y-6">
              {[
                { icon: Clock, title: 'Quick Response Time', desc: 'Get a response within 24 hours', colorBg: 'bg-indigo-100', color: 'text-indigo-500' },
                { icon: Shield, title: 'Client First Approach', desc: 'Only pay for results. No hidden costs.', colorBg: 'bg-purple-100', color: 'text-purple-500' },
                { icon: User, title: 'Dedicated Support', desc: 'High level of commitment. Expert level communication throughout the project', colorBg: 'bg-yellow-100', color: 'text-yellow-500' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className={`${item.colorBg} ${item.color} rounded-lg p-3 mr-4 flex-shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <p className="text-gray-700 font-medium mb-4">Also Available On</p>
              <Button
                variant="outline"
                onClick={() => window.open('https://www.upwork.com/freelancers/seifeddines01', '_blank')}
                className="flex items-center cursor-pointer"
              >
                <SiUpwork className="w-5 h-5 mr-2 text-green-600" />
                Upwork Profile
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="lg:w-1/2">
            <div className="p-1 rounded-3xl bg-gradient-to-br from-pink-500 to-blue-600">
              <div className="bg-white rounded-3xl p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ContactSection;
