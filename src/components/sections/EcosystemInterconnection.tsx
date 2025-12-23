import { useState, useEffect } from 'react';
import { Brain, ShieldCheck, Users, Settings, Boxes, Building2, GraduationCap, FlaskConical } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PlatformDashboard } from './PlatformDashboard';

const platforms = [
  { id: 'cognix', name: 'Cognix', icon: Brain, color: 'hsl(220, 70%, 55%)', angle: 0 },
  { id: 'qualyx', name: 'Qualyx', icon: ShieldCheck, color: 'hsl(175, 60%, 45%)', angle: 45 },
  { id: 'traceflow', name: 'TraceFlow', icon: Boxes, color: 'hsl(200, 70%, 50%)', angle: 90 },
  { id: 'originx-labs', name: 'OriginX', icon: FlaskConical, color: 'hsl(25, 75%, 52%)', angle: 135 },
  { id: 'zenith-core', name: 'Zenith Studio', icon: Building2, color: 'hsl(280, 55%, 55%)', angle: 180 },
  { id: 'zenith-institute', name: 'Zenith Institute', icon: GraduationCap, color: 'hsl(145, 55%, 45%)', angle: 225 },
  { id: 'huminex', name: 'Huminex', icon: Users, color: 'hsl(340, 65%, 55%)', angle: 270 },
  { id: 'opzenix', name: 'OpZeniX', icon: Settings, color: 'hsl(260, 60%, 58%)', angle: 315 },
];

const dataFlows = [
  { from: 'cognix', to: 'qualyx', label: 'Code Intelligence' },
  { from: 'qualyx', to: 'opzenix', label: 'Quality Metrics' },
  { from: 'opzenix', to: 'traceflow', label: 'Deployment Data' },
  { from: 'traceflow', to: 'originx-labs', label: 'Analytics' },
  { from: 'originx-labs', to: 'zenith-core', label: 'AI Models' },
  { from: 'zenith-core', to: 'zenith-institute', label: 'Content' },
  { from: 'zenith-institute', to: 'huminex', label: 'Learning Paths' },
  { from: 'huminex', to: 'cognix', label: 'Workforce Data' },
];

const EcosystemInterconnection = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    if (!hoveredPlatform) {
      const timer = setInterval(() => {
        setActiveFlow(prev => (prev + 1) % dataFlows.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [hoveredPlatform]);

  const radius = 140;
  const centerX = 200;
  const centerY = 200;

  const getPosition = (angle: number) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    };
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div
          ref={ref}
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-3 sm:mb-4">
            Unified Intelligence
          </p>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
            Ecosystem Interconnection
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Hover over any platform node to see its live dashboard preview
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Spinner Visualization */}
          <div 
            className={`relative flex-shrink-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative w-[320px] sm:w-[400px] h-[320px] sm:h-[400px]">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius + 20}
                  fill="none"
                  stroke="hsl(var(--border) / 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                
                {/* Inner ring */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius - 30}
                  fill="none"
                  stroke="hsl(var(--border) / 0.2)"
                  strokeWidth="1"
                />

                {/* Connection lines */}
                {dataFlows.map((flow, index) => {
                  const fromPlatform = platforms.find(p => p.id === flow.from);
                  const toPlatform = platforms.find(p => p.id === flow.to);
                  if (!fromPlatform || !toPlatform) return null;

                  const fromPos = getPosition(fromPlatform.angle);
                  const toPos = getPosition(toPlatform.angle);
                  const isActive = index === activeFlow || hoveredPlatform === flow.from || hoveredPlatform === flow.to;

                  return (
                    <g key={`${flow.from}-${flow.to}`}>
                      <line
                        x1={fromPos.x}
                        y1={fromPos.y}
                        x2={toPos.x}
                        y2={toPos.y}
                        stroke="hsl(var(--border) / 0.2)"
                        strokeWidth="1"
                      />
                      {isActive && (
                        <line
                          x1={fromPos.x}
                          y1={fromPos.y}
                          x2={toPos.x}
                          y2={toPos.y}
                          stroke={fromPlatform.color}
                          strokeWidth="2"
                          className="animate-pulse"
                          style={{ opacity: 0.8 }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Center hub */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="35"
                  fill="hsl(var(--card))"
                  stroke="hsl(var(--primary) / 0.5)"
                  strokeWidth="2"
                />
                <text
                  x={centerX}
                  y={centerY - 5}
                  textAnchor="middle"
                  fill="hsl(var(--foreground))"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="system-ui"
                >
                  CROPXON
                </text>
                <text
                  x={centerX}
                  y={centerY + 8}
                  textAnchor="middle"
                  fill="hsl(var(--muted-foreground))"
                  fontSize="7"
                  fontFamily="monospace"
                >
                  DATA HUB
                </text>
              </svg>

              {/* Platform nodes */}
              {platforms.map((platform) => {
                const Icon = platform.icon;
                const pos = getPosition(platform.angle);
                const isHovered = hoveredPlatform === platform.id;
                const isInActiveFlow = dataFlows[activeFlow]?.from === platform.id || dataFlows[activeFlow]?.to === platform.id;

                return (
                  <div
                    key={platform.id}
                    className={`absolute flex flex-col items-center transition-all duration-300 cursor-pointer ${
                      isHovered ? 'z-20 scale-125' : isInActiveFlow ? 'z-15 scale-110' : 'z-10'
                    }`}
                    style={{
                      left: `${(pos.x / 400) * 100}%`,
                      top: `${(pos.y / 400) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredPlatform(platform.id)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border transition-all duration-300 ${
                        isHovered ? 'shadow-xl ring-2 ring-offset-2 ring-offset-background ring-primary' : isInActiveFlow ? 'shadow-lg' : ''
                      }`}
                      style={{
                        background: isHovered || isInActiveFlow 
                          ? platform.color 
                          : `linear-gradient(135deg, ${platform.color.replace(')', ' / 0.2)')}, hsl(var(--card) / 0.8))`,
                        borderColor: isHovered || isInActiveFlow 
                          ? platform.color 
                          : `${platform.color.replace(')', ' / 0.3)')}`,
                        boxShadow: isHovered 
                          ? `0 12px 40px ${platform.color.replace(')', ' / 0.5)')}` 
                          : isInActiveFlow 
                            ? `0 8px 32px ${platform.color.replace(')', ' / 0.4)')}`
                            : 'none',
                      }}
                    >
                      <Icon 
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                          isHovered || isInActiveFlow ? 'text-white' : ''
                        }`} 
                        style={{ color: isHovered || isInActiveFlow ? 'white' : platform.color }}
                      />
                    </div>
                    <span 
                      className={`mt-1 text-[8px] sm:text-[9px] font-medium text-center whitespace-nowrap transition-all ${
                        isHovered ? 'text-foreground font-semibold' : isInActiveFlow ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {platform.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Dashboard Preview */}
          <div 
            className={`flex-1 min-w-0 h-[400px] sm:h-[450px] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <PlatformDashboard 
              platformId={hoveredPlatform || platforms[activeFlow % platforms.length]?.id || 'cognix'} 
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div 
          className={`mt-10 pt-8 border-t border-border/20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">8</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Platforms</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">24/7</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Live Sync</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">1</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Unified API</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">∞</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Data Flow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemInterconnection;
