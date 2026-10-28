'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { socials } from '@/Data/data';
import Logo from './Logo';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Hire Me', href: '/hire-me' },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-500 ${
            isScrolled
              ? 'border-line-strong bg-canvas/70 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive(href) ? 'text-fg' : 'text-dim hover:text-fg'
                  }`}
                >
                  {isActive(href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/hire-me#contact"
            className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-brand hover:text-white md:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4" />
          </Link>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="relative grid size-10 place-items-center rounded-full bg-surface-2 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-canvas px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="space-y-2">
              {links.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-baseline gap-4 text-5xl font-medium tracking-tight ${
                      isActive(href) ? 'text-fg' : 'text-dim'
                    }`}
                  >
                    <span className="font-mono text-xs text-brand">0{i + 1}</span>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-dim">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
