import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="px-5 pb-28 md:px-8 md:pb-36">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand px-7 py-16 text-white md:px-14 md:py-24">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full border border-white/20"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-4 top-10 size-48 rounded-full border border-white/20"
                />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">Next step</p>
                <h2 className="mt-6 max-w-3xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em]">
                    Ready to build something{' '}
                    <span className="font-serif font-normal italic">extraordinary?</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg text-white/80">
                    Your vision, my full-stack expertise. Let&apos;s turn it into a product that moves your business forward.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                        href="/hire-me#contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-canvas px-6 py-3.5 font-medium text-fg transition-transform hover:-translate-y-0.5"
                    >
                        Start your project
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-medium transition-colors hover:bg-white/10"
                    >
                        View my work
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
