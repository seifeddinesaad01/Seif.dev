"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ProjectDetails as ProjectDetailsType } from "../types/project";
import FadeInSection from "@/app/components/FadeInSection";

interface ProjectDetailsProps {
  project: ProjectDetailsType;
}

const ease = [0.22, 1, 0.36, 1] as const;

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const tags = project.tags ?? [];
  const challenges = project.challenges ?? [];
  const features = project.features ?? [];
  const gallery = (project.gallery_urls ?? []).filter(Boolean);

  // Technologies are stored as a JSON string in the static data
  const technologies: Array<{ name?: string; description?: string }> = (() => {
    if (!project.technologies) return [];
    try {
      if (typeof project.technologies === "string") {
        const parsed = JSON.parse(project.technologies);
        return Array.isArray(parsed) ? parsed : [];
      }
      return Array.isArray(project.technologies) ? (project.technologies as any) : [];
    } catch {
      return [];
    }
  })();

  const meta = [
    { k: "Timeline", v: project.timeline },
    { k: "Team", v: project.team },
    {
      k: "Type",
      v: project.category === "mobile" ? "Mobile app" : project.category === "landing" ? "Landing page" : "Web platform",
    },
  ].filter((m) => m.v);

  const links = [
    project.demo_url && { href: project.demo_url, label: "Visit live site", icon: <ArrowUpRight className="size-4" />, primary: true },
    project.github_url && { href: project.github_url, label: "Source code", icon: <Github className="size-4" /> },
    project.google_play_url && { href: project.google_play_url, label: "Google Play", icon: <FaGooglePlay /> },
    project.app_store_url && { href: project.app_store_url, label: "App Store", icon: <FaApple /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode; primary?: boolean }[];

  return (
    <article className="relative pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Link
          href="/projects"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-dim transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease }}
          className="max-w-5xl text-[clamp(2.75rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.045em]"
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
          className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-[1.4fr_1fr]"
        >
          <p className="max-w-2xl text-lg leading-relaxed text-dim md:text-xl">{project.short_description}</p>
          <div className="space-y-6">
            <dl className="grid grid-cols-2 gap-6">
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">{m.k}</dt>
                  <dd className="mt-1.5 text-sm">{m.v}</dd>
                </div>
              ))}
            </dl>
            {links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                      l.primary ? "bg-brand text-white hover:bg-brand/85" : "border border-line-strong hover:bg-surface-2"
                    }`}
                  >
                    {l.label} {l.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {project.image_url && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="mx-auto mt-16 max-w-6xl px-5 md:px-8"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface-2">
            <Image src={project.image_url} alt={project.title} fill priority sizes="100vw" className="object-cover object-top" />
          </div>
        </motion.div>
      )}

      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        {/* Overview */}
        <FadeInSection className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Overview</h2>
          <p className="text-xl leading-relaxed text-fg/90 md:text-2xl md:leading-relaxed">
            {project.long_description}
          </p>
        </FadeInSection>

        {(challenges.length > 0 || features.length > 0) && (
          <div className="mt-24 grid gap-5 md:grid-cols-2">
            {[
              { title: "Challenges", items: challenges },
              { title: "Key features", items: features },
            ]
              .filter((b) => b.items.length)
              .map((block, i) => (
                <FadeInSection key={block.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-line bg-surface p-8">
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">{block.title}</h3>
                    <ul className="mt-6 space-y-4">
                      {block.items.map((item, j) => (
                        <li key={j} className="grid grid-cols-[2rem_1fr] text-dim">
                          <span className="font-mono text-xs leading-6 text-brand">{String(j + 1).padStart(2, "0")}</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              ))}
          </div>
        )}

        {technologies.length > 0 && (
          <FadeInSection className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Stack</h2>
            <dl className="divide-y divide-line border-y border-line">
              {technologies.map((tech, i) => (
                <div key={i} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="font-medium">{tech.name ?? "Tech"}</dt>
                  <dd className="text-dim">{tech.description ?? ""}</dd>
                </div>
              ))}
            </dl>
          </FadeInSection>
        )}

        {gallery.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-brand">Gallery</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {gallery.map((url, index) => (
                <FadeInSection key={index} delay={(index % 2) * 0.08}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-surface-2">
                    <Image
                      src={url}
                      alt={`Gallery image ${index + 1} for ${project.title}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        )}

        {project.reflection && (
          <FadeInSection className="mt-24 grid gap-8 md:grid-cols-[1fr_2fr]">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Reflection</h2>
            <div className="space-y-4 font-serif text-2xl leading-snug text-fg/90 md:text-3xl">
              {String(project.reflection)
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>
          </FadeInSection>
        )}
      </div>
    </article>
  );
};

export default ProjectDetails;
