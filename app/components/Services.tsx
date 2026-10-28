"use client";

import { Rocket, Sparkles, Layers, Plug } from "lucide-react";
import FadeInSection from "./FadeInSection";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    title: "Rapid MVP development",
    description:
      "Go from idea to a working product in weeks, not months. Tight scope, fast iterations, real users sooner.",
    icon: Rocket,
    points: ["Product scoping", "Auth, billing & dashboards", "Launch-ready in weeks"],
    span: "md:col-span-2",
  },
  {
    title: "AI integration",
    description:
      "Automate workflows and add smart features with LLMs, embeddings and agents that fit your product.",
    icon: Sparkles,
    points: ["LLM features", "Workflow automation"],
    span: "",
  },
  {
    title: "Full stack platforms",
    description:
      "Scalable apps on React, Next.js, TypeScript and Supabase — portals, SaaS, and internal tools.",
    icon: Layers,
    points: ["Role-based portals", "Postgres + RLS"],
    span: "",
  },
  {
    title: "APIs & integrations",
    description:
      "REST and GraphQL APIs, payments, Slack, email and third-party services wired together reliably — with docs and tests.",
    icon: Plug,
    points: ["Stripe / Airwallex", "Slack & email", "Webhooks"],
    span: "md:col-span-2",
  },
];

export default function ServicesSection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading
          index="02"
          label="Services"
          title={
            <>
              What I can do{" "}
              <span className="font-serif font-normal italic text-dim">for you.</span>
            </>
          }
          description="Specialised in shipping MVPs quickly and integrating AI where it actually adds value."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 0.06} className={service.span}>
              <SpotlightCard className="flex h-full flex-col justify-between gap-12 p-7 md:p-9">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line-strong bg-surface-2 text-brand">
                    <service.icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-dim">{service.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.points.map((p) => (
                      <li key={p} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-dim">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
