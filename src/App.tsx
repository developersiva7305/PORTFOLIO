import { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnicalSkills } from './components/TechnicalSkills';
import { TimelineSection } from './components/TimelineSection';
import { AchievementsSection } from './components/AchievementsSection';
import { DevelopmentPhilosophy } from './components/DevelopmentPhilosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProjectFromCommand = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-body)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 theme-transition">
      {/* Scroll Progress Bar at Top */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Selected Projects (AI + Industrial Systems) */}
        <ProjectsSection selectedProjectId={selectedProjectId} />

        {/* 4. Technical Skills Matrix */}
        <TechnicalSkills />

        {/* 5. Experience & Education Timeline */}
        <TimelineSection />

        {/* 6. Achievements & Certifications */}
        <AchievementsSection />

        {/* 7. Development Philosophy (How I Build) */}
        <DevelopmentPhilosophy />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectFromCommand}
      />
    </div>
  );
}

export default App;
