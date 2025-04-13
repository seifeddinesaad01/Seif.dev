'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Rocket, ArrowRight } from 'lucide-react'
import { stackIcons, textsToAnimate } from '@/Data/data'
import AnimatedText from './AnimatedText'
import CodeIcon from './CodeIcon'

const Hero = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 flex flex-col items-center justify-center gap-4">
        Build Your MVP
        {/* Animated Gradient Text */}
        <AnimatedText texts={textsToAnimate} />
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        From Concept to Production-Ready Application
      </p>

      {/* Stack Icons */}
      <div className='flex justify-center items-center gap-2 mb-8'>
        {stackIcons.map((icon, index) => (
          <div className='flex justify-center items-center gap-1 text-gray-500' key={index}>
            <CodeIcon name={icon.name} />
            <span className='text-gray-600'>•</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        Expert Full Stack Developer specializing in rapid MVP development and AI integration.
        Over 4 years of experience turning innovative ideas into production-ready applications.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Button
          size="lg"
          variant="default"
          className="bg-purple-600 text-white rounded-xl px-8 py-6 font-semibold hover:bg-purple-700 transition flex items-center gap-2 cursor-pointer"
        >
          <Rocket className="w-5 h-5" />
          Start Your Project
        </Button>

        <Button
          size="lg"
          variant="outline"
          className='cursor-pointer py-6 px-8'
        >
          View Portfolio
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}

export default Hero
