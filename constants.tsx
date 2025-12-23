import React from "react";
import { Project, SkillCategory, TimelineItem } from "./types";
import { Code, Layout, Database, Terminal } from "lucide-react";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Waste Management & Recycling Platform",
    description:
      "A web-based platform that helps users safely dispose of electronic waste by connecting them with verified recyclers. The system ensures transparent pricing, easy pickup requests, and promotes eco-friendly recycling practices while encouraging responsible waste management.",
    image: "/image/e-waste.png",
    tags: ["HTML5/CSS", "PHP", "JS", "MySQL"],
    demoLink: "https://etrieve.liveblog365.com/", // ADD YOUR DEMO LINK HERE
    githubLink: "https://github.com/kamrulhasansojib/E-Waste-Recycling-System", // ADD YOUR GITHUB LINK HERE
  },
  {
    id: 2,
    title: "Bug Finder",
    description:
      "An intelligent web application that helps developers identify and fix bugs in their code using AI technology. Built with modern web technologies to provide a seamless debugging experience.",
    image: "/image/bugfinder.png",
    tags: ["JAVASCRIPT", "React", "HTML/CSS"],
    demoLink: "https://bug-finder-drab.vercel.app/", // ADD YOUR DEMO LINK HERE
    githubLink: "https://github.com/kamrulhasansojib/Bug-Finder.git", // ADD YOUR GITHUB LINK HERE
  },
  {
    id: 3,
    title: "SecureAuth Pro",
    description:
      "A robust authentication system using JWT and OAuth2.0, featuring multi-factor authentication and role-based access control for enterprise applications.",
    image: "https://picsum.photos/seed/auth/800/500",
    tags: ["NODE.JS", "EXPRESS", "POSTGRESQL", "JWT"],
    demoLink: "https://secureauth-pro.herokuapp.com", // ADD YOUR DEMO LINK HERE
    githubLink: "https://github.com/sojib-dev/secure-auth", // ADD YOUR GITHUB LINK HERE
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Terminal",
    skills: ["C", "C++", "JavaScript", "PHP"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS"],
  },
  {
    title: "Backend & DB",
    icon: "Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: "Code",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const EDUCATION_TIMELINE: TimelineItem[] = [
  {
    year: "2022 - Present",
    title: "Bachelor of Science in Computer Science & Engineering",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    description:
      "Specializing in software engineering principles, advanced data structures, and full-stack architecture. Maintaining a strong focus on building scalable solutions.",
  },
  {
    year: "2019 - 2021",
    title: "Higher Secondary Certificate (Science)",
    institution: "Ideal College, Dhanmondi",
    description:
      "Focused on core science subjects with a strong emphasis on higher mathematics and physics.",
  },
  {
    year: "2012 - 2019",
    title: "Secondary School Certificate",
    institution: "Jamalpur Zilla School",
    description:
      "Built a solid analytical foundation and developed an early passion for technology and mathematics.",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "December 2024",
    image: "/image/certificate-delta-batch-web-development.jpg",
  },
  {
    title: "JavaScript Algorithms",
    issuer: "Coursera",
    date: "November 2024",
    image: "/image/certificate2.png",
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "December 2024",
    image: "/image/certificate1.png",
  },
  {
    title: "JavaScript Algorithms",
    issuer: "Coursera",
    date: "November 2024",
    image: "/image/certificate2.png",
  },
];
