import { createClient } from "@/utils/supabase/client";
import { ProjectCard, ProjectDetails } from "../types/project";

const supabase = createClient();

export async function getAllProjects(): Promise<ProjectCard[]> {
  try {
    const { data, error }= await supabase
      .from('projects')
      .select(`
        id,
        title,
        short_description,
        image_url,
        tags,
        demo_url,
        github_url
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<ProjectDetails | null> {
  try {
    const { data, error }= await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    return null;
  }
}