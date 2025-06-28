"use client";
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Facebook, BookOpen, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-gray-700 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

          {/* Brand & Motto */}
          <div className="text-center sm:text-left">
          <div className="text-xl font-semibold text-gray-900 cursor-pointer group">
            <span className="text-blue-500">seif</span><span className='transform transition-all duration-250 ease-out group-hover:pl-1'>.dev</span>
          </div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm">
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
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link href="/hire-me" className="hover:text-blue-500">Hire Me</Link></li>
            </ul>
          </div>

          {/* More */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3">More</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/faq" className="hover:text-blue-500">FAQ</Link></li>
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center">
            <span className="inline-flex items-center justify-center bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-xs font-medium mb-3">
              # Available for Projects
            </span>
            <h4 className="text-base sm:text-xl font-bold mb-1">Ready to Start?</h4>
            <p className="text-gray-600 mb-4 text-xs sm:text-sm">I might have the solution to your problems.</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" asChild>
              <Link href="/hire-me" className="flex items-center justify-center">
                Start Your Project <ArrowUp className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6 md:my-8" />

        {/* Social & Back to Top */}
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0 sm:space-x-4">
          <div className="flex space-x-4 text-gray-500">
            <Link href="https://github.com/seifeddinesaad01" aria-label="GitHub"><Github className="w-5 h-5 hover:text-gray-900" /></Link>
            <Link href="https://www.linkedin.com/in/seif-eddine-saad-3728aa19b" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-blue-600" /></Link>
            <Link href="https://x.com/Saif71564790" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-blue-400" /></Link>
            <Link href="https://instagram.com/yourusername" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-pink-500" /></Link>
            <Link href="https://www.facebook.com/saiiif001" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-blue-800" /></Link>
            <Link href="https://dev.to/seif_eddine_saad" aria-label="Docs"><BookOpen className="w-5 h-5 hover:text-gray-900" /></Link>
          </div>
          <button onClick={scrollToTop} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-xs sm:text-sm text-gray-500 space-y-1">
          <p>Made with <span role="img" aria-label="heart">❤️</span> by Seif Eddine Saad © {new Date().getFullYear()}</p>
          <p>Protected by reCAPTCHA (<Link href="https://policies.google.com/privacy" className="underline">Privacy</Link> &amp; <Link href="https://policies.google.com/terms" className="underline">Terms</Link>)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
