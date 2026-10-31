"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, Github, X } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { ProjectCard } from "../types/project";
import BrowserThumb from "@/app/components/BrowserThumb";

type Category = "web" | "mobile" | "landing";

interface ProjectsListProps {
  projects: ProjectCard[];
}

const tabs: { id: Category; label: string }[] = [
  { id: "web", label: "Web apps" },
  { id: "mobile", label: "Mobile" },
  { id: "landing", label: "Landing pages" },
];

const emptyTabLabel: Record<Category, string> = {
  web: "web",
  mobile: "mobile",
  landing: "landing page",
};

const ease = [0.22, 1, 0.36, 1] as const;

function normalizeTab(value?: string | null): Category {
  if (value === "web" || value === "mobile" || value === "landing") return value;
  return "web";
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<Category>(
    normalizeTab(searchParams.get("tab"))
  );
  const [previewProject, setPreviewProject] = useState<ProjectCard | null>(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);

  const fallbackImage = "/images/projects/placeholder.svg";

  // Keep tab in sync if the URL changes externally (e.g. back/forward)
  useEffect(() => {
    setActiveTab(normalizeTab(searchParams.get("tab")));
  }, [searchParams]);

  useEffect(() => {
    document.body.style.overflow = previewProject ? "hidden" : "";
    if (!previewProject) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreviewProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previewProject]);

  const handleTabChange = (tab: Category) => {
    if (tab === activeTab) return;
    setActiveTab(tab);

    const params = new URLSearchParams();
    if (tab !== "web") params.set("tab", tab);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const countFor = (tab: Category) => projects.filter((p) => (p.category ?? "web") === tab).length;
  const filtered = projects.filter((p) => (p.category ?? "web") === activeTab);

  const getDisplayImages = (project: ProjectCard) => {
    const gallery = (project.gallery_urls ?? []).filter(Boolean);
    if (gallery.length > 0) return gallery;
    if (project.image_url) return [project.image_url];
    return [fallbackImage];
  };

  const openPreview = (project: ProjectCard) => {
    setPreviewImageIndex(0);
    setPreviewProject(project);
  };

  const previewImages = previewProject ? getDisplayImages(previewProject) : [];

  return (
    <main className="relative min-h-screen overflow-hidden pt-36 md:pt-44">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[600px]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-28 md:px-8 md:pb-36">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim"
            >
              <span className="text-brand">Work</span>
              <span className="h-px w-8 bg-line-strong" />
              {projects.length} projects
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease, delay: 0.08 }}
              className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.045em]"
            >
              Selected <span className="font-serif font-normal italic text-dim">work.</span>
            </motion.h1>
          </div>

          {/* Tab Bar */}
          <div className="flex w-fit items-center gap-1 rounded-full border border-line-strong bg-surface p-1">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive ? "text-canvas" : "text-dim hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}
                    <span className={`font-mono text-[11px] ${isActive ? "text-canvas/60" : "text-faint"}`}>
                      {countFor(tab.id)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="mt-16 grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2"
          >
            {filtered.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-line-strong py-24 text-center text-dim">
                No {emptyTabLabel[activeTab]} projects yet. Stay tuned!
              </div>
            ) : (
              filtered.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: index * 0.06 }}
                  className="group"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="relative block aspect-[16/11] overflow-hidden rounded-3xl border border-line bg-surface-2"
                  >
                    {project.accent && project.image_url ? (
                      <BrowserThumb
                        src={project.image_url}
                        alt={project.title}
                        accent={project.accent}
                        url={project.demo_url}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <Image
                        src={project.image_url || fallbackImage}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={`${project.category === "mobile" ? "object-contain p-10" : "object-cover object-top"} transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]`}
                      />
                    )}
                    <span className="absolute right-4 top-4 grid size-11 translate-y-2 place-items-center rounded-full bg-fg text-canvas opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </Link>

                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                        {String(index + 1).padStart(2, "0")} · {(project.tags ?? []).slice(0, 2).join(" / ")}
                      </p>
                      <Link href={`/projects/${project.id}`}>
                        <h2 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-brand">
                          {project.title}
                        </h2>
                      </Link>
                      <p className="mt-2 line-clamp-2 leading-relaxed text-dim">{project.short_description}</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        onClick={() => openPreview(project)}
                        className="grid size-10 place-items-center rounded-full border border-line-strong text-dim transition-colors hover:bg-surface-2 hover:text-fg"
                        aria-label={`Quick preview of ${project.title}`}
                        title="Quick preview"
                      >
                        <Eye className="size-4" />
                      </button>
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noreferrer"
                          className="grid size-10 place-items-center rounded-full border border-line-strong text-dim transition-colors hover:border-brand hover:bg-brand hover:text-white"
                          aria-label={`Open ${project.title} live`}
                          title="Live site"
                        >
                          <ArrowUpRight className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-[999] bg-canvas/85 p-3 backdrop-blur-md md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${previewProject.title} preview`}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-line-strong bg-surface shadow-2xl"
            >
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-5">
                <div className="flex items-center gap-3">
                  <span className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-line-strong" />
                    <span className="size-2.5 rounded-full bg-line-strong" />
                    <span className="size-2.5 rounded-full bg-line-strong" />
                  </span>
                  <p className="truncate text-sm text-dim">{previewProject.title}</p>
                </div>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="grid size-9 place-items-center rounded-full bg-surface-2 text-dim transition-colors hover:text-fg"
                  aria-label="Close preview"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-5 lg:overflow-hidden">
                {/* Left: iframe or image gallery */}
                <div className="border-b border-line p-4 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-5">
                  {previewProject.demo_url ? (
                    <iframe
                      src={previewProject.demo_url}
                      title={`${previewProject.title} demo`}
                      className="h-full min-h-[420px] w-full rounded-2xl border border-line bg-canvas"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <div className="flex h-full flex-col">
                      <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-2xl border border-line bg-canvas">
                        <Image
                          src={previewImages[previewImageIndex]}
                          alt={`${previewProject.title} preview`}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {previewImages.length > 1 && (
                        <div className="mt-3 flex items-center justify-center gap-3">
                          <button
                            onClick={() =>
                              setPreviewImageIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length)
                            }
                            className="grid size-10 place-items-center rounded-full border border-line-strong hover:bg-surface-2"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="size-4" />
                          </button>
                          <span className="font-mono text-xs text-faint">
                            {previewImageIndex + 1} / {previewImages.length}
                          </span>
                          <button
                            onClick={() => setPreviewImageIndex((prev) => (prev + 1) % previewImages.length)}
                            className="grid size-10 place-items-center rounded-full border border-line-strong hover:bg-surface-2"
                            aria-label="Next image"
                          >
                            <ChevronRight className="size-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: details */}
                <div className="space-y-6 p-5 lg:col-span-2 lg:overflow-y-auto lg:p-8">
                  <h3 className="text-3xl font-medium tracking-tight">{previewProject.title}</h3>
                  <p className="leading-relaxed text-dim">
                    {previewProject.long_description || previewProject.short_description}
                  </p>

                  {!!previewProject.features?.length && (
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">Features</h4>
                      <ul className="space-y-2 text-sm text-dim">
                        {previewProject.features.map((feature) => (
                          <li key={feature} className="flex gap-3">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {(previewProject.tags ?? []).map((tag) => (
                      <span key={tag} className="rounded-full border border-line-strong px-3 py-1 text-xs text-dim">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-line pt-6">
                    <Link
                      href={`/projects/${previewProject.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-canvas hover:bg-brand hover:text-white"
                    >
                      Full case study <ArrowUpRight className="size-4" />
                    </Link>
                    {previewProject.demo_url && (
                      <a
                        href={previewProject.demo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm hover:bg-surface-2"
                      >
                        Live site <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    {previewProject.github_url && (
                      <a
                        href={previewProject.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm hover:bg-surface-2"
                      >
                        <Github className="size-4" /> Code
                      </a>
                    )}
                    {previewProject.google_play_url && (
                      <a
                        href={previewProject.google_play_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm hover:bg-surface-2"
                      >
                        <FaGooglePlay /> Google Play
                      </a>
                    )}
                    {previewProject.app_store_url && (
                      <a
                        href={previewProject.app_store_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm hover:bg-surface-2"
                      >
                        <FaApple /> App Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
