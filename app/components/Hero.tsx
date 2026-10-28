'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { stack } from '@/Data/data'
import { PROJECTS } from '@/Data/projects'

const ease = [0.22, 1, 0.36, 1] as const

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, ease, delay },
})

const stats = [
  { value: '5+', label: 'Years shipping production code' },
  { value: `${PROJECTS.length}`, label: 'Products & case studies' },
  { value: '24h', label: 'Typical response time' },
  { value: 'Top Rated', label: 'Freelancer on Upwork' },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...rise(0)} className="mb-10 inline-flex items-center gap-3 rounded-full border border-line-strong bg-surface/60 py-1.5 pl-1.5 pr-4 backdrop-blur">
          <Image
            src="/assets/hero-portrait.webp"
            alt="Seif Eddine Saad"
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
            priority
          />
          <span className="flex items-center gap-2 text-sm text-dim">
            <span className="size-2 animate-pulse-dot rounded-full bg-green-400" />
            Available for new projects
          </span>
        </motion.div>

        <h1 className="text-[clamp(3rem,9.5vw,8.25rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          <motion.span {...rise(0.08)} className="block">
            I build products
          </motion.span>
          <motion.span {...rise(0.16)} className="block">
            that <span className="font-serif font-normal italic tracking-[-0.02em] text-brand">actually</span> ship.
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <motion.p {...rise(0.28)} className="max-w-xl text-lg leading-relaxed text-dim md:text-xl">
            I&apos;m <span className="text-fg">Seif Eddine Saad</span>, a full stack developer turning ideas into
            fast, scalable MVPs, internal tools and AI-powered apps — from first sketch to production.
          </motion.p>

          <motion.div {...rise(0.36)} className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/hire-me#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-fg transition-colors hover:bg-surface-2"
            >
              Selected work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <motion.dl
          {...rise(0.48)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-canvas px-5 py-6 md:px-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-medium tracking-tight md:text-4xl">{s.value}</dd>
              <dd className="mt-1.5 text-sm text-faint">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Stack marquee */}
      <div className="relative mt-24 border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...stack, ...stack].map((name, i) => (
            <span key={i} className="flex items-center gap-12 font-mono text-sm uppercase tracking-[0.18em] text-faint">
              {name}
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
