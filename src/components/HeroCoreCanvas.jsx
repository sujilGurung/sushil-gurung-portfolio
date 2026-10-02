import React, { useEffect, useRef } from 'react';

export default function HeroCoreCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const size = 480;
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let angle = 0;
    const cx = size / 2;
    const cy = size / 2;

    // Node points on rotating rings
    const rings = [
      { r: 75, tilt: 0.45, speed: 0.012, count: 6, color: '#00f0ff' },
      { r: 125, tilt: -0.4, speed: -0.009, count: 9, color: '#38bdf8' },
      { r: 175, tilt: 0.55, speed: 0.006, count: 12, color: '#0070f3' }
    ];

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      if (!prefersReducedMotion) {
        angle += 0.01;
      }

      // Draw subtle ambient glow in center
      const coreGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 160);
      coreGlow.addColorStop(0, 'rgba(0, 240, 255, 0.28)');
      coreGlow.addColorStop(0.4, 'rgba(0, 112, 243, 0.12)');
      coreGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.fill();

      // Pulsing central neural nucleus
      const pulse = Math.sin(angle * 3) * 4;
      const nucleusGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 32 + pulse);
      nucleusGrad.addColorStop(0, '#ffffff');
      nucleusGrad.addColorStop(0.3, '#00f0ff');
      nucleusGrad.addColorStop(0.8, '#0052cc');
      nucleusGrad.addColorStop(1, 'rgba(0, 82, 204, 0)');

      ctx.fillStyle = nucleusGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 32 + pulse, 0, Math.PI * 2);
      ctx.fill();

      // Central diamond reticle
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-angle * 0.8);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-22, -22, 44, 44);
      ctx.restore();

      const allNodes = [];

      // Draw rings and calculate 3D nodes
      rings.forEach((ring, rIdx) => {
        const ringAngle = angle * (ring.speed / 0.01);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, ring.tilt);

        // Ring orbit path
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 + rIdx * 0.05})`;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();

        // Calculate node positions
        for (let i = 0; i < ring.count; i++) {
          const theta = ringAngle + (i * Math.PI * 2) / ring.count;
          const nx = cx + ring.r * Math.cos(theta);
          const ny = cy + ring.r * Math.sin(theta) * ring.tilt;
          allNodes.push({ x: nx, y: ny, color: ring.color, z: Math.sin(theta) });
        }
      });

      // Draw neural connections between close nodes
      for (let i = 0; i < allNodes.length; i++) {
        for (let j = i + 1; j < allNodes.length; j++) {
          const dx = allNodes[i].x - allNodes[j].x;
          const dy = allNodes[i].y - allNodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(allNodes[i].x, allNodes[i].y);
            ctx.lineTo(allNodes[j].x, allNodes[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 85) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect node to central nucleus
        const dCenter = Math.hypot(allNodes[i].x - cx, allNodes[i].y - cy);
        if (dCenter < 140) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(allNodes[i].x, allNodes[i].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dCenter / 140) * 0.22})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Draw nodes
      allNodes.forEach((node) => {
        const radius = 2.5 + node.z * 1.2;
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1.2, radius), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

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
        maxWidth: '480px',
        aspectRatio: '1 / 1',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Outer ambient decorative blur halo */}
      <div
        style={{
          position: 'absolute',
          width: '85%',
          height: '85%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(0, 112, 243, 0.08) 50%, transparent 80%)',
          filter: 'blur(30px)',
          zIndex: 1
        }}
      />

      {/* Canvas Neural Core */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 2
        }}
      />

      {/* Floating Glass Label: Python */}
      <div
        className="glass-panel"
        style={{
          position: 'absolute',
          top: '8%',
          left: '2%',
          padding: '0.45rem 0.9rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)',
          color: '#ffffff',
          animation: 'float-subtle 4s ease-in-out infinite',
          animationDelay: '0s',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          background: 'rgba(8, 14, 32, 0.85)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 240, 255, 0.2)'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }}></span>
        <span>Python</span>
      </div>

      {/* Floating Glass Label: AI / ML */}
      <div
        className="glass-panel"
        style={{
          position: 'absolute',
          top: '12%',
          right: '4%',
          padding: '0.45rem 0.95rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)',
          color: '#ffffff',
          animation: 'float-subtle 4.5s ease-in-out infinite',
          animationDelay: '1.2s',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          background: 'rgba(8, 14, 32, 0.85)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.25)'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }}></span>
        <span>AI / ML</span>
      </div>

      {/* Floating Glass Label: React */}
      <div
        className="glass-panel"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '6%',
          padding: '0.45rem 0.9rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)',
          color: '#ffffff',
          animation: 'float-subtle 5s ease-in-out infinite',
          animationDelay: '2.4s',
          border: '1px solid rgba(0, 112, 243, 0.4)',
          background: 'rgba(8, 14, 32, 0.85)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 112, 243, 0.25)'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0070f3', boxShadow: '0 0 8px #0070f3' }}></span>
        <span>React</span>
      </div>

      {/* Floating Glass Label: Data Science */}
      <div
        className="glass-panel"
        style={{
          position: 'absolute',
          bottom: '14%',
          right: '2%',
          padding: '0.45rem 0.95rem',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)',
          color: '#ffffff',
          animation: 'float-subtle 4.2s ease-in-out infinite',
          animationDelay: '1.8s',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          background: 'rgba(8, 14, 32, 0.85)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 240, 255, 0.2)'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }}></span>
        <span>Data Science</span>
      </div>
    </div>
  );
}
