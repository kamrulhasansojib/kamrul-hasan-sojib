import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from './lib/router';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';

import { 
  initialProfile, 
  defaultTechBadges, 
  sampleProjects,
  sampleCertifications,
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

  // Profile and projects state
  const [profile] = useState<ProfileData>(initialProfile);
  const [projects] = useState<Project[]>(sampleProjects);
  const [cropStyle] = useState<ImageCropStyle>('soft-blob');
  const [backgroundPattern] = useState<BackgroundPattern>('grid');
  const [accentGradient] = useState<AccentGradient>('blue-cyan');
  const [badges] = useState<TechBadge[]>(defaultTechBadges);

  // Dynamic calculations:
  const dynamicExperience = calculateYearsOfExperience('2024-01-01');
  const dynamicProjectCount = `${projects.length}+`;
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
    const skillsElem = document.getElementById('skills');
    if (skillsElem) {
      skillsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
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

        {/* Dynamic Route Pages */}
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                profile={activeProfile}
                projects={projects}
                cropStyle={cropStyle}
                backgroundPattern={backgroundPattern}
                accentGradient={accentGradient}
                badges={badges}
                onOpenContact={handleOpenContact}
                onBadgeClick={handleBadgeClick}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            } 
          />
          <Route 
            path="/services" 
            element={<ServicesPage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="*" 
            element={
              <Home 
                profile={activeProfile}
                projects={projects}
                cropStyle={cropStyle}
                backgroundPattern={backgroundPattern}
                accentGradient={accentGradient}
                badges={badges}
                onOpenContact={handleOpenContact}
                onBadgeClick={handleBadgeClick}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            } 
          />
        </Routes>

        {/* Footer */}
        <Footer profile={activeProfile} />

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </BrowserRouter>
  );
}

