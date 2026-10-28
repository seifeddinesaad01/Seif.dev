'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/Data/projects'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

// Hand-picked projects with wide, high-res screenshots
const featuredTitles = ['Callixa Sales Rep Portal', 'Base Plus One', 'Kudoz Reviews', 'Web School']
const featured = featuredTitles
  .map((title) => PROJECTS.find((p) => p.title === title))
  .filter((p): p is (typeof PROJECTS)[number] => Boolean(p?.image_url))

const FeaturedWork = () => {
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

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => (
          <FadeInSection key={project.id} delay={(i % 2) * 0.1} className={i % 3 === 0 ? 'md:col-span-2' : ''}>
            <Link
              href={`/projects/${project.id}`}
              className="group block overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
            >
              <div className={`relative overflow-hidden bg-surface-2 ${i % 3 === 0 ? 'aspect-[16/8]' : 'aspect-[16/11]'}`}>
                <Image
                  src={project.image_url!}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 70vw, 100vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent opacity-80" />
                <span className="absolute right-5 top-5 grid size-11 translate-y-2 place-items-center rounded-full bg-fg text-canvas opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                <div className="max-w-xl">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                    {String(i + 1).padStart(2, '0')} · {project.category === 'mobile' ? 'Mobile app' : project.category === 'landing' ? 'Landing page' : 'Web platform'}
                  </p>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{project.title}</h3>
                  <p className="mt-3 line-clamp-2 leading-relaxed text-dim">{project.short_description}</p>
                </div>
                <ul className="flex flex-wrap gap-2 md:max-w-[220px] md:justify-end">
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className="rounded-full border border-line-strong px-3 py-1 text-xs text-dim">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork
