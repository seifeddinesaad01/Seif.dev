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
  tags: string[];
  challenges?: string[];
  features?: string[];
  technologies?: string;
  timeline?: string;
  team?: string;
  category?: string;
  gallery_urls?: string[];
  reflection?: string;
  created_at?: string;
}
export type ProjectDetails = ProjectCard;
