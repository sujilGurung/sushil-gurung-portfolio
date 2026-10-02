import React, { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 38 : 88;
    const maxConnectionDistance = isMobile ? 95 : 140;
    const mouseInfluenceDistance = 160;

    let mouse = {
      x: null,
      y: null,
      radius: mouseInfluenceDistance
    };

    const handlePointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handlePointerLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle definition
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Subtle slow drift
        const speed = prefersReducedMotion ? 0.05 : (Math.random() * 0.4 + 0.15);
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.radius = Math.random() * 1.8 + 1;
        this.baseAlpha = Math.random() * 0.4 + 0.35;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        // Color variation between cyan and electric blue
        this.colorType = Math.random() > 0.35 ? 'cyan' : 'blue';
      }

      update() {
        if (!prefersReducedMotion) {
          this.x += this.vx;
          this.y += this.vy;
          this.pulseAngle += this.pulseSpeed;

          // Bounce off edges gently
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;

          // Mouse interaction (subtle attraction/repulsion)
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 10) {
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              this.x -= Math.cos(angle) * force * 1.2;
              this.y -= Math.sin(angle) * force * 1.2;
            }
          }
        }
      }

      draw() {
        const pulse = Math.sin(this.pulseAngle) * 0.2 + 0.8;
        const alpha = this.baseAlpha * pulse;

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        if (this.colorType === 'cyan') {
          ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.shadowColor = 'rgba(0, 112, 243, 0.7)';
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Connect particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to mouse if active
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseInfluenceDistance) {
            const alpha = (1 - dist / mouseInfluenceDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep dark cosmic ambient gradient background layer
      const radialGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        100,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      radialGradient.addColorStop(0, 'rgba(5, 15, 38, 0.45)');
      radialGradient.addColorStop(0.5, 'rgba(3, 7, 18, 0.7)');
      radialGradient.addColorStop(1, 'rgba(2, 4, 10, 0.95)');

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      drawConnections();

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
      aria-hidden="true"
    />
  );
}
