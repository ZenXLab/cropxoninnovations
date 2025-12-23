import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ShieldCheck, Users, Settings, Boxes, Building2, GraduationCap, FlaskConical, Check, Minus, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const platforms = [
  { id: 'cognix', name: 'Cognix', icon: Brain, color: 'hsl(220, 70%, 55%)', link: '/cognix', status: 'Idea & Locked' },
  { id: 'qualyx', name: 'Qualyx', icon: ShieldCheck, color: 'hsl(175, 60%, 45%)', link: '/qualyx', status: 'Idea & Locked' },
  { id: 'huminex', name: 'Huminex', icon: Users, color: 'hsl(340, 65%, 55%)', link: '/huminex', status: 'Idea & Locked' },
  { id: 'opzenix', name: 'OpZeniX', icon: Settings, color: 'hsl(260, 60%, 58%)', link: '/opzenix', status: 'Development' },
  { id: 'traceflow', name: 'TraceFlow', icon: Boxes, color: 'hsl(200, 70%, 50%)', link: '/traceflow', status: 'LIVE' },
  { id: 'zenith-studio', name: 'Zenith Studio', icon: Building2, color: 'hsl(280, 55%, 55%)', link: '/zenith-studio', status: 'LIVE · MVP' },
  { id: 'zenith-institute', name: 'Zenith Institute', icon: GraduationCap, color: 'hsl(145, 55%, 45%)', link: '/zenith-institute', status: 'LIVE · MVP' },
  { id: 'originx-labs', name: 'OriginX Labs', icon: FlaskConical, color: 'hsl(25, 75%, 52%)', link: '/originx-labs', status: 'LIVE' },
];

const features = [
  { name: 'AI-Powered', values: [true, true, true, true, true, true, false, true] },
  { name: 'Real-time Analytics', values: [true, true, true, true, true, true, true, true] },
  { name: 'Enterprise Ready', values: [true, true, true, true, true, true, true, true] },
  { name: 'API Access', values: [true, true, true, true, true, true, false, true] },
  { name: 'Multi-tenant', values: [false, false, true, true, true, true, true, false] },
  { name: 'Compliance Tools', values: [true, true, true, true, true, false, true, false] },
  { name: 'Custom Integrations', values: [true, true, true, true, true, true, false, true] },
  { name: 'White-label', values: [false, false, false, false, false, true, true, false] },
];

const PlatformComparisonTable = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div
          ref={ref}
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-3 sm:mb-4">
            Platform Comparison
          </p>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
            Compare All Platforms
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore features across all 8 Cropxon ecosystem platforms
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="min-w-[900px] bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-9 gap-px bg-border/20">
              <div className="p-4 bg-card/80 font-display text-sm font-semibold text-foreground">
                Features
              </div>
              {platforms.map((platform) => {
                const Icon = platform.icon;
                const isHovered = hoveredPlatform === platform.id;
                return (
                  <div
                    key={platform.id}
                    className={`p-3 bg-card/80 transition-all duration-300 cursor-pointer ${isHovered ? 'bg-primary/5' : ''}`}
                    onMouseEnter={() => setHoveredPlatform(platform.id)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                  >
                    <Link to={platform.link} className="flex flex-col items-center gap-2 group">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
                        style={{ backgroundColor: isHovered ? platform.color : `${platform.color.replace(')', ' / 0.15)')}` }}
                      >
                        <Icon className={`w-4 h-4 ${isHovered ? 'text-white' : ''}`} style={{ color: isHovered ? 'white' : platform.color }} />
                      </div>
                      <span className="text-[10px] font-medium text-center text-foreground group-hover:text-primary transition-colors">
                        {platform.name}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <div key={feature.name} className={`grid grid-cols-9 gap-px ${index % 2 === 0 ? 'bg-muted/10' : 'bg-transparent'}`}>
                <div className="p-3 bg-card/40 text-xs text-muted-foreground font-medium">
                  {feature.name}
                </div>
                {feature.values.map((value, i) => (
                  <div
                    key={i}
                    className={`p-3 bg-card/40 flex items-center justify-center transition-all duration-300 ${
                      hoveredPlatform === platforms[i].id ? 'bg-primary/5' : ''
                    }`}
                    onMouseEnter={() => setHoveredPlatform(platforms[i].id)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                  >
                    {value ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Minus className="w-4 h-4 text-muted-foreground/30" />
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Status Row */}
            <div className="grid grid-cols-9 gap-px bg-border/20 mt-px">
              <div className="p-3 bg-card/80 text-xs font-semibold text-foreground">
                Status
              </div>
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className={`p-3 bg-card/80 flex items-center justify-center transition-all duration-300 ${
                    hoveredPlatform === platform.id ? 'bg-primary/5' : ''
                  }`}
                  onMouseEnter={() => setHoveredPlatform(platform.id)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  <span
                    className="text-[9px] px-2 py-0.5 rounded-full font-mono"
                    style={{
                      backgroundColor: platform.status.includes('LIVE') ? 'hsl(145 70% 45% / 0.15)' : 
                                       platform.status === 'Development' ? 'hsl(45 90% 50% / 0.15)' : 'hsl(220 15% 50% / 0.15)',
                      color: platform.status.includes('LIVE') ? 'hsl(145, 70%, 45%)' : 
                             platform.status === 'Development' ? 'hsl(45, 90%, 50%)' : 'hsl(220, 15%, 50%)',
                    }}
                  >
                    {platform.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="grid grid-cols-9 gap-px">
              <div className="p-3 bg-card/60" />
              {platforms.map((platform) => (
                <div key={platform.id} className="p-3 bg-card/60 flex items-center justify-center">
                  <Button variant="ghost" size="sm" className="text-[10px] h-7 group" asChild>
                    <Link to={platform.link}>
                      Learn More
                      <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const platformFeatures = features.filter((f, i) => f.values[platforms.findIndex(p => p.id === platform.id)]);
            
            return (
              <Link
                key={platform.id}
                to={platform.link}
                className="p-4 bg-card/60 backdrop-blur-xl rounded-xl border border-border/40 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${platform.color.replace(')', ' / 0.15)')}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{platform.name}</h3>
                    <span
                      className="text-[9px] px-2 py-0.5 rounded-full font-mono"
                      style={{
                        backgroundColor: platform.status.includes('LIVE') ? 'hsl(145 70% 45% / 0.15)' : 
                                         platform.status === 'Development' ? 'hsl(45 90% 50% / 0.15)' : 'hsl(220 15% 50% / 0.15)',
                        color: platform.status.includes('LIVE') ? 'hsl(145, 70%, 45%)' : 
                               platform.status === 'Development' ? 'hsl(45, 90%, 50%)' : 'hsl(220, 15%, 50%)',
                      }}
                    >
                      {platform.status}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {features.slice(0, 4).map((f, i) => (
                    f.values[platforms.findIndex(p => p.id === platform.id)] && (
                      <span key={f.name} className="text-[9px] px-2 py-0.5 bg-muted/50 rounded-full text-muted-foreground">
                        {f.name}
                      </span>
                    )
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformComparisonTable;
