"use client";
import { PROJECTS } from "@/Data/projects";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProjectDetails from "../components/ProjectDetails";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const project = PROJECTS.find((p) => p.id === id) ?? null;

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">404</p>
        <h1 className="text-4xl font-medium tracking-tight">Project not found</h1>
        <Link
          href="/projects"
          className="rounded-full border border-line-strong px-5 py-2.5 text-sm hover:bg-surface-2"
        >
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <ProjectDetails project={project} />
    </main>
  );
}
