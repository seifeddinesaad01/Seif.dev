"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FaApple,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaMobileAlt,
  FaRocket,
  FaTimes,
} from "react-icons/fa";
import type { ReactNode } from "react";
import type { ProjectCard } from "../types/project";

type Category = "web" | "mobile" | "landing";

interface ProjectsListProps {
  projects: ProjectCard[];
}

const tabs: { id: Category; label: string; icon: ReactNode; color: string }[] = [
  {
    id: "web",
    label: "Web",
    icon: <FaGlobe />,
    color: "bg-ink",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: <FaMobileAlt />,
    color: "bg-ink",
  },
  {
    id: "landing",
    label: "Landing",
    icon: <FaRocket />,
    color: "bg-ink",
  },
];

const tabAccent: Record<
  Category,
  { color: string; tag: string; btn: string; border: string; panel: string }
> = {
  web: {
    color: "text-signal",
    tag: "text-ink border-line bg-white/70",
    btn: "bg-signal hover:bg-teal-800",
    border: "border-line",
    panel: "bg-mist/80",
  },
  mobile: {
    color: "text-signal",
    tag: "text-ink border-line bg-white/70",
    btn: "bg-signal hover:bg-teal-800",
    border: "border-line",
    panel: "bg-mist/80",
  },
  landing: {
    color: "text-signal",
    tag: "text-ink border-line bg-white/70",
    btn: "bg-signal hover:bg-teal-800",
    border: "border-line",
    panel: "bg-mist/80",
  },
};

const emptyTabLabel: Record<Category, string> = {
  web: "web",
  mobile: "mobile",
  landing: "landing page",
};

function normalizeTab(value?: string | null): Category {
  if (value === "web" || value === "mobile" || value === "landing") return value;
  return "web";
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // ✅ called inside the Suspense-wrapped client component

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

  const handleTabChange = (tab: Category) => {
    if (tab === activeTab) return;
    setActiveTab(tab);

    const params = new URLSearchParams();
    if (tab !== "web") params.set("tab", tab);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

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

  const activeColor = tabAccent[activeTab].color;
  const activeCardAccent = tabAccent[activeTab];

  return (
    <div className="min-h-screen px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto mb-12 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-muted-ink"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-4xl font-bold text-ink md:text-6xl"
        >
          Selected <span className={activeColor}>work</span>
        </motion.h1>
        <p className="mt-4 max-w-xl text-lg text-muted-ink">
          Production apps, field-ops platforms, and product surfaces shipped for
          real clients.
        </p>
      </div>

      <div className="mb-12 flex justify-start px-0 md:justify-center">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 rounded-full border border-line bg-white/60 p-1.5 backdrop-blur-md">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="relative z-10 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-5"
                style={{ color: isActive ? "white" : "#5b6b7c" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className={`absolute inset-0 rounded-full ${tab.color}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 xl:grid-cols-2"
        >
          {filtered.length === 0 ? (
            <div className="col-span-full py-24 text-center text-lg font-medium text-muted-ink">
              No {emptyTabLabel[activeTab]} projects yet. Stay tuned!
            </div>
          ) : (
            filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`overflow-hidden rounded-[1.75rem] border bg-white/70 shadow-lg shadow-ink/5 backdrop-blur-sm transition-all duration-300 ${activeCardAccent.border}`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-mist">
                  <Image
                    src={project.image_url || fallbackImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 560px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-muted-ink">
                    {project.short_description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(project.tags ?? []).slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-medium shadow-sm ${activeCardAccent.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      onClick={() => openPreview(project)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white ${activeCardAccent.btn}`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Preview
                    </button>

                    {project.demo_url && (
                      <Link
                        href={project.demo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-signal"
                      >
                        <FaGlobe />
                        Live
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 p-3 backdrop-blur-sm md:p-6"
          >
            <div className="mx-auto h-full w-full max-w-7xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-gray-50 px-4 md:px-5">
                <p className="truncate pr-4 text-sm font-semibold text-gray-800 md:text-base">
                  {previewProject.title} — Project Preview
                </p>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-800 md:text-sm"
                >
                  <FaTimes className="text-xs" />
                  Close
                </button>
              </div>

              <div className="grid h-[calc(100%-56px)] grid-cols-1 lg:grid-cols-5">
                {/* Left: iframe or image gallery */}
                <div className="border-b border-gray-200 p-4 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-6">
                  {previewProject.demo_url ? (
                    <iframe
                      src={previewProject.demo_url}
                      title={`${previewProject.title} demo`}
                      className="min-h-[420px] h-full w-full rounded-xl border border-gray-200 bg-gray-50"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <div className="flex h-full flex-col">
                      <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                        <Image
                          src={getDisplayImages(previewProject)[previewImageIndex]}
                          alt={`${previewProject.title} preview`}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {getDisplayImages(previewProject).length > 1 && (
                        <div className="mt-3 flex items-center justify-center gap-3">
                          <button
                            onClick={() =>
                              setPreviewImageIndex(
                                (prev) =>
                                  (prev - 1 + getDisplayImages(previewProject).length) %
                                  getDisplayImages(previewProject).length
                              )
                            }
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                          >
                            <FaChevronLeft /> Prev
                          </button>
                          <button
                            onClick={() =>
                              setPreviewImageIndex(
                                (prev) => (prev + 1) % getDisplayImages(previewProject).length
                              )
                            }
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                          >
                            Next <FaChevronRight />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: details */}
                <div className="space-y-5 overflow-y-auto p-4 lg:col-span-2 md:p-6">
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                    {previewProject.long_description || previewProject.short_description}
                  </p>

                  {!!previewProject.features?.length && (
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">Features</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {previewProject.features.map((feature) => (
                          <li key={feature}>- {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!!previewProject.challenges?.length && (
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-gray-900">Challenges</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {previewProject.challenges.map((challenge) => (
                          <li key={challenge}>- {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {(previewProject.tags ?? []).map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-medium shadow-sm ${activeCardAccent.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {previewProject.demo_url && (
                      <Link
                        href={previewProject.demo_url}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2.5 text-sm font-medium text-white ${activeCardAccent.btn}`}
                      >
                        <FaExternalLinkAlt className="text-xs" /> Live Demo
                      </Link>
                    )}
                    {previewProject.github_url && (
                      <Link
                        href={previewProject.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white"
                      >
                        <FaGithub /> Code
                      </Link>
                    )}
                    {previewProject.google_play_url && (
                      <Link
                        href={previewProject.google_play_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white"
                      >
                        <FaGooglePlay /> Google Play
                      </Link>
                    )}
                    {previewProject.app_store_url && (
                      <Link
                        href={previewProject.app_store_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-white"
                      >
                        <FaApple /> App Store
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}