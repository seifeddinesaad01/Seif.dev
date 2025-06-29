"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ProjectCard } from "../types/project";

interface ProjectsListProps {
  projects: ProjectCard[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-12"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent z-10" />
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating tags */}
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 z-20">
                {project.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white text-blue-600 text-xs font-medium rounded-full shadow-sm border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 relative z-20 bg-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.short_description}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 border-t border-gray-100 pt-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>View Details</span>
                </Link>
                <Link
                  href={project.github_url}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200 rounded-full filter blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="absolute bottom-8 right-4 w-8 h-8 bg-cyan-300 rounded-full filter blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl filter blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* View more button */}
      {projects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full shadow-lg border border-blue-100 hover:bg-blue-50 transition-colors inline-block"
          >
            View All Projects
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsList;