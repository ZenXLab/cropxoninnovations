import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Boxes, Activity, Network, Lock, Cloud, Brain, Lightbulb, ArrowRight, ExternalLink, CheckCircle2, TrendingUp, Zap, Shield, Globe, Database, Eye, Layers, Server, Radio } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Signal Ingestion',
    description: 'Unified signal ingestion across apps, infrastructure, users, and systems in real-time.',
  },
  {
    icon: Network,
    title: 'Cross-Layer Correlation',
    description: 'Correlate user journeys to service to infrastructure for complete visibility.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Access',
    description: 'Zero-Trust aligned data access and intelligence flows for maximum security.',
  },
  {
    icon: Cloud,
    title: 'Hybrid Cloud Ready',
    description: 'Designed for hybrid and multi-cloud environments from the ground up.',
  },
];

const useCases = [
  'Real-time system observability',
  'Incident detection & response',
  'Compliance & audit trails',
  'Performance optimization',
  'Security monitoring',
  'Digital experience intelligence',
];

const industries = [
  { name: 'Banking & Finance', icon: Database },
  { name: 'Insurance', icon: Shield },
  { name: 'Telecom', icon: Radio },
  { name: 'Government', icon: Globe },
  { name: 'Healthcare', icon: Eye },
  { name: 'Critical Infrastructure', icon: Server },
];

const metrics = [
  { label: 'Signals/sec', value: 4200000, displayValue: '4.2M', unit: '' },
  { label: 'Data Correlated', value: 847, displayValue: '847', unit: 'TB' },
  { label: 'Incidents Detected', value: 156, displayValue: '156', unit: '' },
  { label: 'Zero-Trust Score', value: 99.2, displayValue: '99.2', unit: '%' },
];

// Signal node for the visualization
interface SignalNode {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  layer: 'user' | 'app' | 'service' | 'infra';
  active: boolean;
  pulseDelay: number;
}

