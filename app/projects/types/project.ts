// types/project.ts
export interface ProjectCard {
  idx: number;
  id: string;
  title: string;
  short_description: string;
  long_description?: string;
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  google_play_url?: string;
  app_store_url?: string;
  tags: string[];
  challenges?: string[];
  features?: string[];
  technologies?: string;
  timeline?: string;
  team?: string;
  gallery_urls?: string[];
  reflection?: string;
  created_at?: string;
  category?: "web" | "mobile";

}
export type ProjectDetails = ProjectCard;
