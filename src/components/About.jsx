import React from 'react';
import { GraduationCap, Brain, Code, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.08 });

  const highlights = [
    { icon: GraduationCap, color: '#00f0ff', label: 'Education', value: 'BSc (Hons) Computing', sub: 'Informatics College Pokhara · London Met UK' },
    { icon: Brain, color: '#38bdf8', label: 'Aspiring', value: 'AI & Machine Learning', sub: 'Postgraduate studies goal' },
    { icon: Code, color: '#0070f3', label: 'Development', value: 'Full-Stack Developer', sub: 'React, Django, FastAPI & more' },
    { icon: MapPin, color: '#6366f1', label: 'Location', value: 'Pokhara, Nepal', sub: 'Available remotely' },
  ];

  const goals = ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Postgraduate Studies in AI'];

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
            <span>About Me</span>
          </div>
          <h2 className="section-title">Who I Am</h2>
        </div>

        {/* Content Grid */}
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
          {/* Left: Narrative */}
          <div
            className="glass-panel"
            style={{ padding: '2.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
          >
            {/* top accent line */}
            <div
              style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
              }}
            />

            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.25rem', fontWeight: 700 }}>
              My Background
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.97rem' }}>
              {personalInfo.aboutText}
            </p>

            <div>
              <span
                style={{
                  fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.75rem',
                }}
              >
                Currently working toward:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.6rem' }}>
                {goals.map((goal, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      fontSize: '0.85rem', color: '#e2e8f0',
                      padding: '0.45rem 0.7rem', borderRadius: '8px',
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <CheckCircle2 size={13} color="#00f0ff" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div
            className="reveal-stagger"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.1rem' }}
          >
            {highlights.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className={`glass-panel reveal reveal-zoom${contentVisible ? ' reveal-visible' : ''}`}
                  style={{ padding: '1.6rem', borderRadius: '18px', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: card.color, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      {card.label}
                    </span>
                    <div
                      style={{
                        width: '34px', height: '34px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.04)', border: `1px solid ${card.color}44`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: card.color,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>{card.value}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>{card.sub}</p>
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
