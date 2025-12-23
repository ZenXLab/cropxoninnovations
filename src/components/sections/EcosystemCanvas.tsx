import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import cropxonLogo from "@/assets/cropxon-logo-official.png";

interface PlatformData {
  id: string;
  name: string;
  category: string;
  description: string;
  radius: number;
  color: string;
  href: string;
}

interface Platform extends PlatformData {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  baseAngle: number;
}

// Platform data with correct navigation links
const platformsData: PlatformData[] = [
  { id: 'cognix', name: 'Cognix', category: 'Intelligence', description: 'Enterprise cognition and AI decision systems', radius: 38, color: 'hsl(220, 70%, 55%)', href: '/cognix' },
  { id: 'opzenix', name: 'OpZeniX', category: 'Operations', description: 'Intelligent operations management platform', radius: 38, color: 'hsl(260, 60%, 58%)', href: '/opzenix' },
  { id: 'qualyx', name: 'Qualyx', category: 'Quality', description: 'Quality assurance and compliance engine', radius: 38, color: 'hsl(175, 60%, 45%)', href: '/qualyx' },
  { id: 'huminex', name: 'Huminex', category: 'Human Systems', description: 'Workforce intelligence and talent management', radius: 38, color: 'hsl(340, 65%, 55%)', href: '/huminex' },
  { id: 'traceflow', name: 'TraceFlow', category: 'Traceability', description: 'End-to-end supply chain traceability', radius: 38, color: 'hsl(200, 70%, 50%)', href: '/traceflow' },
  { id: 'zenith-core', name: 'Zenith Studio', category: 'Foundation', description: 'Core infrastructure and platform services', radius: 38, color: 'hsl(280, 55%, 55%)', href: '/zenith-studio' },
  { id: 'zenith-institute', name: 'Zenith Institute', category: 'Education', description: 'Industry-backed engineering education', radius: 38, color: 'hsl(145, 55%, 45%)', href: '/zenith-institute' },
  { id: 'originx-labs', name: 'OriginX Labs', category: 'Research', description: 'Experimental research and innovation lab', radius: 38, color: 'hsl(25, 75%, 52%)', href: '/originx-labs' },
];

interface EcosystemCanvasProps {
  onPlatformHover?: (platformId: string | null) => void;
  onPlatformDemo?: (platformId: string) => void;
}

