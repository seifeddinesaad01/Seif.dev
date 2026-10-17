"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-signal-bright/20 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 16, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-muted-ink"
          >
            Full-stack · Product · Ops platforms
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.9] text-ink"
            style={{ fontWeight: 800 }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: -20 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.75, ease },
                },
              }}
            >
              seif
            </motion.span>
            <motion.span
              className="inline-block text-signal"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.75, ease },
                },
              }}
            >
              .dev
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
            className="mt-6 max-w-xl text-lg text-muted-ink md:text-xl"
          >
            I design and ship production web systems — scored products, field-ops
            portals, and clean client experiences that hold up after launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/hire-me"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-signal"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
              >
                View selected work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden="true"
        >
          {/* Back panel — Base Plus One */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 8, y: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 3,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3, ease },
              x: { duration: 0.8, delay: 0.3, ease },
              rotate: { duration: 0.8, delay: 0.3, ease },
              y: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              },
            }}
            className="absolute right-0 top-6 w-[78%] overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-ink/10"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-mist/80 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="ml-2 font-mono text-[10px] text-muted-ink">
                baseplusone.com
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/assets/base-plus-one-thumb.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 70vw, 380px"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Front panel — Callixa */}
          <motion.div
            initial={{ opacity: 0, x: -36, y: 36 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 12, 0],
            }}
            transition={{
              opacity: { duration: 0.85, delay: 0.18, ease },
              x: { duration: 0.85, delay: 0.18, ease },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="relative z-10 mt-16 w-[88%] overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl shadow-ink/25"
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink px-3 py-2">
              <motion.span
                className="h-2 w-2 rounded-full bg-signal-bright"
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="ml-2 font-mono text-[10px] text-white/50">
                callixa.ai
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/callixa-thumb.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
