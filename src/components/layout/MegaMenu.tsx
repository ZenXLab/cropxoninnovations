import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  external?: boolean;
  color: string;
}

const ecosystemPlatforms: Platform[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    category: 'Intelligence Layer',
    description: 'Enterprise cognition and decision systems',
    href: 'https://cognix.cropxon.com',
    external: true,
    color: 'hsl(220, 70%, 50%)',
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    category: 'Operations',
    description: 'Intelligent operations management platform',
    href: 'https://opzenix.com',
    external: true,
    color: 'hsl(260, 60%, 55%)',
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    category: 'Quality Systems',
    description: 'Quality assurance and compliance engine',
    href: 'https://qualyx.cropxon.com',
    external: true,
    color: 'hsl(180, 55%, 45%)',
  },
  {
    id: 'huminex',
    name: 'Huminex',
    category: 'Human Systems',
    description: 'Workforce intelligence and management',
    href: 'https://huminex.cropxon.com',
    external: true,
    color: 'hsl(340, 60%, 50%)',
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    category: 'Traceability',
    description: 'End-to-end supply chain traceability',
    href: 'https://traceflow.cropxon.com',
    external: true,
    color: 'hsl(200, 65%, 48%)',
  },
  {
    id: 'zenith-core',
    name: 'Zenith Core',
    category: 'Foundation',
    description: 'Core infrastructure and platform services',
    href: 'https://zenith.cropxon.com',
    external: true,
    color: 'hsl(280, 55%, 50%)',
  },
  {
    id: 'zenith-institute',
    name: 'Zenith Institute',
    category: 'Education',
    description: 'Industry-backed engineering education',
    href: '/zenith-institute',
    external: false,
    color: 'hsl(150, 50%, 45%)',
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    category: 'Research',
    description: 'Experimental research and innovation lab',
    href: 'https://originxlabs.com',
    external: true,
    color: 'hsl(30, 70%, 50%)',
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed left-0 right-0 top-[56px] z-50 bg-[#0a0a0f]/98 backdrop-blur-xl border-b border-border/10"
      style={{
        animation: 'megaMenuIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseLeave={onClose}
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Cursor glow effect */}
      <div
        className="absolute w-[300px] h-[300px] pointer-events-none rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xs font-medium text-muted-foreground/70 tracking-[0.2em] uppercase mb-1">
              Technology Ecosystem
            </h2>
            <p className="text-sm text-muted-foreground/50">
              Foundational platforms for enterprise infrastructure
            </p>
          </div>
          
          <Link
            to="/platforms"
            onClick={onClose}
            className="text-xs font-medium text-muted-foreground hover:text-foreground tracking-wider uppercase transition-colors flex items-center gap-2"
          >
            View All Platforms
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-4 gap-4">
          {ecosystemPlatforms.map((platform, index) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              index={index}
              isHovered={hoveredPlatform === platform.id}
              onHover={() => setHoveredPlatform(platform.id)}
              onLeave={() => setHoveredPlatform(null)}
              onClose={onClose}
            />
          ))}
        </div>

        {/* Connection lines visualization */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: -1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        @keyframes megaMenuIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

interface PlatformCardProps {
  platform: Platform;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClose: () => void;
}

const PlatformCard = ({ 
  platform, 
  index, 
  isHovered, 
  onHover, 
  onLeave,
  onClose 
}: PlatformCardProps) => {
  const baseClassName = "group relative p-5 rounded-lg border border-border/10 hover:border-border/30 bg-background/30 hover:bg-background/50 transition-all duration-300";
  const baseStyle = {
    animationDelay: `${index * 40}ms`,
    animation: 'cardFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    opacity: 0,
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
  };

  const CardContent = (
    <>
      {/* Color indicator */}
      <div
        className="absolute top-5 right-5 w-2 h-2 rounded-full transition-transform duration-300"
        style={{
          backgroundColor: platform.color,
          boxShadow: isHovered ? `0 0 12px ${platform.color}` : 'none',
          transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        }}
      />

      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-medium text-muted-foreground/60 tracking-[0.15em] uppercase">
          {platform.category}
        </span>
        
        <h3 className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors tracking-wide">
          {platform.name}
        </h3>
        
        <p className="text-xs text-muted-foreground/60 leading-relaxed">
          {platform.description}
        </p>
      </div>

      {/* External indicator */}
      {platform.external && (
        <ArrowUpRight 
          className="absolute bottom-4 right-4 w-3 h-3 text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
        />
      )}

      <style>{`
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );

  if (platform.external) {
    return (
      <a
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
        style={baseStyle}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClose}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link
      to={platform.href}
      className={baseClassName}
      style={baseStyle}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClose}
    >
      {CardContent}
    </Link>
  );
};

export default MegaMenu;
