'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/Data/projects'
import type { ProjectCard } from '@/app/projects/types/project'
import BrowserThumb from './BrowserThumb'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

// Hand-picked projects with wide, high-res screenshots
const featuredTitles = [
  'Traverse City Marketing Co.',
  'Chimney Liner Pro',
  'Callixa Sales Rep Portal',
  'Base Plus One',
  'Kudoz Reviews',
  'Web School',
]
const featured = featuredTitles
  .map((title) => PROJECTS.find((p) => p.title === title))
  .filter((p): p is ProjectCard => Boolean(p?.image_url))

const kind = (p: ProjectCard) =>
  p.category === 'mobile' ? 'Mobile app' : p.category === 'landing' ? 'Landing page' : 'Web platform'

const Thumb = ({ project, sizes }: { project: ProjectCard; sizes: string }) =>
  project.accent ? (
    <BrowserThumb src={project.image_url!} alt={project.title} accent={project.accent} url={project.demo_url} sizes={sizes} />
  ) : (
    <Image src={project.image_url!} alt={project.title} fill sizes={sizes} className="object-cover object-top" />
  )

const FeaturedWork = () => {
  const [active, setActive] = useState(0)
  const current = featured[active]

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-28 md:px-8 md:py-36">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          index="01"
          label="Selected work"
          title={
            <>
              Recent products,{' '}
              <span className="font-serif font-normal italic text-dim">built end to end.</span>
            </>
          }
        />
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-2 text-sm text-dim transition-colors hover:text-fg"
        >
          All projects
          <span className="grid size-8 place-items-center rounded-full border border-line-strong transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </div>

      <FadeInSection className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
        {/* Index */}
        <ol className="border-t border-line">
          {featured.map((project, i) => {
            const isActive = i === active
            return (
              <li key={project.id} className="border-b border-line">
                <Link
                  href={`/projects/${project.id}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:gap-6"
                >
                  {/* Phone/tablet: inline preview */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface-2 lg:hidden">
                    <Thumb project={project} sizes="100vw" />
                  </div>

                  <div className="flex flex-1 items-center gap-5">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isActive ? 'text-faint lg:text-brand' : 'text-faint'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-2xl font-medium tracking-tight transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-3xl lg:truncate ${
                          isActive ? 'text-fg lg:translate-x-2' : 'text-fg lg:text-faint'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                        {kind(project)} · {project.tags.slice(0, 2).join(' / ')}
                      </p>
                    </div>
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? 'border-line-strong text-dim lg:-rotate-45 lg:border-brand lg:bg-brand lg:text-white'
                          : 'border-line-strong text-dim'
                      }`}
                    >
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>

        {/* Desktop: sticky preview that follows the hovered row */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <Link
              href={`/projects/${current.id}`}
              className="group relative block aspect-[16/11] overflow-hidden rounded-3xl border border-line bg-surface-2"
              tabIndex={-1}
              aria-hidden
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Thumb project={current} sizes="55vw" />
                </motion.div>
              </AnimatePresence>
            </Link>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-6 flex items-start justify-between gap-8"
              >
                <p className="line-clamp-2 max-w-md leading-relaxed text-dim">{current.short_description}</p>
                <ul className="flex shrink-0 flex-wrap justify-end gap-2">
                  {current.tags.slice(0, 2).map((tag) => (
                    <li key={tag} className="rounded-full border border-line-strong px-3 py-1 text-xs text-dim">
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default FeaturedWork
