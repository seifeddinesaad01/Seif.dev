"use client";
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, MessageCircle, Hash, Instagram, Facebook, BookOpen, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className=" text-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Motto */}
          <div>
            <h3 className="text-xl font-bold">
              <span className="text-pink-500">seif</span>.dev
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                Code <span role="img" aria-label="laptop">💻</span> Lift <span role="img" aria-label="strong">💪</span> Solve Problems <span role="img" aria-label="wrench">🛠️</span>
              </li>
              <li>
                Sleep <span role="img" aria-label="sleeping face">😴</span> Repeat <span role="img" aria-label="repeat">🔁</span>
              </li>
              <li>
                Available Worldwide <span role="img" aria-label="globe">🌍</span> <span role="img" aria-label="sparkles">✨</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-pink-500">About</Link></li>
              <li><Link href="/blog" className="hover:text-pink-500">Blog</Link></li>
              <li><Link href="/hire" className="hover:text-pink-500">Hire Me</Link></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-pink-500">FAQ</Link></li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-gray-50 rounded-xl p-6">
            <span className="inline-flex items-center bg-pink-100 text-pink-500 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Hash className="w-4 h-4 mr-1" /> Available for Projects
            </span>
            <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
            <p className="text-gray-600 mb-4 text-sm">I might have the solution to your problems.</p>
            <Button asChild>
              <Link href="/#contact">Start Your Project <ArrowUp className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Social & Back to Top */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4 text-gray-500">
            <Link href="https://github.com/yourusername" aria-label="GitHub"><Github className="w-5 h-5 hover:text-gray-900" /></Link>
            <Link href="https://linkedin.com/in/yourusername" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-blue-600" /></Link>
            <Link href="https://twitter.com/yourusername" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-blue-400" /></Link>
            <Link href="https://yourforum.com" aria-label="Discussion"><MessageCircle className="w-5 h-5 hover:text-gray-900" /></Link>
            <Hash className="w-5 h-5" />
            <Link href="https://instagram.com/yourusername" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-pink-500" /></Link>
            <Link href="https://facebook.com/yourusername" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-blue-800" /></Link>
            <Link href="https://readthedocs.org/projects/yourproject" aria-label="Docs"><BookOpen className="w-5 h-5 hover:text-gray-900" /></Link>
          </div>
          <button onClick={scrollToTop} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-500 space-y-1">
          <p>Made with <span role="img" aria-label="heart">❤️</span> by Seif Eddine Saad © {new Date().getFullYear()}</p>
          <p>Protected by reCAPTCHA (<Link href="https://policies.google.com/privacy" className="underline">Privacy</Link> &amp; <Link href="https://policies.google.com/terms" className="underline">Terms</Link>)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
