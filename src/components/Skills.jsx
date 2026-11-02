import React, { useState } from 'react';
import { Layers, Cpu, Layout, Server, Database, Wrench, Code } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const getCategoryIcon = (cat) => {
  switch (cat) {
    case 'Programming': return <Code size={16} />;
    case 'Frontend': return <Layout size={16} />;
    case 'Backend': return <Server size={16} />;
    case 'AI & Data Science': return <Cpu size={16} />;
    case 'Databases': return <Database size={16} />;
    case 'Tools': return <Wrench size={16} />;
    default: return <Layers size={16} />;
  }
};

export default function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [tabsRef, tabsVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.06 });

  const categories = ['All', ...Object.keys(skillsData)];
  const [selected, setSelected] = useState('All');

  const displayed = selected === 'All' ? Object.keys(skillsData) : [selected];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated toolkit spanning intelligent systems, full-stack development and modern tooling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          ref={tabsRef}
          className={`reveal reveal-fade-up${tabsVisible ? ' reveal-visible' : ''}`}
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '3rem' }}
        >
          {categories.map((cat) => {
            const active = selected === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.55rem 1.15rem', borderRadius: '9999px',
                  fontSize: '0.84rem', fontWeight: 600,
                  color: active ? '#030712' : '#cbd5e1',
                  background: active ? 'linear-gradient(135deg, #00f0ff 0%, #0070f3 100%)' : 'rgba(8, 14, 32, 0.6)',
                  border: active ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(0, 240, 255, 0.15)',
                  boxShadow: active ? '0 0 18px rgba(0, 240, 255, 0.35)' : 'none',
                  transition: 'all 0.22s ease',
                }}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className={`reveal-stagger reveal reveal-fade-up${gridVisible ? ' reveal-visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.6rem' }}
        >
          {displayed.map((categoryName) => {
            const skills = skillsData[categoryName] || [];
            return (
              <div
                key={categoryName}
                className="glass-panel"
                style={{ padding: '2rem', borderRadius: '22px', background: 'rgba(8, 14, 32, 0.7)' }}
              >
                {/* Card Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.4rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    style={{
                      width: '34px', height: '34px', borderRadius: '10px',
                      background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)',
                    }}
                  >
                    {getCategoryIcon(categoryName)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>{categoryName}</h3>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {skills.length} TECHNOLOGIES
                    </span>
                  </div>
                </div>

                {/* Skill Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.45rem 0.9rem',
                        borderRadius: '9999px',
                        background: 'rgba(0,240,255,0.06)',
                        border: '1px solid rgba(0,240,255,0.18)',
                        transition: 'all 0.18s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0,240,255,0.14)';
                        e.currentTarget.style.borderColor = 'rgba(0,240,255,0.5)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0,240,255,0.06)';
                        e.currentTarget.style.borderColor = 'rgba(0,240,255,0.18)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      title={skill.note}
                    >
                      <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
