import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Layers, AlertCircle, TrendingUp, Workflow, BarChart3, FileSearch, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Test Generation',
    description: 'Generates and manages automated test suites intelligently based on your codebase.',
  },
  {
    icon: AlertCircle,
    title: 'Regression Detection',
    description: 'Detects regressions, flaky tests, and failure patterns before they reach production.',
  },
  {
    icon: TrendingUp,
    title: 'Pattern Learning',
    description: 'Learns from pipeline and production failures to continuously improve quality.',
  },
  {
    icon: Workflow,
    title: 'CI/CD Integration',
    description: 'Integrates seamlessly with your CI/CD pipelines for continuous quality feedback.',
  },
];

const useCases = [
  'Automated test suite generation',
  'Regression detection and prevention',
  'Flaky test identification and fixes',
  'Quality metrics and reporting',
  'Pipeline optimization',
  'Production failure analysis',
];

const metrics = [
  { label: 'Tests Automated', value: '12.4K', unit: '' },
  { label: 'Regressions Caught', value: '234', unit: '' },
  { label: 'Flaky Tests Fixed', value: '89', unit: '' },
  { label: 'Quality Score', value: '98.7', unit: '%' },
];

// Heatmap data for test coverage visualization
const heatmapModules = [
  { name: 'Auth', tests: 48, passed: 47, coverage: 98 },
  { name: 'API', tests: 124, passed: 121, coverage: 94 },
  { name: 'UI', tests: 89, passed: 86, coverage: 91 },
  { name: 'DB', tests: 67, passed: 65, coverage: 95 },
  { name: 'Core', tests: 156, passed: 154, coverage: 99 },
  { name: 'Utils', tests: 34, passed: 34, coverage: 100 },
  { name: 'Events', tests: 45, passed: 42, coverage: 88 },
  { name: 'Cache', tests: 28, passed: 27, coverage: 96 },
  { name: 'Queue', tests: 52, passed: 50, coverage: 93 },
  { name: 'Webhook', tests: 31, passed: 29, coverage: 87 },
  { name: 'Payment', tests: 78, passed: 76, coverage: 97 },
  { name: 'Email', tests: 23, passed: 23, coverage: 100 },
];

