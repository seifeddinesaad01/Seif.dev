"use client";

import Link from "next/link";
import {
  ArrowUp,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="font-display text-2xl font-bold text-ink">
            seif<span className="text-signal">.dev</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-ink">
            Full-stack engineer for product teams that need shipped systems —
            auth, payments, ops workflows, and interfaces people actually use.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ink">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/projects" className="text-ink hover:text-signal">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink hover:text-signal">
                  About
                </Link>
              </li>
              <li>
                <Link href="/hire-me" className="text-ink hover:text-signal">
                  Hire me
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ink">
              Elsewhere
            </p>
            <div className="mt-3 flex gap-3 text-muted-ink">
              <Link
                href="https://github.com/seifeddinesaad01"
                aria-label="GitHub"
                className="rounded-full border border-line p-2 transition hover:border-signal hover:text-signal"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/seif-eddine-saad-3728aa19b"
                aria-label="LinkedIn"
                className="rounded-full border border-line p-2 transition hover:border-signal hover:text-signal"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/Saif71564790"
                aria-label="Twitter"
                className="rounded-full border border-line p-2 transition hover:border-signal hover:text-signal"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://dev.to/seif_eddine_saad"
                aria-label="Writing"
                className="rounded-full border border-line p-2 transition hover:border-signal hover:text-signal"
              >
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-line pt-6 text-xs text-muted-ink">
        <p>© {new Date().getFullYear()} Seif Eddine Saad</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 transition hover:border-signal hover:text-signal"
        >
          Top
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
