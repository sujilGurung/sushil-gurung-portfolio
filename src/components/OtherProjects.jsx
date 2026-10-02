import React, { useState } from 'react';
import { BookMarked, Wrench, Terminal, Check, ChevronRight, Layers } from 'lucide-react';
import { otherProjects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OtherProjects() {
  const [subHeaderRef, subHeaderVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.06 });
  const [selectedPythonApp, setSelectedPythonApp] = useState(0);

  return (
    <section className="section" style={{ paddingTop: '1rem' }}>
      <div className="container">
        {/* Sub Header */}
        <div
          ref={subHeaderRef}
          className={`reveal reveal-fade-up${subHeaderVisible ? ' reveal-visible' : ''}`}
          style={{ marginBottom: '2.5rem' }}
        >
          <div className="section-tag" style={{ marginBottom: '0.75rem' }}>
            <span className="dot" />
            <span>Additional Software Architecture</span>
          </div>
          <h3
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem'
            }}
          >
            Engineering & Algorithmic Work
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '650px' }}>
            Cross-platform application development, backend microservice architectures, and foundational algorithmic problem-solving.
          </p>
        </div>

        {/* Grid of Other Projects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {/* Card 1: Personal Journal App */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(8, 14, 32, 0.65)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc'
                  }}
                >
                  <BookMarked size={20} />
                </div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#c084fc' }}>
                  CROSS-PLATFORM
                </span>
              </div>

              <h4 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Personal Journal App
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                A cross-platform journal built with .NET MAUI and Blazor Hybrid for native execution. Features complete CRUD management, user authentication, daily mood tracking, and custom tags stored safely in local SQLite.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {['Full CRUD Functionality', 'PIN / Authentication Protection', 'Mood Management & Tagging', 'Offline-First SQLite Persistence'].map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                    <Check size={13} color="#c084fc" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              {['.NET MAUI', 'Blazor Hybrid', 'C#', 'SQLite'].map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ fontSize: '0.74rem' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Card 2: Vehicle Service Management System */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(8, 14, 32, 0.65)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}
                >
                  <Wrench size={20} />
                </div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  BACKEND & ARCHITECTURE
                </span>
              </div>

              <h4 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Vehicle Service Management System
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                A robust enterprise backend supporting automotive service centers. Handles repair schedules, parts inventory, client vehicle history, and role-based access control via ASP.NET Identity with PostgreSQL database.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {['Entity Framework Core Relational Modeling', 'ASP.NET Identity Access Governance', 'Interactive Swagger Documentation', 'Automated Work-Order Tracking'].map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                    <Check size={13} color="#38bdf8" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              {['ASP.NET Core', 'EF Core', 'PostgreSQL', 'Identity', 'Swagger'].map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ fontSize: '0.74rem' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Card 3: Python Learning Projects */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(8, 14, 32, 0.65)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(0, 240, 255, 0.12)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Terminal size={20} />
                </div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  PYTHON ALGORITHMS
                </span>
              </div>

              <h4 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Python Learning Projects
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1rem' }}>
                Modular applications developed to master control structures, algorithmic logic, data structures, and terminal interactions:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.4rem',
                  marginBottom: '1rem'
                }}
              >
                {[
                  'Number Checker',
                  'Calculator',
                  'Shopping Receipt',
                  'To-Do List',
                  'Shopping Cart',
                  'Phonebook',
                  'Report Card'
                ].map((app, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.35rem 0.6rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.76rem',
                      color: '#e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              {['Python', 'Data Structures', 'Algorithmic Logic', 'CLI'].map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ fontSize: '0.74rem' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
