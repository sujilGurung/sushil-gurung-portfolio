import React, { useEffect, useRef } from 'react';
import { Activity, Database, ShieldAlert, Cpu } from 'lucide-react';

export default function CancerVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const render = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      if (!prefersReducedMotion) frame += 0.025;

      // Draw futuristic medical data grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
      ctx.lineWidth = 1;
      const step = 28;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw medical biomarker waveforms (simulated synthetic signals)
      const drawWave = (color, offset, speed, amp, baseHeight) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        for (let x = 0; x < w; x += 4) {
          const y = baseHeight + Math.sin(x * 0.03 + frame * speed + offset) * amp
            + Math.cos(x * 0.015 - frame * 0.5) * (amp * 0.4);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      };

      drawWave('rgba(0, 240, 255, 0.85)', 0, 1.2, 22, h * 0.45);
      drawWave('rgba(56, 189, 248, 0.65)', 2, 0.8, 16, h * 0.55);

      // Scanning vertical beam
      const scanX = ((Math.sin(frame * 0.8) + 1) / 2) * w;
      const scanGrad = ctx.createLinearGradient(scanX - 30, 0, scanX + 30, 0);
      scanGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.25)');
      scanGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(scanX - 30, 0, 60, h);

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(scanX, 0);
      ctx.lineTo(scanX, h);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '280px',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #050b1a 0%, #030712 100%)',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.25rem'
      }}
    >
      {/* Background Animated Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />

      {/* Top Telemetry Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(5, 11, 26, 0.75)',
          backdropFilter: 'blur(8px)',
          padding: '0.5rem 0.9rem',
          borderRadius: '10px',
          border: '1px solid rgba(0, 240, 255, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={16} color="#00f0ff" />
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#ffffff', letterSpacing: '0.04em' }}>
            MEDICAL ML EXPLORATION MATRIX
          </span>
        </div>
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'var(--font-mono)',
            padding: '0.2rem 0.6rem',
            borderRadius: '4px',
            background: 'rgba(0, 240, 255, 0.1)',
            color: 'var(--accent-cyan)',
            border: '1px solid rgba(0, 240, 255, 0.25)'
          }}
        >
          ACADEMIC PROJECT
        </span>
      </div>

      {/* Middle Holographic Feature Badges */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            background: 'rgba(8, 16, 36, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            padding: '0.5rem 0.85rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
          }}
        >
          <Database size={15} color="#38bdf8" />
          <span style={{ fontSize: '0.76rem', color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>
            Dataset Preprocessing
          </span>
        </div>

        <div
          style={{
            background: 'rgba(8, 16, 36, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            padding: '0.5rem 0.85rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
          }}
        >
          <Cpu size={15} color="#00f0ff" />
          <span style={{ fontSize: '0.76rem', color: '#e2e8f0', fontFamily: 'var(--font-mono)' }}>
            Supervised Classification Pipeline
          </span>
        </div>
      </div>

      {/* Bottom Mandatory Ethical & Academic Notice */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(6, 12, 28, 0.85)',
          padding: '0.45rem 0.8rem',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <ShieldAlert size={14} color="#38bdf8" />
        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
          Academic coursework research. Strictly not designed or validated as a clinical diagnostic tool.
        </span>
      </div>
    </div>
  );
}