const EcosystemCanvas = ({ onPlatformHover, onPlatformDemo }: EcosystemCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const logoImageRef = useRef<HTMLImageElement | null>(null);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const platformsRef = useRef<Platform[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(true);
  
  // Auto-rotate through platforms
  const [activePlatformIndex, setActivePlatformIndex] = useState(0);
  const autoRotateTimerRef = useRef<ReturnType<typeof setInterval>>();
  
  const navigate = useNavigate();

  // Load logo image
  useEffect(() => {
    const img = new Image();
    img.src = cropxonLogo;
    img.onload = () => {
      logoImageRef.current = img;
    };
  }, []);

  // Check theme
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Auto-rotate platforms
  useEffect(() => {
    autoRotateTimerRef.current = setInterval(() => {
      setActivePlatformIndex(prev => {
        const next = (prev + 1) % platformsData.length;
        onPlatformHover?.(platformsData[next].id);
        return next;
      });
    }, 3000);

    return () => {
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
      }
    };
  }, [onPlatformHover]);

  // Initialize platforms with circular layout
  const initializePlatforms = useCallback((width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const isMobileView = width < 768;
    const isCompact = width < 400;
    setIsMobile(isMobileView);
    
    const orbitRadius = isCompact 
      ? Math.min(width * 0.38, 100) 
      : isMobileView 
        ? Math.min(width * 0.35, 145) 
        : Math.min(width * 0.32, 120);

    platformsRef.current = platformsData.map((p, i) => {
      const baseAngle = (i / platformsData.length) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(baseAngle) * orbitRadius;
      const y = centerY + Math.sin(baseAngle) * orbitRadius;
      const scaledRadius = isCompact ? p.radius * 0.55 : isMobileView ? p.radius * 0.65 : p.radius * 0.7;
      return {
        ...p,
        radius: scaledRadius,
        x, y,
        targetX: x, targetY: y,
        baseAngle,
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement) && document.activeElement !== canvasRef.current) {
        return;
      }

      const numPlatforms = platformsData.length;
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => (prev + 1) % numPlatforms);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => prev <= 0 ? numPlatforms - 1 : prev - 1);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < numPlatforms) {
            const platform = platformsRef.current[focusedIndex];
            if (platform) {
              handlePlatformClick(platform);
            }
          }
          break;
        case 'Escape':
          e.preventDefault();
          setFocusedIndex(-1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex]);

  // Update hovered platform based on focus
  useEffect(() => {
    if (focusedIndex >= 0 && focusedIndex < platformsData.length) {
      setHoveredPlatform(platformsData[focusedIndex].id);
    }
  }, [focusedIndex]);

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
    const isCompact = dimensions.width < 400;
    
    const orbitRadius = isCompact 
      ? Math.min(dimensions.width * 0.38, 100)
      : isMobile 
        ? Math.min(dimensions.width * 0.35, 145) 
        : Math.min(dimensions.width * 0.32, 120);

    const textColor = isDark ? 'rgba(255, 255, 255' : 'rgba(15, 23, 42';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.02)';
    const nodeBaseColor = isDark ? 'rgba(15, 15, 28' : 'rgba(248, 250, 252';

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw subtle grid
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const gridSize = isMobile ? 50 : 70;
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

      // Draw orbit circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.12)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw connecting lines
      platformsRef.current.forEach((p1, i) => {
        platformsRef.current.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = isMobile ? 180 : 320;

          if (distance < maxDistance) {
            const opacity = 0.06 * (1 - distance / maxDistance);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color.replace(')', `, ${opacity})`));
            gradient.addColorStop(1, p2.color.replace(')', `, ${opacity})`));
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw center with logo
      const centerRadius = isCompact ? 40 : isMobile ? 55 : 50;
      
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerRadius * 1.5);
      centerGlow.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(79, 70, 229, 0.1)');
      centerGlow.addColorStop(0.6, isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(79, 70, 229, 0.03)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      const centerBg = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerRadius);
      if (isDark) {
        centerBg.addColorStop(0, 'rgba(30, 30, 50, 0.95)');
        centerBg.addColorStop(1, 'rgba(20, 20, 35, 0.98)');
      } else {
        centerBg.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        centerBg.addColorStop(1, 'rgba(248, 250, 252, 1)');
      }
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.fillStyle = centerBg;
      ctx.fill();
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.25)' : 'rgba(79, 70, 229, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (logoImageRef.current) {
        const logoSize = isCompact ? 24 : isMobile ? 32 : 28;
        ctx.drawImage(logoImageRef.current, centerX - logoSize / 2, centerY - logoSize / 2 - 6, logoSize, logoSize);
      }

      ctx.save();
      const brandSize = isCompact ? 8 : isMobile ? 11 : 10;
      ctx.font = `700 ${brandSize}px 'Space Grotesk', sans-serif`;
      ctx.fillStyle = `${textColor}, 0.95)`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CROPXON', centerX, centerY + (isCompact ? 14 : isMobile ? 18 : 16));
      const subSize = isCompact ? 5 : isMobile ? 6 : 6;
      ctx.font = `500 ${subSize}px 'Inter', sans-serif`;
      ctx.fillStyle = `${textColor}, 0.5)`;
      ctx.fillText('ECOSYSTEM', centerX, centerY + (isCompact ? 22 : isMobile ? 28 : 25));
      ctx.restore();

      // Draw platforms
      platformsRef.current.forEach((platform, index) => {
        const isHovered = hoveredPlatform === platform.id;
        const isFocused = focusedIndex === index;
        const isAutoActive = activePlatformIndex === index;
        const isActive = isHovered || isFocused || isAutoActive;
        const scale = isActive ? 1.15 : 1;
        const radius = platform.radius * scale;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(platform.x, platform.y, 0, platform.x, platform.y, radius * 2);
        glowGradient.addColorStop(0, platform.color.replace(')', isActive ? ', 0.35)' : ', 0.15)'));
        glowGradient.addColorStop(0.5, platform.color.replace(')', ', 0.06)'));
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node background
        const nodeGradient = ctx.createRadialGradient(
          platform.x - radius * 0.2, platform.y - radius * 0.2, 0,
          platform.x, platform.y, radius
        );
        
        if (isDark) {
          nodeGradient.addColorStop(0, isActive ? platform.color.replace(')', ', 0.25)') : `${nodeBaseColor}, 0.9)`);
          nodeGradient.addColorStop(1, isActive ? platform.color.replace(')', ', 0.12)') : `${nodeBaseColor}, 0.95)`);
        } else {
          nodeGradient.addColorStop(0, isActive ? platform.color.replace(')', ', 0.12)') : `${nodeBaseColor}, 0.98)`);
          nodeGradient.addColorStop(1, isActive ? platform.color.replace(')', ', 0.06)') : `${nodeBaseColor}, 1)`);
        }
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();
        
        if (isFocused) {
          ctx.strokeStyle = platform.color;
          ctx.lineWidth = 3;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = isActive ? platform.color : platform.color.replace(')', isDark ? ', 0.4)' : ', 0.5)');
          ctx.lineWidth = isActive ? 2.5 : 1.5;
          ctx.stroke();
        }

        // Platform name
        ctx.save();
        const nameSize = isCompact ? 6 : isMobile ? (isActive ? 8 : 7) : (isActive ? 8 : 7);
        ctx.font = `600 ${nameSize}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = isActive ? `${textColor}, 1)` : `${textColor}, 0.85)`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(platform.name.toUpperCase(), platform.x, platform.y - 2);
        const catSize = isCompact ? 4 : isMobile ? 5 : 5;
        ctx.font = `400 ${catSize}px 'Inter', sans-serif`;
        ctx.fillStyle = isActive ? `${textColor}, 0.65)` : `${textColor}, 0.45)`;
        ctx.fillText(platform.category, platform.x, platform.y + 7);
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
  }, [dimensions, hoveredPlatform, focusedIndex, isMobile, isDark, activePlatformIndex]);

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

    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const findPlatformAtPosition = (x: number, y: number) => {
    for (const platform of platformsRef.current) {
      const dx = x - platform.x;
      const dy = y - platform.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < platform.radius * 1.2) return platform;
    }
    return null;
  };

  const handlePlatformClick = useCallback((platform: Platform) => {
    if (onPlatformDemo) {
      onPlatformDemo(platform.id);
    } else {
      navigate(platform.href);
    }
  }, [navigate, onPlatformDemo]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    const platform = findPlatformAtPosition(pos.x, pos.y);
    if (platform) {
      setHoveredPlatform(platform.id);
      onPlatformHover?.(platform.id);
      // Pause auto-rotate on hover
      if (autoRotateTimerRef.current) {
        clearInterval(autoRotateTimerRef.current);
      }
    } else {
      setHoveredPlatform(null);
    }
  }, [onPlatformHover]);

  const handleMouseLeave = useCallback(() => {
    setHoveredPlatform(null);
    // Resume auto-rotate
    autoRotateTimerRef.current = setInterval(() => {
      setActivePlatformIndex(prev => {
        const next = (prev + 1) % platformsData.length;
        onPlatformHover?.(platformsData[next].id);
        return next;
      });
    }, 3000);
  }, [onPlatformHover]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    const platform = findPlatformAtPosition(pos.x, pos.y);
    if (platform) {
      handlePlatformClick(platform);
    }
  }, [handlePlatformClick]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    const platform = findPlatformAtPosition(pos.x, pos.y);
    if (platform) {
      setHoveredPlatform(platform.id);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    const platform = findPlatformAtPosition(pos.x, pos.y);
    setHoveredPlatform(platform?.id || null);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (hoveredPlatform) {
      const platform = platformsRef.current.find(p => p.id === hoveredPlatform);
      if (platform) handlePlatformClick(platform);
    }
    setHoveredPlatform(null);
  }, [hoveredPlatform, handlePlatformClick]);

  // Get active platform info for display
  const activePlatform = platformsData[activePlatformIndex];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[400px]"
      role="application"
      aria-label="CropXon Ecosystem - Interactive platform navigation"
    >
      <canvas
        ref={canvasRef}
        tabIndex={0}
        className={`absolute inset-0 w-full h-full ${hoveredPlatform ? 'cursor-pointer' : 'cursor-default'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-xl`}
        style={{ width: dimensions.width, height: dimensions.height, touchAction: 'none' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Ecosystem canvas - Use arrow keys to navigate, Enter to select"
      />

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 text-[10px] text-muted-foreground/60">
        <kbd className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/30 font-mono">←→</kbd>
        <span>Navigate</span>
        <kbd className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/30 font-mono ml-2">Enter</kbd>
        <span>Select</span>
      </div>
      
      {/* Active platform info popup */}
      {activePlatform && !hoveredPlatform && (
        <div 
          className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-3 bg-card/95 backdrop-blur-xl border border-primary/25 rounded-xl shadow-2xl max-w-[240px]"
          style={{ animation: 'popupFloat 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="flex items-start gap-2.5">
            <div 
              className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
              style={{ 
                backgroundColor: activePlatform.color,
                boxShadow: `0 0 8px ${activePlatform.color}`
              }}
            />
            <div>
              <p className="font-display text-xs font-semibold text-foreground tracking-wide">
                {activePlatform.name}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                {activePlatform.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hover tooltip */}
      {hoveredPlatform && (
        <div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-card/95 backdrop-blur-xl border border-border/30 rounded-lg shadow-lg"
          style={{ animation: 'tooltipIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <p className="text-xs font-medium text-foreground tracking-wide">
            {isMobile ? 'Tap' : 'Click'} to explore {platformsData.find(p => p.id === hoveredPlatform)?.name}
          </p>
        </div>
      )}

      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes popupFloat {
          from { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default EcosystemCanvas;
