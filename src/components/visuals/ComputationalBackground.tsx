import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface FlowLine {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  opacity: number;
}

const ComputationalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  const createParticles = useCallback((width: number, height: number): Particle[] => {
    const particles: Particle[] = [];
    const count = Math.floor((width * height) / 18000);
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    return particles;
  }, []);

  const createFlowLines = useCallback((width: number, height: number): FlowLine[] => {
    const lines: FlowLine[] = [];
    const lineCount = 8;
    
    for (let i = 0; i < lineCount; i++) {
      const points: { x: number; y: number }[] = [];
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      
      let x = startX;
      let y = startY;
      
      for (let j = 0; j < 6; j++) {
        points.push({ x, y });
        x += (Math.random() - 0.5) * 200 + 100;
        y += (Math.random() - 0.3) * 150;
      }
      
      lines.push({
        points,
        progress: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }
    return lines;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let flowLines: FlowLine[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = createParticles(canvas.width, canvas.height);
      flowLines = createFlowLines(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const drawGradientBackground = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );
      gradient.addColorStop(0, "hsl(222, 30%, 6%)");
      gradient.addColorStop(0.5, "hsl(222, 30%, 4%)");
      gradient.addColorStop(1, "hsl(222, 30%, 2%)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawFlowLines = () => {
      flowLines.forEach((line) => {
        line.progress += line.speed;
        if (line.progress > 1) line.progress = 0;

        const { points, progress, opacity } = line;
        
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        
        const gradient = ctx.createLinearGradient(
          points[0].x,
          points[0].y,
          points[points.length - 1].x,
          points[points.length - 1].y
        );
        
        const glowPos = progress;
        gradient.addColorStop(Math.max(0, glowPos - 0.1), `hsla(234, 55%, 50%, 0)`);
        gradient.addColorStop(glowPos, `hsla(234, 55%, 60%, ${opacity * 2})`);
        gradient.addColorStop(Math.min(1, glowPos + 0.1), `hsla(234, 55%, 50%, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };

    const drawParticles = () => {
      const mouseInfluence = 150;
      const scrollOffset = scrollRef.current * 0.1;

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy + scrollOffset * 0.01;

        // Boundary check
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseInfluence) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Pulsing effect
        const pulse = Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = particle.opacity * (0.5 + pulse * 0.5);
        const currentRadius = particle.radius * (0.8 + pulse * 0.4);

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentRadius * 4
        );
        gradient.addColorStop(0, `hsla(234, 55%, 65%, ${currentOpacity})`);
        gradient.addColorStop(0.5, `hsla(234, 55%, 55%, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `hsla(234, 55%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(234, 55%, 70%, ${currentOpacity * 1.5})`;
        ctx.fill();
      });
    };

    const drawConnections = () => {
      const maxDist = 120;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.12;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(234, 55%, 55%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawGridOverlay = () => {
      const gridSize = 60;
      const gridOpacity = 0.03;
      
      ctx.strokeStyle = `hsla(234, 30%, 50%, ${gridOpacity})`;
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const draw = () => {
      time++;
      
      drawGradientBackground();
      drawGridOverlay();
      drawFlowLines();
      drawConnections();
      drawParticles();

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [createParticles, createFlowLines]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, hsl(222, 30%, 4%) 100%)"
        }}
      />
    </>
  );
};

export default ComputationalBackground;