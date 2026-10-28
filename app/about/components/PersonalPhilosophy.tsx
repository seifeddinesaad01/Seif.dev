"use client";

import FadeInSection from '@/app/components/FadeInSection';
import SectionHeading from '@/app/components/SectionHeading';

const philosophies = [
  {
    title: "Passion-driven development",
    description: "Coding isn't just a job — it's a calling. Every line is written with purpose.",
  },
  {
    title: "Impact-focused",
    description: "Building solutions that make a real difference for the people who use them.",
  },
  {
    title: "Continuous growth",
    description: "Practice and repetition are how good work becomes excellent work.",
  },
  {
    title: "Quality first",
    description: "High-quality, maintainable code that stands the test of time.",
  },
];

const PersonalPhilosophy = () => {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-28 md:px-8 md:py-36 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="01"
            label="Philosophy"
            title={
              <>
                What I{' '}
                <span className="font-serif font-normal italic text-dim">stand for.</span>
              </>
            }
          />
        </div>
        <ol className="border-t border-line">
          {philosophies.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <FadeInSection delay={i * 0.05}>
                <div className="group grid grid-cols-[3rem_1fr] gap-4 py-8 md:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm text-faint transition-colors group-hover:text-brand">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-lg leading-relaxed text-dim">{item.description}</p>
                  </div>
                </div>
              </FadeInSection>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PersonalPhilosophy;
