'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Meet Team', href: '/team' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900">seif.dev</div>

        {/* Links + Button */}
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-4 text-sm font-medium">
            {links.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`px-3 py-2  transition-colors ${
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
      </div>
    </nav>
  );
};

export default Header;
