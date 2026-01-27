import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import originxLogo from "@/assets/originx-logo.png";

interface PlatformData {
  id: string;
  name: string;
  category: string;
  description: string;
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
  baseAngle: number;
}

interface Butterfly {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  wingAngle: number;
  wingSpeed: number;
  size: number;
  color: string;
  targetPlatform: number;
  state: 'flying' | 'landing' | 'resting' | 'waiting';
  restTimer: number;
  angle: number;
}

const platformsData: PlatformData[] = [
  { id: 'cognix', name: 'Cognix', category: 'Intelligence', description: 'Enterprise cognition and AI decision systems', radius: 36, color: 'hsl(220, 70%, 55%)', href: 'https://cognix.cropxon.com', external: true },
  { id: 'opzenix', name: 'OpZeniX', category: 'Operations', description: 'Intelligent operations management platform', radius: 36, color: 'hsl(260, 60%, 58%)', href: 'https://opzenix.com', external: true },
  { id: 'qualyx', name: 'Qualyx', category: 'Quality', description: 'Quality assurance and compliance engine', radius: 36, color: 'hsl(175, 60%, 45%)', href: 'https://qualyx.cropxon.com', external: true },
  { id: 'huminex', name: 'Huminex', category: 'Human Systems', description: 'Workforce intelligence and talent management', radius: 36, color: 'hsl(340, 65%, 55%)', href: 'https://huminex.cropxon.com', external: true },
  { id: 'traceflow', name: 'TraceFlow', category: 'Traceability', description: 'End-to-end supply chain traceability', radius: 36, color: 'hsl(200, 70%, 50%)', href: 'https://traceflow.cropxon.com', external: true },
  { id: 'zenith-core', name: 'Zenith Core', category: 'Foundation', description: 'Core infrastructure and platform services', radius: 36, color: 'hsl(280, 55%, 55%)', href: 'https://zenith.cropxon.com', external: true },
  { id: 'stackcraft', name: 'StackCraft', category: 'Learning', description: 'Production-grade engineering knowledge platform', radius: 36, color: 'hsl(145, 55%, 45%)', href: '/stackcraft', external: false },
  { id: 'originx-labs', name: 'OriginX Labs', category: 'Research', description: 'Experimental research and innovation lab', radius: 36, color: 'hsl(25, 75%, 52%)', href: 'https://originxlabs.com', external: true },
  { id: 'proxinex', name: 'Proxinex', category: 'AI Routing', description: 'Control Intelligence - Route queries to best AI models', radius: 36, color: 'hsl(45, 85%, 50%)', href: 'http://proxinex.com', external: true },
  { id: 'chronyx', name: 'Chronyx', category: 'Personal Space', description: 'Personal Quiet Space for all life management', radius: 36, color: 'hsl(190, 70%, 50%)', href: 'https://www.getchronyx.com', external: true },
  { id: 'convertix', name: 'Convertix', category: 'Conversion', description: 'Conversion Operating Studio for all file types', radius: 36, color: 'hsl(320, 70%, 55%)', href: 'https://www.getconvertix.com', external: true },
  { id: 'finioraa', name: 'Finioraa', category: 'Finance', description: 'Personal Finance Operating System', radius: 36, color: 'hsl(130, 65%, 45%)', href: 'https://www.finioraa.com', external: true },
];

interface EcosystemCanvasProps {
  onPlatformHover?: (platformId: string | null) => void;
}

