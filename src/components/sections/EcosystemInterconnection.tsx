import { useState, useEffect } from 'react';
import { Brain, ShieldCheck, Users, Settings, Boxes, Building2, GraduationCap, FlaskConical } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const platforms = [
  { id: 'cognix', name: 'Cognix', icon: Brain, color: 'hsl(220, 70%, 55%)', angle: 0 },
  { id: 'qualyx', name: 'Qualyx', icon: ShieldCheck, color: 'hsl(175, 60%, 45%)', angle: 45 },
  { id: 'traceflow', name: 'TraceFlow', icon: Boxes, color: 'hsl(200, 70%, 50%)', angle: 90 },
  { id: 'originx', name: 'OriginX', icon: FlaskConical, color: 'hsl(25, 75%, 52%)', angle: 135 },
  { id: 'zenith-studio', name: 'Zenith Studio', icon: Building2, color: 'hsl(280, 55%, 55%)', angle: 180 },
  { id: 'zenith-institute', name: 'Zenith Institute', icon: GraduationCap, color: 'hsl(145, 55%, 45%)', angle: 225 },
  { id: 'huminex', name: 'Huminex', icon: Users, color: 'hsl(340, 65%, 55%)', angle: 270 },
  { id: 'opzenix', name: 'OpZeniX', icon: Settings, color: 'hsl(260, 60%, 58%)', angle: 315 },
];

const dataFlows = [
  { from: 'cognix', to: 'qualyx', label: 'Code Intelligence' },
  { from: 'qualyx', to: 'opzenix', label: 'Quality Metrics' },
  { from: 'opzenix', to: 'traceflow', label: 'Deployment Data' },
  { from: 'traceflow', to: 'originx', label: 'Analytics' },
  { from: 'originx', to: 'zenith-studio', label: 'AI Models' },
  { from: 'zenith-studio', to: 'zenith-institute', label: 'Content' },
  { from: 'zenith-institute', to: 'huminex', label: 'Learning Paths' },
  { from: 'huminex', to: 'cognix', label: 'Workforce Data' },
];

const EcosystemInterconnection = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlow(prev => (prev + 1) % dataFlows.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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

  const getPlatformIndex = (id: string) => platforms.findIndex(p => p.id === id);

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
            All 8 platforms share data, insights, and intelligence through a unified integration layer
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Visualization */}
          <div 
            className={`relative flex-shrink-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative w-[320px] sm:w-[400px] h-[320px] sm:h-[400px]">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
                style={{ transform: 'scale(1)' }}
              >
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
                  const isActive = index === activeFlow;

                  return (
                    <g key={`${flow.from}-${flow.to}`}>
                      {/* Base line */}
                      <line
                        x1={fromPos.x}
                        y1={fromPos.y}
                        x2={toPos.x}
                        y2={toPos.y}
                        stroke="hsl(var(--border) / 0.2)"
                        strokeWidth="1"
                      />
                      {/* Animated line */}
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
                      isHovered || isInActiveFlow ? 'z-20 scale-110' : 'z-10'
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
                        isHovered || isInActiveFlow ? 'shadow-lg' : ''
                      }`}
                      style={{
                        background: isHovered || isInActiveFlow 
                          ? platform.color 
                          : `linear-gradient(135deg, ${platform.color.replace(')', ' / 0.2)')}, hsl(var(--card) / 0.8))`,
                        borderColor: isHovered || isInActiveFlow 
                          ? platform.color 
                          : `${platform.color.replace(')', ' / 0.3)')}`,
                        boxShadow: isHovered || isInActiveFlow 
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
                      className={`mt-1 text-[8px] sm:text-[9px] font-medium text-center whitespace-nowrap transition-colors ${
                        isHovered || isInActiveFlow ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {platform.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Flow Info */}
          <div 
            className={`flex-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="p-6 sm:p-8 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Live Data Flow
                </span>
              </div>

              <div className="space-y-4">
                {dataFlows.map((flow, index) => {
                  const fromPlatform = platforms.find(p => p.id === flow.from);
                  const toPlatform = platforms.find(p => p.id === flow.to);
                  const isActive = index === activeFlow;

                  if (!fromPlatform || !toPlatform) return null;

                  return (
                    <div
                      key={`flow-${index}`}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/5 border-primary/30 scale-[1.02]' 
                          : 'bg-muted/20 border-border/20'
                      }`}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ 
                          backgroundColor: `${fromPlatform.color.replace(')', ' / 0.15)')}`,
                        }}
                      >
                        <fromPlatform.icon 
                          className="w-3.5 h-3.5" 
                          style={{ color: fromPlatform.color }} 
                        />
                      </div>
                      
                      <div className="flex-1 flex items-center gap-2">
                        <span className="text-[10px] font-medium text-foreground">{fromPlatform.name}</span>
                        <div className="flex-1 flex items-center gap-1">
                          <div className="flex-1 h-px bg-border/50" />
                          {isActive && (
                            <div 
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ backgroundColor: fromPlatform.color }}
                            />
                          )}
                          <div className="flex-1 h-px bg-border/50" />
                        </div>
                        <span className="text-[10px] font-medium text-foreground">{toPlatform.name}</span>
                      </div>

                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ 
                          backgroundColor: `${toPlatform.color.replace(')', ' / 0.15)')}`,
                        }}
                      >
                        <toPlatform.icon 
                          className="w-3.5 h-3.5" 
                          style={{ color: toPlatform.color }} 
                        />
                      </div>

                      <span 
                        className={`text-[9px] px-2 py-0.5 rounded-full font-mono transition-all ${
                          isActive 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-muted/30 text-muted-foreground'
                        }`}
                      >
                        {flow.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-foreground">8</p>
                    <p className="text-[9px] text-muted-foreground uppercase">Platforms</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-foreground">24/7</p>
                    <p className="text-[9px] text-muted-foreground uppercase">Sync</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-foreground">1</p>
                    <p className="text-[9px] text-muted-foreground uppercase">Unified API</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemInterconnection;
