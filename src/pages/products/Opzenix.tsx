import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Settings, Workflow, Server, Shield, Brain, Code, Layers, Rocket, ArrowRight, ExternalLink, CheckCircle2, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'CI/CD Orchestration',
    description: 'Complete pipeline orchestration for continuous integration and deployment.',
  },
  {
    icon: Server,
    title: 'Infra Management',
    description: 'Comprehensive infrastructure and environment management at scale.',
  },
  {
    icon: Shield,
    title: 'Security Automation',
    description: 'Automated security and compliance workflows integrated into your pipeline.',
  },
  {
    icon: Brain,
    title: 'ML Lifecycle',
    description: 'End-to-end ML and LLM lifecycle management for AI-powered operations.',
  },
];

const useCases = [
  'DevOps automation',
  'DevSecOps integration',
  'MLOps workflows',
  'AIOps intelligence',
  'LLMOps management',
  'Runtime governance',
];

const metrics = [
  { label: 'Active Pipelines', value: '347', unit: '' },
  { label: 'Deployments/Day', value: '1,240', unit: '' },
  { label: 'Infra Managed', value: '2.4K', unit: '' },
  { label: 'MTTR', value: '4.2', unit: 'm' },
];

const Opzenix = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState<number[]>([0, 0, 0, 0]);
  const [chartProgress, setChartProgress] = useState(0);
  const [flowIndex, setFlowIndex] = useState(0);

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
        Math.round(347 * eased),
        Math.round(1240 * eased),
        Math.round(2400 * eased),
        Math.round(4.2 * eased * 10) / 10,
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
    { label: 'Code Commit', icon: Code },
    { label: 'Build & Test', icon: Layers },
    { label: 'Security Scan', icon: Shield },
    { label: 'Deploy', icon: Rocket },
  ];

  const chartData = [85, 92, 88, 95, 91, 97, 94, 99, 96, 98, 97, 99];

  return (
    <>
      <Helmet>
        <title>OpZeniX — DevOps · DevSecOps · MLOps · AIOps · LLMOps | Cropxon</title>
        <meta name="description" content="Intelligent operations and execution platform for modern software and AI systems." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(260 60% 58% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                    <Settings className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Intelligent Operations Platform</span>
                  </div>

                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 text-foreground">
                    OPZENIX
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                    DevOps · DevSecOps · MLOps · AIOps · LLMOps
                  </p>
                  <p className="text-base text-muted-foreground mb-8 max-w-lg">
                    Intelligent operations and execution platform for modern software and AI systems. Unifies CI/CD, infrastructure, security, and ML lifecycle management.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button size="lg" className="group" asChild>
                      <a href="https://opzenix.com" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://opzenix.com" target="_blank" rel="noopener noreferrer">
                        Visit opzenix.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for Platform Engineers, DevOps Teams, ML Engineers, Enterprise IT
                  </p>
                </div>

                {/* Right - Live Dashboard */}
                <div className="relative p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(260, 60%, 58%)' }}>
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">Operations Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-muted-foreground">All Systems Operational</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className="p-3 bg-muted/30 rounded-xl border border-border/20">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-display text-xl font-bold text-foreground">
                          {index === 1 ? animatedMetrics[index].toLocaleString() : 
                           index === 2 ? `${(animatedMetrics[index] / 1000).toFixed(1)}K` : 
                           animatedMetrics[index]}
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
                            backgroundColor: 'hsl(260, 60%, 58%)',
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
                                backgroundColor: isActive ? 'hsl(260, 60%, 58%)' : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? '0 8px 32px hsl(260 60% 58% / 0.5)' : 'none',
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
                                  backgroundColor: 'hsl(260, 60%, 58%)',
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

          {/* Features Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Key Capabilities
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  OpZeniX provides comprehensive operations and execution capabilities
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
                        style={{ backgroundColor: 'hsl(260 60% 58% / 0.1)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'hsl(260, 60%, 58%)' }} />
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
                    OpZeniX unifies all your operational needs into a single intelligent platform.
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
                      <span className="text-sm text-muted-foreground">Pipeline Health</span>
                      <span className="font-mono text-sm font-bold text-foreground">97%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '97%', backgroundColor: 'hsl(260, 60%, 58%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Deployment Success</span>
                      <span className="font-mono text-sm font-bold text-foreground">99%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '99%', backgroundColor: 'hsl(260, 60%, 58%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Security Score</span>
                      <span className="font-mono text-sm font-bold text-foreground">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '94%', backgroundColor: 'hsl(260, 60%, 58%)' }} />
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
                Ready to unify your operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Start streamlining your DevOps, MLOps, and AIOps with OpZeniX today.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="https://opzenix.com" target="_blank" rel="noopener noreferrer">
                  Get Started with OpZeniX
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

export default Opzenix;
