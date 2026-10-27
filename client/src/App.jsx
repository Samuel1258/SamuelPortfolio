import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminModal from './components/AdminModal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Toggle Theme between Warm Light (image aesthetic) and Dark Mode
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');

    // Fetch live profile & projects from backend API
    const loadData = async () => {
      try {
        const [profRes, projRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/projects')
        ]);
        if (profRes.ok) {
          const profData = await profRes.json();
          if (profData.success) setProfile(profData.data);
        }
        if (projRes.ok) {
          const projData = await projRes.json();
          if (projData.success) setProjects(projData.data);
        }
      } catch (e) {
        console.warn('API fetch warning:', e);
      }
    };
    loadData();
  }, []);

  return (
    <div className="app-frame">
      {/* Outer rounded surface canvas replicating the exact framed card aesthetic from the design */}
      <div className="surface-canvas">
        <Navbar 
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        <main>
          <Hero profile={profile} />
          <Projects projects={projects} />
          <About profile={profile} />
          <Skills categories={profile?.skillCategories} />
          <Education educationList={profile?.education} />
          <ResumeSection profile={profile} />
          <Contact profile={profile} />
        </main>

        <Footer profile={profile} />
      </div>

      {/* Admin Login & Messages Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
