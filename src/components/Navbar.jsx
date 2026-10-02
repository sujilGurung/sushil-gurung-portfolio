import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
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
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0.65rem 1.4rem' : '0.85rem 1.6rem',
            background: isScrolled ? 'rgba(5, 11, 26, 0.88)' : 'rgba(8, 14, 32, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: isScrolled ? '1px solid rgba(0, 240, 255, 0.28)' : '1px solid rgba(0, 240, 255, 0.14)',
            borderRadius: '9999px',
            boxShadow: isScrolled
              ? '0 12px 30px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 240, 255, 0.18)'
              : '0 8px 24px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Futuristic Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #0070f3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#030712',
                fontWeight: 900,
                fontSize: '0.85rem',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.6)'
              }}
            >
              SG
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '0.04em',
                  color: '#ffffff'
                }}
              >
                SUSHIL GURUNG
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                  lineHeight: 1
                }}
              >
                AI & DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.86rem',
                    fontWeight: 500,
                    color: isActive ? '#00f0ff' : '#94a3b8',
                    background: isActive ? 'rgba(0, 240, 255, 0.12)' : 'transparent',
                    border: isActive ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent',
                    boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.2)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Links & Download CV */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-cyan)';
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#38bdf8';
                e.currentTarget.style.borderColor = '#38bdf8';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <LinkedinIcon size={17} />
            </a>

            <button
              onClick={onOpenCV}
              className="btn-primary"
              style={{
                padding: '0.45rem 1.1rem',
                fontSize: '0.82rem',
                fontWeight: 700
              }}
            >
              <FileText size={15} />
              <span>Download CV</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '5.2rem',
            left: '1rem',
            right: '1rem',
            zIndex: 999,
            background: 'rgba(6, 12, 28, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            borderRadius: '20px',
            padding: '1.25rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 240, 255, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  color: isActive ? 'var(--accent-cyan)' : '#e2e8f0',
                  background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} opacity={0.6} />
              </a>
            );
          })}
        </div>
      )}

      {/* Responsive Media Query Styles */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
