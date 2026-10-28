"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { socials } from '@/Data/data';
import Logo from './Logo';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Hire Me', href: '/hire-me' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-5 pt-24 md:px-8">
        <Link href="/hire-me#contact" className="group block">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-dim">Got a project in mind?</p>
          <span className="flex items-center gap-4 text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.045em] transition-colors duration-500 group-hover:text-brand">
            Let&apos;s talk
            <span className="grid size-[0.8em] shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="size-[0.45em]" strokeWidth={1.5} />
            </span>
          </span>
        </Link>

        <div className="mt-20 grid gap-10 border-t border-line pt-12 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-dim">
              Code, lift, solve problems, sleep, repeat. Working with clients worldwide.
            </p>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">Pages</p>
            <ul className="space-y-2 text-sm">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-dim transition-colors hover:text-fg">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">Elsewhere</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-dim transition-colors hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-line py-8 text-xs text-faint">
          <p>© {new Date().getFullYear()} Seif Eddine Saad. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-dim transition-colors hover:text-fg"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none text-center text-[22vw] font-semibold leading-[0.75] tracking-[-0.06em] text-outline">
        seif.dev
      </div>
    </footer>
  );
};

export default Footer;
