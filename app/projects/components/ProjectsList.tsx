"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FaApple,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { ProjectCard } from "../types/project";

interface ProjectsListProps {
  projects: ProjectCard[];
}

type Category = "web" | "mobile" | "landing" ;

const VALID_TABS = new Set<Category>(["web", "mobile", "landing"]);

function tabFromSearchParam(value: string | null): Category {
  if (value && VALID_TABS.has(value as Category)) return value as Category;
  return "web";
}

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
  }
};

const emptyTabLabel: Record<Category, string> = {
  web: "web",
  mobile: "mobile",
  landing: "landing page",

};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tabFromUrl = tabFromSearchParam(searchParams.get("tab"));

  const [activeTab, setActiveTab] = useState<Category>(tabFromUrl);
  const [previewProject, setPreviewProject] = useState<ProjectCard | null>(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const fallbackImage = "/images/projects/placeholder.svg";

  const tabParam = searchParams.get("tab");
  useEffect(() => {
    const nextTab = tabFromSearchParam(tabParam);
    if (nextTab !== activeTab) setActiveTab(nextTab);
  }, [tabParam, activeTab]);

  const handleTabChange = (tab: Category) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Default category is "web" when omitted.
  const filtered = projects.filter(
    (p) => (p.category ?? "web") === activeTab
  );
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
      <div className="flex justify-center mb-14 px-2">
        <div className="relative flex flex-wrap items-center justify-center gap-1 bg-white rounded-2xl p-1.5 shadow-lg border border-gray-100 max-w-full">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="relative z-10 flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
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

      {/* ── Projects Grid (2 per row on large screens) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6"
        >
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-24 text-gray-400 text-lg font-medium">
              No {emptyTabLabel[activeTab]} projects yet. Stay tuned!
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
                <div className="p-5 md:p-6">
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-gray-100">
                    <Image
                      src={project.image_url || fallbackImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{project.short_description}</p>

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

                  <div className="flex flex-wrap gap-3 mt-5">
                    <button
                      onClick={() => openPreview(project)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${activeCardAccent.btn} text-white rounded-lg text-sm font-medium`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Preview
                    </button>
                    {project.demo_url && (
                      <Link
                        href={project.demo_url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium"
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

      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm p-3 md:p-6"
          >
            <div className="w-full h-full max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
              <div className="h-14 px-4 md:px-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <p className="text-sm md:text-base font-semibold text-gray-800 truncate pr-4">
                  {previewProject.title} - Project Preview
                </p>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <FaTimes className="text-xs" />
                  Close
                </button>
              </div>
              <div className="h-[calc(100%-56px)] grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
                  {previewProject.demo_url ? (
                    <iframe
                      src={previewProject.demo_url}
                      title={`${previewProject.title} demo`}
                      className="w-full h-full min-h-[420px] rounded-xl border border-gray-200 bg-gray-50"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <div className="h-full flex flex-col">
                      <div className="relative flex-1 min-h-[420px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
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
                              setPreviewImageIndex((prev) =>
                                (prev - 1 + getDisplayImages(previewProject).length) %
                                getDisplayImages(previewProject).length
                              )
                            }
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium"
                          >
                            <FaChevronLeft />
                            Prev
                          </button>
                          <button
                            onClick={() =>
                              setPreviewImageIndex(
                                (prev) => (prev + 1) % getDisplayImages(previewProject).length
                              )
                            }
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium"
                          >
                            Next
                            <FaChevronRight />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="lg:col-span-2 p-4 md:p-6 overflow-y-auto space-y-5">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {previewProject.long_description || previewProject.short_description}
                  </p>

                  {!!previewProject.features?.length && (
                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {previewProject.features.map((feature) => (
                          <li key={feature}>- {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!!previewProject.challenges?.length && (
                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenges</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {previewProject.challenges.map((challenge) => (
                          <li key={challenge}>- {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {previewProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 ${activeCardAccent.tag} text-xs font-medium rounded-full shadow-sm border`}
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
                        className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${activeCardAccent.btn} text-white rounded-lg text-sm font-medium`}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </Link>
                    )}
                    {previewProject.github_url && (
                      <Link
                        href={previewProject.github_url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium"
                      >
                        <FaGithub />
                        Code
                      </Link>
                    )}
                    {previewProject.google_play_url && (
                      <Link
                        href={previewProject.google_play_url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 text-white rounded-lg text-sm font-medium"
                      >
                        <FaGooglePlay />
                        Google Play
                      </Link>
                    )}
                    {previewProject.app_store_url && (
                      <Link
                        href={previewProject.app_store_url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white rounded-lg text-sm font-medium"
                      >
                        <FaApple />
                        App Store
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
};

export default ProjectsList;