import { useEffect, useState, useRef } from "react";

const SurveillanceDrone = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [targetPosition, setTargetPosition] = useState({ x: 100, y: 100 });
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      // Drone follows at an offset, like it's observing from a distance
      setTargetPosition({
        x: e.clientX + 80,
        y: e.clientY - 60,
      });
    };

    const handleScroll = () => {
      // Add slight movement on scroll to simulate surveillance
      setTargetPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 20,
        y: prev.y + (Math.random() - 0.5) * 10,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition(prev => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        
        // Calculate rotation based on movement direction
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation(angle * 0.1); // Subtle tilt
        
        // Smooth easing - drone moves slowly and smoothly
        return {
          x: prev.x + dx * 0.03,
          y: prev.y + dy * 0.03,
        };
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPosition]);

  // Keep drone within viewport bounds
  const boundedX = Math.max(40, Math.min(position.x, window.innerWidth - 40));
  const boundedY = Math.max(40, Math.min(position.y, window.innerHeight - 40));

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-500"
      style={{
        left: boundedX,
        top: boundedY,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Drone SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        className={`drop-shadow-lg transition-all duration-300 ${isHovering ? 'scale-110' : ''}`}
      >
        {/* Main Body */}
        <ellipse 
          cx="32" 
          cy="32" 
          rx="8" 
          ry="5" 
          className="fill-foreground/80"
        />
        
        {/* Camera Lens */}
        <circle 
          cx="32" 
          cy="34" 
          r="3" 
          className="fill-primary"
        >
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Camera Lens Inner Glow */}
        <circle 
          cx="32" 
          cy="34" 
          r="1.5" 
          className="fill-primary-foreground"
        />
        
        {/* Arms */}
        <line x1="24" y1="32" x2="12" y2="24" className="stroke-foreground/70" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="32" x2="52" y2="24" className="stroke-foreground/70" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="32" x2="12" y2="40" className="stroke-foreground/70" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="32" x2="52" y2="40" className="stroke-foreground/70" strokeWidth="2" strokeLinecap="round" />
        
        {/* Rotors - Top Left */}
        <g className="origin-center" style={{ transformOrigin: '12px 24px' }}>
          <ellipse cx="12" cy="24" rx="6" ry="2" className="fill-foreground/40">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 12 24"
              to="360 12 24"
              dur="0.15s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        {/* Rotors - Top Right */}
        <g style={{ transformOrigin: '52px 24px' }}>
          <ellipse cx="52" cy="24" rx="6" ry="2" className="fill-foreground/40">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 52 24"
              to="-360 52 24"
              dur="0.15s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        {/* Rotors - Bottom Left */}
        <g style={{ transformOrigin: '12px 40px' }}>
          <ellipse cx="12" cy="40" rx="6" ry="2" className="fill-foreground/40">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 12 40"
              to="-360 12 40"
              dur="0.15s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        {/* Rotors - Bottom Right */}
        <g style={{ transformOrigin: '52px 40px' }}>
          <ellipse cx="52" cy="40" rx="6" ry="2" className="fill-foreground/40">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 52 40"
              to="360 52 40"
              dur="0.15s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        
        {/* LED Indicators */}
        <circle cx="28" cy="30" r="1" className="fill-green-500">
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="36" cy="30" r="1" className="fill-red-500">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      
      {/* Subtle shadow/glow underneath */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-1 bg-foreground/10 rounded-full blur-sm"
        style={{
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default SurveillanceDrone;
