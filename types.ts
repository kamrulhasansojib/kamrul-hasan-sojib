
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}
