// src/components/BlogList.jsx
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: "Prisma – “TypeError: The “payload” argument must be of type object...",
      date: "Dec 9, 2024",
      readTime: "5 min read",
      excerpt: "Have you also been facing this weird error? \"TypeError: The “payload\" argument must be of type object...",
      category: "backend",
      tags: ["prisma", "typescript", "error handling"]
    },
    {
      id: 2,
      title: "What is really the output of a ReactJS or any frontend library?",
      date: "Nov 22, 2024",
      readTime: "5 min read",
      excerpt: "Front-end libraries are generating static files and not needing to be run through nodejs or a web server...",
      category: "frontend",
      tags: ["react", "javascript", "bundling"]
    },
    {
      id: 3,
      title: "Hello world!",
      date: "Feb 29, 2024",
      readTime: "5 min read",
      excerpt: "Your dev’s typical start to the world. Just a regular hello world! Getting started with new blog, I had many...",
      category: "announcement",
      tags: ["welcome", "introduction"]
    }
  ];

  const categories = ['all', 'frontend', 'backend', 'announcement'];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const categoryIcons = {
    frontend: "💻",
    backend: "⚙️",
    announcement: "📢"
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-blue-700"
        >
          Web Dev Insights
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights and tutorials about web development, best practices, and the latest technologies.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="space-y-10">
        {filteredPosts.map((post) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Date Badge */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-24 h-24 rounded-xl flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    {post.date.split(' ')[1]}
                  </div>
                  <div className="text-indigo-500 font-medium">
                    {post.date.split(' ')[0]}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {post.date.split(' ')[2]}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    {/* @ts-ignore */}
                    <span className="text-lg">{categoryIcons[post.category]}</span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full  ${
                      post.category === 'frontend' 
                        ? 'bg-blue-50 text-blue-700' 
                        : post.category === 'backend' 
                          ? 'bg-purple-50 text-purple-700'
                          : 'bg-amber-50 text-amber-700'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group">
                  <a href="#" className="group-hover:text-indigo-600 transition-colors duration-300">
                    {post.title}
                  </a>
                </h2>
                
                <p className="text-gray-600 mb-5">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="flex items-center font-medium text-indigo-600 hover:text-indigo-800 transition-colors group"
                  >
                    Read full article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Shared by</span>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      
      {/* Newsletter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-20 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 text-center"
      >
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Stay Updated</h3>
          <p className="text-gray-600 mb-5">
            Join our newsletter to receive the latest articles and development tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogList;