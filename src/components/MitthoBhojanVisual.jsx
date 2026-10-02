import React, { useState } from 'react';
import { ShoppingBag, MapPin, Bot, CreditCard, Star, Search, Clock, UtensilsCrossed } from 'lucide-react';

export default function MitthoBhojanVisual() {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div style={{ position: 'relative', width: '100%', padding: '1rem 0' }}>
      {/* Floating Technology Labels Around the Mockup */}
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          right: '5%',
          zIndex: 4,
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}
      >
        <span className="tech-badge" style={{ background: 'rgba(0, 240, 255, 0.15)', borderColor: '#00f0ff', color: '#ffffff' }}>
          React + Vite
        </span>
        <span className="tech-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: '#38bdf8', color: '#ffffff' }}>
          Gemini / RAG
        </span>
        <span className="tech-badge" style={{ background: 'rgba(99, 102, 241, 0.15)', borderColor: '#6366f1', color: '#ffffff' }}>
          PHP + MySQL
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-12px',
          left: '5%',
          zIndex: 4,
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}
      >
        <span className="tech-badge" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10b981', color: '#ffffff' }}>
          Leaflet Maps
        </span>
        <span className="tech-badge" style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: '#a855f7', color: '#ffffff' }}>
          Khalti Payments
        </span>
        <span className="tech-badge" style={{ background: 'rgba(234, 179, 8, 0.15)', borderColor: '#eab308', color: '#ffffff' }}>
          Restaurant-Owner Panel
        </span>
      </div>

      {/* Browser Mockup Window */}
      <div
        style={{
          background: 'rgba(6, 12, 26, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 240, 255, 0.12)'
        }}
      >
        {/* Browser Top Navigation Bar */}
        <div
          style={{
            background: 'rgba(10, 18, 38, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '0.65rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          {/* Traffic Light Window Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
          </div>

          {/* Browser Address Bar */}
          <div
            style={{
              flex: 1,
              maxWidth: '380px',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              padding: '0.2rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              color: '#94a3b8'
            }}
          >
            <span style={{ color: '#22c55e' }}>https://</span>
            <span style={{ color: '#f1f5f9' }}>mittho-bhojan.app/explore</span>
          </div>

          <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            FYP CAPSTONE
          </div>
        </div>

        {/* In-App Navigation Bar */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(8, 15, 34, 0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #00f0ff, #0070f3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#030712'
              }}
            >
              <UtensilsCrossed size={14} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
              Mittho Bhojan
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            <span style={{ color: '#00f0ff', fontWeight: 600 }}>Explore</span>
            <span>Pre-Order</span>
            <span>Restaurant-Owner Panel</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                padding: '0.25rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                color: '#00f0ff'
              }}
            >
              <ShoppingBag size={13} />
              <span>Cart (3)</span>
            </div>
          </div>
        </div>

        {/* In-App Content Grid */}
        <div
          style={{
            padding: '1.25rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {/* Card 1: Restaurant Discovery & Leaflet Map Pin */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
          >
            {/* Map Preview Simulation */}
            <div
              style={{
                height: '110px',
                borderRadius: '8px',
                background: 'radial-gradient(circle at 60% 40%, rgba(0, 240, 255, 0.15), rgba(5, 11, 26, 0.95)), #081122',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Grid Lines representing map streets */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'linear-gradient(rgba(0,240,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(8, 16, 36, 0.85)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  fontSize: '0.72rem',
                  color: '#ffffff'
                }}
              >
                <MapPin size={12} color="#00f0ff" />
                <span>Leaflet Geolocation: Pokhara</span>
              </div>
            </div>

            {/* Restaurant Info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#ffffff' }}>Himalayan Thakali Kitchen</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.75rem', color: '#fbbf24' }}>
                  <Star size={12} fill="#fbbf24" /> 4.9
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={11} /> 20-30 min
                </span>
                <span>Pre-Order Available</span>
              </div>
            </div>
          </div>

          {/* Card 2: Food Items & Customer Ordering */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Menu & Ordering
            </div>

            {[
              { name: 'Special Thakali Thali', price: 'NPR 550', badge: 'Popular' },
              { name: 'Steamed Buff Momo (10 pcs)', price: 'NPR 220', badge: 'Pre-Order' },
              { name: 'Artisan Woodfire Pizza', price: 'NPR 750', badge: 'Fast Prep' }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.45rem 0.6rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#f1f5f9' }}>{item.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{item.price}</div>
                </div>
                <button
                  style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: 'rgba(0, 240, 255, 0.12)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    color: '#ffffff',
                    fontSize: '0.7rem',
                    fontWeight: 600
                  }}
                >
                  + Add
                </button>
              </div>
            ))}
          </div>

          {/* Card 3: AI Chatbot (RAG) & Khalti Payments */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem'
            }}
          >
            {/* AI Assistant Chat Preview */}
            <div
              style={{
                background: 'rgba(8, 16, 38, 0.75)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: '8px',
                padding: '0.65rem',
                fontSize: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem', fontWeight: 600 }}>
                <Bot size={13} />
                <span>Mittho AI Assistant (RAG Active)</span>
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '0.72rem', fontStyle: 'italic', marginBottom: '0.3rem' }}>
                "Recommend a meal under NPR 600 with quick delivery in Lakeside?"
              </div>
              <div style={{ color: '#38bdf8', fontSize: '0.72rem' }}>
                → Suggested: Special Thakali Set (NPR 550) ready in 20 mins.
              </div>
            </div>

            {/* Payment & Checkout preview */}
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CreditCard size={14} color="#a855f7" />
                <span style={{ fontSize: '0.74rem', color: '#ffffff', fontWeight: 600 }}>Khalti Gateway</span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#a855f7' }}>
                Instant Pay
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
