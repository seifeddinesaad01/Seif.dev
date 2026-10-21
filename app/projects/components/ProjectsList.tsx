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
    label: "Web Development",
    icon: <FaGlobe />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile",
    label: "Mobile Development",
    icon: <FaMobileAlt />,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "landing",
    label: "Landing Pages",
    icon: <FaRocket />,
    color: "from-amber-500 to-orange-500",
  },
];

const tabAccent: Record<
  Category,
  { color: string; tag: string; btn: string; border: string; panel: string }
> = {
  web: {
    color: "from-blue-500 to-cyan-500",
    tag: "text-blue-600 border-blue-100 bg-white",
    btn: "from-blue-600 to-cyan-600",
    border: "border-blue-100",
    panel: "bg-blue-50/40",
  },
  mobile: {
    color: "from-violet-500 to-fuchsia-500",
    tag: "text-violet-600 border-violet-100 bg-white",
    btn: "from-violet-600 to-fuchsia-600",
    border: "border-violet-100",
    panel: "bg-violet-50/40",
  },
  landing: {
    color: "from-amber-500 to-orange-500",
    tag: "text-amber-700 border-amber-100 bg-white",
    btn: "from-amber-500 to-orange-600",
    border: "border-amber-100",
    panel: "bg-amber-50/40",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          My{" "}
          <span
            className={`bg-gradient-to-r ${activeColor} bg-clip-text text-transparent transition-all duration-500`}
          >
            Projects
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mx-auto h-1 rounded-full bg-gradient-to-r ${activeColor} transition-all duration-500`}
        />
      </div>

      {/* Tab Bar */}
      <div className="mb-14 flex justify-center px-2">
        <div className="relative flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-gray-100 bg-white p-1.5 shadow-lg">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="relative z-10 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 sm:px-6"
                style={{ color: isActive ? "white" : "#6b7280" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color} shadow-md`}
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

      {/* Project Cards */}
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
            <div className="col-span-full py-24 text-center text-lg font-medium text-gray-400">
              No {emptyTabLabel[activeTab]} projects yet. Stay tuned!
            </div>
          ) : (
            filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-300 ${activeCardAccent.border}`}
              >
                <div className="p-5 md:p-6">
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-gray-100">
                    <Image
                      src={project.image_url || fallbackImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-900 md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-gray-600">
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
                      className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2.5 text-sm font-medium text-white ${activeCardAccent.btn}`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Preview
                    </button>

                    {project.demo_url && (
                      <Link
                        href={project.demo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white"
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