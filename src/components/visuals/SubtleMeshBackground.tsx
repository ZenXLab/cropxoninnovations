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

    // Get theme colors from CSS variables
    const getComputedColor = (variable: string) => {
      const root = document.documentElement;
      const style = getComputedStyle(root);
      return style.getPropertyValue(variable).trim();
    };

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
      const gridSize = 100;
      const cols = Math.ceil(window.innerWidth / gridSize) + 2;
      const rows = Math.ceil(window.innerHeight / gridSize) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize - gridSize / 2;
          const y = j * gridSize - gridSize / 2;
          points.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.12,
            vy: (Math.random() - 0.5) * 0.12,
            originX: x,
            originY: y,
          });
        }
      }
    };

    const animate = () => {
      // Get background color from theme
      const bgColor = getComputedColor("--background");
      const isDark = document.documentElement.classList.contains("dark") || 
                     !document.documentElement.classList.contains("light");
      
      // Clear with background color
      ctx.fillStyle = `hsl(${bgColor})`;
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

      // Colors based on theme
      const lineColor = isDark ? "rgba(55, 55, 70, 0.4)" : "rgba(180, 180, 195, 0.4)";
      const pointColor = isDark ? "rgba(75, 75, 90, 0.5)" : "rgba(160, 160, 175, 0.5)";

      // Draw connections
      ctx.lineWidth = 0.5;

      points.forEach((point, i) => {
        points.slice(i + 1).forEach((other) => {
          const dist = Math.hypot(point.x - other.x, point.y - other.y);
          if (dist < 160) {
            const opacity = (1 - dist / 160) * 0.25;
            ctx.strokeStyle = isDark 
              ? `rgba(55, 55, 70, ${opacity})` 
              : `rgba(180, 180, 195, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw points
      points.forEach((point) => {
        ctx.fillStyle = pointColor;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      // Theme changed, colors will update on next frame
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
};

export default SubtleMeshBackground;
