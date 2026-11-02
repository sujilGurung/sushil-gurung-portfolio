import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, Copy, Check, ExternalLink, Loader2, AlertTriangle, Download, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_FORM = { from_name: '', from_email: '', subject: '', message: '' };

const getEmailJSCredentials = () => {
  const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim().replace(/^["']|["']$/g, '');
  const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim().replace(/^["']|["']$/g, '');
  const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim().replace(/^["']|["']$/g, '');

  const isConfigured = Boolean(
    serviceId &&
    templateId &&
    publicKey &&
    !serviceId.includes('your_service_id') &&
    !templateId.includes('your_template_id') &&
    !publicKey.includes('your_public_key')
  );

  return { serviceId, templateId, publicKey, isConfigured };
};

export default function Contact() {
  const [headerRef, headerVisible] = useScrollReveal();

  const formRef = useRef(null);
  const honeypotRef = useRef(null);

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [_submitCount, setSubmitCount] = useState(0);

  const validate = () => {
    const e = {};
    if (!form.from_name.trim())  e.from_name  = 'Name is required.';
    if (!form.from_email.trim()) e.from_email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) e.from_email = 'Enter a valid email address.';
    if (!form.message.trim())    e.message    = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (status === 'error') setStatus('idle');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getMailtoUrl = () => {
    const subject = form.subject || `Inquiry from ${form.from_name || 'Visitor'}`;
    const body = `Name: ${form.from_name}\nEmail: ${form.from_email}\n\nMessage:\n${form.message}`;
    return `mailto:${personalInfo.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (honeypotRef.current?.value) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prevent duplicate rapid submissions
    if (status === 'sending') return;

    const { serviceId, templateId, publicKey, isConfigured } = getEmailJSCredentials();

    // Check if EmailJS keys are configured
    if (!isConfigured) {
      console.warn(
        'EmailJS credentials missing or placeholder. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env, then restart Vite.'
      );
      setErrorMessage(
        'EmailJS credentials not detected. If you just added them to .env, please restart your dev server (Ctrl+C then npm run dev). Alternatively, click below to send via your email client.'
      );
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name:  form.from_name,
          from_email: form.from_email,
          subject:    form.subject || `Portfolio enquiry from ${form.from_name}`,
          message:    form.message,
          to_email:   personalInfo.contacts.email,
          reply_to:   form.from_email,
        },
        publicKey
      );

      setStatus('success');
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitCount((c) => c + 1);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMessage(
        typeof err === 'string'
          ? err
          : err?.text || err?.message || 'Failed to send message via EmailJS. Please try again or email directly.'
      );
      setStatus('error');
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '0.82rem 1rem',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${errors[field] ? 'rgba(239,68,68,0.5)' : 'rgba(0,240,255,0.18)'}`,
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  });

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`section-header reveal reveal-fade-up${headerVisible ? ' reveal-visible' : ''}`}
        >
          <div className="section-tag">
            <span className="dot" />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm open to internships, junior roles, freelance projects and graduate study opportunities.
          </p>
        </div>

        {/* Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card */}
            <div
              className="glass-panel"
              style={{ padding: '1.75rem', borderRadius: '20px', background: 'rgba(8,14,32,0.75)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '40px', height: '40px', borderRadius: '11px',
                    background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)',
                  }}
                >
                  <Mail size={19} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>Direct Email</h4>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8' }}>Fastest way to reach me</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.75rem 1rem', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  marginBottom: '0.85rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff', wordBreak: 'break-all' }}>
                  {personalInfo.contacts.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="btn-outline"
                  style={{ padding: '0.3rem 0.65rem', fontSize: '0.76rem', flexShrink: 0, marginLeft: '0.5rem' }}
                >
                  {copiedEmail ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="btn-primary"
                style={{ width: '100%', padding: '0.7rem', fontSize: '0.88rem' }}
              >
                <Mail size={15} />
                <span>Open Email Client</span>
              </a>
            </div>

            {/* Social Links Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* GitHub */}
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{ padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#ffffff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <GithubIcon size={19} color="var(--accent-cyan)" />
                  <ExternalLink size={13} opacity={0.5} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.93rem' }}>GitHub</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>sujilGurung</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{ padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#ffffff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <LinkedinIcon size={19} color="#38bdf8" />
                  <ExternalLink size={13} opacity={0.5} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.93rem' }}>LinkedIn</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>sujil-gurung</span>
              </a>

              {/* View CV */}
              <a
                href={personalInfo.contacts.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{ padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#ffffff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FileText size={19} color="#6366f1" />
                  <ExternalLink size={13} opacity={0.5} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.93rem' }}>View CV</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>Opens in new tab</span>
              </a>

              {/* Download CV */}
              <a
                href={personalInfo.contacts.cvUrl}
                download="Sushil_Gurung_CV.pdf"
                className="glass-panel"
                style={{ padding: '1.25rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#ffffff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Download size={19} color="#14b8a6" />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.93rem' }}>Download CV</span>
                <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>PDF · Save locally</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="glass-panel"
            style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', borderRadius: '24px', background: 'rgba(8,14,32,0.75)' }}
          >
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem', fontWeight: 700 }}>
              Send Me a Message
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#94a3b8', marginBottom: '1.75rem' }}>
              Fill in the form and I'll get back to you as soon as possible.
            </p>

            {status === 'success' ? (
              <div
                style={{
                  padding: '2rem', borderRadius: '14px', textAlign: 'center',
                  background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.35)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                <h4 style={{ color: '#6ee7b7', marginBottom: '0.5rem', fontWeight: 700 }}>Message Sent!</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Thank you for reaching out. I'll reply to <strong style={{ color: '#ffffff' }}>{personalInfo.contacts.email}</strong> as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline"
                  style={{ marginTop: '1.25rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Honeypot — hidden from real users */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="_honey"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    value={form.from_name}
                    onChange={handleChange}
                    style={inputStyle('from_name')}
                    onFocus={(e) => { if (!errors.from_name) e.target.style.borderColor = 'var(--accent-cyan)'; }}
                    onBlur={(e) => { if (!errors.from_name) e.target.style.borderColor = 'rgba(0,240,255,0.18)'; }}
                  />
                  {errors.from_name && <span style={{ fontSize: '0.76rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>{errors.from_name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="your@email.com"
                    value={form.from_email}
                    onChange={handleChange}
                    style={inputStyle('from_email')}
                    onFocus={(e) => { if (!errors.from_email) e.target.style.borderColor = 'var(--accent-cyan)'; }}
                    onBlur={(e) => { if (!errors.from_email) e.target.style.borderColor = 'rgba(0,240,255,0.18)'; }}
                  />
                  {errors.from_email && <span style={{ fontSize: '0.76rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>{errors.from_email}</span>}
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Internship opportunity"
                    value={form.subject}
                    onChange={handleChange}
                    style={inputStyle('subject')}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,240,255,0.18)')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle('message'), resize: 'vertical' }}
                    onFocus={(e) => { if (!errors.message) e.target.style.borderColor = 'var(--accent-cyan)'; }}
                    onBlur={(e) => { if (!errors.message) e.target.style.borderColor = 'rgba(0,240,255,0.18)'; }}
                  />
                  {errors.message && <span style={{ fontSize: '0.76rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                </div>

                {/* Error Banner & Direct Fallback */}
                {status === 'error' && (
                  <div
                    style={{
                      display: 'flex', flexDirection: 'column', gap: '0.65rem',
                      padding: '0.9rem 1rem', borderRadius: '10px',
                      background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.35)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <AlertTriangle size={16} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div style={{ fontSize: '0.83rem', color: '#f87171', lineHeight: 1.5 }}>
                        {errorMessage || 'Failed to send message.'}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.2rem' }}>
                      <a
                        href={getMailtoUrl()}
                        className="btn-outline"
                        style={{
                          padding: '0.45rem 0.85rem',
                          fontSize: '0.78rem',
                          color: '#ffffff',
                          borderColor: 'rgba(239,68,68,0.4)',
                          background: 'rgba(239,68,68,0.15)',
                        }}
                      >
                        <Mail size={13} />
                        <span>Send via Default Mail Client</span>
                      </a>
                      <a
                        href={`mailto:${personalInfo.contacts.email}`}
                        style={{
                          fontSize: '0.78rem',
                          color: '#cbd5e1',
                          textDecoration: 'underline',
                          alignSelf: 'center',
                          marginLeft: '0.3rem',
                        }}
                      >
                        or email directly
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'sending'}
                  style={{
                    width: '100%', padding: '0.9rem', marginTop: '0.25rem',
                    opacity: status === 'sending' ? 0.75 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={17} style={{ animation: 'spin-slow 1s linear infinite' }} />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p style={{ fontSize: '0.74rem', color: '#475569', textAlign: 'center', marginTop: '0.25rem' }}>
                  Your message is sent directly to my inbox via EmailJS. No data is stored by this website.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
