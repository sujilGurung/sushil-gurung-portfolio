import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, Eye } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const fadeUp = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  const fadeRight = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateX(0)' : 'translateX(36px)',
    transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1) 200ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) 200ms',
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        zIndex: 2,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
          }}
        >
          {/* ── Left: Text Content ── */}
          <div style={{ maxWidth: '620px' }}>

            {/* Greeting */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.08em',
                marginBottom: '0.75rem',
                ...fadeUp(0),
              }}
            >
              👋 Hi, I'm
            </p>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg, #ffffff 40%, #a5f3fc 75%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                ...fadeUp(80),
              }}
            >
              Sushil Gurung
            </h1>

            {/* Professional Title */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: '#7dd3fc',
                fontWeight: 500,
                marginBottom: '1.4rem',
                lineHeight: 1.5,
                ...fadeUp(160),
              }}
            >
              {personalInfo.role}
            </p>

            {/* Bio */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: '#94a3b8',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '540px',
                ...fadeUp(240),
              }}
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '2.5rem',
                ...fadeUp(320),
              }}
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
                className="btn-primary"
                style={{ padding: '0.85rem 1.9rem' }}
              >
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.9rem' }}
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.contacts.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '0.75rem 1.3rem', borderRadius: '9999px' }}
              >
                <Eye size={16} />
                <span>View CV</span>
              </a>

              <a
                href={personalInfo.contacts.cvUrl}
                download="Sushil_Gurung_CV.pdf"
                className="btn-outline"
                style={{ padding: '0.75rem 1.3rem', borderRadius: '9999px' }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.4rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                ...fadeUp(400),
              }}
            >
              <span
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.06em',
                }}
              >
                CONNECT
              </span>

              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#cbd5e1', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#cbd5e1', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>

              <a
                href={`mailto:${personalInfo.contacts.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', color: '#cbd5e1', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...fadeRight,
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Outer glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00f0ff, #0070f3, #6366f1, #00f0ff)',
                  animation: 'spin-slow 8s linear infinite',
                  opacity: 0.6,
                  filter: 'blur(2px)',
                }}
              />
              {/* Inner border ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00f0ff, #0070f3)',
                  opacity: 0.85,
                }}
              />
              {/* Photo */}
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(240px, 30vw, 320px)',
                  height: 'clamp(240px, 30vw, 320px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid #030712',
                  boxShadow: '0 0 40px rgba(0, 240, 255, 0.35), 0 20px 60px rgba(0,0,0,0.6)',
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Sushil Gurung"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>

              {/* Floating status badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(6, 12, 28, 0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 240, 255, 0.35)',
                  borderRadius: '9999px',
                  padding: '0.35rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 18px rgba(0, 240, 255, 0.2)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    animation: 'pulse-dot 2s infinite',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#e2e8f0' }}>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
