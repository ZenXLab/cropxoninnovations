import { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Building2, Layers, Code, Workflow, Globe, ArrowRight, ExternalLink, CheckCircle2, TrendingUp, Maximize2, Minimize2, X, FileText, Clock, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'CMS & LMS',
    description: 'Complete content and learning management systems with multi-tenant support.',
  },
  {
    icon: Code,
    title: 'Canvas Builders',
    description: 'Visual canvas-based builders for creating digital experiences without code.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Powerful workflow and automation builders for business process optimization.',
  },
  {
    icon: Globe,
    title: 'API Extensible',
    description: 'Fully extensible via real code and APIs for unlimited customization.',
  },
];

const useCases = [
  'Website and content platforms',
  'Learning management systems',
  'Business workflow automation',
  'Multi-tenant SaaS applications',
  'Digital experience creation',
  'Enterprise content management',
];

const metrics = [
  { label: 'Sites Created', value: '12.4K', unit: '' },
  { label: 'Active Workflows', value: '3,240', unit: '' },
  { label: 'API Calls/hr', value: '8.4M', unit: '' },
  { label: 'Uptime', value: '99.99', unit: '%' },
];

// Z Logo Component
const ZenithLogo = ({ size = 40, spinning = false, className = '' }: { size?: number; spinning?: boolean; className?: string }) => (
  <div 
    className={`relative flex items-center justify-center ${spinning ? 'animate-spin' : ''} ${className}`}
    style={{ width: size, height: size, animationDuration: '3s' }}
  >
    <svg viewBox="0 0 100 100" width={size} height={size}>
      {/* Outer ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="none" 
        stroke="hsl(280, 55%, 55%)" 
        strokeWidth="2" 
        opacity="0.3"
      />
      {/* Z letter */}
      <text 
        x="50" 
        y="65" 
        textAnchor="middle" 
        fill="hsl(280, 55%, 55%)" 
        fontSize="48" 
        fontWeight="bold" 
        fontFamily="system-ui, sans-serif"
      >
        Z
      </text>
      {/* Dot accent */}
      <circle 
        cx="72" 
        cy="28" 
        r="5" 
        fill="hsl(220, 70%, 55%)"
      />
    </svg>
  </div>
);

// Kanban Card Component
const KanbanCard = ({ title, priority, assignee, time }: { title: string; priority: 'high' | 'medium' | 'low'; assignee: string; time: string }) => {
  const priorityColors = {
    high: 'bg-red-500/20 text-red-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    low: 'bg-green-500/20 text-green-400',
  };
  
  return (
    <div className="p-3 bg-card/80 backdrop-blur-xl rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className={`text-[8px] px-1.5 py-0.5 rounded font-mono uppercase ${priorityColors[priority]}`}>
          {priority}
        </span>
        <Clock className="w-3 h-3 text-muted-foreground" />
      </div>
      <p className="text-[10px] font-medium text-foreground mb-2 line-clamp-2">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-[6px] font-bold text-primary">{assignee.charAt(0)}</span>
          </div>
          <span className="text-[8px] text-muted-foreground">{assignee}</span>
        </div>
        <span className="text-[8px] text-muted-foreground">{time}</span>
      </div>
    </div>
  );
};

