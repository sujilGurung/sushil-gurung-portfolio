import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'rgba(3, 7, 18, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '3.5rem 0 2.5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Thin Animated Blue Glowing Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #00f0ff 50%, #0070f3 75%, transparent 100%)',
          boxShadow: '0 0 15px #00f0ff',
          animation: 'scan-line 6s ease-in-out infinite'
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #00f0ff, #0070f3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#030712',
                  fontWeight: 900,
                  fontSize: '0.75rem'
                }}
              >
                SG
              </div>
              <span
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.04em'
                }}
              >
                SUSHIL GURUNG
              </span>
            </div>
            <p
              style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.06em'
              }}
            >
              AI • MACHINE LEARNING • SOFTWARE DEVELOPMENT
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.86rem',
                color: '#94a3b8',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.86rem',
                color: '#94a3b8',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>•</span>

            <a
              href={`mailto:${personalInfo.contacts.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.86rem',
                color: '#94a3b8',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <Mail size={16} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              title="Back to top"
              style={{
                marginLeft: '1rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copyright & Academic Notice */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.78rem',
            color: '#64748b'
          }}
        >
          <div>© 2026 Sushil Gurung. All rights reserved.</div>
          <div>BSc (Hons) Computing · Informatics College Pokhara / London Metropolitan University</div>
        </div>
      </div>
    </footer>
  );
}
