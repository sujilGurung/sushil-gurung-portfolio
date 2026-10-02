import React, { useState } from 'react';
import { Mail, FileText, Send, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenCV }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Honest handling: triggers direct mailto client with pre-filled content
    const mailtoUrl = `mailto:${personalInfo.contacts.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="section-title">Let's Build Something Intelligent.</h2>
          <p className="section-subtitle">
            I'm interested in Artificial Intelligence, Machine Learning, Data Science and software development opportunities.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Outreach & Social Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Primary Email Card */}
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(8, 14, 32, 0.75)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                    Direct Email
                  </h4>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                    Open to internships, junior roles & graduate studies
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1rem'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#ffffff' }}>
                  {personalInfo.contacts.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="btn-outline"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                >
                  {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.88rem' }}
              >
                <Mail size={16} />
                <span>Launch Email Client</span>
              </a>
            </div>

            {/* Quick Links Glass Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
              }}
            >
              {/* GitHub */}
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  color: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <GithubIcon size={20} color="var(--accent-cyan)" />
                  <ExternalLink size={14} opacity={0.6} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>GitHub</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>sujilGurung</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  color: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <LinkedinIcon size={20} color="#38bdf8" />
                  <ExternalLink size={14} opacity={0.6} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>LinkedIn</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>[ADD LINKEDIN URL]</span>
              </a>

              {/* CV Button */}
              <button
                onClick={onOpenCV}
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  color: '#ffffff',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FileText size={20} color="#6366f1" />
                  <ExternalLink size={14} opacity={0.6} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Full Resume</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Preview & PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '24px',
              background: 'rgba(8, 14, 32, 0.75)',
              position: 'relative'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 700 }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
              Submitting launches your native mail client with the formatted inquiry or you can email directly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(0, 240, 255, 0.18)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(0, 240, 255, 0.18)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI / Machine Learning Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(0, 240, 255, 0.18)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your team, project, or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(0, 240, 255, 0.18)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(0, 240, 255, 0.18)')}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem' }}
              >
                <Send size={17} />
                <span>Send Message</span>
              </button>

              {formSubmitted && (
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#6ee7b7',
                    fontSize: '0.82rem',
                    textAlign: 'center'
                  }}
                >
                  Mail client launched! If your mail app did not open, reach out directly at {personalInfo.contacts.email}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