const ZenithStudio = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([0, 0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [isSpinnerExpanded, setIsSpinnerExpanded] = useState(false);
  const [spinnerRotation, setSpinnerRotation] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedMetrics([
        Math.round(12400 * eased),
        Math.round(3240 * eased),
        Math.round(8400000 * eased),
        Math.round(99.99 * eased * 100) / 100,
      ]);
      setChartProgress(eased);

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpinnerRotation(prev => prev + 1);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const chartData = [55, 62, 58, 68, 72, 78, 82, 85, 88, 92, 95, 98];

  const kanbanColumns = [
    {
      title: 'Backlog',
      color: 'hsl(220, 15%, 50%)',
      cards: [
        { title: 'Design system documentation', priority: 'low' as const, assignee: 'Alex', time: '2d' },
        { title: 'API rate limiting setup', priority: 'medium' as const, assignee: 'Sam', time: '3d' },
      ],
    },
    {
      title: 'In Progress',
      color: 'hsl(220, 70%, 55%)',
      cards: [
        { title: 'User authentication flow', priority: 'high' as const, assignee: 'Jordan', time: '1d' },
        { title: 'Dashboard analytics', priority: 'medium' as const, assignee: 'Casey', time: '2d' },
      ],
    },
    {
      title: 'Review',
      color: 'hsl(45, 90%, 50%)',
      cards: [
        { title: 'Landing page redesign', priority: 'high' as const, assignee: 'Taylor', time: '4h' },
      ],
    },
    {
      title: 'Done',
      color: 'hsl(145, 70%, 45%)',
      cards: [
        { title: 'Payment integration', priority: 'high' as const, assignee: 'Morgan', time: 'Done' },
        { title: 'Email templates', priority: 'low' as const, assignee: 'Riley', time: 'Done' },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Zenith Studio — Business & Content Creation Platform"
        description="Multi-tenant creation platform for building digital business experiences with CMS, LMS, canvas builders, and workflow automation. API extensible for unlimited customization."
        keywords="CMS platform, LMS platform, content management, learning management, workflow automation, no-code builder, multi-tenant SaaS, OriginX Zenith Studio"
        url="https://originxlabs.com/zenith-studio"
        type="product"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(280 55% 55% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                    <ZenithLogo size={16} />
                    <span className="text-xs font-medium text-primary">Business Creation Platform</span>
                  </div>

                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 text-foreground">
                    ZENITH STUDIO
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                    Business & Content Creation Platform
                  </p>
                  <p className="text-base text-muted-foreground mb-8 max-w-lg">
                    Multi-tenant creation platform for building digital business experiences. Scales from startups to enterprises with CMS, LMS, canvas builders, and workflow automation.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button size="lg" className="group" asChild>
                      <a href="https://getzenith.io" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://getzenith.io" target="_blank" rel="noopener noreferrer">
                        Visit getzenith.io
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for Businesses, Creators, Product Teams, Technical & Non-Technical Users
                  </p>
                </div>

                {/* Right - Live Dashboard with Expandable Spinner */}
                <div className="relative p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header with Z Logo Spinner */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="relative cursor-pointer group"
                        onClick={() => setIsSpinnerExpanded(true)}
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-border/30 transition-all duration-300 group-hover:scale-105"
                          style={{ 
                            background: 'linear-gradient(135deg, hsl(280 55% 55% / 0.2), transparent)',
                            transform: `rotate(${spinnerRotation}deg)`,
                          }}
                        >
                          <ZenithLogo size={28} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-card border border-border/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-2 h-2 text-muted-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-bold text-foreground">Platform Dashboard</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs text-muted-foreground">All Services Running</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsSpinnerExpanded(true)}
                      className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Maximize2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className="p-3 bg-muted/30 rounded-xl border border-border/20">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-display text-xl font-bold text-foreground">
                          {index === 0 ? `${(animatedMetrics[index] / 1000).toFixed(1)}K` : 
                           index === 1 ? animatedMetrics[index].toLocaleString() :
                           index === 2 ? `${(animatedMetrics[index] / 1000000).toFixed(1)}M` :
                           animatedMetrics[index].toFixed(2)}
                          {metric.unit && <span className="text-xs text-muted-foreground ml-1">{metric.unit}</span>}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="relative h-24 mb-6">
                    <div className="absolute inset-0 flex items-end gap-1">
                      {chartData.map((value, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${value * chartProgress}%`,
                            backgroundColor: 'hsl(280, 55%, 55%)',
                            opacity: 0.3 + (index / chartData.length) * 0.7,
                            transitionDelay: `${index * 30}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Simple Status Indicators (removed particle flow) */}
                  <div className="flex items-center justify-between gap-2 p-3 bg-muted/20 rounded-xl border border-border/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] text-muted-foreground">Design</span>
                    </div>
                    <div className="flex-1 h-px bg-border/30" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] text-muted-foreground">Build</span>
                    </div>
                    <div className="flex-1 h-px bg-border/30" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] text-muted-foreground">Deploy</span>
                    </div>
                    <div className="flex-1 h-px bg-border/30" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-[10px] text-muted-foreground">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expanded Spinner Modal */}
          <Dialog open={isSpinnerExpanded} onOpenChange={setIsSpinnerExpanded}>
            <DialogContent className="max-w-md p-0 bg-card/95 backdrop-blur-2xl border-border/50 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-lg font-bold text-foreground">Zenith Studio Engine</h3>
                  <button 
                    onClick={() => setIsSpinnerExpanded(false)}
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Minimize2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Large Spinning Logo */}
                <div className="flex flex-col items-center justify-center py-8">
                  <div 
                    className="relative w-32 h-32 flex items-center justify-center"
                    style={{ transform: `rotate(${spinnerRotation}deg)` }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, hsl(280 55% 55% / 0.1), hsl(280 55% 55% / 0.4), hsl(280 55% 55% / 0.1))',
                      }}
                    />
                    <div className="absolute inset-2 rounded-full bg-card" />
                    <ZenithLogo size={64} />
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm font-medium text-foreground mb-1">Processing</p>
                    <p className="text-xs text-muted-foreground">Optimizing platform resources...</p>
                  </div>
                </div>

                {/* Engine Stats */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="p-3 bg-muted/30 rounded-xl text-center">
                    <p className="text-lg font-bold text-foreground">99.9%</p>
                    <p className="text-[9px] text-muted-foreground uppercase">Uptime</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-xl text-center">
                    <p className="text-lg font-bold text-foreground">12ms</p>
                    <p className="text-[9px] text-muted-foreground uppercase">Latency</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-xl text-center">
                    <p className="text-lg font-bold text-foreground">847</p>
                    <p className="text-[9px] text-muted-foreground uppercase">Active</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Project Kanban Board Visualization */}
          <section className="py-16 sm:py-20 border-b border-border/30 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-12">
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Project Management
                </p>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Live Kanban Board
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                  Manage projects, workflows, and team collaboration in real-time
                </p>
              </div>

              {/* Kanban Board */}
              <div className="relative p-4 sm:p-6 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 overflow-x-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <ZenithLogo size={24} />
                    <span className="text-xs font-mono text-muted-foreground">Sprint 24 · Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">6 members</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 min-w-[600px]">
                  {kanbanColumns.map((column) => (
                    <div key={column.title} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: column.color }}
                        />
                        <span className="text-xs font-semibold text-foreground">{column.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-muted/50 rounded text-muted-foreground">
                          {column.cards.length}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {column.cards.map((card, i) => (
                          <KanbanCard key={i} {...card} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Key Capabilities
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zenith Studio provides comprehensive creation and automation tools
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: 'hsl(280 55% 55% / 0.1)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'hsl(280, 55%, 55%)' }} />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    Use Cases
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Zenith Studio empowers teams to build digital experiences without limits.
                  </p>
                  <ul className="space-y-4">
                    {useCases.map((useCase, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-card rounded-2xl border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">Platform Impact</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Platform Load</span>
                      <span className="font-mono text-sm font-bold text-foreground">62%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '62%', backgroundColor: 'hsl(280, 55%, 55%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">API Health</span>
                      <span className="font-mono text-sm font-bold text-foreground">99%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '99%', backgroundColor: 'hsl(280, 55%, 55%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">User Satisfaction</span>
                      <span className="font-mono text-sm font-bold text-foreground">96%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '96%', backgroundColor: 'hsl(280, 55%, 55%)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to build your digital experience?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Start creating with Zenith Studio today.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="https://getzenith.io" target="_blank" rel="noopener noreferrer">
                  Get Started with Zenith Studio
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ZenithStudio;