const Qualyx = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([0, 0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);
  const [heatmapProgress, setHeatmapProgress] = useState(0);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [scanningIndex, setScanningIndex] = useState(0);

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
        Math.round(234 * eased),
        Math.round(89 * eased),
        Math.round(98.7 * eased),
      ]);
      setChartProgress(eased);
      setHeatmapProgress(eased);

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

  // Scanning animation for heatmap
  useEffect(() => {
    const timer = setInterval(() => {
      setScanningIndex(prev => (prev + 1) % heatmapModules.length);
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const flowSteps = [
    { label: 'Test Suite', icon: Layers },
    { label: 'Run Pipeline', icon: Workflow },
    { label: 'Analyze Results', icon: BarChart3 },
    { label: 'Quality Report', icon: FileSearch },
  ];

  const chartData = [92, 88, 94, 91, 96, 93, 97, 95, 98, 96, 99, 98];

  const getHeatColor = (coverage: number, isActive: boolean, isScanning: boolean) => {
    if (isScanning) return 'hsl(175, 70%, 50%)';
    if (coverage >= 98) return isActive ? 'hsl(145, 70%, 50%)' : 'hsl(145, 60%, 45%)';
    if (coverage >= 93) return isActive ? 'hsl(80, 70%, 50%)' : 'hsl(80, 55%, 45%)';
    if (coverage >= 88) return isActive ? 'hsl(45, 80%, 55%)' : 'hsl(45, 70%, 50%)';
    return isActive ? 'hsl(15, 80%, 55%)' : 'hsl(15, 70%, 50%)';
  };

  return (
    <>
      <Helmet>
        <title>Qualyx — QA Automation & Quality Intelligence | Cropxon</title>
        <meta name="description" content="Intelligent QA automation platform that transforms testing into a continuous quality feedback system." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(175 60% 45% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Quality Intelligence Platform</span>
                  </div>

                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 text-foreground">
                    QUALYX
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                    QA Automation & Quality Intelligence
                  </p>
                  <p className="text-base text-muted-foreground mb-8 max-w-lg">
                    Intelligent QA automation platform that transforms testing into a continuous quality feedback system. Provides actionable quality insights, not just test results.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button size="lg" className="group" asChild>
                      <a href="https://getqualyx.com" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://getqualyx.com" target="_blank" rel="noopener noreferrer">
                        Visit getqualyx.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for QA Teams, SDETs, Engineering Teams, DevOps Teams
                  </p>
                </div>

                {/* Right - Live Dashboard */}
                <div className="relative p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(175, 60%, 45%)' }}>
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">Live Quality Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-muted-foreground">All Tests Passing</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className="p-3 bg-muted/30 rounded-xl border border-border/20">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-display text-xl font-bold text-foreground">
                          {index === 0 ? `${(animatedMetrics[index] / 1000).toFixed(1)}K` : animatedMetrics[index]}
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
                            backgroundColor: 'hsl(175, 60%, 45%)',
                            opacity: 0.3 + (index / chartData.length) * 0.7,
                            transitionDelay: `${index * 30}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Flow Steps */}
                  <div className="flex items-center justify-between gap-2">
                    {flowSteps.map((step, index) => {
                      const StepIcon = step.icon;
                      const isActive = index <= flowIndex;
                      const isCurrent = index === flowIndex;

                      return (
                        <div key={step.label} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                isCurrent ? 'scale-110' : ''
                              }`}
                              style={{
                                backgroundColor: isActive ? 'hsl(175, 60%, 45%)' : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? '0 8px 32px hsl(175 60% 45% / 0.5)' : 'none',
                              }}
                            >
                              <StepIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                            </div>
                            <p className={`text-[10px] mt-2 text-center font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {step.label}
                            </p>
                          </div>
                          {index < flowSteps.length - 1 && (
                            <div className="w-8 h-0.5 bg-border/50 relative overflow-hidden rounded-full">
                              <div
                                className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                                style={{
                                  width: index < flowIndex ? '100%' : '0%',
                                  backgroundColor: 'hsl(175, 60%, 45%)',
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

          {/* Test Pipeline Heatmap Section */}
          <section className="py-16 lg:py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-12">
                <p className="font-display text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.25em] uppercase mb-3">
                  Real-Time Coverage
                </p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Test Pipeline Heatmap
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Visualize test coverage across your entire codebase with intelligent quality scoring
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="p-6 lg:p-8 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Heatmap Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(175, 60%, 45%)' }}>
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-bold text-foreground">Module Coverage Matrix</h3>
                        <p className="text-xs text-muted-foreground">Live scanning in progress...</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(145, 60%, 45%)' }} />
                        <span className="text-[10px] text-muted-foreground">≥98%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(80, 55%, 45%)' }} />
                        <span className="text-[10px] text-muted-foreground">93-97%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(45, 70%, 50%)' }} />
                        <span className="text-[10px] text-muted-foreground">88-92%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(15, 70%, 50%)' }} />
                        <span className="text-[10px] text-muted-foreground">&lt;88%</span>
                      </div>
                    </div>
                  </div>

                  {/* Heatmap Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
                    {heatmapModules.map((module, index) => {
                      const isActive = activeModule === index;
                      const isScanning = scanningIndex === index;
                      const animatedCoverage = Math.round(module.coverage * heatmapProgress);
                      
                      return (
                        <div
                          key={module.name}
                          className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            isActive ? 'scale-105 shadow-lg' : 'hover:scale-102'
                          } ${isScanning ? 'ring-2 ring-offset-2 ring-offset-background ring-[hsl(175,60%,45%)]' : ''}`}
                          style={{
                            backgroundColor: getHeatColor(module.coverage, isActive, isScanning),
                            opacity: 0.15 + (heatmapProgress * 0.85),
                          }}
                          onMouseEnter={() => setActiveModule(index)}
                          onMouseLeave={() => setActiveModule(null)}
                        >
                          {/* Scanning pulse effect */}
                          {isScanning && (
                            <div 
                              className="absolute inset-0 rounded-xl animate-ping"
                              style={{ 
                                backgroundColor: 'hsl(175, 60%, 45%)',
                                opacity: 0.3,
                                animationDuration: '1s'
                              }}
                            />
                          )}
                          
                          <div className="relative z-10">
                            <p className="font-mono text-xs font-bold text-white mb-1 drop-shadow-md">
                              {module.name}
                            </p>
                            <p className="font-display text-2xl font-bold text-white drop-shadow-md">
                              {animatedCoverage}%
                            </p>
                            <p className="text-[10px] text-white/80 mt-1">
                              {Math.round(module.passed * heatmapProgress)}/{Math.round(module.tests * heatmapProgress)} tests
                            </p>
                          </div>
                          
                          {/* Coverage bar */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-xl overflow-hidden">
                            <div 
                              className="h-full bg-white/50 transition-all duration-500"
                              style={{ width: `${animatedCoverage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/30">
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold text-foreground">
                        {Math.round(775 * heatmapProgress)}
                      </p>
                      <p className="text-xs text-muted-foreground">Total Tests</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold" style={{ color: 'hsl(145, 60%, 45%)' }}>
                        {Math.round(754 * heatmapProgress)}
                      </p>
                      <p className="text-xs text-muted-foreground">Passing</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold" style={{ color: 'hsl(45, 70%, 50%)' }}>
                        {Math.round(21 * heatmapProgress)}
                      </p>
                      <p className="text-xs text-muted-foreground">Needs Attention</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold text-foreground">
                        {(94.8 * heatmapProgress).toFixed(1)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Avg Coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Key Capabilities
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Qualyx provides comprehensive quality automation and intelligence
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
                        style={{ backgroundColor: 'hsl(175 60% 45% / 0.1)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'hsl(175, 60%, 45%)' }} />
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
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    Use Cases
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Qualyx helps teams achieve continuous quality with intelligent automation.
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
                      <span className="text-sm text-muted-foreground">Test Coverage</span>
                      <span className="font-mono text-sm font-bold text-foreground">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '92%', backgroundColor: 'hsl(175, 60%, 45%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Pipeline Health</span>
                      <span className="font-mono text-sm font-bold text-foreground">96%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '96%', backgroundColor: 'hsl(175, 60%, 45%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Quality Index</span>
                      <span className="font-mono text-sm font-bold text-foreground">88%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '88%', backgroundColor: 'hsl(175, 60%, 45%)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to transform your testing?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Start automating your QA with Qualyx today.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="https://getqualyx.com" target="_blank" rel="noopener noreferrer">
                  Get Started with Qualyx
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

export default Qualyx;