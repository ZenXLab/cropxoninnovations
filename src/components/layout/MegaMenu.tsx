import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Settings, ShieldCheck, Users, Boxes, GraduationCap, FlaskConical, Building2, Zap, Clock, RefreshCw, Wallet } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  external?: boolean;
  color: string;
  icon: React.ElementType;
}

const ecosystemPlatforms: Platform[] = [
  {
    id: 'cognix',
    name: 'Cognix',
    category: 'Intelligence Layer',
    description: 'Enterprise cognition and AI-powered decision systems for intelligent automation',
    href: 'https://cognix.cropxon.com',
    external: true,
    color: 'hsl(220, 70%, 55%)',
    icon: Cpu,
  },
  {
    id: 'opzenix',
    name: 'OpZeniX',
    category: 'Operations Management',
    description: 'End-to-end operational excellence with real-time insights and workflow optimization',
    href: 'https://opzenix.com',
    external: true,
    color: 'hsl(260, 60%, 58%)',
    icon: Settings,
  },
  {
    id: 'qualyx',
    name: 'Qualyx',
    category: 'Quality & Compliance',
    description: 'Comprehensive quality assurance and regulatory compliance management engine',
    href: 'https://qualyx.cropxon.com',
    external: true,
    color: 'hsl(175, 60%, 45%)',
    icon: ShieldCheck,
  },
  {
    id: 'huminex',
    name: 'Huminex',
    category: 'Human Capital',
    description: 'Strategic workforce intelligence, talent management and employee experience',
    href: 'https://huminex.cropxon.com',
    external: true,
    color: 'hsl(340, 65%, 55%)',
    icon: Users,
  },
  {
    id: 'traceflow',
    name: 'TraceFlow',
    category: 'Supply Chain',
    description: 'Complete supply chain visibility with blockchain-backed traceability',
    href: 'https://traceflow.cropxon.com',
    external: true,
    color: 'hsl(200, 70%, 50%)',
    icon: Boxes,
  },
  {
    id: 'zenith-core',
    name: 'Zenith Studio',
    category: 'Enterprise Foundation',
    description: 'Secure, scalable core infrastructure powering all platform services',
    href: 'https://zenith.cropxon.com',
    external: true,
    color: 'hsl(280, 55%, 55%)',
    icon: Building2,
  },
  {
    id: 'stackcraft',
    name: 'StackCraft',
    category: 'Engineering Knowledge',
    description: 'Production-grade software engineering learning — playbooks, paths, and AI-assisted education',
    href: '/stackcraft',
    external: false,
    color: 'hsl(145, 55%, 45%)',
    icon: GraduationCap,
  },
  {
    id: 'originx-labs',
    name: 'OriginX Labs',
    category: 'Innovation & R&D',
    description: 'Cutting-edge research lab driving next-generation technology breakthroughs',
    href: 'https://originxlabs.com',
    external: true,
    color: 'hsl(25, 75%, 52%)',
    icon: FlaskConical,
  },
  {
    id: 'proxinex',
    name: 'Proxinex',
    category: 'AI Control Intelligence',
    description: 'Route queries to the best AI models with cost transparency and answer verification',
    href: '/proxinex',
    external: false,
    color: 'hsl(45, 85%, 50%)',
    icon: Zap,
  },
  {
    id: 'chronyx',
    name: 'Chronyx',
    category: 'Personal Space',
    description: 'Personal quiet space for todos, finance, notes, memories and life management',
    href: '/chronyx',
    external: false,
    color: 'hsl(190, 70%, 50%)',
    icon: Clock,
  },
  {
    id: 'convertix',
    name: 'Convertix',
    category: 'Conversion Studio',
    description: 'All-in-one conversion tools for PDF, documents, images, and media files',
    href: '/convertix',
    external: false,
    color: 'hsl(320, 70%, 55%)',
    icon: RefreshCw,
  },
  {
    id: 'finioraa',
    name: 'Finioraa',
    category: 'Financial Intelligence',
    description: 'Comprehensive financial management, analytics, and business intelligence',
    href: '/finioraa',
    external: false,
    color: 'hsl(130, 65%, 45%)',
    icon: Wallet,
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
      className="fixed left-0 right-0 top-[56px] z-50 bg-card/98 backdrop-blur-xl border-b border-border/30"
      style={{
        animation: 'megaMenuIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseLeave={onClose}
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Cursor glow effect */}
      <div
        className="absolute w-[350px] h-[350px] pointer-events-none rounded-full opacity-15 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)',
          left: mousePosition.x - 175,
          top: mousePosition.y - 175,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 py-8 sm:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-sm font-semibold text-foreground tracking-wide mb-1">
              Enterprise Ecosystem
            </h2>
            <p className="text-xs text-muted-foreground">
              Integrated platforms powering modern enterprise infrastructure
            </p>
          </div>
          
          <Link
            to="/platforms"
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground tracking-wide uppercase transition-all hover:bg-muted/50 rounded-lg border border-transparent hover:border-border/30"
          >
            View All Platforms
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
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

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-border/20 flex items-center justify-between">
          <p className="text-xs text-muted-foreground/60">
            Need help choosing? <Link to="/contact" onClick={onClose} className="text-primary hover:text-primary/80 transition-colors">Talk to our team</Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/architecture"
              onClick={onClose}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Architecture Overview
            </Link>
            <Link
              to="/how-we-think"
              onClick={onClose}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes megaMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
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
  const Icon = platform.icon;
  
  const baseClassName = "group relative p-5 rounded-xl border border-border/20 hover:border-border/50 bg-background/60 hover:bg-muted/40 transition-all duration-300 overflow-hidden";
  const baseStyle = {
    animationDelay: `${index * 50}ms`,
    animation: 'cardFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    opacity: 0,
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
  };

  const CardContent = (
    <>
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${platform.color.replace(')', ', 0.05)')} 0%, transparent 60%)`,
        }}
      />
      
      {/* Icon and indicator */}
      <div className="flex items-start justify-between mb-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: isHovered ? platform.color.replace(')', ', 0.15)') : 'hsl(var(--muted) / 0.5)',
          }}
        >
          <Icon 
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isHovered ? platform.color : 'hsl(var(--muted-foreground))' }}
          />
        </div>
        
        <div
          className="w-2.5 h-2.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: platform.color,
            boxShadow: isHovered ? `0 0 12px ${platform.color}` : 'none',
            transform: isHovered ? 'scale(1.3)' : 'scale(1)',
          }}
        />
      </div>

      <div className="flex flex-col gap-1.5 relative z-10">
        <span className="font-display text-[10px] font-medium text-muted-foreground/70 tracking-[0.12em] uppercase">
          {platform.category}
        </span>
        
        <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-foreground transition-colors tracking-wide">
          {platform.name}
        </h3>
        
        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mt-0.5">
          {platform.description}
        </p>
      </div>

      {/* External indicator */}
      {platform.external && (
        <ArrowUpRight 
          className="absolute bottom-4 right-4 w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
        />
      )}

      <style>{`
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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