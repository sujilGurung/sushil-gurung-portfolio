import React from 'react';
import { Award, GraduationCap, Rocket, Briefcase, TrendingUp, Activity, Layers, CheckCircle2 } from 'lucide-react';
import { milestones } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={22} color="#00f0ff" />;
      case 'Rocket': return <Rocket size={22} color="#38bdf8" />;
      case 'Briefcase': return <Briefcase size={22} color="#6366f1" />;
      case 'TrendingUp': return <TrendingUp size={22} color="#10b981" />;
      case 'Activity': return <Activity size={22} color="#f43f5e" />;
      case 'Layers': return <Layers size={22} color="#a855f7" />;
      default: return <Award size={22} color="#00f0ff" />;
    }
  };

  return (
    <section className="section" style={{ paddingTop: '1rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Verified Track Record</span>
          </div>
          <h2 className="section-title">Milestones</h2>
          <p className="section-subtitle">
            Demonstrated engineering achievements, completed programs, and academic qualifications.
          </p>
        </div>

        {/* Milestones Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '18px',
                background: 'rgba(8, 14, 32, 0.65)',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getIcon(item.icon)}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <CheckCircle2 size={15} color="#10b981" flexShrink={0} />
                </div>
                <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
