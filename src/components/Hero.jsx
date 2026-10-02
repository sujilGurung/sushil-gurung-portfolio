import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import HeroCoreCanvas from './HeroCoreCanvas';

export default function Hero({ onOpenCV }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem'
          }}
        >
          {/* Left Column: Hero Content */}
          <div style={{ maxWidth: '640px' }}>
            {/* Small futuristic badge */}
            <div
              className="section-tag"
              style={{
                marginBottom: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <span className="dot" />
              <span>{personalInfo.label}</span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #ffffff 40%, #a5f3fc 80%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {personalInfo.tagline}
            </h1>

            {/* Supporting Bio Text */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Call to Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary"
                style={{ padding: '0.9rem 2rem' }}
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onOpenCV}
                className="btn-secondary"
                style={{ padding: '0.9rem 2rem' }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Secondary Direct Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em'
                }}
              >
                CONNECT
              </span>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

              <a
                href={`mailto:${personalInfo.contacts.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI Neural Network Core Visual */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <HeroCoreCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
