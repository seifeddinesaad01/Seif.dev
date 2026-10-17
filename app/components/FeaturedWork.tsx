"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/Data/projects";

const featuredIds = [
  "8d54f733-5f59-439a-84bd-ffcd8d950899",
  "c2cf5dd8-1ba4-4140-99d0-d34c4c98ca0f",
  "9cc23d10-1aea-4a20-92dd-95ce88764fa7",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedWork() {
  const featured = featuredIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-ink">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
              Recent launches
            </h2>
          </div>
          <motion.div whileHover={{ x: 4 }}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-signal"
            >
              All projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          {featured.map((project, index) => {
            if (!project) return null;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                whileHover={{ y: -4 }}
                className="group grid overflow-hidden rounded-[1.75rem] border border-line bg-white/55 backdrop-blur-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-ink/10 md:grid-cols-[1.2fr_0.8fr]"
              >
                <Link
                  href={project.demo_url || `/projects/${project.id}`}
                  target={project.demo_url ? "_blank" : undefined}
                  rel={project.demo_url ? "noreferrer" : undefined}
                  className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[280px]"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <Image
                      src={project.image_url || "/images/projects/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </Link>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-ink">
                      {project.category ?? "web"} · {project.timeline ?? "Shipped"}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-muted-ink leading-relaxed">
                      {project.short_description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {(project.tags ?? []).slice(0, 4).map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.05 }}
                          className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/80"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.demo_url && (
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href={project.demo_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-signal"
                        >
                          Live
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </motion.div>
                    )}
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal"
                      >
                        Case notes
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
