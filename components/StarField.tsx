
import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Parallax layers for depth
    const layers = [
      { count: 140, size: 0.7, speed: 0.04, opacity: 0.3 },
      { count: 90, size: 1.1, speed: 0.08, opacity: 0.6 },
      { count: 40, size: 1.8, speed: 0.15, opacity: 0.8 },
    ];

    let stars: any[] = [];
    let clouds: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      stars = [];
      layers.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: layer.size * (Math.random() * 0.5 + 0.5),
            speed: layer.speed,
            baseOpacity: layer.opacity,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.01 + Math.random() * 0.02
          });
        }
      });

      // Atmospheric Nebula Clouds
      clouds = [];
      const colors = ['rgba(20, 184, 166, ', 'rgba(99, 102, 241, ', 'rgba(30, 58, 138, '];
      for (let i = 0; i < 6; i++) {
        clouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 400 + Math.random() * 500,
          color: colors[i % colors.length],
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: 0.02 + Math.random() * 0.04
        });
      }
    };

    const draw = () => {
      // Deep space black
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw shifting gas clouds
      ctx.globalCompositeOperation = 'screen';
      clouds.forEach(c => {
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius);
        grad.addColorStop(0, `${c.color}${c.opacity})`);
        grad.addColorStop(1, `${c.color}0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fill();

        c.x += c.vx;
        c.y += c.vy;
        if (c.x < -c.radius) c.x = canvas.width + c.radius;
        if (c.x > canvas.width + c.radius) c.x = -c.radius;
        if (c.y < -c.radius) c.y = canvas.height + c.radius;
        // Fix: Changed 'n.y' to 'c.y' to correctly reference the current cloud object
        if (c.y > canvas.height + c.radius) c.y = -c.radius;
      });

      // Draw stars with twinkle
      ctx.globalCompositeOperation = 'lighter';
      stars.forEach(s => {
        s.pulse += s.pulseSpeed;
        const o = s.baseOpacity * (0.4 + Math.abs(Math.sin(s.pulse)) * 0.6);
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${o})`;
        ctx.fill();

        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

export default StarField;
