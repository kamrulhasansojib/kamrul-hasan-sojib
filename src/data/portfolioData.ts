import { ProfileData, Project, SkillCategory, ExperienceItem, TechBadge, Certification, HighlightItem } from '../types';

// Helper function to calculate years of experience starting from Jan 2024
export const calculateYearsOfExperience = (startDateStr: string = '2024-01-01'): string => {
  const startDate = new Date(startDateStr);
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  if (
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())
  ) {
    years--;
  }
  const result = Math.max(1, years);
  return `${result}+`;
};

export const initialProfile: ProfileData = {
  name: "Kamrul Hasan Sojib",
  role: "Full-Stack Software Engineer",
  avatarUrl: "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786307745/Picsart_26-08-09_01-15-42-718.jpg.jpg",
  tagline:
    "Crafting scalable web services, high-performance APIs, and polished user experiences.",
  bio: "Hello! I'm Kamrul Hasan Sojib, a passionate Computer Science undergraduate. My fascination with logic and problem-solving led me to the world of software development, where I strive to create impactful solutions.",
  availableForInternships: true,
  internshipType: "Available for Internships",
  location: "Dhaka, Bangladesh (Open to Remote)",
  email: "kamrulhasansojib19@gmail.com",
  githubUrl: "https://github.com/kamrulhasansojib",
  linkedinUrl: "https://www.linkedin.com/in/kamrul-hasan-sojib-/",
  facebookUrl: "https://web.facebook.com/kamrulhasansojib.19",
  twitterUrl: "https://twitter.com",
  resumeUrl: "/Kamrul-Hasan-Sojib-Resume.pdf",
  yearsExperience: calculateYearsOfExperience("2024-01-01"),
  projectsCompleted: "6+",
  certificationsCount: "2+",
  codeCommits: "1.2k+",
};

export const defaultTechBadges: TechBadge[] = [
  {
    id: "react",
    name: "React 19",
    iconName: "Code2",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    positionClass: "-top-3 -left-4 sm:-top-5 sm:-left-8",
    animationClass: "animate-badge-1",
    color: "text-cyan-400",
    bgGlow: "shadow-cyan-500/20",
  },
  {
    id: "python",
    name: "Python",
    iconName: "Code2",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    positionClass: "",
    animationClass: "",
    color: "text-yellow-400",
    bgGlow: "shadow-yellow-500/20",
  },
  {
    id: "nodejs",
    name: "Node.js",
    iconName: "Server",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    positionClass: "top-1/3 -right-6 sm:top-1/3 sm:-right-10",
    animationClass: "animate-badge-2",
    color: "text-emerald-400",
    bgGlow: "shadow-emerald-500/20",
  },
  {
    id: "docker",
    name: "Docker",
    iconName: "Server",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    positionClass: "",
    animationClass: "",
    color: "text-blue-400",
    bgGlow: "shadow-blue-500/20",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    iconName: "Database",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    positionClass: "-bottom-4 left-6 sm:-bottom-6 sm:left-10",
    animationClass: "animate-badge-3",
    color: "text-green-400",
    bgGlow: "shadow-green-500/20",
  },
  {
    id: "cplusplus",
    name: "C++",
    iconName: "Code2",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    positionClass: "",
    animationClass: "",
    color: "text-blue-400",
    bgGlow: "shadow-blue-500/30",
  }
];