const EcosystemCanvas = ({ onPlatformHover }: EcosystemCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const interactionRef = useRef({ x: 0, y: 0, active: false });
  const butterflyRef = useRef<Butterfly | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [butterflyPlatform, setButterflyPlatform] = useState<PlatformData | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const platformsRef = useRef<Platform[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(true);
  
  // Spin mode state
  const [isSpinning, setIsSpinning] = useState(true);
  const spinAngleRef = useRef(0);
  const spinSpeedRef = useRef(0.006);
  
  const navigate = useNavigate();

  // Load logo image
  useEffect(() => {
    const img = new Image();
    img.src = originxLogo;
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

  // Initialize platforms with perfect circular layout - compact version
  const initializePlatforms = useCallback((width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const isMobileView = width < 768;
    const isCompact = width < 400; // For compact sidebar view
    setIsMobile(isMobileView);
    
    // Smaller orbit radius for compact layout
    const orbitRadius = isCompact 
      ? Math.min(width * 0.38, 100) 
      : isMobileView 
        ? Math.min(width * 0.35, 145) 
        : Math.min(width * 0.32, 120);

    platformsRef.current = platformsData.map((p, i) => {
      // Equal spacing around the circle
      const baseAngle = (i / platformsData.length) * Math.PI * 2 - Math.PI / 2;
      const angle = baseAngle + spinAngleRef.current;
      const x = centerX + Math.cos(angle) * orbitRadius;
      const y = centerY + Math.sin(angle) * orbitRadius;
      const scaledRadius = isCompact ? p.radius * 0.55 : isMobileView ? p.radius * 0.65 : p.radius * 0.7;
      return {
        ...p,
        radius: scaledRadius,
        x, y,
        targetX: x, targetY: y,
        vx: 0, vy: 0,
        baseAngle,
      };
    });

    // Initialize single butterfly - starts flying to first node
    if (!butterflyRef.current) {
      const firstTarget = Math.floor(Math.random() * platformsData.length);
      butterflyRef.current = {
        x: centerX + (Math.random() - 0.5) * 100,
        y: centerY - 100 + (Math.random() - 0.5) * 30,
        targetX: centerX,
        targetY: centerY - 80,
        vx: 0, vy: 0,
        wingAngle: Math.random() * Math.PI * 2,
        wingSpeed: 0.12,
        size: isMobileView ? 14 : 18,
        color: platformsData[firstTarget].color,
        targetPlatform: firstTarget,
        state: 'flying',
        restTimer: 60,
        angle: 0,
      };
    }
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
          setIsSpinning(false);
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => prev <= 0 ? numPlatforms - 1 : prev - 1);
          setIsSpinning(false);
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
          setIsSpinning(true);
          break;
        case 's':
        case 'S':
          e.preventDefault();
          setIsSpinning(prev => !prev);
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

  // Draw realistic butterfly
  const drawButterfly = (ctx: CanvasRenderingContext2D, butterfly: Butterfly) => {
    const { x, y, wingAngle, size, color, state } = butterfly;
    const wingFlap = state === 'resting' ? Math.sin(wingAngle) * 0.15 : Math.sin(wingAngle);
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(butterfly.angle);
    
    // Body with gradient
    const bodyGrad = ctx.createLinearGradient(0, -size * 0.5, 0, size * 0.5);
    bodyGrad.addColorStop(0, 'hsl(30, 35%, 25%)');
    bodyGrad.addColorStop(0.5, 'hsl(30, 30%, 18%)');
    bodyGrad.addColorStop(1, 'hsl(30, 35%, 22%)');
    
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.12, size * 0.55, 0, 0, Math.PI * 2);
    ctx.fillStyle = bodyGrad;
    ctx.fill();
    
    // Antennae
    ctx.strokeStyle = 'hsl(30, 30%, 25%)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-size * 0.05, -size * 0.4);
    ctx.quadraticCurveTo(-size * 0.15, -size * 0.65, -size * 0.1, -size * 0.75);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(size * 0.05, -size * 0.4);
    ctx.quadraticCurveTo(size * 0.15, -size * 0.65, size * 0.1, -size * 0.75);
    ctx.stroke();
    
    // Wings with platform color
    const wingWidth = size * (1 + wingFlap * 0.25);
    const wingHeight = size * 0.7;
    
    // Upper left wing
    ctx.save();
    ctx.scale(1, 0.8 + wingFlap * 0.2);
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.1);
    ctx.bezierCurveTo(
      -wingWidth * 0.4, -wingHeight * 0.8,
      -wingWidth * 0.9, -wingHeight * 0.3,
      -wingWidth * 0.45, size * 0.15
    );
    ctx.quadraticCurveTo(-wingWidth * 0.2, size * 0.05, 0, -size * 0.1);
    
    const leftUpperGrad = ctx.createRadialGradient(-wingWidth * 0.3, -wingHeight * 0.2, 0, -wingWidth * 0.3, -wingHeight * 0.2, wingWidth * 0.6);
    leftUpperGrad.addColorStop(0, color);
    leftUpperGrad.addColorStop(0.6, color.replace(')', ', 0.8)'));
    leftUpperGrad.addColorStop(1, color.replace(')', ', 0.5)'));
    ctx.fillStyle = leftUpperGrad;
    ctx.fill();
    ctx.strokeStyle = color.replace(')', ', 0.6)');
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.restore();
    
    // Upper right wing
    ctx.save();
    ctx.scale(1, 0.8 + wingFlap * 0.2);
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.1);
    ctx.bezierCurveTo(
      wingWidth * 0.4, -wingHeight * 0.8,
      wingWidth * 0.9, -wingHeight * 0.3,
      wingWidth * 0.45, size * 0.15
    );
    ctx.quadraticCurveTo(wingWidth * 0.2, size * 0.05, 0, -size * 0.1);
    
    const rightUpperGrad = ctx.createRadialGradient(wingWidth * 0.3, -wingHeight * 0.2, 0, wingWidth * 0.3, -wingHeight * 0.2, wingWidth * 0.6);
    rightUpperGrad.addColorStop(0, color);
    rightUpperGrad.addColorStop(0.6, color.replace(')', ', 0.8)'));
    rightUpperGrad.addColorStop(1, color.replace(')', ', 0.5)'));
    ctx.fillStyle = rightUpperGrad;
    ctx.fill();
    ctx.strokeStyle = color.replace(')', ', 0.6)');
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.restore();
    
    // Lower left wing
    ctx.save();
    ctx.scale(1, 0.75 + wingFlap * 0.25);
    ctx.beginPath();
    ctx.moveTo(-size * 0.08, size * 0.1);
    ctx.bezierCurveTo(
      -wingWidth * 0.5, size * 0.1,
      -wingWidth * 0.55, size * 0.5,
      -wingWidth * 0.25, size * 0.55
    );
    ctx.quadraticCurveTo(-size * 0.1, size * 0.35, -size * 0.08, size * 0.1);
    ctx.fillStyle = color.replace(')', ', 0.85)');
    ctx.fill();
    ctx.restore();
    
    // Lower right wing
    ctx.save();
    ctx.scale(1, 0.75 + wingFlap * 0.25);
    ctx.beginPath();
    ctx.moveTo(size * 0.08, size * 0.1);
    ctx.bezierCurveTo(
      wingWidth * 0.5, size * 0.1,
      wingWidth * 0.55, size * 0.5,
      wingWidth * 0.25, size * 0.55
    );
    ctx.quadraticCurveTo(size * 0.1, size * 0.35, size * 0.08, size * 0.1);
    ctx.fillStyle = color.replace(')', ', 0.85)');
    ctx.fill();
    ctx.restore();
    
    // Wing patterns
    ctx.beginPath();
    ctx.arc(-wingWidth * 0.35, -size * 0.2, size * 0.08, 0, Math.PI * 2);
    ctx.arc(wingWidth * 0.35, -size * 0.2, size * 0.08, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
    
    // Glow effect when resting
    if (state === 'resting') {
      ctx.beginPath();
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
      glowGrad.addColorStop(0, color.replace(')', ', 0.35)'));
      glowGrad.addColorStop(0.5, color.replace(')', ', 0.15)'));
      glowGrad.addColorStop(1, 'transparent');
      ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();
    }
    
    ctx.restore();
  };

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

      // Update spin
      if (isSpinning) {
        spinAngleRef.current += spinSpeedRef.current;
      }

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

      // Draw perfect circle orbit
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.12)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update platform positions based on spin
      platformsRef.current.forEach((platform, i) => {
        const angle = platform.baseAngle + spinAngleRef.current;
        platform.targetX = centerX + Math.cos(angle) * orbitRadius;
        platform.targetY = centerY + Math.sin(angle) * orbitRadius;

        if (interactionRef.current.active && !isSpinning) {
          const dx = interactionRef.current.x - platform.x;
          const dy = interactionRef.current.y - platform.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const interactionRadius = isMobile ? 90 : 140;
          
          if (distance < interactionRadius && distance > 0) {
            const force = ((interactionRadius - distance) / interactionRadius) * 0.25;
            platform.vx += (dx / distance) * force;
            platform.vy += (dy / distance) * force;
          }
        }

        const springForce = 0.08;
        const damping = 0.88;
        
        platform.vx += (platform.targetX - platform.x) * springForce;
        platform.vy += (platform.targetY - platform.y) * springForce;
        platform.vx *= damping;
        platform.vy *= damping;
        
        platform.x += platform.vx;
        platform.y += platform.vy;
      });

      // Draw connecting lines
      platformsRef.current.forEach((p1, i) => {
        platformsRef.current.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = isMobile ? 180 : 320;

          if (distance < maxDistance) {
            const baseOpacity = interactionRef.current.active ? 0.18 : 0.08;
            const opacity = baseOpacity * (1 - distance / maxDistance);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color.replace(')', `, ${opacity})`));
            gradient.addColorStop(1, p2.color.replace(')', `, ${opacity})`));
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      // Draw center with logo
      const centerRadius = isCompact ? 40 : isMobile ? 55 : 50;
      
      // Center glow
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerRadius * 1.5);
      centerGlow.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(79, 70, 229, 0.1)');
      centerGlow.addColorStop(0.6, isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(79, 70, 229, 0.03)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      // Center circle background
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
      
      // Center border
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.25)' : 'rgba(79, 70, 229, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw logo if loaded
      if (logoImageRef.current) {
        const logoSize = isCompact ? 24 : isMobile ? 32 : 28;
        ctx.drawImage(
          logoImageRef.current,
          centerX - logoSize / 2,
          centerY - logoSize / 2 - 6,
          logoSize,
          logoSize
        );
      }

      // Center text
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
        const isActive = isHovered || isFocused;
        const scale = isActive ? 1.15 : 1;
        const radius = platform.radius * scale;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(platform.x, platform.y, 0, platform.x, platform.y, radius * 2);
        glowGradient.addColorStop(0, platform.color.replace(')', isActive ? ', 0.35)' : ', 0.2)'));
        glowGradient.addColorStop(0.5, platform.color.replace(')', ', 0.08)'));
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node background - perfect circle
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
        
        // Focus ring for keyboard navigation
        if (isFocused) {
          ctx.strokeStyle = platform.color;
          ctx.lineWidth = 3;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = isActive 
            ? platform.color 
            : platform.color.replace(')', isDark ? ', 0.4)' : ', 0.5)');
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

      // Update and draw single butterfly - auto visits nodes every 2 seconds
      const butterfly = butterflyRef.current;
      if (butterfly) {
        butterfly.wingAngle += butterfly.wingSpeed;
        let restingButterflyData: { platform: PlatformData; x: number; y: number } | null = null;
        
        if (butterfly.state === 'waiting') {
          // Float around center briefly then pick a target
          butterfly.x += Math.sin(butterfly.wingAngle * 0.25) * 0.6;
          butterfly.y += Math.cos(butterfly.wingAngle * 0.15) * 0.3;
          butterfly.angle = Math.sin(butterfly.wingAngle * 0.08) * 0.2;
          
          // Auto pick a target after a short wait
          butterfly.restTimer--;
          if (butterfly.restTimer <= 0) {
            const targetIdx = Math.floor(Math.random() * platformsRef.current.length);
            butterfly.targetPlatform = targetIdx;
            butterfly.color = platformsRef.current[targetIdx].color;
            butterfly.state = 'flying';
          }
        } else if (butterfly.state === 'flying') {
          const targetPlatform = platformsRef.current[butterfly.targetPlatform];
          butterfly.targetX = targetPlatform.x;
          butterfly.targetY = targetPlatform.y - targetPlatform.radius - 18;
          
          const dx = butterfly.targetX - butterfly.x;
          const dy = butterfly.targetY - butterfly.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          butterfly.angle = Math.atan2(dy, dx) + Math.PI / 2;
          
          if (distance < 8) {
            butterfly.state = 'landing';
          } else {
            const speed = 1.5;
            butterfly.vx += (dx / distance) * speed * 0.12;
            butterfly.vy += (dy / distance) * speed * 0.12;
            butterfly.vx *= 0.94;
            butterfly.vy *= 0.94;
            butterfly.x += butterfly.vx + Math.sin(butterfly.wingAngle * 0.4) * 0.4;
            butterfly.y += butterfly.vy + Math.cos(butterfly.wingAngle * 0.25) * 0.3;
          }
        } else if (butterfly.state === 'landing') {
          const targetPlatform = platformsRef.current[butterfly.targetPlatform];
          butterfly.x = targetPlatform.x;
          butterfly.y = targetPlatform.y - targetPlatform.radius - 18;
          butterfly.vx = 0;
          butterfly.vy = 0;
          butterfly.angle = 0;
          butterfly.state = 'resting';
          // Rest for ~2 seconds (120 frames at 60fps)
          butterfly.restTimer = 120;
        } else if (butterfly.state === 'resting') {
          const targetPlatform = platformsRef.current[butterfly.targetPlatform];
          butterfly.restTimer--;
          butterfly.x = targetPlatform.x + Math.sin(butterfly.wingAngle * 0.08) * 1.2;
          butterfly.y = targetPlatform.y - targetPlatform.radius - 18;
          
          restingButterflyData = { platform: targetPlatform, x: butterfly.x, y: butterfly.y - 30 };
          
          if (butterfly.restTimer <= 0) {
            // Pick next node
            let newTarget = Math.floor(Math.random() * platformsRef.current.length);
            while (newTarget === butterfly.targetPlatform && platformsRef.current.length > 1) {
              newTarget = Math.floor(Math.random() * platformsRef.current.length);
            }
            butterfly.targetPlatform = newTarget;
            butterfly.color = platformsRef.current[newTarget].color;
            butterfly.state = 'flying';
          }
        }
        
        drawButterfly(ctx, butterfly);

        // Update popup state and notify parent - always show when butterfly rests
        if (restingButterflyData) {
          setButterflyPlatform(restingButterflyData.platform);
          setPopupPosition({ x: restingButterflyData.x, y: restingButterflyData.y });
          onPlatformHover?.(restingButterflyData.platform.id);
        } else if (!hoveredPlatform) {
          setButterflyPlatform(null);
          onPlatformHover?.(null);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, hoveredPlatform, focusedIndex, isMobile, isDark, isSpinning]);

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
    // Disabled - only hover interaction for dashboard preview
    // if (platform.external) {
    //   window.open(platform.href, '_blank', 'noopener,noreferrer');
    // } else {
    //   navigate(platform.href);
    // }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    interactionRef.current = { ...pos, active: true };
    const platform = findPlatformAtPosition(pos.x, pos.y);
    if (platform) {
      setHoveredPlatform(platform.id);
      setIsSpinning(false);
      onPlatformHover?.(platform.id);
    } else {
      setHoveredPlatform(null);
    }
  }, [onPlatformHover]);

  const handleMouseLeave = useCallback(() => {
    interactionRef.current.active = false;
    setHoveredPlatform(null);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    // Only toggle spinning, no navigation
    setIsSpinning(prev => !prev);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    interactionRef.current = { ...pos, active: true };
    const platform = findPlatformAtPosition(pos.x, pos.y);
    if (platform) {
      setHoveredPlatform(platform.id);
      setIsSpinning(false);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    const pos = getInteractionPosition(e);
    if (!pos) return;
    interactionRef.current = { ...pos, active: true };
    const platform = findPlatformAtPosition(pos.x, pos.y);
    setHoveredPlatform(platform?.id || null);
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Only clear interaction, no navigation
    interactionRef.current.active = false;
    setHoveredPlatform(null);
  }, [hoveredPlatform]);

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
        aria-label="Ecosystem canvas - Use arrow keys to navigate, Enter to select, S to toggle spin"
      />
      
      {/* Spin indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button
          onClick={() => setIsSpinning(prev => !prev)}
          className="px-3 py-1.5 text-[10px] font-medium tracking-wide uppercase bg-card/80 backdrop-blur-sm border border-border/30 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
        >
          {isSpinning ? 'Pause' : 'Spin'}
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 text-[10px] text-muted-foreground/60">
        <kbd className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/30 font-mono">←→</kbd>
        <span>Navigate</span>
        <kbd className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/30 font-mono ml-2">Enter</kbd>
        <span>Select</span>
        <kbd className="px-1.5 py-0.5 bg-muted/50 rounded border border-border/30 font-mono ml-2">S</kbd>
        <span>Spin</span>
      </div>
      
      {/* Butterfly platform popup */}
      {butterflyPlatform && (
        <div 
          className="absolute pointer-events-none px-4 py-3 bg-card/95 backdrop-blur-xl border border-primary/25 rounded-xl shadow-2xl max-w-[220px]"
          style={{
            left: Math.min(Math.max(popupPosition.x, 115), dimensions.width - 115),
            top: popupPosition.y - 65,
            transform: 'translateX(-50%)',
            animation: 'popupFloat 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex items-start gap-2.5">
            <div 
              className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
              style={{ 
                backgroundColor: butterflyPlatform.color,
                boxShadow: `0 0 8px ${butterflyPlatform.color}`
              }}
            />
            <div>
              <p className="font-display text-xs font-semibold text-foreground tracking-wide">
                {butterflyPlatform.name}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                {butterflyPlatform.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hover tooltip */}
      {hoveredPlatform && !butterflyPlatform && (
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
