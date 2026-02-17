// app/projects/page.tsx (or wherever your ProjectsPage lives)
"use client";
import { PROJECTS } from "@/Data/projects";
import { useState } from "react";
import { ProjectCard } from "./types/project";
import ProjectsList from "./components/ProjectsList";


export default function ProjectsPage() {
  const [projects] = useState<ProjectCard[]>(PROJECTS);
  // no remote loading so we don't need spinner; keep same UI output
  return <ProjectsList projects={projects} />;
}
