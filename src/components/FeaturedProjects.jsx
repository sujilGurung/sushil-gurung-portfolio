import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { featuredProjects } from '../data/portfolioData';
import CancerVisual from './CancerVisual';
import MitthoBhojanVisual from './MitthoBhojanVisual';
import EverestVisual from './EverestVisual';

export default function FeaturedProjects() {
  const getVisual = (id) => {
    switch (id) {
      case 'cancer-prediction':
        return <CancerVisual />;
      case 'mittho-bhojan':
        return <MitthoBhojanVisual />;
      case 'everest-trekking':
        return <EverestVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Projects where technology meets practical problems.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  padding: 'clamp(1.5rem, 3.5vw, 3rem)',
                  borderRadius: '28px',
                  background: 'rgba(8, 14, 32, 0.7)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background decorative corner glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: isReversed ? 'auto' : 0,
                    bottom: isReversed ? 0 : 'auto',
                    right: 0,
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center'
                  }}
                >
                  {/* Visual Preview Side */}
                  <div style={{ order: isReversed ? 2 : 1 }}>
                    {getVisual(project.id)}
                  </div>

                  {/* Information & Context Side */}
                  <div style={{ order: isReversed ? 1 : 2 }}>
                    {/* Category & Status Pill */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        marginBottom: '1rem',
                        flexWrap: 'wrap'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#94a3b8'
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      style={{
                        fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p
                      style={{
                        fontSize: '0.96rem',
                        color: '#cbd5e1',
                        lineHeight: 1.7,
                        marginBottom: '1.25rem'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Disclaimer / Academic / Architecture Note */}
                    {project.disclaimer && (
                      <div
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          background: 'rgba(0, 240, 255, 0.03)',
                          border: '1px solid rgba(0, 240, 255, 0.12)',
                          fontSize: '0.82rem',
                          color: '#94a3b8',
                          marginBottom: '1.5rem',
                          lineHeight: 1.5
                        }}
                      >
                        {project.disclaimer}
                      </div>
                    )}

                    {/* Key Features List if Mittho Bhojan */}
                    {project.features && (
                      <div style={{ marginBottom: '1.5rem' }}>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#7dd3fc',
                            marginBottom: '0.6rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Key System Capabilities:
                        </div>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '0.45rem'
                          }}
                        >
                          {project.features.slice(0, 6).map((feat, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.82rem',
                                color: '#e2e8f0'
                              }}
                            >
                              <CheckCircle2 size={13} color="#00f0ff" flexShrink={0} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Academic Highlights if Cancer Project */}
                    {project.keyHighlights && (
                      <div style={{ marginBottom: '1.5rem' }}>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#7dd3fc',
                            marginBottom: '0.6rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Methodological Exploration:
                        </div>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '0.45rem'
                          }}
                        >
                          {project.keyHighlights.map((hl, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.82rem',
                                color: '#e2e8f0'
                              }}
                            >
                              <CheckCircle2 size={13} color="#00f0ff" flexShrink={0} />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom: '1.75rem'
                      }}
                    >
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{ padding: '0.6rem 1.25rem' }}
                      >
                        <GithubIcon size={16} />
                        <span>View on GitHub</span>
                      </a>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#64748b'
                          }}
                        >
                          [ADD PROJECT GITHUB LINK]
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
