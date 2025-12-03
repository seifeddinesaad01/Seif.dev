"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaRegClock, FaCode } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ProjectDetails as ProjectDetailsType } from "../types/project";

interface ProjectDetailsProps {
  project: ProjectDetailsType;
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all"
        aria-label="Close project"
      >
        <IoMdClose className="text-white text-2xl" />
      </button>

      <div className="flex min-h-screen items-center justify-center p-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Hero Section */}
          <div className="relative h-96">
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
                {project.title}
              </h1>
              <p className="mt-4 text-xl text-white/90 max-w-3xl">
                {project.short_description}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              {/* Project Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
                  Project Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.long_description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <FaRegClock className="text-blue-500" />
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
                      <FaCode className="text-green-500" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Technology Stack */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500 inline-block">
                  Technology Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.technologies.map((tech, i) => (
                    <div 
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column - Metadata & Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-8 bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="flex flex-col gap-6">
                  {project.github_url &&  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Project Links
                    </h3>
                    <div className="flex flex-col gap-3">
                      <Link
                        href={project.github_url}
                        target="_blank"
                        className="flex items-center justify-between gap-3 px-4 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <FaGithub />
                          Source Code
                        </span>
                        <span className="bg-white/20 px-2 py-1 rounded text-xs">
                          GitHub
                        </span>
                      </Link>
                    </div>
                  </div>}
                 

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      {project.timeline && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Timeline
                          </h4>
                          <p className="text-gray-900">{project.timeline}</p>
                        </div>
                      )}
                      {project.team && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Team
                          </h4>
                          <p className="text-gray-900">{project.team}</p>
                        </div>
                      )}
                      {project.category && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Category
                          </h4>
                          <p className="text-gray-900">{project.category}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <Link
                    href="/projects"
                    className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    <FaArrowLeft />
                    View All Projects
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gallery Section */}
          {project.gallery_urls && project.gallery_urls.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery_urls.map((url, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-xl overflow-hidden border-2 border-white shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    <Image
                      src={url}
                      alt={`Gallery image ${index + 1} for ${project.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Reflection Section */}
          {project.reflection && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-12"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
                  Project Reflection
                </h2>
                <div className="space-y-4">
                  {project.reflection.split('\n').map((paragraph:any, index:any) => (
                    <p key={index} className="text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;