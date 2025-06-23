'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Rocket, ArrowRight, Bot } from 'lucide-react'
import { stackIcons, textsToAnimate } from '@/Data/data'
import AnimatedText from './AnimatedText'
import CodeIcon from './CodeIcon'
import FadeInSection from './FadeInSection'
import Link from 'next/link'

const Hero = () => {
  return (
    <FadeInSection>
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="flex justify-center mt-[-3rem] mb-8">
          <div className="bg-blue-100 text-blue-900  px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Development
          </div>
        </div>
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
        <div className="flex justify-center items-center gap-2 mb-8">
          {stackIcons.map((icon, index) => (
            <div className="flex justify-center items-center gap-1 text-gray-500" key={index}>
              <CodeIcon name={icon.name} />
              <span className="text-gray-600">•</span>
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
          {/* Start Your Project Button with Tailwind hover effects */}
          <Button
            size="lg"
            variant="default"
            className="group bg-pink-500 hover:bg-pink-600 rounded-xl px-8 py-6 font-semibold cursor-pointer transform transition-all duration-150 ease-out hover:shadow-2xl"
          >
            <Link href="/hire-me"  className="flex items-center gap-2 transition-all duration-150 ease-out group-hover:gap-4">
              <span>Start Your Project</span>
              <Rocket className="w-5 h-5 text-white" />
            </Link>
          </Button>

          {/* View Portfolio Button */}
          <Button size="lg" variant="outline" className="cursor-pointer py-6 px-8 flex items-center gap-2 rounded-xl">
            View Portfolio
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </FadeInSection>
  )
}

export default Hero
