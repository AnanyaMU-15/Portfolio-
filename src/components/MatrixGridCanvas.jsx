import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas:
 * Interactive HTML5 Canvas rendering a subtle cyber-emerald matrix-dot grid.
 * Features:
 * - Subtle ambient harmonic wave motion
 * - Dynamic mouse ripple and 3D perspective shift on hover
 * - High-DPI screen support (Retina crispness)
 * - Proximity glow and connective laser mesh near cursor
 * - Soft radial vignette to keep foreground content readable
 */
const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    };

    window.addEventListener('resize', handleResize);

    // Track mouse with smooth lerp
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dot grid configuration
    const spacing = 38; // px between dots
    const interactionRadius = 180; // px mouse influence radius
    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Deep matte carbon background
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, width, height);

      // Subtle radial ambient spotlight behind center
      const ambientGlow = ctx.createRadialGradient(
        width / 2,
        height * 0.42,
        0,
        width / 2,
        height * 0.42,
        width * 0.55
      );
      ambientGlow.addColorStop(0, 'rgba(16, 185, 129, 0.07)');
      ambientGlow.addColorStop(0.5, 'rgba(5, 150, 105, 0.025)');
      ambientGlow.addColorStop(1, 'rgba(13, 17, 23, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const startX = ((width % spacing) / 2) - spacing;
      const startY = ((height % spacing) / 2) - spacing;

      // Draw grid dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = startX + i * spacing;
          const originY = startY + j * spacing;

          // Ambient wave displacement
          const wave = Math.sin(originX * 0.006 + time) * Math.cos(originY * 0.006 + time * 0.8) * 3;

          // Mouse distance calculation
          const dx = originX - mouse.x;
          const dy = originY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let posX = originX;
          let posY = originY + wave;
          let dotRadius = 1.35;
          let alpha = 0.18;
          let isHovered = false;

          if (dist < interactionRadius) {
            const power = (1 - dist / interactionRadius);
            
            // Perspective shift / ripple displacement
            const ripple = Math.sin(dist * 0.08 - time * 4) * 4 * power;
            const angle = Math.atan2(dy, dx);
            posX += Math.cos(angle) * (power * 16 + ripple);
            posY += Math.sin(angle) * (power * 16 + ripple);

            // Dynamically scale and illuminate dot
            dotRadius = 1.35 + power * 2.8;
            alpha = 0.2 + power * 0.75;
            isHovered = power > 0.4;
          }

          // Draw the matrix dot
          ctx.beginPath();
          ctx.arc(posX, posY, dotRadius, 0, Math.PI * 2);

          if (isHovered) {
            // Crisp neon emerald & bright lime highlight on hover
            const glowGradient = ctx.createRadialGradient(posX, posY, 0, posX, posY, dotRadius * 2);
            glowGradient.addColorStop(0, `rgba(163, 230, 53, ${alpha})`); // Bright lime core
            glowGradient.addColorStop(1, `rgba(16, 185, 129, ${alpha * 0.5})`); // Emerald halo
            ctx.fillStyle = glowGradient;
            ctx.shadowColor = '#10b981';
            ctx.shadowBlur = 8;
          } else {
            // Subtle carbon-emerald default
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill();

          // Connective micro-links near mouse cursor
          if (dist < interactionRadius * 0.65) {
            const lineAlpha = (1 - dist / (interactionRadius * 0.65)) * 0.25;
            ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(posX, posY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Reset shadow
      ctx.shadowBlur = 0;

      // Soft vignette mask around edges
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.35,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      vignette.addColorStop(0, 'rgba(13, 17, 23, 0)');
      vignette.addColorStop(1, 'rgba(13, 17, 23, 0.75)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0 select-none block w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
};

export default MatrixGridCanvas;