export const sampleProjects: Project[] = [
  {
    id: "ewaste-recycling",
    title: "E-Waste Management & Recycling Platform",
    category: "Full Stack",
    description:
      "A web-based platform that helps users safely dispose of electronic waste by connecting them with verified recyclers.",
    longDescription:
      "A web-based E-Waste Management Platform designed to help users safely dispose of electronic waste by connecting them with verified recycling companies. I developed the complete system using HTML, CSS, JavaScript, PHP, and SQL/MySQL.\n\nThe platform included separate User, Company, and Admin dashboards. Users could submit details about their electronic waste, including the type, condition, quantity, and other relevant information. Verified recycling companies could review the submitted e-waste details and provide an offer amount based on the waste. Users could then review the offer and proceed with the deal if they agreed with the proposed price.\n\nThe Admin Dashboard was used to manage users, recycling companies, e-waste submissions, offers, and transactions, ensuring that only verified companies could participate in the platform. The system also used a database to securely store and manage user information, company details, e-waste records, offers, and deal-related data. This project helped me gain practical experience in full-stack web development, database management, CRUD operations, user authentication, dashboard development, and connecting PHP with a MySQL database.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786307993/e-waste.jpg",
    tags: ["HTML5/CSS", "PHP", "JS", "MySQL"],
    githubUrl: "https://github.com/kamrulhasansojib/E-Waste-Recycling-System",
    liveUrl: "#",
    featured: true,
    highlights: [
      "Location-based recycler matching and pickup schedule dispatcher",
      "User reward dashboard with carbon footprint savings metrics",
      "Role-based authorization for Admin, Citizen, and Recycler entities",
    ],
  },
  {
    id: "bug-finder",
    title: "Bug Finder - AI Code Debugger",
    category: "AI / Machine Learning",
    description:
      "An intelligent web application that helps developers identify and fix bugs in their code using AI technology.",
    longDescription:
      "A lightning-fast AI-enhanced debugging tool designed to help developers and learners identify, understand, and fix coding errors more efficiently.\n\nUsers can paste their source code into the platform and instantly detect syntax errors, potential bugs, and logical issues. The system provides detailed error explanations and AI-powered insights to help users understand why a problem occurs and how it can be resolved.\n\nIt is designed to make debugging easier for beginners while also providing useful insights for experienced developers. The project focuses on creating a fast, interactive, and user-friendly debugging experience that reduces development time and helps users improve their problem-solving and programming skills.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786307992/bugfinder.png",
    tags: ["JAVASCRIPT", "REACT", "HTML/CSS", "GEMINI API"],
    githubUrl: "https://github.com/kamrulhasansojib/Bug-Finder",
    liveUrl: "https://bug-finder-drab.vercel.app/",
    featured: true,
    highlights: [
      "Real-time syntax parsing and instant LLM patch suggestion",
      "Interactive code diff viewer with side-by-side comparison",
      "Export bug report as PDF or directly to GitHub Issues",
    ],
  },
  {
    id: "secure-auth",
    title: "BariJai, E-ticket Platform",
    category: "Frontend",
    description:
      "A web-based e-ticket booking platform that allows users to search, book, and manage tickets online through a simple and user-friendly interface.",
    longDescription:
      "BariJai is a web-based e-ticket booking platform designed to simplify the process of purchasing and managing tickets online.\n\nThe system allows users to search for available routes, view schedules, check seat availability, and book tickets from anywhere at any time. Users can create accounts, manage their bookings, and access ticket information through a secure and user-friendly interface.\n\nThe platform also includes an administrative dashboard for managing routes, schedules, ticket inventory, bookings, and user accounts. By automating the ticketing process, BariJai reduces manual work, improves booking efficiency, and provides a convenient digital solution for both passengers and administrators.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786316013/b73c5a3a-4a31-4674-8014-f40e7aad443e.png",
    tags: ["HTML", "CSS", "PHP", "MYSQL", "JavaScript"],
    githubUrl: "https://github.com/kamrulhasansojib/Barijai",
    liveUrl: "#",
    featured: true,
    highlights: [
      "User-friendly online ticket search and booking system",
      "Real-time route, schedule, and ticket availability management",
      "Secure user authentication and booking management",
      "Admin dashboard for managing users, routes, schedules, and bookings",
      "Database-driven ticket and booking record management",
      "Responsive interface for a smooth booking experience",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "C",
        level: 90,
        icon: "C",
        description: "Procedural Programming & Data Structures",
      },
      {
        name: "C++",
        level: 92,
        icon: "Cpp",
        description: "Competitive Programming & OOP",
      },
      {
        name: "Python",
        level: 88,
        icon: "Python",
        description: "Data Analysis, AI/ML & Automation",
      },
      {
        name: "JavaScript",
        level: 95,
        icon: "JS",
        description: "ES6+, Async/Await & DOM Logic",
      },
      {
        name: "PHP",
        level: 80,
        icon: "PHP",
        description: "Server-side Scripting & Web Backend",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        level: 95,
        icon: "React",
        description: "Component Architecture & Hooks",
      },
      {
        name: "Tailwind CSS",
        level: 96,
        icon: "Tailwind",
        description: "Utility-first Styling & Layouts",
      },
      {
        name: "HTML5",
        level: 98,
        icon: "HTML",
        description: "Semantic Web Structure & Accessibility",
      },
      {
        name: "CSS",
        level: 95,
        icon: "CSS",
        description: "Flexbox, Grid, Animations & Media Queries",
      },
    ],
  },
  {
    category: "Backend & DB",
    skills: [
      {
        name: "Node.js",
        level: 92,
        icon: "Node",
        description: "Event-driven Server Runtime",
      },
      {
        name: "Express.js",
        level: 90,
        icon: "Express",
        description: "RESTful Web Framework & Middleware",
      },
      {
        name: "MongoDB",
        level: 88,
        icon: "MongoDB",
        description: "NoSQL Document Database & Mongoose",
      },
      {
        name: "MySQL",
        level: 85,
        icon: "MySQL",
        description: "Relational DB Schemas & SQL Queries",
      },
    ],
  },
  {
    category: "Tools & AI",
    skills: [
      {
        name: "Docker",
        level: 85,
        icon: "Docker",
        description: "Containerization & Microservices",
      },
      {
        name: "AI & ML",
        level: 85,
        icon: "AIML",
        description: "Machine Learning & AI Integration",
      },
      {
        name: "Git & GitHub",
        level: 95,
        icon: "Git",
        description: "Version Control & Collaboration",
      },
      {
        name: "Postman",
        level: 90,
        icon: "Postman",
        description: "API Testing & Automation",
      },
      {
        name: "VS Code",
        level: 96,
        icon: "VSCode",
        description: "Modern IDE & Extension Ecosystem",
      },
    ],
  },
];

