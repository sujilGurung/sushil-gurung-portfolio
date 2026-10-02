import React, { useState } from 'react';
import { Sparkles, Layers, Cpu, Layout, Server, Database, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [tabsRef, tabsVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.06 });

  const categories = ['All', 'AI & Data', 'Frontend', 'Backend', 'Databases', 'Tools & Workflow'];
  const [selectedCategory, setSelectedCategory] = useState('All');


  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'AI & Data': return <Cpu size={16} />;
      case 'Frontend': return <Layout size={16} />;
      case 'Backend': return <Server size={16} />;
      case 'Databases': return <Database size={16} />;
      case 'Tools & Workflow': return <Wrench size={16} />;
      default: return <Layers size={16} />;
    }
  };

  const displayedCategories = selectedCategory === 'All'
    ? Object.keys(skillsData)
    : [selectedCategory];

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Curated toolkit spanning intelligent data pipelines, reactive frontends, and reliable backend services.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div
          ref={tabsRef}
          className={`reveal reveal-fade-up${tabsVisible ? ' reveal-visible' : ''}`}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: isSelected ? '#030712' : '#cbd5e1',
                  background: isSelected
                    ? 'linear-gradient(135deg, #00f0ff 0%, #0070f3 100%)'
                    : 'rgba(8, 14, 32, 0.6)',
                  border: isSelected
                    ? '1px solid rgba(255, 255, 255, 0.5)'
                    : '1px solid rgba(0, 240, 255, 0.15)',
                  boxShadow: isSelected ? '0 0 20px rgba(0, 240, 255, 0.35)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          ref={gridRef}
          className={`reveal-stagger reveal reveal-fade-up${gridVisible ? ' reveal-visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {displayedCategories.map((categoryName) => {
            const skills = skillsData[categoryName] || [];

            return (
              <div
                key={categoryName}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: '22px',
                  background: 'rgba(8, 14, 32, 0.7)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '0.85rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    {getCategoryIcon(categoryName)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                      {categoryName}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {skills.length} TECHNOLOGIES
                    </span>
                  </div>
                </div>

                {/* Badges List with Notes (No Fake Percentage Bars!) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                        e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.04)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.92rem' }}>
                          {skill.name}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                          {skill.note}
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '9999px',
                          background: 'rgba(0, 240, 255, 0.08)',
                          color: 'var(--accent-cyan)',
                          border: '1px solid rgba(0, 240, 255, 0.2)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {skill.level}
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
