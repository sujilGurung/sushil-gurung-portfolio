import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2rem)',
          maxWidth: '1240px',
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0.6rem 1.3rem' : '0.8rem 1.5rem',
            background: isScrolled ? 'rgba(5,11,26,0.9)' : 'rgba(8,14,32,0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isScrolled ? '1px solid rgba(0,240,255,0.28)' : '1px solid rgba(0,240,255,0.14)',
            borderRadius: '9999px',
            boxShadow: isScrolled
              ? '0 12px 30px -10px rgba(0,0,0,0.7), 0 0 25px rgba(0,240,255,0.15)'
              : '0 8px 24px rgba(0,0,0,0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <div
              style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #0070f3 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#030712', fontWeight: 900, fontSize: '0.82rem',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 0 12px rgba(0,240,255,0.55)',
              }}
            >
              SG
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.98rem', letterSpacing: '0.04em', color: '#ffffff' }}>
                SUSHIL GURUNG
              </span>
              <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', letterSpacing: '0.08em', lineHeight: 1 }}>
                DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '0.3rem' }}>
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    padding: '0.38rem 0.8rem', borderRadius: '9999px',
                    fontSize: '0.85rem', fontWeight: 500,
                    color: active ? '#00f0ff' : '#94a3b8',
                    background: active ? 'rgba(0,240,255,0.12)' : 'transparent',
                    border: active ? '1px solid rgba(0,240,255,0.3)' : '1px solid transparent',
                    boxShadow: active ? '0 0 12px rgba(0,240,255,0.18)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; } }}
                  onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.backgroundColor = 'transparent'; } }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            {/* GitHub Icon */}
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#94a3b8', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,240,255,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <GithubIcon size={16} />
            </a>

            {/* LinkedIn Icon */}
            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#94a3b8', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#38bdf8'; e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.boxShadow = '0 0 10px rgba(56,189,248,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <LinkedinIcon size={16} />
            </a>

            {/* View CV button */}
            <a
              href={personalInfo.contacts.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline desktop-cv-view"
              style={{ padding: '0.38rem 0.8rem', fontSize: '0.8rem', borderRadius: '9999px', display: 'inline-flex' }}
            >
              <Eye size={13} />
              <span>View CV</span>
            </a>

            {/* Download CV button */}
            <a
              href={personalInfo.contacts.cvUrl}
              download="Sushil_Gurung_CV.pdf"
              className="btn-primary"
              style={{ padding: '0.42rem 0.95rem', fontSize: '0.81rem', fontWeight: 700 }}
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation"
              style={{
                display: 'none', width: '34px', height: '34px', borderRadius: '8px',
                alignItems: 'center', justifyContent: 'center',
                color: '#ffffff', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '5rem', left: '1rem', right: '1rem',
            zIndex: 999,
            background: 'rgba(6,12,28,0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,240,255,0.25)',
            borderRadius: '20px',
            padding: '1.1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 25px rgba(0,240,255,0.12)',
            display: 'flex', flexDirection: 'column', gap: '0.4rem',
          }}
        >
          {navLinks.map((link) => {
            const active = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.7rem 0.9rem', borderRadius: '12px',
                  color: active ? 'var(--accent-cyan)' : '#e2e8f0',
                  background: active ? 'rgba(0,240,255,0.09)' : 'transparent',
                  fontWeight: 600, fontSize: '0.93rem',
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={15} opacity={0.5} />
              </a>
            );
          })}

          {/* Mobile CV actions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.4rem' }}>
            <a
              href={personalInfo.contacts.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '0.65rem', fontSize: '0.84rem', justifyContent: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              <Eye size={14} />
              <span>View CV</span>
            </a>
            <a
              href={personalInfo.contacts.cvUrl}
              download="Sushil_Gurung_CV.pdf"
              className="btn-primary"
              style={{ padding: '0.65rem', fontSize: '0.84rem', justifyContent: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 960px) { .desktop-nav { display: flex !important; } }
        @media (max-width: 959px) { .mobile-toggle { display: flex !important; } }
        @media (max-width: 640px) { .desktop-cv-view { display: none !important; } }
      `}</style>
    </>
  );
}
