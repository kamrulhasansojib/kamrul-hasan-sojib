import React from "react";
import { Project, SkillCategory, TimelineItem } from "./types";
import { Code, Layout, Database, Terminal } from "lucide-react";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Waste Management & Recycling Platform",
    description:
      "A web-based platform that helps users safely dispose of electronic waste by connecting them with verified recyclers. The system ensures transparent pricing, easy pickup requests, and promotes eco-friendly recycling practices while encouraging responsible waste management.",
    image: "/public/image/e-waste.png",
    tags: ["HTML5/CSS", "PHP", "JS", "MySQL"],
    demoLink: "https://etrieve.liveblog365.com/", // ADD YOUR DEMO LINK HERE
    githubLink: "https://github.com/kamrulhasansojib/E-Waste-Recycling-System", // ADD YOUR GITHUB LINK HERE
  },
  {
    id: 2,
    title: "AlgoViz Visualizer",
    description:
      "An interactive tool built in C++ and JavaScript to visualize sorting and pathfinding algorithms. Focuses on educational logic and step-by-step execution.",
    image: "https://picsum.photos/seed/algo/800/500",
    tags: ["JAVASCRIPT", "C++", "HTML/CSS"],
    demoLink: "https://algoviz-sojib.netlify.app", // ADD YOUR DEMO LINK HERE
    githubLink: "https://github.com/sojib-dev/algoviz", // ADD YOUR GITHUB LINK HERE
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
  {
    id: 4,
    title: "DevSocial Network",
    description:
      "A niche social media platform for developers to share code snippets, collaborate on projects, and find potential co-founders.",
    image: "https://picsum.photos/seed/devsoc/800/500",
    tags: ["REACT", "FIREBASE", "TAILWIND"],
    demoLink: "https://devsocial-network.web.app",
    githubLink: "https://github.com/sojib-dev/devsocial",
  },
  {
    id: 5,
    title: "Real-Time Chat Engine",
    description:
      "High-performance messaging application using Socket.io for instantaneous communication and persistent storage with Redis.",
    image: "https://picsum.photos/seed/chat/800/500",
    tags: ["SOCKET.IO", "NODE.JS", "REDIS"],
    demoLink: "https://chat-engine-sojib.up.railway.app",
    githubLink: "https://github.com/sojib-dev/chat-engine",
  },
  {
    id: 6,
    title: "WeatherSphere AI",
    description:
      "Weather forecasting application that uses machine learning to predict localized climate patterns based on historical data.",
    image: "https://picsum.photos/seed/weather/800/500",
    tags: ["PYTHON", "FLASK", "REACT"],
    demoLink: "https://weathersphere-ai.netlify.app",
    githubLink: "https://github.com/sojib-dev/weather-ai",
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
