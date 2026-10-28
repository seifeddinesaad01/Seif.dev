'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SectionHeading from './SectionHeading';
import { UPWORK_URL } from '@/Data/data';

const steps = [
  {
    title: 'Discover',
    description: 'A short call to understand the problem, the users and what success looks like.',
  },
  {
    title: 'Plan',
    description: 'Clear scope, milestones and a fixed timeline — no surprises later.',
  },
  {
    title: 'Build',
    description: 'Weekly demos on a live staging link so you see progress, not promises.',
  },
  {
    title: 'Launch & support',
    description: 'Production deploy, monitoring and hands-on support after go-live.',
  },
];

const testimonials = [
  {
    quote:
      'Seif is an awesome upworker. A pleasure to deal with and always has a positive attitude. Even when things get rough, Seif is always there to back you up. Well recommend.',
    name: 'Matt Guiver',
    role: 'Founder, Picturespark',
  },
  {
    quote: 'Easily my best find on Upwork! Love this guy!',
    name: 'Luke Shepperd',
    role: 'CEO, Kudoz Reviews',
  },
];

export default function WhyChooseMe() {
  return (
    <>
      {/* Process */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
          <SectionHeading
            index="03"
            label="Process"
            title={
              <>
                A simple process,{' '}
                <span className="font-serif font-normal italic text-dim">built for momentum.</span>
              </>
            }
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeInSection key={step.title} delay={i * 0.08} className="bg-canvas">
                <div className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-surface">
                  <span className="font-serif text-6xl italic leading-none text-faint transition-colors duration-300 group-hover:text-brand">
                    {i + 1}
                  </span>
                  <h3 className="mt-10 text-xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              index="04"
              label="Kind words"
              title={
                <>
                  Trusted by founders{' '}
                  <span className="font-serif font-normal italic text-dim">who ship.</span>
                </>
              }
            />
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-sm text-dim transition-colors hover:text-fg"
            >
              More reviews on Upwork
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-line bg-surface p-8 md:p-10">
                  <blockquote className={`font-serif leading-[1.2] text-fg ${i === 0 ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}>
                    <span className="text-brand">&ldquo;</span>
                    {t.quote}
                    <span className="text-brand">&rdquo;</span>
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-surface-2 text-sm font-medium text-dim">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <span>
                      <span className="block font-medium">{t.name}</span>
                      <span className="block text-sm text-faint">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
