import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
}

const SubtleMeshBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: Point[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initPoints();
    };

    const initPoints = () => {
      points = [];
      const gridSize = 120;
      const cols = Math.ceil(window.innerWidth / gridSize) + 2;
      const rows = Math.ceil(window.innerHeight / gridSize) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize - gridSize / 2;
          const y = j * gridSize - gridSize / 2;
          points.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            originX: x,
            originY: y,
          });
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Update points with very slow organic movement
      points.forEach((point) => {
        point.x += point.vx * 0.5;
        point.y += point.vy * 0.5;

        // Soft return to origin
        const dx = point.originX - point.x;
        const dy = point.originY - point.y;
        point.vx += dx * 0.0002;
        point.vy += dy * 0.0002;

        // Damping
        point.vx *= 0.995;
        point.vy *= 0.995;
      });

      // Draw connections
      ctx.strokeStyle = "#2d2d3a";
      ctx.lineWidth = 0.5;

      points.forEach((point, i) => {
        points.slice(i + 1).forEach((other) => {
          const dist = Math.hypot(point.x - other.x, point.y - other.y);
          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.3;
            ctx.strokeStyle = `rgba(45, 45, 58, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw points
      points.forEach((point) => {
        ctx.fillStyle = "rgba(63, 63, 74, 0.4)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

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
      style={{ opacity: 0.6 }}
    />
  );
};

export default SubtleMeshBackground;
