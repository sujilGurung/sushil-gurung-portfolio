import React, { useState } from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.04 });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Selected Work</span>
          </div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built — from full-stack platforms to machine learning applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className={`reveal-stagger reveal reveal-fade-up${gridVisible ? ' reveal-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} visible={gridVisible} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, visible, idx }) {
  const [hovered, setHovered] = useState(false);

  // First 2 projects get a slightly more prominent look
  const isFeatured = idx < 2;

  return (
    <div
      className={`glass-panel reveal reveal-fade-up${visible ? ' reveal-visible' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem',
        borderRadius: '22px',
        background: hovered ? 'rgba(13, 24, 48, 0.88)' : 'rgba(8, 14, 32, 0.72)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: hovered ? 'rgba(0,240,255,0.4)' : undefined,
        boxShadow: hovered ? '0 16px 40px -12px rgba(0,0,0,0.7), 0 0 25px rgba(0,240,255,0.15)' : undefined,
      }}
    >
      {/* Top accent line */}
      {isFeatured && (
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, #00f0ff, #0070f3, transparent)',
          }}
        />
      )}

      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
        <div style={{ flex: 1 }}>
          {/* Badge */}
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              color: isFeatured ? 'var(--accent-cyan)' : '#94a3b8',
              background: isFeatured ? 'rgba(0,240,255,0.08)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${isFeatured ? 'rgba(0,240,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '9999px',
              padding: '0.2rem 0.65rem',
              marginBottom: '0.5rem',
              letterSpacing: '0.04em',
            }}
          >
            {project.badge}
          </span>
          {/* Title */}
          <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.3 }}>
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
              style={{
                width: '34px', height: '34px', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#00f0ff'; e.currentTarget.style.borderColor = '#00f0ff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              style={{
                width: '34px', height: '34px', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.25)',
                color: 'var(--accent-cyan)', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,240,255,0.18)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,240,255,0.08)'; }}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7, flex: 1 }}>
        {project.description}
      </p>

      {/* Disclaimer */}
      {project.disclaimer && (
        <div
          style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
            padding: '0.6rem 0.85rem', borderRadius: '8px',
            background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)',
          }}
        >
          <AlertCircle size={13} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span style={{ fontSize: '0.76rem', color: '#fbbf24', lineHeight: 1.5 }}>{project.disclaimer}</span>
        </div>
      )}

      {/* Tech Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {project.technologies.map((tech, i) => (
          <span key={i} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Bottom Links Row */}
      {(project.githubUrl || project.demoUrl) && (
        <div style={{ display: 'flex', gap: '0.85rem', paddingTop: '0.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              <GithubIcon size={13} />
              <span>Source Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#64748b', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
