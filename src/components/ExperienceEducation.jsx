import React from 'react';
import { Briefcase, GraduationCap, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { experience, education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ExperienceEducation() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.06 });

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Background</span>
          </div>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional experience and academic journey so far.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className={`reveal reveal-fade-up${contentVisible ? ' reveal-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* ─── Experience Column ─── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                }}
              >
                <Briefcase size={18} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{ padding: '1.75rem', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}
                >
                  {/* accent */}
                  <div
                    style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
                      background: 'linear-gradient(180deg, #00f0ff, #0070f3)',
                      borderRadius: '3px 0 0 3px',
                    }}
                  />

                  <div style={{ paddingLeft: '0.75rem' }}>
                    {/* Type Badge */}
                    <span
                      style={{
                        display: 'inline-block', fontSize: '0.68rem', fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-cyan)', background: 'rgba(0,240,255,0.08)',
                        border: '1px solid rgba(0,240,255,0.25)', borderRadius: '9999px',
                        padding: '0.15rem 0.6rem', marginBottom: '0.5rem',
                      }}
                    >
                      {exp.type}
                    </span>

                    {/* Role & Company */}
                    <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.2rem' }}>
                      {exp.role}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8', fontSize: '0.88rem', fontWeight: 600, transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#38bdf8')}
                      >
                        <span>{exp.company}</span>
                        <ExternalLink size={12} />
                      </a>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#64748b' }}>
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1rem' }}>
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul style={{ margin: '0 0 1rem 0', padding: '0 0 0 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.6 }}>{r}</li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge" style={{ fontSize: '0.73rem' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Education Column ─── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#38bdf8',
                }}
              >
                <GraduationCap size={18} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{ padding: '1.75rem', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}
                >
                  {/* accent */}
                  <div
                    style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
                      background: idx === 0
                        ? 'linear-gradient(180deg, #38bdf8, #6366f1)'
                        : 'linear-gradient(180deg, #64748b, #475569)',
                      borderRadius: '3px 0 0 3px',
                    }}
                  />

                  <div style={{ paddingLeft: '0.75rem' }}>
                    {/* Period Badge */}
                    <span
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        fontSize: '0.68rem', fontFamily: 'var(--font-mono)',
                        color: idx === 0 ? '#38bdf8' : '#64748b',
                        background: idx === 0 ? 'rgba(56,189,248,0.08)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${idx === 0 ? 'rgba(56,189,248,0.25)' : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: '9999px', padding: '0.15rem 0.6rem', marginBottom: '0.5rem',
                      }}
                    >
                      <Calendar size={10} />
                      {edu.period}
                    </span>

                    {/* Degree */}
                    <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 500, marginBottom: '0.15rem' }}>
                      {edu.institution}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>
                      {edu.affiliation}
                    </p>

                    {/* Highlights */}
                    <ul style={{ margin: 0, padding: '0 0 0 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {edu.highlights.map((h, i) => (
                        <li key={i} style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

