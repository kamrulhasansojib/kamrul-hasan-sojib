import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { 
  initialProfile, 
  defaultTechBadges, 
  sampleProjects,
  sampleCertifications,
  highlightsData,
  calculateYearsOfExperience
} from './data/portfolioData';

import { 
  ProfileData, 
  ImageCropStyle, 
  BackgroundPattern, 
  AccentGradient, 
  Project,
  TechBadge 
} from './types';

export default function App() {
  // Dark / Light theme mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('app-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('app-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('app-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Hero section customizable state
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [cropStyle, setCropStyle] = useState<ImageCropStyle>('soft-blob');
  const [backgroundPattern, setBackgroundPattern] = useState<BackgroundPattern>('grid');
  const [accentGradient, setAccentGradient] = useState<AccentGradient>('blue-cyan');
  const [badges] = useState<TechBadge[]>(defaultTechBadges);

  // Dynamic calculations:
  // 1. Experience dynamically calculated starting Jan 2024 (updates every Jan)
  const dynamicExperience = calculateYearsOfExperience('2024-01-01');
  
  // 2. Projects count dynamically updated based on active project cards array
  const dynamicProjectCount = `${projects.length}+`;

  // 3. Certifications count dynamically updated based on certifications array
  const dynamicCertificationsCount = `${sampleCertifications.length}+`;

  const activeProfile: ProfileData = {
    ...profile,
    yearsExperience: dynamicExperience,
    projectsCompleted: dynamicProjectCount,
    certificationsCount: dynamicCertificationsCount
  };

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBadgeClick = (badgeName: string) => {
    // Scroll to tech stack section when clicking badge
    const skillsElem = document.getElementById('skills');
    if (skillsElem) {
      skillsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-black ${
      isDarkMode 
        ? 'bg-black text-white dark-theme' 
        : 'bg-slate-50 text-slate-900 light-mode-wrapper'
    }`}>
      
      {/* Top Navbar */}
      <Navbar
        profile={activeProfile}
        onOpenContact={handleOpenContact}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          profile={activeProfile}
          cropStyle={cropStyle}
          backgroundPattern={backgroundPattern}
          accentGradient={accentGradient}
          badges={badges}
          portraitImage={activeProfile.avatarUrl}
          onOpenContact={handleOpenContact}
          onBadgeClick={handleBadgeClick}
        />

        {/* 2. About / Engineering Section */}
        <AboutSection
          portraitImage={activeProfile.avatarUrl}
          name={activeProfile.name}
          yearsCoding={activeProfile.yearsExperience}
          projectsDone={activeProfile.projectsCompleted}
        />

        {/* 3. Skills / Technical Stack Section */}
        <TechStackSection />

        {/* 4. Certifications Section */}
        <CertificationsSection certifications={sampleCertifications} />

        {/* 5. Projects Section */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 6. Experience & Education Combined Section */}
        <ExperienceSection />

        {/* 7. Highlights, Milestones & Gallery Carousel */}
        <HighlightsSection highlights={highlightsData} />

        {/* 8. Contact Form & Inquiries Section */}
        <ContactSection profile={activeProfile} />
      </main>

      {/* Footer */}
      <Footer profile={activeProfile} />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
