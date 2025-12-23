import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface PlatformData {
  id: string;
  name: string;
  category: string;
  radius: number;
  color: string;
  href: string;
  external?: boolean;
}

interface Platform extends PlatformData {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
}

const platformsData: PlatformData[] = [
  { id: 'cognix', name: 'Cognix', category: 'Intelligence', radius: 48, color: 'hsl(220, 70%, 55%)', href: 'https://cognix.cropxon.com', external: true },
  { id: 'opzenix', name: 'OpZeniX', category: 'Operations', radius: 44, color: 'hsl(260, 60%, 58%)', href: 'https://opzenix.com', external: true },
  { id: 'qualyx', name: 'Qualyx', category: 'Quality', radius: 40, color: 'hsl(175, 60%, 45%)', href: 'https://qualyx.cropxon.com', external: true },
  { id: 'huminex', name: 'Huminex', category: 'Human Systems', radius: 42, color: 'hsl(340, 65%, 55%)', href: 'https://huminex.cropxon.com', external: true },
  { id: 'traceflow', name: 'TraceFlow', category: 'Traceability', radius: 46, color: 'hsl(200, 70%, 50%)', href: 'https://traceflow.cropxon.com', external: true },
  { id: 'zenith-core', name: 'Zenith Core', category: 'Foundation', radius: 50, color: 'hsl(280, 55%, 55%)', href: 'https://zenith.cropxon.com', external: true },
  { id: 'zenith-institute', name: 'Zenith Institute', category: 'Education', radius: 38, color: 'hsl(145, 55%, 45%)', href: '/zenith-institute', external: false },
  { id: 'originx-labs', name: 'OriginX Labs', category: 'Research', radius: 36, color: 'hsl(25, 75%, 52%)', href: 'https://originxlabs.com', external: true },
];

const EcosystemCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const interactionRef = useRef({ x: 0, y: 0, active: false });
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const platformsRef = useRef<Platform[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Initialize platforms in orbital positions
  const initializePlatforms = useCallback((width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const isMobileView = width < 768;
    setIsMobile(isMobileView);
    
    // Adjust orbit radius based on screen size
    const radiusX = isMobileView ? Math.min(width * 0.38, 160) : Math.min(width * 0.32, 300);
    const radiusY = isMobileView ? Math.min(height * 0.28, 140) : Math.min(height * 0.28, 220);

    platformsRef.current = platformsData.map((p, i) => {
      const angle = (i / platformsData.length) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radiusX;
      const y = centerY + Math.sin(angle) * radiusY;
      // Scale radius for mobile
      const scaledRadius = isMobileView ? p.radius * 0.7 : p.radius;
      return {
        ...p,
        radius: scaledRadius,
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

      // Draw subtle grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = isMobile ? 40 : 60;
      for (let x = 0; x < dimensions.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke();
      }
      for (let y = 0; y < dimensions.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke();
      }

      // Draw connecting lines with glow on interaction
      platformsRef.current.forEach((p1, i) => {
        platformsRef.current.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = isMobile ? 200 : 320;

          if (distance < maxDistance) {
            const baseOpacity = interactionRef.current.active ? 0.18 : 0.08;
            const opacity = baseOpacity * (1 - distance / maxDistance);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `${p1.color.replace(')', `, ${opacity})`)}`);
            gradient.addColorStop(1, `${p2.color.replace(')', `, ${opacity})`)}`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw center glow
      const centerGlowRadius = isMobile ? 80 : 120;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerGlowRadius);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
      gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerGlowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw center branding
      ctx.save();
      const brandSize = isMobile ? 20 : 28;
      ctx.font = `700 ${brandSize}px 'Space Grotesk', sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CROPXON', centerX, centerY - 6);
      
      const subSize = isMobile ? 8 : 10;
      ctx.font = `500 ${subSize}px 'Inter', sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fillText('ECOSYSTEM', centerX, centerY + 14);
      ctx.restore();

      // Update and draw platforms
      platformsRef.current.forEach((platform) => {
        // Physics-based movement toward cursor/touch
        if (interactionRef.current.active) {
          const dx = interactionRef.current.x - platform.x;
          const dy = interactionRef.current.y - platform.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const interactionRadius = isMobile ? 120 : 180;
          
          if (distance < interactionRadius && distance > 0) {
            const force = ((interactionRadius - distance) / interactionRadius) * 0.6;
            platform.vx += (dx / distance) * force;
            platform.vy += (dy / distance) * force;
          }
        }

        // Spring back to target position
        const springForce = 0.04;
        const damping = 0.88;
        
        platform.vx += (platform.targetX - platform.x) * springForce;
        platform.vy += (platform.targetY - platform.y) * springForce;
        platform.vx *= damping;
        platform.vy *= damping;
        
        platform.x += platform.vx;
        platform.y += platform.vy;

        // Draw platform node
        const isHovered = hoveredPlatform === platform.id;
        const scale = isHovered ? 1.12 : 1;
        const radius = platform.radius * scale;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          platform.x, platform.y, 0,
          platform.x, platform.y, radius * 2.5
        );
        glowGradient.addColorStop(0, `${platform.color.replace(')', ', 0.35)')}`);
        glowGradient.addColorStop(0.4, `${platform.color.replace(')', ', 0.12)')}`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node background with gradient
        const nodeGradient = ctx.createRadialGradient(
          platform.x - radius * 0.3, platform.y - radius * 0.3, 0,
          platform.x, platform.y, radius
        );
        nodeGradient.addColorStop(0, isHovered ? `${platform.color.replace(')', ', 0.35)')}` : 'rgba(25, 25, 40, 0.9)');
        nodeGradient.addColorStop(1, isHovered ? `${platform.color.replace(')', ', 0.2)')}` : 'rgba(15, 15, 28, 0.95)');
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();
        
        ctx.strokeStyle = isHovered 
          ? platform.color 
          : `${platform.color.replace(')', ', 0.5)')}`;
        ctx.lineWidth = isHovered ? 2 : 1.5;
        ctx.stroke();

        // Platform name
        ctx.save();
        const nameSize = isMobile ? (isHovered ? 9 : 8) : (isHovered ? 11 : 10);
        ctx.font = `600 ${nameSize}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.9)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(platform.name.toUpperCase(), platform.x, platform.y - 3);

        const catSize = isMobile ? 6 : 7;
        ctx.font = `400 ${catSize}px 'Inter', sans-serif`;
        ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.5)';
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
  }, [dimensions, hoveredPlatform, isMobile]);

  const getInteractionPosition = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;

    if ('touches' in e) {
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const findPlatformAtPosition = (x: number, y: number) => {
    for (const platform of platformsRef.current) {
      const dx = x - platform.x;
      const dy = y - platform.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < platform.radius * 1.2) {
        return platform;
      }
    }
    return null;
  };

  const handlePlatformClick = useCallback((platform: Platform) => {
    if (platform.external) {
      window.open(platform.href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(platform.href);
    }
  }, [navigate]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    
    interactionRef.current = { ...pos, active: true };

    const platform = findPlatformAtPosition(pos.x, pos.y);
    setHoveredPlatform(platform?.id || null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    interactionRef.current.active = false;
    setHoveredPlatform(null);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;

    const platform = findPlatformAtPosition(pos.x, pos.y);
    if (platform) {
      handlePlatformClick(platform);
    }
  }, [handlePlatformClick]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    
    interactionRef.current = { ...pos, active: true };
    const platform = findPlatformAtPosition(pos.x, pos.y);
    setHoveredPlatform(platform?.id || null);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    
    interactionRef.current = { ...pos, active: true };
    const platform = findPlatformAtPosition(pos.x, pos.y);
    setHoveredPlatform(platform?.id || null);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    // Check if we're still on a platform
    if (hoveredPlatform) {
      const platform = platformsRef.current.find(p => p.id === hoveredPlatform);
      if (platform) {
        handlePlatformClick(platform);
      }
    }
    
    interactionRef.current.active = false;
    setHoveredPlatform(null);
  }, [hoveredPlatform, handlePlatformClick]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]"
    >
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full ${hoveredPlatform ? 'cursor-pointer' : 'cursor-default'}`}
        style={{ 
          width: dimensions.width, 
          height: dimensions.height,
          touchAction: 'none',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      
      {/* Hover tooltip */}
      {hoveredPlatform && (
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-background/90 backdrop-blur-xl border border-primary/20 rounded-lg shadow-xl"
          style={{
            animation: 'tooltipIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <p className="text-xs font-medium text-foreground/90 tracking-wide">
            {isMobile ? 'Tap' : 'Click'} to explore {platformsData.find(p => p.id === hoveredPlatform)?.name}
          </p>
        </div>
      )}

      <style>{`
        @keyframes tooltipIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EcosystemCanvas;
