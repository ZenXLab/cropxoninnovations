import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Users, Network, Target, BarChart3, Brain, Lightbulb, ArrowRight, ExternalLink, CheckCircle2, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'HRMS & Payroll',
    description: 'Complete HR management with payroll, attendance, and compliance automation.',
  },
  {
    icon: Network,
    title: 'Org Structure',
    description: 'Dynamic organizational structure and role management with visual hierarchy.',
  },
  {
    icon: Target,
    title: 'Skill Mapping',
    description: 'Comprehensive skill and capability mapping for workforce optimization.',
  },
  {
    icon: BarChart3,
    title: 'Workforce Analytics',
    description: 'Deep insights into workforce performance, trends, and optimization opportunities.',
  },
];

const useCases = [
  'Enterprise HR management',
  'Workforce planning',
  'Skills gap analysis',
  'Performance management',
  'Organizational design',
  'Talent acquisition',
];

const metrics = [
  { label: 'Active Employees', value: '8,420', unit: '' },
  { label: 'Skills Mapped', value: '2,847', unit: '' },
  { label: 'Roles Optimized', value: '456', unit: '' },
  { label: 'Retention Rate', value: '94.8', unit: '%' },
];

const Huminex = () => {
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
        Math.round(8420 * eased),
        Math.round(2847 * eased),
        Math.round(456 * eased),
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
    { label: 'People Data', icon: Users },
    { label: 'Org Map', icon: Network },
    { label: 'Skill Graph', icon: Brain },
    { label: 'Insights', icon: Lightbulb },
  ];

  const chartData = [75, 82, 78, 85, 88, 84, 90, 87, 92, 89, 94, 91];

  return (
    <>
      <Helmet>
        <title>Huminex — Workforce OS & Human Intelligence | Cropxon</title>
        <meta name="description" content="Modern workforce operating system that manages people, roles, skills, and organizational intelligence." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(340 65% 55% / 0.15) 0%, transparent 60%)'
              }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Workforce Operating System</span>
                  </div>

                  <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 text-foreground">
                    HUMINEX
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                    Workforce OS & Human Intelligence
                  </p>
                  <p className="text-base text-muted-foreground mb-8 max-w-lg">
                    Modern workforce operating system that manages people, roles, skills, and organizational intelligence. Aligns people with systems and work for maximum productivity.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button size="lg" className="group" asChild>
                      <a href="https://gethuminex.com" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://gethuminex.com" target="_blank" rel="noopener noreferrer">
                        Visit gethuminex.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Built for HR Teams, Founders, Operations Leaders, Enterprises
                  </p>
                </div>

                {/* Right - Live Dashboard */}
                <div className="relative p-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/40 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(340, 65%, 55%)' }}>
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">Workforce Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-muted-foreground">Live Sync</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {metrics.map((metric, index) => (
                      <div key={metric.label} className="p-3 bg-muted/30 rounded-xl border border-border/20">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className="font-display text-xl font-bold text-foreground">
                          {index === 0 ? animatedMetrics[index].toLocaleString() : animatedMetrics[index]}
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
                            backgroundColor: 'hsl(340, 65%, 55%)',
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
                                backgroundColor: isActive ? 'hsl(340, 65%, 55%)' : 'hsl(var(--muted))',
                                boxShadow: isCurrent ? '0 8px 32px hsl(340 65% 55% / 0.5)' : 'none',
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
                                  backgroundColor: 'hsl(340, 65%, 55%)',
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

          {/* Org Chart Visualization */}
          <section className="py-16 sm:py-20 border-b border-border/30 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
              <div className="text-center mb-10 sm:mb-12">
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Live Organizational Intelligence
                </p>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Dynamic Org Structure
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
                  Visualize your organization's hierarchy, skills, and team dynamics
                </p>
              </div>

              {/* Org Chart */}
              <div className="relative p-6 sm:p-8 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-muted-foreground">Real-time Org Sync</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">248 Active Members</span>
                </div>

                {/* Hierarchical Org Chart */}
                <div className="flex flex-col items-center gap-6">
                  {/* CEO Level */}
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl rounded-2xl border border-primary/30 text-center">
                      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-2 ring-4 ring-primary/20">
                        <Users className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <p className="text-xs font-bold text-foreground">CEO</p>
                      <p className="text-[10px] text-muted-foreground">Leadership</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-6 bg-border/50" />
                  </div>

                  {/* C-Suite Level */}
                  <div className="relative w-full max-w-3xl">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-0 w-3/4 h-px bg-border/50" />
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { role: 'CTO', dept: 'Technology', count: 64, color: 'hsl(220, 70%, 55%)' },
                        { role: 'COO', dept: 'Operations', count: 89, color: 'hsl(145, 55%, 45%)' },
                        { role: 'CFO', dept: 'Finance', count: 32, color: 'hsl(45, 90%, 50%)' },
                      ].map((exec, i) => (
                        <div key={exec.role} className="relative flex flex-col items-center">
                          <div className="w-px h-4 bg-border/50" />
                          <div className="p-3 bg-card/80 backdrop-blur-xl rounded-xl border border-border/40 text-center w-full">
                            <div 
                              className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-2"
                              style={{ backgroundColor: `${exec.color.replace(')', ' / 0.15)')}` }}
                            >
                              <span className="text-xs font-bold" style={{ color: exec.color }}>{exec.role.charAt(0)}</span>
                            </div>
                            <p className="text-[11px] font-bold text-foreground">{exec.role}</p>
                            <p className="text-[9px] text-muted-foreground">{exec.dept}</p>
                            <div className="mt-2 flex items-center justify-center gap-1">
                              <Users className="w-3 h-3 text-muted-foreground" />
                              <span className="text-[9px] font-mono text-muted-foreground">{exec.count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Level */}
                  <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                      {[
                        { team: 'Engineering', members: 28, skills: ['React', 'Node'], color: 'hsl(220, 70%, 55%)' },
                        { team: 'Product', members: 12, skills: ['Strategy', 'UX'], color: 'hsl(280, 55%, 55%)' },
                        { team: 'Design', members: 8, skills: ['Figma', 'UI'], color: 'hsl(340, 65%, 55%)' },
                        { team: 'Sales', members: 24, skills: ['CRM', 'Lead'], color: 'hsl(145, 55%, 45%)' },
                        { team: 'Marketing', members: 16, skills: ['SEO', 'Ads'], color: 'hsl(25, 75%, 52%)' },
                        { team: 'Support', members: 18, skills: ['Ticket', 'Chat'], color: 'hsl(200, 70%, 50%)' },
                      ].map((team) => (
                        <div 
                          key={team.team} 
                          className="p-3 bg-muted/30 backdrop-blur-xl rounded-xl border border-border/20 hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div 
                              className="w-6 h-6 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${team.color.replace(')', ' / 0.15)')}` }}
                            >
                              <Network className="w-3 h-3" style={{ color: team.color }} />
                            </div>
                            <span className="text-[10px] font-bold text-foreground">{team.team}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            <Users className="w-3 h-3 text-muted-foreground" />
                            <span className="text-[9px] font-mono text-muted-foreground">{team.members} members</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {team.skills.map((skill) => (
                              <span key={skill} className="text-[8px] px-1.5 py-0.5 bg-background/50 rounded text-muted-foreground">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
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
                  Huminex provides comprehensive workforce management and human intelligence
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
                        style={{ backgroundColor: 'hsl(340 65% 55% / 0.1)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'hsl(340, 65%, 55%)' }} />
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
                    Huminex helps organizations manage their most valuable asset — their people.
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
                      <span className="text-sm text-muted-foreground">Team Productivity</span>
                      <span className="font-mono text-sm font-bold text-foreground">86%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '86%', backgroundColor: 'hsl(340, 65%, 55%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Skill Coverage</span>
                      <span className="font-mono text-sm font-bold text-foreground">78%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '78%', backgroundColor: 'hsl(340, 65%, 55%)' }} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Goal Completion</span>
                      <span className="font-mono text-sm font-bold text-foreground">92%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '92%', backgroundColor: 'hsl(340, 65%, 55%)' }} />
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
                Ready to transform your workforce management?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Start managing your workforce intelligently with Huminex today.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="https://gethuminex.com" target="_blank" rel="noopener noreferrer">
                  Get Started with Huminex
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

export default Huminex;
