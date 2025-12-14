import { useEffect, useRef } from "react";

const AnimatedGradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const animate = () => {
      time += 0.002;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Animated gradient orbs
      const orbs = [
        {
          x: width * 0.2 + Math.sin(time * 0.7) * width * 0.1,
          y: height * 0.3 + Math.cos(time * 0.5) * height * 0.1,
          radius: width * 0.4,
          color: "rgba(59, 130, 246, 0.08)", // Primary blue
        },
        {
          x: width * 0.8 + Math.cos(time * 0.6) * width * 0.1,
          y: height * 0.7 + Math.sin(time * 0.4) * height * 0.1,
          radius: width * 0.35,
          color: "rgba(99, 102, 241, 0.06)", // Indigo
        },
        {
          x: width * 0.5 + Math.sin(time * 0.8) * width * 0.15,
          y: height * 0.5 + Math.cos(time * 0.3) * height * 0.15,
          radius: width * 0.3,
          color: "rgba(139, 92, 246, 0.05)", // Violet
        },
      ];

      orbs.forEach((orb) => {
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Subtle noise overlay effect using random dots
      ctx.fillStyle = "rgba(255, 255, 255, 0.003)";
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
};

export default AnimatedGradientBackground;
