// components/CallToAction.tsx
import React from 'react';
import { Rocket, Handshake, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-gradient-to-r from-blue-500 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
                        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white"></div>
                        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white"></div>
                    </div>

                    {/* Content */}
                    <div className="relative px-6 py-12 md:p-16 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-10 md:mb-0 md:w-7/12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Build Something Extraordinary?
                            </h2>

                            <div className="flex justify-center md:justify-start mb-8">
                                <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full"></div>
                            </div>

                            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-8">
                                Let's collaborate to create innovative solutions that drive your business forward.
                                With my expertise in full-stack development and your vision, we can build something
                                amazing together.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link
                                    href="/hire-me"
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-emerald-500 hover:from-cyan-500 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                                >
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Button size="lg" variant="outline" className="cursor-pointer py-8 px-10 flex items-center gap-2 rounded-xl">
                                    <Link href="/projects" >
                                        View my work
                                    </Link>
                                    <Check className="w-5 h-5 bg-emerald-400 text-white rounded-full p-1 group-hover:bg-emerald-500" />
                                </Button>
                            </div>
                        </div>

                        <div className="hidden md:block relative">
                            <div className="relative w-64 h-64 flex items-center justify-center">
                                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur rounded-full animate-pulse-slow"></div>
                                <div className="absolute w-40 h-40 bg-gradient-to-br from-cyan-300 to-emerald-300 rounded-full"></div>
                                <div className="relative z-10">
                                    <Rocket className="w-32 h-32 text-white" />
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-full shadow-lg">
                                <Handshake className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;