import React from 'react';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'rgba(3,7,18,0.96)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 0 2rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Animated glow line */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #00f0ff 50%, #0070f3 75%, transparent 100%)',
          boxShadow: '0 0 12px #00f0ff',
          animation: 'scan-line 6s ease-in-out infinite',
        }}
      />

      <div className="container">
        {/* Main Row */}
        <div
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <div
                style={{
                  width: '28px', height: '28px', borderRadius: '6px',
                  background: 'linear-gradient(135deg, #00f0ff, #0070f3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#030712', fontWeight: 900, fontSize: '0.74rem',
                }}
              >
                SG
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}>
                SUSHIL GURUNG
              </span>
            </div>
            <p style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.06em' }}>
              Computing Graduate · Full-Stack Developer · Aspiring AI Professional
            </p>
          </div>

          {/* Social Links + Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>

            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

            <a
              href={`mailto:${personalInfo.contacts.email}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              style={{
                marginLeft: '0.5rem', width: '34px', height: '34px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,240,255,0.2)',
                color: 'var(--accent-cyan)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,240,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '0.5rem',
            fontSize: '0.77rem', color: '#475569',
          }}
        >
          <span>© {year} Sushil Gurung. All rights reserved.</span>
          <span>BSc (Hons) Computing · Informatics College Pokhara / London Metropolitan University, UK</span>
        </div>
      </div>
    </footer>
  );
}
