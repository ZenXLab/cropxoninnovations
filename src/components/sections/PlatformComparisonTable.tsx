import { Link } from 'react-router-dom';
import { Brain, ShieldCheck, Users, Settings, Boxes, Building2, GraduationCap, FlaskConical, Check, Minus, ArrowUpRight, Zap, Clock, RefreshCw, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const platforms = [
  { id: 'cognix', name: 'Cognix', shortName: 'CGX', icon: Brain, color: 'hsl(220, 70%, 55%)', link: '/cognix', status: 'Idea & Locked' },
  { id: 'qualyx', name: 'Qualyx', shortName: 'QLX', icon: ShieldCheck, color: 'hsl(175, 60%, 45%)', link: '/qualyx', status: 'Idea & Locked' },
  { id: 'huminex', name: 'Huminex', shortName: 'HMX', icon: Users, color: 'hsl(340, 65%, 55%)', link: '/huminex', status: 'Idea & Locked' },
  { id: 'opzenix', name: 'OpZeniX', shortName: 'OZX', icon: Settings, color: 'hsl(260, 60%, 58%)', link: '/opzenix', status: 'Development' },
  { id: 'traceflow', name: 'TraceFlow', shortName: 'TRF', icon: Boxes, color: 'hsl(200, 70%, 50%)', link: '/traceflow', status: 'LIVE' },
  { id: 'zenith-studio', name: 'Zenith Studio', shortName: 'ZST', icon: Building2, color: 'hsl(280, 55%, 55%)', link: '/zenith-studio', status: 'LIVE · MVP' },
  { id: 'zenith-institute', name: 'Zenith Inst.', shortName: 'ZIN', icon: GraduationCap, color: 'hsl(145, 55%, 45%)', link: '/zenith-institute', status: 'LIVE · MVP' },
  { id: 'originx-labs', name: 'OriginX Labs', shortName: 'OXL', icon: FlaskConical, color: 'hsl(25, 75%, 52%)', link: '/originx-labs', status: 'LIVE' },
  { id: 'proxinex', name: 'Proxinex', shortName: 'PXN', icon: Zap, color: 'hsl(280, 70%, 55%)', link: '/proxinex', status: 'NEW' },
  { id: 'chronyx', name: 'Chronyx', shortName: 'CRX', icon: Clock, color: 'hsl(175, 70%, 45%)', link: '/chronyx', status: 'NEW' },
  { id: 'convertix', name: 'Convertix', shortName: 'CVX', icon: RefreshCw, color: 'hsl(15, 80%, 55%)', link: '/convertix', status: 'NEW' },
  { id: 'finioraa', name: 'Finioraa', shortName: 'FNA', icon: Wallet, color: 'hsl(145, 65%, 42%)', link: '/finioraa', status: 'NEW' },
];

const features = [
  { name: 'AI-Powered', values: [true, true, true, true, true, true, false, true, true, true, true, true] },
  { name: 'Real-time Analytics', values: [true, true, true, true, true, true, true, true, true, true, false, true] },
  { name: 'Enterprise Ready', values: [true, true, true, true, true, true, true, true, true, false, true, true] },
  { name: 'API Access', values: [true, true, true, true, true, true, false, true, true, false, true, true] },
  { name: 'Multi-tenant', values: [false, false, true, true, true, true, true, false, false, false, false, false] },
  { name: 'Compliance Tools', values: [true, true, true, true, true, false, true, false, true, false, false, true] },
  { name: 'Custom Integrations', values: [true, true, true, true, true, true, false, true, true, true, true, true] },
  { name: 'White-label', values: [false, false, false, false, false, true, true, false, false, false, false, false] },
];

const PlatformComparisonTable = () => {
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
            Compare All 12 Platforms
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore features across the entire Cropxon ecosystem
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden xl:block overflow-x-auto">
          <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
            {/* Header */}
            <div className="border-b border-border/30">
              <div className="flex">
                <div className="w-40 flex-shrink-0 p-4 bg-card/80 font-display text-sm font-semibold text-foreground border-r border-border/20">
                  Features
                </div>
                <div className="flex-1 flex">
                  {platforms.map((platform, index) => {
                    const Icon = platform.icon;
                    return (
                      <div
                        key={platform.id}
                        className={`flex-1 min-w-[80px] p-3 bg-card/80 ${index !== platforms.length - 1 ? 'border-r border-border/20' : ''}`}
                      >
                        <Link to={platform.link} className="flex flex-col items-center gap-2 group">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-xl border border-border/30 transition-transform group-hover:scale-110"
                            style={{ 
                              background: `linear-gradient(135deg, ${platform.color.replace(')', ' / 0.15)')}, transparent)`,
                            }}
                          >
                            <Icon className="w-4 h-4" style={{ color: platform.color }} />
                          </div>
                          <span className="text-[9px] font-semibold text-center text-foreground group-hover:text-primary transition-colors leading-tight">
                            {platform.shortName}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, rowIndex) => (
              <div key={feature.name} className={`flex ${rowIndex % 2 === 0 ? 'bg-muted/5' : 'bg-transparent'} ${rowIndex !== features.length - 1 ? 'border-b border-border/10' : ''}`}>
                <div className="w-40 flex-shrink-0 p-3 text-xs text-muted-foreground font-medium border-r border-border/20 flex items-center">
                  {feature.name}
                </div>
                <div className="flex-1 flex">
                  {feature.values.map((value, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex-1 min-w-[80px] p-3 flex items-center justify-center ${colIndex !== platforms.length - 1 ? 'border-r border-border/10' : ''}`}
                    >
                      {value ? (
                        <div className="w-6 h-6 rounded-full bg-green-500/15 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center">
                          <Minus className="w-3.5 h-3.5 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Status Row */}
            <div className="flex border-t border-border/30 bg-card/60">
              <div className="w-40 flex-shrink-0 p-3 text-xs font-semibold text-foreground border-r border-border/20 flex items-center">
                Status
              </div>
              <div className="flex-1 flex">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.id}
                    className={`flex-1 min-w-[80px] p-3 flex items-center justify-center ${index !== platforms.length - 1 ? 'border-r border-border/10' : ''}`}
                  >
                    <span
                      className="text-[8px] px-1.5 py-0.5 rounded-full font-mono whitespace-nowrap"
                      style={{
                        backgroundColor: platform.status.includes('LIVE') ? 'hsl(145 70% 45% / 0.15)' : 
                                         platform.status === 'Development' ? 'hsl(45 90% 50% / 0.15)' :
                                         platform.status === 'NEW' ? 'hsl(280 70% 55% / 0.15)' : 'hsl(220 15% 50% / 0.15)',
                        color: platform.status.includes('LIVE') ? 'hsl(145, 70%, 45%)' : 
                               platform.status === 'Development' ? 'hsl(45, 90%, 50%)' :
                               platform.status === 'NEW' ? 'hsl(280, 70%, 55%)' : 'hsl(220, 15%, 50%)',
                      }}
                    >
                      {platform.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex border-t border-border/20">
              <div className="w-40 flex-shrink-0 p-3 border-r border-border/20" />
              <div className="flex-1 flex">
                {platforms.map((platform, index) => (
                  <div key={platform.id} className={`flex-1 min-w-[80px] p-2 flex items-center justify-center ${index !== platforms.length - 1 ? 'border-r border-border/10' : ''}`}>
                    <Button variant="ghost" size="sm" className="text-[9px] h-6 px-2 group" asChild>
                      <Link to={platform.link}>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Table (lg screens) */}
        <div className="hidden lg:block xl:hidden overflow-x-auto">
          <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 p-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left p-3 text-xs font-semibold text-foreground w-36">Feature</th>
                    {platforms.map((platform) => {
                      const Icon = platform.icon;
                      return (
                        <th key={platform.id} className="p-2 text-center min-w-[70px]">
                          <Link to={platform.link} className="flex flex-col items-center gap-1 group">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                              style={{ 
                                background: `linear-gradient(135deg, ${platform.color.replace(')', ' / 0.2)')}, transparent)`,
                              }}
                            >
                              <Icon className="w-4 h-4" style={{ color: platform.color }} />
                            </div>
                            <span className="text-[8px] font-semibold text-foreground">{platform.shortName}</span>
                          </Link>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, rowIndex) => (
                    <tr key={feature.name} className={rowIndex % 2 === 0 ? 'bg-muted/5' : ''}>
                      <td className="p-2 text-xs text-muted-foreground font-medium">{feature.name}</td>
                      {feature.values.map((value, colIndex) => (
                        <td key={colIndex} className="p-2 text-center">
                          {value ? (
                            <Check className="w-3.5 h-3.5 text-green-500 mx-auto" />
                          ) : (
                            <Minus className="w-3.5 h-3.5 text-muted-foreground/30 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-border/30">
                    <td className="p-2 text-xs font-semibold text-foreground">Status</td>
                    {platforms.map((platform) => (
                      <td key={platform.id} className="p-2 text-center">
                        <span
                          className="text-[7px] px-1 py-0.5 rounded-full font-mono"
                          style={{
                            backgroundColor: platform.status.includes('LIVE') ? 'hsl(145 70% 45% / 0.15)' : 
                                             platform.status === 'Development' ? 'hsl(45 90% 50% / 0.15)' :
                                             platform.status === 'NEW' ? 'hsl(280 70% 55% / 0.15)' : 'hsl(220 15% 50% / 0.15)',
                            color: platform.status.includes('LIVE') ? 'hsl(145, 70%, 45%)' : 
                                   platform.status === 'Development' ? 'hsl(45, 90%, 50%)' :
                                   platform.status === 'NEW' ? 'hsl(280, 70%, 55%)' : 'hsl(220, 15%, 50%)',
                          }}
                        >
                          {platform.status.split(' ')[0]}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-3">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const platformFeatures = features.filter((f, i) => 
              f.values[platforms.findIndex(p => p.id === platform.id)]
            );
            
            return (
              <Link
                key={platform.id}
                to={platform.link}
                className="p-4 bg-card/60 backdrop-blur-xl rounded-xl border border-border/40 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-xl border border-border/30 transition-transform group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${platform.color.replace(')', ' / 0.15)')}, transparent)`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: platform.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-bold text-foreground truncate">{platform.name}</h3>
                    <span
                      className="text-[9px] px-2 py-0.5 rounded-full font-mono inline-block mt-0.5"
                      style={{
                        backgroundColor: platform.status.includes('LIVE') ? 'hsl(145 70% 45% / 0.15)' : 
                                         platform.status === 'Development' ? 'hsl(45 90% 50% / 0.15)' :
                                         platform.status === 'NEW' ? 'hsl(280 70% 55% / 0.15)' : 'hsl(220 15% 50% / 0.15)',
                        color: platform.status.includes('LIVE') ? 'hsl(145, 70%, 45%)' : 
                               platform.status === 'Development' ? 'hsl(45, 90%, 50%)' :
                               platform.status === 'NEW' ? 'hsl(280, 70%, 55%)' : 'hsl(220, 15%, 50%)',
                      }}
                    >
                      {platform.status}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="flex flex-wrap gap-1">
                  {platformFeatures.slice(0, 4).map((f) => (
                    <span key={f.name} className="text-[8px] px-1.5 py-0.5 bg-muted/50 rounded-full text-muted-foreground">
                      {f.name}
                    </span>
                  ))}
                  {platformFeatures.length > 4 && (
                    <span className="text-[8px] px-1.5 py-0.5 bg-primary/10 rounded-full text-primary">
                      +{platformFeatures.length - 4}
                    </span>
                  )}
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