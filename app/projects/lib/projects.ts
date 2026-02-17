// src/lib/projects.ts
import { createClient } from "@/utils/supabase/client";
import { ProjectCard, ProjectDetails } from "../types/project";

const supabase = createClient();

/**
 * Raw shape of rows returned by the select() call.
 * idx is optional on the raw row because the DB might not have it.
 */
type RawProjectRow = {
  idx?: number | null;
  id: string;
  title: string;
  short_description: string;
  image_url?: string | null;
  tags?: string[] | string | null;
  demo_url?: string | null;
  github_url?: string | null;
};

/**
 * Fetch all projects and ensure each returned ProjectCard includes `idx`.
 * If the DB didn't provide `idx`, we generate a zero-based index based on the
 * ordered result.
 */
export async function getAllProjects(): Promise<ProjectCard[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        idx,
        id,
        title,
        short_description,
        image_url,
        tags,
        demo_url,
        github_url
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;
    if (!data) return [];

    // Cast to RawProjectRow[] for type-safety
    const rows = data as RawProjectRow[];

    const projects: ProjectCard[] = rows.map((row, index) => {
      // Normalize fields so they match ProjectCard shape.
      // Use DB idx if present, otherwise generate from index.
      const idx = typeof row.idx === "number" ? row.idx : index;

      // If your ProjectCard expects certain non-nullable types,
      // ensure you transform or default here.
      return {
        idx,
        id: row.id,
        title: row.title,
        short_description: row.short_description,
        image_url: row.image_url ?? undefined,
        tags: (Array.isArray(row.tags) ? row.tags : row.tags ?? undefined) as
          | string[]
          | string
          | undefined,
        demo_url: row.demo_url ?? undefined,
        github_url: row.github_url ?? undefined,
      } as ProjectCard;
    });

    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}

/**
 * Fetch a single project by id and return typed ProjectDetails or null.
 * Assumes your `ProjectDetails` type matches the table's full row structure.
 */
export async function getProjectById(id: string): Promise<ProjectDetails | null> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // If you want silent null for not-found, you can check error.code === 'PGRST116' or similar.
      throw error;
    }

    // Cast data to ProjectDetails - ensure your ProjectDetails type matches DB schema
    return (data as unknown) as ProjectDetails;
  } catch (err) {
    console.error(`Error fetching project ${id}:`, err);
    return null;
  }
}
