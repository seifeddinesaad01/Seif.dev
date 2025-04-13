'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
} from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Meet Team', href: '/team' },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-semibold text-gray-900">seif.dev</div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-4 text-sm font-medium">
              {links.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`px-3 py-2 transition-colors ${
                        isActive
                          ? 'text-purple-600 border-b-2 border-purple-600'
                          : 'text-muted-foreground hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button className="rounded-md px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-xl font-semibold text-gray-900">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === href
                  ? 'text-purple-600 underline'
                  : 'text-gray-800 hover:text-purple-600'
              }`}
            >
              {label}
            </Link>
          ))}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 mt-4">
            Get in Touch
          </Button>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-10">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
