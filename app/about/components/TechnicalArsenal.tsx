"use client";

import React from 'react';
import { Sparkles, Server, Cloud, ShoppingBag } from 'lucide-react';
import FadeInSection from '@/app/components/FadeInSection';
import SectionHeading from '@/app/components/SectionHeading';
import SpotlightCard from '@/app/components/SpotlightCard';

const skills = [
  { title: 'Frontend', icon: Sparkles, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Supabase'] },
  { title: 'DevOps', icon: Cloud, items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
  { title: 'Platforms & commerce', icon: ShoppingBag, items: ['Shopify', 'WordPress', 'Framer', 'Webflow'] },
];

const TechnicalArsenal = () => {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading
          index="02"
          label="Toolkit"
          title={
            <>
              Tools I reach for{' '}
              <span className="font-serif font-normal italic text-dim">every day.</span>
            </>
          }
          description="Technologies I've used to ship real products over the years."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <FadeInSection key={group.title} delay={i * 0.06}>
              <SpotlightCard className="h-full p-7">
                <span className="grid size-11 place-items-center rounded-2xl border border-line-strong bg-surface-2 text-brand">
                  <group.icon className="size-5" />
                </span>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li key={tech} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-dim">
                      {tech}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;
