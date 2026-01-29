import { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, DollarSign, BookOpen, Brain, FileText, Layers, ArrowRight, ExternalLink, Heart, ListTodo, ShoppingCart, Wallet, Calendar, Archive } from 'lucide-react';

const features = [
  {
    icon: ListTodo,
    title: 'Todos & Notes',
    description: 'Capture tasks, notes, and ideas in one unified space. Never forget anything important.',
  },
  {
    icon: DollarSign,
    title: 'Finance Tracking',
    description: 'Track personal finances, expenses, and networth all in one place.',
  },
  {
    icon: BookOpen,
    title: 'Study Management',
    description: 'Organize study materials, track progress, and manage learning goals.',
  },
  {
    icon: Heart,
    title: 'Personal Memories',
    description: 'Store and cherish personal memories, photos, and life moments.',
  },
];

const useCases = [
  'Personal task management',
  'Life organization',
  'Finance tracking',
  'Study and learning',
  'Grocery and shopping lists',
  'Memory journaling',
];

const metrics = [
  { label: 'Tasks Tracked', value: '12.4K', unit: 'Tasks' },
  { label: 'Notes Created', value: '8,420', unit: 'Notes' },
  { label: 'Memories Saved', value: '3,240', unit: 'Memories' },
  { label: 'Life Score', value: '94.8', unit: '%' },
];

const Chronyx = () => {
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
        Math.round(12.4 * eased * 10) / 10,
        Math.round(8420 * eased),
        Math.round(3240 * eased),
        Math.round(94.8 * eased),
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
    { label: 'Capture', icon: FileText },
    { label: 'Organize', icon: Layers },
    { label: 'Track', icon: Clock },
    { label: 'Remember', icon: Brain },
  ];

  const chartData = [50, 62, 58, 72, 68, 78, 82, 75, 88, 92, 85, 95];

  return (
    <>
      <SEOHead
        title="Chronyx — Personal Quiet Space (PQS) · Life Management Platform"
        description="All personal details at one place including Todos, Finance, Study, Note Taking, Grocery Lists, Networth, Personal Memories. Your Personal Quiet Space."
        keywords="personal management, life organization, todo app, finance tracking, note taking, memory journal, personal space, OriginX Chronyx"
        url="https://originxlabs.com/chronyx"
        type="product"
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(190 70% 50% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-medium text-cyan-500">Personal Quiet Space</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full font-mono font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-2">NEW</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
                    CHRONYX
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4">
                    Personal Quiet Space (PQS)
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-lg">
                    All Personal details at one place including Todos, Finance, Study, Note Taking, Grocery Lists, Networth, Personal Memories.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Button size="lg" className="group w-full sm:w-auto" asChild>
                      <a href="https://www.getchronyx.com" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                      <a href="https://www.getchronyx.com" target="_blank" rel="noopener noreferrer">
                        Visit getchronyx.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for Individuals, Professionals, Students, Families
                  </p>
                </div>

                {/* Right - Live Dashboard */}
                <div className="relative p-4 sm:p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(190, 70%, 50%)' }}>
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-foreground">Life Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] sm:text-xs text-muted-foreground">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-muted/30 rounded-xl border border-border/20">
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Tasks Tracked</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-foreground">{animatedMetrics[0]}K</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-muted/30 rounded-xl border border-border/20">
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Notes Created</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-foreground">{animatedMetrics[1].toLocaleString()}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-muted/30 rounded-xl border border-border/20">
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Memories Saved</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-foreground">{animatedMetrics[2].toLocaleString()}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-muted/30 rounded-xl border border-border/20">
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Life Score</p>
                      <p className="font-display text-lg sm:text-xl font-bold text-foreground">{animatedMetrics[3]}%</p>
                    </div>
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
                            backgroundColor: 'hsl(190, 70%, 50%)',
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
                                backgroundColor: isActive ? 'hsl(190, 70%, 50%)' : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? '0 8px 32px hsl(190 70% 50% / 0.5)' : 'none',
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
                                  backgroundColor: 'hsl(190, 70%, 50%)',
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
          <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-16">
                <p className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-widest mb-3 sm:mb-4">
                  Core Capabilities
                </p>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Your Personal Quiet Space
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to organize your life in one place
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'hsl(190, 70%, 50% / 0.15)' }}>
                        <Icon className="w-6 h-6" style={{ color: 'hsl(190, 70%, 50%)' }} />
                      </div>
                      <h3 className="font-display text-sm font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="font-mono text-[10px] sm:text-xs text-primary uppercase tracking-widest mb-3 sm:mb-4">
                    Use Cases
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                    Organize Every Aspect of Life
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Chronyx adapts to your personal needs and lifestyle.
                  </p>
                  <ul className="space-y-3">
                    {useCases.map((useCase, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative p-6 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40">
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="p-4 bg-muted/30 rounded-xl text-center">
                        <p className="font-display text-2xl font-bold text-foreground">{metric.value}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 lg:py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Organize Your Life?
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
                Start your Personal Quiet Space journey today.
              </p>
              <Button size="lg" asChild>
                <a href="https://www.getchronyx.com" target="_blank" rel="noopener noreferrer">
                  Get Started with Chronyx
                  <ArrowRight className="w-4 h-4 ml-2" />
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

export default Chronyx;