import React, { useState } from 'react';
import { networkNodes, networkConnections } from '../data/portfolioData';
import { Network, Sparkles, ArrowRight, Info } from 'lucide-react';

export default function AINetwork() {
  const [activeNodeId, setActiveNodeId] = useState('ml');

  const activeNode = networkNodes.find((n) => n.id === activeNodeId) || networkNodes[0];

  // Helper to determine if an edge is connected to activeNodeId
  const isConnectionActive = (conn) => {
    return conn.from === activeNodeId || conn.to === activeNodeId;
  };

  // Helper to determine if a node is connected to activeNodeId
  const isNodeConnected = (nodeId) => {
    if (nodeId === activeNodeId) return true;
    return networkConnections.some(
      (c) => (c.from === activeNodeId && c.to === nodeId) || (c.to === activeNodeId && c.from === nodeId)
    );
  };

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Interactive Architecture Graph</span>
          </div>
          <h2 className="section-title">Connecting Code, Data & Intelligence</h2>
          <p className="section-subtitle">
            Hover over any node in the neural graph to explore how programming languages, data pipelines, and frontend interfaces synthesize into real-world solutions.
          </p>
        </div>

        {/* Main Network Graph Glass Arena */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(1rem, 3vw, 2.5rem)',
            borderRadius: '28px',
            background: 'rgba(6, 12, 28, 0.85)',
            position: 'relative',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(0, 240, 255, 0.12)'
          }}
        >
          {/* Top Network Status Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
              <Network size={18} />
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                NEURAL INTEGRATION TOPOLOGY
              </span>
            </div>
            <div style={{ fontSize: '0.76rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              Active Node: <span style={{ color: '#00f0ff', fontWeight: 700 }}>{activeNode.label}</span>
            </div>
          </div>

          {/* Interactive SVG Canvas */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '380px',
              borderRadius: '16px',
              background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.05) 0%, rgba(3, 7, 18, 0.8) 75%)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              overflow: 'hidden'
            }}
          >
            <svg
              viewBox="0 0 1000 480"
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              <defs>
                {/* Neon Glow Filter */}
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="active-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#0070f3" />
                </linearGradient>
              </defs>

              {/* Render Connections */}
              {networkConnections.map((conn, idx) => {
                const source = networkNodes.find((n) => n.id === conn.from);
                const target = networkNodes.find((n) => n.id === conn.to);
                if (!source || !target) return null;

                const x1 = source.x * 10;
                const y1 = source.y * 4.8;
                const x2 = target.x * 10;
                const y2 = target.y * 4.8;
                const isActive = isConnectionActive(conn);

                return (
                  <g key={idx}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? 'url(#active-line-grad)' : 'rgba(0, 240, 255, 0.15)'}
                      strokeWidth={isActive ? 2.5 : 1}
                      strokeDasharray={isActive ? '6 4' : 'none'}
                      filter={isActive ? 'url(#neon-glow)' : 'none'}
                      style={{
                        transition: 'stroke 0.3s, stroke-width 0.3s',
                        animation: isActive ? 'spin-slow 20s linear infinite' : 'none'
                      }}
                    />
                    {isActive && (
                      <circle
                        r="3"
                        fill="#ffffff"
                        filter="url(#neon-glow)"
                      >
                        <animateMotion
                          path={`M ${x1} ${y1} L ${x2} ${y2}`}
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Render Nodes */}
              {networkNodes.map((node) => {
                const cx = node.x * 10;
                const cy = node.y * 4.8;
                const isSelected = activeNodeId === node.id;
                const isConnected = isNodeConnected(node.id);
                const isCore = node.category === 'core';

                return (
                  <g
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Outer Glow Halo for Selected Node */}
                    {isSelected && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="34"
                        fill="rgba(0, 240, 255, 0.2)"
                        filter="url(#neon-glow)"
                      />
                    )}

                    {/* Node Core Body */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 20 : isConnected ? 16 : 14}
                      fill={
                        isSelected
                          ? '#00f0ff'
                          : isConnected
                          ? isCore ? '#0070f3' : '#6366f1'
                          : 'rgba(8, 16, 36, 0.9)'
                      }
                      stroke={isSelected ? '#ffffff' : isConnected ? '#00f0ff' : 'rgba(0, 240, 255, 0.3)'}
                      strokeWidth={isSelected ? 3 : 1.5}
                      filter={isSelected || isConnected ? 'url(#neon-glow)' : 'none'}
                      style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />

                    {/* Node Inner Ring Dot */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill={isSelected ? '#030712' : '#ffffff'}
                    />

                    {/* Node Label Text */}
                    <text
                      x={cx}
                      y={cy + (isSelected ? 36 : 30)}
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : isConnected ? '#a5f3fc' : '#94a3b8'}
                      fontSize={isSelected ? '14' : '12'}
                      fontWeight={isSelected ? '700' : '500'}
                      fontFamily="Space Grotesk, sans-serif"
                      style={{ transition: 'all 0.3s' }}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Node Narrative Description Box */}
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem 1.75rem',
              borderRadius: '16px',
              background: 'rgba(10, 18, 42, 0.75)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '750px' }}>
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
                  color: 'var(--accent-cyan)',
                  flexShrink: 0
                }}
              >
                <Info size={20} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>
                    {activeNode.label}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      textTransform: 'uppercase'
                    }}
                  >
                    ({activeNode.category === 'core' ? 'AI / Data Pipeline' : 'Application Layer'})
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: '0.25rem 0 0 0', lineHeight: 1.5 }}>
                  {activeNode.desc}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {networkNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setActiveNodeId(n.id)}
                  style={{
                    padding: '0.3rem 0.7rem',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    color: activeNodeId === n.id ? '#030712' : '#94a3b8',
                    background: activeNodeId === n.id ? '#00f0ff' : 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    fontWeight: 600,
                    transition: 'all 0.2s'
                  }}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
