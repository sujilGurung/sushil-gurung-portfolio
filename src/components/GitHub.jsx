import React from 'react';
import { ExternalLink, GitCommit, GitPullRequest, GitFork, Star, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, learningJourney } from '../data/portfolioData';

export default function GitHub() {
  // Simulated realistic git contribution cells
  const contributionWeeks = 28;
  const daysPerWeek = 7;

  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Open Source & Version Control</span>
          </div>
          <h2 className="section-title">Building in Public</h2>
          <p className="section-subtitle">
            I use GitHub to document projects, experiments and my Data Science & Machine Learning learning journey.
          </p>
        </div>

        {/* GitHub Glass Container */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            borderRadius: '24px',
            background: 'rgba(8, 14, 32, 0.75)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.1)'
          }}
        >
          {/* Card Top: Profile Bar & Visit Button */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}
              >
                <GithubIcon size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                  sujilGurung
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  github.com/sujilGurung
                </span>
              </div>
            </div>

            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
            >
              <GithubIcon size={17} />
              <span>Visit GitHub</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Activity Matrix / Heatmap Visualization */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.75rem',
                fontSize: '0.8rem',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
                <GitCommit size={14} color="#00f0ff" />
                <span>CONTINUOUS COMMIT & REPOSITORY ACTIVITY</span>
              </span>
              <span>Documenting 100 Days of DS & ML</span>
            </div>

            <div
              style={{
                overflowX: 'auto',
                paddingBottom: '0.5rem'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridTemplateRows: 'repeat(7, 12px)',
                  gap: '4px',
                  minWidth: '550px'
                }}
              >
                {Array.from({ length: contributionWeeks * daysPerWeek }).map((_, idx) => {
                  // Deterministic pseudo-random activity pattern with higher intensity toward recent weeks
                  const weekIdx = Math.floor(idx / 7);
                  const seed = (idx * 37 + 13) % 100;
                  let level = 0;
                  if (seed > 40) level = 1;
                  if (seed > 65) level = 2;
                  if (seed > 85) level = 3;
                  if (weekIdx > 20 && seed > 30) level = Math.max(level, 2);

                  const colors = [
                    'rgba(255, 255, 255, 0.04)',
                    'rgba(0, 240, 255, 0.25)',
                    'rgba(0, 240, 255, 0.6)',
                    '#00f0ff'
                  ];

                  return (
                    <div
                      key={idx}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '3px',
                        backgroundColor: colors[level],
                        border: level > 0 ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.02)',
                        transition: 'transform 0.15s',
                        boxShadow: level === 3 ? '0 0 6px #00f0ff' : 'none'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.35)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      title={`Activity block ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Highlight Repositories */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Terminal size={16} color="#00f0ff" />
                  <a
                    href={learningJourney.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', textDecoration: 'none' }}
                  >
                    DS_ML_Course
                  </a>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  100 Days of Data Science and Machine Learning documentation with Skills Shikshya.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', fontSize: '0.74rem', color: '#7dd3fc', fontFamily: 'var(--font-mono)' }}>
                <span>Python</span>
                <span>Public Repository</span>
              </div>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Terminal size={16} color="#38bdf8" />
                  <a
                    href={personalInfo.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', textDecoration: 'none' }}
                  >
                    Mittho-Bhojan
                  </a>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Final Year Capstone: React + PHP + Leaflet + Khalti + Gemini RAG chatbot.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', fontSize: '0.74rem', color: '#7dd3fc', fontFamily: 'var(--font-mono)' }}>
                <span>React / PHP</span>
                <span>Capstone Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
