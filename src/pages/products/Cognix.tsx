import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Brain, GitBranch, Network, AlertCircle, Workflow, Code, Lightbulb, ArrowRight, ExternalLink, TrendingUp, CheckCircle2, Layers, FileCode, Database, Cpu, Box, CircleDot } from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Codebase Analysis',
    description: 'Analyzes legacy and modern codebases to understand system structures and dependencies.',
  },
  {
    icon: Network,
    title: 'Living Architecture Maps',
    description: 'Builds dynamic maps of systems, services, data flows, and event architectures.',
  },
  {
    icon: AlertCircle,
    title: 'Risk Detection',
    description: 'Identifies design flaws, risks, and improvement opportunities in your architecture.',
  },
  {
    icon: Workflow,
    title: 'Migration Guidance',
    description: 'Guides migrations from monolith to modular monolith, SOA, or microservices.',
  },
];

const useCases = [
  'Legacy system modernization',
  'Architecture documentation',
  'Technical debt assessment',
  'Migration planning',
  'Onboarding acceleration',
  'Code review automation',
];

const metrics = [
  { label: 'Codebase Analyzed', value: '847K', unit: 'LOC' },
  { label: 'Architecture Maps', value: '156', unit: 'Generated' },
  { label: 'Risk Identified', value: '23', unit: 'Issues' },
  { label: 'Migration Score', value: '94.2', unit: '%' },
];

// Architecture graph nodes
const architectureNodes = [
  { id: 'api', label: 'API Gateway', type: 'service', x: 50, y: 15 },
  { id: 'auth', label: 'Auth Service', type: 'service', x: 25, y: 35 },
  { id: 'user', label: 'User Service', type: 'service', x: 50, y: 35 },
  { id: 'order', label: 'Order Service', type: 'service', x: 75, y: 35 },
  { id: 'db1', label: 'User DB', type: 'database', x: 25, y: 60 },
  { id: 'db2', label: 'Order DB', type: 'database', x: 75, y: 60 },
  { id: 'cache', label: 'Redis Cache', type: 'cache', x: 50, y: 60 },
  { id: 'queue', label: 'Message Queue', type: 'queue', x: 50, y: 80 },
];

const connections = [
  { from: 'api', to: 'auth' },
  { from: 'api', to: 'user' },
  { from: 'api', to: 'order' },
  { from: 'auth', to: 'db1' },
  { from: 'user', to: 'db1' },
  { from: 'user', to: 'cache' },
  { from: 'order', to: 'db2' },
  { from: 'order', to: 'cache' },
  { from: 'order', to: 'queue' },
];

