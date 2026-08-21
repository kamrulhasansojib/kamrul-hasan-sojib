import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { TechStackSection } from '../components/TechStackSection';
import { ServicesPreview } from '../components/ServicesPreview';
import { ProjectsSection } from '../components/ProjectsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { HighlightsSection } from '../components/HighlightsSection';
import { ContactSection } from '../components/ContactSection';
import { 
  ProfileData, 
  ImageCropStyle, 
  BackgroundPattern, 
  AccentGradient, 
  Project, 
  TechBadge 
} from '../types';
import { sampleCertifications, highlightsData } from '../data/portfolioData';

interface HomeProps {
  profile: ProfileData;
  projects: Project[];
  cropStyle: ImageCropStyle;
  backgroundPattern: BackgroundPattern;
  accentGradient: AccentGradient;
  badges: TechBadge[];
  onOpenContact: () => void;
  onBadgeClick: (badgeName: string) => void;
  onSelectProject: (project: Project) => void;
}

export const Home: React.FC<HomeProps> = ({
  profile,
  projects,
  cropStyle,
  backgroundPattern,
  accentGradient,
  badges,
  onOpenContact,
  onBadgeClick,
  onSelectProject,
}) => {
  const location = useLocation();

  // Scroll to hash element if navigated with hash (e.g., /#contact or /#projects)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection
        profile={profile}
        cropStyle={cropStyle}
        backgroundPattern={backgroundPattern}
        accentGradient={accentGradient}
        badges={badges}
        portraitImage={profile.avatarUrl}
        onOpenContact={onOpenContact}
        onBadgeClick={onBadgeClick}
      />

      {/* 2. About / Engineering Section */}
      <AboutSection
        portraitImage={profile.avatarUrl}
        name={profile.name}
        yearsCoding={profile.yearsExperience}
        projectsDone={profile.projectsCompleted}
      />

      {/* 3. Skills / Technical Stack Section */}
      <TechStackSection />

      {/* 4. Short Services Preview Section (Top 3 cards + link to /services) */}
      <ServicesPreview onOpenContact={onOpenContact} />

      {/* 5. Projects Section */}
      <ProjectsSection
        projects={projects}
        onSelectProject={onSelectProject}
      />

      {/* 6. Experience & Education Combined Section */}
      <ExperienceSection />

      {/* 7. Certifications Section */}
      <CertificationsSection certifications={sampleCertifications} />

      {/* 8. Highlights, Milestones & Gallery Carousel */}
      <HighlightsSection highlights={highlightsData} />

      {/* 9. Contact Form & Inquiries Section */}
      <ContactSection profile={profile} />
    </main>
  );
};
export default Home;
