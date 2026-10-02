import React, { useEffect, useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { personalInfo, featuredProjects, otherProjects, learningJourney } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  const handleCopyCV = () => {
    const cvText = `
SUSHIL GURUNG - CURRICULUM VITAE
AI • Machine Learning • Data Science • Software Development
Portfolio: https://sushilgurung.dev | GitHub: ${personalInfo.contacts.github} | Email: ${personalInfo.contacts.email}

SUMMARY
BSc (Hons) Computing graduate from Informatics College Pokhara (affiliated with London Metropolitan University, UK) with hands-on experience in modern frontend development, full-stack software applications, and academic research in machine learning. Actively advancing in Data Science & Machine Learning.

EDUCATION
- BSc (Hons) Computing (2023 - 2026)
  Informatics College Pokhara (Affiliated with London Metropolitan University, UK)
  Focus: Software Engineering, Intelligent Computing, Algorithms & Databases
  Final Year Project: Mittho Bhojan (Full-Stack Restaurant Pre-Ordering & Delivery with AI Chatbot)

- +2 High School
  United Academy, Kumaripati, Lalitpur, Nepal
  Focus: Mathematics and Computer Science Foundations

EXPERIENCE
- Frontend Developer Intern | Everest Technologies
  - Developed responsive, high-performance web interfaces using React and Vite
  - Integrated REST APIs and implemented responsive UI architectures
  - Enhanced code modularity and frontend state management

KEY PROJECTS
- Mittho Bhojan (Final Year Project)
  Tech: React, Vite, PHP, MySQL, JavaScript, Leaflet, Khalti, Gemini / RAG
  Full-scale platform featuring separate restaurant-owner portal, customer ordering, Khalti payments, location discovery, and RAG-based AI chatbot.

- Cancer Prediction Machine (Academic AI/ML Project)
  Tech: Python, Machine Learning, Scikit-Learn, Pandas, NumPy
  Academic exploration analyzing medical data using ML classification techniques.

- Personal Journal App
  Tech: .NET MAUI, Blazor Hybrid, C#, SQLite
  Cross-platform app featuring CRUD, local auth, mood logging, and SQLite storage.

- Vehicle Service Management System
  Tech: ASP.NET Core, Entity Framework, PostgreSQL, Identity, Swagger

100 DAYS OF DATA SCIENCE & MACHINE LEARNING
- Skills Shikshya & GitHub Public Documentation (https://github.com/sujilGurung/DS_ML_Course)
  Progressive study across Python Core, Algorithmic Thinking, Data Structures, Data Science, and Machine Learning.
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          backgroundColor: 'rgba(8, 14, 30, 0.95)',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 240, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '20px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(10, 18, 38, 0.7)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>Sushil Gurung — Curriculum Vitae</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', margin: 0, fontFamily: 'var(--font-mono)' }}>
                Verified Academic & Professional Credentials
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleCopyCV}
              className="btn-outline"
              title="Copy Plaintext CV"
              style={{ padding: '0.45rem 0.85rem' }}
            >
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrintDownload}
              className="btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#94a3b8',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: '2rem',
            overflowY: 'auto',
            fontSize: '0.92rem',
            color: '#cbd5e1',
            lineHeight: 1.65
          }}
        >
          {/* Header Info */}
          <div
            style={{
              paddingBottom: '1.5rem',
              marginBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <h1 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.35rem' }}>SUSHIL GURUNG</h1>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>
              {personalInfo.label}
            </p>
            <p style={{ color: '#94a3b8', maxWidth: '720px' }}>{personalInfo.bio}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span>GitHub: <strong style={{ color: '#ffffff' }}>github.com/sujilGurung</strong></span>
              <span>LinkedIn: <strong style={{ color: '#ffffff' }}>[ADD LINKEDIN URL]</strong></span>
              <span>Email: <strong style={{ color: '#ffffff' }}>[ADD EMAIL]</strong></span>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <GraduationCap size={18} /> Education
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {personalInfo.education.map((edu, idx) => (
                <div key={idx} style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h5 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>{edu.degree}</h5>
                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{edu.period}</span>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {edu.institution} — <span style={{ color: '#7dd3fc' }}>{edu.affiliation}</span>
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#cbd5e1', fontSize: '0.87rem' }}>
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Briefcase size={18} /> Professional Experience
            </h4>
            {personalInfo.experience.map((exp, idx) => (
              <div key={idx} style={{ padding: '1.25rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h5 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>
                    {exp.role} · <span style={{ color: 'var(--accent-cyan)' }}>{exp.company}</span>
                  </h5>
                  <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.25rem', margin: '0.75rem 0', color: '#cbd5e1', fontSize: '0.87rem' }}>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                  {exp.technologies.map((t, i) => (
                    <span key={i} className="tech-badge" style={{ fontSize: '0.72rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Code size={18} /> Key Software & AI Projects
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {featuredProjects.map((p) => (
                <div key={p.id} style={{ padding: '1.25rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h5 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0 }}>{p.title}</h5>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{p.badge}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: '0.5rem 0' }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
                    {p.technologies.map((t, i) => (
                      <span key={i} className="tech-badge" style={{ fontSize: '0.72rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Learning Journey */}
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Award size={18} /> Continuous Learning: 100 Days of DS & ML
            </h4>
            <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.03)', border: '1px solid rgba(0, 240, 255, 0.15)' }}>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#e2e8f0' }}>
                Conducted with <strong>{learningJourney.institution}</strong>. Publicly documenting progression across Python fundamentals, data structures, and machine learning pipelines.
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Repository: github.com/sujilGurung/DS_ML_Course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
