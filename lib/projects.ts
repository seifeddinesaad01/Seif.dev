// lib/projects.ts

import { ProjectCard, ProjectDetails } from "@/app/projects/types/project";
import { PROJECTS } from "@/Data/projects";

export async function getAllProjects(): Promise<ProjectCard[]> {
  // kept async to minimize changes where this is used.
  return PROJECTS;
}

export async function getProjectById(id: string): Promise<ProjectDetails | null> {
  const found = PROJECTS.find((p) => p.id === id) ?? null;
  return found;
}
