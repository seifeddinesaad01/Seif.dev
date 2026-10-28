"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  { k: "Works with", v: "Clients worldwide · Remote" },
  { k: "Focus", v: "MVPs, SaaS & internal tools" },
  { k: "Stack", v: "Next.js · TypeScript · Supabase" },
  { k: "Status", v: "Open to new projects" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-24 md:px-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim"
          >
            <span className="text-brand">About</span>
            <span className="h-px w-8 bg-line-strong" />
            Software developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease, delay: 0.08 }}
            className="text-[clamp(2.75rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em]"
          >
            Hi, I&apos;m Seif —{" "}
            <span className="font-serif font-normal italic text-dim">
              I turned a love for code into a career.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-dim"
          >
            From freelancing to running my own agency, I&apos;ve spent the last five years helping founders and teams
            ship products people actually use — with clean code and clear communication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Download CV
              <ArrowDownToLine className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <Link
              href="/hire-me#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium transition-colors hover:bg-surface-2"
            >
              Let&apos;s work together
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="rounded-3xl border border-line bg-surface p-6"
        >
          <div className="flex items-center gap-4 border-b border-line pb-6">
            <Image
              src="/assets/hero-portrait.webp"
              alt="Seif Eddine Saad"
              width={56}
              height={56}
              className="size-14 rounded-2xl object-cover"
            />
            <div>
              <p className="font-medium">Seif Eddine Saad</p>
              <p className="text-sm text-dim">Full Stack Developer</p>
            </div>
          </div>
          <dl className="divide-y divide-line">
            {facts.map((f) => (
              <div key={f.k} className="flex justify-between gap-4 py-3.5 text-sm">
                <dt className="text-faint">{f.k}</dt>
                <dd className="text-right">{f.v}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