const Cognix = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([0, 0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [discoveredConnections, setDiscoveredConnections] = useState<number>(0);

  // Simulate architecture discovery
  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
      setDiscoveredConnections(prev => Math.min(prev + 1, connections.length));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Cycle through nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode(architectureNodes[Math.floor(Math.random() * architectureNodes.length)].id);
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
        Math.round(847 * eased),
        Math.round(156 * eased),
        Math.round(23 * eased),
        Math.round(94.2 * eased),
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
    { label: 'Code Ingest', icon: Code },
    { label: 'Graph Build', icon: Network },
    { label: 'Pattern Detect', icon: Brain },
    { label: 'Insight Generate', icon: Lightbulb },
  ];

  const chartData = [40, 55, 45, 60, 75, 65, 80, 85, 78, 90, 88, 95];

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'service': return Cpu;
      case 'database': return Database;
      case 'cache': return Box;
      case 'queue': return Layers;
      default: return CircleDot;
    }
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'service': return 'hsl(220, 70%, 55%)';
      case 'database': return 'hsl(145, 60%, 45%)';
      case 'cache': return 'hsl(340, 65%, 55%)';
      case 'queue': return 'hsl(25, 75%, 52%)';
      default: return 'hsl(220, 70%, 55%)';
    }
  };

  return (
    <>
      <Helmet>
        <title>Cognix — Software Cognition & Architecture Intelligence | Cropxon</title>
        <meta name="description" content="AI-powered software cognition platform that understands existing codebases, architectures, and business workflows at a system level." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(220 70% 55% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Software Cognition Platform</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
                    COGNIX
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4">
                    Software Cognition & Architecture Intelligence
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg">
                    AI-powered platform that understands existing codebases, architectures, and business workflows at a system level. Acts as an architectural reasoning assistant, not just a code generator.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Button size="lg" className="group w-full sm:w-auto" asChild>
                      <a href="https://getcognix.io" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="https://getcognix.io" target="_blank" rel="noopener noreferrer">
                        Visit getcognix.io
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for CTOs, Architects, Senior Developers, Platform Teams
                  </p>
                </div>

                {/* Right - Live Dashboard */}
                <div className="relative p-4 sm:p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(220, 70%, 55%)' }}>
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-foreground">Live System Analysis</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] sm:text-xs text-muted-foreground">Processing</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className="p-2 sm:p-3 bg-muted/30 rounded-xl border border-border/20">
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-display text-lg sm:text-xl font-bold text-foreground">
                          {animatedMetrics[index]}{metric.unit === '%' ? '%' : ''}
                          {metric.unit !== '%' && <span className="text-[10px] sm:text-xs text-muted-foreground ml-1">{metric.unit}</span>}
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
                            backgroundColor: 'hsl(220, 70%, 55%)',
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
                                backgroundColor: isActive ? 'hsl(220, 70%, 55%)' : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? '0 8px 32px hsl(220 70% 55% / 0.5)' : 'none',
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
                                  backgroundColor: 'hsl(220, 70%, 55%)',
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

          {/* Architecture Graph Visualization */}
          <section className="py-16 sm:py-20 lg:py-24 bg-muted/20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-16">
                <p className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-widest mb-3 sm:mb-4">
                  Live Architecture Discovery
                </p>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  System Cognition in Action
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                  Watch Cognix understand your codebase and build living architecture maps in real-time
                </p>
              </div>

              {/* Architecture Graph */}
              <div className="relative max-w-4xl mx-auto">
                <div className="relative bg-card/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-border/40 p-4 sm:p-6 lg:p-8 overflow-hidden" style={{ minHeight: '400px' }}>
                  {/* Background grid */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id="arch-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#arch-grid)" />
                    </svg>
                  </div>

                  {/* Scan progress bar */}
                  <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] sm:text-xs font-mono text-primary">Analyzing Architecture...</span>
                      <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">{scanProgress}%</span>
                    </div>
                    <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{ width: `${scanProgress}%`, backgroundColor: 'hsl(220, 70%, 55%)' }}
                      />
                    </div>
                  </div>

                  {/* SVG for connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: '60px' }}>
                    {connections.slice(0, discoveredConnections).map((conn, index) => {
                      const fromNode = architectureNodes.find(n => n.id === conn.from);
                      const toNode = architectureNodes.find(n => n.id === conn.to);
                      if (!fromNode || !toNode) return null;

                      const isActiveConnection = activeNode === conn.from || activeNode === conn.to;

                      return (
                        <line
                          key={index}
                          x1={`${fromNode.x}%`}
                          y1={`${fromNode.y}%`}
                          x2={`${toNode.x}%`}
                          y2={`${toNode.y}%`}
                          stroke={isActiveConnection ? 'hsl(220, 70%, 55%)' : 'hsl(var(--border))'}
                          strokeWidth={isActiveConnection ? 2 : 1}
                          strokeDasharray={isActiveConnection ? '0' : '4,4'}
                          className="transition-all duration-500"
                          style={{
                            opacity: isActiveConnection ? 1 : 0.5,
                          }}
                        />
                      );
                    })}
                  </svg>

                  {/* Architecture Nodes */}
                  <div className="relative w-full" style={{ height: '320px', marginTop: '60px' }}>
                    {architectureNodes.map((node) => {
                      const NodeIcon = getNodeIcon(node.type);
                      const nodeColor = getNodeColor(node.type);
                      const isActive = activeNode === node.id;

                      return (
                        <div
                          key={node.id}
                          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer ${
                            isActive ? 'scale-110 z-10' : 'hover:scale-105'
                          }`}
                          style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                          }}
                          onMouseEnter={() => setActiveNode(node.id)}
                          onMouseLeave={() => setActiveNode(null)}
                        >
                          <div
                            className="flex flex-col items-center gap-1 sm:gap-2"
                          >
                            <div
                              className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500`}
                              style={{
                                backgroundColor: isActive ? nodeColor : `${nodeColor.replace(')', ' / 0.2)')}`,
                                boxShadow: isActive ? `0 8px 32px ${nodeColor.replace(')', ' / 0.4)')}` : 'none',
                                border: `2px solid ${isActive ? nodeColor : 'transparent'}`,
                              }}
                            >
                              <NodeIcon className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors ${isActive ? 'text-white' : ''}`} style={{ color: isActive ? 'white' : nodeColor }} />
                            </div>
                            <span className={`text-[9px] sm:text-xs font-medium text-center whitespace-nowrap transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {node.label}
                            </span>
                          </div>

                          {/* Pulse effect when active */}
                          {isActive && (
                            <div
                              className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl animate-ping"
                              style={{
                                backgroundColor: nodeColor,
                                opacity: 0.3,
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 pt-4 border-t border-border/30">
                    {[
                      { type: 'service', label: 'Service' },
                      { type: 'database', label: 'Database' },
                      { type: 'cache', label: 'Cache' },
                      { type: 'queue', label: 'Queue' },
                    ].map(item => (
                      <div key={item.type} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded"
                          style={{ backgroundColor: getNodeColor(item.type) }}
                        />
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats below */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-card/60 rounded-xl border border-border/40">
                    <p className="font-display text-xl sm:text-2xl font-bold text-foreground">{architectureNodes.length}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Components Found</p>
                  </div>
                  <div className="text-center p-4 bg-card/60 rounded-xl border border-border/40">
                    <p className="font-display text-xl sm:text-2xl font-bold text-foreground">{discoveredConnections}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Connections Mapped</p>
                  </div>
                  <div className="text-center p-4 bg-card/60 rounded-xl border border-border/40">
                    <p className="font-display text-xl sm:text-2xl font-bold text-foreground">4</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Layer Types</p>
                  </div>
                </div>
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
                  Cognix provides comprehensive software understanding and architectural intelligence
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
                        style={{ backgroundColor: 'hsl(220 70% 55% / 0.1)' }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'hsl(220, 70%, 55%)' }} />
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
                    Cognix helps organizations understand and evolve their software systems with AI-powered insights.
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
                      <span className="text-xs sm:text-sm text-muted-foreground">System Understanding</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '94%', backgroundColor: 'hsl(220, 70%, 55%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-muted-foreground">Pattern Recognition</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '87%', backgroundColor: 'hsl(220, 70%, 55%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-muted-foreground">Architecture Health</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-foreground">78%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '78%', backgroundColor: 'hsl(220, 70%, 55%)' }} />
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
                Ready to understand your codebase?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
                Start analyzing your software architecture with Cognix today.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="https://getcognix.io" target="_blank" rel="noopener noreferrer">
                  Get Started with Cognix
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

export default Cognix;
