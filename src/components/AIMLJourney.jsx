import React from 'react';
import { ExternalLink, BookOpen, CheckCircle, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { learningJourney } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AIMLJourney() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [bodyRef, bodyVisible] = useScrollReveal({ threshold: 0.06 });
  return (
    <section id="journey" className="section">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Continuous Specialization</span>
          </div>
          <h2 className="section-title">{learningJourney.title}</h2>
          <p className="section-subtitle">{learningJourney.subtitle}</p>
        </div>

        {/* Narrative Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            marginBottom: '3rem',
            background: 'rgba(8, 14, 32, 0.75)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gradient light */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '9999px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#a5b4fc',
                  marginBottom: '1rem'
                }}
              >
                <BookOpen size={14} />
                <span>Mentored & Structured Program · {learningJourney.institution}</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.85rem' }}>
                Engineering Rigor Through Transparent Public Practice
              </h3>

              <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.96rem', margin: 0 }}>
                {learningJourney.description}
              </p>
            </div>

            <div>
              <a
                href={learningJourney.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.9rem 1.8rem' }}
              >
                <GithubIcon size={18} />
                <span>View My 100-Day Journey</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Visual Progression Roadmap */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <h4
              style={{
                fontSize: '1.1rem',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              Curriculum Roadmap & Progression
            </h4>
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                Completed Foundation
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                Active Exploration
              </span>
            </div>
          </div>

          {/* Progression Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {learningJourney.roadmap.map((stage, idx) => {
              const isCompleted = stage.status === 'completed';

              return (
                <div
                  key={stage.stage}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '150px',
                    background: isCompleted ? 'rgba(8, 14, 32, 0.65)' : 'rgba(10, 20, 44, 0.75)',
                    border: isCompleted
                      ? '1px solid rgba(255, 255, 255, 0.08)'
                      : '1px solid rgba(0, 240, 255, 0.35)',
                    boxShadow: !isCompleted ? '0 0 20px rgba(0, 240, 255, 0.12)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: isCompleted ? '#10b981' : 'var(--accent-cyan)'
                      }}
                    >
                      STAGE {stage.stage}
                    </span>

                    {isCompleted ? (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(16, 185, 129, 0.25)'
                        }}
                      >
                        <CheckCircle size={12} />
                        Completed
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                          background: 'rgba(0, 240, 255, 0.12)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(0, 240, 255, 0.35)'
                        }}
                      >
                        <Clock size={12} />
                        Active Focus
                      </span>
                    )}
                  </div>

                  <div>
                    <h5 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                      {stage.name}
                    </h5>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
