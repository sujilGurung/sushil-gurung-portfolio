import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Career Pathway</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Hands-on industry engineering and production collaboration.
          </p>
        </div>

        {/* Futuristic Glowing Timeline Container */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, #00f0ff 0%, #0070f3 60%, rgba(0, 240, 255, 0.1) 100%)',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.6)'
            }}
          />

          {personalInfo.experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                paddingLeft: '75px',
                marginBottom: '2.5rem'
              }}
            >
              {/* Glowing Timeline Node */}
              <div
                style={{
                  position: 'absolute',
                  left: '17px',
                  top: '12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#030712',
                  border: '2px solid #00f0ff',
                  boxShadow: '0 0 15px #00f0ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
              </div>

              {/* Glass Card Body */}
              <div
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'rgba(8, 14, 32, 0.75)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 600 }}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '9999px',
                        background: 'rgba(0, 240, 255, 0.12)',
                        color: 'var(--accent-cyan)',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullet Points of Actual Responsibilities */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '1.25rem 0' }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#00f0ff" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies Applied */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
