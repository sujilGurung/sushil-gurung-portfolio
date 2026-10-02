import React, { useState } from 'react';
import NetworkBackground from './components/NetworkBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import Skills from './components/Skills';
import AINetwork from './components/AINetwork';
import Experience from './components/Experience';
import Education from './components/Education';
import AIMLJourney from './components/AIMLJourney';
import Achievements from './components/Achievements';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#030712' }}>
      {/* Interactive AI Neural Network / Spider-Web Background */}
      <NetworkBackground />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenCV={() => setCvModalOpen(true)} />
        <Stats />
        <About />
        <FeaturedProjects />
        <OtherProjects />
        <Skills />
        <AINetwork />
        <Experience />
        <Education />
        <AIMLJourney />
        <Achievements />
        <GitHub />
        <Contact onOpenCV={() => setCvModalOpen(true)} />
      </main>

      {/* Futuristic Footer */}
      <Footer />

      {/* Full Resume / CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
