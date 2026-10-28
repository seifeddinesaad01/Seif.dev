"use client";

import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroBanner = () => {
    return (
        <section className="relative overflow-hidden pt-36 md:pt-44">
            <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[120px]"
            />
            <div className="relative mx-auto max-w-6xl px-5 pb-20 md:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-4 py-1.5 text-sm text-dim backdrop-blur"
                >
                    <span className="size-2 animate-pulse-dot rounded-full bg-green-400" />
                    Available for new projects
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease, delay: 0.08 }}
                    className="max-w-5xl text-[clamp(3rem,8.5vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em]"
                >
                    You and I can make an{" "}
                    <span className="font-serif font-normal italic text-brand">impact.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.2 }}
                    className="mt-10 max-w-xl text-lg leading-relaxed text-dim md:text-xl"
                >
                    Expert full stack development and AI integration — pick the engagement that fits, and let&apos;s get
                    started.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroBanner;