export const educationItems = [
  {
    id: "edu-1",
    degree:
      "Bachelor of Science in Computer Science & Engineering (B.Sc in CSE)",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    period: "2022 - Present",
    grade: "CGPA: 3.3 / 4.00",
    description:
      "Pursuing a Bachelor's degree in Computer Science & Engineering at the University of Liberal Arts Bangladesh (ULAB), with core coursework in Software Engineering, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Programming. Actively engaged in hands-on projects and academic research alongside coursework.",
    highlights: [
      "Specialized in MERN Stack Development and Competitive Programming (C/C++)",
      "Dean's Honor List for outstanding academic performance across multiple semesters",
      "Active participant and problem solver in Intra and Inter-University Programming Contests",
    ],
    skills: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Computer Networks", "OOP (C++)"],
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Ideal College",
    period: "2019 - 2021",
    grade: "GPA: 4.75 / 5.00",
    description:
      "Completed higher secondary education in the Science Group at Ideal College, with a strong academic foundation in Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT). This period built the core analytical and logical reasoning skills that later shaped my interest in computer science and software development.",
    highlights: [
      "Achieved Golden A+ with top marks in Higher Mathematics and ICT",
      "Active participant in Science Olympiads and Logic Competitions",
    ],
    skills: ["Higher Mathematics", "Physics", "Chemistry", "ICT"],
  },
  {
    id: "edu-3",
    degree: "Junior School Certificate (JSC)",
    institution: "Jamalpur Zilla School",
    period: "2012 - 2019",
    grade: "GPA: 4.75 / 5.00",
    description:
      "Completed junior secondary education at Jamalpur Zilla School with a  Science background, building a strong foundation in Mathematics,  Physics, Chemistry, and General Science. Beyond academics, I served  as an Assistant Team Leader in the School Scout unit and represented  my school in Carrom and Badminton competitions, experiences that  shaped my early sense of discipline, leadership, and teamwork.",
    highlights: [
      "Served as Assistant Team Leader in the School Scout unit",
      "School Champion in Carrom and  Badminton (2017).",
    ],
    skills: ["General Science", "Mathematics", "Leadership & Scouting"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Undergraduate Researcher — Capstone Project",
    company: "University of Liberal Arts Bangladesh (ULAB)",
    period: "Mar 2026 - Present",
    type: "Internship",
    description:
      "Conducting independent research as part of my final year capstone/thesis project on multi-class skin disease classification using deep learning. The work involves building and evaluating convolutional neural network architectures on real-world dermatological image datasets, with a strong emphasis on model explainability and fairness in medical AI systems,  bridging the  gap between raw model performance and trustworthy, clinically relevant predictions.",
    achievements: [
      "Built and trained deep learning models (ResNet-50, EfficientNet-B4, VGG-16) on the HAM10000 and ISIC Archive datasets",
      "Applied Grad-CAM for model explainability and fairness-aware evaluation",
      "Prepared and presented academic research findings for thesis defense",
    ],
    skillsUsed: [
      "Python",
      "PyTorch/TensorFlow",
      "Deep Learning",
      "Data Preprocessing",
      "Grad-CAM",
    ],
  },
  {
    id: "exp-2",
    role: " Independent Full-Stack Developer",
    company: "Self-Directed",
    period: "Sep 2024 - Present",
    type: "Project",
    description:
      " Independently designing, building, and deploying full-stack web applications end-to-end, from system architecture and database design to backend APIs, frontend UI, and production deployment. Every project is self-initiated and self-managed, and this self-driven journey has been my primary way of learning industry-relevant tools and practices outside the classroom.",
    achievements: [
      "Built and shipped multiple full-stack projects (e-waste platform, AI code debugger, secure auth microservice)",
      "Handled full development lifecycle solo",
      "Continuously exploring modern web tech through hands-on building",
    ],
    skillsUsed: [
      "React, Node.js, Express, PHP, MongoDB, TypeScript, REST APIs",
    ],
  },
];

export const sampleCertifications: Certification[] = [
  {
    id: "cert-ulab-cpc-volunteer",
    title: "Certificate of Recognition - Volunteer Service",
    issuer: "ULAB Computer Programming Club",
    issueDate: "Spring 2026",
    credentialId: "",
    credentialUrl: "#",
    badgeLogo: "Award",
    certificateImage:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786391108/volentiar.png",
    category: "Academic",
    skills: ["Leadership", "Community Service", "Event Organization"],
    verified: true,
    description:
      "Received a Volunteer Appreciation Certificate from the ULAB Computer Programming Club (UCPC) for contributing to the successful organization and execution of programming events during the Summer 2026 semester. Supported event activities, collaborated with the club team, and gained valuable experience in teamwork, event management, communication, and community engagement.",
  },
  {
    id: "cert-delta-fullstack",
    title: "Delta, Full Stack Web Development",
    issuer: "Apna College",
    issueDate: "Nov 2025",
    credentialId: "670fc8386ed96d01570dea79",
    credentialUrl: "#",
    badgeLogo: "Code2",
    certificateImage:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786307787/certificate-delta-batch-web-development.jpg",
    category: "Professional",
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "HTML5/CSS3"],
    verified: true,
    description:
      "Completed an intensive full stack web development program covering the complete MERN stack — MongoDB, Express.js, React, and Node.js. The course involved building real-world projects from scratch, covering RESTful API design, database modeling, authentication systems, state management, and deploying production-ready full stack applications",
  },
  {
    id: "cert-math-olympiad",
    title: "Math Olympiad 2023 - Certificate of Participation",
    issuer: "School of Science and Engineering (SSE), ULAB",
    issueDate: "Mar 2023",
    credentialId: "",
    credentialUrl: "#",
    badgeLogo: "Award",
    certificateImage:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786307794/math__Olympiad.jpg.jpg",
    category: "Academic",
    skills: ["Mathematical Problem Solving", "Analytical Thinking"],
    verified: true,
    description:
      "Participated in Math Olympiad 2023, an inter-departmental mathematics competition organized by the School of Science and Engineering (SSE) at ULAB. The event tested analytical thinking, logical reasoning, and problem-solving skills under time pressure, involving a range of advanced mathematical topics including algebra, number theory, and combinatorics.",
  },
  {
    id: "cert-cyber-security",
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn SkillUP",
    issueDate: "Apr 2026",
    expirationDate: "#",
    credentialId: "10174080",
    credentialUrl: "#",
    badgeLogo: "ShieldCheck",
    certificateImage:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786307800/syber-security.jpg.jpg",
    category: "Professional",
    skills: [
      "Cyber Security Fundamentals",
      "Threat Awareness",
      "Security Best Practices",
    ],
    verified: true,
    description:
      "Completed a foundational course on cybersecurity covering key concepts such as network security, common threat vectors, malware types, and defense mechanisms. Gained practical understanding of how organizations protect digital assets, along with best practices for identifying vulnerabilities, securing systems, and responding to security incidents in real-world environments.",
  },
];

