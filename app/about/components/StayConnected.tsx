"use client";

import { ArrowUpRight } from "lucide-react";
import FadeInSection from "@/app/components/FadeInSection";
import SectionHeading from "@/app/components/SectionHeading";

const socials = [
  { title: "GitHub", handle: "seifeddinesaad01", description: "Open-source work and side projects", href: "https://github.com/seifeddinesaad01" },
  { title: "LinkedIn", handle: "Seif Eddine Saad", description: "Career journey and professional updates", href: "https://www.linkedin.com/in/seif-eddine-saad-3728aa19b/" },
  { title: "DEV.to", handle: "@seif_eddine_saad", description: "Articles and tutorials", href: "https://dev.to/seif_eddine_saad" },
  { title: "X (Twitter)", handle: "@Saif71564790", description: "Tech insights and dev tips", href: "https://x.com/Saif71564790" },
  { title: "Instagram", handle: "@saiifeddine01", description: "Behind the scenes of dev life", href: "https://www.instagram.com/saiifeddine01/" },
  { title: "Facebook", handle: "saiiif001", description: "Community and updates", href: "https://www.facebook.com/saiiif001/" },
];

export default function StayConnected() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading
          index="03"
          label="Elsewhere"
          title={
            <>
              Stay{" "}
              <span className="font-serif font-normal italic text-dim">connected.</span>
            </>
          }
          description="Follow along for new projects, write-ups and the occasional behind-the-scenes."
        />

        <ul className="mt-16 border-t border-line">
          {socials.map((s, i) => (
            <li key={s.title}>
              <FadeInSection delay={i * 0.04}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors hover:bg-surface md:grid-cols-[1fr_1fr_1fr_auto] md:px-4"
                >
                  <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-brand md:text-3xl">
                    {s.title}
                  </span>
                  <span className="hidden font-mono text-sm text-faint md:block">{s.handle}</span>
                  <span className="hidden text-sm text-dim md:block">{s.description}</span>
                  <span className="grid size-10 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
