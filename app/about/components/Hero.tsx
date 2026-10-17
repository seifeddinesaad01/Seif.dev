import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-ink">
          About
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
          Engineer, builder, and the person who ships the boring parts that make
          products real.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-ink md:text-xl">
          From freelancing to long-running client platforms — I care about typed
          stacks, clear ownership, and interfaces that still make sense six
          months after launch.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-signal"
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
          >
            Let&apos;s work together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
