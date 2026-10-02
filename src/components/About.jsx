import React from 'react';
import { GraduationCap, Brain, Code, BookOpen, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.08 });
  const [roadmapRef, roadmapVisible] = useScrollReveal({ threshold: 0.08 });

  const cards = [
    {
      title: 'Education',
      primary: 'BSc (Hons) Computing',
      secondary: 'Informatics College Pokhara · London Met UK',
      icon: GraduationCap,
      color: '#00f0ff',
    },
    {
      title: 'Focus',
      primary: 'AI / Machine Learning',
      secondary: 'Exploration, intelligent architectures & models',
      icon: Brain,
      color: '#38bdf8',
    },
    {
      title: 'Development',
      primary: 'Web & Software Development',
      secondary: 'React, Vite, REST APIs & Full-Stack Systems',
      icon: Code,
      color: '#0070f3',
    },
    {
      title: 'Current Learning',
      primary: 'Data Science & Machine Learning',
      secondary: '100-Day public challenge on GitHub',
      icon: BookOpen,
      color: '#6366f1',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">From Computing Foundations to Artificial Intelligence</p>
        </div>

        {/* Narrative Grid */}
        <div
          ref={gridRef}
          className={`reveal reveal-fade-up${gridVisible ? ' reveal-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
        >
          {/* Left Narrative Box */}
          <div
            className="glass-panel"
            style={{ padding: '2.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
              }}
            />
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '1.25rem', fontWeight: 700 }}>
              Academic Background &amp; Engineering Mindset
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.98rem' }}>
              {personalInfo.aboutExtended}
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              With hands-on experience gained through internship and complex capstone engineering projects like{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>Mittho Bhojan</strong>, I focus on engineering
              clean, scalable architectures while steadily deepening my theoretical and applied capabilities in
              Data Science and intelligent systems.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                Building Knowledge Toward:
              </span>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.65rem' }}
              >
                {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Software Engineering'].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.86rem', color: '#e2e8f0',
                        padding: '0.4rem 0.6rem', borderRadius: '8px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <CheckCircle2 size={14} color="#00f0ff" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Cards — staggered zoom */}
          <div
            className="reveal-stagger"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}
          >
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel reveal reveal-zoom${gridVisible ? ' reveal-visible' : ''}`}
                  style={{
                    padding: '1.75rem', borderRadius: '20px',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'space-between', minHeight: '160px', position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: c.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {c.title}
                    </span>
                    <div
                      style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.04)', border: `1px solid ${c.color}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem', fontWeight: 700 }}>{c.primary}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.4 }}>{c.secondary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Roadmap */}
        <div
          ref={roadmapRef}
          className={`glass-panel reveal reveal-fade-up${roadmapVisible ? ' reveal-visible' : ''}`}
          style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(6,12,28,0.65)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Academic &amp; Career Pathway
            </h4>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
              Verified Progression
            </span>
          </div>
          <div
            className="reveal-stagger"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem', position: 'relative' }}
          >
            {personalInfo.storyJourney.map((step, idx) => (
              <div
                key={idx}
                className={`reveal reveal-fade-up${roadmapVisible ? ' reveal-visible' : ''}`}
                style={{
                  padding: '1rem', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', flexDirection: 'column', gap: '0.4rem', position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>0{idx + 1}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748b' }}>{step.step}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#ffffff' }}>{step.title}</div>
                <div style={{ fontSize: '0.78rem', color: '#7dd3fc' }}>{step.org}</div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.4 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
