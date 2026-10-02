import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Landmark } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundations in computing, software architecture, and mathematical logic.
          </p>
        </div>

        {/* Education Timeline */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, #38bdf8 0%, #6366f1 60%, rgba(99, 102, 241, 0.1) 100%)',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)'
            }}
          />

          {personalInfo.education.map((edu, idx) => (
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
                  border: '2px solid #38bdf8',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
              </div>

              {/* Glass Card */}
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
                    marginBottom: '0.75rem'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>
                      {edu.degree}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.05rem', fontWeight: 600 }}>
                      <Landmark size={16} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(0, 240, 255, 0.08)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(0, 240, 255, 0.25)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Award size={15} color="#38bdf8" />
                  <span>{edu.affiliation}</span>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="#38bdf8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                        {h}
                      </span>
                    </div>
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
