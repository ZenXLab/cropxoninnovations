import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
  { id: 'cognix', name: 'Cognix', category: 'Intelligence', description: 'Enterprise cognition and AI decision systems', radius: 48, color: 'hsl(220, 70%, 55%)', href: 'https://cognix.cropxon.com', external: true },
  { id: 'opzenix', name: 'OpZeniX', category: 'Operations', description: 'Intelligent operations management platform', radius: 44, color: 'hsl(260, 60%, 58%)', href: 'https://opzenix.com', external: true },
  { id: 'qualyx', name: 'Qualyx', category: 'Quality', description: 'Quality assurance and compliance engine', radius: 40, color: 'hsl(175, 60%, 45%)', href: 'https://qualyx.cropxon.com', external: true },
  { id: 'huminex', name: 'Huminex', category: 'Human Systems', description: 'Workforce intelligence and talent management', radius: 42, color: 'hsl(340, 65%, 55%)', href: 'https://huminex.cropxon.com', external: true },
  { id: 'traceflow', name: 'TraceFlow', category: 'Traceability', description: 'End-to-end supply chain traceability', radius: 46, color: 'hsl(200, 70%, 50%)', href: 'https://traceflow.cropxon.com', external: true },
  { id: 'zenith-core', name: 'Zenith Core', category: 'Foundation', description: 'Core infrastructure and platform services', radius: 50, color: 'hsl(280, 55%, 55%)', href: 'https://zenith.cropxon.com', external: true },
  { id: 'zenith-institute', name: 'Zenith Institute', category: 'Education', description: 'Industry-backed engineering education', radius: 38, color: 'hsl(145, 55%, 45%)', href: '/zenith-institute', external: false },
  { id: 'originx-labs', name: 'OriginX Labs', category: 'Research', description: 'Experimental research and innovation lab', radius: 36, color: 'hsl(25, 75%, 52%)', href: 'https://originxlabs.com', external: true },
];

const EcosystemCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const interactionRef = useRef({ x: 0, y: 0, active: false });
  const butterfliesRef = useRef<Butterfly[]>([]);
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
  const spinSpeedRef = useRef(0.008);
  const spinDecelerationRef = useRef(0);
  
  const navigate = useNavigate();

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

  // Initialize platforms
  const initializePlatforms = useCallback((width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const isMobileView = width < 768;
    setIsMobile(isMobileView);
    
    const radiusX = isMobileView ? Math.min(width * 0.38, 155) : Math.min(width * 0.32, 300);
    const radiusY = isMobileView ? Math.min(height * 0.28, 135) : Math.min(height * 0.28, 210);

    platformsRef.current = platformsData.map((p, i) => {
      const baseAngle = (i / platformsData.length) * Math.PI * 2 - Math.PI / 2;
      const angle = baseAngle + spinAngleRef.current;
      const x = centerX + Math.cos(angle) * radiusX;
      const y = centerY + Math.sin(angle) * radiusY;
      const scaledRadius = isMobileView ? p.radius * 0.62 : p.radius;
      return {
        ...p,
        radius: scaledRadius,
        x, y,
        targetX: x, targetY: y,
        vx: 0, vy: 0,
        baseAngle,
      };
    });

    // Initialize butterflies - waiting state initially
    if (butterfliesRef.current.length === 0) {
      const numButterflies = isMobileView ? 2 : 3;
      for (let i = 0; i < numButterflies; i++) {
        butterfliesRef.current.push({
          x: centerX + (Math.random() - 0.5) * 150,
          y: centerY - 100 + (Math.random() - 0.5) * 50,
          targetX: centerX,
          targetY: centerY - 80,
          vx: 0, vy: 0,
          wingAngle: Math.random() * Math.PI * 2,
          wingSpeed: 0.15 + Math.random() * 0.1,
          size: isMobileView ? 10 : 14,
          color: 'hsl(280, 60%, 65%)',
          targetPlatform: -1,
          state: 'waiting',
          restTimer: 0,
          angle: 0,
        });
      }
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

  // Draw butterfly
  const drawButterfly = (ctx: CanvasRenderingContext2D, butterfly: Butterfly, textColor: string) => {
    const { x, y, wingAngle, size, color, state } = butterfly;
    const wingFlap = state === 'resting' ? Math.sin(wingAngle) * 0.2 : Math.sin(wingAngle);
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(butterfly.angle);
    
    // Body
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.15, size * 0.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = `${textColor}, 0.9)`;
    ctx.fill();
    
    // Wings with gradient
    const wingWidth = size * (0.8 + wingFlap * 0.3);
    
    // Left wing
    ctx.beginPath();
    ctx.ellipse(-wingWidth * 0.5, -size * 0.1, wingWidth * 0.5, size * 0.4, -0.3 + wingFlap * 0.2, 0, Math.PI * 2);
    const leftGrad = ctx.createRadialGradient(-wingWidth * 0.3, -size * 0.1, 0, -wingWidth * 0.3, -size * 0.1, wingWidth * 0.5);
    leftGrad.addColorStop(0, color.replace(')', ', 0.95)'));
    leftGrad.addColorStop(0.7, color.replace(')', ', 0.6)'));
    leftGrad.addColorStop(1, color.replace(')', ', 0.3)'));
    ctx.fillStyle = leftGrad;
    ctx.fill();
    
    // Right wing
    ctx.beginPath();
    ctx.ellipse(wingWidth * 0.5, -size * 0.1, wingWidth * 0.5, size * 0.4, 0.3 - wingFlap * 0.2, 0, Math.PI * 2);
    const rightGrad = ctx.createRadialGradient(wingWidth * 0.3, -size * 0.1, 0, wingWidth * 0.3, -size * 0.1, wingWidth * 0.5);
    rightGrad.addColorStop(0, color.replace(')', ', 0.95)'));
    rightGrad.addColorStop(0.7, color.replace(')', ', 0.6)'));
    rightGrad.addColorStop(1, color.replace(')', ', 0.3)'));
    ctx.fillStyle = rightGrad;
    ctx.fill();
    
    // Wing patterns
    ctx.beginPath();
    ctx.arc(-wingWidth * 0.35, -size * 0.15, size * 0.12, 0, Math.PI * 2);
    ctx.arc(wingWidth * 0.35, -size * 0.15, size * 0.12, 0, Math.PI * 2);
    ctx.fillStyle = `${textColor}, 0.4)`;
    ctx.fill();
    
    // Glow effect when resting
    if (state === 'resting') {
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
      glowGrad.addColorStop(0, color.replace(')', ', 0.4)'));
      glowGrad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
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
    
    const radiusX = isMobile ? Math.min(dimensions.width * 0.38, 155) : Math.min(dimensions.width * 0.32, 300);
    const radiusY = isMobile ? Math.min(dimensions.height * 0.28, 135) : Math.min(dimensions.height * 0.28, 210);

    const textColor = isDark ? 'rgba(255, 255, 255' : 'rgba(15, 23, 42';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.025)';
    const nodeBaseColor = isDark ? 'rgba(15, 15, 28' : 'rgba(248, 250, 252';

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update spin
      if (isSpinning) {
        spinAngleRef.current += spinSpeedRef.current;
        spinDecelerationRef.current = 0;
      } else if (spinDecelerationRef.current < 1) {
        // Slow deceleration when stopping
        spinDecelerationRef.current += 0.02;
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

      // Draw orbit ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.1)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 10]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update platform positions based on spin
      platformsRef.current.forEach((platform, i) => {
        const angle = platform.baseAngle + spinAngleRef.current;
        platform.targetX = centerX + Math.cos(angle) * radiusX;
        platform.targetY = centerY + Math.sin(angle) * radiusY;

        if (interactionRef.current.active && !isSpinning) {
          const dx = interactionRef.current.x - platform.x;
          const dy = interactionRef.current.y - platform.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const interactionRadius = isMobile ? 90 : 140;
          
          if (distance < interactionRadius && distance > 0) {
            const force = ((interactionRadius - distance) / interactionRadius) * 0.3;
            platform.vx += (dx / distance) * force;
            platform.vy += (dy / distance) * force;
          }
        }

        const springForce = 0.06;
        const damping = 0.85;
        
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
          const maxDistance = isMobile ? 200 : 350;

          if (distance < maxDistance) {
            const baseOpacity = interactionRef.current.active ? 0.2 : 0.1;
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

      // Draw center glow
      const centerGlowRadius = isMobile ? 70 : 100;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, centerGlowRadius);
      gradient.addColorStop(0, isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(79, 70, 229, 0.1)');
      gradient.addColorStop(0.6, isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(79, 70, 229, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerGlowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw center branding
      ctx.save();
      const brandSize = isMobile ? 18 : 26;
      ctx.font = `700 ${brandSize}px 'Space Grotesk', sans-serif`;
      ctx.fillStyle = `${textColor}, 0.95)`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CROPXON', centerX, centerY - 6);
      
      const subSize = isMobile ? 7 : 9;
      ctx.font = `500 ${subSize}px 'Inter', sans-serif`;
      ctx.fillStyle = `${textColor}, 0.4)`;
      ctx.fillText('ECOSYSTEM', centerX, centerY + 12);
      ctx.restore();

      // Draw platforms
      platformsRef.current.forEach((platform, index) => {
        const isHovered = hoveredPlatform === platform.id;
        const isFocused = focusedIndex === index;
        const isActive = isHovered || isFocused;
        const scale = isActive ? 1.12 : 1;
        const radius = platform.radius * scale;

        // Outer glow
        const glowGradient = ctx.createRadialGradient(platform.x, platform.y, 0, platform.x, platform.y, radius * 2.2);
        glowGradient.addColorStop(0, platform.color.replace(')', isActive ? ', 0.35)' : ', 0.25)'));
        glowGradient.addColorStop(0.5, platform.color.replace(')', ', 0.1)'));
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(platform.x, platform.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node background
        const nodeGradient = ctx.createRadialGradient(
          platform.x - radius * 0.25, platform.y - radius * 0.25, 0,
          platform.x, platform.y, radius
        );
        
        if (isDark) {
          nodeGradient.addColorStop(0, isActive ? platform.color.replace(')', ', 0.3)') : `${nodeBaseColor}, 0.9)`);
          nodeGradient.addColorStop(1, isActive ? platform.color.replace(')', ', 0.15)') : `${nodeBaseColor}, 0.95)`);
        } else {
          nodeGradient.addColorStop(0, isActive ? platform.color.replace(')', ', 0.15)') : `${nodeBaseColor}, 0.98)`);
          nodeGradient.addColorStop(1, isActive ? platform.color.replace(')', ', 0.08)') : `${nodeBaseColor}, 1)`);
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
        }
        
        ctx.strokeStyle = isActive 
          ? platform.color 
          : platform.color.replace(')', isDark ? ', 0.4)' : ', 0.5)');
        ctx.lineWidth = isActive ? 2.5 : 1.5;
        ctx.stroke();

        // Platform name
        ctx.save();
        const nameSize = isMobile ? (isActive ? 8 : 7) : (isActive ? 10 : 9);
        ctx.font = `600 ${nameSize}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = isActive ? `${textColor}, 1)` : `${textColor}, 0.85)`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(platform.name.toUpperCase(), platform.x, platform.y - 2);

        const catSize = isMobile ? 5 : 7;
        ctx.font = `400 ${catSize}px 'Inter', sans-serif`;
        ctx.fillStyle = isActive ? `${textColor}, 0.65)` : `${textColor}, 0.45)`;
        ctx.fillText(platform.category, platform.x, platform.y + 9);
        ctx.restore();
      });

      // Update and draw butterflies
      let restingButterfly: { platform: PlatformData; x: number; y: number } | null = null;
      
      butterfliesRef.current.forEach((butterfly) => {
        butterfly.wingAngle += butterfly.wingSpeed;
        
        if (butterfly.state === 'waiting') {
          // Float around center while spinning
          butterfly.x += Math.sin(butterfly.wingAngle * 0.3) * 0.8;
          butterfly.y += Math.cos(butterfly.wingAngle * 0.2) * 0.4;
          butterfly.angle = Math.sin(butterfly.wingAngle * 0.1) * 0.3;
          
          // When spinning stops, pick a target
          if (!isSpinning) {
            const targetIdx = Math.floor(Math.random() * platformsRef.current.length);
            butterfly.targetPlatform = targetIdx;
            butterfly.color = platformsRef.current[targetIdx].color;
            butterfly.state = 'flying';
          }
        } else if (butterfly.state === 'flying') {
          const targetPlatform = platformsRef.current[butterfly.targetPlatform];
          butterfly.targetX = targetPlatform.x;
          butterfly.targetY = targetPlatform.y - targetPlatform.radius - 15;
          
          const dx = butterfly.targetX - butterfly.x;
          const dy = butterfly.targetY - butterfly.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          butterfly.angle = Math.atan2(dy, dx) + Math.PI / 2;
          
          if (distance < 10) {
            butterfly.state = 'landing';
          } else {
            const speed = 1.2;
            butterfly.vx += (dx / distance) * speed * 0.12;
            butterfly.vy += (dy / distance) * speed * 0.12;
            butterfly.vx *= 0.94;
            butterfly.vy *= 0.94;
            butterfly.x += butterfly.vx + Math.sin(butterfly.wingAngle * 0.5) * 0.6;
            butterfly.y += butterfly.vy + Math.cos(butterfly.wingAngle * 0.3) * 0.4;
          }
        } else if (butterfly.state === 'landing') {
          const targetPlatform = platformsRef.current[butterfly.targetPlatform];
          butterfly.x = targetPlatform.x;
          butterfly.y = targetPlatform.y - targetPlatform.radius - 15;
          butterfly.vx = 0;
          butterfly.vy = 0;
          butterfly.angle = 0;
          butterfly.state = 'resting';
          butterfly.restTimer = 200 + Math.random() * 150; // 3-6 seconds
        } else if (butterfly.state === 'resting') {
          const targetPlatform = platformsRef.current[butterfly.targetPlatform];
          butterfly.restTimer--;
          butterfly.x = targetPlatform.x + Math.sin(butterfly.wingAngle * 0.1) * 1.5;
          butterfly.y = targetPlatform.y - targetPlatform.radius - 15;
          
          restingButterfly = { platform: targetPlatform, x: butterfly.x, y: butterfly.y - 25 };
          
          if (butterfly.restTimer <= 0) {
            if (isSpinning) {
              // Go back to waiting/flying around center
              butterfly.state = 'waiting';
              butterfly.targetX = centerX;
              butterfly.targetY = centerY - 80;
            } else {
              // Pick new target
              let newTarget = Math.floor(Math.random() * platformsRef.current.length);
              while (newTarget === butterfly.targetPlatform && platformsRef.current.length > 1) {
                newTarget = Math.floor(Math.random() * platformsRef.current.length);
              }
              butterfly.targetPlatform = newTarget;
              butterfly.color = platformsRef.current[newTarget].color;
              butterfly.state = 'flying';
            }
          }
        }
        
        drawButterfly(ctx, butterfly, textColor);
      });

      // Update popup state
      if (restingButterfly && !isSpinning) {
        setButterflyPlatform(restingButterfly.platform);
        setPopupPosition({ x: restingButterfly.x, y: restingButterfly.y });
      } else {
        setButterflyPlatform(null);
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
    if (platform) {
      setHoveredPlatform(platform.id);
      setIsSpinning(false);
    } else {
      setHoveredPlatform(null);
    }
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
    } else {
      // Click on empty space toggles spin
      setIsSpinning(prev => !prev);
    }
  }, [handlePlatformClick]);

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
    if (hoveredPlatform) {
      const platform = platformsRef.current.find(p => p.id === hoveredPlatform);
      if (platform) handlePlatformClick(platform);
    }
    interactionRef.current.active = false;
    setHoveredPlatform(null);
  }, [hoveredPlatform, handlePlatformClick]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]"
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
        aria-label="Ecosystem canvas - Use arrow keys to navigate between platforms, Enter to select, S to toggle spin, Escape to resume spinning"
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