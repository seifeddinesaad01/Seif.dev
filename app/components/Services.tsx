"use client";

import {
  Briefcase,
  Code,
  Rocket,
  Zap,
  Star,
  CirclePlus,
  TimerReset,
  Layers,
  Sparkles,
} from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function ServicesSection() {
  const services = [
    {
      title: "Rapid MVP Development",
      description:
        "Transform your idea into a working product in weeks, not months. AI-powered development for faster iterations and market validation.",
      icons: [
        <Rocket key="1" className="w-6 h-6 text-blue-600" />,
        <Rocket key="2" className="w-6 h-6 text-pink-500 rotate-45" />,
      ],
      iconBg: ["bg-blue-100", "bg-pink-100"],
    },
    {
      title: "AI Integration",
      description:
        "Leverage cutting-edge AI technologies to automate processes, enhance features, and create smarter applications.",
      icons: [
        <Briefcase key="1" className="w-6 h-6 text-blue-600" />,
        <Sparkles key="2" className="w-6 h-6 text-red-500" />,
      ],
      iconBg: ["bg-blue-100", "bg-red-100"],
    },
    {
      title: "Full Stack Solutions",
      description:
        "End-to-end development using React, NextJS, and TypeScript. Building scalable, production-ready applications.",
      icons: [
        <Code key="1" className="w-6 h-6 text-blue-600" />,
        <Layers key="2" className="w-6 h-6 text-cyan-500" />,
      ],
      iconBg: ["bg-blue-100", "bg-cyan-100"],
    },
    {
      title: "API Development",
      description:
        "Custom API development and integration. RESTful and GraphQL APIs with robust security and documentation.",
      icons: [
        <CirclePlus key="1" className="w-6 h-6 text-blue-600" />,
        <Zap key="2" className="w-6 h-6 text-orange-500" />,
      ],
      iconBg: ["bg-blue-100", "bg-orange-100"],
    },
  ];

  const features = [
    {
      title: "Lightning Fast Delivery",
      description: "Accelerated development using AI tools and automation",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
    },
    {
      title: "Production Ready",
      description: "Enterprise-grade code following best practices",
      icon: <TimerReset className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business needs",
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Clean Code",
      description: "Well-structured, maintainable, and readable codebase",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <FadeInSection>
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-2">
          <div className="bg-blue-100 text-blue-800  px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-2" />
            Expert Full Stack Development Services
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Services I Offer <span className="text-yellow-400">✨</span>
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Specialized in rapid MVP development and AI integration
        </p>

        {/* Services Grid with animated border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="animated-border rounded-lg p-[2px] h-full">
                <div className="bg-white rounded-lg p-6 h-full transition-colors duration-300 group-hover:bg-gray-50">
                  <div className="flex flex-col space-y-2 mb-4">
                    {service.icons.map((Icon, i) => (
                      <div
                        key={i}
                        className={`${service.iconBg[i]} w-12 h-12 rounded-full flex items-center justify-center`}
                      >
                        {Icon}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-2 flex flex-col items-start transition-transform duration-300 hover:scale-[1.03] hover:shadow-md"
            >
              <div className={`${feature.iconBg} p-2 rounded-lg mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated border CSS (moves from right to left) */}
      <style jsx>{`
        .animated-border {
          background: linear-gradient(
            90deg,
            #3b82f6,
            #ec4899,
            #6366f1,
            #f59e0b
          );
          background-size: 200% 200%;
          animation: moveBorder 4s linear infinite;
        }

        @keyframes moveBorder {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </FadeInSection>
  );
}
