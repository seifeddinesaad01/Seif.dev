"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaApple,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaTimes,
  FaExternalLinkAlt,
  FaExpand,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaCompress,
  FaMobileAlt,
} from "react-icons/fa";
import { ProjectCard } from "../types/project";

interface ProjectsListProps {
  projects: ProjectCard[];
}

type Category = "web" | "mobile";

const tabs: { id: Category; label: string; icon: React.ReactNode; color: string }[] = [
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
];

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const [activeTab, setActiveTab] = useState<Category>("web");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [fullscreenDemo, setFullscreenDemo] = useState<{
    url: string;
    title: string;
  } | null>(null);
  const [galleryPreview, setGalleryPreview] = useState<{
    title: string;
    images: string[];
    index: number;
  } | null>(null);
  const fallbackImage = "/images/projects/placeholder.svg";

  // All existing projects go to web by default.
  // To add mobile projects, give them a `category: "mobile"` field.
  // If the project has no category field we default it to "web".
  const filtered = projects.filter(
    (p) => ((p as any).category ?? "web") === activeTab
  );
  const getDisplayImages = (project: ProjectCard) => {
    const gallery = (project.gallery_urls ?? []).filter(Boolean);
    if (gallery.length > 0) return gallery;
    if (project.image_url) return [project.image_url];
    return [fallbackImage];
  };

  const activeColor =
    activeTab === "web" ? "from-blue-500 to-cyan-500" : "from-violet-500 to-fuchsia-500";

  const activeCardAccent =
    activeTab === "web"
      ? {
          tag: "text-blue-600 border-blue-100 bg-white",
          btn: "from-blue-600 to-cyan-600",
          border: "border-blue-100",
          panel: "bg-blue-50/40",
        }
      : {
          tag: "text-violet-600 border-violet-100 bg-white",
          btn: "from-violet-600 to-fuchsia-600",
          border: "border-violet-100",
          panel: "bg-violet-50/40",
        };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* ── Section Header ── */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          My{" "}
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${activeColor} transition-all duration-500`}>
            Projects
          </span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`h-1 bg-gradient-to-r ${activeColor} mx-auto rounded-full transition-all duration-500`}
        />
      </div>

      {/* ── Tab Switcher ── */}
      <div className="flex justify-center mb-14">
        <div className="relative flex items-center gap-1 bg-white rounded-2xl p-1.5 shadow-lg border border-gray-100">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative z-10 flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
                style={{ color: isActive ? "white" : "#6b7280" }}
              >
                {/* Sliding pill background */}
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

      {/* ── Projects Accordion ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="max-w-6xl mx-auto space-y-6"
        >
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-24 text-gray-400 text-lg font-medium">
              No {activeTab === "web" ? "web" : "mobile"} projects yet. Stay tuned!
            </div>
          ) : (
            filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`overflow-hidden rounded-3xl bg-white shadow-lg border ${activeCardAccent.border} transition-all duration-300`}
              >
                <button
                  onClick={() =>
                    setExpandedProjectId((prev) => (prev === project.id ? null : project.id))
                  }
                  className="w-full text-left"
                >
                  <div className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row gap-5 md:items-center">
                      <div className="relative w-full md:w-72 h-40 rounded-2xl overflow-hidden border border-gray-100">
                        <Image
                          src={project.image_url || fallbackImage}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mt-2 line-clamp-2">
                              {project.short_description}
                            </p>
                          </div>
                          <FaChevronDown
                            className={`text-gray-500 mt-1 shrink-0 transition-transform duration-200 ${
                              expandedProjectId === project.id ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 ${activeCardAccent.tag} text-xs font-medium rounded-full shadow-sm border`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedProjectId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`px-5 md:px-6 pb-6 border-t border-gray-100 ${activeCardAccent.panel}`}
                    >
                      <div className="pt-5 space-y-5">
                        {project.long_description && (
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {project.long_description}
                          </p>
                        )}

                        {(project.features?.length || project.challenges?.length) && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {!!project.features?.length && (
                              <div className="bg-white rounded-xl border border-gray-100 p-4">
                                <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                  {project.features.map((feature) => (
                                    <li key={feature}>- {feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {!!project.challenges?.length && (
                              <div className="bg-white rounded-xl border border-gray-100 p-4">
                                <h4 className="font-semibold text-gray-900 mb-2">Challenges</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                  {project.challenges.map((challenge) => (
                                    <li key={challenge}>- {challenge}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {(project.github_url ||
                          project.demo_url ||
                          project.google_play_url ||
                          project.app_store_url) && (
                          <div className="flex flex-wrap gap-3">
                            {project.demo_url && (
                              <Link
                                href={project.demo_url}
                                target="_blank"
                                className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${activeCardAccent.btn} text-white rounded-lg text-sm font-medium`}
                              >
                                <FaExternalLinkAlt className="text-xs" />
                                Live Demo
                              </Link>
                            )}
                            {project.github_url && (
                              <Link
                                href={project.github_url}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium"
                              >
                                <FaGithub />
                                Code
                              </Link>
                            )}
                            {project.google_play_url && (
                              <Link
                                href={project.google_play_url}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-medium"
                              >
                                <FaGooglePlay />
                                Google Play
                              </Link>
                            )}
                            {project.app_store_url && (
                              <Link
                                href={project.app_store_url}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white rounded-lg text-sm font-medium"
                              >
                                <FaApple />
                                App Store
                              </Link>
                            )}
                          </div>
                        )}

                        {project.demo_url ? (
                          <div className="bg-white rounded-2xl border border-gray-100 p-3 md:p-4">
                            <div className="flex items-center justify-between gap-3 mb-3">
                              <h4 className="font-semibold text-gray-900">Embedded Demo</h4>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setFullscreenDemo({
                                    url: project.demo_url as string,
                                    title: project.title,
                                  });
                                }}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
                              >
                                <FaExpand className="text-xs" />
                                Full Screen
                              </button>
                            </div>
                            <div className="relative w-full h-[420px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                              <iframe
                                src={project.demo_url}
                                title={`${project.title} demo`}
                                className="w-full h-full"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-2xl border border-gray-100 p-3 md:p-4">
                            <h4 className="font-semibold text-gray-900 mb-3">Project Images</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {getDisplayImages(project).map((url, i) => (
                                <button
                                  key={`${project.id}-img-${i}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setGalleryPreview({
                                      title: project.title,
                                      images: getDisplayImages(project),
                                      index: i,
                                    });
                                  }}
                                  className="relative h-52 rounded-xl overflow-hidden border border-gray-200 bg-gray-50"
                                >
                                  <Image
                                    src={url}
                                    alt={`${project.title} preview ${i + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {fullscreenDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm p-3 md:p-6"
          >
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
              <div className="h-14 px-4 md:px-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <p className="text-sm md:text-base font-semibold text-gray-800 truncate pr-4">
                  {fullscreenDemo.title} - Live Demo
                </p>
                <button
                  onClick={() => setFullscreenDemo(null)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <FaCompress className="text-xs" />
                  Back to Small View
                </button>
              </div>
              <iframe
                src={fullscreenDemo.url}
                title={`${fullscreenDemo.title} fullscreen demo`}
                className="w-full h-[calc(100%-56px)]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {galleryPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 p-3 md:p-8"
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex items-center justify-between text-white mb-3 md:mb-4">
                <p className="text-sm md:text-base font-semibold truncate pr-4">
                  {galleryPreview.title} - Image {galleryPreview.index + 1} /{" "}
                  {galleryPreview.images.length}
                </p>
                <button
                  onClick={() => setGalleryPreview(null)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-sm font-medium transition-colors"
                >
                  <FaTimes />
                  Close
                </button>
              </div>

              <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/15 bg-black">
                <Image
                  src={galleryPreview.images[galleryPreview.index]}
                  alt={`${galleryPreview.title} large preview ${galleryPreview.index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {galleryPreview.images.length > 1 && (
                <div className="mt-3 md:mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      setGalleryPreview((prev) =>
                        prev
                          ? {
                              ...prev,
                              index:
                                (prev.index - 1 + prev.images.length) % prev.images.length,
                            }
                          : prev
                      )
                    }
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-sm font-medium transition-colors"
                  >
                    <FaChevronLeft />
                    Prev
                  </button>
                  <button
                    onClick={() =>
                      setGalleryPreview((prev) =>
                        prev
                          ? {
                              ...prev,
                              index: (prev.index + 1) % prev.images.length,
                            }
                          : prev
                      )
                    }
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-sm font-medium transition-colors"
                  >
                    Next
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsList;