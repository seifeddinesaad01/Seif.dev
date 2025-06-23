'use client';

import { Button } from '@/components/ui/button';
import {
  Award,
  Clock,
  Shield,
  Users,
  Star,
  Quote,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function WhyChooseMe() {
  return (
    <section className=" w-full py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-2" aria-hidden="true" />
            Top-Rated Full Stack Developer
          </div>
        </div>

        {/* Title + Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Me As Your Development Partner?{' '}
          <span className="text-pink-500">🚀</span>
        </h2>
        <p className="text-center text-gray-700 mb-14 max-w-3xl mx-auto text-lg">
          Transform your ideas into reality with expert full-stack development and AI integration services.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: 'Expert Full Stack Developer',
              description: '10+ years of professional experience building scalable applications.',
              icon: Award,
            },
            {
              title: 'Fast Turnaround',
              description: 'Efficient development process with quick iterations and delivery.',
              icon: Clock,
            },
            {
              title: 'Client-Focused Approach',
              description: 'Clear communication and collaborative development process.',
              icon: Users,
            },
            {
              title: 'Quality Guaranteed',
              description: 'Production-ready code following industry best practices.',
              icon: Shield,
            },
          ].map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg"
            >
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="relative max-w-3xl mx-auto  p-10 rounded-2xl shadow-md">
          <Quote className="absolute -top-5 -right-5 text-pink-500 w-10 h-10" aria-hidden="true" />
          <p className="italic text-gray-800 text-lg mb-6 leading-relaxed">
            "Seif is an awesome upworker. A pleasure to deal with and always has a positive attitude. Even when things get rough, Seif is always there to back you up. Well recommend"
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-900">Matt Guiver</p>
              <p className="text-sm text-gray-600">Founder, Picturespark</p>
            </div>
            <Button
            
              onClick={() => window.open('https://www.upwork.com/freelancers/seifeddines01', '_blank')}

              className="text-pink-700 hover:text-pink-700 hover:bg-pink-100 cursor-pointer bg-pink-100 p-2 rounded-xl flex items-center text-sm hover:underline">
              View on Upwork
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
