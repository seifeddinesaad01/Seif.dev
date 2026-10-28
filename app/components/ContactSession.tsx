"use client";
import React from 'react';
import { ArrowUpRight, Clock, Shield, MessagesSquare } from 'lucide-react';
import FadeInSection from './FadeInSection';
import ContactForm from './ContactForm';
import SectionHeading from './SectionHeading';
import { UPWORK_URL } from '@/Data/data';

const perks = [
  { icon: Clock, title: 'Quick response', desc: 'Reply within 24 hours, usually much sooner.' },
  { icon: Shield, title: 'Client-first', desc: 'Clear pricing. Pay for results, no hidden costs.' },
  { icon: MessagesSquare, title: 'Direct line', desc: 'You talk to the person building your product.' },
];

const ContactSection = ({ index = '05' }: { index?: string }) => {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-28 md:px-8 md:py-36 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            index={index}
            label="Contact"
            title={
              <>
                Have an idea?{' '}
                <span className="font-serif font-normal italic text-brand">Let&apos;s build it.</span>
              </>
            }
            description="Tell me a bit about your project and I'll get back to you with next steps and a rough plan."
          />

          <ul className="mt-12 space-y-6">
            {perks.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong text-brand">
                  <item.icon className="size-4" />
                </span>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-dim">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm transition-colors hover:bg-surface-2"
          >
            <span className="size-2 rounded-full bg-green-400" />
            Also available on Upwork
            <ArrowUpRight className="size-4 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <FadeInSection>
          <div className="rounded-3xl border border-line bg-surface p-6 md:p-10">
            <ContactForm />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