export const highlightsData: HighlightItem[] = [
  {
    id: "highlight-programming-event-volunteer",
    title: "Programming Event Volunteer & Award Ceremony 🎖️",
    category: "Special Moment",
    date: "September 2026",
    location: "ULAB, Dhaka, Bangladesh",
    shortDescription:
      "Volunteered in programming events organized by the ULAB Computer Programming Club (UCPC) and participated in the volunteer appreciation ceremony.",
    fullDescription:
      "Served as a volunteer for programming events organized by the ULAB Computer Programming Club (UCPC), contributing to the successful execution and coordination of programming activities. The experience involved working closely with the organizing team, supporting participants, assisting with event management, and helping ensure a smooth and engaging event experience. The journey was further recognized through a volunteer appreciation and award ceremony, making it a valuable experience in teamwork, communication, leadership, and event coordination.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786318271/programming-event_price_ceremony.jpg",
    tags: [
      "Volunteer",
      "UCPC",
      "Programming Event",
      "Event Management",
      "Teamwork",
    ],
    keyTakeaways: [
      "Volunteered in UCPC programming events",
      "Contributed to event coordination and smooth execution",
      "Worked collaboratively with the organizing team",
      "Received appreciation for volunteer contributions",
      "Developed teamwork, communication, and leadership skills",
    ],
  },
  {
    id: "highlight-dip-final-project",
    title: "DIP Final Project Presentation & Submission",
    category: "Achievement",
    date: "October 2024",
    location: "ULAB, Dhaka, Bangladesh",
    shortDescription:
      "Successfully presented and submitted our final project for the Digital Image Processing (DIP) course.",
    fullDescription:
      "Successfully completed and presented our final project for the Digital Image Processing (DIP) course. Our team worked together to design and implement a complete digital image processing pipeline, applying various image processing techniques learned throughout the course. The project was presented as part of the final project evaluation and successfully submitted on the presentation day.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786317018/dp2.jpg",
    tags: [
      "DIP Final Project",
      "Digital Image Processing",
      "Project Presentation",
      "Academic Project",
    ],
    keyTakeaways: [
      "Successfully completed and submitted the final DIP course project",
      "Presented the project and explained the implemented image processing techniques",
      "Gained practical experience in applying Digital Image Processing concepts",
      "Strengthened teamwork, presentation, and project development skills",
    ],
  },
  {
    id: "highlight-competitive-programming-contest-2026",
    title: "Competitive Programming Contest 2026 🏆",
    category: "Special Moment",
    date: "September 2026",
    location: "ULAB, Dhaka, Bangladesh",
    shortDescription:
      "Participated in and contributed to the successful organization of the Competitive Programming Contest 2026, arranged by the ULAB Computer Programming Club (UCPC).",
    fullDescription:
      "Participated in and contributed to the successful execution of the Competitive Programming Contest 2026 organized by the ULAB Computer Programming Club (UCPC). The event brought together programming enthusiasts and students to compete in a challenging competitive programming environment. Being part of this event provided valuable experience in programming, problem-solving, teamwork, event coordination, and engaging with the competitive programming community at ULAB.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786317871/competative-programming-contest_26.png",
    tags: ["Competitive Programming", "UCPC", "Programming Contest", "ULAB"],
    keyTakeaways: [
      "Participated in the Competitive Programming Contest 2026",
      "Contributed to the successful execution of the programming event",
      "Gained experience in teamwork and event coordination",
      "Engaged with the competitive programming community at ULAB",
    ],
  },
  {
    id: "highlight-ssc-19-iftar-reunion",
    title: "SSC 2019 Batch Iftar Party & Reunion 🌙",
    category: "Special Moment",
    date: "2023",
    location: "Jamalpur Zilla School, Jamalpur, Bangladesh",
    shortDescription:
      "A memorable Iftar gathering and reunion with my SSC 2019 batchmates at Jamalpur Zilla School.",
    fullDescription:
      "A memorable Iftar Party and Reunion with my SSC 2019 batchmates at Jamalpur Zilla School. It was a wonderful opportunity to reconnect with old friends, share memories, and spend quality time together after years of completing our school life. The gathering brought together many classmates and created a joyful environment filled with friendship, conversations, and unforgettable moments. It was a special occasion to celebrate our long-lasting bond and revisit the memories of our school days.",
    image:
      "https://res.cloudinary.com/diaqtzh6q/image/upload/v1786318720/FB_IMG_1786318512442.jpg.jpg",
    tags: [
      "SSC 2019",
      "Jamalpur Zilla School",
      "Iftar Party",
      "Reunion",
      "School Memories",
    ],
    keyTakeaways: [
      "Reconnected with SSC 2019 batchmates",
      "Celebrated a memorable Iftar gathering together",
      "Shared old school memories and experiences",
      "Strengthened friendships and batchmate connections",
    ],
  },
];