const Traceflow = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([0, 0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);
  const [signalNodes, setSignalNodes] = useState<SignalNode[]>([]);
  const [activeLayer, setActiveLayer] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize signal nodes
  useEffect(() => {
    const nodes: SignalNode[] = [];
    const layers = ['user', 'app', 'service', 'infra'] as const;
    
    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < 6; i++) {
        nodes.push({
          id: layerIndex * 6 + i,
          x: 10 + Math.random() * 20,
          y: 15 + layerIndex * 22 + Math.random() * 10,
          targetX: 70 + Math.random() * 20,
          targetY: 15 + layerIndex * 22 + Math.random() * 10,
          layer,
          active: false,
          pulseDelay: Math.random() * 2,
        });
      }
    });
    setSignalNodes(nodes);
  }, []);

  // Animate layer highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLayer(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
        Math.round(4.2 * eased * 10) / 10,
        Math.round(847 * eased),
        Math.round(156 * eased),
        Math.round(99.2 * eased * 10) / 10,
      ]);
      setChartProgress(eased);

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlowIndex(prev => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    { label: 'Signal Capture', icon: Activity },
    { label: 'Correlate', icon: Network },
    { label: 'Reason', icon: Brain },
    { label: 'Intelligence', icon: Lightbulb },
  ];

  const chartData = [65, 72, 68, 78, 82, 75, 88, 92, 85, 95, 91, 98];
  const layerColors = ['hsl(200, 70%, 60%)', 'hsl(200, 70%, 50%)', 'hsl(200, 70%, 40%)', 'hsl(200, 70%, 30%)'];
  const layerNames = ['User Layer', 'Application Layer', 'Service Layer', 'Infrastructure Layer'];

  return (
    <>
      <Helmet>
        <title>TraceFlow — Digital Cognition & Infrastructure Intelligence | Cropxon</title>
        <meta name="description" content="Unifies every digital signal into a single, trusted intelligence layer for mission-critical systems." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(200 70% 50% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                    <Boxes className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Digital Cognition Platform</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
                    TRACEFLOW
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4">
                    Every Signal. One Intelligence.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg">
                    TraceFlow unifies every digital signal into a single, trusted intelligence layer for mission-critical systems. Built for banks, insurance, telecom, government, and critical infrastructure.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Button size="lg" className="group w-full sm:w-auto" asChild>
                      <a href="https://traceflow.cropxon.com" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="https://traceflow.cropxon.com" target="_blank" rel="noopener noreferrer">
                        Visit traceflow.cropxon.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for regulated industries requiring mission-critical observability
                  </p>
                </div>

                {/* Right - Live Dashboard */}
                <div className="relative p-4 sm:p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(200, 70%, 50%)' }}>
                      <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-foreground">Signal Intelligence</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] sm:text-xs text-muted-foreground">Live Correlation</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className="p-2 sm:p-3 bg-muted/30 rounded-xl border border-border/20">
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-display text-lg sm:text-xl font-bold text-foreground">
                          {index === 0 ? `${animatedMetrics[index]}M` : animatedMetrics[index]}
                          {metric.unit && <span className="text-[10px] sm:text-xs text-muted-foreground ml-1">{metric.unit}</span>}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="relative h-20 sm:h-24 mb-4 sm:mb-6">
                    <div className="absolute inset-0 flex items-end gap-1">
                      {chartData.map((value, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${value * chartProgress}%`,
                            backgroundColor: 'hsl(200, 70%, 50%)',
                            opacity: 0.3 + (index / chartData.length) * 0.7,
                            transitionDelay: `${index * 30}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Flow Steps */}
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    {flowSteps.map((step, index) => {
                      const StepIcon = step.icon;
                      const isActive = index <= flowIndex;
                      const isCurrent = index === flowIndex;

                      return (
                        <div key={step.label} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                isCurrent ? 'scale-110' : ''
                              }`}
                              style={{
                                backgroundColor: isActive ? 'hsl(200, 70%, 50%)' : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? '0 8px 32px hsl(200 70% 50% / 0.5)' : 'none',
                              }}
                            >
                              <StepIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                            </div>
                            <p className={`text-[8px] sm:text-[10px] mt-1 sm:mt-2 text-center font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {step.label}
                            </p>
                          </div>
                          {index < flowSteps.length - 1 && (
                            <div className="w-4 sm:w-8 h-0.5 bg-border/50 relative overflow-hidden rounded-full">
                              <div
                                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                                style={{
                                  width: index < flowIndex ? '100%' : '0%',
                                  backgroundColor: 'hsl(200, 70%, 50%)',
                                }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Signal Flow Visualization Section - Unique Design */}
          <section className="py-16 sm:py-20 lg:py-24 bg-muted/20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-16">
                <p className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-widest mb-3 sm:mb-4">
                  Signal Intelligence Architecture
                </p>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Cross-Layer Correlation Engine
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                  TraceFlow reasons across signals, not just collecting them — from user interactions to infrastructure telemetry
                </p>
              </div>

              {/* Animated Signal Layers */}
              <div className="relative max-w-4xl mx-auto">
                <div className="relative bg-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-border/40 p-4 sm:p-6 lg:p-8 overflow-hidden">
                  {/* Background grid */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id="signal-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#signal-grid)" />
                    </svg>
                  </div>

                  {/* Layer visualization */}
                  <div className="relative space-y-3 sm:space-y-4">
                    {layerNames.map((name, index) => {
                      const isActiveLayer = activeLayer === index;
                      const Icon = [Eye, Layers, Server, Database][index];
                      
                      return (
                        <div
                          key={name}
                          className={`relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-700 ${
                            isActiveLayer ? 'bg-primary/10 scale-[1.02]' : 'bg-muted/30'
                          }`}
                          style={{
                            borderLeft: `3px solid ${isActiveLayer ? layerColors[index] : 'hsl(var(--border))'}`,
                            boxShadow: isActiveLayer ? `0 4px 24px ${layerColors[index].replace(')', ' / 0.2)')}` : 'none'
                          }}
                        >
                          {/* Layer Icon */}
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500`}
                            style={{
                              backgroundColor: isActiveLayer ? layerColors[index] : 'hsl(var(--muted))',
                            }}
                          >
                            <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActiveLayer ? 'text-white' : 'text-muted-foreground'}`} />
                          </div>

                          {/* Layer Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-display text-xs sm:text-sm font-semibold transition-colors ${isActiveLayer ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {name}
                            </h4>
                            <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                              {['Clickstream & user interactions', 'Application metrics & traces', 'Microservice communication', 'Cloud & infrastructure telemetry'][index]}
                            </p>
                          </div>

                          {/* Animated signal dots */}
                          <div className="hidden sm:flex items-center gap-2">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300`}
                                style={{
                                  backgroundColor: isActiveLayer ? layerColors[index] : 'hsl(var(--muted))',
                                  opacity: isActiveLayer ? 1 - i * 0.15 : 0.3,
                                  transform: isActiveLayer ? `scale(${1 - i * 0.1})` : 'scale(0.8)',
                                  animation: isActiveLayer ? `pulse 1.5s ease-in-out ${i * 0.1}s infinite` : 'none',
                                }}
                              />
                            ))}
                          </div>

                          {/* Signal flow line */}
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 sm:w-20 h-0.5 overflow-hidden rounded-full hidden lg:block">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ${isActiveLayer ? 'animate-flow' : ''}`}
                              style={{
                                backgroundColor: layerColors[index],
                                width: isActiveLayer ? '100%' : '0%',
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}

                    {/* Central correlation indicator */}
                    <div className="absolute right-0 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center relative">
                        <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-primary uppercase tracking-wider">Correlating</span>
                    </div>
                  </div>

                  {/* Bottom stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/30">
                    <div className="text-center">
                      <p className="font-display text-lg sm:text-2xl font-bold text-foreground">99%</p>
                      <p className="text-[9px] sm:text-xs text-muted-foreground">Signal Coverage</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-lg sm:text-2xl font-bold text-foreground">97%</p>
                      <p className="text-[9px] sm:text-xs text-muted-foreground">Correlation Accuracy</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-lg sm:text-2xl font-bold text-foreground">&lt;50ms</p>
                      <p className="text-[9px] sm:text-xs text-muted-foreground">Processing Latency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes flow {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              .animate-flow {
                animation: flow 2s linear infinite;
              }
            `}</style>
          </section>

          {/* Trusted Industries - Glassmorphism Style */}
          <section className="py-12 sm:py-16 border-b border-border/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <p className="text-center text-xs sm:text-sm text-muted-foreground font-mono uppercase tracking-wider mb-6 sm:mb-8">
                Built for Regulated Industries
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  const colors = [
                    'hsl(220, 70%, 55%)',
                    'hsl(175, 60%, 45%)',
                    'hsl(340, 65%, 55%)',
                    'hsl(145, 55%, 45%)',
                    'hsl(25, 75%, 52%)',
                    'hsl(280, 55%, 55%)',
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div
                      key={industry.name}
                      className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-border/20 backdrop-blur-xl transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${color.replace(')', ' / 0.08)')}, hsl(var(--card) / 0.6))`,
                      }}
                    >
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center backdrop-blur-xl border border-border/30"
                        style={{
                          background: `linear-gradient(135deg, ${color.replace(')', ' / 0.2)')}, transparent)`,
                          boxShadow: `0 8px 32px ${color.replace(')', ' / 0.15)')}`,
                        }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color }} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-center font-medium text-foreground/80">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Key Capabilities
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                  TraceFlow provides enterprise-grade observability with zero-trust security
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="p-5 sm:p-6 bg-card rounded-xl sm:rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                        style={{ backgroundColor: 'hsl(200 70% 50% / 0.1)' }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'hsl(200, 70%, 50%)' }} />
                      </div>
                      <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-16 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                    Use Cases
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                    TraceFlow provides ground-truth signals and feeds real-world intelligence into your operational decisions.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {useCases.map((useCase, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                        <span className="text-sm sm:text-base text-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 sm:p-8 bg-card rounded-xl sm:rounded-2xl border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">Platform Impact</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-muted-foreground">Signal Coverage</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground">99%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '99%', backgroundColor: 'hsl(200, 70%, 50%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-muted-foreground">Correlation Accuracy</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground">97%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '97%', backgroundColor: 'hsl(200, 70%, 50%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-muted-foreground">System Health</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '94%', backgroundColor: 'hsl(200, 70%, 50%)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Every Signal. One Intelligence.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
                Deploy TraceFlow and gain complete visibility into your mission-critical systems.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="https://traceflow.cropxon.com" target="_blank" rel="noopener noreferrer">
                  Get Started with TraceFlow
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

export default Traceflow;
