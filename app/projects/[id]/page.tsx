// app/projects/[id]/page.tsx (or your ProjectDetailPage file)
"use client";
import { PROJECTS } from "@/Data/projects";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectDetails from "../components/ProjectDetails";

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  useEffect(() => {
    if (!id) {
      setError("No project id provided");
      setLoading(false);
      return;
    }

    const proj = PROJECTS.find((p) => p.id === id) ?? null;
    if (!proj) {
      setError("Project not found");
    } else {
      setProject(proj);
    }
    setLoading(false);
  }, [id]);

  const handleClose = () => {
    router.push("/projects");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProjectDetails project={project} onClose={handleClose} />
    </div>
  );
}
