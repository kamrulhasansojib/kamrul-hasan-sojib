export type ImageCropStyle = 'circular' | 'soft-blob' | 'smooth-blob';
export type BackgroundPattern = 'grid' | 'dot' | 'none';
export type AccentGradient = 'blue-cyan' | 'purple-pink' | 'emerald-teal' | 'amber-orange';

export interface TechBadge {
  id: string;
  name: string;
  iconName: string; // lucide icon or SVG type
  imageUrl?: string; // image link URL for standard <img> tag
  positionClass: string; // absolute offset positioning
  animationClass: string; // float animation stagger
  color: string; // text/icon color accent
  bgGlow: string; // hover background glow
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatarUrl?: string; // direct image link for hero portrait
  availableForInternships: boolean;
  internshipType: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  facebookUrl?: string;
  twitterUrl: string;
  resumeUrl: string;
  yearsExperience: string;
  projectsCompleted: string;
  certificationsCount: string;
  codeCommits?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI & ML' | 'AI / Machine Learning';
  description: string;
  longDescription: string;
  problem?: string;
  role?: string;
  keyFeatures?: string[];
  image: string;
  screenshots?: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100
    icon: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Internship' | 'Project' | 'Education' | 'Award';
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId: string;
  credentialUrl: string;
  badgeLogo: string; // Lucide icon name or image URL
  certificateImage?: string; // Certificate image preview thumbnail
  category: 'Professional' | 'Academic';
  skills: string[];
  verified: boolean;
  description?: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  category: 'Achievement' | 'Job Work' | 'Special Moment';
  date: string;
  location?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags?: string[];
  keyTakeaways?: string[];
}

