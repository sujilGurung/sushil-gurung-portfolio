import React from 'react';
import NetworkBackground from './components/NetworkBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#030712' }}>
      {/* Subtle animated background */}
      <NetworkBackground />

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Floating navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
