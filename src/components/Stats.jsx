import React from 'react';
import { Award, Code2, Cpu, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Stats() {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  const stats = [
    { label: 'Degree Qualification', value: 'BSc (Hons)', sub: 'Computing · London Met UK', icon: Award },
    { label: 'Core Specialization', value: 'AI & ML', sub: 'Data Science & Development', icon: Cpu },
    { label: 'Software Projects', value: '10+', sub: 'Web, AI & Systems', icon: Code2 },
    { label: 'Public Learning', value: '100 Days', sub: 'DS & ML on GitHub', icon: Sparkles },
  ];

  return (
    <div style={{ position: 'relative', zIndex: 2, padding: '1rem 0 3rem 0' }}>
      <div className="container">
        <div
          ref={ref}
          className="reveal-stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className={`glass-panel reveal reveal-zoom${visible ? ' reveal-visible' : ''}`}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(8, 14, 32, 0.65)',
                }}
              >
                <div
                  style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: 'rgba(0, 240, 255, 0.08)',
                    border: '1px solid rgba(0, 240, 255, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-cyan)', flexShrink: 0,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem', fontWeight: 800,
                      color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em',
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 500, marginTop: '0.2rem' }}>
                    {s.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
