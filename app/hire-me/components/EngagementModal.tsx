import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import FadeInSection from '@/app/components/FadeInSection';
import SectionHeading from '@/app/components/SectionHeading';

const models = [
  {
    title: 'Project based',
    tagline: 'Fixed scope',
    description: 'For defined projects with clear deliverables and a fixed budget.',
    features: ['Fixed price guarantee', 'Clear timeline & milestones', 'Dedicated support'],
    button: 'Get a quote',
    featured: false,
  },
  {
    title: 'Monthly retainer',
    tagline: 'Most popular',
    description: 'An ongoing partner for continuous development and maintenance.',
    features: ['Reserved monthly hours', 'Priority support', 'Regular updates'],
    button: 'Start monthly plan',
    featured: true,
  },
  {
    title: 'Hourly',
    tagline: 'Flexible',
    description: 'Flexible engagement for varying or exploratory needs.',
    features: ['Pay as you go', 'No long-term commitment', 'Regular updates'],
    button: 'Get started',
    featured: false,
  },
];

const EngagementModels = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading
          index="01"
          label="Engagement"
          title={
            <>
              Flexible ways{' '}
              <span className="font-serif font-normal italic text-dim">to work together.</span>
            </>
          }
          description="Choose the collaboration model that best fits your project."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {models.map((model, i) => (
            <FadeInSection key={model.title} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 transition-transform duration-500 hover:-translate-y-1 ${
                  model.featured
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-surface'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs uppercase tracking-[0.18em] ${model.featured ? 'text-white/70' : 'text-faint'}`}>
                    0{i + 1}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      model.featured ? 'bg-canvas text-fg' : 'border border-line-strong text-dim'
                    }`}
                  >
                    {model.tagline}
                  </span>
                </div>
                <h3 className="mt-10 text-3xl font-medium tracking-tight">{model.title}</h3>
                <p className={`mt-3 leading-relaxed ${model.featured ? 'text-white/80' : 'text-dim'}`}>
                  {model.description}
                </p>
                <ul className={`mt-8 flex-1 space-y-3 border-t pt-8 ${model.featured ? 'border-white/20' : 'border-line'}`}>
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className={`size-4 shrink-0 ${model.featured ? '' : 'text-brand'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className={`group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-medium transition-colors ${
                    model.featured
                      ? 'bg-canvas text-fg hover:bg-surface-2'
                      : 'border border-line-strong hover:bg-surface-2'
                  }`}
                >
                  {model.button}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
