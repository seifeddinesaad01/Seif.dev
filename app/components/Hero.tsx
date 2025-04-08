import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/assets/profilePic.jpg"
import { Button } from '@/components/ui/button'
const Hero = () => {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Build Your MVP
                <span className="block text-purple-600">Future Pro</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                From Concept to Production-Ready Application
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <Button variant="default" className="bg-purple-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-purple-700 transition">

                    Start Your Project
                </Button>
                <Button variant="outline" className="border border-purple-600 text-purple-600 rounded-md px-6 py-3 font-semibold hover:bg-purple-600 hover:text-white transition">   
                    View Portfolio
                </Button>
            </div>
        </section>
    )
}

export default Hero