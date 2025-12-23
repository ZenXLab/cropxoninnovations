import { useEffect, useRef, useState, useCallback } from "react";

interface Platform {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const platforms: Omit<Platform, 'x' | 'y' | 'targetX' | 'targetY' | 'vx' | 'vy'>[] = [
  { id: 'cognix', name: 'Cognix', category: 'Intelligence', radius: 45, color: 'hsl(220, 70%, 50%)' },
  { id: 'opzenix', name: 'OpZeniX', category: 'Operations', radius: 42, color: 'hsl(260, 60%, 55%)' },
  { id: 'qualyx', name: 'Qualyx', category: 'Quality', radius: 38, color: 'hsl(180, 55%, 45%)' },
  { id: 'huminex', name: 'Huminex', category: 'Human Systems', radius: 40, color: 'hsl(340, 60%, 50%)' },
  { id: 'traceflow', name: 'TraceFlow', category: 'Traceability', radius: 44, color: 'hsl(200, 65%, 48%)' },
  { id: 'zenith-core', name: 'Zenith Core', category: 'Foundation', radius: 46, color: 'hsl(280, 55%, 50%)' },
  { id: 'zenith-institute', name: 'Zenith Institute', category: 'Education', radius: 36, color: 'hsl(150, 50%, 45%)' },
  { id: 'originx-labs', name: 'OriginX Labs', category: 'Research', radius: 35, color: 'hsl(30, 70%, 50%)' },
];

const EcosystemCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const platformsRef = useRef<Platform[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize platforms in orbital positions
  const initializePlatforms = useCallback((width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radiusX = Math.min(width * 0.35, 320);
    const radiusY = Math.min(height * 0.32, 240);

    platformsRef.current = platforms.map((p, i) => {
      const angle = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radiusX;
      const y = centerY + Math.sin(angle) * radiusY;
      return {
        ...p,
        x,
        y,
        targetX: x,
        targetY: y,
        vx: 0,
        vy: 0,
      };
    });
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
        initializePlatforms(rect.width, rect.height);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [initializePlatforms]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw connecting lines with glow on interaction
      platformsRef.current.forEach((p1, i) => {
        platformsRef.current.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 280;

          if (distance < maxDistance) {
            const opacity = mouseRef.current.active 
              ? 0.15 * (1 - distance / maxDistance)
              : 0.06 * (1 - distance / maxDistance);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw center glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.04)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw "CROPXON" text in center
      ctx.save();
      ctx.font = "700 clamp(18px, 2.5vw, 28px) 'Space Grotesk', sans-serif";
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '0.15em';
      ctx.fillText('CROPXON', centerX, centerY - 8);
      
      ctx.font = "400 10px 'Inter', sans-serif";
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText('TECHNOLOGY ECOSYSTEM', centerX, centerY + 16);
      ctx.restore();

      // Update and draw platforms
      platformsRef.current.forEach((platform) => {
        // Physics-based movement toward cursor
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - platform.x;
          const dy = mouseRef.current.y - platform.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = (200 - distance) / 200 * 0.8;
            platform.vx += (dx / distance) * force;
            platform.vy += (dy / distance) * force;
          }
        }

        // Spring back to target position
        const springForce = 0.03;
        const damping = 0.9;
        
        platform.vx += (platform.targetX - platform.x) * springForce;
        platform.vy += (platform.targetY - platform.y) * springForce;
        platform.vx *= damping;
        platform.vy *= damping;
        
        platform.x += platform.vx;
        platform.y += platform.vy;

        // Draw platform node
        const isHovered = hoveredPlatform === platform.id;
        const scale = isHovered ? 1.15 : 1;
        const radius = platform.radius * scale;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          platform.x, platform.y, 0,
          platform.x, platform.y, radius * 2
        );
        glowGradient.addColorStop(0, `${platform.color.replace(')', ', 0.3)')}`);
        glowGradient.addColorStop(0.5, `${platform.color.replace(')', ', 0.1)')}`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node background
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered 
          ? `${platform.color.replace(')', ', 0.25)')}`
          : 'rgba(15, 15, 25, 0.8)';
        ctx.fill();
        ctx.strokeStyle = isHovered 
          ? platform.color 
          : `${platform.color.replace(')', ', 0.4)')}`;
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // Platform name
        ctx.save();
        ctx.font = `600 ${isHovered ? '11px' : '10px'} 'Space Grotesk', sans-serif`;
        ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.85)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(platform.name.toUpperCase(), platform.x, platform.y - 4);

        ctx.font = "400 8px 'Inter', sans-serif";
        ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.45)';
        ctx.fillText(platform.category, platform.x, platform.y + 10);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, hoveredPlatform]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseRef.current = { x, y, active: true };

    // Check for hover on platforms
    let found = false;
    for (const platform of platformsRef.current) {
      const dx = x - platform.x;
      const dy = y - platform.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < platform.radius) {
        setHoveredPlatform(platform.id);
        found = true;
        break;
      }
    }
    
    if (!found) {
      setHoveredPlatform(null);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
    setHoveredPlatform(null);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] lg:min-h-[600px]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        style={{ 
          width: dimensions.width, 
          height: dimensions.height 
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      
      {/* Hover tooltip */}
      {hoveredPlatform && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/30 rounded-lg">
          <p className="text-xs text-muted-foreground tracking-wider">
            Click to explore {platforms.find(p => p.id === hoveredPlatform)?.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default EcosystemCanvas;
