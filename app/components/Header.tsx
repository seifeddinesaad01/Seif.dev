"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Hire me", href: "/hire-me" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-panel border-b border-line shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="font-display text-xl font-700 tracking-tight text-ink md:text-2xl"
            style={{ fontWeight: 700 }}
          >
            seif<span className="text-signal">.dev</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-ink text-white"
                      : "text-muted-ink hover:bg-white/60 hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/hire-me"
              className="ml-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-line bg-white/50 p-2.5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-ink" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-ink text-white transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-xl font-bold">
            seif<span className="text-signal-bright">.dev</span>
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-white/20 p-2.5"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex h-[calc(100%-72px)] flex-col items-start justify-center gap-6 px-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-display text-4xl font-semibold"
          >
            Home
          </Link>
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl font-semibold"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/hire-me"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-signal-bright px-6 py-3 text-base font-semibold text-ink"
          >
            Start a project
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
