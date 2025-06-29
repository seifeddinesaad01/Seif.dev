export interface Technology {
  name: string;
  description: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  short_description: string;
  image_url: string;
  tags: string[];
  demo_url: string;
  github_url: string;
}

export interface ProjectDetails extends ProjectCard {
  long_description: string;
  challenges: string[];
  features: string[];
  technologies: Technology[];
  timeline: string | null;
  team: string | null;
  category: string | null;
  gallery_urls: string[];
  reflection: string | null;
}