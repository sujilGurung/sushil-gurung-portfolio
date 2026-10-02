import React from 'react';
import { Mountain, Compass, Calendar, ArrowUpRight, MapPin, Layers } from 'lucide-react';

export default function EverestVisual() {
  return (
    <div
      style={{
        background: 'rgba(6, 12, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 240, 255, 0.1)'
      }}
    >
      {/* Browser Bar */}
      <div
        style={{
          background: 'rgba(10, 18, 38, 0.85)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.6rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
        </div>
        <div
          style={{
            flex: 1,
            maxWidth: '340px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.04)',
            borderRadius: '6px',
            padding: '0.2rem 0.6rem',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: '#94a3b8',
            textAlign: 'center'
          }}
        >
          everest-trekking.staging/annapurna-circuit
        </div>
        <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>INTERNSHIP</span>
      </div>

      {/* App Interface Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Banner with Route and Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            paddingBottom: '0.75rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontSize: '0.75rem', fontWeight: 600 }}>
              <Mountain size={14} />
              <span>Himalayan Expedition Series</span>
            </div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0.2rem 0 0 0' }}>
              Annapurna & Thorong La Pass
            </h4>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.76rem', color: '#94a3b8' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Compass size={13} color="#00f0ff" /> 14 Days
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Layers size={13} color="#38bdf8" /> 5,416m Max Alt
            </span>
          </div>
        </div>

        {/* Altitude Profile Graph (SVG) & Itinerary Breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'center' }}>
          {/* Simulated Altitude Vector Graph */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '10px',
              padding: '0.85rem'
            }}
          >
            <div style={{ fontSize: '0.72rem', color: '#7dd3fc', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              ALTITUDE GRADIENT (API DATA)
            </div>
            <svg viewBox="0 0 200 60" style={{ width: '100%', height: '55px', overflow: 'visible' }}>
              <path
                d="M 0,50 Q 30,42 60,35 T 120,20 T 160,8 L 190,45"
                fill="none"
                stroke="#00f0ff"
                strokeWidth="2"
              />
              <path
                d="M 0,50 Q 30,42 60,35 T 120,20 T 160,8 L 190,45 L 190,55 L 0,55 Z"
                fill="rgba(0, 240, 255, 0.12)"
              />
              <circle cx="160" cy="8" r="3" fill="#ffffff" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748b', marginTop: '0.2rem' }}>
              <span>Besisahar (760m)</span>
              <span>Pass (5,416m)</span>
              <span>Muktinath (3,800m)</span>
            </div>
          </div>

          {/* Itinerary Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              { day: 'Day 01–03', route: 'Drive to Dharapani · Acclimatization' },
              { day: 'Day 04–07', route: 'Manang Valley · Alpine Flora & Fauna' },
              { day: 'Day 08–10', route: 'Thorong Phedi · High Pass Crossing' }
            ].map((d, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.5rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  color: '#cbd5e1'
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{d.day}</span>
                <span style={{ color: '#94a3b8' }}>{d.route}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
