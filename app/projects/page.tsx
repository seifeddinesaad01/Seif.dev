import { Suspense } from "react";
import { PROJECTS } from "@/Data/projects";
import ProjectsList from "./components/ProjectsList";

// Server component — no "use client" here
export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-gray-400">
          Loading projects…
        </div>
      }
    >
      <ProjectsList projects={PROJECTS} />
    </Suspense>
  );
}